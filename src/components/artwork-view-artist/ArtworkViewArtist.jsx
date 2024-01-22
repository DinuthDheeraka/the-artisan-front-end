import styles from './artworkArtistView.module.css';

const ArtworkViewArtist = () => {

    return (
        <div className={`d-flex gap-2 w-100 flex-column`} style={{backgroundColor: '#f1f1f1', padding: '1'}}>

            <div className={`d-flex  gap-3 align-items-center justify-content-start`}>

                <div className={`p-3`}>
                    <img
                        alt={''}
                        className={`${styles.artistImage}`}
                        src={'https://www.artmajeur.com/medias/profile_thumb/c/y/cynthia-saenz-sancho/profile/profile_cynthia-saenz-5.jpg'}/>
                </div>

                <div className={``}>
                    <text style={{fontWeight:500}}>Cynthia Saenz Sancho</text>
                </div>

            </div>

            <div style={{paddingLeft: '18px',paddingBottom:'18px',paddingRight:'18px'}}>
                Cynthia Saenz Sancho is a contemporary Costa Rican artist, whose artistic journey has been characterized
                by a series of deliberate and enriching steps that have shaped her distinctive style.
            </div>
        </div>);
}

export default ArtworkViewArtist;