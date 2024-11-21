import "./itemDetail.css"


function ItemDetail ({item}) {   

    return (

        <div key={item.id} className='ItemDetail'>
            <p>{item.id}</p>
            {/* <img src={product.image} alt={product.name} className="img-fluid" />
                <p>{product.name}</p>          
                <p>$ {product.price}</p>             */}
        </div>
        
    )
}

export default ItemDetail