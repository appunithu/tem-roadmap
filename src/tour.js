import React from "react";
import { tours } from "./data";

const Tour = () => {
  return (
    <div>
      <section className="section" id="tours">
        <div className="section-title">
          <h2>
            featured <span>tours</span>
          </h2>
        </div>

        <div className="section-center featured-center">
          {tours.map((tour) => {
            const { id, info, text, title, location, cost, date, image } = tour;

            return (
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={image} className="tour-img" alt="" />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{text}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>{" "}
                      {location}
                    </p>
                    <p>6 days</p>
                    <p>{cost}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Tour;
