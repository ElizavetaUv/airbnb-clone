import React from "react"
import "./index.css"

export default function HeroSection() {
  return (
    <section className="heroSection">
      <img className="photo-grid" src="./photo-grid.svg" />
      <h1 className="heroSection-title">Online Experiences</h1>
      <h4 className="heroSection-description">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </h4>
    </section>
  )
}
