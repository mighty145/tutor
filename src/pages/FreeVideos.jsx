import { useState } from 'react'
import { Play, Clock, BookOpen, Search, Filter } from 'lucide-react'
import './FreeVideos.css'

const FreeVideos = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSubject, setSelectedSubject] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All')

  // Sample video data - in a real app, this would come from your backend
  const videos = [
    {
      id: 1,
      title: 'Introduction to Quadratic Equations',
      subject: 'Mathematics',
      level: 'Grade 10',
      duration: '15:30',
      thumbnail: '/api/placeholder/320/180',
      description: 'Learn the basics of quadratic equations and how to solve them step by step.',
      views: 1250,
      uploadDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'Newton\'s Laws of Motion Explained',
      subject: 'Physics',
      level: 'Grade 11',
      duration: '22:45',
      thumbnail: '/api/placeholder/320/180',
      description: 'A comprehensive explanation of Newton\'s three laws of motion with real-world examples.',
      views: 980,
      uploadDate: '2024-01-20'
    },
    {
      id: 3,
      title: 'Organic Chemistry: Alkanes and Alkenes',
      subject: 'Chemistry',
      level: 'Grade 12',
      duration: '18:20',
      thumbnail: '/api/placeholder/320/180',
      description: 'Understanding the structure and properties of alkanes and alkenes in organic chemistry.',
      views: 750,
      uploadDate: '2024-01-25'
    },
    {
      id: 4,
      title: 'Calculus: Introduction to Derivatives',
      subject: 'Mathematics',
      level: 'College',
      duration: '25:10',
      thumbnail: '/api/placeholder/320/180',
      description: 'Learn about derivatives, their geometric interpretation, and basic differentiation rules.',
      views: 1500,
      uploadDate: '2024-02-01'
    },
    {
      id: 5,
      title: 'Thermodynamics Basics',
      subject: 'Physics',
      level: 'College',
      duration: '20:15',
      thumbnail: '/api/placeholder/320/180',
      description: 'Introduction to thermodynamics concepts including heat, work, and energy transfer.',
      views: 680,
      uploadDate: '2024-02-05'
    },
    {
      id: 6,
      title: 'Chemical Bonding and Molecular Structure',
      subject: 'Chemistry',
      level: 'Grade 11',
      duration: '30:00',
      thumbnail: '/api/placeholder/320/180',
      description: 'Explore different types of chemical bonds and how they affect molecular structure.',
      views: 890,
      uploadDate: '2024-02-10'
    }
  ]

  const subjects = ['All', 'Mathematics', 'Physics', 'Chemistry']
  const levels = ['All', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12', 'College']

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSubject = selectedSubject === 'All' || video.subject === selectedSubject
    const matchesLevel = selectedLevel === 'All' || video.level === selectedLevel
    
    return matchesSearch && matchesSubject && matchesLevel
  })

  const formatViews = (views) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`
    }
    return views.toString()
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  return (
    <div className="free-videos">
      {/* Header */}
      <section className="videos-header">
        <div className="container">
          <h1>Free Educational Videos</h1>
          <p>Access our library of free educational content covering Mathematics, Physics, and Chemistry. Perfect for self-study and exam preparation.</p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="search-filters">
        <div className="container">
          <div className="search-bar">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search videos by title or topic..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="filters">
            <div className="filter-group">
              <Filter size={18} />
              <span>Filter by:</span>
            </div>
            
            <select 
              value={selectedSubject} 
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="filter-select"
            >
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
            
            <select 
              value={selectedLevel} 
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="filter-select"
            >
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="videos-section">
        <div className="container">
          <div className="videos-stats">
            <p>Showing {filteredVideos.length} video{filteredVideos.length !== 1 ? 's' : ''}</p>
          </div>
          
          <div className="videos-grid">
            {filteredVideos.length > 0 ? (
              filteredVideos.map(video => (
                <div key={video.id} className="video-card">
                  <div className="video-thumbnail">
                    <div className="placeholder-thumbnail">
                      <Play size={48} className="play-icon" />
                      <div className="video-duration">
                        <Clock size={14} />
                        {video.duration}
                      </div>
                    </div>
                  </div>
                  
                  <div className="video-content">
                    <div className="video-meta">
                      <span className="subject-tag">{video.subject}</span>
                      <span className="level-tag">{video.level}</span>
                    </div>
                    
                    <h3 className="video-title">{video.title}</h3>
                    <p className="video-description">{video.description}</p>
                    
                    <div className="video-stats">
                      <span className="views">{formatViews(video.views)} views</span>
                      <span className="upload-date">Uploaded {formatDate(video.uploadDate)}</span>
                    </div>
                    
                    <button className="watch-btn">
                      <Play size={16} />
                      Watch Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-videos">
                <BookOpen size={64} />
                <h3>No videos found</h3>
                <p>Try adjusting your search terms or filters to find more videos.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Study Tips Section */}
      <section className="study-tips">
        <div className="container">
          <h2>How to Make the Most of These Videos</h2>
          <div className="tips-grid">
            <div className="tip">
              <div className="tip-number">1</div>
              <h3>Take Notes</h3>
              <p>Write down key concepts and formulas as you watch. Active note-taking improves retention.</p>
            </div>
            <div className="tip">
              <div className="tip-number">2</div>
              <h3>Practice Problems</h3>
              <p>After watching, solve related problems to reinforce your understanding.</p>
            </div>
            <div className="tip">
              <div className="tip-number">3</div>
              <h3>Pause and Review</h3>
              <p>Don't hesitate to pause and replay sections you find challenging.</p>
            </div>
            <div className="tip">
              <div className="tip-number">4</div>
              <h3>Ask Questions</h3>
              <p>If you need clarification, feel free to contact me for personalized help.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Want Personalized Help?</h2>
            <p>While these free videos are great for self-study, sometimes you need personalized guidance. Book a one-on-one tutoring session for targeted help with your specific challenges.</p>
            <div className="cta-actions">
              <a href="/register" className="btn btn-primary">
                Book Tutoring Session
              </a>
              <a href="/contact" className="btn btn-secondary">
                Ask a Question
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FreeVideos
