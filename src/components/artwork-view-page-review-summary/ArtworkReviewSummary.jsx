import star from '../../assets/star.png';

const ArtworkReviewSummary = () => {

    return (
        <div className={`d-flex gap-1 flex-column`}>
            <div className={`d-flex align-items-center justify-content-center p-0 gap-2`}>
                <text style={{padding:0,margin:0,fontSize: '30px', fontWeight: 500}}>3.9</text>
                <div className={`d-flex justify-content-start px-2 align-items-center`}
                     style={{borderBottomRightRadius:'20px', backgroundColor:'#ffc400',color:'white',width:'140px',height:'23px'}}>
                    <text style={{fontWeight:500,fontSize:'15px'}}>Excellent</text>
                </div>
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
                <text style={{fontWeight:500}}>180 Ratings</text>
            </div>
        </div>
    );
}

export default ArtworkReviewSummary;