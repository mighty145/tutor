import { Link } from 'react-router-dom'
import { BookOpen, Users, Award, Clock, ChevronRight } from 'lucide-react'
import './Home.css'

const Home = () => {
  const subjects = [
    { name: 'Mathematics', icon: '📐', description: 'Algebra, Calculus, Geometry, Statistics' },
    { name: 'Physics', icon: '⚛️', description: 'Mechanics, Thermodynamics, Optics, Quantum' },
    { name: 'Chemistry', icon: '🧪', description: 'Organic, Inorganic, Physical Chemistry' },
  ]

  const features = [
    { icon: Users, title: 'Personalized Learning', description: 'One-on-one tutoring tailored to your needs' },
    { icon: Clock, title: 'Flexible Scheduling', description: 'Learn at your own pace and convenience' },
    { icon: Award, title: 'Expert Tutor', description: 'Professional science tutor with years of experience' },
    { icon: BookOpen, title: 'Free Resources', description: 'Access to educational videos and materials' },
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Master Science with Expert Online Tutoring
          </h1>
          <p className="hero-subtitle">
            Professional tutoring in Mathematics, Physics, and Chemistry. 
            Get personalized lessons that help you excel in your studies.
          </p>
          <div className="hero-actions">
            <Link to="/register" className="btn btn-primary">
              Start Learning Today
              <ChevronRight size={20} />
            </Link>
            <Link to="/free-videos" className="btn btn-secondary">
              Watch Free Videos
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-elements">
            <div className="element math">📐</div>
            <div className="element physics">⚛️</div>
            <div className="element chemistry">🧪</div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="subjects">
        <div className="container">
          <h2>Subjects I Teach</h2>
          <div className="subjects-grid">
            {subjects.map((subject, index) => (
              <div key={index} className="subject-card">
                <div className="subject-icon">{subject.icon}</div>
                <h3>{subject.name}</h3>
                <p>{subject.description}</p>
                <Link to="/tuition-plans" className="subject-link">
                  Learn More <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose Our Tutoring?</h2>
          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    <Icon size={40} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Excel in Science?</h2>
            <p>Join hundreds of students who have improved their grades with our tutoring</p>
            <div className="cta-actions">
              <Link to="/register" className="btn btn-primary">
                Register Now
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
