import styles from "./About.module.css"

export default function About() {
  return (
    <div className={styles.container}>

      {/* Header */}
      <div className={styles.header}>
        <h1>About IronFit 🏋️‍♂️</h1>
        <p>
          Transforming fitness with modern technology and expert guidance.
        </p>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <p>
          IronFit is a modern fitness platform designed to help individuals achieve their fitness goals with ease.
          We combine advanced training methods, expert guidance, and AI-powered insights to deliver the best experience.
        </p>

        <p>
          Our mission is to make fitness accessible, effective, and enjoyable for everyone.
          Whether you are a beginner or a professional athlete, IronFit provides the tools and support you need.
        </p>

        <p>
          We believe in consistency, discipline, and smart training.
          Join us and take the first step towards a stronger and healthier life.
        </p>
      </div>

    </div>
  )
}