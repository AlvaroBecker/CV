# CV Digital - Álvaro Becker Ruiz

Currículum vitae digital y portfolio profesional desarrollado con React, Vite y Tailwind CSS.

🌐 **Sitio web**: https://alvarobecker.github.io/CV/

## 🚀 Desarrollo Local

### Requisitos previos
- Node.js 20 o superior
- npm

### Instalación y ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 📦 Despliegue a GitHub Pages

El sitio se despliega automáticamente a GitHub Pages cuando se hace push a la rama `main`.

### Despliegue automático (Recomendado)

1. Realiza cambios en tu código
2. Haz commit y push a la rama `main`:
   ```bash
   git add .
   git commit -m "Descripción de cambios"
   git push origin main
   ```
3. GitHub Actions compilará y desplegará automáticamente el sitio a la rama `gh-pages`
4. Los cambios estarán visibles en https://alvarobecker.github.io/CV/ en unos minutos

### Despliegue manual

Si prefieres desplegar manualmente:

```bash
npm run deploy
```

Este comando compilará el proyecto y subirá los archivos a la rama `gh-pages`.

## 🔧 Tecnologías utilizadas

- React 19
- Vite 7
- Tailwind CSS 4
- TypeScript
- GitHub Pages

## 📄 Licencia

The Spark Template files and resources from GitHub are licensed under the terms of the MIT license, Copyright GitHub, Inc.
