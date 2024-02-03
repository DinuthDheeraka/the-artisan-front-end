import img from "../../assets/wp3210388.webp";
import heart from "../../assets/heart (1).png";
import ArtworkListContainer from "../artwork-list-container/ArtworkListContainer.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/Routes.js";

const ArtistProfile = () => {

    const [artist, setArtist] = useState({
        "id": 0,
        "display_name": "",
        "profile_img_url": "",
        "artist_category": "",
        "date_of_birth": "",
        "profile_background_img_url": "",
        "biography": ""
    })

    useEffect(() => {

        // Get current URL
        const currentUrl = window.location.href;
        console.log('Current URL:', currentUrl);

        // You can also get specific parts of the URL like pathname, search, hash, etc.
        const pathname = window.location.pathname;

        const artist_id = pathname.replace("/artist/profile/", "");

        // Define the function to fetch artworks from the API
        const fetchArtist = async () => {
            try {

                console.log(artist_id);

                // Make an API call using Axios to get artworks
                const response = await axios.get(`${BASE_URL}/artists/${Number.parseInt(artist_id)}`);

                const data = response.data;

                console.log(data.artist);

                setArtist(data.artist)

            } catch (error) {
                console.error('Error fetching artworks:', error);
            }
        };

        // Call the fetchArtworks function when the component mounts
        fetchArtist();

    }, []);

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
                style={{ objectFit:'cover',borderRadius: '100%', position: "absolute", margin: 'auto', top: '430px', left: '80px' }}
                src={artist.profile_img_url}
            />
        </div>

        <div className={`d-flex flex-column justify-content-start`} style={{ paddingLeft: '250px' }}>
            <text style={{ fontSize: '50px', fontWeight: 300 }}>{artist.display_name}</text>
            <div className={`d-flex`}>

                <text className={`w-75`}>
                    • Artist ({artist.artist_category}) • Born {artist.date_of_birth.substring(0,4)} •
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

        <div className={`pt-3`} style={{ paddingLeft: '250px' }}>
            <text style={{ fontSize: '22px', fontWeight: 350 }}>
                Biography
            </text>
        </div>

        <div className={`d-flex pt-2 justify-content-start`}
            style={{ paddingLeft: '250px', paddingRight: '40px' }}>
            <text className={`w-100`} style={{ fontSize: '17px', fontWeight: 200 }}>
                {artist.biography}
            </text>
        </div>

        <div className={`pt-5`} style={{ paddingLeft: '45px' }}>
            <text style={{ fontSize: '18px', fontWeight: 400 }}>
                All Artworks By Dinuth Dheerka
            </text>
        </div>

        <div className={`pt-3`}>
            <ArtworkListContainer />
        </div>
    </div>);
}

export default ArtistProfile;