import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div>
      <div>
        <h2 className="my-3 text-center container">Holidays to inspire you…</h2>
      </div>
      <div className="container my-5 ">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="./imgs/cruise-bg.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
            <div className="detail">CRUISES</div>

            <img
              src="./imgs/tour-4.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
            <div className="detail">ALL INCLUSIVE HOLIDAYS</div>
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="./imgs/tour-8.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />
            <div className="detail">CITY TRIPS</div>
            <img
              src="./imgs/tour-1.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
            <div className="detail">FAMILY HOLIDAYS</div>
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />
            <div className="detail">BEACH HOLIDAYS</div>

            <img
              src="./imgs/tour-3.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
            <div className="detail">LUXURY HOLIDAYS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
