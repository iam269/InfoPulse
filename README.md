# InfoPulse 🌐📰

InfoPulse is a modern, responsive news aggregator web application built with React, TypeScript, and Vite. It delivers the latest news articles from various sources, featuring intuitive categorization, powerful search functionality, and a sleek user interface powered by Tailwind CSS and shadcn/ui components. The application leverages advanced React patterns, custom hooks for data fetching, and a component-based architecture to provide a seamless user experience.

## Features ✨

- **Real-time News Aggregation**: Fetches and displays the latest news from multiple sources using custom hooks and React Query for efficient data management.
- **Category-based Browsing**: Explore news by categories like Technology, Sports, Politics, and more, with dedicated sections for each.
- **Advanced Search**: Quickly find articles with our robust search functionality powered by custom search hooks.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices using Tailwind CSS responsive utilities.
- **Dark/Light Mode**: Toggle between themes for comfortable reading, implemented with next-themes.
- **Privacy Focused**: Minimal tracking and user data collection, with a dedicated privacy consent component.
- **Interactive UI**: Utilizes shadcn/ui components for dialogs, accordions, carousels, and more.
- **Routing**: Client-side routing with React Router DOM for smooth navigation between pages.
- **Charts and Data Visualization**: Integrated Recharts for potential analytics or data representation.

## Live Demo 🚀

Check out the live application at: [https://iam269.github.io/InfoPulse/](https://iam269.github.io/InfoPulse/)

## Project Structure 📁

```
InfoPulse/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # shadcn/ui components
│   │   └── ...             # Custom components (Header, Footer, etc.)
│   ├── hooks/              # Custom React hooks (useNews, useSearchNews, etc.)
│   ├── pages/              # Page components (Index, Article, etc.)
│   ├── lib/                # Utility functions and configurations
│   └── assets/             # Static assets (images, icons)
├── public/                 # Public assets
├── dist/                   # Build output (generated)
└── ...                     # Configuration files (package.json, vite.config.ts, etc.)
```

## Installation 🛠️

1. **Prerequisites**: Ensure you have Node.js (v18+) and npm installed.

2. Clone the repository:
   ```bash
   git clone https://github.com/your-username/InfoPulse.git
   cd InfoPulse
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. (Optional) Set up environment variables:
   Create a `.env` file in the root directory and add any required API keys (e.g., for news APIs).

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:5173`

## Scripts 📜

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run build:dev`: Build in development mode
- `npm run lint`: Run ESLint for code linting
- `npm run preview`: Preview the production build locally
- `npm run deploy`: Deploy to GitHub Pages (requires gh-pages setup)

## Technologies Used 🛠️

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui (built on Radix UI primitives)
- **State Management**: React Hooks and TanStack Query (React Query)
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Charts**: Recharts
- **Theming**: next-themes for dark/light mode
- **Deployment**: GitHub Pages with gh-pages
- **Linting**: ESLint with TypeScript support

## API Integration 🔗

InfoPulse integrates with news APIs to fetch real-time data. The application uses custom hooks (`useNews`, `useSearchNews`) to handle API calls, caching, and error states. Ensure you have valid API keys configured for full functionality.

## Deployment 🚀

The project is configured for deployment to GitHub Pages:

1. Build the project: `npm run build`
2. Deploy: `npm run deploy`

The `homepage` field in `package.json` is set to `https://iam269.github.io/InfoPulse`.

## Contributing 🤝

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please ensure your code follows our ESLint configuration and includes appropriate tests.

## Roadmap 🗺️

- [ ] Add user authentication and personalized news feeds
- [ ] Implement push notifications for breaking news
- [ ] Add offline reading capabilities
- [ ] Integrate multiple news sources with source credibility ratings
- [ ] Enhance accessibility features

## Acknowledgments 🙏

- Thanks to the React and Vite communities for excellent documentation
- shadcn/ui for beautiful, accessible UI components
- All contributors and users of InfoPulse

## License 📄

MIT License 📄

Copyright ©️ 2023 InfoPulse 👨‍💻

Permission is hereby granted, free of charge 💰, to any person 👤 obtaining a copy 📋 of this software and associated documentation files (the "Software") 📁, to deal 🤝 in the Software without restriction 🚫, including without limitation the rights to use ✏️, copy 📋, modify 🔧, merge 🔗, publish 📤, distribute 🚚, sublicense 📜, and/or sell 💸 copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions ✅:

The above copyright notice ©️ and this permission notice shall be included ➕ in all copies or substantial portions of the Software 📄.

THE SOFTWARE IS PROVIDED "AS IS" ⚠️, WITHOUT WARRANTY 🚫 OF ANY KIND ❓, EXPRESS OR IMPLIED 🤔, INCLUDING BUT NOT LIMITED TO 📝 THE WARRANTIES OF MERCHANTABILITY 🛒, FITNESS FOR A PARTICULAR PURPOSE 🎯 AND NONINFRINGEMENT 🚫. IN NO EVENT SHALL THE AUTHORS ✍️ OR COPYRIGHT HOLDERS 👑 BE LIABLE ⚖️ FOR ANY CLAIM 📜, DAMAGES 💥 OR OTHER LIABILITY 🤕, WHETHER IN AN ACTION OF CONTRACT 📜, TORT OR OTHERWISE 🔄, ARISING FROM 🔗, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE 🛡️.

## Contact 📧

For questions or suggestions, please open an issue on GitHub or contact the maintainers.