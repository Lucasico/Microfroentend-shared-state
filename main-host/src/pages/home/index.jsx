import React from "react";
import HeaderModule from "HeaderModule/Header";
import ContentModule from "ContentModule/Content";
import FooterModule from "FooterModule/Footer";

const Header = HeaderModule.default;
const Content = ContentModule.default;
const Footer = FooterModule.default;

import "./home.css";
export const Home = () => (
  <div className="host-container">
    <Header />
    <div className="host-content">
      <Content />
    </div>
    <Footer />
  </div>
);
