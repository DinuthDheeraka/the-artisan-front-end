import ArtworkCard from "../artwork-card/ArtworkCard.jsx";
import styles from './artworkList.module.css';
import arts from "../../db/Artworks.js";

// eslint-disable-next-line react/prop-types
const ArtworkList = () => {
    return (
        <div className={`d-flex flex-wrap ${styles.artworkList}`}>
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