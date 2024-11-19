import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./itemListContainer.css"

function ItemListContainer({greeting}) {
  const { idCategory } = useParams();
  return (
    <div className="itemListContainer">
       <h1>{greeting}</h1>         
       <div className="list">Aqui van los productos con categoría: { idCategory }</div>       
    </div>   
  )
}

export default ItemListContainer