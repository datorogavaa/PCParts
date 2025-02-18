export default () => {
    return (
        <div style={{width: '100vw', paddingTop: '100px', paddingBottom: '300px', fontSize: '30px', fontWeight: 'bold', backgroundColor: '#fef4ec'}}>
            <form method="post" action='/api/productCRUD/addProduct'>
                <h1 style={{fontSize: '50px', width: '500px', marginLeft: '20px'}}>Add Product</h1>
                <div style={{margin: '20px'}}>
                <label>Name:</label>
                <br></br>
                <input name="name" style={{width: '300px', fontSize: '18px',height: '30px',borderWidth: '2px', borderColor: '#f5ddb6', backgroundColor: '#f5ddb6'}} />
                <br></br>
                <label>Description:</label>
                <br></br>
                <textarea name="description" style={{width: '300px', fontSize: '18px',height: '90px',borderWidth: '2px', borderColor: '#f5ddb6', backgroundColor: '#f5ddb6'}}/>
                <br></br>
                <label>Price:</label>
                <br></br>
                <input name="price" style={{width: '300px', fontSize: '18px',height: '30px',borderWidth: '2px', borderColor: '#f5ddb6', backgroundColor: '#f5ddb6'}} type="number"/>
                <br></br>
                <label>Image Url:</label>
                <br></br>
                <input name="image" style={{width: '300px', fontSize: '18px',height: '30px',borderWidth: '2px', borderColor: '#f5ddb6', backgroundColor: '#f5ddb6'}} />
                </div>
                <button style={{width: '300px', fontWeight: 'bold',marginLeft: '20px', fontSize: '20px', height: '30px',borderWidth: '2px', borderColor: '#f5ddb6', backgroundColor: '#f5ddb6'}}  type="submit">
                    Create Product</button>
            </form>
        </div>
    )
}