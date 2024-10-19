import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import DomainPage from "./DomainPage";
import EventsPage from "./EventsPage";
import AboutPage from "./AboutPage";
import CrewPage from "./CrewPage";
import Footer from "./Footer";
import BackgroundAnimation from "./BackgroundAnimation"; // Import the new component
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState<JSX.Element>(<HomePage />);

  useEffect(() => {
    const handleHashChange = () => {
      const path = window.location.pathname;
      console.log(path);
      switch (path) {
        case "/domain":
          setCurrentPage(<DomainPage />);
          break;
        case "/events":
          setCurrentPage(<EventsPage />);
          break;
        case "/about":
          setCurrentPage(<AboutPage />);
          break;
        case "/crew":
          setCurrentPage(<CrewPage />);
          break;
        default:
          setCurrentPage(<HomePage />);
          break;
      }
    };

    window.addEventListener("popstate", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

  return (
    <div>
      <BackgroundAnimation /> {/* Add the background animation component */}
      <NavBar />
      {currentPage}
      <Footer />
    </div>
  );
}

export default App;
