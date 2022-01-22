import { builtinModules } from "module";
import React, { useState } from "react";

type HighlightType = {
  id: string;
  title: string;
  desc: string;
  img: string;
};

const highlights: HighlightType[] = [
  {
    id: "1",
    title: "Payment card built for today’s interconnected",
    desc: "Keep your money with a bank you trust. With our safe and secure mutli-curency accounts you will never have to worry again.",
    img: "/images/highlight-1.png",
  },
  {
    id: "2",
    title: "Collect rewards based on your lifestyle",
    desc: "Keep your money with a bank you trust. With our safe and secure mutli-curency accounts you will never have to worry again.",
    img: "/images/highlight-2.png",
  },
  {
    id: "3",
    title: "Collect rewards based on your lifestyle",
    desc: "Keep your money with a bank you trust. With our safe and secure mutli-curency accounts you will never have to worry again.",
    img: "/images/highlight-3.png",
  },
];
const HighlightsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section id="highlights" className="highlight-section">
      <div className="wrapper">
        <div className="left-wrapper">
          <img
            src={highlights[selectedIndex].img}
            alt="Highlight Image"
            className="highlight-image"
          />
        </div>
        <div className="right-wrapper">
          <div className="content">
            <p className="sub-title">0{selectedIndex + 1} - Highlights</p>
            <h2 className="title">{highlights[selectedIndex].title}</h2>
            <p className="description">{highlights[selectedIndex].desc}</p>
            <div className="buttons-wrapper">
              {highlights.map((_, index) => (
                <button
                  onClick={() => {
                    setSelectedIndex(index);
                  }}
                  key={index}
                  className={`highlight-button ${
                    selectedIndex == index ? "active" : ""
                  }`}
                >
                  0{index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
