import './App.css'
import Home from './components/Home'
import Resume from './components/Resume'
import TechBlog from './components/TechBlog'
import Projects from './components/Projects'
import PersonalBlog from './components/PersonalBlog'
import Logo from './components/Logo'

function App() {
  return (
    <>
      <header>
        <div className="logo-section">
          <Logo />
          <h1>TechStoriesOfSrinidhi</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#tech-blog">Tech Blog</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#personal-blog">Personal Blog</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Home />
        <Resume />
        <TechBlog />
        <Projects />
        <PersonalBlog />
      </main>
    </>
  )
}

export default App
