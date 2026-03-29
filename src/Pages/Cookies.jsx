// Cookies.jsx

import styles from "./Cookies.module.css"

export default function Cookies() {
  return (
    <div className={styles.container}>
      <h1>Cookies Policy</h1>

      <p>
        IronFit uses cookies to enhance your browsing experience and improve our services.
      </p>

      <h2>What are cookies?</h2>
      <p>
        Cookies are small data files stored on your device when you visit a website.
      </p>

      <h2>How we use cookies</h2>
      <ul>
        <li>To keep you logged in</li>
        <li>To analyze traffic (Google Analytics)</li>
        <li>To show relevant ads</li>
      </ul>

      <h2>Types of cookies</h2>
      <ul>
        <li><strong>Essential:</strong> Required for login & basic features</li>
        <li><strong>Analytics:</strong> Track usage</li>
        <li><strong>Marketing:</strong> Ads & promotions</li>
      </ul>

      <h2>Your control</h2>
      <p>
        You can disable cookies anytime from your browser settings.
      </p>

      <h2>Updates</h2>
      <p>
        We may update this policy anytime.
      </p>
    </div>
  )
}