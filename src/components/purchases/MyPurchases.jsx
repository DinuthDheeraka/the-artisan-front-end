import { useEffect, useState } from "react";
import CartItem from "../cart-item/CartItem";
import { Prev } from "react-bootstrap/esm/PageItem";
import CartPaymentSection from "../cart-payment-section/CartPaymentSection";
import PurchaseItem from "../purchase-item/PurchaseItem";
import axios from "axios";
import { BASE_URL } from "../../constants/Routes.js";

const MyPurchases = () => {

    const [isCartUpdated, setIsCartUpdated] = useState(false);

    const [orders, setOrders] = useState([]);

    // if (localStorage.getItem("cart") !== null) {
    //     orders = JSON.parse(localStorage.getItem("cart"))
    // }

    function updateCart(isUpdated) {
        setIsCartUpdated((prev) => {
            return !prev;
        })
    }

    useEffect(() => {

        const buyer = JSON.parse(localStorage.getItem("user"))

        // Define the function to fetch artworks from the API
        const fetchOrders = async () => {
            try {

                // Make an API call using Axios to get artworks
                const response = await axios.get(`${BASE_URL}/orders/buyer/${Number.parseInt(buyer.id)}`);

                const data = response.data;

                console.log(data);

                setOrders(data);

            } catch (error) {
                console.error('Error fetching artworks:', error);
            }
        };

        // Call the fetchArtworks function when the component mounts
        fetchOrders();

    }, []);

    return (
        <div className={`d-flex p-4 gap-5 w-100`} style={{ marginTop: '20px', marginLeft: '20px' }}>

            <div className={`d-flex flex-column gap-3`} style={{ width: '97%' }}>

                <div className={`pb-3`} style={{ borderBottom: '1px solid rgb(222,222,222)' }}>
                    <h5 style={{ fontWeight: 500, padding: 0, margin: 0 }}>{orders.length === 0 ? "You didn't purchase any artworks yet" : 'My Purchases'}</h5>
                </div>

                {/*items div*/}
                <div className={`d-flex flex-column`}>

                    {
                        orders.map((item, index) => {
                            return <PurchaseItem
                                index={index}
                                artworkId={item.artwork_id}
                                imgUrl={item.artwork_img}
                                title={item.artwork_name}
                                artistName={item.artist_name}
                                price={item.price}
                                qty={item.qty}
                                date={item.date}
                                updateCart={updateCart}
                            />
                        })
                    }

                </div>

            </div>
        </div>
    );
}

export default MyPurchases;