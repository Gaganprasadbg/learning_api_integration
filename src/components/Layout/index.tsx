import React from "react";
import Header from "../Header/headerindex";
// import HeaderComponent from "../Header";
// import Footer from "../Footer";
// import Address from "../Address";

const LayoutComponent = ({ children }: any) => {
  return (
    <div className="">
      <div style={{ zIndex: "1000" }} className="fixed top-0 left-0 w-full ">
        <Header />
      </div>
      <div>{children}</div>
      
      {/* <Footer /> */}
    </div>
  );
};

export default LayoutComponent;
