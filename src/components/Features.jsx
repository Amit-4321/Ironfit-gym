import { motion } from 'framer-motion'
import styles from './Features.module.css'

const featuresData = [
  {
    icon: "💪",
    title: "AI Strength Training",
    desc: "Personalized workouts with real-time form correction"
  },
  {
    icon: "🏃‍♂️",
    title: "Cardio Revolution",
    desc: "VR-enhanced cardio with gamified challenges"
  },
  {
    icon: "🥗",
    title: "Smart Nutrition",
    desc: "AI meal plans + grocery integration"
  },
  {
    icon: "📱",
    title: "AR Fitness Coach",
    desc: "Augmented reality personal trainer in your phone"
  }
]

export default function Features() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={styles.sectionHeader}
        >
          <h2 className={`${styles.sectionTitle} ${styles.gradientText}`}>
            Why IronFit?
          </h2>
          <p className={styles.sectionSubtitle}>
            Future of fitness with AI, AR, and cutting-edge tech
          </p>
        </motion.div>

        <div className={styles.featuresGrid}>
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={styles.featureCard}
            >
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}