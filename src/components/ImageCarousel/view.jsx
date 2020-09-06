import React, { useState } from 'react';
import { FileDeleteButton } from '..';
import { StyledCarousel } from './style';

const ImageCarousel = ({ images, onRemoveImage }) => {
  const [index, setIndex] = useState(0);
  const handleSetIndex = (selectedIndex) => setIndex(selectedIndex);

  return (
    <StyledCarousel activeIndex={index} onSelect={handleSetIndex} interval={null}>
      {images.map((img) => (
        <StyledCarousel.Item key={img.name}>
          <img src={img.src} alt={img.name} />
          <FileDeleteButton onDelete={() => onRemoveImage('gallery', img.id)} />
        </StyledCarousel.Item>
      ))}
    </StyledCarousel>
  );
};

export default ImageCarousel;
