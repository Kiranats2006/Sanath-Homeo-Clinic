export default function Homepage() {
    return (
      <div>
        {/* Navbar with Logo in the Middle */}
        <nav className="fixed top-0 left-0 w-full shadow-2xl h-38 p-4 flex items-center" style={{ backgroundColor: "rgba(171, 155, 217, 0.72)" }}>
          {/* or use #C4A92A or #AB9BD9 */}
  
          {/* Center: Your Logo */}
          <div className="flex flex-col items-center">
            <img src="/images/logo.png" alt="Sanath Homeo Clinic Logo" className="h-auto max-h-35 top-0" />
          </div>
          <div className="flex w-full items-center justify-center gap-3">
          <span className="text-5xl font-bold text-black ml-22" style={{ fontFamily: 'Rubik Dirt, sans-serif' }}>
            Sanath Homeo Clinic
          </span>

          {/* Buttons on the right */}
          <div className="flex gap-7 ml-auto">
          <button className="text-[#DB7A46] hover:before:bg-[#0082BA] relative h-[43px] w-32 overflow-hidden border border-bg-[#2CE663] bg-white px-3 text-[#F2F0EF] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#2CE663] before:transition-all before:duration-500 hover:text-white hover:shadow-[#CB5BCC] hover:before:left-0 hover:before:w-full"><span className="relative z-10">About</span></button>
          <button className="text-[#DB7A46] hover:before:bg-[#0082BA] relative h-[43px] w-32 overflow-hidden border border-bg-[#2CE663] bg-white px-3 text-[#F2F0EF] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#2CE663] before:transition-all before:duration-500 hover:text-white hover:shadow-[#CB5BCC] hover:before:left-0 hover:before:w-full"><span className="relative z-10">Contacts us</span></button>
          <button className="text-[#DB7A46] hover:before:bg-[#0082BA] relative h-[43px] w-32 overflow-hidden border border-bg-[#2CE663] bg-white px-3 text-[#F2F0EF] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#2CE663] before:transition-all before:duration-500 hover:text-white hover:shadow-[#CB5BCC] hover:before:left-0 hover:before:w-full"><span className="relative z-10">Login</span></button>
          <button className="text-[#DB7A46] hover:before:bg-[#0082BA] relative h-[43px] w-32 overflow-hidden border border-bg-[#2CE663] bg-white px-3 text-[#F2F0EF] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#2CE663] before:transition-all before:duration-500 hover:text-white hover:shadow-[#CB5BCC] hover:before:left-0 hover:before:w-full"><span className="relative z-10">Sign up</span></button>
          </div>
        </div>
        </nav>
  
        <div
        className="min-h-screen bg-cover bg-center fixed top-0 left-0 w-full h-full"
        style={{
          backgroundImage: "",
          backgroundAttachment: "fixed", // Keeps the image fixed when scrolling
          zIndex: -1, // Ensures the background stays behind all the content
        }}
      ></div>

      {/* Content Section */}
      <div className="mt-38 relative z-10">
        <div className="flex gap-40 justify-center">
          {/* Branch Boxes */}
          <div
            className="cursor-pointer p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl h-125 w-88"
            style={{ backgroundColor: "rgba(143, 190, 204, 0.81)" }}
          >
            <h3 className="text-white text-xl">Branch 1</h3>
          </div>
          <div
            className="cursor-pointer p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl h-125 w-88"
            style={{ backgroundColor: "rgba(143, 190, 204, 0.81)" }}
          >
            <h3 className="text-white text-xl">Branch 2</h3>
          </div>
          <div
            className="cursor-pointer p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl h-125 w-88 "
            style={{ backgroundColor: "rgba(143, 190, 204, 0.81)" }}
          > 
          {/* or #8FBECC */}
            <h3 className="text-white text-xl">Branch 3</h3>
          </div>
        </div>
      </div>
    </div>
    );
  }
  