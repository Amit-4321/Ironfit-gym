import styles from "./Careers.module.css"

export default function Careers() {
  return (
    <div className={styles.container}>

      {/* Heading */}
      <div className={styles.header}>
        <h1>Join IronFit Team 🚀</h1>
        <p>
          Be a part of the future of fitness. Work with passionate people and build something amazing.
        </p>
      </div>

      {/* Jobs Section */}
      <div className={styles.jobs}>

        {/* Job Card 1 */}
        <div className={styles.card}>
          <h3>Fitness Trainer</h3>
          <p>Help clients achieve their fitness goals with personalized training.</p>

          <ul>
            <li>Experience: 1+ years</li>
            <li>Location: On-site</li>
            <li>Type: Full-time</li>
          </ul>

          <button className={styles.btn}>Apply Now</button>
        </div>

        {/* Job Card 2 */}
        <div className={styles.card}>
          <h3>Nutrition Expert</h3>
          <p>Create diet plans and guide members for better health.</p>

          <ul>
            <li>Experience: 1+ years</li>
            <li>Location: Hybrid</li>
            <li>Type: Part-time</li>
          </ul>

          <button className={styles.btn}>Apply Now</button>
        </div>

        {/* Job Card 3 */}
        <div className={styles.card}>
          <h3>Frontend Developer</h3>
          <p>Build modern UI and improve user experience.</p>

          <ul>
            <li>Experience: 0-1 years</li>
            <li>Location: Remote</li>
            <li>Type: Internship</li>
          </ul>

          <button className={styles.btn}>Apply Now</button>
        </div>

        {/* Job Card 4 */}
        <div className={styles.card}>
          <h3>Gym Manager</h3>
          <p>Manage daily operations and ensure smooth functioning.</p>

          <ul>
            <li>Experience: 2+ years</li>
            <li>Location: On-site</li>
            <li>Type: Full-time</li>
          </ul>

          <button className={styles.btn}>Apply Now</button>
        </div>

      </div>

    </div>
  )
}