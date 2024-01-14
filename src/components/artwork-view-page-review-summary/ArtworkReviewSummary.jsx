import star from '../../assets/star.png';

const ArtworkReviewSummary = () => {

    return (
        <div className={`d-flex gap-1 flex-column`}>
            <div className={`d-flex p-0 gap-2`}>
                <text style={{padding:0,margin:0,fontSize: '30px', fontWeight: 500}}>3.9</text>
            </div>
            <div className={`d-flex`} style={{gap:'2px'}}>
                <img alt={''}
                     width={'20px'}
                     height={'20px'}
                     src={star}/>
                <img alt={''}
                     width={'20px'}
                     height={'20px'}
                     src={star}/>
                <img alt={''}
                     width={'20px'}
                     height={'20px'}
                     src={star}/>
                <img alt={''}
                     width={'20px'}
                     height={'20px'}
                     src={star}/>
                <img alt={''}
                     width={'20px'}
                     height={'20px'}
                     src={star}/>
            </div>
            <div style={{marginTop: '10px'}}>
                <text>180 Ratings</text>
            </div>
        </div>
    );
}

export default ArtworkReviewSummary;