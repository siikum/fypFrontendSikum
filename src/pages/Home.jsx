import React from "react";
import "../styles/home.css";
import ScrollMountain from "../components/ScrollMountain";
import Navbar from "../components/Navbar";
// import SentimentAnalysis from "../components/SentimentAnalysis";
import ReactPlayer from "react-player";
import Footer from "../components/Footer"; // Import Footer component
import Slider from "../components/Slider"; // Import Slider
import MultiLayerParallax from "./trial/MultiLayerParallax";

const Home = () => {
  return (
    <main className="bg-amber-50">
      <Navbar />
      <MultiLayerParallax />

      {/* Explore Beyond Imagination Section */}
      <div className="explore-section">
        <h1 className="explore-heading">
          Explore Worlds <br />
          Beyond Imagination
        </h1>
      </div>
      {/* Slider added here */}
      <Slider />
      <div className="home-container">
        <div className="home-header">
          {/* <h1>
            Moments
            <br />
            to share
          </h1> */}
        </div>
        <div className="home-content">
          <div className="video-container">
            <div className="video-row">
              <ReactPlayer
                url="/assets/videos/humla-1.mp4"
                className="video-item"
                playing
                muted
                loop
              />
              <ReactPlayer
                url="/assets/videos/manag-pt-1.mp4"
                className="video-item"
                playing
                muted
                loop
              />
            </div>
            <div className="video-row">
              <ReactPlayer
                url="/assets/videos/manang-pt-2.mp4"
                className="video-item"
                playing
                muted
                loop
              />
              <ReactPlayer
                url="/assets/videos/terai.mp4"
                className="video-item"
                playing
                muted
                loop
              />
            </div>
          </div>
        </div>
      </div>
      {/* Footer added here */}
      <Footer />
    </main>
  );
};

export default Home;
