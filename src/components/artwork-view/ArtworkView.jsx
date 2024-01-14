import ArtworkViewArtist from "../artwork-view-artist/ArtworkViewArtist.jsx";
import ArtworkReview from "../artwork-review/ArtworkReview.jsx";
import ArtworkRatingWithProgress from "../artwork-rating-with-progress/ArtworkRatingWithProgress.jsx";
import ArtworkReviewSummary from "../artwork-view-page-review-summary/ArtworkReviewSummary.jsx";

const ArtworkView = () => {
    return (
        <div style={{marginLeft: '250px', marginTop: '70px'}}
             className={`d-flex justify-content-center gap-4 align-items-start flex-column w-75`}>

            <div className={`d-flex flex-column align-items-start w-100`} style={{}}>
                <h4 style={{color: '#000000', fontWeight: 600}}>ECHOES OF HOME (2023)</h4>
                <small style={{fontSize: '16px'}}>Sculpture by Karen Axikyan</small>
            </div>

            <div className={`d-flex gap-5 w-100`}>

                <div className={`d-flex justify-content-start w-75`} style={{}}>
                    <img alt={''} className={``} style={{objectFit: 'cover', width: '100%'}}
                         src={'https://colomboartgallery.b-cdn.net/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/07/45.lalith.jpg.webp'}/>
                </div>

                <div className={`w-50 flex-column d-flex gap-3`}>
                    <div className={``}>
                        Sculpture - Wire
                    </div>
                    <div className={``}>
                        40x12x21 cm
                    </div>
                    <div className={``}>
                        <h3 style={{fontWeight: 'bolder'}}>€1,393.7</h3>
                    </div>
                    <div className={``}>
                        1 Item Available
                    </div>
                    <div className={``}>
                        <div className={`d-flex justify-content-start gap-4 align-items-center`}>
                            Quantity
                            <div className={`d-flex gap-3 align-items-center`}>
                                <button style={{
                                    border: '1px solid rgb(222,222,222)',
                                    width: '30px',
                                    backgroundColor: 'rgba(246,246,246,0.85)'
                                }}>-
                                </button>
                                <small>1</small>
                                <button style={{
                                    width: '30px',
                                    border: '1px solid rgb(222,222,222)',
                                    backgroundColor: 'rgba(246,246,246,0.85)'
                                }}>+
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={``}>
                        <button style={{
                            color: '#ffffff',
                            width: '75%',
                            height: '50px',
                            backgroundColor: '#171717',
                            border: 'none'
                        }}>Add to cart
                        </button>
                    </div>
                </div>
            </div>

            <div className={`w-100 gap-2 d-flex`}>
                <div className={`border`} style={{width: '42px', height: '40px'}}>1</div>
                <div className={`border`} style={{width: '42px', height: '40px'}}>2</div>
                <div className={`border`} style={{width: '42px', height: '40px'}}>3</div>
                <div className={`border`} style={{width: '42px', height: '40px'}}>4</div>
            </div>

            <div className={` w-100 gap-2 d-flex`}>
                <ul className={`d-flex flex-column gap-1`} style={{listStyle: 'none', padding: '0', margin: 0}}>
                    <li>
                        <b>Original Artwork (One Of A Kind)</b> Sculpture, Clay / Wire / Wood / Paper maché on Metal
                    </li>
                    <li>
                        <b>Dimensions</b> Height 40cm, Width 25cm, Depth 12.5cm / 4.00 kg
                    </li>
                    <li>
                        <b>Artwork's condition</b> The artwork is in perfect condition
                    </li>
                    <li>
                        <b>Fit for outdoor?</b> No, This artwork can not be displayed outdoor
                    </li>
                </ul>
            </div>

            <div className={``}>
                Escultura elaborada en cerámica secado al aire, (no se hornea)
                Pieza policromada en tonos azules, su cuerpo esta realizado en alambre.
                La pieza esta colocada sobre base de madera reutilizada de pochote.

                Escultura elaborada en cerámica secado al aire, (no se hornea)
                Pieza policromada en tonos azules, su cuerpo esta realizado en alambre.
                La pieza esta colocada sobre base de madera reutilizada de pochote.

                Escultura elaborada en cerámica secado al aire, (no se hornea)
                Pieza policromada en tonos azules, su cuerpo esta realizado en alambre.
                La pieza esta colocada sobre base de madera reutilizada de pochote.
            </div>

            <ArtworkViewArtist/>

            <div className={`w-100 d-flex flex-column`}>

                <div className={``} style={{paddingBottom: '5px'}}>
                    <text style={{color: '#151515', fontSize: '18px', fontWeight: 500}}>Ratings & Reviews</text>
                </div>

                <div className={`d-flex flex-row gap-5 p-2`} style={{borderBottom: '1px solid #dcdcdc'}}>

                    <ArtworkReviewSummary/>

                    <div className={`d-flex align-items-center justify-content-center flex-column`}>
                        <ArtworkRatingWithProgress/>
                        <ArtworkRatingWithProgress/>
                        <ArtworkRatingWithProgress/>
                        <ArtworkRatingWithProgress/>
                        <ArtworkRatingWithProgress/>
                    </div>

                </div>

                <div className={`d-flex flex-column`}>
                    <ArtworkReview/>
                    <ArtworkReview/>
                </div>
            </div>
        </div>
    );
}

export default ArtworkView;