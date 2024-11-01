import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Parallax from './Components/Parallax'
import Contact from './Components/Contact'
import Projects from './Components/Projects'

function ProjectPage() {
  return (
    <>
      <div>
        <Navbar/>
        <Projects/>
      </div>
    </>
  )
}

export default ProjectPage