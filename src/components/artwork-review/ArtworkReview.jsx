const ArtworkReview = ({points,image,comment,name}) => {

    return (
        <div className={`p-3 d-flex gap-4 flex-column`}
             style={{backgroundColor: '#f1f1f1'}}>

            <div className={`d-flex gap-2`}>
                <div className={`d-flex align-items-center justify-content-center`} style={{gap: '2px'}}>
                    <button style={{
                        fontSize: '14px',
                        border: 'none',
                        width: '27px',
                        height: '25px',
                        color: '#ffffff',
                        backgroundColor: '#111111',
                        borderRadius: '100%',
                    }}>{points}
                    </button>
                </div>
                <div className={`d-flex align-items-center gap-4`} style={{fontWeight: 500}}>
                    <text>{name}</text>
                </div>
            </div>

            <div className={``}>
                <text style={{}}>{comment}
                </text>
            </div>
            <div className={`gap-2 d-flex flex-row`}>
                <div className={``}>
                    <img
                        alt={''}
                        // height={'300px'}
                        width={'300px'}
                        style={{borderRadius: '2px'}}
                        src={image}/>
                </div>
            </div>
        </div>
    );
}

export default ArtworkReview;