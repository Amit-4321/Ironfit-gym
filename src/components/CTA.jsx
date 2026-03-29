import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import styles from './CTA.module.css'


export default function CTA() {
  const navigate = useNavigate();
  return (
    <section className={styles.ctaSection}>
      <div className={styles.gridPattern} />
      
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className={styles.ctaCard}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`${styles.ctaTitle} ${styles.gradientText}`}
          >
            Ready to Transform?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.ctaSubtitle}
          >
            First month FREE + AI Fitness Assessment + Personal Coach Setup
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={styles.ctaButtons}
          >
            <motion.button className={styles.btnPrimary}
            onClick={() => navigate('/signup')}>
              🚀 Get Started Now
            </motion.button>
            <motion.button className={styles.btnSecondary}
            onClick={() => window.location.href="tel:+1-833-833-9373" } >
              📞 Schedule Call
            </motion.button>
            <motion.button className={styles.btnSecondary}
            onClick={()=> window.open("https://wa.me/+1-833-833-9373", "_blank")}
            >
              📞 Chat on WhatsApp
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}