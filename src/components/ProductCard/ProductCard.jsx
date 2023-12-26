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

  return (
    <div className="card">
      <img
        src={props.product.thumbnail}
        className="card-img-top img-fluid"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">{props.product.description}</p>
        <Link to={`/products/${props.product.id}`} className="btn btn-primary">
          Detail
        </Link>
        <button
          onClick={handleDelete}
          style={{ marginLeft: 4 }}
          className="btn btn-danger">
          Sil
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
