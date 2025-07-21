# 🔄 Cambiar Repositorio Remoto - Guía Paso a Paso

## 📍 Situación Actual
- **Repositorio actual**: `SStransportes/presskit-pro-remix`
- **Necesitas cambiar a**: Tu nuevo repositorio en cuenta verificada

## 🔧 Pasos para Cambiar Repositorio:

### 1. Obtener URL del Nuevo Repositorio
Ve a tu nuevo repositorio en GitHub y copia la URL. Puede ser:
- **HTTPS**: `https://github.com/TU-NUEVA-CUENTA/NOMBRE-REPO.git`
- **SSH**: `git@github.com:TU-NUEVA-CUENTA/NOMBRE-REPO.git`

### 2. Cambiar Remote Origin
```bash
# Cambiar a la nueva URL (reemplaza con tu URL real)
git remote set-url origin https://github.com/TU-NUEVA-CUENTA/NOMBRE-REPO.git

# Verificar el cambio
git remote -v
```

### 3. Configurar Usuario Git (si es necesario)
```bash
# Configurar tu nueva cuenta
git config user.name "Tu Nombre"
git config user.email "tu-email-verificado@gmail.com"

# O globalmente
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email-verificado@gmail.com"
```

### 4. Hacer Push al Nuevo Repositorio
```bash
# Enviar todos los cambios al nuevo repo
git push -u origin main
```

## 🔒 Si Usas SSH (Recomendado):
```bash
# Cambiar a SSH
git remote set-url origin git@github.com:TU-NUEVA-CUENTA/NOMBRE-REPO.git

# Generar SSH key si no tienes
ssh-keygen -t ed25519 -C "tu-email@gmail.com"

# Agregar la key pública a GitHub Settings > SSH Keys
```

## ⚡ Comandos Rápidos:
Una vez que me digas la URL de tu nuevo repositorio, ejecutaremos:
```bash
git remote set-url origin [NUEVA-URL]
git push -u origin main
```

## 🎯 Próximo Paso:
**Dime la URL de tu nuevo repositorio** y ejecutaré los comandos por ti.

## 📋 Beneficios del Cambio:
✅ Cuenta verificada (más confiable)  
✅ Mejores límites de GitHub  
✅ Acceso completo al repositorio  
✅ Deploy sin problemas de permisos  

**¿Cuál es la URL de tu nuevo repositorio?**
