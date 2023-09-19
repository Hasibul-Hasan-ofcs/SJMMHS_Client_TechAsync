import React from "react";
import TitleContainer from "./title_container/TitleContainer";
import NavBar from "./navbar/NavBar";

const Header = () => {
  return (
    <div
      className="container px-2 md:px-3 mx-auto shadow_common p-3"
      id="top-main"
    >
      <TitleContainer></TitleContainer>
      <NavBar></NavBar>
    </div>
  );
};

export default Header;
