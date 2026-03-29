import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import { FaInstagram, FaWhatsapp, FaFacebook, FaXTwitter } from "react-icons/fa6"

export default function Footer() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>

          {/* Logo Section */}
          <div className={styles.logoSection}>
            <h3 className={`${styles.logo} ${styles.gradientText}`}>
              IronFit
            </h3>
            <p className={styles.logoDesc}>
              Future of fitness. AI-powered training for the modern warrior.
            </p>

            {/* 🔥 Social Icons */}
            <div className={styles.socials}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>

              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer">
                <FaWhatsapp />
              </a>

              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>

              <a href="https://x.com" target="_blank" rel="noreferrer">
                <FaXTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linkSection}>
            <h4 className={`${styles.linkTitle} ${styles.gradientText}`}>
              Quick Links
            </h4>
            <ul className={styles.linkList}>
              <li onClick={() => scrollToSection("hero")} className={styles.link}>
                <span>Home</span>
              </li>

              <li onClick={() => scrollToSection("classes")} className={styles.link}>
                <span>Classes</span>
              </li>

              <li onClick={() => scrollToSection("cta")} className={styles.link}>
                <span>CTA</span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className={styles.linkSection}>
            <h4 className={`${styles.linkTitle} ${styles.gradientText}`}>
              Company
            </h4>
            <ul className={styles.linkList}>
              <li className={styles.link}>
                <Link to='/about'>About Us</Link>
              </li>

              <li className={styles.link}>
                <Link to='/careers'>Careers</Link>
              </li>

              <li className={styles.link}>
                <Link to='/trainers'>Trainers</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className={styles.linkSection}>
            <h4 className={`${styles.linkTitle} ${styles.gradientText}`}>
              Legal
            </h4>
            <ul className={styles.linkList}>
              <li className={styles.link}>
                <Link to='/privacy'>Privacy Policy</Link>
              </li>

              <li className={styles.link}>
                <Link to='/terms'>Terms</Link>
              </li>

              <li className={styles.link}>
                <Link to='/cookies'>Cookies</Link>
              </li>
            </ul>
          </div>

        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2026 IronFit Gym. Built with ❤️ for fitness warriors.</p>
        </div>
      </div>
    </footer>
  )
}