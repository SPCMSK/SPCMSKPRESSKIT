# Presskit Pro - Portfolio/Presskit Website

Un sitio web moderno y editable para artistas y DJs, construido con React, TypeScript, Vite y Tailwind CSS.

## ✨ Características

- **Panel de Administración**: Edita contenido sin conocimientos técnicos
- **Responsive Design**: Se adapta a todos los dispositivos
- **Galería de Fotos**: Con imágenes destacadas
- **Videos de YouTube**: Integración directa con YouTube
- **Sección Bio**: Biografía completa editable
- **Enlaces Sociales**: Administra todas tus redes sociales
- **Local Storage**: El contenido se guarda en el navegador

## 🚀 Comenzar

### Prerrequisitos

- Node.js 18 o superior
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <tu-repo-url>

# Navegar al directorio
cd presskit-pro-remix

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run preview      # Preview del build
npm run lint         # Linter
```

## 🔧 Administración

### Acceso al Panel de Admin

1. Haz clic en el botón "Admin" en el footer
2. Credenciales por defecto:
   - **Email**: admin@spcmsk.com
   - **Password**: spcmsk2024

### Cambiar Credenciales

Para cambiar las credenciales, edita el archivo `src/components/AdminPanel.tsx` en la línea donde está la validación:

```tsx
if (loginData.email === "admin@spcmsk.com" && loginData.password === "spcmsk2024") {
```

## 🚀 Deploy

El proyecto está configurado para deployment automático en:

- **Netlify**: Usa `netlify.toml`
- **Vercel**: Usa `vercel.json`

### Deploy en Netlify

1. Conecta tu repositorio de GitHub a Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy automáticamente

### Deploy en Vercel

1. Conecta tu repositorio de GitHub a Vercel
2. Deploy automáticamente

### Deploy Manual

```bash
# Build del proyecto
npm run build

# La carpeta 'dist' contiene los archivos para subir
```

## 🛠️ Tecnologías

- **React 18** - Librería UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool
- **Tailwind CSS** - Framework CSS
- **Radix UI** - Componentes accesibles
- **Lucide React** - Iconos
- **React Router** - Navegación

## 📱 Compatibilidad

- ✅ Chrome/Edge/Firefox/Safari modernos
- ✅ iOS Safari
- ✅ Android Chrome
- ✅ Responsivo en todos los dispositivos

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
