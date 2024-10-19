import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa"; // npm install react-icons

const HeroSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={containerStyle}>
      <div style={contentWrapperStyle}>
        <h1 style={headingStyle}>
          Explore the <span style={highlightStyle}>Future</span> with Us
        </h1>
        <p style={descriptionStyle}>
          Join the IEEE CIS REC Computational Society to dive into domains like
          AI, Machine Learning, and Robotics. Shape the future, learn from
          experts, and collaborate on real-world projects.
        </p>
        <div style={buttonContainerStyle}>
          <button
            style={
              isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle
            }
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Learn More <FaArrowRight style={iconStyle} />
          </button>
          <button style={outlineButtonStyle}>Join Now</button>
        </div>
      </div>
    </div>
  );
};

// Styles
const containerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  minHeight: "100vh",
  padding: "0 5%",
  backgroundColor: "white", // White background
  color: "#333",
  fontFamily: "Poppins, sans-serif",
};

const contentWrapperStyle: React.CSSProperties = {
  maxWidth: "50%",
  textAlign: "left",
};

const headingStyle: React.CSSProperties = {
  fontSize: "3.5rem",
  marginBottom: "20px",
  color: "#1e40af",
};

const highlightStyle: React.CSSProperties = {
  backgroundImage: "linear-gradient(to right, #ffafbd, #ffc3a0)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const descriptionStyle: React.CSSProperties = {
  fontSize: "1.25rem",
  lineHeight: "1.6",
  marginBottom: "30px",
  color: "#555",
};

const buttonContainerStyle: React.CSSProperties = {
  display: "flex",
  gap: "16px",
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: "#3b82f6",
  color: "white",
  padding: "12px 24px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "1rem",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  transition: "background-color 0.3s ease",
};

const buttonHoverStyle: React.CSSProperties = {
  backgroundColor: "#1e40af",
};

const outlineButtonStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  border: "2px solid #3b82f6",
  color: "#3b82f6",
  padding: "12px 24px",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "background-color 0.3s ease, color 0.3s ease",
};

const iconStyle: React.CSSProperties = {
  marginLeft: "8px",
};

const imageWrapperStyle: React.CSSProperties = {
  maxWidth: "40%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const heroImageStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: "12px",
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
  objectFit: "cover",
};

export default HeroSection;
