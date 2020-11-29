import React from "react";

import Header from "../../Components/Header/Header.jsx";
import Titles from "../../Components/Titles/Titles.jsx";
import Footer from "../../Components/Footer/Footer.js";

import PostPage from "../Postpage/PostPage.jsx";


const Homepage= () => {
  return (
    <div className="App">
      
      <Header />
      <Titles title={"posts"} />
      <PostPage />
      <Footer />
    </div>
  );
};

export default Homepage;