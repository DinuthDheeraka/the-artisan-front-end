import Footer from "../components/footer/Footer.jsx";
import BuyerSignInForm from "../components/buyer-sign-in-form/BuyerSignInForm.jsx";

export default function BuyerSignInPage() {
    return (
        <div>

            <div className={`w-100 position-relative`} style={{}}>

                <div className={`${"temp"} justify-content-center gap-5 align-items-center d-flex flex-column`}>

                    <div style={{backgroundColor: 'white'}}

                         className={`d-flex p-3 border justify-content-center align-items-center w-100`}>
                        <h3 style={{
                            fontFamily: 'Berkshire Swash, sans-serif',
                            fontSize: '50px'
                        }}>The Artisan</h3>
                    </div>

                    <BuyerSignInForm/>

                    <div style={{height: '85px'}}>

                    </div>

                </div>

                <Footer/>

            </div>
        </div>
    );
}