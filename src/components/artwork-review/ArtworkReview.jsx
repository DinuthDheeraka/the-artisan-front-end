import star from "../../assets/star.png";

const ArtworkReview = () => {

    return (
        <div className={`p-2 d-flex gap-2 flex-column`}
             style={{backgroundColor: 'rgb(255,255,255)',borderBottom:'1px solid #dcdcdc'}}>
            <div className={`d-flex gap-2`}>
                <div className={`d-flex align-items-center justify-content-center`} style={{gap: '2px'}}>
                    <img alt={''}
                         width={'10px'}
                         height={'10px'}
                         src={star}/>
                    <img alt={''}
                         width={'10px'}
                         height={'10px'}
                         src={star}/>
                    <img alt={''}
                         width={'10px'}
                         height={'10px'}
                         src={star}/>
                    <img alt={''}
                         width={'10px'}
                         height={'10px'}
                         src={star}/>
                    <img alt={''}
                         width={'10px'}
                         height={'10px'}
                         src={star}/>
                </div>
                <small style={{color: '#626262'}}>Dinuth Dheeraka</small>
            </div>
            <div className={``}>
                <small style={{fontWeight: 300}}>Well Packed ! Fast Delivery ! Excellent service ! 😍😍👍👍
                    Thankyou so much for the great Service ! ❤
                </small>
            </div>
            <div className={`gap-2 d-flex flex-row`}>
                <div>
                    <img
                        alt={''}
                        height={'100px'}
                        width={'100px'}
                        style={{borderRadius: '5px'}}
                        src={'https://www.artmajeur.com/medias/home/y/u/yuehua-he/artwork/17465872_cixi.jpg'}/>
                </div>
            </div>
        </div>
    );
}

export default ArtworkReview;