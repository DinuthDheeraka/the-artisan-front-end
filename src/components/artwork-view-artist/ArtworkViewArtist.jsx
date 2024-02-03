import { useNavigate } from 'react-router-dom';
import styles from './artworkArtistView.module.css';

export default function ArtworkViewArtist  ({id,profileImg, displayName, biography}) {
    
    const navigate = useNavigate();

    return (
        <div className={`d-flex gap-2 w-100 flex-column`} style={{ backgroundColor: '#f1f1f1', padding: '1' }}>

            <div className={`d-flex  gap-3 align-items-center justify-content-start`}>

                <div className={`p-3`}>
                    <img
                        alt={''}
                        onClick={()=>{
                            navigate(`/artist/profile/${id}`);
                        }}
                        className={`${styles.artistImage}`}
                        src={profileImg} />
                </div>

                <div className={``}>
                    <text style={{ fontWeight: 500 }}>
                        <b>{displayName}</b></text>
                </div>

            </div>

            <div style={{ paddingLeft: '18px', paddingBottom: '18px', paddingRight: '18px' }}>
                <details>
                    <summary>Read More</summary>
                    <p className='mt-2'>{biography}</p>
                </details>
            </div>
        </div>);
}