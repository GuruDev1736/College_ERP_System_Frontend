# 🎓 College ERP System Frontend

A modern, responsive frontend application for College ERP System built with React, Vite, Three.js, and Tailwind CSS.

## ✨ Features

- **🎨 Modern UI/UX** - Glassmorphism design with smooth animations
- **🌌 3D Background** - Interactive Three.js animated background
- **🔐 Authentication** - Secure login/logout with JWT tokens
- **📱 Responsive Design** - Works perfectly on all devices
- **⚡ Fast Performance** - Built with Vite for lightning-fast builds
- **🎯 Type Safety** - TypeScript support for better development
- **🔧 State Management** - React Context API for global state
- **🎭 Custom Hooks** - Reusable custom hooks for common functionality

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tanmaydev01/College_ERP_System_Frontend.git
   cd College_ERP_System_Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration.

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components (Button, Input, etc.)
│   └── ThreeBackground.jsx  # 3D background component
├── Pages/              # Page components
│   ├── Login.jsx       # Login page
│   └── Dashboard.jsx   # Dashboard page
├── context/            # React Context providers
│   └── AuthContext.jsx # Authentication context
├── hooks/              # Custom React hooks
│   └── index.js        # Custom hooks (useLocalStorage, useApi, etc.)
├── services/           # API and external services
│   ├── api.js          # HTTP client
│   └── auth.js         # Authentication service
├── utils/              # Utility functions
│   ├── constants.js    # App constants
│   └── helpers.js      # Helper functions
├── styles/             # CSS and styling files
│   ├── index.css       # Global styles and Tailwind imports
│   └── App.css         # App-specific styles
├── assets/             # Static assets (images, icons)
├── App.jsx             # Main app component
└── main.jsx            # App entry point
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run clean` - Clean build artifacts

## 🎨 Tech Stack

### Core
- **React 19.1.1** - UI library
- **Vite 7.1.2** - Build tool and dev server
- **React Router 7.8.2** - Client-side routing

### Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Heroicons 2.2.0** - Beautiful SVG icons

### 3D Graphics
- **Three.js 0.179.1** - 3D graphics library
- **@react-three/fiber 9.3.0** - React renderer for Three.js
- **@react-three/drei 10.7.4** - Helper components for Three.js

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_NAME=College ERP System
VITE_APP_VERSION=1.0.0
```

### Tailwind CSS

Tailwind is configured in `tailwind.config.js` with custom animations and utilities.

### Vite

Vite configuration is in `vite.config.js` with React plugin and optimizations.

## 🎯 Key Components

### Authentication Context
Manages user authentication state globally across the app.

### Three.js Background
Interactive 3D background with:
- Animated particles
- Floating geometric shapes
- Dynamic lighting
- Responsive design

### Custom Hooks
- `useLocalStorage` - Persist data in localStorage
- `useApi` - Handle API requests with loading states
- `useForm` - Form validation and state management
- `useDebounce` - Debounce values for better performance

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to Netlify

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Three.js** for amazing 3D graphics capabilities
- **Tailwind CSS** for the utility-first CSS framework
- **React Three Fiber** for seamless React-Three.js integration
- **Heroicons** for beautiful SVG icons

## 📞 Support

If you have any questions or need help, please:
- Create an issue on GitHub
- Contact the development team
- Check the documentation

---

Made with ❤️ by the College ERP Development Team+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
