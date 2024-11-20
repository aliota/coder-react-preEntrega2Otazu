import products from '../products/products.js';

const fetchApi = ()=>{
    return new Promise((resolve, reject) => {
        setTimeout((()=>{resolve(products)}),1000);    
    })
}

export default fetchApi



  