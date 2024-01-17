import img from "../../assets/wp3210388.webp";
import heart from "../../assets/heart (1).png";
import ArtworkListContainer from "../artwork-list-container/ArtworkListContainer.jsx";

const ArtistProfile = () => {

    return (<div className={`d-flex flex-column w-100`}>
        <div className={`w-100 position-relative`}>
            <img
                width={`100%`}
                height={'500px'}
                src={img}
            />
            <img
                width={`150px`}
                height={'150px'}
                style={{borderRadius: '100%', position: "absolute", margin: 'auto', top: '430px', left: '80px'}}
                src={img}
            />
        </div>

        <div className={`d-flex flex-column justify-content-start`} style={{paddingLeft: '250px'}}>
            <text style={{fontSize: '50px', fontWeight: 300}}>Dinuth Dheeraka</text>
            <div className={`d-flex`}>

                <text className={`w-75`}>
                    • Artist (Painting) • Born 1958 •
                </text>

                <div className={`w-25 d-flex align-items-center gap-2`} style={{}}>
                    <img
                        height={'25px'}
                        src={heart}
                    />
                    <small>10K Impressions</small>
                    <small>|</small>
                    <small>300 Reviews</small>
                </div>
            </div>
        </div>

        <div className={`pt-3`} style={{paddingLeft: '250px'}}>
            <text style={{fontSize: '22px', fontWeight: 350}}>
                Biography
            </text>
        </div>

        <div className={`d-flex pt-2 justify-content-start`}
             style={{paddingLeft: '250px', paddingRight: '40px'}}>
            <text className={`w-100`} style={{fontSize: '17px', fontWeight: 200}}>
                Aleksandr Ilichev is a contemporary Turkish painter. Ilichev uses only acrylics on canvas, and
                he believes that the ideas he expresses through his artwork are generated during the actual
                creative process. His art investigates and captures the life and psychology of people.

                Aleksandr Ilichev was born in 1958, in Russia, where he graduated from the painting department
                of the Novoaltaysk Art College in Russia as well as the ceramics department of the Art Institute
                in Krasnoyarsk, Russia. Since 1990 he has been a member of the Russia Union of Artists. Ilichev
                exhibited his works in the USA, Russia, Canada, Switzerland, Spain.
            </text>
        </div>

        <div className={`pt-5`} style={{paddingLeft: '45px'}}>
            <text style={{fontSize: '18px', fontWeight: 400}}>
                All Artworks By Dinuth Dheerka
            </text>
        </div>

        <div className={`pt-3`}>
            <ArtworkListContainer/>
        </div>
    </div>);
}

export default ArtistProfile;