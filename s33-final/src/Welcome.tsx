import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

const WelcomePage: React.FC = () => {
  return (
    <div className="welcome-container">
      <img
        src="https://images.vexels.com/media/users/3/210291/isolated/preview/b14c83d1653154e5d146be54ed784373-gautama-buddha-stroke.png"
        alt="Buddha"
        className="buddha-image"
      />
      <h1>Welcome to the Bates Meditation App</h1>
      <div className="button-container">
        <Link to="/audio">
          <button className="nav-button">Go to Audio Page</button>
        </Link>
        <Link to="/images">
          <button className="nav-button">Go to Images Page</button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
