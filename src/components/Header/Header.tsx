import React, { ReactNode } from "react";

const Header = () => {
  return (
    <header
      className="conatiner text-center"
      style={{ backgroundColor: "lightblue" }}
    >
      {" "}
      <div className="row">
        {" "}
        <div className="col-8 border">1 of 1</div>
        <div className="col-4"> 1 of 2</div>
      </div>
    </header>
  );
};

export default Header;
