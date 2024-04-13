import React, { ReactNode } from "react";
import GitHub from "./GitHub";
import Linkedin from "./Linkedin";

const Header = () => {
  return (
    <header
      className="container-fluid text-center"
      style={{ backgroundColor: "lightblue" }}
    >
      {" "}
      <div className="row border">
          <div className="col p-2">
            <h1 style={{textAlign: "left"}}>
              Eli Howland
            </h1>
          </div>
      </div>
      <div className="row p-1">
        {" "}
        <div className="col-1">
          <GitHub width={50}></GitHub>
        </div>
        <div className="col-1">
          <Linkedin width={50}></Linkedin>
        </div>
      </div>
    </header>
  );
};

export default Header;
