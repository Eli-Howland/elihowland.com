import React from "react";

const Introduction = () => {
  return (
    <div
      style={{
        padding: "1%",
        justifyContent: "center",
        position: "relative",
        left: "10%",
        width: "40%",
      }}
    >
      <h1 style={{ fontSize: 65, marginBottom: "5%" }}>Hello!</h1>
      <p style={{ fontSize: 32 }}>
        My name is Eli Howland. I am a Data Scientist that dabbles in software
        development and hopes to make a career out of it. Check out some
        projects, read my resume, or get in touch with me!
      </p>
    </div>
  );
};

export default Introduction;
