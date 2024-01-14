import Progress from "../progress-bar/Progress.jsx";
import star from '../../assets/star.png';

const ArtworkRatingWithProgress = () => {

    return (
        <div style={{paddingLeft: '50px'}} className={`d-flex gap-3`}>
            <div className={`d-flex align-items-center justify-content-center`} style={{gap: '2px'}}>
                <img alt={''}
                     width={'13px'}
                     height={'13px'}
                     src={star}/>
                <img alt={''}
                     width={'13px'}
                     height={'13px'}
                     src={star}/>
                <img alt={''}
                     width={'13px'}
                     height={'13px'}
                     src={star}/>
                <img alt={''}
                     width={'13px'}
                     height={'13px'}
                     src={star}/>
                <img alt={''}
                     width={'13px'}
                     height={'13px'}
                     src={star}/>
            </div>

            <div className={`d-flex align-items-center`}>
                <Progress/>
            </div>

            <small>100</small>
        </div>
    );
}

export default ArtworkRatingWithProgress;