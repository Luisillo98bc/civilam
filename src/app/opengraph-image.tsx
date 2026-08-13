import { ImageResponse } from 'next/og';

export const alt = 'CIVILAM — Ingeniería, construcción y saneamiento';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80, color: 'white', background: 'linear-gradient(135deg, #0f172a, #1e3a8a)' }}>
      <div style={{ display: 'flex', color: '#f87171', fontSize: 28, fontWeight: 700, letterSpacing: 8 }}>CIVILAM</div>
      <div style={{ display: 'flex', fontSize: 64, fontWeight: 800, marginTop: 24, maxWidth: 980 }}>Ingeniería civil para proyectos técnicamente ejecutables</div>
      <div style={{ display: 'flex', fontSize: 28, color: '#cbd5e1', marginTop: 28 }}>Construcción · Saneamiento · Expedientes técnicos · Perú</div>
    </div>,
    size,
  );
}
