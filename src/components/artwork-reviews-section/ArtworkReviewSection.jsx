import { useEffect, useState } from "react";
import AddratingForm from "../add-rating-form/AddratingForm";
import ArtworkReview from "../artwork-review/ArtworkReview";
import ArtworkReviewSummary from "../artwork-view-page-review-summary/ArtworkReviewSummary";
import axios from "axios";
import { BASE_URL } from "../../constants/Routes.js";

export default function ArtworkReviewSection({artworkId}){

    const [reviews,setReviews] = useState([]);

    // You can also get specific parts of the URL like pathname, search, hash, etc.
    const pathname = window.location.pathname;

    const artwork_id = pathname.replace("/artwork/", "");

    useEffect(() => {

        // Define the function to fetch artworks from the API
        const fetchArtworkReviews = async () => {
            try {

                // Make an API call using Axios to get artworks
                const response = await axios.get(`${BASE_URL}/artworks/reviews/${Number.parseInt(artwork_id)}`);

                const data = response.data;

                console.log(data);

                // Update the state with the fetched artwork reviews
                setReviews(data.reviews)

            } catch (error) {
                console.error('Error fetching artworks:', error);
            }
        };

        // Call the fetchArtworks function when the component mounts
        fetchArtworkReviews();

    }, []);

    function setIsReviewUpdated(){
        setIsUpdateReviews((prev)=>{
            return !prev;
        })
    }

    return (
    <div className={`w-100 d-flex flex-column gap-2`}>

        <div className={``} style={{ paddingBottom: '5px' }}>
            <text style={{ fontSize: '18px' }}><b>Rating and Reviews ({reviews.length})</b></text>
        </div>

        <div className={`d-flex flex-row align-items-center justify-content-start gap-5 p-0`}
            style={{ marginBottom: '10px' }}>

            <ArtworkReviewSummary />

        </div>

        <div className={`d-flex flex-column gap-2`}>
            <AddratingForm artworkId={artworkId}/>
            {
                reviews.map((review,index)=>{
                    console.log(review);
                    return <ArtworkReview 
                            key={index}
                            points={review.review_points}
                            name={review.display_name}
                            comment={review.review_comment}
                            image={review.review_img_url}
                        />
                }) 
            }

        </div>

    </div>);
}