import { useState } from 'react'
import { Upload, Video, CheckCircle, AlertCircle, X } from 'lucide-react'
import './VideoUpload.css'

const VideoUpload = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    subject: '',
    level: '',
    duration: '',
    tags: ''
  })
  
  const [file, setFile] = useState(null)
  const [dragActive, setDragActive] = useState(false)
  const [uploadStatus, setUploadStatus] = useState(null) // 'uploading', 'success', 'error'
  const [uploadProgress, setUploadProgress] = useState(0)
  const [errors, setErrors] = useState({})

  const subjects = ['Mathematics', 'Physics', 'Chemistry']
  const levels = ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12', 'College', 'University']

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

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0])
    }
  }

  const handleFileSelect = (selectedFile) => {
    if (selectedFile) {
      // Check file type
      if (!selectedFile.type.startsWith('video/')) {
        setErrors(prev => ({ ...prev, file: 'Please select a video file' }))
        return
      }
      
      // Check file size (100MB limit)
      if (selectedFile.size > 100 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, file: 'File size should be less than 100MB' }))
        return
      }
      
      setFile(selectedFile)
      setErrors(prev => ({ ...prev, file: '' }))
    }
  }

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0])
    }
  }

  const removeFile = () => {
    setFile(null)
    setUploadStatus(null)
    setUploadProgress(0)
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.title.trim()) newErrors.title = 'Title is required'
    if (!formData.description.trim()) newErrors.description = 'Description is required'
    if (!formData.subject) newErrors.subject = 'Subject is required'
    if (!formData.level) newErrors.level = 'Level is required'
    if (!file) newErrors.file = 'Video file is required'
    
    return newErrors
  }

  const simulateUpload = () => {
    setUploadStatus('uploading')
    setUploadProgress(0)
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setUploadStatus('success')
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      // Here you would typically upload the video to your server
      console.log('Video upload data:', { formData, file })
      simulateUpload()
    } else {
      setErrors(newErrors)
    }
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  if (uploadStatus === 'success') {
    return (
      <div className="upload-success">
        <div className="success-content">
          <CheckCircle size={64} className="success-icon" />
          <h2>Video Uploaded Successfully!</h2>
          <p>Your video "{formData.title}" has been uploaded and will be available to students shortly.</p>
          <div className="video-details">
            <div className="detail">
              <strong>Subject:</strong> {formData.subject}
            </div>
            <div className="detail">
              <strong>Level:</strong> {formData.level}
            </div>
            <div className="detail">
              <strong>File:</strong> {file?.name}
            </div>
          </div>
          <button 
            onClick={() => {
              setUploadStatus(null)
              setFormData({
                title: '',
                description: '',
                subject: '',
                level: '',
                duration: '',
                tags: ''
              })
              setFile(null)
              setUploadProgress(0)
            }} 
            className="btn btn-primary"
          >
            Upload Another Video
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="video-upload">
      <div className="upload-container">
        <div className="upload-header">
          <h1>Upload Educational Video</h1>
          <p>Share your knowledge with students by uploading educational videos. These will be available for free to help students learn.</p>
        </div>

        <form onSubmit={handleSubmit} className="upload-form">
          {/* File Upload Area */}
          <div className="form-section">
            <h2><Video size={24} /> Video File</h2>
            
            <div 
              className={`file-upload-area ${dragActive ? 'drag-active' : ''} ${file ? 'has-file' : ''}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              {!file ? (
                <>
                  <Upload size={48} className="upload-icon" />
                  <h3>Drag and drop your video here</h3>
                  <p>or</p>
                  <label htmlFor="video-file" className="file-select-btn">
                    Choose Video File
                    <input
                      type="file"
                      id="video-file"
                      accept="video/*"
                      onChange={handleFileInput}
                      style={{ display: 'none' }}
                    />
                  </label>
                  <p className="file-info">Supported formats: MP4, AVI, MOV, WMV (Max 100MB)</p>
                </>
              ) : (
                <div className="file-preview">
                  <Video size={48} className="file-icon" />
                  <div className="file-details">
                    <h4>{file.name}</h4>
                    <p>{formatFileSize(file.size)}</p>
                    {uploadStatus === 'uploading' && (
                      <div className="upload-progress">
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            style={{ width: `${uploadProgress}%` }}
                          ></div>
                        </div>
                        <span>{Math.round(uploadProgress)}%</span>
                      </div>
                    )}
                  </div>
                  {uploadStatus !== 'uploading' && (
                    <button 
                      type="button" 
                      onClick={removeFile}
                      className="remove-file-btn"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
              )}
            </div>
            {errors.file && <span className="error-message">{errors.file}</span>}
          </div>

          {/* Video Information */}
          <div className="form-section">
            <h2>Video Information</h2>
            
            <div className="form-group">
              <label htmlFor="title">Video Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="e.g., Introduction to Quadratic Equations"
                className={errors.title ? 'error' : ''}
              />
              {errors.title && <span className="error-message">{errors.title}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="description">Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe what students will learn from this video..."
                rows="4"
                className={errors.description ? 'error' : ''}
              />
              {errors.description && <span className="error-message">{errors.description}</span>}
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={errors.subject ? 'error' : ''}
                >
                  <option value="">Select Subject</option>
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="level">Level *</label>
                <select
                  id="level"
                  name="level"
                  value={formData.level}
                  onChange={handleInputChange}
                  className={errors.level ? 'error' : ''}
                >
                  <option value="">Select Level</option>
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
                {errors.level && <span className="error-message">{errors.level}</span>}
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="duration">Duration (optional)</label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  placeholder="e.g., 15:30"
                />
              </div>

              <div className="form-group">
                <label htmlFor="tags">Tags (optional)</label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="e.g., algebra, equations, math"
                />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={uploadStatus === 'uploading'}
            >
              {uploadStatus === 'uploading' ? 'Uploading...' : 'Upload Video'}
            </button>
          </div>
        </form>

        {/* Upload Guidelines */}
        <div className="upload-guidelines">
          <h3>Upload Guidelines</h3>
          <ul>
            <li>Ensure video quality is clear and audio is audible</li>
            <li>Keep videos focused on specific topics for better learning</li>
            <li>Include relevant examples and step-by-step explanations</li>
            <li>Videos should be educational and appropriate for students</li>
            <li>Maximum file size is 100MB per video</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VideoUpload
