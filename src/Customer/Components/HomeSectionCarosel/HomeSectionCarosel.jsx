// import React, { useState } from "react";
// import AliceCarousel from "react-alice-carousel";
// import HomeSectionCart from "../HomeSectionCart/HomeSectionCart";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import { Button } from "@mui/material";
// import { mens_kurta } from "../Data/Mens_kurta";

// const HomeSectionCarosel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const responsive = {
//     0: { items: 1 },
//     720: { items: 3 },
//     1024: { items: 5 }

//   };
//   const slidePrev = () => {
//   setActiveIndex((prev) => Math.max(prev - 1, 0));
//   };

//   const slideNext = () => setActiveIndex(activeIndex + 1);

//   const syncActiveIndex = ({item})=> setActiveIndex(item)




//   const items = mens_kurta.slice(0, 10).map((item, index) => (
//   <div key={index} className="px-2">
//     <HomeSectionCart product={item} />
//   </div>
// ));
//   return (
//     <div className="relative  px-4 lg:px-8">
//       <div className="relative flex justify-b p-5">

//        {   <Button
//           variant="contained"
//           onClick={slideNext}
//           className='z-50'
//           aria-label="next"
//           sx={{
//             position: "absolute",
//             top: "8rem",
//             right: "0rem",
//             transform: "translateX(50%) rotate(90deg)",
//             minWidth: "auto",
//             bgcolor:'white'
//           }}
//           a
          
//         >
//           <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color:"black" }} />
//         </Button>}
//         <AliceCarousel
//           items={items}
//           disableButtonsControls 
//           infinite
//           responsive={responsive}
//           disableDotsControls
//           onSlideChanged={syncActiveIndex}
//           activeIndex={activeIndex}
//         />
//         {activeIndex !== 0 && 
//         <Button
//           variant="contained"
//           onClick={slidePrev}
//           aria-label="prev"
//           className='z-50'
//           sx={{
//             position: "absolute",
//             top: "8rem",
//             left: "0rem",
//             transform: "translateX(-50%) rotate(-90deg)",
//             minWidth: "auto",
//             bgcolor:'white',
            
//           }}
          
          
//         >
//           <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color:"black" }} />
//         </Button>}
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCarosel;



import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCart from "../HomeSectionCart/HomeSectionCart";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import { mens_kurta } from "../Data/Mens_kurta";

const HomeSectionCarosel = ({data, SectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  /** * LOGIC 1: THE REMOTE CONTROL (Ref)
   * We create a 'ref' to access the carousel's internal methods like slideNext() and slidePrev().
   * This is what allows for the "smooth" a nimation instead of a jagged state jump.
   */
  const carouselRef = useRef(null); 

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },  
    1024: { items: 5 },
  };

  // const items = data?.item.slice(0, 10).map((item, index) => (
  //   <div key={index} className="px-2">
  //     <HomeSectionCart product={item} />
  //   </div>
  // ));

  const items = data?.slice(0, 10).map((item, index) => (
    <div key={index} className="px-2">
      <HomeSectionCart product={item} />
    </div>
  )) || [];

  /** * LOGIC 2: TRIGGERING THE ANIMATION
   * Instead of just updating state, we call the carousel's built-in functions.
   * carouselRef.current refers to the actual AliceCarousel component.
   */
  const slidePrev = () => {
    carouselRef.current?.slidePrev(); // Tells carousel to animate one step back
  };

  const slideNext = () => {
    carouselRef.current?.slideNext(); // Tells carousel to animate one step forward
  };

  /** * LOGIC 3: STATE SYNCING
   * This function runs AFTER the slide animation finishes. 
   * It ensures our 'activeIndex' state matches where the carousel actually is.
   */
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div className="relative px-4 lg:px-8">
      <h2 className="text-2xl font-extrabold text-gray-500 py-4">{  SectionName}</h2>
      <div className="relative p-5">
        
        <AliceCarousel
          /** * LOGIC 4: BINDING THE REF
           * We attach our 'carouselRef' here so our buttons can talk to this specific carousel.
           */
          ref={carouselRef} 
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          infinite={false}
          mouseTracking
          /** * LOGIC 5: SMOOTHNESS SETTINGS
           * animationDuration controls how many milliseconds the slide takes.
           */
          animationDuration={800} 
        />

        {/* NEXT BUTTON LOGIC */}
        {/* We hide the button if we've reached the end (total items - visible items) */}
        {activeIndex < items.length - 5 && (
          <Button
            onClick={slideNext} // Triggers Logic 2
            variant="contained"
            sx={{
              position: "absolute",
              top: "50%",
              right: 0,
              zIndex: 50, // Ensures button stays on top of images
              transform: "translateX(50%) translateY(-50%)",
              bgcolor: "white",
              color: "black",
              minWidth: "40px",
              height: "40px",
              borderRadius: "50%",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              "&:hover": { bgcolor: "#f5f5f5" },
            }}
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(180deg)" }} />
          </Button>
        )}

        {/* PREV BUTTON LOGIC */}
        {/* We hide the button if we are at the very first item */}
        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev} // Triggers Logic 2
            variant="contained"
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              zIndex: 50,
              transform: "translateX(-50%) translateY(-50%)",
              bgcolor: "white",
              color: "black",
              minWidth: "40px",
              height: "40px",
              borderRadius: "50%",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              "&:hover": { bgcolor: "#f5f5f5" },
            }}
          >
            <KeyboardArrowLeftIcon />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;