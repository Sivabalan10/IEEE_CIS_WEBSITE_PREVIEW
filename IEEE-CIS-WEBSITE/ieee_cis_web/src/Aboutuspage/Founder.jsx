import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import codeImg from '../assets/Group.png';

const Founder = () => {
  const imageControls = useAnimation();
  const textControls = useAnimation();
  const iconControls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        textControls.start({ x: -50, opacity: 1, transition: { duration: 1 } });
        imageControls.start({ x: 50, opacity: 1, transition: { duration: 1 } });
        iconControls.start({ y: 50, opacity: 1, transition: { duration: 1 } });
      } else {
        textControls.start({ x: 50, opacity: 1, transition: { duration: 1 } });
        imageControls.start({ x: -50, opacity: 1, transition: { duration: 1 } });
        iconControls.start({ y: -50, opacity: 1, transition: { duration: 1 } });
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, textControls, imageControls, iconControls]);

  return (
    <div
      style={{
        marginTop: '80px',
        overflow: 'hidden',
        height: '100vh',
        fontFamily: 'Poppins, sans-serif',
        backgroundColor: 'white',
      }}
    >
      <h2
        style={{
          fontSize: '4rem',
          textAlign: 'center',
          margin: '24px 0',
          letterSpacing: '0.05em',
        }}
      >
        Meet our <span style={gradientTextStyle}>Founder</span>
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        
        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            position: 'absolute',
            left: '40px',
            top: '35%',
            transform: 'translateY(-50%)',
          }}
          initial={{ y: 0, opacity: 0.8 }}
          animate={iconControls}
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0e76a8" />
          <FontAwesomeIcon icon={faInstagram} size="2x" color="#e4405f" />
          <FontAwesomeIcon icon={faFacebook} size="2x" color="#4267B2" />
        </motion.div>

        
        <motion.div
          style={{
            width: '45%',
            maxWidth: '600px',
            padding: '0 8px',
          }}
          initial={{ x: 0, opacity: 0 }}
          animate={imageControls}
        >
          <img
            src={codeImg}
            alt="Coding"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </motion.div>

        
        <motion.div
          style={{
            width: '45%',
            padding: '0 8px',
          }}
          initial={{ x: 0, opacity: 0 }}
          animate={textControls}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '8px', color: 'black' }}>Weeknd</h2>
          <h4 style={{ fontSize: '1.75rem', marginBottom: '8px', color: 'red' }}>
            Canadian Artist
          </h4>
          <p style={{ fontSize: '1.5rem', color: '#999', marginBottom: '8px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum elit sed
            libero luctus fringilla. Fusce eget augue id nulla blandit maximus ut semper leo.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const gradientTextStyle = {
  backgroundImage: 'linear-gradient(to right, #3b82f6, #1e40af)',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
};

export default Founder;
