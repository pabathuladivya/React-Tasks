import React, { useState } from "react";


const ProductForm =()=>{

    const [name,setName] = useState('')
    const [quantity,setQuantity] = useState('')
    const [price,setPrice] = useState('')

    const addProduct =()=>{

    }
    return(
        <div>
            Name:<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/>
        Quantity:<input type="text" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}/><br/>
           price:<input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}}/><br/>
           <button onClick={addProduct}>Add</button>
        </div>
    )
}
export default ProductForm;