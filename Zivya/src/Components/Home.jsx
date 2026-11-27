// // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmtLRzOPwKpFpVpuOyzk2RkV87sOx59JBwg&s
// const Home = () => {
//   return (
//     <div className="bg-[#E9D9FF] width-full h-[calc(100vh-64px)] flex gap-30 space-x-20 justify-center items-center ">
//       {/* div-------1 */}
//       <div className="flex flex-col justify-center items-start gap-1 ml-5">
//         <h1 className="text-6xl font-bold font-['Playfair_Display']">
//           Discover{" "}
//         </h1>
//         <h1 className="text-7xl font-bold font-['Playfair_Display']">
//           Your Style.
//         </h1>
//         <p className=" font-['Poppins'] text-2xl ">
//           Everyday Finds,<br></br> Extraordinary Style.
//         </p>

//         <button className="mt-5 bg-[#6241ad] text-white py-2 px-4 rounded-4xl hover:bg-[#7C3AED]">
//           Shop Now
//         </button>
//         <img
//           className="mt-4 rounded-t-full"
//           src="/makeup.jpg"
//           alt="Makeup"
//         ></img>
//       </div>
//       {/* div--------------2 */}
//       <div className="">
//         <img className=" rounded-t-full h-100 w-80" src="bossy.jpeg" alt="Crop"></img>
//       </div>
//       {/* div------------3 */}
//       <div className="flex flex-col justify-center items-start gap-1 mt-52 ">
//         <img className=" rounded-full h-80" src="mens.jpeg" alt="Mens"></img>
//         <p className="font-['Poppins'] text-gray-950">
//           Explore a wide range of
//           <br></br>fashion, accessories,
//           <br></br> elecrtronics and more--
//           <br></br> all in on plcace
//         </p>

//         <img
//           className=" rounded-4xl h-40 w-60"
//           src="/ZProduct.jpeg"
//           alt="Accessories"
//         ></img>
//       </div>
//     </div>
//   );
// };
// export default Home;

const Home = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] bg-white px-6 md:px-12 lg:px-16 py-10 overflow-hidden">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr_0.8fr] gap-10 items-center">
        {/* LEFT SECTION */}
        <div className="flex flex-col items-start justify-center">
          <span className="text-[#6241AD] font-['Poppins'] text-sm tracking-[4px] uppercase mb-5">
            Welcome to ZIVYA
          </span>

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold font-['Playfair_Display'] text-[#302044] leading-tight">
            Discover
            <br />
            Your Style.
          </h1>

          <p className="font-['Poppins'] text-lg md:text-xl text-[#51445F] mt-5 leading-relaxed">
            Everyday Finds,
            <br />
            Extraordinary Style.
          </p>

          <p className="font-['Poppins'] text-sm text-[#665875] mt-4 max-w-xs leading-7">
            Explore fashion, accessories and everyday essentials — all in one
            place.
          </p>

          <button className="mt-7 bg-[#6241AD] text-white px-8 py-3 rounded-full font-['Poppins'] hover:bg-[#3B0764] hover:scale-105 transition duration-300 shadow-lg">
            Shop Now →
          </button>

          {/* Small Image */}
          <div className="mt-10 w-52 md:w-60">
            <img
              className="w-full h-48 object-cover rounded-t-full shadow-xl"
              src="/f3.jpeg"
              alt="Makeup collection"
            />
          </div>
        </div>

        {/* CENTER SECTION */}
        <div className="relative flex justify-center items-center">
          <img
            className="relative z-10 w-64 md:w-80 lg:w-full max-w-[380px] h-[380px] md:h-[480px] object-cover rounded-t-full shadow-2xl"
            src="/a1.jpeg"
            alt="ZIVYA fashion collection"
          />

          {/* Floating Label */}
          <div className="absolute z-20 bottom-8 -left-2 md:-left-8 bg-white px-5 py-3 rounded-2xl shadow-xl">
            <p className="text-xs text-gray-500 font-['Poppins']">
              Style that speaks
            </p>
            <p className="text-[#6241AD] font-bold font-['Playfair_Display'] text-lg">
              Be Uniquely You.
            </p>
          </div>
        </div>


        {/* RIGHT SECTION */}
        <div className="flex flex-col items-center lg:items-start gap-6 lg:mt-32">
          <img
            className="w-64 h-70 object-cover rounded-full shadow-xl"
            src="/f1.jpeg"
            alt="Fashion collection"
          />

          <p className="font-['Poppins'] text-sm md:text-base text-[#51445F] leading-7 text-center lg:text-left">
            Fashion, beauty, accessories
            <br />
            and everyday essentials.
            <br />
            Everything you love,
            <br />
            all in one place.
          </p>

          <img
            className="w-70 h-50 object-cover rounded-3xl shadow-xl"
            src="/f2.jpeg"
            alt="ZIVYA accessories"
          />

          <span className="text-[#6241AD] text-xs tracking-[3px] font-semibold">
            EXPLORE YOUR WORLD
          </span>
        </div>
      </div>

    </section>
  );
};

export default Home;
