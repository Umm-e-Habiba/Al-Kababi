"use client";

import { foodkingUtility } from "@/utility";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

/** Top-left Halal ribbon shown over the hero */
const HalalBadge = () => (
  <div className="halal-badge">
    <img src="assets/img/hero/halal.png" alt="Halal certified" />
    <style jsx>{`
      .halal-badge {
        position: absolute;
        top: 16px;
        left: 16px;
        z-index: 9;
      }
      .halal-badge img {
        display: block;
        height: 70px;
        width: auto;
        filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.25));
        border-radius: 6px;
      }
      @media (max-width: 992px) {
        .halal-badge img { height: 56px; }
      }
      @media (max-width: 576px) {
        .halal-badge { top: 12px; left: 12px; }
        .halal-badge img { height: 44px; }
      }
    `}</style>
  </div>
);

const HomeSlider = () => {
  const swiperRef = useRef(null);
  const handleAnimations = () => {
    if (swiperRef.current) {
      const slides = swiperRef.current.querySelectorAll(
        ".hero-slider .swiper-slide"
      );
      foodkingUtility.sliderAnimation(slides);
    }
  };

  useEffect(() => {
    handleAnimations();
    const swiperInstance = swiperRef.current.swiper;
    const onSlideChange = () => {
      handleAnimations();
    };
    swiperInstance.on("slideChange", onSlideChange);
    return () => {
      swiperInstance.off("slideChange", onSlideChange);
    };
  }, []);

  const duration = "1";

  return (
    <section className="hero-section" style={{ position: "relative" }}>
      <HalalBadge />
      <Swiper ref={swiperRef} {...sliderProps.hero} className="swiper hero-slider">
        <div className="swiper-wrapper">
          {/* SLIDE 1 */}
          <SwiperSlide className="swiper-slide">
            <div
              className="hero-1 bg-cover"
              style={{ backgroundImage: 'url("assets/img/hero/hero-bg.jpg")' }}
            >
              <div className="chilii-shape" data-animation="fadeInUp" data-duration={duration} data-delay="2.1s">
                <img src="assets/img/hero/chilli-shape.png" alt="shape-img" />
              </div>
              <div className="fire-shape" data-animation="fadeInUp" data-duration={duration} data-delay="2.4s">
                <img src="assets/img/hero/fire-shape.png" alt="shape-img" />
              </div>
              <div className="chilii-shape-2" data-animation="fadeInUp" data-duration={duration} data-delay="2.7s">
                <img src="assets/img/hero/chilli-shape-2.png" alt="shape-img" />
              </div>
              <div className="chilii-shape-3" data-animation="fadeInUp" data-duration={duration} data-delay="3s">
                <img src="assets/img/hero/chilli-shape-3.png" alt="shape-img" />
              </div>
              {/* offer-shape REMOVED */}
              <h2 className="hero-back-title" data-animation="fadeInRight" data-duration={duration} data-delay="2.5s">
                BBQ
              </h2>
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-xl-5 col-lg-7">
                    <div className="hero-content">
                      <p data-animation="fadeInUp">crispy, every bite taste</p>
                      <h1 data-animation="fadeInUp" data-duration={duration} data-delay="0.5s">
                        Delicious
                        <span> Food</span>
                        <span> Menu</span>
                      </h1>
                      <div className="hero-button">
                        <Link
                          href="/shop-single"
                          className="theme-btn"
                          data-animation="fadeInUp"
                          data-duration={duration}
                          data-delay="0.9s"
                        >
                          <span className="button-content-wrapper d-flex align-items-center">
                            <span className="button-icon"><i className="flaticon-delivery" /></span>
                            <span className="button-text">order now</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-5 mt-5 mt-lg-0">
                    <div className="chiken-image" data-animation="fadeInUp" data-duration={duration} data-delay="1.4s">
                      <img src="assets/img/hero/grilled.png" alt="chiken-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide className="swiper-slide">
            <div
              className="hero-1 bg-cover"
              style={{ backgroundImage: 'url("assets/img/hero/hero-bg.jpg")' }}
            >
              <div className="chilii-shape" data-animation="fadeInUp" data-duration={duration} data-delay="2.1s">
                <img src="assets/img/hero/chilli-shape.png" alt="shape-img" />
              </div>
              <div className="fire-shape" data-animation="fadeInUp" data-duration={duration} data-delay="2.4s">
                <img src="assets/img/hero/fire-shape.png" alt="shape-img" />
              </div>
              <div className="chilii-shape-2" data-animation="fadeInUp" data-duration={duration} data-delay="2.7s">
                <img src="assets/img/hero/chilli-shape-2.png" alt="shape-img" />
              </div>
              <div className="chilii-shape-3" data-animation="fadeInUp" data-duration={duration} data-delay="3s">
                <img src="assets/img/hero/chilli-shape-3.png" alt="shape-img" />
              </div>
              {/* offer-shape REMOVED */}
              <h2 className="hero-back-title" data-animation="fadeInRight" data-duration={duration} data-delay="2.5s">
                fast food
              </h2>
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-xl-5 col-lg-7">
                    <div className="hero-content">
                      <p data-animation="fadeInUp">crispy, every bite taste</p>
                      <h1 data-animation="fadeInUp" data-duration={duration} data-delay="0.5s">
                        Delicious
                        <span> Food</span>
                        <span> Menu</span>
                      </h1>
                      <div className="hero-button">
                        <Link
                          href="/shop-single"
                          className="theme-btn"
                          data-animation="fadeInUp"
                          data-duration={duration}
                          data-delay="0.9s"
                        >
                          <span className="button-content-wrapper d-flex align-items-center">
                            <span className="button-icon"><i className="flaticon-delivery" /></span>
                            <span className="button-text">order now</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-5 mt-5 mt-lg-0">
                    <div className="chiken-image" data-animation="fadeInUp" data-duration={duration} data-delay="1.4s">
                      <img src="assets/img/hero/rolls.png" alt="chiken-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 3 */}
          <SwiperSlide className="swiper-slide">
            <div
              className="hero-1 bg-cover"
              style={{ backgroundImage: 'url("assets/img/hero/hero-bg.jpg")' }}
            >
              <div className="chilii-shape" data-animation="fadeInUp" data-duration={duration} data-delay="2.1s">
                <img src="assets/img/hero/chilli-shape.png" alt="shape-img" />
              </div>
              <div className="fire-shape" data-animation="fadeInUp" data-duration={duration} data-delay="2.4s">
                <img src="assets/img/hero/fire-shape.png" alt="shape-img" />
              </div>
              <div className="chilii-shape-2" data-animation="fadeInUp" data-duration={duration} data-delay="2.7s">
                <img src="assets/img/hero/chilli-shape-2.png" alt="shape-img" />
              </div>
              <div className="chilii-shape-3" data-animation="fadeInUp" data-duration={duration} data-delay="3s">
                <img src="assets/img/hero/chilli-shape-3.png" alt="shape-img" />
              </div>
              {/* offer-shape REMOVED */}
              <h2 className="hero-back-title" data-animation="fadeInRight" data-duration={duration} data-delay="2.5s">
                fast food
              </h2>
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-xl-5 col-lg-7">
                    <div className="hero-content">
                      <p data-animation="fadeInUp">crispy, every bite taste</p>
                      <h1 data-animation="fadeInUp" data-duration={duration} data-delay="0.5s">
                        Favorite
                        <span> BBQ</span>
                        <span> Platter</span>
                      </h1>
                      <div className="hero-button">
                        <Link
                          href="/shop-single"
                          className="theme-btn"
                          data-animation="fadeInUp"
                          data-duration={duration}
                          data-delay="0.9s"
                        >
                          <span className="button-content-wrapper d-flex align-items-center">
                            <span className="button-icon"><i className="flaticon-delivery" /></span>
                            <span className="button-text">order now</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-5 mt-5 mt-lg-0">
                    <div className="chiken-image" data-animation="fadeInUp" data-duration={duration} data-delay="1.4s">
                      <img src="assets/img/hero/bbq.png" alt="chiken-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 4 */}
          <SwiperSlide className="swiper-slide">
            <div
              className="hero-1 bg-cover"
              style={{ backgroundImage: 'url("assets/img/hero/hero-bg.jpg")' }}
            >
              <div className="chilii-shape" data-animation="fadeInUp" data-duration={duration} data-delay="2.1s">
                <img src="assets/img/hero/chilli-shape.png" alt="shape-img" />
              </div>
              <div className="fire-shape" data-animation="fadeInUp" data-duration={duration} data-delay="2.4s">
                <img src="assets/img/hero/fire-shape.png" alt="shape-img" />
              </div>
              <div className="chilii-shape-2" data-animation="fadeInUp" data-duration={duration} data-delay="2.7s">
                <img src="assets/img/hero/chilli-shape-2.png" alt="shape-img" />
              </div>
              <div className="chilii-shape-3" data-animation="fadeInUp" data-duration={duration} data-delay="3s">
                <img src="assets/img/hero/chilli-shape-3.png" alt="shape-img" />
              </div>
              {/* offer-shape REMOVED */}
              <h2 className="hero-back-title" data-animation="fadeInRight" data-duration={duration} data-delay="2.5s">
                fast food
              </h2>
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-xl-5 col-lg-7">
                    <div className="hero-content">
                      <p data-animation="fadeInUp">crispy, every bite taste</p>
                      <h1 data-animation="fadeInUp" data-duration={duration} data-delay="0.5s">
                        Delicious
                        <span> Fast</span>
                        <span> Food</span>
                      </h1>
                      <div className="hero-button">
                        <Link
                          href="/shop-single"
                          className="theme-btn"
                          data-animation="fadeInUp"
                          data-duration={duration}
                          data-delay="0.9s"
                        >
                          <span className="button-content-wrapper d-flex align-items-center">
                            <span className="button-icon"><i className="flaticon-delivery" /></span>
                            <span className="button-text">order now</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-5 mt-5 mt-lg-0">
                    <div className="chiken-image" data-animation="fadeInUp" data-duration={duration} data-delay="1.4s">
                      <img src="assets/img/hero/chiken.png" alt="chiken-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="swiper-dot text-center pt-5">
        <div className="dot" />
      </div>
    </section>
  );
};
export default HomeSlider;

