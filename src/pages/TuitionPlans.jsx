import { Link } from 'react-router-dom'
import { Check, Clock, Users, Star, BookOpen } from 'lucide-react'
import './TuitionPlans.css'

const TuitionPlans = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: '$30',
      period: 'per hour',
      description: 'Perfect for occasional help and homework assistance',
      features: [
        '1-on-1 online tutoring sessions',
        'Flexible scheduling',
        'Email support',
        'Homework help',
        'Basic progress tracking',
        'Session recordings available'
      ],
      popular: false,
      subjects: ['Mathematics', 'Physics', 'Chemistry']
    },
    {
      name: 'Standard Plan',
      price: '$50',
      period: 'per session (1.5 hours)',
      description: 'Most popular choice for regular tutoring and exam prep',
      features: [
        'Extended 1.5-hour sessions',
        'Priority scheduling',
        'Email & phone support',
        'Customized study materials',
        'Detailed progress reports',
        'Exam preparation strategies',
        'Free makeup sessions',
        'WhatsApp support'
      ],
      popular: true,
      subjects: ['Mathematics', 'Physics', 'Chemistry']
    },
    {
      name: 'Premium Plan',
      price: '$200',
      period: 'per month (4 sessions)',
      description: 'Comprehensive tutoring package for serious students',
      features: [
        '4 sessions per month (1.5 hours each)',
        'Priority booking',
        '24/7 support access',
        'Personalized study plan',
        'Weekly progress reviews',
        'Unlimited practice materials',
        'Parent progress meetings',
        'College admission guidance',
        'Free additional resources'
      ],
      popular: false,
      subjects: ['Mathematics', 'Physics', 'Chemistry']
    }
  ]

  const subjects = [
    {
      name: 'Mathematics',
      icon: '📐',
      topics: ['Algebra', 'Calculus', 'Geometry', 'Statistics', 'Trigonometry', 'Linear Algebra'],
      levels: ['Grade 9-12', 'College Level', 'University Level']
    },
    {
      name: 'Physics',
      icon: '⚛️',
      topics: ['Mechanics', 'Thermodynamics', 'Optics', 'Electricity & Magnetism', 'Modern Physics', 'Quantum Physics'],
      levels: ['Grade 9-12', 'College Level', 'University Level']
    },
    {
      name: 'Chemistry',
      icon: '🧪',
      topics: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Analytical Chemistry', 'Biochemistry'],
      levels: ['Grade 9-12', 'College Level', 'University Level']
    }
  ]

  return (
    <div className="tuition-plans">
      {/* Header Section */}
      <section className="plans-header">
        <div className="container">
          <h1>Tuition Plans</h1>
          <p>Choose the perfect plan for your learning journey. All plans include expert tutoring in Mathematics, Physics, and Chemistry.</p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pricing-section">
        <div className="container">
          <h2>Choose Your Plan</h2>
          <div className="plans-grid">
            {plans.map((plan, index) => (
              <div key={index} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                
                <div className="plan-header">
                  <h3>{plan.name}</h3>
                  <div className="price">
                    <span className="amount">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                  <p className="plan-description">{plan.description}</p>
                </div>

                <div className="plan-features">
                  <ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <Check size={20} className="check-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="plan-subjects">
                  <h4>Subjects Included:</h4>
                  <div className="subjects-list">
                    {plan.subjects.map((subject, subjectIndex) => (
                      <span key={subjectIndex} className="subject-tag">{subject}</span>
                    ))}
                  </div>
                </div>

                <div className="plan-action">
                  <Link to="/register" className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}>
                    Choose This Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Detail */}
      <section className="subjects-detail">
        <div className="container">
          <h2>Subjects We Cover</h2>
          <div className="subjects-grid">
            {subjects.map((subject, index) => (
              <div key={index} className="subject-detail-card">
                <div className="subject-header">
                  <div className="subject-icon">{subject.icon}</div>
                  <h3>{subject.name}</h3>
                </div>
                
                <div className="subject-content">
                  <div className="topics">
                    <h4><BookOpen size={18} /> Topics Covered</h4>
                    <ul>
                      {subject.topics.map((topic, topicIndex) => (
                        <li key={topicIndex}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="levels">
                    <h4><Star size={18} /> Levels Available</h4>
                    <ul>
                      {subject.levels.map((level, levelIndex) => (
                        <li key={levelIndex}>{level}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Why Choose Our Tutoring?</h2>
          <div className="features-grid">
            <div className="feature">
              <Clock size={40} />
              <h3>Flexible Scheduling</h3>
              <p>Book sessions at times that work for you, including evenings and weekends</p>
            </div>
            <div className="feature">
              <Users size={40} />
              <h3>Personalized Learning</h3>
              <p>Customized lessons based on your learning style and academic goals</p>
            </div>
            <div className="feature">
              <Star size={40} />
              <h3>Expert Instruction</h3>
              <p>Learn from an experienced tutor with expertise in all science subjects</p>
            </div>
            <div className="feature">
              <BookOpen size={40} />
              <h3>Comprehensive Materials</h3>
              <p>Access to study guides, practice problems, and additional resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Learning?</h2>
            <p>Join hundreds of students who have improved their grades with our expert tutoring</p>
            <div className="cta-actions">
              <Link to="/register" className="btn btn-primary">
                Register Now
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Have Questions? Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TuitionPlans
