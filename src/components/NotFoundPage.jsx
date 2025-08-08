import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/eco_logo.png"; // Reuse your existing logo

const NotFoundPage = () => {
  const navigate = useNavigate();

  const containerStyle = {
    height: "100vh",
    width: "100%",
    backgroundColor: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
    textAlign: "center",
    padding: "20px",
  };

  const headingStyle = {
    fontSize: "8rem",
    fontWeight: "bold",
    color: "#3a3a3a",
    margin: 0,
  };

  const subheadingStyle = {
    fontSize: "1.5rem",
    marginTop: "10px",
    marginBottom: "30px",
    color: "#555",
  };

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "12px 24px",
    fontSize: "1rem",
    borderRadius: "8px",
    cursor: "pointer",
  };

  const logoStyle = {
    height: "60px",
    marginBottom: "20px",
  };

  return (
    <div style={containerStyle}>
      <img src={logo} alt="Eco Logo" style={logoStyle} />
      <h1 style={headingStyle}>404</h1>
      <p style={subheadingStyle}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <button style={buttonStyle} onClick={() => navigate("/")}>
        Go Back Home
      </button>
    </div>
  );
};

export default NotFoundPage;
