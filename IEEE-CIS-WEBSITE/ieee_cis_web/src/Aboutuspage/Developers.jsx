const Developers = () => {
  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Developers &lt;/&gt;</h2>
      <div style={cardContainerStyle}>
        {DevelopersData.map((data, index) => (
          <div key={index} style={testimonialWrapperStyle}>
            <div style={testimonialCardStyle}>
              <p style={cardTextStyle}>
                "Coding is the closest thing we have to magic."
              </p>
              <div style={profileStyle}>
                <img
                  src={data.img}
                  alt={`Developer ${index + 1}`}
                  style={imageStyle}
                />
                <div>
                  <h6 style={nameStyle}>Lorem Ipsum</h6>
                  <span style={nameSubtitleStyle}>Full-Stack Developer</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DevelopersData = [
  { img: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { img: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { img: 'https://randomuser.me/api/portraits/men/3.jpg' },
];

// Styles
const containerStyle = {
  marginTop: '80px',
  padding: '40px 16px',
  backgroundColor: 'white',
  fontFamily: 'Poppins, sans-serif',
};

const headingStyle = {
  fontSize: '4rem',
  textAlign: 'center',
  margin: '40px 0',
  color: '#333',
  letterSpacing: '0.05em',
};

const cardContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const testimonialWrapperStyle = {
  width: '100%',
  maxWidth: '33%',
  padding: '16px',
};

const testimonialCardStyle = {
  backgroundColor: '#f9f9f9',
  borderRadius: '16px',
  padding: '32px',
  border: '1px solid #ddd',
  fontWeight: '300',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
};

const cardTextStyle = {
  fontSize: '1.125rem',
  fontStyle: 'italic',
  color: '#555',
  marginBottom: '16px',
};

const profileStyle = {
  display: 'flex',
  marginTop: '32px',
  alignItems: 'center',
};

const imageStyle = {
  width: '64px',
  height: '64px',
  borderRadius: '50%',
  marginRight: '16px',
  border: '2px solid #333',
  transition: 'transform 0.3s ease',
};

const nameStyle = {
  fontSize: '1rem',
  fontWeight: '600',
  color: '#333',
  marginBottom: '4px',
};

const nameSubtitleStyle = {
  fontSize: '0.875rem',
  fontStyle: 'italic',
  color: '#777',
};

testimonialCardStyle[':hover'] = {
  transform: 'scale(1.05)',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
};


imageStyle[':hover'] = {
  transform: 'scale(1.1)',
};

export default Developers;
