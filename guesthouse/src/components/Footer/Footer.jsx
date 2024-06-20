import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-20 md:p-20 bg-black text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="footer-section">
            <h6 className="footer-title text-xl font-bold mb-2">
              Kingsukh Guest House
            </h6>
            <div className="text-sm leading-6">
              <p className="line-clamp-5 py-3">
                Discover a world of comfort,
                <br />
                luxury, and adventure as you
                <br />
                explore our curated selection of
                <br />
                hotels, making every moment of
                <br />
                your getaway truly extraordinary.
              </p>
            </div>
            <button className="hidden md:block bg-pink-700 hover:bg-pink-800 text-white font-bold py-3 px-6 rounded md:mr-12 mt-4">
  Book Now
</button>

          </div>

          <nav className="footer-section">
            <h6 className="footer-title text-xl font-bold mb-2">
              QUICK LINKS
            </h6>
            <ul className="flex flex-wrap gap-3">
              <li>
                <a href="#" className="link link-hover text-lg">
                  Browse Destinations
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover text-lg">
                  Special Offers & Packages
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover text-lg">
                  Room Types & Amenities
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover text-lg">
                  Customer Reviews & Ratings
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover text-lg">
                  Travel Tips & Guides
                </a>
              </li>
            </ul>
          </nav>

          <nav className="footer-section">
            <h6 className="footer-title text-lg font-semibold mb-2">
              OUR SERVICES
            </h6>
            <ul className="flex flex-wrap gap-4">
              <li className="flex-none w-full">
                <a href="#" className="link link-hover text-lg block">
                  Concierge Assistance
                </a>
              </li>
              <li className="flex-none w-full">
                <a href="#" className="link link-hover text-lg block">
                  Flexible Booking Options
                </a>
              </li>
              <li className="flex-none w-full">
                <a href="#" className="link link-hover text-lg block">
                  Airport Transfers
                </a>
              </li>
              <li className="flex-none w-full">
                <a href="#" className="link link-hover text-lg block">
                  Wellness & Recreation
                </a>
              </li>
            </ul>
          </nav>

          <div className="footer-section">
            <nav>
              <h6 className="footer-title text-lg font-semibold mb-2">
                CONTACT US
              </h6>
              <ul>
                <li>
                  <p>
                    <a href="#" className="link link-hover">
                      Address: 123 Street, City, Country
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#" className="link link-hover">
                      Email: info@kingsukhguesthouse.com
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#" className="link link-hover">
                      Phone: +123 456 7890
                    </a>
                  </p>
                </li>
              </ul>
            </nav>

            <div className="flex items-center mt-8 space-x-6">
              <a href="#" aria-label="Facebook" className="text-blue-500 hover:text-blue-600">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#" aria-label="Instagram" className="text-pink-500 hover:text-pink-600">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="#" aria-label="YouTube" className="text-red-500 hover:text-red-600">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="#" aria-label="Twitter" className="text-blue-400 hover:text-blue-500">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
