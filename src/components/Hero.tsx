"use client"
import './hero.css'

export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <h1 className="hero-heading">
                    Welcome to Our Website
                </h1>
                <p className="hero-description">
                    We sell original automobile products around the globe
                </p>
                <button className="hero-button">
                    Get in Touch
                </button>
            </div>
        </section>
    )
}
