import React, { useState } from "react";
import "../css/Banner.css";

interface Props {
  message: string;
  status: "success" | "failure";
}

const Banner = ({ message, status }: Props) => {
  const bannerClass = status == "success" ? "banner-success" : "banner-failure";
  return <div className={`banner ${bannerClass}`}>{message}</div>;
};

export default Banner;
