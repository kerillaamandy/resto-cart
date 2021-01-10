import React from 'react'

function Items(props) {
    return (
        <div className="">
            <img className="small" src= {props.arr.image}/>
            <h2>{props.arr.name}</h2>
            <div>${props.arr.price}</div>
            <div>
                <button onclick={() => props.onAdd(props.arr) }> Add To Cart</button>
            </div>
            
        </div>)
    
}

export default Items
