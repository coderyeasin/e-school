import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div>
        <h1>Learn With fun on any schedule</h1>
        <p>Your gateway to knowledge and learning.</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div>
        <img src="/src/assets/hero-image.png" alt="Hero Image" />
      </div>
    </section>
  );
};

export default HeroSection;
