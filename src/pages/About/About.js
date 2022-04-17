import React from "react";
import aboutME from "../../images/aboutMe.png";
import './About.css';

const About = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-3">About <span className="text-success">ME</span></h1>
      <div className="my-5 aboutInfo">
        <div className="w-50">
          <img width={"80%"} src={aboutME} alt="" />
        </div>
        <div className="w-50 aboutInfo-text">
            <h2>Hi I'm Shimu & My Mission - </h2>
          <p>
            I want to be a professional web developer and want to create my own
            IT firm and be an successful entrepreneur. 
            However I really want to
            help those peoples who are needy and I just want to create my own
            empire with the love of people.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
