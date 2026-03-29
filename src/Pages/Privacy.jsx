import styles from "./Privacy.module.css"

export default function Privacy() {
  return (
    <div className={styles.container}>

      <h1>Privacy Policy</h1>

      <p>
        Your privacy is important to us. This Privacy Policy explains how IronFit collects,
        uses, and protects your information.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect basic information such as your name, email, and usage data
        when you interact with our website.
      </p>

      <h2>How We Use Information</h2>
      <p>
        We use your information to improve our services, provide better user experience,
        and communicate important updates.
      </p>

      <h2>Cookies</h2>
      <p>
        Our website may use cookies to enhance your browsing experience.
        You can disable cookies in your browser settings.
      </p>

      <h2>Data Protection</h2>
      <p>
        We take appropriate security measures to protect your data from unauthorized access.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We may use third-party tools (like analytics) which may collect anonymous data.
      </p>

      <h2>Changes to Policy</h2>
      <p>
        We may update this Privacy Policy at any time without prior notice.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions regarding this policy, feel free to contact us.
      </p>

    </div>
  )
}