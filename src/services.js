import { services } from "./data";

const Service = () => {
  return (
    <div>
      <section className="section services" id="services">
        <div className="section-title">
          <h2>
            our <span>services</span>
          </h2>
        </div>
        <div className="section-center services-center">
          {services.map((Service) => {
            const { id, icon, text, title } = Service;
            return (
              <article className="service" key={id}>
                <span className="service-icon">
                  <i className={icon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{title}</h4>
                  <p className="service-text">{text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Service;
