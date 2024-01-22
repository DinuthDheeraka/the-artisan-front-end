import star from '../../assets/star.png';

const ArtworkRatingWithProgress = () => {

    return (
        <div style={{paddingLeft: '50px'}} className={`d-flex gap-3`}>
            <div className={`d-flex align-items-center justify-content-center`} style={{gap: '2px'}}>
                <img alt={''}
                     width={'11px'}
                     height={'11px'}
                     src={star}/>
                <img alt={''}
                     width={'11px'}
                     height={'11px'}
                     src={star}/>
                <img alt={''}
                     width={'11px'}
                     height={'11px'}
                     src={star}/>
                <img alt={''}
                     width={'11px'}
                     height={'11px'}
                     src={star}/>
                <img alt={''}
                     width={'11px'}
                     height={'11px'}
                     src={star}/>
            </div>

            <small style={{fontWeight:500}}>1</small>
        </div>
    );
}

export default ArtworkRatingWithProgress;