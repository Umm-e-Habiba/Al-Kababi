"use client";
import Link from "next/link";
import Slider from "rc-slider";
import { useState } from "react";

const ProductSidebar = ({
  className = "col-xl-3 col-lg-4 order-2 order-md-1 mt-5",
  style = "style-1",
}) => {
  const [value, setValue] = useState([10, 30]);
  const [openCat, setOpenCat] = useState(null); // which category accordion is open

  // ===== Submenus (fill/adjust to exactly match your menu.pdf) =====
  const burgerItems = [
    "Beef Classic Burger",
    "Beef Platinum Burger",
    "Beef Belt Buster Burger",
    "Chicken Classic Burger",
  ];

  const traditionalItems = [
    // TODO: replace with your exact Traditional items from menu.pdf
    "Chicken Handi",
    "Mutton Karahi",
    "Daal Fry",
    "Chicken Ginger",
  ];

  const tandoorItems = [
    // TODO: replace with exact Tandoor items
    "Roghni Naan",
    "Garlic Naan",
    "Kulcha",
    "Tandoori Roti",
  ];

  const gyroWrapItems = [
    "Chicken Gyro Wrap",
    "Lamb Gyro Wrap",
    "Falafel Wrap",
  ];

  const saladBarItems = [
    // TODO: replace with exact Salad Bar items
    "Greek Salad",
    "Caesar Salad",
    "Fattoush",
  ];

  const beveragesItems = [
    // TODO: replace with exact Beverages
    "Mineral Water",
    "Soft Drink",
    "Fresh Lime",
    "Mint Margarita",
  ];

  const friedRiceItems = [
    "Chicken Fried Rice",
    "Beef Fried Rice",
    "Vegetable Fried Rice",
    "Egg Fried Rice",
  ];

  const bbqItems = [
    "Bihari Tikka Leg",
    "Chicken Bihari Kabab",
    "Chicken Tikka Tandoori",
    "Lamb Chops (3 pcs)",
    "Chicken Malai Boti",
    "Chicken Chapli Kabab",
    "Beef Bihari Kabab",
    "Beef Gola Kabab",
    "Chicken Seekh Kabab",
  ];

  const gyroCombosItems = [
    "Chicken Gyro Platter",
    "Lamb Gyro Platter",
    "Falafel Platter",
    "Mix Gyro Platter",
  ];

  const bbqRollItems = [
    "Chicken Bihari Chutney Roll",
    "Chicken Mayo Garlic Roll",
    "Beef Bihari Chutney Roll",
    "Beef Mayo Garlic Roll",
    "Malai Boti Chutney Roll",
    "Malai Mayo Garlic Roll",
    "Gola Kabab Chutney Roll",
    "Gola Kabab Mayo Roll",
  ];

  const mediterraneanItems = ["Chicken Shawarma", "Lamb Shawarma"];

  const specialPlatterItems = [
    "MIX BBQ PLATTER",
    "Special Platter (With Rice)",
    "Lamb Chops Platter",
  ];

  const bbqPlatterItems = [
    // keep separate if your menu has a distinct “BBQ Platter” section
    "BBQ Platter (Regular)",
    "BBQ Platter (Large)",
  ];

  // ===== Small helper to render an accordion category =====
  const renderAccordion = ({
    keyName,
    iconClass,
    label,
    items,
    queryCategory,
  }) => {
    const isOpen = openCat === keyName;
    const list =
      items && items.length
        ? items
        : ["View all"]; // fallback so it still drops down

    return (
      <li className={`has-dropdown ${isOpen ? "active" : ""}`}>
        <button
          type="button"
          className="category-toggle"
          onClick={() => setOpenCat(isOpen ? null : keyName)}
          aria-expanded={isOpen}
          aria-controls={`cat-${keyName}`}
          style={{ display: "flex", alignItems: "center", gap: 8, width: "100%" }}
        >
          {iconClass ? <i className={iconClass} /> : null}
          <span>{label}</span>
          <i
            className={`fas fa-angle-${isOpen ? "up" : "down"}`}
            style={{ marginLeft: "auto" }}
          />
        </button>

        <ul
          id={`cat-${keyName}`}
          className="submenu"
          style={{
            display: isOpen ? "block" : "none",
            paddingLeft: 32,
            marginTop: 8,
          }}
        >
          {list.map((item) => (
            <li key={item}>
              <Link
                href={{
                  pathname: "/shop-left-sidebar",
                  query: {
                    category: queryCategory || keyName,
                    ...(item !== "View all" ? { item } : {}),
                  },
                }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  };

  return (
    <div className={className}>
      <div className={`main-sidebar ${style}`}>
        {/* === CATEGORIES (all as accordions) === */}
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h4>categories</h4>
          </div>

          <div className="widget-categories">
            <ul className="category-accordion">
              {renderAccordion({
                keyName: "burger",
                iconClass: "flaticon-burger",
                label: "Burger",
                items: burgerItems,
                queryCategory: "burger",
              })}

              {renderAccordion({
                keyName: "traditional",
                iconClass: "flaticon-chicken",
                label: "Traditional",
                items: traditionalItems,
                queryCategory: "traditional",
              })}

              {renderAccordion({
                keyName: "tandoor",
                iconClass: "flaticon-french-fries",
                label: "Tandoor",
                items: tandoorItems,
                queryCategory: "tandoor",
              })}

              {renderAccordion({
                keyName: "gyro-wrap",
                iconClass: "flaticon-pizza",
                label: "Gyro Wrap",
                items: gyroWrapItems,
                queryCategory: "gyro-wrap",
              })}

              {renderAccordion({
                keyName: "salad-bar",
                iconClass: "flaticon-sandwich",
                label: "Salad Bar",
                items: saladBarItems,
                queryCategory: "salad-bar",
              })}

              {renderAccordion({
                keyName: "beverages",
                iconClass: "flaticon-bread",
                label: "Beverages",
                items: beveragesItems,
                queryCategory: "beverages",
              })}

              {renderAccordion({
                keyName: "fried-rice",
                iconClass: "flaticon-rice",
                label: "Fried Rice",
                items: friedRiceItems,
                queryCategory: "fried-rice",
              })}

              {renderAccordion({
                keyName: "bbq",
                iconClass: "flaticon-hotdog",
                label: "BBQ",
                items: bbqItems,
                queryCategory: "bbq",
              })}

              {renderAccordion({
                keyName: "gyro-combos",
                iconClass: "flaticon-rice",
                label: "Gyro Combos",
                items: gyroCombosItems,
                queryCategory: "gyro-combos",
              })}

              {renderAccordion({
                keyName: "bbq-roll",
                iconClass: "flaticon-rice",
                label: "BBQ Roll",
                items: bbqRollItems,
                queryCategory: "bbq-roll",
              })}

              {renderAccordion({
                keyName: "mediterranean",
                iconClass: "flaticon-rice",
                label: "Mediterranean",
                items: mediterraneanItems,
                queryCategory: "mediterranean",
              })}

              {renderAccordion({
                keyName: "special-platter",
                iconClass: "flaticon-rice",
                label: "Special Platter",
                items: specialPlatterItems,
                queryCategory: "special-platter",
              })}

              {renderAccordion({
                keyName: "bbq-platter",
                iconClass: "flaticon-rice",
                label: "BBQ Platter",
                items: bbqPlatterItems,
                queryCategory: "bbq-platter",
              })}
            </ul>
          </div>

          {/* tiny style touch for the toggle UX */}
          <style jsx>{`
            .category-accordion .has-dropdown > .category-toggle {
              background: transparent;
              border: 0;
              padding: 8px 0;
              cursor: pointer;
              text-align: left;
              font: inherit;
            }
            .category-accordion .submenu li {
              margin: 6px 0;
            }
          `}</style>
        </div>

        {/* === PRICE FILTER (unchanged) === */}
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h4>price filter</h4>
          </div>
          <div className="range__barcustom">
            <Slider
              value={value}
              range
              onChange={(e) => setValue(e)}
              trackStyle={{ backgroundColor: "#00813D" }}
              handleStyle={{
                borderColor: "#00813D",
                backgroundColor: "#00813D",
              }}
              railStyle={{ backgroundColor: "#212121" }}
            />
            <div className="range-items">
              <div className="price-input d-flex">
                <div className="field">
                  <span>Price:</span>
                </div>
                <div className="field">
                  <span>${value[0]}</span>
                </div>
                <div className="separators">-</div>
                <div className="field">
                  <span>${value[1]}</span>
                </div>
                <Link
                  href="/shop-left-sidebar"
                  className="theme-btn border-radius-none"
                >
                  Filter
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* === FILTER BY SIZE (unchanged) === */}
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h4>filter by size</h4>
          </div>
          <div className="filter-size">
            {["Small", "Medium", "Large", "Extra Large"].map((size) => (
              <div key={size} className="input-save d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="size"
                  id={`size-${size.toLowerCase()}`}
                  value={size.toLowerCase()}
                />
                <label htmlFor={`size-${size.toLowerCase()}`}>{size}</label>
              </div>
            ))}
          </div>
        </div>

        {/* === NEW ARRIVAL (unchanged) === */}
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h4>new arrival</h4>
          </div>
          <div className="popular-food-posts">
            <div className="single-post-item">
              <div
                className="thumb bg-cover"
                style={{
                  backgroundImage: 'url("/assets/img/shop-food/food-1.png")',
                }}
              />
              <div className="post-content">
                <div className="star">
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star color-bg" />
                </div>
                <h4>
                  <Link href="/shop-single">ruti with chiken</Link>
                </h4>
                <div className="post-price">
                  <span className="theme-color-2">$30.52</span>
                  <span>$28.52</span>
                </div>
              </div>
            </div>
            <div className="single-post-item">
              <div
                className="thumb bg-cover"
                style={{
                  backgroundImage: 'url("/assets/img/shop-food/food-2.png")',
                }}
              />
              <div className="post-content">
                <div className="star">
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star color-bg" />
                </div>
                <h4>
                  <Link href="/shop-single">ruti with chiken</Link>
                </h4>
                <div className="post-price">
                  <span className="theme-color-2">$30.52</span>
                  <span>$28.52</span>
                </div>
              </div>
            </div>
            <div className="single-post-item">
              <div
                className="thumb bg-cover"
                style={{
                  backgroundImage: 'url("/assets/img/shop-food/food-3.png")',
                }}
              />
              <div className="post-content">
                <div className="star">
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star color-bg" />
                </div>
                <h4>
                  <Link href="/shop-single">ruti with chiken</Link>
                </h4>
                <div className="post-price">
                  <span className="theme-color-2">$30.52</span>
                  <span>$28.52</span>
                </div>
              </div>
            </div>
            <div className="single-post-item">
              <div
                className="thumb bg-cover"
                style={{
                  backgroundImage: 'url("/assets/img/shop-food/food-4.png")',
                }}
              />
              <div className="post-content">
                <div className="star">
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star color-bg" />
                </div>
                <h4>
                  <Link href="/shop-single">ruti with chiken</Link>
                </h4>
                <div className="post-price">
                  <span className="theme-color-2">$30.52</span>
                  <span>$28.52</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* === /NEW ARRIVAL === */}
      </div>
    </div>
  );
};

export default ProductSidebar;
