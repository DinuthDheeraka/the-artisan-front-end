import UserSignInForm from "../components/sign-in/UserSignInForm.jsx";
import Footer from "../components/footer/Footer.jsx";

export default function SignInPage() {
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

                    <UserSignInForm/>
                    {/*<BuyerSignInPage/>*/}

                    <div style={{height: '85px'}}>

                    </div>

                </div>

                <Footer/>

            </div>
        </div>
    );
}