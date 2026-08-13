'use client';

import { useEffect, useState } from 'react';

const sessionKey = 'civilam-visit-counted';

export default function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem(sessionKey)) return;

    fetch('/api/visits', { method: 'POST' })
      .then(async (response) => {
        if (!response.ok) return;
        const data = await response.json() as { count?: number };
        if (typeof data.count === 'number') {
          setCount(data.count);
          sessionStorage.setItem(sessionKey, '1');
        }
      })
      .catch(() => undefined);
  }, []);

  if (count === null) return null;

  return (
    <span className="text-[0.68rem] text-[#64748B]" aria-label={`Visitas registradas: ${count}`}>
      Visitas: {count.toLocaleString('es-PE')}
    </span>
  );
}
