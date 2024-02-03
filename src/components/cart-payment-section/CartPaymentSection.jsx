import axios from "axios";

export default function CartPaymentSection({ cart,updateCart }) {

    const payment = {
        subTotal: 0,
        tax: 20
    }

    if (cart.length > 0) {
        for (const item of cart) {
            console.log("cart");
            console.log(item)
            payment.subTotal += (item.qty * item.price)
        }
    }

    function handleCheckout() {

        const checkout = async () => {
            try {
                // Call your API here using Axios
                const response = await axios.post("http://127.0.0.1:8000/api/v1/orders",
                    {
                        cart: cart,
                        buyer_id:JSON.parse(localStorage.getItem("user")).id
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });

                if (response.data.success) {
                    localStorage.setItem("cart", JSON.stringify([]));
                    updateCart(true);
                    alert(response.data.message)
                } else {
                    alert(response.data.message)
                }

            } catch (error) {
                console.error("Error:", error.message);
            }
        };

        checkout();
    }

    return (
        <div style={{ width: '30%', paddingTop: '37px' }}
            className={`gap-4 d-flex justify-content-start align-items-center flex-column`}>

            <div className={`p-5 d-flex flex-column w-100`}
                style={{ border: '1px solid rgb(222,222,222)', backgroundColor: 'rgba(246,246,246,0.85)' }}>

                <div style={{ borderBottom: '1px solid rgb(222,222,222)' }}
                    className={`pb-4 w-100 d-flex flex-row`}>
                    <div className={`w-50`} style={{ color: '#343434', fontWeight: 500 }}>Subtotal</div>
                    <div style={{ fontWeight: 500 }} className={`d-flex justify-content-end w-50`}>
                        <text>{(payment.subTotal).toLocaleString('en-US', { style: 'currency', currency: 'LKR' })}</text>
                    </div>
                </div>

                <div style={{ borderBottom: '1px solid rgb(222,222,222)' }}
                    className={`pb-4 pt-4 w-100 d-flex flex-row`}>
                    <div className={`w-50`} style={{ color: '#343434', fontWeight: 500 }}>Tax</div>
                    <div style={{ fontWeight: 500 }} className={`d-flex justify-content-end w-50`}>
                        <text>{(payment.tax).toLocaleString('en-US', { style: 'currency', currency: 'LKR' })}</text>
                    </div>
                </div>

                <div style={{}} className={`pb-2 pt-4 w-100 align-items-center d-flex flex-row`}>
                    <div className={`w-50`} style={{ fontWeight: 500 }}>
                        <text style={{fontWeight:550}}>Total cost</text>
                    </div>
                    <div style={{ fontWeight: 500 }}
                        className={`d-flex justify-content-end w-50`}>
                        <text><b>{(payment.subTotal + payment.tax).toLocaleString('en-US', { style: 'currency', currency: 'LKR' })}</b></text>
                    </div>
                </div>

            </div>

            {/*button*/}
            <div className={`w-100 d-flex justify-content-center align-items-center`}>
                <button
                    onClick={handleCheckout}
                    style={{
                        border: 'none',
                        height: '50px',
                        width: '100%',
                        backgroundColor: '#111111',
                        color: 'white'
                    }}>Checkout
                </button>
            </div>

        </div>
    );
}