import React from 'react'
import { Helmet } from 'react-helmet'
import { dataportfolio } from '../../data';
import './style.css'

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <section className="section portfolio">
        <div className="portfolio-container container grid">
          <h2 className="section-title">Portfolio</h2>
          <div className="port-list">
            {dataportfolio.map((d, i) => {
              return (
                <div key={i} className="port-item">
                  <img src={d.img} alt="" />
                  <div className="content">
                    <p>{d.description}</p>
                    <a href={d.link} target="_blank">View project</a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio