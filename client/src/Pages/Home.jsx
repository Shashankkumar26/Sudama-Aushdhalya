import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "../style/home.css";
import { DiseaseList as List, main, testimonials } from "../disease/diseaseList";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const typesD = ["Leucoderma/Vitiligo", "Psoriasis", "Acne"];
  const [data, setData] = useState(List[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { paramId } = useParams();
  const sliderRef = useRef(null);
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "5px",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  useEffect(() => {
    const intervalforhomeimg = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % main.length);
    }, 10000);

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.image.length);
    }, 5000);

    return () => {
      clearInterval(intervalforhomeimg);
      clearInterval(interval);
    };
  }, [data.image.length]);

  useEffect(() => {
    if (isHovered) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % main.length);
    }
  }, [isHovered]);

  useEffect(() => {
    setExpanded(false);
  }, [data, paramId]);

  const handlePrevslide = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextslide = () => {
    sliderRef.current.slickNext();
  };

  const currentImage = data.image[currentImageIndex];

  const touchEffect = (index) => {
    setCurrentIndex(index);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="body">
      <div className="img">
        <img className="homeimag1" src={main[currentIndex]} alt="" />
      </div>
      <div className="icons">
        {main.map((m, index) => (
          <i
            className={`ri-radio-button-line ${isHovered ? "hovered" : ""}`}
            id={index}
            key={index}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => touchEffect(index)}
          ></i>
        ))}
      </div>

      <div className="quote">
        <div className="quotetheme">
          <p className="text">
            Discover the power within, embrace your skin's journey.
          </p>
        </div>
      </div>

      <div className="treatment">
        <div className="disease">
          {typesD.map((t) => (
            <div key={t} onClick={() => setData(List[typesD.indexOf(t)])}>
              {t}
            </div>
          ))}
        </div>
      </div>

      <div className="disease-detail">
        <div className="flex justify-center mb-5">
          <img className="disease-image" src={currentImage} alt="" />
        </div>
        <div>
          <div className="dataname">
            <div>
              <p>{data.name}</p>
            </div>
          </div>
          <div className="data-introduction">
            <p>
              {expanded ? data.introduction : data.introduction.slice(0, 800)}
            </p>
            {expanded ? (
              <>
                <h3>Cause</h3>
                <p>{data.cause}</p>
                <h3>Treatment</h3>
                <ul>
                  {Object.keys(data.treatment).map((key) => (
                    <li key={key}>{data.treatment[key]}</li>
                  ))}
                </ul>
                <h4>{data.brief}</h4>
              </>
            ) : null}
            <button onClick={toggleExpand}>
              {expanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>

      <div className="Testimonial">
        <h1>Testimonials</h1>

        <div className="testimonial-container">
          <Slider ref={sliderRef} {...sliderSettings}>
            {testimonials.map((t, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-content">
                  <div>
                    <h2>{t.name}</h2>
                    <p>{t.testament}</p>
                    <div className="location">
                      <i className="ri-map-pin-line"></i>
                      <p>{t.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <i
            className="ri-arrow-drop-left-line arrow"
            onClick={handlePrevslide}
          ></i>
          <i
            className="ri-arrow-drop-right-line arrow"
            onClick={handleNextslide}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Home;
