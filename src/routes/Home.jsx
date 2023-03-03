import React from "react";
import Navbar from "../Component/Navbar";
import About from "../Component/About";
import Brand from "./Brand";
import Contact from "../Component/Contact";
import Footer from "./Footer";
import "./Home.css";
import PreviewSection from "./Preview";

function Home() {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className="home-container">
        <video src="./video/video-2.mp4" autoPlay logo muted></video>
        <h1>Buy Priemum Products</h1>
        <p>what are you waiting for?</p>
        <div className="home-btns">
          <button className="btns"> Get Started </button>
          <button className="btns"> Shop Now </button>
        </div>
      </div>
      <div>
        <Brand />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <PreviewSection />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default Home;
