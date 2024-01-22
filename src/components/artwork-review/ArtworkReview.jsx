import star from "../../assets/star.png";

const ArtworkReview = () => {

    return (
        <div className={`p-3 d-flex gap-4 flex-column`}
             style={{backgroundColor: '#f1f1f1'}}>

            <div className={`d-flex gap-2`}>
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
                <text style={{fontWeight: 500}}>
                    <text>Dinuth Dheeraka</text>
                </text>
            </div>

            <div className={``}>
                <text style={{}}>Well Packed ! Fast Delivery ! Excellent service !
                    Thankyou so much for the great Service ! ❤
                </text>
            </div>
            <div className={`gap-2 d-flex flex-row`}>
                <div className={``}>
                    <img
                        alt={''}
                        height={'300px'}
                        width={'300px'}
                        style={{borderRadius: '2px'}}
                        src={'https://www.artmajeur.com/medias/home/y/u/yuehua-he/artwork/17465872_cixi.jpg'}/>
                </div>
            </div>
        </div>
    );
}

export default ArtworkReview;