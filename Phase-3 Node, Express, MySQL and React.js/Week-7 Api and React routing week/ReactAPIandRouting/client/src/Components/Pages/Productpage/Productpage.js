import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const [product, setProducts] = useState([]);
  const { pid } = useParams();

  useEffect(() => {
    fetch(`http://localhost:7788/iphones`)
      .then((res) => res.json())
      .then((data) => {
        const productList = data.products;
        const singleProduct = productList.filter(
          (product) => product.product_id == pid
        );
        console.log(product);
        setProducts(singleProduct);
      }).catch(()=> console.log(Error));
  }, [pid]);

  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          {product?.map((product,i) => {
            const {
              product_url: id,
              product_name: title,
              product_img: img,
              product_brief_description: Brief,
              starting_price: StartPrice,
              price_range: PriceRange,
              product_description: details,
            } = product;

            return (
              <div key={i} className="bottom-100">
                <div className="row justify-content-center text-center bottom-50">
                  <div className="col-12">
                    <div className="title-wraper bold">{title}</div>
                    <div className="brief-description">{Brief}</div>
                  </div>
                </div>

                <div className="row justify-content-center text-center product-holder h-100">
                  <div className="col-sm-12 col-md-6 my-auto">
                    <div className="starting-price">
                      {`Starting at ${StartPrice}`}
                    </div>
                    <div className="monthly-price">{PriceRange}</div>
                    <div className="product-details">{details}</div>
                  </div>

                  <div className="col-sm-12 col-md-6">
                    <div className="product-image">
                      <img src={img} alt={title} />
                    </div>
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

export default ProductPage;
