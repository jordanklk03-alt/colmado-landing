# Guía Completa: Despliegue en Netlify

Esta guía te llevará paso a paso para desplegar tu landing page del Colmado en Netlify.

## 📋 Requisitos Previos

- Cuenta de GitHub (recomendado)
- Cuenta de Netlify (gratuita)
- El código del proyecto

## 🚀 Método 1: Despliegue Automático desde GitHub (RECOMENDADO)

Este es el método más fácil y permite actualizaciones automáticas.

### Paso 1: Preparar el Repositorio en GitHub

1. **Crea una cuenta en GitHub** (si no la tienes)
   - Ve a [github.com](https://github.com)
   - Haz clic en "Sign up"
   - Completa el registro

2. **Crea un nuevo repositorio**
   - Haz clic en el icono `+` en la esquina superior derecha
   - Selecciona "New repository"
   - Nombre: `colmado-landing`
   - Descripción: "Landing page moderna para colmado dominicano"
   - Selecciona "Public"
   - Haz clic en "Create repository"

3. **Sube el código a GitHub**
   
   En tu terminal, dentro de la carpeta del proyecto:
   
   ```bash
   # Inicializa git
   git init
   
   # Añade todos los archivos
   git add .
   
   # Crea el primer commit
   git commit -m "Initial commit: Colmado landing page"
   
   # Añade el repositorio remoto
   git remote add origin https://github.com/TU_USUARIO/colmado-landing.git
   
   # Sube el código
   git push -u origin main
   ```
   
   **Nota:** Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub.

### Paso 2: Conectar con Netlify

1. **Ve a Netlify**
   - Abre [netlify.com](https://netlify.com)
   - Haz clic en "Sign up"
   - Selecciona "Sign up with GitHub"

2. **Autoriza Netlify**
   - Inicia sesión en GitHub
   - Haz clic en "Authorize netlify"

3. **Crea un nuevo sitio**
   - Haz clic en "New site from Git"
   - Selecciona "GitHub" como proveedor
   - Busca y selecciona `colmado-landing`
   - Haz clic en "Connect repository"

4. **Configura el despliegue**
   - **Branch to deploy**: `main`
   - **Build command**: `pnpm build` (Netlify lo detectará automáticamente)
   - **Publish directory**: `dist/public` (Netlify lo detectará automáticamente)
   - Haz clic en "Deploy site"

5. **¡Listo!**
   - Netlify construirá y desplegará tu sitio automáticamente
   - Recibirás un URL como `https://xxx.netlify.app`
   - Cada vez que hagas push a GitHub, Netlify redesplegará automáticamente

## 🚀 Método 2: Despliegue Manual con Netlify CLI

Si prefieres desplegar sin GitHub:

### Paso 1: Instala Netlify CLI

```bash
npm install -g netlify-cli
```

### Paso 2: Construye el Proyecto

```bash
pnpm build
```

### Paso 3: Despliega

```bash
netlify deploy --prod --dir=dist/public
```

### Paso 4: Autenticación

- Se abrirá una ventana del navegador
- Inicia sesión en Netlify
- Autoriza la aplicación
- Vuelve a ejecutar el comando de despliegue

## 🌐 Configurar Dominio Personalizado

### Opción 1: Dominio Gratuito de Netlify

1. Ve a tu sitio en Netlify
2. Haz clic en "Site settings"
3. Ve a "Domain management"
4. Haz clic en "Edit site name"
5. Cambia el nombre (ej: `colmado-la-esquina`)
6. Tu URL será: `https://colmado-la-esquina.netlify.app`

### Opción 2: Dominio Personalizado

1. **Compra un dominio**
   - GoDaddy, Namecheap, Google Domains, etc.
   - Ej: `colmadolaesquina.com`

2. **Configura en Netlify**
   - Ve a "Site settings" → "Domain management"
   - Haz clic en "Add custom domain"
   - Ingresa tu dominio
   - Haz clic en "Verify"

3. **Actualiza los DNS**
   - Netlify te mostrará los registros DNS
   - Ve a tu proveedor de dominio
   - Actualiza los registros NS (nameservers)
   - Espera 24-48 horas para que se propague

## 🔧 Configuración Avanzada

### Variables de Entorno

Si necesitas variables secretas (como claves de API):

1. Ve a "Site settings" → "Build & deploy" → "Environment"
2. Haz clic en "Edit variables"
3. Añade tus variables
4. Netlify las inyectará durante el build

### Redirecciones y Reescrituras

Ya están configuradas en `netlify.toml`:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Esto permite que React Router maneje todas las rutas.

### Headers Personalizados

Ya están configurados en `netlify.toml` para:
- Cache control
- Seguridad
- CORS

## 📊 Monitoreo y Análisis

### Ver Logs de Despliegue

1. Ve a tu sitio en Netlify
2. Haz clic en "Deploys"
3. Selecciona un despliegue
4. Haz clic en "Deploy log" para ver detalles

### Habilitar Analytics

1. Ve a "Site settings" → "Analytics"
2. Haz clic en "Enable Netlify Analytics"
3. Accede a los datos desde el dashboard

## 🐛 Solución de Problemas

### El sitio muestra "Page not found"

**Solución:** Asegúrate de que `netlify.toml` tiene la redirección correcta:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Las imágenes no cargan

**Solución:** Verifica que las URLs de las imágenes sean correctas en los componentes.

### El build falla

**Solución:** Revisa el "Deploy log" en Netlify para ver el error específico.

### El sitio es lento

**Soluciones:**
- Comprime las imágenes
- Habilita caching en `netlify.toml`
- Usa Netlify Analytics para identificar cuellos de botella

## 📈 Optimizaciones Post-Despliegue

### 1. Habilitar HTTPS

- Netlify lo hace automáticamente (Let's Encrypt)
- Redirige HTTP a HTTPS en `netlify.toml`

### 2. Configurar CDN

- Netlify usa Cloudflare automáticamente
- Las imágenes se cachean globalmente

### 3. Monitorear Performance

- Usa Lighthouse en Chrome DevTools
- Objetivo: 90+ en todas las categorías

## 🔄 Actualizaciones Futuras

### Con GitHub (Automático)

1. Edita los archivos locales
2. Prueba con `pnpm dev`
3. Haz commit: `git commit -m "Descripción del cambio"`
4. Haz push: `git push`
5. Netlify redesplegará automáticamente

### Sin GitHub (Manual)

1. Edita los archivos
2. Construye: `pnpm build`
3. Despliega: `netlify deploy --prod --dir=dist/public`

## 📞 Soporte

Si tienes problemas:

1. **Documentación de Netlify**: https://docs.netlify.com
2. **Comunidad de Netlify**: https://community.netlify.com
3. **Estado de Netlify**: https://www.netlify.com/status

## ✅ Checklist Final

Antes de considerar tu sitio listo:

- [ ] El sitio carga correctamente
- [ ] Responsive en móvil, tablet y desktop
- [ ] Todas las imágenes cargan
- [ ] Los botones de WhatsApp funcionan
- [ ] El mapa se muestra
- [ ] Las animaciones funcionan
- [ ] El sitio es rápido (Lighthouse 90+)
- [ ] El dominio está configurado
- [ ] HTTPS está habilitado
- [ ] Analytics está configurado

---

**¡Felicidades! Tu Colmado está en línea.** 🎉
