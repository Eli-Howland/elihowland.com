import React, { ReactNode } from "react";
import GitHub from "./GitHub";
import Linkedin from "./Linkedin";

const Header = () => {
  const iconMaxWidth: number = 8
  return (
    <header
      className="container-fluid text-white"
      style={{ backgroundColor: "#3a3b3c" }}
    >
      {" "}
      <div className="row p-2">
          <div className="col p-2">
            <h1 style={{textAlign: "left", fontFamily:"sans-serif", fontWeight:"700", marginLeft:"5%"}}>
              Eli Howland
            </h1>
          </div>
          <div className="col-5 p-2">
            <h5 style={{fontFamily: "sans-serif", fontWeight:"300", textAlign:"center", marginTop:"2%"}}>
              Project 1
              <span style={{margin:"5%"}}></span>
              Project 2
              <span style={{margin:"5%"}}></span>
              Project 3
              <span style={{margin:"5%"}}></span>
              Project 4
              <span style={{margin:"5%"}}></span>
              Project 5
            </h5>
          </div>
          <div className="col p-3" style={{textAlign: "right"}}>
            <GitHub width={iconMaxWidth}></GitHub>
            <span style={{marginRight: "15px"}}></span>
            <Linkedin width={iconMaxWidth}></Linkedin>
          </div>
      </div>
    </header>
  );
};

export default Header;
