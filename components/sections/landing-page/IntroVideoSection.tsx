import React from "react";

const IntroVideoSection = () => {
  return (
    <section id="intro-video" className="intro-video-section">
      <img
        src="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        className="video"
      />
      <div className="overlay">
        <button className="play-button">
          <img src="/svg/play.svg" alt="Play Icon" className="icon" />
        </button>
      </div>
    </section>
  );
};

export default IntroVideoSection;
