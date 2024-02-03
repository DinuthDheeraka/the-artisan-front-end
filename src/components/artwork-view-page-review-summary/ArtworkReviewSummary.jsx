import star from '../../assets/star.png';

const ArtworkReviewSummary = () => {

    return (
        <div className={`border d-flex gap-2 flex-column p-2`} style={{backgroundColor:'#ffffff'}}>
            <div className={`d-flex align-items-center justify-content-start p-0 gap-2`}>
                <text style={{padding: 0, margin: 0, fontSize: '30px', fontWeight: 500}}>3.9</text>
                <text>Average</text>
            </div>
            <div className={`d-flex align-items-center justify-content-start p-0 gap-2`}>
                <text style={{ padding: 0, margin: 0, fontSize: '30px', fontWeight: 500 }}>180</text>
                <text>Rating Points</text>
            </div>
            <div className={`d-flex justify-content-center px-2 align-items-center`}
                 style={{
                    //  borderTopRightRadius: '40px',
                     textAlign: 'center',
                     backgroundColor: '#ffc400',
                     color: 'white',
                     width: '200px',
                     height: '30px',
                     borderRadius: "0px"
                 }}>
                <text style={{fontWeight: 500, fontSize: '15px'}}>Excellent</text>
            </div>
        </div>
    );
}

export default ArtworkReviewSummary;





{/* <div className={`d-flex align-items-center justify-content-center`} style={{ gap: '4px' }}>
    <img alt={''}
        width={'20px'}
        height={'20px'}
        src={star} />
    <img alt={''}
        width={'20px'}
        height={'20px'}
        src={star} />
    <img alt={''}
        width={'20px'}
        height={'20px'}
        src={star} />
    <img alt={''}
        width={'20px'}
        height={'20px'}
        src={star} />
    <img alt={''}
        width={'20px'}
        height={'20px'}
        src={star} />
</div> */}