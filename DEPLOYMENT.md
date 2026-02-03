# Instrucciones de Despliegue a GitHub Pages

## ¿Qué se ha configurado?

Se ha creado un flujo de trabajo (workflow) de GitHub Actions que automáticamente despliega tu CV a GitHub Pages cada vez que subes cambios a la rama `main`.

## ¿Cómo funciona?

1. **Despliegue Automático**: Cada vez que hagas `git push` a la rama `main`, GitHub Actions:
   - Compilará automáticamente tu proyecto
   - Desplegará los archivos compilados a la rama `gh-pages`
   - Tu sitio se actualizará en https://alvarobecker.github.io/CV/

2. **Despliegue Manual**: También puedes desplegar manualmente con el comando:
   ```bash
   npm run deploy
   ```

## Pasos para actualizar tu CV

1. Edita tus archivos (código, componentes, estilos, etc.)
2. Prueba los cambios localmente:
   ```bash
   npm run dev
   ```
3. Cuando estés satisfecho con los cambios:
   ```bash
   git add .
   git commit -m "Actualización de información del CV"
   git push origin main
   ```
4. Espera 2-3 minutos y tus cambios estarán en vivo

## Verificar el despliegue

Puedes ver el estado del despliegue en:
- GitHub → Pestaña "Actions" de tu repositorio
- Allí verás todos los workflows ejecutándose o completados

## Configuración de GitHub Pages

Asegúrate de que en la configuración del repositorio (Settings → Pages):
- **Source**: Deploy from a branch
- **Branch**: gh-pages
- **Folder**: / (root)

## Archivos creados/modificados

1. `.github/workflows/deploy.yml` - Workflow de GitHub Actions para despliegue automático
2. `README.md` - Documentación actualizada con instrucciones en español

## ¿Necesitas ayuda?

Si el despliegue falla:
1. Ve a la pestaña "Actions" en GitHub
2. Haz clic en el workflow que falló
3. Revisa los logs para ver qué salió mal
4. Los errores más comunes son:
   - Errores de compilación (revisa tu código)
   - Permisos insuficientes (verifica la configuración del repositorio)
