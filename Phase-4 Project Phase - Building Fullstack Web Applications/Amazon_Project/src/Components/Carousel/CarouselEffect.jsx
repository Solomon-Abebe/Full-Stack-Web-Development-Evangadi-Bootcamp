// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import { img } from "./img/data";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// // import classes from "./Carousel.module.css"
// function CarouselEffect() {
//   return (
//     <div>
//       <Carousel
//         autoPlay={true}
//         infiniteLoop={true}
//         showIndicators={true} //check indicator and thubs by true and false
//         showThumbs={true}
//       >
//         {img.map((ImageItemLink) => {
//           return <img src={ImageItemLink} />;
//         })}
//       </Carousel>
//       <div className={classes.hero_img}></div>
//     </div>
//   );
// }

// export default CarouselEffect;
import React from "react";
import { Carousel } from "react-responsive-carousel";
import {img}  from "./img/data"; // Import images data that it is not default then the import is named
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import classes from "./Carousel.module.css"; // Import CSS module for styles

function CarouselEffect() {
  return (
    <div>
      {/* Apply the hero_img class to the wrapper of the carousel */}
      <div className={classes.hero_img}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={false} // Shows indicators (dots)
          showThumbs={false} // Shows thumbnail images below the carousel
          interval ={3000}
        >
          {/* Map through the img array and render each image */}
          {img.map((ImageItemLink, index) => {
            return (
              <img
                key={index}
                src={ImageItemLink}
                // alt={`carousel-img-${index}`}
                alt="Carousel Item"
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselEffect;
