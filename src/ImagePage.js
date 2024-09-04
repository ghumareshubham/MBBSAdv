

import React from 'react';

import img1 from './images/img1.jpg'; // Adjust the path according to your folder structure
import img2 from './images/img2.jpg'; // Adjust the path according to your folder structure

const ImagePage = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f0f0f0', // Light gray background
    padding: '20px',
  };

  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px',
  };

  const imageStyle = {
    width: '350px',  // Set the desired width
    height: 'auto',  // Maintain aspect ratio
    borderRadius: '8px', // Rounded corners for images
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 4)', // Subtle shadow
  };

  const headingStyle = {
    color: '#333', // Dark gray color
    marginBottom: '10px',
    fontSize: '3rem', // Larger font size
    fontWeight: 'bold', // Bold text
    animation: 'bounce 2s infinite', // Apply animation
  };

  const linkStyle = {
    color: '#007BFF', // Bootstrap primary color
    textDecoration: 'none',
    fontSize: '28px',
  };


  const keyframes = `
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;

// Inject keyframes into the style sheet
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img src={img1} alt="Image 1" style={imageStyle} />
        <img src={img2} alt="Image 2" style={imageStyle} />
      </div>
      <h1 style={headingStyle}>Interested Candidate Please Fill This Form    <br />
      👇</h1>
      <a href="https://forms.gle/jZrtnCKEv4y7uKoF8" target="_blank" rel="noopener noreferrer" style={linkStyle}>
      Click Here
      </a>
    </div>
  );
};

export default ImagePage;