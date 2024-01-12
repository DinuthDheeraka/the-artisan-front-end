import ArtworkCard from "../artwork-card/ArtworkCard.jsx";
import arts from "../../db/Artworks.js";

// eslint-disable-next-line react/prop-types
const ArtworkList = () => {
    return (
        <div className={`d-flex flex-wrap p-1 w-100`} style={{backgroundColor: 'rgb(255,255,255)'}}>
            {
                arts.map((art, key) =>
                    <ArtworkCard
                        key={key}
                        img={art.img}
                        title={art.title}
                        artist={art.artist}
                        size={art.size}
                        price={art.price}
                        material={art.material}
                    />
                )

            }
        </div>
    );
}

export default ArtworkList;