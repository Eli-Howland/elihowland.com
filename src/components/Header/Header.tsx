import React, { useState } from "react";
import GitHub from "./GitHub";
import Linkedin from "./Linkedin";
import Gmail from "./Gmail";
import Popup from "../Popup/Popup";
import Banner from "../Banner/Banner";
import TodoistForm from "../Popup/TodoistForm";

type BannerStatus = "success" | "failure";

interface BannerState {
  message: string;
  status: BannerStatus;
}

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [bannerState, setBannerState] = useState<BannerState | null>(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleFormSubmit = (message: string, status: BannerStatus) => {
    setBannerState({ message, status });
    setTimeout(() => {
      setBannerState(null);
    }, 4000);
    setTimeout(() => {
      togglePopup();
    }, 500);
  };

  const iconMaxWidth: number = 8;
  return (
    <header
      className="container-fluid text-white"
      style={{ backgroundColor: "#3a3b3c" }}
    >
      {" "}
      <div className="row p-2">
        <div className="col p-2">
          <h1
            style={{
              textAlign: "left",
              fontFamily: "sans-serif",
              fontWeight: "700",
              marginLeft: "5%",
              display: "inline",
              verticalAlign: "middle",
            }}
          >
            Eli Howland
          </h1>
        </div>
        <div className="col-5 p-2">
          <h5
            style={{
              fontFamily: "sans-serif",
              fontWeight: "300",
              textAlign: "center",
              marginTop: "2%",
            }}
          >
            <a
              href="src/assets/EliHowlandResume.pdf"
              style={{ fontWeight: "700", color: "white" }}
              target="_blank"
            >
              Resume
            </a>
            <span style={{ margin: "5%" }}></span>
            <button
              onClick={togglePopup}
              style={{
                fontWeight: "700",
                color: "white",
                background: "none",
                border: "none",
                textDecoration: "underline",
              }}
            >
              Todoist
            </button>
            {/* I have the banner state management here instead of inside the popup so it stays open after it closes */}
            {bannerState && (
              <Banner
                message={bannerState.message}
                status={bannerState.status}
              ></Banner>
            )}
            <Popup show={showPopup} onClose={togglePopup}>
              <TodoistForm onSubmit={handleFormSubmit}></TodoistForm>
            </Popup>
            <span style={{ margin: "5%" }}></span>
            Project 3<span style={{ margin: "5%" }}></span>
            Project 4<span style={{ margin: "5%" }}></span>
            Project 5
          </h5>
        </div>
        <div className="col p-3" style={{ textAlign: "right" }}>
          <GitHub width={iconMaxWidth}></GitHub>
          <span style={{ marginRight: "15px" }}></span>
          <Linkedin width={iconMaxWidth}></Linkedin>
          <span style={{ marginRight: "15px" }}></span>
          <Gmail width={iconMaxWidth}></Gmail>
        </div>
      </div>
    </header>
  );
};

export default Header;
