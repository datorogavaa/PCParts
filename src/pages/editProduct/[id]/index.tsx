import { useRouter } from "next/router";

export default function EditProductForm() {
    const router = useRouter()
    const { id } = router.query
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
            <input type="hidden" name="id" />
            <label>Name:</label>
            <br />
            <input
              name="name"
              style={{
                width: "300px",
                fontSize: "18px",
                height: "30px",
                borderWidth: "2px",
                borderColor: "#f5ddb6",
                backgroundColor: "#f5ddb6",
              }}
            />
            <br />
            <label>Description:</label>
            <br />
            <textarea
              name="description"
              style={{
                width: "300px",
                fontSize: "18px",
                height: "90px",
                borderWidth: "2px",
                borderColor: "#f5ddb6",
                backgroundColor: "#f5ddb6",
              }}
            />
            <br />
            <label>Price:</label>
            <br />
            <input
              name="price"
              type="number"
              style={{
                width: "300px",
                fontSize: "18px",
                height: "30px",
                borderWidth: "2px",
                borderColor: "#f5ddb6",
                backgroundColor: "#f5ddb6",
              }}

            />
          <label>Image Url:</label>
          <br></br>
          <input name="image" style={{
            width: '300px',
            fontSize: '18px',
            height: '30px',
            borderWidth: '2px', 
            borderColor: '#f5ddb6', 
            backgroundColor: '#f5ddb6'
            }} />  
          </div>
          <button
            style={{
              width: "300px",
              fontWeight: "bold",
              marginLeft: "20px",
              fontSize: "20px",
              height: "30px",
              borderWidth: "2px",
              borderColor: "#f5ddb6",
              backgroundColor: "#f5ddb6",
            }}
            type="submit"
          >
            Edit Product
          </button>
        </form>
      </div>
    );
  }
  