import { useState } from 'react'
import { User, Mail, Phone, BookOpen, Calendar, MessageSquare } from 'lucide-react'
import './StudentRegistration.css'

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    grade: '',
    subjects: [],
    preferredSchedule: '',
    goals: '',
    experience: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const subjects = ['Mathematics', 'Physics', 'Chemistry']
  const grades = ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12', 'College/University', 'Adult Learner']
  const schedules = ['Weekday Mornings', 'Weekday Afternoons', 'Weekday Evenings', 'Weekend Mornings', 'Weekend Afternoons', 'Flexible']

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        subjects: checked 
          ? [...prev.subjects, value]
          : prev.subjects.filter(subject => subject !== value)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
    
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
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.grade) newErrors.grade = 'Please select your grade level'
    if (formData.subjects.length === 0) newErrors.subjects = 'Please select at least one subject'
    if (!formData.preferredSchedule) newErrors.preferredSchedule = 'Please select your preferred schedule'
    if (!formData.goals.trim()) newErrors.goals = 'Please tell us about your learning goals'

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      // Here you would typically send the data to your backend
      console.log('Registration submitted:', formData)
      setIsSubmitted(true)
    } else {
      setErrors(newErrors)
    }
  }

  if (isSubmitted) {
    return (
      <div className="registration-success">
        <div className="success-content">
          <div className="success-icon">✅</div>
          <h2>Registration Successful!</h2>
          <p>Thank you for registering, {formData.firstName}! I'll review your information and get back to you within 24 hours to discuss your tutoring plan.</p>
          <div className="next-steps">
            <h3>What happens next?</h3>
            <ul>
              <li>I'll review your learning goals and subject preferences</li>
              <li>Schedule a free 15-minute consultation call</li>
              <li>Create a personalized tutoring plan for you</li>
              <li>Send you the first lesson materials</li>
            </ul>
          </div>
          <button onClick={() => setIsSubmitted(false)} className="btn btn-primary">
            Register Another Student
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="registration">
      <div className="registration-container">
        <div className="registration-header">
          <h1>Student Registration</h1>
          <p>Join our online tutoring program and start your journey to academic excellence</p>
        </div>

        <form onSubmit={handleSubmit} className="registration-form">
          {/* Personal Information */}
          <div className="form-section">
            <h2><User size={24} /> Personal Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={errors.firstName ? 'error' : ''}
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={errors.lastName ? 'error' : ''}
                />
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="email"><Mail size={18} /> Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="phone"><Phone size={18} /> Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="form-section">
            <h2><BookOpen size={24} /> Academic Information</h2>
            
            <div className="form-group">
              <label htmlFor="grade">Grade Level *</label>
              <select
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={handleInputChange}
                className={errors.grade ? 'error' : ''}
              >
                <option value="">Select your grade level</option>
                {grades.map(grade => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
              {errors.grade && <span className="error-message">{errors.grade}</span>}
            </div>

            <div className="form-group">
              <label>Subjects of Interest *</label>
              <div className="checkbox-group">
                {subjects.map(subject => (
                  <label key={subject} className="checkbox-label">
                    <input
                      type="checkbox"
                      name="subjects"
                      value={subject}
                      checked={formData.subjects.includes(subject)}
                      onChange={handleInputChange}
                    />
                    <span className="checkmark"></span>
                    {subject}
                  </label>
                ))}
              </div>
              {errors.subjects && <span className="error-message">{errors.subjects}</span>}
            </div>
          </div>

          {/* Schedule Preferences */}
          <div className="form-section">
            <h2><Calendar size={24} /> Schedule Preferences</h2>
            
            <div className="form-group">
              <label htmlFor="preferredSchedule">Preferred Schedule *</label>
              <select
                id="preferredSchedule"
                name="preferredSchedule"
                value={formData.preferredSchedule}
                onChange={handleInputChange}
                className={errors.preferredSchedule ? 'error' : ''}
              >
                <option value="">Select preferred schedule</option>
                {schedules.map(schedule => (
                  <option key={schedule} value={schedule}>{schedule}</option>
                ))}
              </select>
              {errors.preferredSchedule && <span className="error-message">{errors.preferredSchedule}</span>}
            </div>
          </div>

          {/* Additional Information */}
          <div className="form-section">
            <h2><MessageSquare size={24} /> Tell Me About Yourself</h2>
            
            <div className="form-group">
              <label htmlFor="goals">Learning Goals *</label>
              <textarea
                id="goals"
                name="goals"
                value={formData.goals}
                onChange={handleInputChange}
                placeholder="What do you hope to achieve through tutoring? (e.g., improve grades, prepare for exams, understand concepts better)"
                className={errors.goals ? 'error' : ''}
                rows="4"
              />
              {errors.goals && <span className="error-message">{errors.goals}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="experience">Previous Tutoring Experience</label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="Have you had tutoring before? What worked well? What didn't?"
                rows="3"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Any questions or additional information you'd like to share?"
                rows="3"
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Register for Tutoring
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default StudentRegistration
