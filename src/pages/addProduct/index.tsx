export default () => {
    return (
        <div style={{width: '100vw', paddingTop: '100px', paddingBottom: '300px', fontSize: '30px', fontWeight: 'bold', backgroundColor: '#fef4ec'}}>
            <form>
                <h1 style={{fontSize: '50px', width: '500px', marginLeft: '20px'}}>Add Product</h1>
                <div style={{margin: '20px'}}>
                <label>Name:</label>
                <br></br>
                <input style={{width: '300px', fontSize: '18px',height: '30px',borderWidth: '2px', borderColor: '#f5ddb6', backgroundColor: '#f5ddb6'}} type="name"/>
                <br></br>
                <label>Description:</label>
                <br></br>
                <textarea style={{width: '300px', fontSize: '18px',height: '90px',borderWidth: '2px', borderColor: '#f5ddb6', backgroundColor: '#f5ddb6'}}/>
                <br></br>
                <label>Price:</label>
                <br></br>
                <input style={{width: '300px', fontSize: '18px',height: '30px',borderWidth: '2px', borderColor: '#f5ddb6', backgroundColor: '#f5ddb6'}} type="price"/>
                </div>
                <button style={{width: '300px', fontWeight: 'bold',marginLeft: '20px', fontSize: '20px', height: '30px',borderWidth: '2px', borderColor: '#f5ddb6', backgroundColor: '#f5ddb6'}}  type="button">Submit</button>
            </form>
        </div>
    )
}