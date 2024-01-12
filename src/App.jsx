import './App.css'
import Header from "./components/header/Header.jsx";
import ArtworkListContainer from "./components/filter-artwork-list/ArtworkListContainer.jsx";

function App() {

    return (
        <div style={{backgroundColor: 'rgb(255,255,255)', height: '1000px'}}>
            <Header/>
            <ArtworkListContainer/>
        </div>
    )
}

export default App