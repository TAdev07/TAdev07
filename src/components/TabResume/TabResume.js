import React from 'react';
import Carousel from '../Carousel/Carousel';

const carouselSlidesData = [
  {
    img: require('../../images/hugues-de-buyer-mimeure-313867-unsplash.jpg'),
  },
  {
    img: require('../../images/robert-lukeman-150146-unsplash.jpg'),
  },
  {
    img: require('../../images/simon-rae-221560-unsplash.jpg'),
  },
];

export default function TabAboutMe() {
  return (
    <div className="inside-sec">
      <h5 className="tittle">Resume</h5>
      <div className="padding-20">
        <Carousel slides={carouselSlidesData} />
      </div>
    </div>
  );
}
