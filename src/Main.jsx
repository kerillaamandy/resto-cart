import React from 'react'
import Items from './Items'


function Main(props) {
    
    return (
        <main className="block col-2">
        <h1>Products</h1>
        <div className="cards">
          {props.array.map((items) => (
            <Items key={items.id} arr={items} onAdd={props.onAdd}></Items>
          ))}
        </div>
      </main>
    );
          }
   

export default Main
