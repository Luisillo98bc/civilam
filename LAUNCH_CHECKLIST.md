# CIVILAM - checklist de lanzamiento

## Ya preparado

- Catálogo ampliado según el brochure institucional.
- Misión, visión, valores, dirección y correo incorporados.
- Contacto y WhatsApp centralizados en `src/lib/site.ts`.
- Página global de error, metadatos, favicon, sitemap y robots.
- Imágenes locales reutilizadas en el catálogo ampliado.
- `npm run lint`, `npm run typecheck`, `npm test` y `npm run build` verificados.

## Pendiente de acceso o confirmación

- Confirmar RUC, razón social inscrita y responsable legal de privacidad.
- Crear `.env.local` o variables del proveedor usando `.env.example`.
- Añadir `RESEND_API_KEY` y un remitente verificado en Resend.
- Realizar un envío real del formulario de contacto.
- Confirmar si se publican testimonios, logos y proyectos con autorización.
- Configurar dominio, HTTPS, redirección `www`/sin `www` y Search Console.
- Definir fechas, docentes, precios y certificados de capacitaciones antes de promocionarlas.

## Hosting

Usar Vercel o Netlify con runtime de Next.js. El formulario utiliza Server Actions y Resend, por lo que no se debe activar `output: 'export'` ni publicar solamente la carpeta estática `out`.
