import { useNavigate } from 'react-router-dom';
import styles from './artworkCard.module.css';

// eslint-disable-next-line react/prop-types
const ArtworkCard = ({ id,img, artist, title , price, category, medium, height, width }) => {

    const navigate = useNavigate();

    return (
        <ul className={`d-flex p-2 flex-column ${styles.artworkCard}`}>
            <li>
                <img
                    onClick={()=>{
                        navigate(`/artwork/${id}`)
                    }}
                    className={styles.artworkCardImage}
                    alt={'img'}
                    src={img} />
            </li>
            <li className={`${styles.artworkCardArtist}`}>{artist}</li>
            <li className={`${styles.artworkCardTitle}`}>{title}</li>
            <li className={`${styles.artworkCardMaterial}`}> {category} - {medium} | {height}x{width} cm</li>
            <li className={`${styles.artworkCardPrice}`}>{price.toLocaleString('en-US', { style: 'currency', currency: 'LKR' })}</li>
        </ul>
    );
}

export default ArtworkCard;