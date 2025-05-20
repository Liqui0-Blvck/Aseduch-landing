# Mi Proyecto React

Un proyecto moderno de React construido con Vite, TypeScript y TailwindCSS. Este proyecto incluye una integración con WordPress como backend para noticias y contenido dinámico.

## Características

- ⚡️ Vite para un desarrollo rápido y build optimizado
- 🎯 TypeScript para tipado estático
- 🎨 TailwindCSS para estilos modernos y responsivos
- 🔄 Integración con WordPress API
- 🗺️ Generación automática de sitemap
- 🖼️ Lazy loading de imágenes
- 🎭 Animaciones con Framer Motion
- 📱 Diseño completamente responsive
- 🔍 SEO optimizado

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm o yarn

## Instalación

```bash
# Clonar el repositorio
git clone [url-del-repositorio]

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Genera el sitemap y construye la aplicación para producción
- `npm run preview` - Vista previa de la build de producción
- `npm run lint` - Ejecuta el linter
- `npm run generate:sitemap` - Genera el sitemap.xml

## Estructura del Proyecto

```
├── src/
│   ├── assets/        # Imágenes y recursos estáticos
│   ├── components/    # Componentes reutilizables
│   ├── hooks/         # Custom hooks
│   ├── pages/         # Componentes de páginas
│   ├── types/         # Tipos de TypeScript
│   ├── utils/         # Utilidades y helpers
│   ├── App.tsx        # Componente principal
│   └── main.tsx       # Punto de entrada
├── scripts/
│   └── generate-sitemap.ts  # Script de generación de sitemap
├── public/            # Archivos públicos
└── [archivos de configuración]
```

## Características Técnicas

### Integración con WordPress

El proyecto utiliza la WordPress REST API para obtener contenido dinámico, principalmente noticias y actualizaciones.

### SEO

- Generación automática de sitemap.xml
- Meta tags dinámicos
- JSON-LD para rich snippets
- Optimización de imágenes

### Rendimiento

- Lazy loading de imágenes y componentes
- Optimización de assets con Vite
- Estilos optimizados con TailwindCSS

## Contribuir

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.