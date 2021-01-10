import React from 'react'

function Items(props) {
    return (
        <div className="">
            <img className="small" src= {props.arr.image}/>
            <h2>{props.arr.name}</h2>
            <div>Php {props.arr.price}</div>
            <div>
                <button onClick={() => props.onAdd(props.arr) }> Add To Cart</button>
            </div>
            
        </div>)
    
}

export default Items
