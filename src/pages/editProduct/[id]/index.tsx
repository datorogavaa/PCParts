import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditProductForm() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (id) {
      fetch(`/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct({
            name: data.Name,
            description: data.Description,
            price: data.Price,
            image: data.Image,
          });
        })
        .catch((err) => console.error("Failed to fetch product", err));
    }
  }, [id]);

  return (
    <div
      style={{
        width: "100vw",
        paddingTop: "100px",
        paddingBottom: "300px",
        fontSize: "30px",
        fontWeight: "bold",
        backgroundColor: "#fef4ec",
      }}
    >
      <form action={`/api/productCRUD/editProduct/${id}`} method="POST">
        <h1 style={{ fontSize: "50px", width: "500px", marginLeft: "20px" }}>
          Edit Product
        </h1>
        <div style={{ margin: "20px" }}>
          <input type="hidden" name="id" value={id} />
          <label>Name:</label>
          <br />
          <input
            name="name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            style={inputStyle}
          />
          <br />
          <label>Description:</label>
          <br />
          <textarea
            name="description"
            value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
            style={textareaStyle}
          />
          <br />
          <label>Price:</label>
          <br />
          <input
            name="price"
            type="number"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            style={inputStyle}
          />
          <br />
          <label>Image URL:</label>
          <br />
          <input
            name="image"
            value={product.image}
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Edit Product
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "300px",
  fontSize: "18px",
  height: "30px",
  borderWidth: "2px",
  borderColor: "#f5ddb6",
  backgroundColor: "#f5ddb6",
};

const textareaStyle = {
  ...inputStyle,
  height: "90px",
};

const buttonStyle = {
  width: "300px",
  fontWeight: "bold",
  marginLeft: "20px",
  fontSize: "20px",
  height: "30px",
  borderWidth: "2px",
  borderColor: "#f5ddb6",
  backgroundColor: "#f5ddb6",
};
