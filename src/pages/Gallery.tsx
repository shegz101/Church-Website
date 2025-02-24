import Image2 from "../assets/img2.jpg"; // Import your image

const Gallery = () => {
  // Function to handle button click
  const openGallery = () => {
    window.open("https://facebook.com/cacokeigbala.magboro/photos", "_blank");
  };

  return (
    <div
      className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${Image2})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text & Button Container */}
      <div className="relative text-center">
        <h1 className="text-white text-4xl font-bold">GALLERY</h1>
        <button
          onClick={openGallery}
          className="mt-4 px-6 py-3 text-white font-semibold text-lg rounded-md bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all"
        >
          VIEW IMAGES
        </button>
      </div>
    </div>
  );
};

export default Gallery;
