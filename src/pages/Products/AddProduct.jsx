import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddProduct() {
  const [productInfo, setProductInfo] = useState({
    brand: "",
    title: "",
    description: "",
    category: "",
    price: "",
    rating: "",
    stock: "",
    photo: null
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (["price", "rating", "stock"].includes(name)) {
      if (!Number.isNaN(Number(value))) {
        setProductInfo((prevProductInfo) => ({
          ...prevProductInfo,
          [name]: value
        }));
      }
    } else {
      setProductInfo((prevProductInfo) => ({
        ...prevProductInfo,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      for (const key in productInfo) {
        formData.append(key, productInfo[key]);
      }

      const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const newProduct = await response.json();
        console.log("Yeni Ürün Eklendi:", newProduct);
      } else {
        console.error("Ürün eklenirken bir hata oluştu.");
      }
    } catch (error) {
      console.error("Hata:", error);
    }
  };

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <h2>Ürün Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="photo" className="form-label">Fotoğraf</label>
          <input
            type="file"
            className="form-control green-border"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="brand" className="form-label">Marka:</label>
          <input
            type="text"
            className="form-control green-border"
            id="brand"
            name="brand"
            value={productInfo.brand}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Başlık:</label>
          <input
            type="text"
            className="form-control green-border"
            id="title"
            name="title"
            value={productInfo.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Açıklama:</label>
          <textarea
            className="form-control green-border"
            id="description"
            name="description"
            value={productInfo.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Kategori:</label>
          <input
            type="text"
            className="form-control green-border"
            id="category"
            name="category"
            value={productInfo.category}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Fiyat:</label>
          <input
            type="text"
            className="form-control green-border"
            id="price"
            name="price"
            value={productInfo.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating:</label>
          <input
            type="text"
            className="form-control green-border"
            id="rating"
            name="rating"
            value={productInfo.rating}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">Stok:</label>
          <input
            type="text"
            className="form-control green-border"
            id="stock"
            name="stock"
            value={productInfo.stock}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Ürün Ekle</button>
      </form>
      <div className="mt-3">
        <Link to="/products">Ürünler Sayfası</Link>
      </div>
    </div>
  );
}

export default AddProduct;
