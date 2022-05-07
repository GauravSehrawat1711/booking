import React from "react";
import "./CityFeatures.css";
export const CityFeatures = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://blog.thomascook.in/wp-content/uploads/2018/05/img-7-3-e1526876027464.jpg"
          alt="" className="image"
        />
        <div className="title">
          <h1>Dehli,india</h1>
          <h2>Beautiful place</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg"
          alt="" className="image"
        />
        <div className="title">
          <h1>agra,india</h1>
          <h2>best place</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.thenewsminute.com/sites/default/files/styles/slideshow_image_size/public/Kerala_Tourism_rep_image_Facebook_08082021_1200-compressed.jpg?itok=svnzOLkk"
          alt="" className="image"
        />
        <div className="title">
          <h1>kerla,india</h1>
          <h2>Nice place</h2>
        </div>
      </div>
    </div>
  );
};
