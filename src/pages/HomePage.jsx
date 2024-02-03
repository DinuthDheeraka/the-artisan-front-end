import Header from "../components/header/Header.jsx";
import ArtworkListContainer from "../components/artwork-list-container/ArtworkListContainer.jsx";
import Footer from "../components/footer/Footer.jsx";
import { useState } from "react";
import ArtworkMainFilter from "../components/artwork-filter/ArtworkMainFilter.jsx";

export default function HomePage() {

    const [category,setCategory] = useState("");
    const [isShowFilter, setIsShowFilter] = useState(true);

    function updateCategory(category){
        setCategory(category)
    }

    function setShowFilter(isShow){
        setIsShowFilter(isShow)
    }

    function setFilterMargin(){
        return isShowFilter? '0px':'-373px';
    }

    
    return (
        <div style={{position:'relative'}}>
            <div 
            className={`w-25`} 
            style={{position:'fixed',margin:'auto',marginLeft:setFilterMargin()}}>
                <ArtworkMainFilter updateShowFilter={setShowFilter}/>
            </div>
            <Header updateCategory={updateCategory}/>
            <div className={`my-4`}>
                <ArtworkListContainer category={category} updateShowFilter={setShowFilter}/>
            </div>
            <div style={{}}>
                <Footer />
            </div>
        </div>
    );
}