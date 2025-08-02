import { Link, useLocation } from 'react-router-dom'
import { BookOpen, Video, Calendar, User, Upload, Mail } from 'lucide-react'
import './Header.css'

const Header = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: BookOpen },
    { path: '/tuition-plans', label: 'Tuition Plans', icon: Calendar },
    { path: '/free-videos', label: 'Free Videos', icon: Video },
    { path: '/register', label: 'Register', icon: User },
    { path: '/upload-video', label: 'Upload Video', icon: Upload },
    { path: '/contact', label: 'Contact', icon: Mail },
  ]

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <BookOpen size={32} />
          <span>Science Tutor</span>
        </Link>
        
        <nav className="nav">
          <ul className="nav-list">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
