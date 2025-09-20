import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
const page = () => {
  const contactInfo = [
    {
      icon: "location.svg",
      title: "Our Address",
      content: "Al‑Kababi\n22 Hempstead Turnpike\nFarmingdale, NY 11735",
      delay: ".3s",
    },
    {
      icon: "phone.svg",
      title: "Phone",
      content: "+ 516-249-7414\nMon–Sun: 10:00am – 10:00pm",
      delay: ".5s",
      active: true,
    },
    {
      icon: "email.svg",
      title: "Email",
      content: "info@alkababi.com",
      delay: ".7s",
    },
  ];

  return (
    <FoodKingLayout>
      <PageBanner pageName={"Contact us"} />
      {/*<< Contact Info Section Start >>*/}
      <section className="contact-info-section fix section-padding section-bg">
        <div className="container">
          <div className="row g-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={`col-lg-4 col-md-6 wow fadeInUp`}
                data-wow-delay={item.delay}
              >
                <div
                  className={`contact-info-items ${
                    item.active ? "active" : ""
                  } text-center`}
                >
                  <div className="icon">
                    <img src={`assets/img/icon/${item.icon}`} alt="icon-img" />
                  </div>
                  <div className="content">
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*<< Contact Section Start >>*/}
      <section className="contact-section section-padding pt-0 section-bg">
        <div className="container">
          <div className="contact-area">
            <div className="row justify-content-between">
              <div className="col-xl-6 col-lg-6">
                <div className="map-content-area">
                  <h3 className="wow fadeInUp" data-wow-delay=".3s">Contact Al‑Kababi</h3>
                  <p className="wow fadeInUp" data-wow-delay=".5s">
                    We’d love to hear from you—questions, catering, feedback,
                    or reservations. Reach out and our team will respond
                    quickly.
                  </p>
                  <div className="google-map wow fadeInUp" data-wow-delay=".7s">
                    <iframe
                      title="Al-Kababi Location"
                      src="https://www.google.com/maps?q=Al-Kababi,+22+Hempstead+Turnpike,+Farmingdale,+NY+11735&z=15&output=embed"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 mt-5 mt-lg-0">
                <div className="contact-form-items">
                  <div className="contact-title">
                    <h3 className="wow fadeInUp" data-wow-delay=".3s">Send us a message</h3>
                    <p className="wow fadeInUp" data-wow-delay=".5s">
                      We’ll reply by email or phone within business hours.
                    </p>
                  </div>
                  <form id="contact-form" method="POST">
                    <div className="row g-4">
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name*"
                          />
                          <div className="icon">
                            <i className="fal fa-user" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email Address*"
                          />
                          <div className="icon">
                            <i className="fal fa-envelope" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <div className="form-clt-big form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Enter Your Messege here"
                            defaultValue={""}
                          />
                          <div className="icon">
                            <i className="fal fa-edit" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".8s"
                      >
                        <button type="submit" className="theme-btn">
                          <span className="button-content-wrapper d-flex align-items-center">
                            <span className="button-icon">
                              <i className="fal fa-paper-plane" />
                            </span>
                            <span className="button-text">Get In Touch</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </FoodKingLayout>
  );
};
export default page;
