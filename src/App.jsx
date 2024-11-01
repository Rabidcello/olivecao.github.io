import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home'
import ProjectPage from './ProjectPage'
import Resume from './Resume'
import React, { Suspense, lazy } from 'react';
import {AnimatePresence, motion} from 'framer-motion';

const Contact = lazy(() => import('./Components/Contact'));

function App() {
  return(

    <AnimatedRoutes />

  )


}
function AnimatedRoutes(){
  return (
    <Router>
      <AnimatePresence>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
      </Suspense>
      </AnimatePresence>
    </Router>
  );
}

const SlideInAnimtion = ({children}) => (
  <motion.div
    initial = {{x:'-100%', opacity:0}}
    animate={{x:0, opacity:1}}
    exit={{x:'100%', opacity:0}}
    transition={{duration:0.5}}
  >
    {children}
    </motion.div>
)
export default App
