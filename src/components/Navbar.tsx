"use client"
import { useState } from "react"
import Link from "next/link"
import './navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-brand">AutoPartsHub</div>

          {/* Mobile menu button */}
          <div className="mobile-menu-btn">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="menu-toggle-btn"
            >
              <svg
                className="menu-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="desktop-menu">
            <Link href="#home" className="navbar-link">Home</Link>
            <Link href="#about" className="navbar-link">About</Link>
            <Link href="#products" className="navbar-link">Products</Link>
            <Link href="#contact" className="navbar-link">Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-items">
              <Link
                href="#home"
                className="mobile-menu-link"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="mobile-menu-link"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#products"
                className="mobile-menu-link"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                href="#contact"
                className="mobile-menu-link"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
