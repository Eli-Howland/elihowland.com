// import WeddingIntroduction from "../components/Wedding/WeddingIntroduction";
import WeddingHeader from "../components/Wedding/WeddingHeader";
import "../App.css";
// import "../components/css/Wedding/Wedding.css";
import "../components/css/Wedding/Wedding.css";

const WeddingPage = () => {
  return (
    <div className="wedding-default">
      {/* I should do a wedding header. If I wrote better code earlier I could have reused the header object but I didn't */}
      {/* <WeddingIntroduction></WeddingIntroduction> */}
      <WeddingHeader></WeddingHeader>
    </div>
  );
};

export default WeddingPage;
