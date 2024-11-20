import React from 'react';
import Item from "../item/Item";
import "./itemList.css"

function ItemList({items}) {
  if (items==undefined){
    items = [];
  }
  return (    
    <div className="itemList">    
        {items.map((product) => {
          return <Item key={product.id} product={product} />
        })}    
    </div>   
  )
}

export default ItemList