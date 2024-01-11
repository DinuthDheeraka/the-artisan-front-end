import styles from './artworkCard.module.css';

// eslint-disable-next-line react/prop-types
const ArtworkCard = ({img, artist, title, material, size, price}) => {

    return (
        <ul className={`d-flex p-2 flex-column ${styles.artworkCard}`}>
            <li>
                <img
                    className={styles.artworkCardImage}
                    alt={'img'}
                    src={img}/>
            </li>
            <li className={`${styles.artworkCardArtist}`}>{artist}</li>
            <li className={`${styles.artworkCardTitle}`}>{title}</li>
            <li className={`${styles.artworkCardMaterial}`}> {material} | {size}</li>
            <li className={`${styles.artworkCardPrice}`}>{price}</li>
        </ul>
    );
}

export default ArtworkCard;