"use client"
import { useState } from "react"
import './contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Here you would typically send the form data to your backend
    // For demonstration, we'll just simulate an API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert("Message sent successfully!")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      alert("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="name" className="contact-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="contact-input"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="contact-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="contact-input"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="contact-label">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="contact-textarea"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`contact-submit-btn ${isSubmitting ? 'disabled' : ''}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
