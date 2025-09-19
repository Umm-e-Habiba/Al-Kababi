import Cta from "@/components/Cta";
import FoodKingLayout from "@/layouts/FoodKingLayout";

const page = () => {
  const contactInfo = [
    {
      icon: "location.svg",
      title: "Address",
      content: "22 Hempstead Turnpike\nFarmingdale NY 11735",
      delay: ".3s",
    },
    {
      icon: "phone.svg",
      title: "Phone Number",
      content: "+1 516-249-7414",
      delay: ".5s",
      active: true,
    },
    {
      icon: "email.svg",
      title: "Pickup Only",
      content:
        "Al-Kababi — 14 brands under one roof.\nOrder ahead and pick up in-store.",
      delay: ".7s",
    },
  ];

  return (
    <FoodKingLayout>
      {/* === HERO (no breadcrumbs) === */}
      <section
        className="contact-hero-ak bg-cover"
        style={{ backgroundImage: 'url("/assets/img/hero/contact-desi.jpg")' }}
      >
        <div className="contact-hero-ak__overlay" />
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-9">
              <div className="contact-hero-ak__content">
                <h1>Contact Al-Kababi</h1>
                <p>
                  14 brands under one roof — fresh desi flavors.{" "}
                  <strong>Pickup only.</strong>
                </p>
                <div className="contact-hero-ak__badges">
                  <span className="ak-badge ak-badge--primary">Pickup Only</span>
                  <span className="ak-badge ak-badge--accent">14 Brands</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === CONTACT INFO CARDS === */}
      <section className="contact-info-section fix section-padding section-bg">
        <div className="container">
          <div className="row g-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <div
                  className={`contact-info-items ${item.active ? "is-active" : ""} text-center`}
                >
                  <div className="icon">
                    <img src={`/assets/img/icon/${item.icon}`} alt="icon" />
                  </div>
                  <div className="content">
                    <h3>{item.title}</h3>
                    <p style={{ whiteSpace: "pre-line" }}>{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CONTACT & MAP === */}
      <section className="contact-section section-padding pt-0 section-bg">
        <div className="container">
          <div className="contact-area">
            <div className="row justify-content-between">
              <div className="col-xl-6 col-lg-6">
                <div className="map-content-area">
                  <h3 className="wow fadeInUp" data-wow-delay=".3s">
                    Visit & Pick Up
                  </h3>
                  <p className="wow fadeInUp" data-wow-delay=".5s">
                    We’re Al-Kababi — <strong>14 brands</strong> of desi flavor in one
                    spot. Order ahead, then <strong>pick up</strong> at our Farmingdale
                    location.
                  </p>
                  <div className="google-map wow fadeInUp" data-wow-delay=".7s">
                    <iframe
                      title="Al-Kababi Map"
                      src="https://www.google.com/maps?q=22%20Hempstead%20Turnpike%2C%20Farmingdale%2C%20NY%2011735&output=embed"
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
                    <h3 className="wow fadeInUp" data-wow-delay=".3s">
                      Send us a message
                    </h3>
                    <p className="wow fadeInUp" data-wow-delay=".5s">
                      We’ll get back to you soon. Fields marked * are required.
                    </p>
                  </div>
                  <form id="contact-form" method="POST">
                    <div className="row g-4">
                      <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
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
                      <div className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
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
                      <div className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
                        <div className="form-clt-big form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Enter your message here"
                            defaultValue=""
                          />
                          <div className="icon">
                            <i className="fal fa-edit" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".8s">
                        <button type="submit" className="theme-btn ak-btn">
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

      {/* --- PAGE-SCOPED GLOBAL CSS (keeps your original background) --- */}
      <style>{`
        /* Brand colors */
        :root {
          --ak-red: #D12525;
          --ak-gold: #FFB936;
        }

        /* HERO */
        .contact-hero-ak {
          position: relative;
          padding: 120px 0 100px;
          background-position: center;
          background-size: cover;
        }
        .contact-hero-ak__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.25) 60%, rgba(0,0,0,.15) 100%);
        }
        .contact-hero-ak__content { position: relative; z-index: 1; color: #fff; }
        .contact-hero-ak__content h1 { font-size: 54px; line-height: 1.1; margin-bottom: 12px; }
        .contact-hero-ak__content p { font-size: 18px; opacity: .95; margin-bottom: 18px; }
        .contact-hero-ak__badges { display: flex; gap: 10px; flex-wrap: wrap; }
        .ak-badge {
          display: inline-block; padding: 8px 14px; border-radius: 999px;
          font-weight: 700; font-size: 13px; letter-spacing: .4px; border: 2px solid transparent;
        }
        .ak-badge--primary { background: var(--ak-red); color: #fff; border-color: var(--ak-red); }
        .ak-badge--accent { background: var(--ak-gold); color: #1a1a1a; border-color: var(--ak-gold); }
        @media (max-width: 991px) {
          .contact-hero-ak { padding: 90px 0 80px; }
          .contact-hero-ak__content h1 { font-size: 40px; }
        }

        /* Card headings to gold; keep your theme's card bg/borders */
        .contact-info-items h3 { color: var(--ak-gold); }

        /* Buttons in brand colors; no green */
        .ak-btn { background: var(--ak-red) !important; border-color: var(--ak-red) !important; }
        .ak-btn:hover { background: var(--ak-gold) !important; border-color: var(--ak-gold) !important; color: #1a1a1a !important; }

        /* Inputs keep your site styles; just improve contrast a bit if needed */
        .form-clt input::placeholder, .form-clt textarea::placeholder { color: #777; }
        .google-map iframe { width: 100%; height: 360px; border-radius: 10px; }
      `}</style>
    </FoodKingLayout>
  );
};

export default page;
