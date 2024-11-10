/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import './about.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-heading">About Us</h2>
        <div className="about-grid">
          <div className="about-image-container">
            <Image
              src="/main.jpg"
              alt="Profile"
              fill
              className="about-image"
            />
          </div>
          <div className="about-text">
            <p className="about-paragraph">
              Welcome to AutoPartsHub, your one-stop shop for high-quality automobile parts and accessories. We offer a wide range of parts for cars, trucks, and motorcycles,
              from engines and brakes to suspension systems and electrical components.
            </p>
            <p className="about-paragraph">
              Whether you're a professional mechanic or a DIY enthusiast, our carefully selected inventory ensures that you’ll find the right part for your vehicle at competitive prices. With fast shipping and customer-focused service, we’re committed to helping you get back on the road quickly and safely.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
