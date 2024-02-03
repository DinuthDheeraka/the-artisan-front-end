import { useState } from "react";
import CartItem from "../cart-item/CartItem";
import { Prev } from "react-bootstrap/esm/PageItem";
import CartPaymentSection from "../cart-payment-section/CartPaymentSection";

const ShoppingCart = () => {

    const [isCartUpdated, setIsCartUpdated] = useState(false);

    let cart = []

    if(localStorage.getItem("cart")!==null){
        cart = JSON.parse(localStorage.getItem("cart"))
    }

    function updateCart(isUpdated){
        setIsCartUpdated((prev)=>{
            return !prev;
        })
    }

    return (
        <div className={`d-flex p-4 gap-5 w-100`} style={{ marginTop: '20px', marginLeft: '20px' }}>

            <div className={`d-flex flex-column gap-3`} style={{ width: '65%' }}>

                <div className={`pb-3`} style={{ borderBottom: '1px solid rgb(222,222,222)' }}>
                    <h5 style={{ fontWeight: 500, padding: 0, margin: 0 }}>{cart.length === 0 ? 'Your shopping cart is empty' : 'Shopping Cart'}</h5>
                </div>

                {/*items div*/}
                <div className={`d-flex flex-column`}>

                    {
                        cart.map((item, index) => {
                            return <CartItem
                                index={index}
                                imgUrl={item.item_img}
                                title={item.title}
                                artistName={item.artist_name}
                                price={item.price}
                                qty={item.qty}
                                maxQty={item.max_qty}
                                updateCart={updateCart}
                            />
                        })
                    }

                </div>

            </div>

            {/*payment*/}
            <CartPaymentSection cart={cart} updateCart={updateCart}/>
        </div>
    ); 
}

export default ShoppingCart;