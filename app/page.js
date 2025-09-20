import BrandSlider from "@/components/BrandSlider";
import FoodSlider from "@/components/FoodSlider";
import HomeSlider from "@/components/HomeSlider";
import Marque from "@/components/Marque";
import ReservationForm from "@/components/ReservationForm";
import TestimonialSlider from "@/components/TestimonialSlider";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";

const page = () => {
  return (
    <FoodKingLayout>
      {/* Hero Section Start */}
      <HomeSlider />
      {/* Food Catagory Section Start */}
      <FoodSlider />
      {/* Food Banner Section Start */}
      <section className="food-banner-section section-padding fix section-bg pt-0">
        <div className="chili-shape">
          <img src="assets/img/shape/chili-shape.png" alt="shape-img" />
        </div>
        <div className="fry-shape">
          <img src="assets/img/shape/fry-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-5 wow fadeInUp" data-wow-delay=".3s">
              <div
                className="single-offer-items bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/banner/offer-bg.png")',
                }}
              >
                <div className="offer-content">
                  <h5>crispy, every bite taste</h5>
                  <h3>
                    SUPER <br />
                    DELICIOUS
                  </h3>
                </div>
                <div className="offer-image">
                  <img
                    src="assets/img/offer/50percent-off.png"
                    alt="offer-img"
                  />
                </div>
                <div className="burger-text">
                  <img src="assets/img/shape/burger-text.png" alt="shape-img" />
                </div>
                <div className="main-food">
                  <img src="assets/img/food/main-food.png" alt="food-img" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-7 mt-5 mt-xl-0 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div
                className="pizza-banner-items bg-cover"
                style={{
                  backgroundImage: "url(assets/img/banner/pizza-bg.png)",
                }}
              >
                <div className="pizza-text">
                  <img src="assets/img/shape/pizza-text.png" alt="shape-img" />
                </div>
                <div className="pizza-text-2">
                  <img
                    src="assets/img/shape/pizza-text-2.png"
                    alt="shape-img"
                  />
                </div>
                <div className="pizza-image">
                  <img src="assets/img/food/platter.png" alt="pizza-img"  
                  style={{ width: "300px",rotate:"44deg",marginBottom:"-60px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Brand Section Start */}
      <section className="brand-shape section-padding fix section-bg pt-0">
        <div className="container">
          <div className="brand-wrapper">
            <div className="brand-title">
              <h4>
                Global <span>5K+</span> Happy Sponsors With us
              </h4>
            </div>
            <BrandSlider />
          </div>
        </div>
      </section>
      {/* Grilled Banner Section Start */}
      <section
        className="grilled-banner fix section-padding bg-cover"
        style={{ backgroundImage: 'url("assets/img/banner/main-bg.jpg")' }}
      >
        <div className="patato-shape">
          <img src="assets/img/shape/patato-shape.png" alt="shape-img" />
        </div>
        <div className="offer-shape float-bob-y">
          <img src="assets/img/offer/50percent-off-2.png" alt="shape-img" />
        </div>
        <div className="text-shape">
          <img src="assets/img/shape/pizza-text-2.png" alt="shape-img" />
        </div>
        <div className="spicy-shape">
          <img src="assets/img/shape/spicy.png" alt="shape-img" />
        </div>
        <div className="tomato-shape">
          <img src="assets/img/shape/tomato-shape-2.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="grilled-wrapper">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="grilled-content">
                  <h4 className="wow fadeInUp">save 20%</h4>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    tODAY'S <span>ASTACKIN</span> DAY
                  </h2>
                  <h3 className="wow fadeInUp" data-wow-delay=".5s">
                    <Link href="/shop">
                      grilled <span className="text-1">chiken</span>
                    </Link>
                    <span className="text-2">$59,00</span>
                  </h3>
                  <div
                    className="grilled-button wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <Link href="/shop-single" className="theme-btn">
                      <span className="button-content-wrapper d-flex align-items-center">
                        <span className="button-icon">
                          <i className="flaticon-delivery" />
                        </span>
                        <span className="button-text">order now</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 mt-5 mt-lg-0 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="grilled-image">
                  <img src="assets/img/food/bbq-3.jpg" alt="grilled-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Food Catagory Section Start */}
      <section className="food-category-section fix section-padding section-bg">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">crispy, every bite taste</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Our Food Menu
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="catagory-product-card-2 text-center">
                <div className="icon">
                  <Link href="/shop-left-sidebar">
                    <i className="far fa-heart" />
                  </Link>
                </div>
                <div className="catagory-product-image">
                  <img src="assets/img/food/bbq-1.png" alt="product-img" 
                  style={{ width: "250px" }} />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <Link href="/shop-left-sidebar" className="theme-btn-2">
                      <i className="far fa-shopping-basket" />
                      Add To Cart
                    </Link>
                  </div>
                  <div className="info-price d-flex align-items-center justify-content-center">
                    <p>-5%</p>
                    <h6>$30.52</h6>
                    <span>$28.52</span>
                  </div>
                  <h4>
                    <Link href="/shop-left-sidebar">BBQ</Link>
                  </h4>
                  <div className="star">
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="catagory-product-card-2 active text-center">
                <div className="icon">
                  <Link href="/shop-left-sidebar">
                    <i className="far fa-heart" />
                  </Link>
                </div>
                <div className="catagory-product-image">
                  <img src="assets/img/food/burger-2.png" alt="product-img" />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <Link href="/shop-left-sidebar" className="theme-btn-2">
                      <i className="far fa-shopping-basket" />
                      Add To Cart
                    </Link>
                  </div>
                  <div className="info-price d-flex align-items-center justify-content-center">
                    <p>-5%</p>
                    <h6>$30.52</h6>
                    <span>$28.52</span>
                  </div>
                  <h4>
                    <Link href="/shop-left-sidebar">Fast Food</Link>
                  </h4>
                  <div className="star">
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="catagory-product-card-2 text-center">
                <div className="icon">
                  <Link href="/shop-left-sidebar">
                    <i className="far fa-heart" />
                  </Link>
                </div>
                <div className="catagory-product-image">
                  <img src="assets/img/food/nehari.png" alt="product-img" />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <Link href="/shop-left-sidebar" className="theme-btn-2">
                      <i className="far fa-shopping-basket" />
                      Add To Cart
                    </Link>
                  </div>
                  <div className="info-price d-flex align-items-center justify-content-center">
                    <p>-5%</p>
                    <h6>$30.52</h6>
                    <span>$28.52</span>
                  </div>
                  <h4>
                    <Link href="/shop-left-sidebar">Traditional</Link>
                  </h4>
                  <div className="star">
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="catagory-product-card-2 text-center">
                <div className="icon">
                  <Link href="/shop-left-sidebar">
                    <i className="far fa-heart" />
                  </Link>
                </div>
                <div className="catagory-product-image">
                  <img src="assets/img/food/naan.png" alt="product-img" 
                  style={{ width: "250px" ,marginTop:"0px"}} />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <Link href="/shop-left-sidebar" className="theme-btn-2">
                      <i className="far fa-shopping-basket" />
                      Add To Cart
                    </Link>
                  </div>
                  <div className="info-price d-flex align-items-center justify-content-center">
                    <p>-5%</p>
                    <h6>$30.52</h6>
                    <span>$28.52</span>
                  </div>
                  <h4>
                    <Link href="/shop-left-sidebar">TANDOOR</Link>
                  </h4>
                  <div className="star">
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="catagory-product-card-2 text-center">
                <div className="icon">
                  <Link href="/shop-left-sidebar">
                    <i className="far fa-heart" />
                  </Link>
                </div>
                <div className="catagory-product-image">
                  <img
                    src="assets/img/food/main-food-2.png"
                    alt="product-img"
                  />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <Link href="/shop-left-sidebar" className="theme-btn-2">
                      <i className="far fa-shopping-basket" />
                      Add To Cart
                    </Link>
                  </div>
                  <div className="info-price d-flex align-items-center justify-content-center">
                    <p>-5%</p>
                    <h6>$30.52</h6>
                    <span>$28.52</span>
                  </div>
                  <h4>
                    <Link href="/shop-left-sidebar">Starter</Link>
                  </h4>
                  <div className="star">
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="catagory-product-card-2 text-center">
                <div className="icon">
                  <Link href="/shop-left-sidebar">
                    <i className="far fa-heart" />
                  </Link>
                </div>
                <div className="catagory-product-image">
                  <img src="assets/img/food/salad.png" alt="product-img" 
                  style={{ width: "250px" ,marginTop:"0px"}} />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <Link href="/shop-left-sidebar" className="theme-btn-2">
                      <i className="far fa-shopping-basket" />
                      Add To Cart
                    </Link>
                  </div>
                  <div className="info-price d-flex align-items-center justify-content-center">
                    <p>-5%</p>
                    <h6>$30.52</h6>
                    <span>$28.52</span>
                  </div>
                  <h4>
                    <Link href="/shop-left-sidebar"> SALAD BAR</Link>
                  </h4>
                  <div className="star">
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="catagory-product-card-2 text-center">
                <div className="icon">
                  <Link href="/shop-left-sidebar">
                    <i className="far fa-heart" />
                  </Link>
                </div>
                <div className="catagory-product-image">
                  <img src="assets/img/food/platter.png" alt="product-img" 
                  style={{ width: "200px" ,marginTop:"0px",rotate:"44deg"}} />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <Link href="/shop-left-sidebar" className="theme-btn-2">
                      <i className="far fa-shopping-basket" />
                      Add To Cart
                    </Link>
                  </div>
                  <div className="info-price d-flex align-items-center justify-content-center">
                    <p>-5%</p>
                    <h6>$30.52</h6>
                    <span>$28.52</span>
                  </div>
                  <h4>
                    <Link href="/shop-left-sidebar">Platter</Link>
                  </h4>
                  <div className="star">
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="catagory-product-card-2 text-center">
                <div className="icon">
                  <Link href="/shop-left-sidebar">
                    <i className="far fa-heart" />
                  </Link>
                </div>
                <div className="catagory-product-image">
                  <img
                    src="assets/img/food/pasta.png"
                    alt="product-img"
                  />
                </div>
                <div className="catagory-product-content">
                  <div className="catagory-button">
                    <Link href="/shop-left-sidebar" className="theme-btn-2">
                      <i className="far fa-shopping-basket" />
                      Add To Cart
                    </Link>
                  </div>
                  <div className="info-price d-flex align-items-center justify-content-center">
                    <p>-5%</p>
                    <h6>$30.52</h6>
                    <span>$28.52</span>
                  </div>
                  <h4>
                    <Link href="/shop-left-sidebar">GYRO COMBOS</Link>
                  </h4>
                  <div className="star">
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star" />
                    <span className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="catagory-button text-center pt-4 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <Link href="/shop-left-sidebar" className="theme-btn">
              <span className="button-content-wrapper d-flex align-items-center">
                <span className="button-icon">
                  <i className="flaticon-delivery" />
                </span>
                <span className="button-text">view more</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/* Food Comboo Section Start */}
      <section
        className="food-comboo-section fix bg-cover section-padding"
        style={{ backgroundImage: 'url("assets/img/bg-image/bg.jpg")' }}
      >
        <div className="drinks-shape">
          <img src="assets/img/shape/drinks.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="comboo-wrapper">
            <div className="row align-items-center">
              <div className="col-xl-6">
                <div className="food-comboo-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">
                      crispy, every bite taste
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      trending Food combo offer less <span>20%</span>
                    </h2>
                  </div>
                  <p className="wow fadeInUp" data-wow-delay=".5s">
                    Experience authentic Al-Kababi flavors—fresh, halal ingredients
                    with bold, unforgettable taste.
                  </p>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link wow fadeInUp"
                      data-wow-delay=".3s"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      <span className="food-comboo-list">
                        <span className="offer-image">
                          <img src="assets/img/offer/chicken.png" alt="img" />
                        </span>
                        <span className="comboo-title">
                          30% off 4pcs hot crispy &amp; 8 pcs wing
                        </span>
                      </span>
                    </button>
                    <button
                      className="nav-link active wow fadeInUp"
                      data-wow-delay=".5s"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      <span className="food-comboo-list">
                        <span className="offer-image">
                          <img src="assets/img/offer/pizza.png" alt="img" />
                        </span>
                        <span className="comboo-title">
                          20% off tasty pizza with drink
                        </span>
                      </span>
                    </button>
                    <button
                      className="nav-link wow fadeInUp"
                      data-wow-delay=".7s"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      <span className="food-comboo-list">
                        <span className="offer-image">
                          <img src="assets/img/offer/burger.png" alt="img" />
                        </span>
                        <span className="comboo-title">
                          2pcs humbergur with drinks &amp; sauce
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="tab-content" id="nav-tab-Content">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div
                      className="comboo-image bg-cover"
                      style={{
                        backgroundImage:
                          'url("assets/img/banner/comboo-bg.jpg")',
                      }}
                    >
                      <div className="pizza-text">
                        <img
                          src="assets/img/shape/combo-pizza-text.png"
                          alt="shape-img"
                        />
                      </div>
                      <div className="pizza-image">
                        <img
                          src="assets/img/food/bbq-1.png"
                          alt="food-img" style={{ width: "800px" }}
                        />
                      </div>
                      <div className="offer-shape">
                        <img
                          src="assets/img/offer/50percent-off-2.png"
                          alt="shape-img"
                        />
                      </div>
                      <div className="vegetable-shape">
                        <img
                          src="assets/img/shape/vegetable.png"
                          alt="shape-img"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div
                      className="comboo-image bg-cover"
                      style={{
                        backgroundImage:
                          'url("assets/img/banner/comboo-bg.jpg")',
                      }}
                    >
                      <div className="pizza-text">
                        <img
                          src="assets/img/shape/combo-pizza-text.png"
                          alt="shape-img"
                        />
                      </div>
                      <div className="pizza-image">
                        <img
                          src="assets/img/food/big-pizza.png"
                          alt="food-img"
                        />
                      </div>
                      <div className="offer-shape">
                        <img
                          src="assets/img/offer/50percent-off-2.png"
                          alt="shape-img"
                        />
                      </div>
                      <div className="vegetable-shape">
                        <img
                          src="assets/img/shape/vegetable.png"
                          alt="shape-img"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <div
                      className="comboo-image bg-cover"
                      style={{
                        backgroundImage:
                          'url("assets/img/banner/comboo-bg.jpg")',
                      }}
                    >
                      <div className="pizza-text">
                        <img
                          src="assets/img/shape/combo-pizza-text.png"
                          alt="shape-img"
                        />
                      </div>
                      <div className="pizza-image">
                        <img
                          src="assets/img/food/big-pizza.png"
                          alt="food-img"
                        />
                      </div>
                      <div className="offer-shape">
                        <img
                          src="assets/img/offer/50percent-off-2.png"
                          alt="shape-img"
                        />
                      </div>
                      <div className="vegetable-shape">
                        <img
                          src="assets/img/shape/vegetable.png"
                          alt="shape-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marque Section Start */}
      <Marque />

      {/* Choose Us Section Start */}
      <section className="choose-us fix section-padding pt-0 section-bg">
        <div className="container">
          <div
            className="food-icon-wrapper bg-cover"
            style={{
              backgroundImage: 'url("assets/img/shape/food-shape-2.png")',
            }}
          >
            <div className="row g-4">
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-food-icon">
                  <div className="icon">
                    <i className="flaticon-quality" />
                  </div>
                  <div className="content">
                    <h4>super quality food</h4>
                    <p>
                      Premium halal ingredients prepared fresh daily at Al-Kababi.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-food-icon">
                  <div className="icon">
                    <i className="flaticon-cooking" />
                  </div>
                  <div className="content">
                    <h4>original recipes</h4>
                    <p>
                      Authentic Middle Eastern recipes crafted by our expert chefs.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="single-food-icon">
                  <div className="icon">
                    <i className="flaticon-fast-delivery" />
                  </div>
                  <div className="content">
                    <h4>quick fast delivery</h4>
                    <p>
                      Fast delivery and pickup — hot, on time, every order.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="single-food-icon">
                  <div className="icon">
                    <i className="flaticon-quality" />
                  </div>
                  <div className="content">
                    <h4>100% fresh foods</h4>
                    <p>
                      100% fresh produce and halal meats sourced with care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Start */}
      <section className="about-section fix section-padding pt-0 section-bg">
        <div className="container">
          <div className="about-wrapper">
            <div className="row align-items-center">
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="about-image">
                  <img src="assets/img/about/burger.png" alt="about-img" />
                  <div className="burger-text">
                    <img
                      src="assets/img/about/burger-text.png"
                      alt="shape-img"
                    />
                  </div>
                  <div className="price">
                    <h2>
                      $<span className="count">4,99</span>
                    </h2>
                  </div>
                  <div
                    className="since-text bg-cover"
                    style={{
                      backgroundImage: 'url("assets/img/shape/food-shape.png")',
                    }}
                  >
                    <h3>since /1985</h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
                <div className="about-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">about our food</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Where Quality Meet Excellent <span>Service.</span>
                    </h2>
                  </div>
                  <p className="wow fadeInUp" data-wow-delay=".5s">
                    At Al-Kababi, we serve authentic Middle Eastern cuisine made fresh daily.
                    From hand-marinated kebabs to house-baked breads, every dish is halal,
                    flavorful, and prepared to order.
                  </p>
                  <div className="icon-area">
                    <div
                      className="icon-items d-flex wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div className="icon">
                        <i className="flaticon-quality" />
                      </div>
                      <div className="content">
                        <h4>super quality food</h4>
                        <p>
                          Premium halal ingredients prepared fresh in our kitchen.
                        </p>
                      </div>
                    </div>
                    <div
                      className="icon-items d-flex wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <div className="icon">
                        <i className="flaticon-reputation" />
                      </div>
                      <div className="content">
                        <h4>well reputation</h4>
                        <p>
                          Loved by our community for consistent taste and friendly service.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="info-area d-flex align-items-center">
                    <Link
                      href="/about"
                      className="theme-btn wow style-line-height fadeInUp"
                      data-wow-delay=".3s"
                    >
                      more about us
                    </Link>
                    <div
                      className="info-content wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <span>BRENDON GARREY</span>
                      <h6>Customer’s experience is our highest priority.</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section Start */}
      <TestimonialSlider />
      {/* Main Cta Banner Section Start */}
      <section className="main-cta-banner section-padding pt-0">
        <div className="container">
          <div
            className="main-cta-banner-wrapper bg-cover mt-10"
            style={{
              backgroundImage: 'url("assets/img/banner/main-cta-bg.jpg")',
            }}
          >
            <div className="section-title">
              <span className="theme-color-3 wow fadeInUp">
                crispy, every bite taste
              </span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                30 minutes fast <br />
                <span className="theme-color-3">delivery</span> challage
              </h2>
            </div>
            <Link
              href="/shop-single"
              className="theme-btn bg-white mt-4 mt-md-0 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <span className="button-content-wrapper d-flex align-items-center">
                <span className="button-icon">
                  <i className="flaticon-delivery" />
                </span>
                <span className="button-text">order now</span>
              </span>
            </Link>
            <div className="arrow-shape">
              <img src="assets/img/shape/arrow-shape.png" alt="shape-img" />
            </div>
            <div className="delivery-man">
              <img src="assets/img/delivery-man.png" alt="img" />
            </div>
            <div className="frame-shape">
              <img src="assets/img/shape/frame.png" alt="shape-img" />
            </div>
          </div>
        </div>
      </section>
      {/* Booking Section Start */}
      <section
        className="booking-section fix section-padding bg-cover"
        style={{ backgroundImage: 'url("assets/img/banner/main-bg.jpg")' }}
      >
        <div className="container">
          <div className="booking-wrapper style-responsive section-padding pb-0">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <div className="booking-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">
                      crispy, every bite taste
                    </span>
                    <h2
                      className="text-white wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      need booking? <br />
                      reserve your table?
                    </h2>
                  </div>
                  <div
                    className="icon-items d-flex align-items-center wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="icon">
                      <i className="flaticon-phone-call-2" />
                    </div>
                    <div className="content">
                      <h5>24/7 Support center</h5>
                      <h3>
                        <a href="tel:+516-249-7414">+516-249-7414</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-5 mt-5 mt-lg-0 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <ReservationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </FoodKingLayout>
  );
};
export default page;
