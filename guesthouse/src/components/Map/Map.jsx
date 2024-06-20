import React from 'react';

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.501598139105!2d86.857215474787!3d23.586337295056076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1718725057482!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0, borderRadius: '8px' }} // Example: Adding border radius for styling
        loading="lazy"
        allowFullScreen=""
        referrerPolicy="no-referrer-when-downgrade"
        title="Kingsukh Guest House Location"
      ></iframe>
    </div>
  );
};

export default Map;
