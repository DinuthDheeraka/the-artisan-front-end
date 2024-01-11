import './App.css'
import Header from "./components/header/Header.jsx";
import ArtworkCard from "./components/artwork-card/ArtworkCard.jsx";

function App() {

    return (
        <>
            <Header/>
            <div className={`d-flex w-75`}>
                <ArtworkCard
                    img={'https://www.artmajeur.com/medias/mini/m/a/massimoiacovelli/artwork/17463439_20231210-121356.jpg'}
                    title={'Atlas'}
                    artist={'Jesús Barbosa '}
                    size={'102x98x100 cm'}
                    material={'Sculpture - Wood'}
                    price={'€21,754.77'}
                />
                <ArtworkCard
                    img={'https://www.artmajeur.com/medias/mini/j/e/jesus-barbosa/artwork/17339089_img-20230530-203419.jpg'}
                    title={'Atlas'}
                    artist={'Jesús Barbosa '}
                    size={'102x98x100 cm'}
                    material={'Sculpture - Wood'}
                    price={'€21,754.77'}
                />
            </div>
        </>
    )
}

export default App
