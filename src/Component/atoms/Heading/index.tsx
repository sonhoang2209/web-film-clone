import React from "react";
import Line from "../line";

interface IHeadingProps {
  children: string;
}
const Heading: React.FC<IHeadingProps> = ({ children }) => {
  return (
    <div z-10000>
      <h1 className="z-10000 px-4 mt-12 mb-6 text-4xl md:px-auto text-textColor text-700">
        {children}
      </h1>
      <Line />
    </div>
  );
};

export default Heading;
