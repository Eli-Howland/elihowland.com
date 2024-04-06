import React from "react";

interface Props {
  children: string;
}

const Header = ({ children }: Props) => {
  return <div className="container text-center">{children}</div>;
};

export default Header;
