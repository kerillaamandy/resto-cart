import './App.css';
import Main from './Main';
import Cart from './Cart.js';
import { useState } from 'react';


const Items =
  [
    {
        id: 1,
        name: "Burger", 
        price: 50, 
        category: "Food",
        image: "https://image.flaticon.com/icons/svg/1046/1046784.svg"
    },
    {
      id: 2,
        name: "Pizza", 
        price: 100, 
        category: "Food",
        image: "https://image.flaticon.com/icons/svg/1046/1046771.svg"
    },
    {
        id: 3,
        name: "Fries", 
        price: 25, 
        category: "Food",
        image: "https://image.flaticon.com/icons/svg/1046/1046786.svg"
    },
    {
        id: 4,
        name: "Coffee", 
        price: 35, 
        category: "Drink",
        image: "https://image.flaticon.com/icons/svg/1046/1046785.svg"
    },
    {
      id: 5,
        name: "Iced Tea", 
        price: 45, 
        category: "Drink",
        image: "https://image.flaticon.com/icons/svg/1046/1046782.svg"
    },
    {
        id: 6,
        name: "Hot Tea", 
        price: 45, 
        category: "Drink",
        image: "https://image.flaticon.com/icons/svg/1046/1046792.svg"
    },
  ]
  

  function App() {
    const [cartItems,setCartItems] = useState([]);
    const onAdd = (item) => {
      const exist = cartItems.find ((x) => x.id === item.id);
      if (exist) {
        setCartItems (
          cartItems.map((x) =>
          x.id === item.id ? {...exist, qty: exist.qty +1 } : x
        ));
      }
     else {
      setCartItems([...cartItems, {...item,qty: 1}]);
    }
    console.log(setCartItems)
  };
  
  
  
  
  
  
  
  
  
    return (
    <div>
      <div className="row">
      <Main array = {Items} onAdd={onAdd}/>
      <Cart cartItems = {cartItems}/>
      </div>
     
   </div>
  )};


  

export default App;
