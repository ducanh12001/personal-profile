import React from "react";
import { Helmet } from "react-helmet";
import "./style.css";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin, AiOutlineSend } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Duc Anh</title>
      </Helmet>
      <section className="section home">
        <div className="home-container container grid">
          <div className="home-main grid">
            <div className="home-img"></div>
            <div className="home-social">
              <Link
                to="https://github.com/ducanh12001"
                target="_blank"
                className="social-icon"
              >
                <AiFillGithub />
              </Link>
              <Link
                to="https://www.linkedin.com/in/duc-anh-ngo-651496244/"
                target="_blank"
                className="social-icon"
              >
                <AiFillLinkedin />
              </Link>
            </div>
            <div className="home-intro">
              <h1>Ngo Duc Anh</h1>
              <h3>Frontend developer</h3>
              <p>
                I like to craft solid and scalable frontend products with great user experience. Know more about me
                through my Portfolio.
              </p>
              <Link to="/contact" className="button">
                Contact <AiOutlineSend />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
