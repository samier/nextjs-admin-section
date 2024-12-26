import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

type Props = {
  imageOrVideo: string[];
  workflow: any;
};

const Slidder = ({ imageOrVideo, workflow }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    dotsClass: "slick-dots custom-dots",
    infinite: imageOrVideo?.length > 1,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    ref: sliderRef,
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <Slider {...settings}>
        {imageOrVideo?.map((media: string, index: number) => (
          <div key={index} style={{ width: "100%" }}>
            {workflow?.responseType === 1 ? (
              <Image
                src={media}
                alt={`Thumbnail ${index + 1}`}
                height={500}
                width={500}
                className="rounded"
              />
            ) : (
              <video
                src={media}
                width={500}
                height={500}
                className="rounded"
                controls
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </Slider>

      <div className="flex items-center justify-end mt-1 space-x-2">
        <button
          onClick={scrollPrev}
          className={`
            w-8 h-8 flex items-center justify-center 
            border-2 border-gray-400 rounded-md
            ${currentSlide === 0
              ? "opacity-50 cursor-not-allowed text-gray-300"
              : "hover:bg-gray-100 text-gray-600"
            }
          `}
        >
          ←
        </button>
        <div className="text-sm text-gray-400">
          {currentSlide + 1} / {imageOrVideo?.length}
        </div>
        <button
          onClick={scrollNext}
          className={`
            w-8 h-8 flex items-center justify-center 
            border-2 border-gray-400 rounded-md
            ${currentSlide === imageOrVideo?.length - 1
              ? "opacity-50 cursor-not-allowed text-gray-300"
              : "hover:bg-gray-100 text-gray-600"
            }
          `}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Slidder;
