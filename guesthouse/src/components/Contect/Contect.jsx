import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaEnvelope, FaPhone, FaMapPin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="card w-full max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-xl my-20 py-24 flex border border-gray-300">
      <div className="w-1/3 bg-pink-900 text-white rounded-xl p-8 mr-4">
      <h1 className="text-2xl mb-6">Contact Info</h1>
      <div className="flex items-center mb-2">
        <FaMapPin className="mr-2" />
        <p>Beside Barshal Water Tank,</p>
      </div>
      <p className="mb-2 ml-6">Manpur, Barhanti,</p>
      <p className="mb-2 ml-6">West Bengal 723156</p>
      <div className="flex items-center mb-2">
        <FaEnvelope className="mr-2" />
        <p>kkghosh0099@gmail.com</p>
      </div>
      <div className="flex items-center mb-2">
        <FaPhone className="mr-2" />
        <p>+91 9007062180</p>
      </div>
      <ul className="flex mt-20 ml-2">
        <li className="mr-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
            <FaLinkedin className="mr-2 text-3xl" />
          </a>
        </li>
        <li className="mr-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
            <FaInstagram className="mr-2 text-3xl" />
          </a>
        </li>
        <li className="mr-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
            <FaFacebook className="mr-2 text-3xl" />
          </a>
        </li>
        <li className="mr-4">
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
            <FaTwitter className="mr-2 text-3xl" />
          </a>
        </li>
      </ul>
    </div>
      <div className="card-body w-2/3 rounded-r-xl ml-6">
        <h1 className="text-4xl text-pink-600 mb-8">Send Message</h1>
        <form className="mb-8">
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <div className="relative z-0 mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-700 focus:outline-none focus:ring-0 focus:border-pink-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-600 peer-focus:dark:text-pink-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
                >
                  First Name
                </label>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-600 rounded-b-sm transition-transform origin-bottom transform scale-x-0 group-focus-within:scale-x-100"></div>
              </div>
            </div>
            <div className="w-1/2 pl-2">
              <div className="relative z-0 mb-5 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-700 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-600 peer-focus:dark:text-pink-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
                >
                  Last Name
                </label>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-600 rounded-b-sm transition-transform origin-bottom transform scale-x-0 group-focus-within:scale-x-100"></div>
              </div>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <div className="relative z-0 mb-5 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-700 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-600 peer-focus:dark:text-pink-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
                >
                  Phone Number
                </label>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-600 rounded-b-sm transition-transform origin-bottom transform scale-x-0 group-focus-within:scale-x-100"></div>
              </div>
            </div>
            <div className="w-1/2 pl-2">
              <div className="relative z-0 mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-700 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-600 peer-focus:dark:text-pink-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
                >
                  Email address
                </label>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-600 rounded-b-sm transition-transform origin-bottom transform scale-x-0 group-focus-within:scale-x-100"></div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="relative z-0 mb-5 group">
              <textarea
                name="floating_message"
                id="floating_message"
                className="block py-5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-700 peer"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="floating_message"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
              >
                Message
              </label>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-600 rounded-b-sm transition-transform origin-bottom transform scale-x-0 group-focus-within:scale-x-100"></div>
            </div>
          </div>
        </form>
        <button className="hidden md:block bg-pink-700 hover:bg-pink-800 text-white font-bold py-3 px-6 rounded-xl md:mr-12 mt-4">
  Book Now
</button>

        
      </div>
    </div>
  );
};

export default Contact;
