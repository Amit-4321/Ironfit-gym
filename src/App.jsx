import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Sidebar from './components/Sidebar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Quotes from './components/Quotes.jsx'
import Classes from './components/Classes.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import Gallery from './Pages/Gallery.jsx'
import Signup from './Pages/Sinup.jsx'
import Demo from './Pages/Demo.jsx'
import Cookies from './Pages/Cookies.jsx'
import Careers from './Pages/Career.jsx'
import Trainers from './Pages/Trainers.jsx'
import About from './Pages/About.jsx'
import Terms from './Pages/Terms.jsx'
import Privacy from './Pages/Privacy.jsx'


export default function App() {
  const location = useLocation()

  return (
    <>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>

          <Route path='/' element={
            <>
              <Sidebar />

              <div id="hero"><Hero /></div>
              <div id="features"><Features /></div>
              <div id="quotes"><Quotes /></div>
              <div id="classes"><Classes /></div>
              <div id="cta"><CTA /></div>
              <div id="footer"><Footer /></div>
            </>
          } />

          <Route path='/gallery' element={<Gallery />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/demo' element={<Demo />} />
          <Route path='/cookies' element={<Cookies />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/trainers' element={<Trainers />} />
          <Route path='/about' element={<About />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/privacy' element={<Privacy />} />

        </Routes>
      </AnimatePresence>
    </>
  )
}