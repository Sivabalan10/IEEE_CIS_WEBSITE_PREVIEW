// App.tsx
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import DomainPage from "./DomainPage";
import EventsPage from "./EventsPage";
import AboutPage from "./AboutPage";
import CrewPage from "./CrewPage";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState<JSX.Element>(<HomePage />);

  useEffect(() => {
    const handleHashChange = () => {
      const path = window.location.pathname;

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

    // Listen for changes in the URL
    window.addEventListener("popstate", handleHashChange);
    handleHashChange(); // Call it initially

    return () => {
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

  return (
    <div>
      <NavBar />
      {currentPage}
    </div>
  );
}

export default App;
