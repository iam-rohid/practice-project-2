import Link from "next/link";
import React from "react";

const PartnersSection = () => {
  return (
    <section id="partners" className="partners-section">
      <div className="container">
        <div>
          <p className="sub-title">Our Pertners</p>
          <h2 className="title">
            We provide cashback and exclusive offers on the brands you love
          </h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="wrapper">
          <div className="partners-grid">
            {Array.from({ length: 12 }).map((_, index) => (
              <div className="grid-item" key={index}>
                <img
                  src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  alt="Brand Image"
                  className="partner-image"
                />
              </div>
            ))}
          </div>
          <ul className="partners-list">
            <CategoryListItem name="Fashion" href="#" />
            <CategoryListItem name="Food & Drink" href="#" />
            <CategoryListItem name="Grocery" href="#" />
            <CategoryListItem name="Leisure & Entertainment" href="#" />
            <CategoryListItem name="Technology" href="#" />
            <CategoryListItem name="Health & Wellness" href="#" />
            <CategoryListItem name="Digital Subscriptions" href="#" />
            <CategoryListItem name="Travel" href="#" />
            <CategoryListItem name="Lifestyle" href="#" />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

const CategoryListItem = ({
  name,
  href,
  onClick,
}: {
  name: string;
  href: string;
  onClick?: () => void;
}) => (
  <li className="list-item" onClick={onClick}>
    <Link href={href}>
      <a>{name}</a>
    </Link>
  </li>
);
