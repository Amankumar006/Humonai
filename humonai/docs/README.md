# Humonai Project

Humonai is a web-based platform focused on AI education and tools. The platform consists of two main versions:

1. **Humonai V.1**: Offers courses on maximizing productivity with AI tools (specifically ChatGPT)
2. **Humonai V.2**: A chatbot that recommends AI tools based on user needs

## Project Structure

The project has been restructured to follow modern web development best practices with a clear separation of concerns:

```
humonai/
│
├── assets/              # All static assets
│   ├── css/            # CSS styles
│   │   ├── components/ # Component-specific styles
│   │   ├── pages/      # Page-specific styles
│   │   ├── base.css    # Common base styles
│   │   └── responsive.css # Responsive design styles
│   │
│   ├── js/             # JavaScript files
│   │   ├── components/ # Component-specific scripts
│   │   ├── utils/      # Utility scripts
│   │   └── main.js     # Main entry point
│   │
│   └── images/         # Image assets
│       ├── logos/      # Logo images
│       ├── bots/       # Bot-related images
│       ├── backgrounds/ # Background images
│       └── ai-services/ # AI service images
│
├── pages/              # HTML pages
│   ├── index.html      # Home page
│   ├── about.html      # About page
│   ├── v1/             # Humonai V1 pages
│   ├── v2/             # Humonai V2 pages
│   ├── ai-bots/        # AI Bot pages
│   └── tech-articles/  # Tech article pages
│
└── docs/               # Documentation
    └── README.md       # This file
```

## Features

- Dark mode support
- Responsive design
- User authentication system
- Bot comparison and information pages
- Tech articles and resources

## Development

### CSS Organization

- `base.css` - Contains common styles and variables
- `components/` - Contains styles for reusable components
- `pages/` - Contains page-specific styles
- `responsive.css` - Contains media queries for responsive design

### JavaScript Organization

- `main.js` - Main entry point for JavaScript
- `components/` - Component-specific functionality
- `utils/` - Helper functions and utilities

## File Path Updates

All file paths have been updated to use relative paths from the current page to the asset directories:

- Root pages use `../assets/`
- Nested pages use `../../assets/`

## Contact

For any questions or feedback, please reach out to: humonai.contact@gmail.com
