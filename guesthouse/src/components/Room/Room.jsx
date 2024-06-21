const Room = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="ml-auto mr-16">
            <div className="container mx-auto px-4 py-8 text-left">
              <p className="text-lg font-bold mb-2">OUR LIVING ROOM</p>
              <h1 className="text-3xl font-bold mb-8">The Most Memorable Rest <br />Time Starts Here.</h1>
            </div>
  
            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
              {/* Card 1 */}
              <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
                <img src="../src/assets/small.jpg" alt="Cozy Haven Room" className="w-full h-48 object-cover object-center" />
                <div className="p-4 flex flex-col items-center">
                  <h2 className="text-gray-800 text-lg font-semibold mb-2 text-center">Cozy Haven Room</h2>
                  <p className="text-gray-600 text-center">Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation. Starting from <span className="text-black font-bold">Rs. 1500/night</span></p>
                  <div className="mt-4">
                    <button className="bg-pink-700 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
  
              {/* Card 2 */}
              <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
                <img src="../src/assets/room1.jpg" alt="Spacious Serenity Suite" className="w-full h-48 object-cover object-center" />
                <div className="p-4 flex flex-col items-center">
                  <h2 className="text-gray-800 text-lg font-semibold mb-2 text-center">Spacious Serenity Suite</h2>
                  <p className="text-gray-600 text-center">Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance. Starting from <span className="text-black font-bold">Rs. 1500/night</span></p>
                  <div className="mt-4">
                    <button className="bg-pink-700 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Room;
  