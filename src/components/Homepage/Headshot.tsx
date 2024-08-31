const Headshot = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#0f172a",
        width: "40%",
        height: "calc(100vh - 90.1px)",
        marginLeft: "auto",
        padding: "1%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{
          height: "100%",
        }}
        src="src/assets/selfie.jpg"
        alt=""
      />
    </div>
  );
};

export default Headshot;
