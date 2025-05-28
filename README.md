# ASEDUCH Landing Page

Sitio web oficial de la Asociación de Educadores de Chile (ASEDUCH), desarrollado con React, TypeScript y TailwindCSS. Este proyecto presenta la información institucional, noticias, recursos educativos y la fundación ASEDUCH.

## Sobre ASEDUCH

La Asociación de Educadores de Chile (ASEDUCH) es una organización dedicada a apoyar y fortalecer la educación en Chile. El sitio web sirve como plataforma principal para comunicar sus iniciativas, compartir recursos educativos y conectar con la comunidad educativa.

## Características Principales

- 🏢 **Información Institucional**: Presentación de la asociación, su misión, visión y equipo.
- 📰 **Noticias y Actualidad**: Integración con WordPress para mostrar noticias y eventos relevantes.
- 📚 **Recursos Educativos**: Biblioteca de documentos, guías y materiales para educadores.
- 🤝 **Fundación ASEDUCH**: Sección dedicada a la fundación con:
  - Documentos institucionales
  - Actividades y eventos
  - Opciones de donación y apoyo
- 📱 **Diseño Responsive**: Experiencia óptima en todos los dispositivos.
- 🎭 **Animaciones**: Implementadas con Framer Motion para una experiencia de usuario mejorada.

## Tecnologías

- ⚛️ **React**: Biblioteca principal para la construcción de la interfaz.
- 🎯 **TypeScript**: Para un desarrollo más seguro y mantenible.
- 🎨 **TailwindCSS**: Framework CSS para un diseño rápido y consistente.
- ⚡️ **Vite**: Herramienta de construcción para un desarrollo rápido.
- 🔄 **WordPress API**: Integración para contenido dinámico.
- 📄 **PDF Viewer**: Visualizador de documentos integrado.
- 🔍 **SEO Optimizado**: Meta tags dinámicos y sitemap automático.

## Instalación y Desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/Liqui0-Blvck/Aseduch-landing.git

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la build de producción
- `npm run lint` - Ejecuta el linter

## Estructura del Proyecto

```
├── src/
│   ├── assets/        # Recursos estáticos
│   ├── components/    # Componentes reutilizables
│   │   └── PdfViewer.tsx  # Componente para visualizar PDFs
│   ├── hooks/         # Custom hooks
│   ├── pages/         # Componentes de páginas
│   │   ├── foundation/  # Sección de la Fundación ASEDUCH
│   │   ├── media/       # Sección de prensa y medios
│   │   └── ...         # Otras secciones del sitio
│   ├── types/         # Tipos de TypeScript
│   ├── utils/         # Utilidades y helpers
│   ├── App.tsx        # Componente principal
│   └── main.tsx       # Punto de entrada
├── public/            # Archivos públicos (excluidos del control de versiones)
└── [archivos de configuración]
```

## Sección de Fundación

La sección de la Fundación ASEDUCH está estructurada en tres pestañas principales:

1. **Documentos**: Acceso a documentos institucionales como estatutos y reportes.
2. **Actividades**: Calendario de eventos, talleres y seminarios organizados por la fundación.
3. **Donaciones**: Información sobre cómo apoyar a la fundación, incluyendo datos bancarios y opciones de pago.

Cada sección cuenta con animaciones fluidas y una interfaz intuitiva para mejorar la experiencia del usuario.

## Contribuir

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/NuevaFuncionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/NuevaFuncionalidad`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.