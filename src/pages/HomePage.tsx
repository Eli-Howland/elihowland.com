import Header from "../components/Header/Header";
import Headshot from "../components/Homepage/Headshot";
import Introduction from "../components/Homepage/Introduction";

// TODO:
// 1.Picture
// 2. Links to:
//   - github
//   - linkedin
//   - resume

const HomePage = () => {
  return (
    <div
      style={{
        display: "block",
        height: "100vh",
        maxHeight: "100vh",
        maxWidth: "100vw",
        backgroundColor: "gray",
      }}
    >
      <Header></Header>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Introduction></Introduction>
        <Headshot></Headshot>
      </div>
    </div>
  );
};

export default HomePage;
