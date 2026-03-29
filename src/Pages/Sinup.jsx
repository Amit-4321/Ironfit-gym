import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import styles from './Signup.module.css'

export default function Signup() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '',
    password: '',           // ✅ Added password
    name: '',
    phone: '',
    age: '',
    goal: ''
  })
  const [errors, setErrors] = useState({})
  const [isLogin, setIsLogin] = useState(false)
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target
    if (name === 'loginEmail') setLoginEmail(value)
    if (name === 'loginPassword') setLoginPassword(value)
  }

  const validateStep2 = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email'
    if (!formData.password || formData.password.length < 6) newErrors.password = 'Password min 6 chars'
    if (!formData.phone.trim()) newErrors.phone = 'Phone required'
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = '10 digits only'
    if (!formData.age || formData.age < 16 || formData.age > 100) newErrors.age = 'Age 16-100'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep3 = () => {
    const newErrors = {}
    if (!formData.goal) {
      newErrors.goal = 'Please select your fitness goal'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNextStep2 = () => {
    if (validateStep2()) {
      setStep(3)
    }
  }

  const handleCreateAccount = () => {
    if (validateStep3()) {
      setIsSubmitting(true)
      setTimeout(() => {
        console.log('✅ Account Created:', formData)
        alert(`🎉 Account Created!\n\nWelcome ${formData.name}!\n\nEmail: ${formData.email}\nGoal: ${formData.goal}\n\nStarting your journey...`)
        navigate('/')
      }, 1500)
    }
  }

  const handleLogin = () => {
    if (!loginEmail.trim() || !loginPassword.trim()) {
      alert('Please enter email & password!')
      return
    }
    if (loginPassword.length < 6) {
      alert('Password must be at least 6 characters!')
      return
    }
    setTimeout(() => {
      alert(`✅ Login Successful!\n\nWelcome back ${loginEmail.split('@')[0]}!`)
      navigate('/')
    }, 800)
  }

  const isStep2Valid = formData.name && 
                       /\S+@\S+\.\S+/.test(formData.email) && 
                       formData.password.length >= 6 &&
                       /^\d{10}$/.test(formData.phone.replace(/\D/g, '')) &&
                       formData.age >= 16 && formData.age <= 100

  const isStep3Valid = formData.goal && isStep2Valid

  return (
    <div className={styles.signupPage}>
      <div className={styles.container}>
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${(step / 3) * 100}%` }} />
          </div>
          <div className={styles.stepIndicator}>
            <div className={`${styles.stepDot} ${step >= 1 ? styles.stepActive : ''}`}>1</div>
            <div className={`${styles.stepDot} ${step >= 2 ? styles.stepCompleted : ''}`}>2</div>
            <div className={`${styles.stepDot} ${step >= 3 ? styles.stepCompleted : ''}`}>3</div>
          </div>
        </div>

        <motion.div className={styles.mainCard}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" className={styles.stepContent}>
                <div className={styles.heroIcon}>🚀</div>
                <h1 className={styles.stepTitle}>Welcome to IronFit</h1>
                <p className={styles.stepSubtitle}>Create your free account</p>
                <button onClick={() => setStep(2)} className={styles.nextBtn}>
                  Get Started
                </button>
                <button onClick={() => setIsLogin(true)} className={styles.loginBtn}>
                  Have account? Login
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" className={styles.stepContent}>
                <button onClick={() => setStep(1)} className={styles.backBtnSmall}>← Back</button>
                <div className={styles.stepIcon}>👤</div>
                <h2 className={styles.stepTitle}>Personal Details</h2>
                
                <form className={styles.form}>
                  <div className={styles.inputGroup}>
                    <input
                      name="name"
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    />
                    {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    />
                    {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <input
                      name="password"
                      type="password"
                      placeholder="Password (min 6 chars) *"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
                    />
                    {errors.password && <span className={styles.errorMsg}>{errors.password}</span>}
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone (10 digits) *"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                    />
                    {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
                  </div>
                  
                  <div className={styles.inputGroup}>
                    <input
                      name="age"
                      type="number"
                      min="16" max="100"
                      placeholder="Age *"
                      value={formData.age}
                      onChange={handleInputChange}
                      className={`${styles.input} ${errors.age ? styles.inputError : ''}`}
                    />
                    {errors.age && <span className={styles.errorMsg}>{errors.age}</span>}
                  </div>
                  
                  <button 
                    type="button"
                    onClick={handleNextStep2}
                    disabled={!isStep2Valid}
                    className={`${styles.nextBtn} ${!isStep2Valid ? styles.btnDisabled : ''}`}
                  >
                    Next: Fitness Goal
                  </button>
                </form>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" className={styles.stepContent}>
                <button onClick={() => setStep(2)} className={styles.backBtnSmall}>← Back</button>
                <div className={styles.stepIcon}>🎯</div>
                <h2 className={styles.stepTitle}>Fitness Goal *</h2>
                <p className={styles.stepSubtitle}>Select one (Required)</p>
                
                <div className={styles.goalSelector}>
                  <label className={styles.goalOption}>
                    <input 
                      type="radio" 
                      name="goal" 
                      value="build-muscle" 
                      onChange={handleInputChange}
                    />
                    <span>Build Muscle 💪</span>
                  </label>
                  <label className={styles.goalOption}>
                    <input 
                      type="radio" 
                      name="goal" 
                      value="lose-fat" 
                      onChange={handleInputChange}
                    />
                    <span>Lose Fat 🔥</span>
                  </label>
                  <label className={styles.goalOption}>
                    <input 
                      type="radio" 
                      name="goal" 
                      value="get-fit" 
                      onChange={handleInputChange}
                    />
                    <span>Get Fit 🏃</span>
                  </label>
                </div>
                
                {errors.goal && <div className={styles.errorContainer}>{errors.goal}</div>}
                
                <div className={styles.summary}>
                  <h3>📋 Quick Summary:</h3>
                  <div className={styles.summaryList}>
                    <span>👤 {formData.name || 'Enter name'}</span>
                    <span>📧 {formData.email || 'Enter email'}</span>
                    <span>📱 {formData.phone || 'Enter phone'}</span>
                  </div>
                </div>
                
                <button 
                  onClick={handleCreateAccount}
                  disabled={!isStep3Valid || isSubmitting}
                  className={`${styles.createBtn} ${!isStep3Valid || isSubmitting ? styles.btnDisabled : ''}`}
                >
                  {isSubmitting 
                    ? 'Creating Account...' 
                    : '✅ Create Account & Start Training!'
                  }
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Login Modal */}
          <AnimatePresence>
            {isLogin && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={styles.loginModal}
              >
                <div className={styles.loginCard}>
                  <h3 className={styles.loginTitle}>Quick Login</h3>
                  <form className={styles.loginForm}>
                    <input 
                      name="loginEmail"
                      type="email"
                      placeholder="Email *"
                      value={loginEmail}
                      onChange={handleLoginInputChange}
                      className={styles.input}
                    />
                    <input 
                      name="loginPassword"
                      type="password"
                      placeholder="Password *"
                      value={loginPassword}
                      onChange={handleLoginInputChange}
                      className={styles.input}
                    />
                    <button 
                      type="button" 
                      onClick={handleLogin}
                      className={styles.loginBtnPrimary}
                    >
                      Sign In
                    </button>
                  </form>
                  <button onClick={() => setIsLogin(false)} className={styles.backBtn}>
                    ← Back to Signup
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}