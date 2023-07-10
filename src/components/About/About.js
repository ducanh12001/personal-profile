import React from "react";
import { Helmet } from "react-helmet";
import "./style.css";
import CV from "../../assets/CV.pdf";
import { skills, education, experience } from "../../data";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <section className="section about">
        <div className="about-container container grid">
          <div className="about-row">
            <div className="about-col1">
              <h2 className="about-title">About Me</h2>
            </div>
            <div className="about-col2">
              <a download="CV_Frontend Developer" href={CV} className="down-btn">
                Download CV
              </a>
            </div>
          </div>
          <div className="about-row">
            <div className="about-col1">Introduce</div>
            <div className="about-col2">
              I'm a Frontend Developer. I have 6 months of experience in front-end position in a company. Good understanding of Javascript, Reactjs. Currently looking for opportunities to apply my knowledge, learn and be ready to learn more new technology.
            </div>
          </div>
          <div className="about-row">
            <div className="about-col1">Education</div>
            <div className="about-col2">
              <table>
                <tbody>
                  {education.map((d, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{d.title}</th>
                        <td>{d.description}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="about-row">
            <div className="about-col1">Experience</div>
            <div className="about-col2">
              <table>
                <tbody>
                  {experience.map((d, i) => {
                    return (
                      <>
                        <tr key={i}>
                          <th scope="row">{i + 1 + ", " + d.job}</th>
                          <td>{d.company}</td>
                          <td>{d.date}</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td colSpan={2}>{d.description}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="about-row">
            <div className="about-col1">Skills</div>
            <div className="about-col2">
              {skills.map((d, i) => {
                return (
                  <div className="" key={i}>
                    <h5 className="skill-name">{d.name}</h5>
                    <p className="skill-desc">{d.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
