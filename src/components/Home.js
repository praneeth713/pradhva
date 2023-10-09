import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="img"></div>
      <div className="centr">
        <div className="title">Welcome to PRADHVA</div>
        <div className="sub_title">IIITK Intra sports meet 23-24</div>
        <div className="btns">
          <button>
            <Link className="nav-link" to="/Enroll">
              Explore
            </Link>
          </button>
        </div>
        <div style = {{top:"20px"}}
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Hurry Up!</strong> Final day to fill out the forms.
        </div>
      </div>
    </div>
  );
};

export default Home;
