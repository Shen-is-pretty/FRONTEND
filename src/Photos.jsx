import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Photos.css';

const Photos = () => {
  const photoList = [
    { src: 'sinanay.jpg', alt: 'Photo 1', caption: 'Beautiful Creation' },
    { src: 'shen.jpg', alt: 'Photo 2', caption: '"A beautiful soul paints the world with light, no matter how dark it may seem."' },
    { src: 'shenn.jpg', alt: 'Photo 3', caption: '"Beauty is the art of being comfortable in your own skin."' },
  ];

  return (
    <div className="photos-container">
      <h2>PORTRAITS</h2>
      <Carousel>
        {photoList.map((photo, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 carousel-img"
              src={photo.src}
              alt={photo.alt}
            />
            <Carousel.Caption>
              <h3>{photo.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Photos;
