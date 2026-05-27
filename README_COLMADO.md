# Colmado La Esquina - Landing Page

Una landing page moderna, responsive y optimizada para un colmado dominicano. Diseñada para recibir pedidos por WhatsApp y mostrar información clara del negocio.

## 🎯 Características Principales

### Secciones Incluidas

1. **Navbar Sticky** - Navegación persistente con menú móvil y botón WhatsApp
2. **Hero Section** - Presentación impactante con imagen de fondo y CTA principal
3. **Productos Destacados** - Categorías principales (bebidas, snacks, productos básicos)
4. **Beneficios** - 6 razones para elegir el colmado
5. **Testimonios** - 6 testimonios de clientes satisfechos
6. **Ubicación** - Dirección, horario y mapa embebido
7. **Footer** - Enlaces rápidos, contacto y redes sociales
8. **Botón Flotante WhatsApp** - Acceso rápido a WhatsApp desde cualquier parte

### Características Técnicas

- ✅ **Responsive Design** - Optimizado para móvil, tablet y desktop
- ✅ **Performance** - Lazy loading de imágenes, optimización de assets
- ✅ **SEO Optimizado** - Meta tags, sitemap.xml, robots.txt
- ✅ **Animaciones Suaves** - Transiciones y efectos visuales modernos
- ✅ **Accesibilidad** - Estructura semántica y contraste de colores
- ✅ **Netlify Ready** - Configuración lista para despliegue inmediato
- ✅ **Código Limpio** - Estructura modular y fácil de mantener

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|---|---|---|
| React | 19.2.1 | Framework principal |
| TypeScript | 5.6.3 | Tipado estático |
| TailwindCSS | 4.1.14 | Estilos y diseño responsivo |
| Vite | 7.1.7 | Bundler y dev server |
| Lucide React | 0.453.0 | Iconos |
| Wouter | 3.3.5 | Enrutamiento ligero |

## 📁 Estructura de Carpetas

```
colmado-landing/
├── client/
│   ├── public/
│   │   ├── robots.txt          # SEO - Instrucciones para buscadores
│   │   └── sitemap.xml         # SEO - Mapa del sitio
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx      # Navegación sticky
│   │   │   ├── Hero.tsx        # Sección hero
│   │   │   ├── Products.tsx    # Productos destacados
│   │   │   ├── Benefits.tsx    # Beneficios
│   │   │   ├── Testimonials.tsx # Testimonios
│   │   │   ├── Location.tsx    # Ubicación
│   │   │   └── Footer.tsx      # Footer
│   │   ├── pages/
│   │   │   └── Home.tsx        # Página principal
│   │   ├── index.css           # Estilos globales
│   │   ├── App.tsx             # Componente raíz
│   │   └── main.tsx            # Punto de entrada
│   └── index.html              # HTML principal
├── netlify.toml                # Configuración de Netlify
└── README_COLMADO.md           # Este archivo
```

## 🚀 Despliegue en Netlify

### Opción 1: Desde GitHub (Recomendado)

