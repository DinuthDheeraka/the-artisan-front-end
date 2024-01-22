import './App.css'
import Header from "./components/header/Header.jsx";
import ArtworkAddPage from "./components/artwork-add/ArtworkAddPage.jsx";


function App() {

    return (
        <div style={{backgroundColor: 'rgb(255,255,255)', height: '1000px'}}>
            <Header/>
            {/*<div className={`w-100 position-relative`} style={{}}>*/}

            {/*    <div className={`${"temp"} justify-content-center gap-5 align-items-center d-flex flex-column`}>*/}

            {/*        <div style={{backgroundColor: 'white'}}*/}
            {/*             className={`d-flex p-3 border justify-content-center align-items-center w-100`}>*/}
            {/*            <h3 style={{*/}
            {/*                fontFamily: 'Berkshire Swash, sans-serif',*/}
            {/*                fontSize: '50px'*/}
            {/*            }}>The Artisan</h3>*/}
            {/*        </div>*/}

            {/*        <BuyerSignInForm/>*/}
            {/*        /!*<ArtistProfile/>

            {/*        <div style={{height: '85px'}}>*/}

            {/*        </div>*/}

            {/*    </div>*/}

            {/*</div>*/}
            {/*<ArtworkListContainer/>*/}
            {/*<ArtworkView/>*/}
            <ArtworkAddPage/>
        </div>
    )
}

export default App