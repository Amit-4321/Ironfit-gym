import { motion } from 'framer-motion'
import styles from './Classes.module.css'

const classesData = [
  { 
    name: "AI HIIT Bootcamp", 
    time: "06:00 AM", 
    instructor: "Mike Johnson", 
    gradient: "linear-gradient(135deg, #f97316, #ea580c)",
    spots: 12 
  },
  { 
    name: "VR Yoga Flow", 
    time: "07:30 AM", 
    instructor: "Sarah Lee", 
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    spots: 8 
  },
  { 
    name: "Powerlifting Pro", 
    time: "05:00 PM", 
    instructor: "David Chen", 
    gradient: "linear-gradient(135deg, #9333ea, #a855f7)",
    spots: 15 
  },
  { 
    name: "AR Spin Revolution", 
    time: "06:30 PM", 
    instructor: "Emma Wilson", 
    gradient: "linear-gradient(135deg, #ec4899, #f472b6)",
    spots: 20 
  }
]

export default function Classes() {
  return (
    <section className={styles.classesSection}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={styles.sectionHeader}
        >
          <h2 className={`${styles.sectionTitle} ${styles.gradientText}`}>
            Live Classes
          </h2>
          <p className={styles.sectionSubtitle}>
            Join our high-tech group sessions with limited spots
          </p>
        </motion.div>

        <div className={styles.classesGrid}>
          {classesData.map((cls, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={styles.classCard}
              style={{ 
                '--card-gradient': cls.gradient,
                '--card-glow': cls.gradient.replace('135deg', '135deg, rgba(0,0,0,0.4)')
              }}
            >
              <div className={styles.cardShine} />
              
              <div className={styles.cardContent}>
                <div className={styles.classHeader}>
                  <h3 className={styles.className}>{cls.name}</h3>
                  <span className={styles.classTime}>{cls.time}</span>
                </div>
                
                <p className={styles.classInstructor}>
                  👨‍🏫 {cls.instructor} • {cls.spots} spots left
                </p>
                
                <div className={styles.classFooter}>
                  <span className={styles.bookNow}>Book Now</span>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    className={styles.colorDot}
                    style={{ background: cls.gradient }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}