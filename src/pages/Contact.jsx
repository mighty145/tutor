import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      // Here you would typically send the message to your backend
      console.log('Contact form submitted:', formData)
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          preferredContact: 'email'
        })
      }, 3000)
    } else {
      setErrors(newErrors)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'tutor@sciencehelp.com',
      description: 'Send me an email and I\'ll respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Call or text for urgent questions'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Mon-Fri: 9 AM - 7 PM',
      description: 'Available for calls and video consultations'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Online Tutoring',
      description: 'Serving students worldwide via video calls'
    }
  ]

  const faqs = [
    {
      question: 'How do I schedule a tutoring session?',
      answer: 'After registering, I\'ll contact you within 24 hours to discuss your needs and schedule your first session at a convenient time.'
    },
    {
      question: 'What subjects do you teach?',
      answer: 'I specialize in Mathematics, Physics, and Chemistry for grade 9-12 and college level students.'
    },
    {
      question: 'How are sessions conducted?',
      answer: 'All sessions are conducted online via video call. I use interactive whiteboards and screen sharing for effective learning.'
    },
    {
      question: 'Do you offer group sessions?',
      answer: 'Yes, I offer both individual and small group sessions (2-4 students) at discounted rates.'
    },
    {
      question: 'What if I need to cancel a session?',
      answer: 'You can cancel or reschedule sessions with at least 24 hours notice without any penalty.'
    }
  ]

  if (isSubmitted) {
    return (
      <div className="contact-success">
        <div className="success-content">
          <div className="success-icon">✅</div>
          <h2>Message Sent Successfully!</h2>
          <p>Thank you for contacting me, {formData.name}! I'll get back to you within 24 hours.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="contact">
      {/* Header */}
      <section className="contact-header">
        <div className="container">
          <h1>Contact Me</h1>
          <p>Have questions about tutoring or need help with your studies? I'm here to help! Reach out through any of the methods below.</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info-section">
        <div className="container">
          <h2>Get in Touch</h2>
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="contact-info-card">
                  <div className="info-icon">
                    <Icon size={32} />
                  </div>
                  <h3>{info.title}</h3>
                  <p className="info-details">{info.details}</p>
                  <p className="info-description">{info.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2><MessageCircle size={28} /> Send Me a Message</h2>
              <p>Fill out the form below and I'll respond as soon as possible</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={errors.name ? 'error' : ''}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="Enter your email"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={errors.subject ? 'error' : ''}
                  placeholder="What's this about?"
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="preferredContact">Preferred Contact Method</label>
                <select
                  id="preferredContact"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleInputChange}
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone Call</option>
                  <option value="text">Text Message</option>
                  <option value="video">Video Call</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={errors.message ? 'error' : ''}
                  placeholder="Tell me how I can help you..."
                  rows="6"
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <div className="actions-grid">
            <div className="action-card">
              <h3>New Student?</h3>
              <p>Register for tutoring and let's discuss your learning goals</p>
              <a href="/register" className="btn btn-primary">Register Now</a>
            </div>
            <div className="action-card">
              <h3>Browse Plans</h3>
              <p>Check out our tutoring plans and find the perfect fit</p>
              <a href="/tuition-plans" className="btn btn-secondary">View Plans</a>
            </div>
            <div className="action-card">
              <h3>Free Resources</h3>
              <p>Start learning with our free educational videos</p>
              <a href="/free-videos" className="btn btn-secondary">Watch Videos</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
