import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
// import mapboxgl from "mapbox-gl";
// import MapboxDirections from "@mapbox/mapbox-gl-directions";
import "./Footer.css";
import pin from "../../../images/google-map-pin.png";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
// mapboxgl.accessToken =
//   "pk.eyJ1IjoicHJvZ3JhbW1pbmdoZXJvIiwiYSI6ImNrdXc3OG04MzFsbHgzM255ZnU0NDRtbmsifQ.sEGTkRu5uz5PBIoho1An0w";

const Footer = () => {
  const defaultProps = {
    center: {
      lat: 24.382788672516575,
      lng: 88.60520839691162,
    },
    zoom: 13,
  };
  return (
    <div className="footer">
      <Container>
        <div className="row py-4">
          <div className="col-md-4">
            <div className="d-flex">
              <img src="https://i.ibb.co/8DJ6TL3/logo.png" alt="" />
              <p className="ms-4 text-white">
                Download the BD Travel app for the fastest solution
              </p>
            </div>
            <div className="m-4">
              <img src="https://i.ibb.co/Y7nkJdt/App-Store-footer.png" alt="" />
              <img
                src="https://i.ibb.co/8B9S3C5/Google-Play-footer.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-4 office-location text-white">
            <h3>Office LOcation</h3>
            <p>1297, Zero point, Shaheb Bazar, Rajshahi, Bangladesh</p>

            <div className="contact">
              <h4>Contact Us</h4>
              <p>Email: bdtravel@gmail.com</p>
              <p>Phone: 0177777733</p>
            </div>
          </div>

          <div className="col-md-4 location-map">
            <div style={{ height: "250px", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={24.382788672516575}
                  lng={88.60520839691162}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </Container>
      <hr />
      <p style={{ textAlign: "center" }}>
        &copy;Copyright-2021 Junior Developer. Developed by{" "}
        <span className="footer-intro">Md.Mohon</span>
      </p>
    </div>
  );
};

export default Footer;
