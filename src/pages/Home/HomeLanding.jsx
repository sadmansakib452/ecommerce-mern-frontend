import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomeLanding() {
  const navigate = useNavigate();

  return (
    <div className="home__landing">
      <div
        className="home__landing__content"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="home__landing__title">
          Your Online Shopping Haven Awaits
        </h1>
        <div className="home-landing-button" onClick={() => navigate("/shop")}>
          Shop Now
        </div>
      </div>

      <img
        className="home__landing__image"
        src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        alt="landing background images"
      />
    </div>
  );
}
