import React from "react";
import { Link } from "react-router-dom";

// Importing Images
import yogaImg from "../../assets/yoga.svg";

// Importing Styles
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <div className="left">
          <h1>Welcome to Yoga Classes</h1>
          <p>
            The yoga classes happens every month in the city and you can enroll
            now!
          </p>
          <div className="button-container">
            <Link to="/enroll" className="btn-primary">
              Enroll Now
            </Link>
          </div>
        </div>
        <div className="right">
          <img src={yogaImg} alt="yogaImg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
