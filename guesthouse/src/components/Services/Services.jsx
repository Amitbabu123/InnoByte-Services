import backgroundImage from '../../assets/palash.webp'; // Import your background image here

const Services = () => {
  return (
    <div
      className="relative flex items-center justify-center md:justify-end text-center py-15 px-4 md:px-20 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '70vh', // Adjust the height as needed
      }}
    >
      <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(1.2) opacity(0.7)' }}></div>
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div> {/* Overlay to darken background */}
      <div className="relative z-20 flex items-center justify-center w-full max-w-md md:max-w-lg lg:max-w-xl" style={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.9)', color: 'black', marginRight: '10%' }}> {/* Added semi-transparent white background */}
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">SERVICES</h1>
          <div className="text-lg mb-8">
            <p className="mb-4">
              Strive Only For The Best. 
              <span className="icon-[ri--shield-star-line]"></span> {/* Assuming this is a custom class */}
            </p>
            <p className="mb-4">
              High Class Security.
              <span className="icon-[ri--shield-star-line]"></span> {/* Assuming this is a custom class */}
            </p>
            <p className="mb-4">
              24 Hours Room Service
              <span className="icon-[ri--24-hours-line]"></span> {/* Assuming this is a custom class */}
            </p>
            <p className="mb-4">
              Restaurant
              <x-ri-restaurant-2-fill /> {/* Assuming this is a custom component */}
            </p>
            <p>
              Tourist Guide Support
              <span className="icon-[ri--map-2-line]"></span> {/* Assuming this is a custom class */}
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
