import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-gray-200 text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Spice It Up!</h3>
            <p className="text-sm">Bringing the heat to your taste buds!</p>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0 text-black">
            {/* Social Media Links with React Icons */}
            <a
              href="#"
              className="text-green-500 text-4xl hover:text-yellow-400 transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-green-500 text-4xl hover:text-yellow-400 transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-green-500 text-4xl hover:text-yellow-400 transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-green-500 text-4xl hover:text-yellow-400 transition duration-300"
              aria-label="Pinterest"
            >
              <FaPinterest />
            </a>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-2">
            Subscribe for Spicy Updates!
          </h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 rounded-l-md focus:outline-none"
            />
            <button className="bg-yellow-400 text-red-700 font-bold p-2 rounded-r-md hover:bg-yellow-500 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-8">
          <ul className="flex flex-col md:flex-row space-x-4">
            <li>
              <a
                href="#"
                className="hover:text-yellow-400 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-yellow-400 transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-yellow-400 transition duration-300"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-yellow-400 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Spice It Up! All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
