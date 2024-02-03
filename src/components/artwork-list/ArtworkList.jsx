import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArtworkCard from "../artwork-card/ArtworkCard.jsx";
import styles from './artworkList.module.css';
import { BASE_URL } from "../../constants/Routes.js";

const ArtworkList = ({category}) => {

    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        // Define the function to fetch artworks from the API
        const fetchArtworks = async () => {
            try {
                // Make an API call using Axios to get artworks
                const response = await axios.get(`${BASE_URL}/artworks/`,{
                    params: {
                        "category":category
                    }
                });
                const data = response.data;

                console.log(data.selected_artworks);
                // Update the state with the fetched artworks
                setArtworks(data.selected_artworks);
            } catch (error) {
                console.error('Error fetching artworks:', error);
            }
        };

        // Call the fetchArtworks function when the component mounts
        fetchArtworks();
        
    }, [category]);

    return (
        <div className={`d-flex flex-wrap ${styles.artworkList}`}>
            {
                artworks.map((art, key) =>
                    <ArtworkCard
                        key={key}
                        id={art.id}
                        img={art.main_image}
                        title={art.title}
                        artist={art.artist_name}
                        size={art.size}
                        price={art.price}
                        category={art.category}
                        medium={art.medium}
                        height={art.height}
                        width={art.width}
                        material={art.material}
                    />
                )
            }
        </div>
    );
}

export default ArtworkList;
