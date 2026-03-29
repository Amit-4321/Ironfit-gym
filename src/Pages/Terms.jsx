import styles from "./Terms.module.css"

export default function Terms() {
  return (
    <div className={styles.container}>

      <h1>Terms & Conditions</h1>

      <p>
        By using IronFit, you agree to the following terms and conditions.
      </p>

      <h2>Use of Service</h2>
      <p>
        You agree to use our website only for lawful purposes and in a way that does not harm others.
      </p>

      <h2>Membership</h2>
      <p>
        All memberships and services are subject to availability and approval.
      </p>

      <h2>Payments</h2>
      <p>
        All payments made for services are final unless stated otherwise in our refund policy.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        IronFit is not responsible for any injuries or damages resulting from the use of our services.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms at any time without prior notice.
      </p>

    </div>
  )
}