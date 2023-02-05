import React from "react";

const WelcomeComponent = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.logoText}></div>
      </div>
      <div style={styles.logo}></div>
      <button style={styles.btn}>ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</button>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: `url(/back_img.jpg)`,
    width: "1920px",
    height: "1080px",
    backgroundSize: "cover",
  },
  header: {
    height: "89px",
    borderBottom: "1px solid #1A1A1A",
    marginLeft: "70px",
    marginRight: "70px",

    paddingTop: "25px",
  },
  logoText: {
    backgroundImage: `url(/text-logo.png)`,
    width: "236px",
    height: "38px",

    backgroundSize: "cover",
  },
  logo: {
    backgroundImage: `url(/logo.png)`,
    position: "absolute",
    width: "299px",
    height: "299px",
    left: "1076px",
    top: "473px",
  },
  btn: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    padding: "18px 60px",
    width: "464px",
    height: "60px",
    top: "513px",
    left: "728px",
    background: "#1A1A1A",
    borderRadius: "8px",
    fontFamily: "Helvetica Neue",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#FFFFFF",
  },
};

export default WelcomeComponent;
