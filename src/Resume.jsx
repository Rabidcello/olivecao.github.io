import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Parallax from './Components/Parallax'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import Resum from './Components/images/Oliver Resume 2024.png'
import {AnimatePresence, motion} from 'framer-motion';

function ProjectPage() {
  return (
    <>
      <Navbar/>
      <motion.div className = 'FuckYou'
          initial = {{x:'-100%', opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{duration:1}}>
        <img src={Resum} width="900" height="900"></img>
      </motion.div>
    </>
  )
}

export default ProjectPage