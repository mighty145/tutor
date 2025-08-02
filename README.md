# Online Science Tutoring Platform

A modern React-based web application for online science tutoring, connecting students with expert tutors in Mathematics, Physics, and Chemistry.

## Features

### For Students
- **Student Registration**: Easy registration with personalized learning goals
- **Tuition Plans**: Flexible pricing options for different learning needs
- **Free Educational Videos**: Access to a library of free science tutorials
- **Contact System**: Multiple ways to connect with the tutor

### For Tutors
- **Video Upload**: Easy interface to upload educational content
- **Student Management**: Track student progress and goals
- **Flexible Scheduling**: Accommodate different time zones and preferences

## Technology Stack

- **Frontend**: React with Vite
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Styling**: Modern CSS with responsive design
- **Build Tool**: Vite for fast development and building

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd tutor
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   └── Header.css
├── pages/              # Main application pages
│   ├── Home.jsx        # Landing page
│   ├── TuitionPlans.jsx # Pricing and plans
│   ├── FreeVideos.jsx  # Video library
│   ├── StudentRegistration.jsx
│   ├── VideoUpload.jsx # Tutor video upload
│   ├── Contact.jsx     # Contact information
│   └── *.css          # Page-specific styles
├── App.jsx            # Main application component
├── App.css           # Global application styles
├── main.jsx          # Application entry point
└── index.css         # Global CSS reset and base styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features Overview

### Student Registration
- Comprehensive form with validation
- Subject selection (Math, Physics, Chemistry)
- Learning goals and experience tracking
- Flexible scheduling preferences

### Tuition Plans
- Multiple pricing tiers
- Detailed feature comparisons
- Subject-specific information
- Easy plan selection

### Free Videos
- Searchable video library
- Filter by subject and level
- Video duration and view tracking
- Responsive video cards

### Video Upload (Tutor)
- Drag-and-drop file upload
- Video metadata management
- Upload progress tracking
- File validation and size limits

### Contact System
- Multiple contact methods
- FAQ section
- Contact form with validation
- Quick action cards

## Responsive Design

The application is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile phones

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions about this project, please contact:
- Email: tutor@sciencehelp.com
- Phone: +1 (555) 123-4567

## Future Enhancements

- User authentication and profiles
- Payment integration
- Video call integration
- Progress tracking dashboard
- Mobile app version
- Multi-language support
