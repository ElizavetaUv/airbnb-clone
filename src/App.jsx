import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Card from "./components/Card"
import Data from "./data"

function App() {
  const cards = Data.map((item) => {
    return <Card key={item.id} item={item} />
  })
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <section className="cards-list">{cards}</section>
    </div>
  )
}

export default App
