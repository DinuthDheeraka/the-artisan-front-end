import ArtworkList from "../artwork-list/ArtworkList.jsx";
import styles from './artworkListContainer.module.css';
import hamburger from '../../assets/menu (3).png';

const ArtworkListContainer = ({ filter, updateShowFilter}) => {
    return (
        <div className={`d-flex w-100 flex-column gap-3`}>
            <div className={`d-flex justify-content-center`}>
                <div
                    className={`d-flex justify-content-start gap-1 align-items-center ${styles.artworkLisContainerFilter}`}>
                    <img
                        onClick={() => {
                            updateShowFilter(true)
                        }}
                        className={`${styles.artworkLisContainerFilterImg}`} src={hamburger} alt={''} />
                    <small className={`${styles.artworkLisContainerFilterTxt}`}>FILTER</small>
                </div>
            </div>
            <div className={`d-flex align-items-center justify-content-center`}>
                <ArtworkList filter={filter}/>
            </div>
        </div>
    );
}

export default ArtworkListContainer;