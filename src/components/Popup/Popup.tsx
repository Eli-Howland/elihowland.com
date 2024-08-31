import { ReactNode } from "react";
import "../css/Popup.css";

interface props {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Popup = ({ show, onClose, children }: props) => {
  if (!show) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          {" "}
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
