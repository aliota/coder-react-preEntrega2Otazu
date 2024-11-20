import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from '../itemList/ItemList';
import fetchApi from '../../utils/api.js';
import "./itemListContainer.css"


function ItemListContainer({greeting}) {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { idCategory } = useParams();
  
 
  useEffect(() => {
    setLoading(true);  
    fetchApi().then(items=>{      
      if(idCategory){
        const newItems = items.filter((producto)=> producto.category === idCategory );  
        setItems(newItems); 
      }else{       
        setItems(items); 
      }        
      setLoading(false);     
    })
    .catch(()=>{
      setError(true);
    });    
   
  }, [idCategory]);

  if (loading) {    
    return (
      <div className="itemListContainer">
       <h1>{greeting}</h1>          
       <p>Cargando...</p>    
    </div>   
    )
  }

  if (error) {
    return (
      <div className="itemListContainer">
       <h1>{greeting}</h1>     
       <p>Error cargando productos</p>    
    </div>   
    )
  }

  return (
    <div className="itemListContainer">
       <h1>{greeting}</h1>      
       <ItemList items = {items} /> 
    </div>   
  )
}

export default ItemListContainer