1. **Sube el código a GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Colmado landing page"
   git remote add origin https://github.com/tu-usuario/colmado-landing.git
   git push -u origin main
   ```

2. **Conecta con Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - Haz clic en "New site from Git"
   - Selecciona tu repositorio de GitHub
   - Netlify detectará automáticamente `netlify.toml`
   - Haz clic en "Deploy"

### Opción 2: Despliegue Manual con CLI

1. **Instala Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Construye el proyecto**
   ```bash
   pnpm build
   ```

3. **Despliega**
   ```bash
   netlify deploy --prod --dir=dist/public
   ```

4. **Autentica cuando se solicite**
   - Se abrirá una ventana del navegador
   - Inicia sesión en tu cuenta de Netlify
   - Autoriza la aplicación

## 📝 Personalización Rápida

### Cambiar Número de WhatsApp

Busca `18095551234` en todos los archivos y reemplázalo:

**Archivos a actualizar:**
- `client/src/components/Navbar.tsx`
- `client/src/components/Hero.tsx`
- `client/src/components/Products.tsx`
- `client/src/components/Location.tsx`
- `client/src/components/Footer.tsx`

### Cambiar Nombre del Colmado

Busca "Colmado La Esquina" y reemplázalo con tu nombre:

**Archivos a actualizar:**
- `client/index.html` (título y descripción)
- `client/src/components/Navbar.tsx`
- `client/src/components/Hero.tsx`
- `client/src/components/Footer.tsx`

### Actualizar Dirección

Busca "Calle Principal #123" en:
- `client/src/components/Location.tsx`
- `client/src/components/Footer.tsx`

### Cambiar Horario

Edita el array `schedules` en `client/src/components/Location.tsx`

### Actualizar Imágenes

Las imágenes están almacenadas en la nube. Para cambiarlas:

1. Genera nuevas imágenes con la herramienta de generación
2. Reemplaza las URLs en los componentes:
   - Hero: `hero-colmado.webp`
   - Productos: `products-showcase.webp`
   - Comunidad: `community-vibes.webp`
   - Delivery: `delivery-concept.webp`

## 🎨 Personalización de Colores

Los colores están definidos en `client/src/index.css`:

```css
:root {
  --primary: #EA580C;        /* Naranja principal */
  --primary-foreground: #FFFFFF;
  /* ... más colores ... */
}
```

### Paleta de Colores Actual

- **Primario (Naranja)**: `#EA580C`
- **Secundario**: `#F07A2F`
- **Fondo**: Blanco
- **Texto**: Gris oscuro

## 📊 SEO Optimizado

### Meta Tags Incluidos

- ✅ Descripción meta
- ✅ Keywords
- ✅ Open Graph (para redes sociales)
- ✅ Theme color
- ✅ Viewport meta tag

### Archivos SEO

- `robots.txt` - Instrucciones para buscadores
- `sitemap.xml` - Mapa del sitio
- Estructura semántica HTML5
- Headings jerárquicos (h1, h2, h3)
- Alt text en imágenes

## ⚡ Optimización de Performance

### Técnicas Implementadas

1. **Lazy Loading** - Imágenes cargadas bajo demanda
2. **Compresión WebP** - Imágenes optimizadas
3. **CSS Minificado** - Vite maneja la minificación
4. **Code Splitting** - Componentes separados
5. **Caching** - Headers configurados en `netlify.toml`

### Puntuación Esperada

- Lighthouse Performance: 90+
- Lighthouse SEO: 95+
- Lighthouse Accessibility: 95+

## 🔧 Desarrollo Local

### Requisitos

- Node.js 18+
- pnpm 10+

### Instalación

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Construir para producción
pnpm build

# Previsualizar build
pnpm preview
```

El servidor estará disponible en `http://localhost:3000`

## 📱 Responsive Breakpoints

- **Mobile**: 0px - 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+

## 🎬 Animaciones

### Animaciones Incluidas

- `animate-fadeInUp` - Aparición con movimiento hacia arriba
- `animate-slideInLeft` - Deslizamiento desde la izquierda
- `hover:scale-110` - Zoom en hover
- `active:scale-95` - Presión en botones

## 🔐 Seguridad

### Headers de Seguridad Configurados

- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## 📞 Soporte y Mantenimiento

### Cambios Frecuentes

Para cambios mensuales o semanales:

1. Edita los archivos locales
2. Prueba con `pnpm dev`
3. Haz commit a Git
4. Git push automáticamente dispara un redeploy en Netlify

### Agregar Nueva Sección

1. Crea un nuevo componente en `client/src/components/`
2. Importa en `client/src/pages/Home.tsx`
3. Añade la sección al JSX
4. Haz commit y push

## 📄 Licencia

Este proyecto es de código abierto y puede ser reutilizado como plantilla.

## 🎓 Recursos Útiles

- [Documentación de Netlify](https://docs.netlify.com)
- [Documentación de React](https://react.dev)
- [Documentación de TailwindCSS](https://tailwindcss.com/docs)
- [Documentación de TypeScript](https://www.typescriptlang.org/docs)

---

**Creado con ❤️ para pequeños negocios dominicanos**
