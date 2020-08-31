import React, { useState } from 'react';
import { StyledCarousel } from './style';

const ImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const handleSetIndex = (selectedIndex) => setIndex(selectedIndex);

  return (
    <StyledCarousel activeIndex={index} onSelect={handleSetIndex} interval={10000}>
      {images.map((img) => (
        <StyledCarousel.Item key={img.name}>
          <img src={img.src} alt={img.name} />
        </StyledCarousel.Item>
      ))}
    </StyledCarousel>
  );
};

export default ImageCarousel;
