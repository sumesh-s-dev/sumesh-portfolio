"use client"

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { setTheme } from "./store/slices/themeSlice"
import "./App.css"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme) {
      dispatch(setTheme(savedTheme === "dark"))
    } else if (prefersDark) {
      dispatch(setTheme(true))
    }
  }, [dispatch])

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
