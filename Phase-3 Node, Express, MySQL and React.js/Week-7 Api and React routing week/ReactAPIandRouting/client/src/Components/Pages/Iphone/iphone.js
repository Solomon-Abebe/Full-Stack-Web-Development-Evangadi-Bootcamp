import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7788/iphones")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch(() => console.log("Error: unable to fetch!"));
  }, []);

  console.log(products);

  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wrapper bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products.map((product, index) => {
            const id = product.product_url;
            const title = product.product_name;
            const img = product.product_img;
            const Brief = product.product_brief_description;
            const StartPrice = product.starting_price;
            const PriceRange = product.price_range;
            const productPage = `/iphone/${id}`;

            const order1 = index % 2 === 0 ? 1 : 2;
            const order2 = index % 2 === 0 ? 2 : 1;

            return (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{title}</div>
                  <div className="product-brief">{Brief}</div>
                  <div className="starting-price">
                    {`Starting at ${StartPrice}`}
                  </div>
                  <div className="monthly-price">{PriceRange}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={`${product.product_id}`}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="product-image">
                    <img src={img} alt={`${title} image`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Iphone;
