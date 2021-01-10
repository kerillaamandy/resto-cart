import React from 'react'

function Cart(props) {
    const { cartItems } = props;

    return (
        <aside className="block col -1">
            <h2>Cart</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is empty</div>}
                {cartItems.map((item) => (
                    <div key={item.id} className = "row">
                        <div className="col-2">{item.name}</div>
                        <div className="col-2 text-right">
                        {item.qty} x ${item.price}
                        </div>
                        </div>
                ))}
            </div>
        </aside>
      
    )
}

export default Cart
