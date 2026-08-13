# CIVILAM

Sitio corporativo de CIVILAM construido con Next.js 16, React 19 y Tailwind CSS 4.

## Desarrollo

```bash
npm install
npm run dev
```

El servidor local utiliza `http://localhost:3007`.

## Variables de entorno

Copia `.env.example` como `.env.local` y configura:

- `NEXT_PUBLIC_SITE_URL`: dominio público definitivo, sin barra final.
- `RESEND_API_KEY`: credencial de Resend.
- `CONTACT_EMAIL`: buzón que recibirá formularios y suscripciones.
- `RESEND_FROM_EMAIL`: remitente perteneciente a un dominio verificado.
- `COMPANY_LEGAL_NAME` y `COMPANY_TAX_ID`: datos legales confirmados antes del lanzamiento.
- `UPSTASH_REDIS_REST_URL` y `UPSTASH_REDIS_REST_TOKEN`: opcionales; activan rate limit compartido entre instancias.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: opcional; Analytics solo carga tras el consentimiento.

En desarrollo, los envíos sin credenciales se guardan en `.local-data/`. En producción nunca se guardan en archivos locales y el formulario muestra un error seguro si el correo no está configurado.

## Verificación

```bash
npm run check
```

Ejecuta ESLint, TypeScript, pruebas unitarias y el build de producción.

## Lista previa al lanzamiento

- Confirmar razón social, RUC y domicilio legal en `/privacidad` y `/terminos`.
- Confirmar autorización para publicar cada proyecto, cliente, imagen y logotipo.
- Confirmar datos, fechas, docentes, precios y condiciones de cada capacitación.
- Verificar el dominio remitente y realizar un envío real del formulario y boletín.
- Definir el dominio canónico y redirigir la variante alternativa (`www` o sin `www`).
- Configurar DNS, HTTPS, Search Console y el identificador de Analytics si se utilizará.
- Revisar la inscripción y obligaciones aplicables del banco de datos personales con asesoría legal peruana.
- Sustituir gradualmente las imágenes de stock por fotografías propias autorizadas y optimizadas.

## Contenido

- Proyectos: `content/projects.json`
- Artículos: `content/blog/*.md`
- Cursos: `src/components/TrainingList.tsx`
- Datos globales de contacto y URL: `src/lib/site.ts`

No publiques credenciales, documentos de identidad ni información confidencial dentro del repositorio.
