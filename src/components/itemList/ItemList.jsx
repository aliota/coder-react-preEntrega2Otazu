import React from 'react';
import "./itemList.css"

function ItemList({filtro},{items}) {
  if (items==undefined){
    items = 0;
  }
  return (
    <div className="itemList">             
        <div className="list">Aqui va la lista de productos: {filtro}</div>     
        
    </div>   
  )
}

export default ItemList