export default () => {

    return (
        <div style={{width: '100vw', paddingTop: '100px', paddingBottom: '300px', fontSize: '30px', fontWeight: 'bold', backgroundColor: '#72A0C1'}}>
            <form method="post" action='/api/productCRUD/addProduct'>
                <h1 style={{fontSize: '50px', width: '500px', marginLeft: '20px'}}>დაამატე პროდუქტი:</h1>
                <div style={{margin: '20px'}}>
                <label>დასახელება:</label>
                <br></br>
                <input name="name" style={{width: '300px', fontSize: '18px',height: '30px',borderWidth: '2px'}} />
                <br></br>
                <label>აღწერა:</label>
                <br></br>
                <textarea name="description" style={{width: '300px', fontSize: '18px',height: '90px',borderWidth: '2px'}}/>
                <br></br>
                <label>ფასი:</label>
                <br></br>
                <input name="price" style={{width: '300px', fontSize: '18px',height: '30px',borderWidth: '2px'}} type="number"/>
                <br></br>
                <label>სურათის ლინკი:</label>
                <br></br>
                <input name="image" style={{width: '300px', fontSize: '18px',height: '30px',borderWidth: '2px'}} />
                </div>
                <button style={{width: '300px', fontWeight: 'bold',marginLeft: '20px', fontSize: '20px', height: '30px',borderWidth: '2px'}}  type="submit">
                   პროდუქტის დამატება</button>
            </form>
        </div>
    )
}