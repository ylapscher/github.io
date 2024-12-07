# Personal Portfolio & Travel Tracker

A modern, interactive portfolio website built with Next.js that showcases my professional experience, hobbies, and travel adventures.

## Features

### 🗺️ Interactive Travel Maps
- World map showing countries visited and lived in
- US map with state-by-state tracking
- Interactive tooltips and hover states
- Dynamic statistics for places visited

### 🎨 Personal Sections
- Professional experience and skills
- Hobby showcase with custom icons
- Barber portfolio with image gallery
- Reading list integration with Goodreads

### 💻 Technical Highlights
- Built with Next.js 13 (App Router)
- Responsive design with Tailwind CSS
- Dark mode support
- Interactive maps using react-simple-maps
- TypeScript for type safety
- Dynamic data loading and state management

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/ylapscher/ylapscher.github.io.git
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the site

## Project Structure

```
app/
├── components/     # Reusable UI components
├── data/          # Static data files
├── hobbies/       # Hobbies page
├── travel/        # Travel tracking features
├── us-travel/     # US states map
└── api/           # API routes
public/
├── data/          # GeoJSON files
└── images/        # Static images
```

## Technologies Used

- Next.js 13
- TypeScript
- Tailwind CSS
- React Simple Maps
- Hero Icons
- GitHub Pages (Deployment)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
