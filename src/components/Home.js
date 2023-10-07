import React from 'react'
import { Link } from "react-router-dom";

import "./Home.css"
const Home = () => {
  return (
    <div>
        <div class="img"></div>
        <div class="center">
            <div class="title">Welcome to IIITK Intra Sports Meet</div>
            <div class="sub_title"></div>
            <div class="btns">
                <button><Link className="nav-link" to="/Enroll">Explore</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Home