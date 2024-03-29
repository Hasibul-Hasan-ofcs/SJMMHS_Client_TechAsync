import React from "react";
import TitleContainer from "./title_container/TitleContainer";
import NavBar from "./navbar/NavBar";

const Header = () => {
  return (
    <div className="container p-2 md:p-3 mx-auto shadow_common" id="top-main">
      <TitleContainer></TitleContainer>
      <NavBar></NavBar>
    </div>
  );
};

export default Header;
