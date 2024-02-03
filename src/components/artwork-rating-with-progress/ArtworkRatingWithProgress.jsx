const ArtworkRatingWithProgress = () => {

    return (
        <div style={{paddingLeft: '50px'}} className={`d-flex gap-3 align-items-center`}>
            <div className={`d-flex align-items-center justify-content-center`} style={{gap: '2px'}}>
                <button style={{width: '30px', border: '1px solid #bdbdbd'}}>1</button>
            </div>

            <small style={{fontWeight: 500}}>1</small>
        </div>
    );
}

export default ArtworkRatingWithProgress;