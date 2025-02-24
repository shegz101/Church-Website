import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Logo from "../../assets/logo.png";

export function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavActive, setIsNavActive] = useState<String>("Home");

  // const handleScrollToSection = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  //   setIsNavOpen(false); // Close the navigation after clicking
  // };
  const handleNavClick = (event: any) => {
    setIsNavActive(event.target.innerText);
  };

  return (
    <div className="w-full h-[80px] text-center bg-[#FFFFFF] px-[12px] md:px-[60px] shadow-md md:border-b-2 border-blue-100">
      <div className="flex justify-between items-center h-full">
        <div className="flex gap-1">
          {/* Church Logo */}
          <img src={Logo} alt="Logo" className="h-[60px]" />
          <p className="text-start pt-2 font-semibold">
            Christ Apostolic Church <br /> Oke-Igbala, Magboro
          </p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-5 font-semibold items-center text-base">
          <p
            onClick={handleNavClick}
            className={`cursor-pointer ${
              isNavActive === "Home" ? "text-orange-500" : "text-[#000000]"
            }`}
          >
            Home
          </p>
          <p
            onClick={handleNavClick}
            className={`cursor-pointer ${
              isNavActive === "About Us" ? "text-orange-500" : "text-[#000000]"
            }`}
          >
            About Us
          </p>
          <p
            onClick={handleNavClick}
            className={`cursor-pointer ${
              isNavActive === "Sermons" ? "text-orange-500" : "text-[#000000]"
            }`}
          >
            Sermons
          </p>
          <p
            onClick={handleNavClick}
            className={`cursor-pointer ${
              isNavActive === "Departments"
                ? "text-orange-500"
                : "text-[#000000]"
            }`}
          >
            Departments
          </p>
          <p
            onClick={handleNavClick}
            className={`cursor-pointer ${
              isNavActive === "Programmes"
                ? "text-orange-500"
                : "text-[#000000]"
            }`}
          >
            Programmes
          </p>
          <p
            onClick={handleNavClick}
            className={`cursor-pointer ${
              isNavActive === "Contact Us"
                ? "text-orange-500"
                : "text-[#000000]"
            }`}
          >
            Contact Us
          </p>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <RxHamburgerMenu
            className="text-[#000000] font-extrabold text-3xl cursor-pointer"
            onClick={() => setIsNavOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed z-30 top-0 right-0 h-screen w-[85%] bg-[#FFFFFF] text-[#000000] shadow-lg transform transition-transform duration-300 ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between p-4">
          {/* Church Logo */}
          <div className="flex gap-1">
            <img src={Logo} alt="Logo" className="h-[60px]" />
            <p className="text-start pt-2 font-semibold">
              C.A.C Oke-Igbala <br /> Magboro
            </p>
          </div>

          <IoClose
            className="text-3xl cursor-pointer mt-4"
            onClick={() => setIsNavOpen(false)}
          />
        </div>
        <div className="flex flex-col space-y-6 items-start px-6 mt-10 text-xl">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">About Us</p>
          <p className="cursor-pointer">Sermons</p>
          <p className="cursor-pointer">Departments</p>
          <p className="cursor-pointer">Programmes</p>
          <p className="cursor-pointer">Contact Us</p>
        </div>
      </div>
    </div>
  );
}
