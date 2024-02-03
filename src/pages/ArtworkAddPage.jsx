import Header from "../components/header/Header.jsx";
import ArtworkAddForm from "../components/artwork-add/ArtworkAddForm.jsx";
import Footer from "../components/footer/Footer.jsx";

export default function ArtworkAddPage() {
    return (
        <div className={``} style={{backgroundColor: '#ffffff'}}>
            <Header/>
            {/*<div style={{backgroundColor: 'black'}}>*/}
            <ArtworkAddForm/>
            {/*</div>*/}
            <Footer/>
        </div>);
}