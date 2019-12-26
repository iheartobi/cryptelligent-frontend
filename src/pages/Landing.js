import React from "react";
import bg from "../assets/Top-5-Benefits-of-Business-Loans-that-can-Help-to-Expand-Your-Business-DY605074.jpg";
import SignUp from "./SignUp";

const styles = {
  backgroundContainer: {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // width: `calc(100vw + 48px)`,
    margin: -24,
    height: 900
  }
};

const landing = () => {
  return (
    <div style={styles.backgroundContainer}>
      <div className="site-name">
         <center><h1> Cryptelligent </h1></center> 
          <h4> Stack Your Coins Intelligently</h4>
        </div>
        <br></br>
        <br></br>
      <div>
        <SignUp />
      </div>
    </div>
  );
};

export default landing;
