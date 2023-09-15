import React from "react";
// import LandingImage1 from "../../assets/bg-landing-1.jpg";

export default function HomeAbout() {
  return (
    <div className="home__about">
      <h1 className="home__about__title">ABOUT US</h1>
      <p data-aos="fade-up" data-aos-duration="1000">
        "Our mission is to provide top-quality products that not only impress
        visually but also deliver exceptional value. We're dedicated to ensuring
        your shopping experience is enjoyable, making it effortless for you to
        discover the ideal items for your needs."
      </p>
      <img
        className="home__about__bottomImg"
        src="https://d2c0vv5h4nuw6w.cloudfront.net/images/bg-landing.jpg"
        alt="landing background images"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <img
        className="home__about__rightImg"
        src="https://d2c0vv5h4nuw6w.cloudfront.net/images/bg-landing-1.jpg"
        alt="landing background images"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
    </div>
  );
}
