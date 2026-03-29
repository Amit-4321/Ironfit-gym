import { motion } from 'framer-motion'
import { useState, useEffect, useCallback, useRef } from 'react'
import styles from './Quotes.module.css'

const quotesData = [
  { text: "The only bad workout is the one that didn't happen.", author: "Arnold Schwarzenegger" },
  { text: "Your body can stand almost anything. It's your mind you have to convince.", author: "Unknown" },
  { text: "Success isn't always about greatness. It's about consistency.", author: "Dwayne Johnson" },
  { text: "The pain you feel today will be the strength you feel tomorrow.", author: "Brad Gelles" },
  { text: "Train insane or remain the same.", author: "Unknown" }
]

export default function Quotes() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef(null)

  const rotateQuote = useCallback(() => {
    setCurrentQuote((prev) => (prev + 1) % quotesData.length)
  }, [])

  useEffect(() => {
    let intervalId
    if (!isHovered) {
      intervalId = setInterval(rotateQuote, 4500)
    }
    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [isHovered, rotateQuote])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <section className={styles.quotesSection} ref={containerRef}>
      {/* Particles - Outside hover area */}
      <div className={styles.particlesContainer}>
        <div className={`${styles.particle} ${styles.particle1}`} />
        <div className={`${styles.particle} ${styles.particle2}`} />
        <div className={`${styles.particle} ${styles.particle3}`} />
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.quoteCardWrapper}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div 
            className={styles.quoteCard}
            initial={false}  // ✅ Remove whileInView conflict
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 30px 80px rgba(147, 51, 234, 0.4)'
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {/* Quote Content */}
            <motion.blockquote
              key={`quote-${currentQuote}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className={styles.quoteText}
            >
              "{quotesData[currentQuote].text}"
            </motion.blockquote>
            
            <motion.cite 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className={styles.quoteAuthor}
            >
              — {quotesData[currentQuote].author}
            </motion.cite>
          </motion.div>
          
          {/* Hover Status */}
          {/* {isHovered && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.hoverStatus}
            >
              ✨ Paused on hover
            </motion.div>
            
          )} */}

        </motion.div>
        
      </div>
    </section>
  )
}