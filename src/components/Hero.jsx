import { motion, useInView } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Hero.module.css'


const gymImages = [
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&fit=crop',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&fit=crop'
]

export default function Hero() {
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [imageIndex, setImageIndex] = useState(0)
  const navigate = useNavigate()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const quotes = [
    "💦 Sweat is fat crying",
    "🚀 Stronger every day", 
    "🔥 Push your limits",
    "🏋️ No pain, no gain"
  ]

  // Quote rotation
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIndex(prev => (prev + 1) % quotes.length)
    }, 3000)
    return () => clearInterval(quoteInterval)
  }, [])

  // Image rotation (slower)
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageIndex(prev => (prev + 1) % gymImages.length)
    }, 5000)
    return () => clearInterval(imageInterval)
  }, [])

  const handleStartTrial = () => {
    navigate('/signup')
  }

  const handleDemo = () => {
    navigate('/demo')
  }

  return (
    <>
      
    
    <section ref={ref} className={styles.heroSection}>
      <motion.div className={styles.heroBg} />
      
      <div className={styles.heroContainer}>
        <motion.div className={styles.heroContentLeft}>
          <motion.h1 className={styles.heroTitle}>
            <span className={styles.gradientText}>IronFit</span>
            <span className={styles.heroTitleSubtitle}>
              <span className={styles.gradientTextEmerald}>Gym</span>
            </span>
          </motion.h1>
          
          <p className={styles.heroSubtitle}>
            Join 25K+ warriors crushing fitness goals with AI-powered training programs
          </p>
          
          <motion.div className={styles.heroQuote}>
            "{quotes[quoteIndex]}"
          </motion.div>
          
          <div className={styles.heroButtons}>
            <motion.button
              className={styles.btnPrimary}
              onClick={handleStartTrial}
            >
              Start Free Trial 
              <svg className={styles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
            
            <motion.button
              className={styles.btnSecondary}
              onClick={handleDemo}
            >
              Watch Demo Video
            </motion.button>
          </div>
        </motion.div>

        {/* Image Carousel Cards */}
        <motion.div className={styles.heroGraphics}>
          <motion.div 
            className={styles.carouselCard}
            style={{ 
              backgroundImage: `url(${gymImages[imageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, 3, -3, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            onClick={() => navigate('/gallery')}
          />
          <motion.div 
            className={styles.carouselCardSecondary}
            style={{ 
              backgroundImage: `url(${gymImages[(imageIndex + 1) % gymImages.length]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, -2, 2, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
            onClick={() => navigate('/gallery')}
          />
          <motion.div 
            className={styles.carouselCardTertiary}
            style={{ 
              backgroundImage: `url(${gymImages[(imageIndex + 2) % gymImages.length]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 4
            }}
            onClick={() => navigate('/gallery')}
          />
        </motion.div>
      </div>
    </section>
    </>
  )
}