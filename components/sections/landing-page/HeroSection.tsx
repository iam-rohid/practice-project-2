import React from "react";

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="wrapper">
        <div className="left-section">
          <div className="content">
            <a href="#" className="gradient-button">
              🎉 Join waiting list
            </a>
            <h1 className="title-text">
              Intelligent payment card with unlimited rewards
            </h1>
            <p className="description-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              sunt doloribus, quae rerum possimus iure!
            </p>

            <div className="buttons-row">
              <a href="#" className="store-button">
                <img
                  src="/svg/apple-icon.svg"
                  alt="Android Icon"
                  className="icon"
                />
                <p>iOS App comming soon</p>
              </a>
              <a href="#" className="store-button">
                <img
                  src="/svg/android-icon.svg"
                  alt="Android Icon"
                  className="icon"
                />
                <p>iOS App comming soon</p>
              </a>
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="alignment-test"></div>
          <img
            src="/images/hero-image.png"
            alt="Hero Image"
            className="hero-image"
          />
        </div>
      </div>

      <div className="banner">
        <div className="container">
          <div className="details">
            <h3 className="title-text">Become a member for £99/year.</h3>
            <p className="description-text">
              Memberships pays for itself and comes with a money-back guarantee.
            </p>
          </div>
          <form className="waiting-list-form">
            <div className="input-wrapper">
              <label htmlFor="waiting-list-input">+44</label>
              <input type="text" id="waiting-list-input" />
            </div>
            <button type="submit" className="submit-button">
              Join waiting list
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
