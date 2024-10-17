import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>
        IEEE CIS REC
        <br />
        <span style={gradientTextStyle}>Computational Society</span>
      </h1>
      <p style={descriptionStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum elit sed libero luctus
        fringilla. Fusce eget augue id nulla blandit maximus ut semper leo.
      </p>

      
      <div style={contentWrapperStyle}>
        <VideoPlayer src={video1} />
        <div style={textBlockStyle}>
          <h2 style={subHeadingStyle}>Video 1 Overview</h2>
          <p style={textDescriptionStyle}>
            This video highlights the achievements of our computational society. Dive in to learn more about our projects and initiatives.
          </p>
        </div>
      </div>

      
      <div style={contentWrapperStyle}>
        <div style={textBlockStyle}>
          <h2 style={subHeadingStyle}>Video 2 Overview</h2>
          <p style={textDescriptionStyle}>
            Discover how our members are leveraging cutting-edge technologies in competitions and real-world problem-solving.
          </p>
        </div>
        <VideoPlayer src={video2} />
      </div>
    </div>
  );
};

const VideoPlayer = ({ src }) => (
  <video
    autoPlay
    loop
    muted
    style={videoStyle}
  >
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);


const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '80px',
  fontFamily: 'Poppins, sans-serif',
};

const headingStyle = {
  fontSize: '4rem',
  textAlign: 'center',
  letterSpacing: '0.05em',
};

const gradientTextStyle = {
  backgroundImage: 'linear-gradient(to right, #3b82f6, #1e40af)',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
};

const descriptionStyle = {
  marginTop: '40px',
  fontSize: '1.125rem',
  textAlign: 'center',
  color: '#555',
  maxWidth: '800px',
};

const contentWrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  margin: '40px 0',
  width: '100%',
  maxWidth: '1200px',
};

const textBlockStyle = {
  width: '45%',
  padding: '0 16px',
};

const subHeadingStyle = {
  fontSize: '2rem',
  color: '#1e40af',
  marginBottom: '8px',
};

const textDescriptionStyle = {
  fontSize: '1rem',
  color: '#666',
  lineHeight: '1.6',
};

const videoStyle = {
  width: '45%',
  margin: '8px',
  borderRadius: '8px',
  border: '1px solid #3b82f6',
  boxShadow: '0px 0px 10px rgba(59, 130, 246, 0.5)',
};

export default HeroSection;
