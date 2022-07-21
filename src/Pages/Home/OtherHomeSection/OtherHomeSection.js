import React from "react";
import { Container } from "react-bootstrap";
import "./OtherHomeSection.css";

const OtherHomeSection = () => {
  return (
    <Container className="mb-5">
      {/* Facilities Section */}
      <div className="facilities mt-5">
        <div>
          <i class="fas fa-bookmark fa-3x mb-3"></i>
          <h3>Personalized Matching</h3>
          <p>
            Check out our custom matching selection for the very best in unique
            or custom, handmade pieces from our shops.
          </p>
        </div>
        <div>
          <i class="fas fa-cubes fa-3x mb-3"></i>
          <h3>Wide Variety Of Destinations</h3>
          <p>
            The world is filled with such a wide variety of wonderful
            destinations and beautiful places to visit, it can be quite
            difficult to compile a list of the best ones.
          </p>
        </div>
        <div>
          <i class="fas fa-archive fa-3x mb-3"></i>
          <h3>Highly Qualified Service</h3>
          <p>
            We describe our business as a customer service business which just
            happens to deliver cleaning and waste management.
          </p>
        </div>
        <div>
          <i class="far fa-chart-bar fa-3x mb-3"></i>
          <h3>Handpicked Hotels</h3>
          <p>
            Hand Picked Hotels are pleased to feature 10 hotels with pools and
            spa facilities offering treatments from a range of top product
            houses including Elemis
          </p>
        </div>
        <div>
          <i class="fas fa-umbrella fa-3x mb-3"></i>
          <h3>Best Price Guarantee</h3>
          <p>
            Our Best Price Guarantee means that you can be sure of booking at
            the best rate.If you find a lower price elsewhere within 24 hours of
            booking, we will match the lower rate.
          </p>
        </div>
        <div>
          <i class="fas fa-users fa-3x mb-3"></i>
          <h3>24/7 Support</h3>
          <p>
            Unlike increasing throughput on a production line (making 10% more
            product is usually fairly simple), the move to 24/7 support is not
            so linear.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default OtherHomeSection;
