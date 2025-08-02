import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import TuitionPlans from './pages/TuitionPlans'
import FreeVideos from './pages/FreeVideos'
import StudentRegistration from './pages/StudentRegistration'
import VideoUpload from './pages/VideoUpload'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tuition-plans" element={<TuitionPlans />} />
            <Route path="/free-videos" element={<FreeVideos />} />
            <Route path="/register" element={<StudentRegistration />} />
            <Route path="/upload-video" element={<VideoUpload />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
