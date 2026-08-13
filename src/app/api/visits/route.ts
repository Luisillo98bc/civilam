import fs from 'node:fs';
import path from 'node:path';
import { NextResponse } from 'next/server';

const visitKey = encodeURIComponent('civilam:visits:total');

async function incrementRedis() {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL?.replace(/\/$/, '');
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!redisUrl || !redisToken) return null;

  const response = await fetch(`${redisUrl}/incr/${visitKey}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${redisToken}` },
    cache: 'no-store',
  });
  if (!response.ok) throw new Error('Redis visit counter failed');

  const result = await response.json() as { result?: number };
  return Number(result.result || 0);
}

function incrementDevelopmentCounter() {
  if (process.env.NODE_ENV === 'production') return null;

  const directory = path.join(process.cwd(), '.local-data');
  const filePath = path.join(directory, 'visits.json');
  fs.mkdirSync(directory, { recursive: true });

  let count = 0;
  try {
    count = Number(JSON.parse(fs.readFileSync(filePath, 'utf8')).count || 0);
  } catch {
    count = 0;
  }

  count += 1;
  fs.writeFileSync(filePath, JSON.stringify({ count }), 'utf8');
  return count;
}

export async function POST() {
  try {
    const count = await incrementRedis() ?? incrementDevelopmentCounter();
    if (count === null) {
      return NextResponse.json({ error: 'Visit counter is not configured.' }, { status: 503 });
    }
    return NextResponse.json({ count }, { headers: { 'Cache-Control': 'no-store' } });
  } catch {
    return NextResponse.json({ error: 'Unable to register visit.' }, { status: 503 });
  }
}
