import { useState } from "react";

export default function CartItem({ index, imgUrl, artistName, title, price, qty, maxQty, updateCart }) {

    const [itemQty, setItemQty] = useState(qty);

    return (
        <div style={{ borderBottom: '1px solid rgb(222,222,222)' }}
            className={`justify-content-start pt-4 pb-4  d-flex w-100 flex-row`}>

            <div className={`d-flex gap-3`} style={{ width: '50%' }}>
                <div className={``}>
                    <img
                        style={{ objectFit: 'cover', borderRadius: '5px' }}
                        border={'none'}
                        height={'120px'}
                        width={'120px'}
                        src={imgUrl}
                    />
                </div>
                <div className={`d-flex gap-1 flex-column align-items-start justify-content-center`}>
                    <text><b>{title}</b></text>
                    <text>{artistName}</text>
                </div>
            </div>
            <div className={`d-flex justify-content-center align-items-center`}
                style={{ width: '15%' }}>
                <div className={`d-flex gap-3 align-items-center`}>
                    <button

                        onClick={() => {
                            if (itemQty > 1) {
                                setItemQty(itemQty - 1);
                                let cart = JSON.parse(localStorage.getItem("cart"));
                                cart[index].qty = cart[index].qty - 1;
                                localStorage.setItem("cart", JSON.stringify(cart));
                                updateCart(true);
                            }
                        }}

                        style={{
                            // borderRadius: '10px',
                            width: '30px',
                            // border: 'none',
                            border: '1px solid rgb(222,222,222)',
                            backgroundColor: 'rgba(246,246,246,0.85)'
                        }}>-
                    </button>
                    <small>{itemQty}</small>
                    <button

                        onClick={() => {
                            if (itemQty < maxQty) {
                                setItemQty(itemQty + 1);
                                let cart = JSON.parse(localStorage.getItem("cart"));
                                cart[index].qty = cart[index].qty + 1;
                                localStorage.setItem("cart", JSON.stringify(cart));
                                updateCart(true);
                            }
                        }}
                        style={{
                            width: '30px',
                            // borderRadius: '10px',
                            // border: 'none',
                            border: '1px solid rgb(222,222,222)',
                            backgroundColor: 'rgba(246,246,246,0.85)'
                        }}>+
                    </button>
                </div>
            </div>

            <div className={`d-flex justify-content-center align-items-center`}
                style={{ width: '25%' }}>
                <text><b>{(price * qty).toLocaleString('en-US', { style: 'currency', currency: 'LKR' })}</b></text>
            </div>

            <div className={`d-flex justify-content-center align-items-center`}
                style={{ width: '10%' }}>
                <button
                    onClick={() => {
                        
                        const response = confirm("Do you want to remove this artwork from the shopping cart?");
                        
                        if(response){
                            let cart = JSON.parse(localStorage.getItem("cart"));
                            cart.splice(index, 1);
                            localStorage.setItem("cart", JSON.stringify(cart));
                            updateCart(true);
                        }else{
                        }
                    }}
                    style={{
                        fontSize: '12px',
                        height: '30px',
                        border: '1px solid black',
                        backgroundColor: 'transparent'
                    }}>Remove
                </button>
            </div>

        </div>
    );
}