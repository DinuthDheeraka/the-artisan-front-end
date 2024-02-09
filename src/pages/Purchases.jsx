import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import MyPurchases from "../components/purchases/MyPurchases";
import ShoppingCart from "../components/shopping-cart/ShoppingCart"

export default function Purchases(){
    return (
        <div>
            <Header />
            <MyPurchases/>
            <div style={{ marginTop: '405px' }}>
                <Footer />
            </div>
        </div>
    );
}