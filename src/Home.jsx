import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Parallax from './Components/Parallax'
import Contact from './Components/Contact'
import Projects from './Components/Projects'

function Home() {
  const [count, setCount] = useState(0)

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
  return (
    <>
      <div>
        <Navbar/>
        <Parallax />
        <About/>
        <Contact />
      </div>
    </>
  )
}

export default Home
