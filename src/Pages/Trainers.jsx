import styles from "./Trainers.module.css"

export default function Trainers() {

  const trainers = [
    {
      name: "Rahul Sharma",
      role: "Strength Coach",
      desc: "Expert in muscle building & strength training.",
      exp: "3+ Years",
    },
    {
      name: "Ankit Verma",
      role: "Fat Loss Specialist",
      desc: "Helps clients achieve rapid fat loss.",
      exp: "2+ Years",
    },
    {
      name: "Priya Singh",
      role: "Yoga Trainer",
      desc: "Focus on flexibility & recovery.",
      exp: "4+ Years",
    },
    {
      name: "Aman Gupta",
      role: "Personal Trainer",
      desc: "1-on-1 coaching for best results.",
      exp: "2+ Years",
    },
  ]

  return (
    <div className={styles.container}>

      {/* Header */}
      <div className={styles.header}>
        <h1>Meet Our Trainers 💪</h1>
        <p>Train with certified experts and transform your fitness journey.</p>
      </div>

      {/* Trainers Grid */}
      <div className={styles.grid}>
        {trainers.map((trainer, index) => (
          <div key={index} className={styles.card}>

            {/* Avatar */}
            <div className={styles.avatar}>
              {trainer.name.charAt(0)}
            </div>

            {/* Info */}
            <h3>{trainer.name}</h3>
            <span className={styles.role}>{trainer.role}</span>
            <p>{trainer.desc}</p>

            <div className={styles.exp}>
              Experience: {trainer.exp}
            </div>

            <button className={styles.btn}>
              Contact Trainer
            </button>

          </div>
        ))}
      </div>

    </div>
  )
}