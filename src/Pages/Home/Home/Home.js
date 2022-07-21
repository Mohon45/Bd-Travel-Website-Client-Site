import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../../Const/Loader/Loader";
import Banner from "../Banner/Banner";
import OtherHomeSection from "../OtherHomeSection/OtherHomeSection";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://bd-travels-website-backend.vercel.app/services")
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  let contant;
  if (loading) contant = <Loader />;
  else
    contant = (
      <div>
        <Banner></Banner>
        <Services></Services>
        <OtherHomeSection></OtherHomeSection>
      </div>
    );

  return <div>{contant}</div>;
};

export default Home;
