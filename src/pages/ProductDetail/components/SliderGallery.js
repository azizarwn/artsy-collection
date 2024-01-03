import React from "react";
import ImageGallery from 'react-image-gallery';
import "./sliderGallery.scss"
import {
  // ThumbLeftEarring,
  // ThumbRightEarring,
  // ThumbCircular,
  // LeftEarringCircular,
  // RightEarringCircular,
  // EarringCircular,
} from "../../../assets";

const SliderGallery = ({pokemon1, pokemon2, pokemon3}) => {

  const images = [
    {
      original: pokemon1,
      thumbnail: pokemon1,
    },
    {
      original: pokemon2,
      thumbnail: pokemon2
    },
    // {
    //   original: pokemon3,
    //   thumbnail: ThumbRightEarring,
    // },
  ];

  return (
    <div className="slider-gallery">
      <ImageGallery items={images}/>
    </div>
  );
};

export default SliderGallery;
