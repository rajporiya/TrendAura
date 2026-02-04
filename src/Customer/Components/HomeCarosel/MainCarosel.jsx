import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { homeCarosel } from './Data'; // ✅ import this

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

function MainCarosel() {
  const items = homeCarosel.map((item, index) => (
    <img
      key={index}              
      src={item.image}
      alt=""
      role="presentation"
      className="cursor-pointer -z-50"
    />
  ));

  return (
    <div>
      <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
      />
    </div>
  );
}

export default MainCarosel;
