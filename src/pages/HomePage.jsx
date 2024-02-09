import Header from "../components/header/Header.jsx";
import ArtworkListContainer from "../components/artwork-list-container/ArtworkListContainer.jsx";
import Footer from "../components/footer/Footer.jsx";
import { useState } from "react";
import ArtworkMainFilter from "../components/artwork-filter/ArtworkMainFilter.jsx";
import UserSideBar from "../components/user-side-bar/UserSideBar.jsx";

export default function HomePage() {

    const [filter, setFilter] = useState({
        category:""
    })

    const [isShowFilter, setIsShowFilter] = useState(false);

    function updateCategory(category) {
        setFilter({
            category:category
        })
    }

    function updateSearch(search) {
        setFilter({
            search: search
        })
    }

    function updateImage(image){
        setFilter({
            img: image
        })
    }

    function updateFilter(filter){
        setFilter({
            ...filter
        });
    }

    console.log("header")
    console.log(filter);

    function setShowFilter(isShow) {
        setIsShowFilter(isShow)
    }

    function setFilterMargin() {
        return isShowFilter ? '0px' : '-373px';
    }

    return (
        <div style={{ position: 'relative'}}>
            <div
                className={`w-25`}
                style={{ position: 'fixed', margin: 'auto', marginLeft: setFilterMargin() }}>
                <ArtworkMainFilter updateFilter={updateFilter} updateShowFilter={setShowFilter} />
            </div>

            <Header updateImage={updateImage} updateSearch={updateSearch} updateCategory={updateCategory} />

            <div className={`my-4`}>
                <ArtworkListContainer filter={filter} updateShowFilter={setShowFilter} />
            </div>
            <div style={{}}>
                <Footer />
            </div>
        </div>
    );
}