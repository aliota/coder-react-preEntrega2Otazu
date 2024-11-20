import "./Item.css"

function Item({product}) {

    return (
        <div key={product.id} className="card">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>          
            <p>$ {product.price}</p>
        </div>
    )
}

export default Item