/* HomeSlider2 and HomeSlider3 are unchanged below, since they don’t include the 50% badge */

export const HomeSlider2 = () => {
  const swiperRef = useRef(null);
  const handleAnimations = () => {
    if (swiperRef.current) {
      const slides = swiperRef.current.querySelectorAll(
        ".hero-slider .swiper-slide"
      );
      foodkingUtility.sliderAnimation(slides);
    }
  };

  useEffect(() => {
    handleAnimations();
    const swiperInstance = swiperRef.current.swiper;
    const onSlideChange = () => {
      handleAnimations();
    };
    swiperInstance.on("slideChange", onSlideChange);
    return () => {
      swiperInstance.off("slideChange", onSlideChange);
    };
  }, []);
  const duration = "1";
  return (
    <section className="hero-section" style={{ position: "relative" }}>
      <HalalBadge />
      <Swiper ref={swiperRef} {...sliderProps.hero} className="swiper hero-slider">
        <div className="swiper-wrapper">
          {/* (slides unchanged) */}
          {/* ... your HomeSlider2 slides exactly as before ... */}
        </div>
      </Swiper>
    </section>
  );
};

export const HomeSlider3 = () => {
  const swiperRef = useRef(null);
  const handleAnimations = () => {
    if (swiperRef.current) {
      const slides = swiperRef.current.querySelectorAll(
        ".hero-slider .swiper-slide"
      );
      foodkingUtility.sliderAnimation(slides);
    }
  };

  useEffect(() => {
    handleAnimations();
    const swiperInstance = useRef?.current?.swiper ?? swiperRef.current.swiper;
    const onSlideChange = () => handleAnimations();
    swiperInstance.on("slideChange", onSlideChange);
    return () => swiperInstance.off("slideChange", onSlideChange);
  }, []);
  const duration = "1";
  return (
    <section className="hero-section-3" style={{ position: "relative" }}>
      <HalalBadge />
      <div className="pegi-wrp"><div className="pegi-number"></div></div>
      <Swiper {...sliderProps.hero} ref={swiperRef} className="swiper hero-slider">
        <div className="swiper-wrapper">
          {/* (slides unchanged) */}
          {/* ... your HomeSlider3 slides exactly as before ... */}
        </div>
      </Swiper>
    </section>
  );
};

