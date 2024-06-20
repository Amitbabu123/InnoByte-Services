

const Details = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col md:flex-row max-w-5xl mx-auto rounded-lg overflow-hidden">
        {/* Image Section (Order 1 on Small Screens) */}
        <div className="md:w-1/2 md:order-1">
  <img
    src="../src/assets/out.jpg"
    alt="Guesthouse"
    className="object-cover w-full h-60 md:h-full rounded-lg md:rounded-l-lg"
  />
</div>

        {/* Content Section (Order 2 on Small Screens) */}
        <div className="md:w-1/2 md:order-2 p-8 md:ml-4 md:mt-0 mt-8 ml-20">
          <h2 className="text-3xl font-bold mb-4 flex items-center">About Us</h2>
          <hr className="w-16 h-1 bg-pink-500 mb-4 border-none" />
          <h1 className='mb-4 text-3xl font-bold'>The Best Holidays Start Here! </h1>
          <p className="mb-4 text-gray-700">Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.</p>
          <p className="mb-4 text-lg text-purple-500 font-bold">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
          <p className="text-blue-500">Contact us: +91 9007062180</p>
          <button className="hidden md:block bg-pink-700 hover:bg-pink-800 text-white font-bold py-3 px-6 rounded mt-4 md:mt-8 md:ml-4 md:mr-12">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
