# 🇵🇸 Voices for Palestine

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Sanity](https://img.shields.io/badge/Sanity-CMS-red)](https://www.sanity.io/)

> **Amplifying Palestinian voices, sharing untold stories, and fighting for justice.**

A modern, responsive web platform dedicated to amplifying Palestinian voices and sharing stories of resilience, struggle, and hope. Built with Next.js, TypeScript, and Sanity CMS.

## ✨ Features

- 🔥 **Real-time Breaking News** - Live ticker with urgent updates from Sanity CMS
- 🔍 **Powerful Search** - Full-text search across stories, news, and testimonies
- 📱 **Responsive Design** - Optimized for all devices and screen sizes
- 🌐 **Multilingual Support** - Arabic and English content
- 📊 **Data Visualization** - Interactive statistics and infographics
- 🎨 **Modern UI/UX** - Clean, accessible design with Palestinian flag branding
- ⚡ **Performance Optimized** - Static generation and smart caching
- 🔧 **CMS Integration** - Easy content management with Sanity Studio

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/uaali/voices4pal.git
   cd voices4pal
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Fill in your Sanity project details:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2025-07-25
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) - React framework for production
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **CMS**: [Sanity](https://www.sanity.io/) - Headless content management
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) - Popular icon library
- **Deployment**: [Vercel](https://vercel.com/) - Optimized for Next.js

## 📁 Project Structure

```
voices4pal/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── search/            # Search functionality
│   │   ├── breaking/          # Breaking news page
│   │   ├── news/             # News articles
│   │   ├── stories/          # Personal stories
│   │   └── studio/           # Sanity Studio
│   ├── components/           # Reusable React components
│   │   ├── Navbar.tsx        # Navigation with search
│   │   ├── Footer.tsx        # Footer with links
│   │   └── ...
│   ├── sanity/              # Sanity CMS configuration
│   │   ├── schemaTypes/     # Content schemas
│   │   └── lib/             # Sanity client & queries
│   └── lib/                 # Utility functions
├── public/                  # Static assets
│   └── svg/                # Palestinian flag & icons
└── docs/                   # Additional documentation
```

## 🎯 Contributing

We welcome contributions from developers, designers, writers, and advocates! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Quick Contribution Steps

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Content Management

Access the Sanity Studio at `/studio` to manage content:
- Breaking news posts
- Articles and stories
- Categories and tags
- Author information

### Schema Types

- **Post**: News articles, stories, testimonies
- **Author**: Content creators and journalists
- **Category**: Content categorization
- **Block Content**: Rich text with embedded media

## 🌟 Features in Detail

### Breaking News Ticker
Real-time breaking news display fetched from Sanity CMS with automatic fallback content.

### Search Functionality
Full-text search across:
- Post titles and content
- Excerpts and descriptions
- Author information
- Tags and categories

### Responsive Design
- Mobile-first approach
- Touch-friendly interface
- Accessible navigation
- RTL support for Arabic content

## 📊 Data Sources

This project integrates with several data sources:
- [Tech for Palestine](https://techforpalestine.org/) - Statistics and data
- Sanity CMS - Content management
- Custom APIs - Real-time updates

## 🤝 Community

- **Website**: [voices4palestine.org](https://voices4palestine.org)
- **GitHub**: [github.com/uaali/voices4pal](https://github.com/uaali/voices4pal)
- **Issues**: [Report bugs or request features](https://github.com/uaali/voices4pal/issues)
- **Discussions**: [Community discussions](https://github.com/uaali/voices4pal/discussions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Palestinian journalists and storytellers
- [Tech for Palestine](https://techforpalestine.org/) community
- Open source contributors
- Human rights advocates worldwide

## 💖 Support

This project is made possible by contributors and supporters who believe in amplifying Palestinian voices. If you find this project valuable:

- ⭐ Star the repository
- 🐛 Report bugs and issues
- 💡 Suggest new features
- 🤝 Contribute code or content
- 🗣️ Share with others

---

**"من لم يهتم بأمور المسلمين فليس منهم"**

*"Muslims are like one body of a person; if the eye is sore, the whole body aches, and if the head aches, the whole body aches."* - Prophet Muhammad (ﷺ)

Built with ❤️ for justice and human rights.