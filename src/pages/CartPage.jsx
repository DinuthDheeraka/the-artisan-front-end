import Header from "../components/header/Header.jsx";
import ShoppingCart from "../components/shopping-cart/ShoppingCart.jsx";
import Footer from "../components/footer/Footer.jsx";

export default function CartPage() {

    return (
        <div>
            <Header/>
            <ShoppingCart/>
            <div style={{marginTop:'77px'}}>
                <Footer />
            </div>
        </div>
    );
}