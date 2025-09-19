# Espresso Events Frontend

A React + TypeScript + Vite application for managing and visualizing coffee events on an interactive map.

## Features

- Interactive map with event markers using Leaflet
- Event management with Supabase integration
- User authentication and contributor system
- Real-time event status tracking (upcoming, ongoing, ended)
- Publication and topic management
- Responsive design with coffee-themed UI

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (for backend integration)

## Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd espresso-events-frontend
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Environment Setup**
   
   The following environment variables are already configured in the v0 workspace:
   - `SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_URL` 
   - `SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - Database connection variables (Postgres)

4. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Build for production**
   \`\`\`bash
   npm run build
   \`\`\`

## Project Structure

\`\`\`
src/
├── components/
│   ├── ui/              # Shadcn/ui components
│   ├── auth/            # Authentication components
│   └── LinkPreview.tsx  # Link preview component
├── hooks/
│   ├── useAuth.tsx      # Authentication hook
│   └── useLinkPreview.tsx # Link preview hook
├── lib/
│   ├── supabase/        # Supabase client configuration
│   ├── leafletConfig.ts # Leaflet map configuration
│   └── utils.ts         # Utility functions
├── App.tsx              # Main application component
├── App.css              # Application styles
├── index.css            # Global styles with Tailwind
└── main.tsx             # Application entry point
\`\`\`

## Key Dependencies

### Core Framework
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### UI & Styling  
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Component library built on Radix UI
- **Lucide React** - Icon library

### Map Integration
- **Leaflet** - Interactive maps
- **React Leaflet** - React components for Leaflet

### Backend Integration
- **Supabase** - Backend as a Service
- **@supabase/ssr** - Server-side rendering support

### Forms & Validation
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation resolvers

## Configuration Files Fixed

This project has been fully configured to work out of the box:

### 1. Package.json
- ✅ Updated scripts for Vite (not Next.js)
- ✅ Added all missing dependencies
- ✅ Proper React 18 and TypeScript versions
- ✅ Added @types/leaflet for TypeScript support

### 2. TypeScript Configuration
- ✅ Fixed JSON syntax errors in tsconfig files
- ✅ Removed invalid comments from JSON
- ✅ Proper path mapping for @/* imports

### 3. Tailwind CSS
- ✅ Fixed content paths for Vite project structure
- ✅ Added proper CSS variable definitions
- ✅ Included Leaflet CSS imports

### 4. Vite Configuration
- ✅ Proper path resolution
- ✅ Leaflet optimization settings
- ✅ React plugin configuration

### 5. ESLint Configuration
- ✅ Modern flat config format
- ✅ TypeScript and React rules
- ✅ React Hooks and Refresh plugins

## Map Features

- **Interactive Leaflet Map** with multiple basemap options
- **Custom Event Markers** with status-based icons
- **Click-to-Add Events** for contributors
- **Geolocation Support** for finding user location
- **Search Functionality** using OpenStreetMap Nominatim
- **Responsive Legend** showing event status meanings

## Authentication

The app uses Supabase Auth with:
- Email/password authentication
- User profiles with contributor roles
- Protected routes for event creation
- Session management with SSR support

## Event Management

- **Add Events**: Contributors can add new events by clicking on the map
- **Event Status**: Automatic status tracking (upcoming, ongoing, ended)
- **Publications**: Link events to articles, tweets, or other content
- **Topics**: Discussion points and themes for each event

## Troubleshooting

### Common Issues

1. **Map not loading**: Check if Leaflet CSS is properly imported
2. **Icons not showing**: Ensure image assets exist in `public/images/`
3. **Build errors**: Run `npm install` to ensure all dependencies are installed
4. **TypeScript errors**: Check that all @types packages are installed

### Development Tips

- Use `npm run dev` for development with hot reload
- Check browser console for any runtime errors
- Ensure Supabase environment variables are set correctly
- Test map functionality in different browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
