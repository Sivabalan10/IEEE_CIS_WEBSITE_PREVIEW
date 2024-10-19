import React from "react";
import "../App.css";
import codeImg1 from "../assets/cv.jpg";
import codeImg2 from "../assets/ML.jpg";
import codeImg3 from "../assets/DS.jpg";
import codeImg4 from "../assets/IOT.jpg";
import codeImg5 from "../assets/design.jpg";

const cards = [
  {
    title: "Computer Vision",
    image: codeImg1,
    description:
      "Explore how we use computer vision to empower machines to interpret the visual world.",
  },
  {
    title: "Machine Learning",
    image: codeImg2,
    description:
      "Delve into algorithms that learn and improve from experience without being explicitly programmed.",
  },
  {
    title: "Data Science",
    image: codeImg3,
    description:
      "Uncover the potential of data analysis to drive actionable insights and predictions.",
  },
  {
    title: "IOT",
    image: codeImg4,
    description:
      "Understand how we connect devices to create smart solutions and seamless communication.",
  },
  {
    title: "Design",
    image: codeImg5,
    description:
      "Learn about creative problem-solving with user-centered design thinking and innovation.",
  },
];

const CardSection: React.FC = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>OUR DOMAINS</h1>
      <p style={captionStyle}>
        Discover the different fields where we innovate, create, and solve
        real-world challenges.
      </p>
      <div style={cardContainerStyle}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              ...cardWrapperStyle,
              backgroundImage: `url(${card.image})`,
            }}
            className="card"
          >
            <div style={textBlockStyle}>
              <h2 style={cardTitleStyle}>{card.title}</h2>
              <p style={cardDescriptionStyle}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles
const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px",
  backgroundColor: "white",
};

const headingStyle: React.CSSProperties = {
  fontSize: "3rem",
  color: "#1e40af",
  fontFamily: "Frisans Std Black, sans-serif", // You can use it here as well
  marginBottom: "10px",
  textAlign: "center",
};

const captionStyle: React.CSSProperties = {
  fontSize: "1.2rem",
  color: "#666",
  textAlign: "center",
  marginBottom: "30px",
  maxWidth: "800px",
  lineHeight: "1.6",
};

const cardContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "30px", // Spacing between cards
  width: "100%",
  maxWidth: "1200px",
};

const cardWrapperStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginLeft: "-50px", // Slight offset to the left
  borderRadius: "20px", // More rounded corners
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", // Stronger shadow for 3D effect
  padding: "20px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  overflow: "hidden",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  color: "white", // Ensure text is white for contrast
  height: "200px", // Adjust height for better proportion
};

const textBlockStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  zIndex: 1, // Ensure text appears above the background
  position: "relative", // Positioning for z-index
};

const cardTitleStyle: React.CSSProperties = {
  fontSize: "2rem",
  fontFamily: "Frisans Std Black, sans-serif",
};

const cardDescriptionStyle: React.CSSProperties = {
  fontSize: "1rem",
  lineHeight: "1.6",
};

// CSS for Hover Effects
export default CardSection;
