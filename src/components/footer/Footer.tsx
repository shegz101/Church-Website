import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        {/* <div>
          <h2 className="text-2xl font-bold">Christ Apostolic Church</h2>
          <p className="mt-2 text-gray-400">
            One Fold, One Shepherd. Join us in worship and fellowship.
          </p>
        </div> */}
        <div>
          <div className="flex gap-1">
            {/* Church Logo */}
            <img src={Logo} alt="Logo" className="h-[60px]" />
            <p className="text-start pt-2 font-bold">
              Christ Apostolic Church <br /> Oke-Igbala, Magboro
            </p>
          </div>
          <p className="mt-2 text-gray-400">
            One Fold, One Shepherd. Join us in worship and fellowship.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/departments"
                  className="text-gray-400 hover:text-white"
                >
                  Departments
                </a>
              </li>
              <li>
                <a href="/giving" className="text-gray-400 hover:text-white">
                  Giving
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/news" className="text-gray-400 hover:text-white">
                  News
                </a>
              </li>
              <li>
                <a href="/media" className="text-gray-400 hover:text-white">
                  Media
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/live" className="text-gray-400 hover:text-white">
                  Live Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="mt-2 text-gray-400">
            Opposite WiseBuyers, Magboro, Ogun State.
          </p>
          <p className="text-gray-400">Email: info@cacmagboro.org</p>
          <p className="text-gray-400">Phone: +234 123 456 789</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={20} />
            </a>
            {/* <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin size={20} />
            </a> */}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Christ Apostolic Church. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
