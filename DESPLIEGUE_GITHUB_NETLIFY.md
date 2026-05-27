# 🚀 Guía: Desplegar en Netlify con GitHub

Sigue estos pasos exactos para desplegar tu landing page en Netlify.

---

## PASO 1: Crear Cuenta en GitHub (si no la tienes)

1. Abre [github.com](https://github.com) en tu navegador
2. Haz clic en **"Sign up"** (esquina superior derecha)
3. Completa el formulario:
   - Email
   - Contraseña
   - Nombre de usuario (ej: `tu-nombre-usuario`)
4. Haz clic en **"Create account"**
5. Verifica tu email
6. ¡Listo! Ya tienes cuenta en GitHub

---

## PASO 2: Crear Repositorio en GitHub

1. Inicia sesión en [github.com](https://github.com)
2. Haz clic en el icono **"+"** en la esquina superior derecha
3. Selecciona **"New repository"**
4. Completa los datos:
   - **Repository name**: `colmado-landing`
   - **Description**: `Landing page moderna para colmado dominicano`
   - **Visibility**: Selecciona **"Public"**
   - **Initialize this repository**: NO marques nada
5. Haz clic en **"Create repository"**

**Copiar la URL del repositorio:**
- Verás una URL como: `https://github.com/TU_USUARIO/colmado-landing.git`
- **Cópiala** (la necesitarás en el siguiente paso)

---

## PASO 3: Subir el Código a GitHub

Abre una terminal en tu computadora y ejecuta estos comandos:

```bash
# Navega a la carpeta del proyecto
cd /home/ubuntu/colmado-landing

# Configura tu usuario de Git (solo la primera vez)
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@gmail.com"

# Cambia el repositorio remoto
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/colmado-landing.git

# Sube el código
git branch -M main
git push -u origin main
```

**Nota:** Reemplaza:
- `TU_USUARIO` con tu nombre de usuario de GitHub
- `Tu Nombre` con tu nombre real
- `tu-email@gmail.com` con tu email

**Si te pide contraseña:**
- GitHub ya no acepta contraseñas directas
- Necesitas crear un **Personal Access Token**:
  1. Ve a GitHub → Settings → Developer settings → Personal access tokens
  2. Haz clic en "Generate new token"
  3. Dale permisos: `repo` (acceso completo a repositorios)
  4. Copia el token
  5. Úsalo como contraseña en la terminal

---

## PASO 4: Conectar GitHub con Netlify

1. Abre [netlify.com](https://netlify.com) en tu navegador
2. Haz clic en **"Sign up"**
3. Selecciona **"Sign up with GitHub"**
4. Haz clic en **"Authorize netlify"**
5. Inicia sesión en GitHub si es necesario

---

## PASO 5: Crear Sitio en Netlify

1. En el dashboard de Netlify, haz clic en **"New site from Git"**
2. Selecciona **"GitHub"** como proveedor
3. Busca `colmado-landing` en la lista
4. Haz clic en el repositorio para seleccionarlo
5. Haz clic en **"Connect repository"**

---

## PASO 6: Configurar el Despliegue

Verás una pantalla con opciones de despliegue:

- **Branch to deploy**: `main` ✓ (ya está correcto)
- **Build command**: Debe mostrar `pnpm build` (Netlify lo detecta automáticamente)
- **Publish directory**: Debe mostrar `dist/public` (Netlify lo detecta automáticamente)

Si todo está correcto, haz clic en **"Deploy site"**

---

## PASO 7: ¡Espera el Despliegue!

Netlify construirá y desplegará tu sitio automáticamente:

1. Verás un estado: "Building..." 
2. Espera 2-5 minutos
3. Cuando termine, verás: "Published"
4. Recibirás un URL como: `https://xxx.netlify.app`

**¡Tu sitio está en vivo!** 🎉

---

## PASO 8: Configurar Dominio Personalizado (Opcional)

### Opción A: Dominio Gratuito de Netlify

1. En Netlify, ve a **"Site settings"**
2. Haz clic en **"Domain management"**
3. Haz clic en **"Edit site name"**
4. Cambia el nombre (ej: `colmado-la-esquina`)
5. Tu URL será: `https://colmado-la-esquina.netlify.app`

### Opción B: Dominio Personalizado

1. Compra un dominio en GoDaddy, Namecheap, etc.
2. En Netlify, ve a **"Site settings"** → **"Domain management"**
3. Haz clic en **"Add custom domain"**
4. Ingresa tu dominio (ej: `colmadolaesquina.com`)
5. Sigue las instrucciones para configurar los DNS

---

## ✅ Verificación Final

Abre tu sitio en el navegador y verifica:

- [ ] La página carga correctamente
- [ ] El navbar aparece en la parte superior
- [ ] El botón "Pedir por WhatsApp" funciona
- [ ] Las imágenes se cargan
- [ ] El sitio es responsive (prueba en móvil)
- [ ] Las animaciones funcionan

---

## 🔄 Futuras Actualizaciones

Cada vez que hagas cambios:

```bash
# Edita los archivos localmente
# Prueba con: pnpm dev

# Cuando esté listo, haz commit
git add .
git commit -m "Descripción del cambio"

# Sube a GitHub
git push

# Netlify redesplegará automáticamente en 1-2 minutos
```

---

## 🐛 Solución de Problemas

### El sitio muestra "Page not found"
- Verifica que `netlify.toml` esté en la raíz del proyecto
- Netlify debería detectar la configuración automáticamente

### El build falla
- Ve a Netlify → "Deploys" → Selecciona el deploy que falló
- Haz clic en "Deploy log" para ver el error
- Contacta soporte si el error no es claro

### Las imágenes no cargan
- Las imágenes están en la nube, deberían cargar automáticamente
- Si no cargan, verifica las URLs en los componentes

### El sitio es lento
- Espera 24 horas para que se cachee globalmente
- Usa Lighthouse en Chrome DevTools para medir performance

---

## 📞 Necesitas Ayuda?

- **Documentación de Netlify**: https://docs.netlify.com
- **Documentación de GitHub**: https://docs.github.com
- **Comunidad de Netlify**: https://community.netlify.com

---

**¡Felicidades! Tu Colmado está en línea.** 🎉
