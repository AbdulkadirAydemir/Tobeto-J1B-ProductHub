import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductDetails(props) {
  const [productDetails, setProductDetails] = useState({});
  const {
    brand,
    title,
    description,
    category,
    price,
    rating,
    stock,
    thumbnail,
  } = productDetails;

  const { id } = useParams();

  useEffect(() => {
    axiosGet();
  }, []);

  const axiosGet = async () => {
    try {
      let response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProductDetails(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Hata oluştu:", error);
    }
  };

  if (!productDetails || Object.keys(productDetails).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card" style={{ border: 'none' }}>
        <div className="row g-0">
          <div className="col-md-6">
            <img src={thumbnail} alt={title} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h4 className="card-title text-center font-weight-bold">{brand}  -  {title}</h4>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">Category: {category}</small>
              </p>
              <p className="card-text">
                <small className="text-muted">Price: {price}</small>
              </p>
              <p className="card-text">
                <small className="text-muted">Rating: {rating}</small>
              </p>
              <p className="card-text">
                <small className="text-muted">Stock: {stock}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
