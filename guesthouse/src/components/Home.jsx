import { useState } from 'react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('../src/assets/ayodhya.webp')" }}>
      <header className="flex justify-between items-center p-4 bg-opacity-50 text-white bg-pink-500 md:bg-transparent">
        <div className="flex items-center ml-12 md:ml-8"> {/* Increased left margin for logo */}
          <span className="text-xl font-bold font-logo">Kingsukh <br /> Guesthouse</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-pink-500">Home</a>
          <a href="#about" className="hover:text-pink-500">About</a>
          <a href="#services" className="hover:text-pink-500">Services</a>
          <a href="#rooms" className="hover:text-pink-500">Rooms</a>
          <a href="#gallery" className="hover:text-pink-500">Gallery</a>
          <a href="#contact" className="hover:text-pink-500">Contact</a>
        </nav>
        <button className="hidden md:block bg-pink-700 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded md:mr-12"> {/* Decreased right margin for button */}
          Book Now
        </button>
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          {isMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </header>
      {isMenuOpen && (
        <nav className="flex flex-col items-center space-y-4 bg-pink-500 p-4 text-white md:hidden h-screen overflow-y-hidden">
          <a href="#home" className="hover:bg-pink-700 p-2 rounded">Home</a>
          <a href="#about" className="hover:bg-pink-700 p-2 rounded">About</a>
          <a href="#services" className="hover:bg-pink-700 p-2 rounded">Services</a>
          <a href="#rooms" className="hover:bg-pink-700 p-2 rounded">Rooms</a>
          <a href="#gallery" className="hover:bg-pink-700 p-2 rounded">Gallery</a>
          <a href="#contact" className="hover:bg-pink-700 p-2 rounded">Contact</a>
        </nav>
      )}
      <main className="flex flex-col justify-center items-center min-h-screen">
        <span className="text-2xl text-white font-bold mb-4">Simple - Unique - Friendly</span> {/* Added margin bottom for the span */}
        <h1 className="text-7xl text-white font-bold text-center mb-8">
          Make Yourself At Home <br /> In Our <span className="text-pink-500">Guest House</span>
        </h1> {/* Added margin bottom for the heading */}
      </main>
    </div>
  );
}

export default Home;
