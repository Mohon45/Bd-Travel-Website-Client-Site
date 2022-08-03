import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://mysterious-reaches-22237.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="service-sec-title mb-5">Popular Tour Places</h1>
      {/* single card */}
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
        {services.map((service, index) => (
          <div className="col" key={index}>
            <Link to={`booking/${service._id}`} className="link-card">
              <div className="card h-100 single-product hover-effect">
                <img src={service.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{service.name}</h5>
                  <p className="card-text">
                    {service.desc.slice(0, 100)} ... see more
                  </p>
                </div>
                <div className="product-desc ms-3 mb-3">
                  <Link className="by-btn" to={`booking/${service._id}`}>
                    <button className="btn btn-primary">Booking Now</button>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
