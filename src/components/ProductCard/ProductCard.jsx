import { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async () => {
    try {
      const simulatedResponse = {
        isDeleted: true,
        deletedOn: new Date().toISOString(),
      };

      setIsDeleted(true);

      console.log("Silinen Ürün:", simulatedResponse);
      if (props.onDelete) {
        props.onDelete();
      }
    } catch (error) {
      console.error("Hata:", error);
    }
  };

  if (isDeleted) {
    return (
      <div className="card">
        <p className="text-danger">Ürün Silindi!</p>
        <p>Deleted On: {new Date().toISOString()}</p>
      </div>
    );
  }

  const limitDescription = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  };

  return (
    <div
      className="card"
      style={{
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={props.product.thumbnail}
        className="card-img-top img-fluid"
        alt="..."
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <div
        className="card-body"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h5 className="card-title">{props.product.title}</h5>
          <p className="card-text">{limitDescription(props.product.description, 10)}</p>
        </div>
        <div>
          <Link
            to={`/products/${props.product.id}`}
            className="btn btn-primary"
          >
            Detay
          </Link>
          <button
            onClick={handleDelete}
            style={{ marginLeft: 4 }}
            className="btn btn-danger"
          >
            Sil
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
