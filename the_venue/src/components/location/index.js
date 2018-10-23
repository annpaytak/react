import React from 'react';

const Location = () => {
  return(
    <div className="location_wrapper">

      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13085925.156428399!2d-98.25076252616945!3d36.79920281473657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9073cfe6d9a606a!2sMagnolia+Dallas+Downtown!5e0!3m2!1suk!2sua!4v1540064073380"
        width="100%" 
        height="500px" 
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>

    </div>
  );
};

export default Location;