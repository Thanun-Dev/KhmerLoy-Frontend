import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { getProducts } from "../features/products/productSlice";
const ProductCard = (product) => {
  const { grid } = product;
  let location = useLocation();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {products.map((product) => (
        <div
          key={product._id}
          className={` ${
            location.pathname === "/product" ? `gr-${grid}` : "col-3"
          } `}
        >
          <Link
            to={`/product/${product._id}`}
            className="product-card position-relative"
          >
            <div className="wishlist-icon position-absolute">
              <button className="border-0 bg-transparent">
                <img src={wish} alt="wishlist" />
              </button>
            </div>
            <div className="product-image">
              <img src={watch} className="img-fluid" alt="img" />
              <img src={watch2} className="img-fluid" alt="img" />
            </div>
            <div className="product-details">
              <h6 className="brand">{product.brand}</h6>
              <h5 className="product-title">{product.title}</h5>
              {/* <ReactStars
                count={5}
                size={24}
                value={product.ratings}
                edit={false}
                activeColor="#ffd700"
              /> */}
              <p
                className={`description ${grid === 12 ? "d-block" : "d-none"}`}
              >
                {product.description}
              </p>
              <p className="price">${product.price}</p>
            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
                <button className="border-0 bg-transparent">
                  <img src={prodcompare} alt="compare" />
                </button>
                <button className="border-0 bg-transparent">
                  <img src={view} alt="view" />
                </button>
                <button className="border-0 bg-transparent">
                  <img src={addcart} alt="addcart" />
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
