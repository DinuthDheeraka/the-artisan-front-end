import Header from "../components/header/Header.jsx";
import ArtworkView from "../components/artwork-view/ArtworkView.jsx";
import Footer from "../components/footer/Footer.jsx";

export default function ItemViewPage() {
    return (
        <div>
            <Header/>
            <ArtworkView/>
            <div className={`mt-4`}>
                <Footer/>
            </div>
        </div>)

}