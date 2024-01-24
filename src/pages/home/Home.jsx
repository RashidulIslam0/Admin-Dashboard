import React from "react";
import "./home.scss";
import Sidebar from "../../Components/sidebar/Sidebar";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">containner</div>
    </div>
  );
};

export default Home;
