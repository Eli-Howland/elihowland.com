import React, { useState } from "react";
import { Link } from "react-router-dom";
import GitHub from "./GitHub";
import Linkedin from "./Linkedin";
import Gmail from "./Gmail";
import Popup from "../Popup/Popup";
import Banner from "../Banner/Banner";
import TodoistForm from "../Popup/TodoistForm";
import PasswordForm from "../Popup/PasswordForm";

type BannerStatus = "success" | "failure";

interface BannerState {
  message: string;
  status: BannerStatus;
}

const Header: React.FC = () => {
  const [showTodoistPopup, setShowTodoistPopup] = useState(false);
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const [bannerState, setBannerState] = useState<BannerState | null>(null);

  const handlePasswordFormSubmit = (message: string, status: BannerStatus) => {
    if (status === "success") {
      setShowPasswordPopup(false);
      setShowTodoistPopup(true);
      console.log(sessionStorage.getItem("isAuthenticated"));
    } else {
      //   setBannerState({ message, status: "failure" });
      //   setTimeout(() => setBannerState(null), 1000);
    }
  };

  const handleTodoistClick = () => {
    const isAuthenticated = sessionStorage.getItem("isAuthenticated");
    console.log(sessionStorage.getItem("isAuthenticated"));
    if (isAuthenticated) {
      setShowTodoistPopup(true);
    } else {
      setShowPasswordPopup(true);
    }
  };

  const handleTodoistFormSubmit = (message: string, status: BannerStatus) => {
    setBannerState({ message, status });
    setTimeout(() => setBannerState(null), 4000);
    setShowTodoistPopup(false);
  };

  return (
    <header
      className="container-fluid text-white"
      style={{ backgroundColor: "#3a3b3c" }}
    >
      <div className="row p-2">
        <div className="col p-2">
          <h1
            style={{
              textAlign: "left",
              fontFamily: "sans-serif",
              fontWeight: "700",
              marginLeft: "5%",
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
            <button onClick={handleTodoistClick} style={buttonStyle}>
              Todoist
            </button>
            {bannerState && (
              <Banner
                message={bannerState.message}
                status={bannerState.status}
              />
            )}
            <span style={{ margin: "5%" }}></span>
            <Link
              to="/wedding"
              style={{ fontWeight: "700", color: "white" }}
              target="_blank"
            >
              Wedding
            </Link>
          </h5>
        </div>
        <div className="col p-3" style={{ textAlign: "right" }}>
          <GitHub width={iconMaxWidth} />
          <span style={{ marginRight: "15px" }}></span>
          <Linkedin width={iconMaxWidth} />
          <span style={{ marginRight: "15px" }}></span>
          <Gmail width={iconMaxWidth} />
        </div>
      </div>

      <Popup
        show={showPasswordPopup}
        onClose={() => setShowPasswordPopup(false)}
      >
        <PasswordForm onSubmit={handlePasswordFormSubmit} />
      </Popup>

      <Popup show={showTodoistPopup} onClose={() => setShowTodoistPopup(false)}>
        <TodoistForm onSubmit={handleTodoistFormSubmit} />
      </Popup>
    </header>
  );
};

const buttonStyle = {
  fontWeight: "700",
  color: "white",
  background: "none",
  border: "none",
  textDecoration: "underline",
};

const iconMaxWidth: number = 8;

export default Header;
