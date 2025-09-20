import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
const page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"Al-Kababi Menu"} />
      <section className="section-padding menu-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12">
              <div className="menu-card">
                <div className="menu-card__header d-flex align-items-center justify-content-between">
                  <h3 className="mb-0">Al-Kababi Menu</h3>
                  <div className="menu-card__actions d-none d-sm-flex gap-2">
                    <a href="assets/img/menu.png" className="theme-btn-2">Zoom</a>
                    <a href="assets/img/menu.png" download className="theme-btn">Download</a>
                  </div>
                </div>
                <a href="assets/img/menu.png" className="menu-card__image img-popup">
                  <img src="assets/img/menu.png" alt="Al-Kababi Menu" className="menu-img" />
                </a>
                <div className="menu-card__actions d-flex d-sm-none gap-2 mt-3">
                  <a href="assets/img/menu.png" className="theme-btn-2 w-100 text-center">Zoom</a>
                  <a href="assets/img/menu.png" download className="theme-btn w-100 text-center">Download</a>
                </div>
                <p className="menu-card__note text-center mt-3 mb-0">Tap the image to zoom. Prices and items may vary.</p>
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
