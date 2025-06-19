"use client"

import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { toggleTheme } from "../store/slices/themeSlice"
import { Sun, Moon, Menu, X } from "lucide-react"
import "./Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDarkMode } = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  const handleThemeToggle = () => {
    dispatch(toggleTheme())
  }

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="logo">S SUMESH</h1>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navItems.map((item) => (
              <button key={item.href} onClick={() => scrollToSection(item.href)} className="nav-link">
                {item.label}
              </button>
            ))}
            <button onClick={handleThemeToggle} className="theme-toggle">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          <div className="nav-mobile">
            <button onClick={handleThemeToggle} className="theme-toggle">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-toggle">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="nav-mobile-menu">
            {navItems.map((item) => (
              <button key={item.href} onClick={() => scrollToSection(item.href)} className="nav-link-mobile">
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
