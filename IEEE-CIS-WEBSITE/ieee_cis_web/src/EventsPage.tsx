import Accordion from "react-bootstrap/Accordion";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import event_1 from "./assets/event1.png";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";
import firstSlideImage from "./assets/event1.png";
import secondSlideImage from "./assets/event1.png";
import thirdSlideImage from "./assets/event1.png";
import eventPoster from "./assets/poster.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useEffect } from "react";
import "./App.css";

const EventsPage = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-element");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing once the animation has been applied
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Clean up observer when the component unmounts
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div className="max_event_page">
        <br></br>
        <br></br>
        <br></br>
        <div className="slide_card">
          <Carousel>
            <Carousel.Item>
              <ExampleCarouselImage
                imagePath={firstSlideImage}
                text="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <ExampleCarouselImage
                imagePath={secondSlideImage}
                text="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <ExampleCarouselImage
                imagePath={thirdSlideImage}
                text="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="grid_layout">
          <h1
            className="fade-in-element"
            style={{
              color: "#074AA1",
              borderRadius: "8px",
            }}
          >
            <b>About the Event</b>
          </h1>
          <br></br>
          <Container>
            <Row className="event-row">
              <Col className="fade-in-element event-poster-col">
                <img
                  src={eventPoster}
                  alt="Event Poster"
                  className="event-poster"
                />
              </Col>

              <Col
                className="fade-in-element event-content-col"
                style={{
                  textAlign: "justify",
                  color: "black",
                  backgroundColor: "rgba(230, 230, 255, 0.8 )",
                  padding: "10px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="gro_event">
                  <h1 style={{ color: "black", marginTop: "15px" }}>
                    HackHive 24'
                  </h1>
                  <p
                    style={{
                      marginRight: "10px",
                      marginLeft: "10px",
                      padding: "20px",
                    }}
                  >
                    The content on the IEEE CIS event page provides essential
                    information regarding upcoming conferences, workshops, and
                    seminars organized by the IEEE Computational Intelligence
                    Society. It serves as a comprehensive resource for
                    attendees, offering details on registration, schedules, and
                    featured speakers, while also highlighting the significance
                    of computational intelligence in various fields.
                    registration.
                    <br></br>
                    <br></br>
                    <h2>Rules and Regulation</h2>
                    <li>Guidelines and standards governing the competition.</li>
                    <li>Policies and procedures applicable to the contest.</li>
                    <li>
                      Framework and criteria for competitive participation.
                    </li>
                    <li>
                      Framework and criteria for competitive participation.
                    </li>
                    <div className="button-container">
                      <Button variant="primary" className="btn-lg">
                        Register
                      </Button>
                    </div>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="fade-in-element q_a">
          <h1 style={{ color: "black" }}>FAQ</h1>
          <Accordion defaultActiveKey="4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default EventsPage;
