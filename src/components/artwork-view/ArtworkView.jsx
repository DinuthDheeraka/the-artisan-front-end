import ArtworkViewArtist from "../artwork-view-artist/ArtworkViewArtist.jsx";
import ArtworkReview from "../artwork-review/ArtworkReview.jsx";
import ArtworkReviewSummary from "../artwork-view-page-review-summary/ArtworkReviewSummary.jsx";
import { useEffect, useState } from "react";
import axios from 'axios';
import obj from '../../utils/TextConversionUtil.js'
import { Prev } from "react-bootstrap/esm/PageItem.js";
import AddratingForm from "../add-rating-form/AddratingForm.jsx";
import ArtworkReviewSection from "../artwork-reviews-section/ArtworkReviewSection.jsx";
import { BASE_URL } from "../../constants/Routes.js";

const ArtworkView = () => {

    const [qty, setQty] = useState(1)

    const [artwork, setArtwork] = useState({
        id: 0,
        title: '',
        year_of_creation: '',
        artwork_category: '',
        main_image: undefined,
        medium: '',
        price_without_shipping: '',
        height: '',
        width: '',
        thickness: 0,
        weight: 0,
        number_of_copies_for_sale: 0,
        number_of_copies: 1,
        artwork_condition: '',
        can_display_outdoors: false,
        is_framed: false,
        frame_height: 0,
        frame_width: 0,
        frame_thickness: 0,
        ready_to_hang: false,
        can_display_on_walls: false
    })

    const [artist, setArtist] = useState({
        id: '',
        profile_img_url: undefined,
        display_name: '',
        biography: ''
    })

    useEffect(() => {

        // Get current URL
        const currentUrl = window.location.href;
        console.log('Current URL:', currentUrl);

        // You can also get specific parts of the URL like pathname, search, hash, etc.
        const pathname = window.location.pathname;

        const artwork_id = pathname.replace("/artwork/", "");

        // Define the function to fetch artworks from the API
        const fetchArtworks = async () => {
            try {

                console.log(artwork_id);

                // Make an API call using Axios to get artworks
                const response = await axios.get(`${BASE_URL}/artworks/${Number.parseInt(artwork_id)}`);

                const data = response.data;

                console.log(data.selected_artwork);
                console.log(data.artist);

                // Update the state with the fetched artworks
                setArtwork(data.selected_artwork)

                setArtist(data.artist)

            } catch (error) {
                console.error('Error fetching artworks:', error);
            }
        };

        // Call the fetchArtworks function when the component mounts
        fetchArtworks();

    }, []);


    return (
        <div style={{ marginLeft: '250px', marginTop: '70px' }}
            className={`d-flex justify-content-center gap-4 align-items-start flex-column w-75`}>

            <div className={`d-flex flex-column align-items-start w-100`} style={{}}>
                <h4 style={{ color: '#000000', fontWeight: 600 }}>{artwork.title.toUpperCase()} ({artwork.year_of_creation})</h4>
                <small style={{ fontSize: '16px' }}>{artwork.artwork_category} by {artist.display_name}</small>
            </div>

            <div className={`d-flex gap-5 w-100`}>

                <div className={`d-flex justify-content-start w-75`} style={{}}>
                    <img alt={''} className={``} style={{ borderRadius: '2px', objectFit: 'cover', width: '100%' }}
                        src={artwork.main_image} />
                </div>

                <div className={`w-50 flex-column d-flex gap-3`}>
                    <div className={``}>
                        {artwork.artwork_category} - {obj.capitalizeText(artwork.medium)}
                    </div>
                    <div className={``}>
                        {artwork.height} x {artwork.width} cm
                    </div>
                    <div className={``}>
                        <h3 style={{ fontWeight: 'bolder' }}>{artwork.price_without_shipping.toLocaleString('en-US', { style: 'currency', currency: 'LKR' })}</h3>
                    </div>
                    <div className={``}>
                        {artwork.number_of_copies_for_sale} {artwork.number_of_copies_for_sale > 0 ? 'Copies' : 'Copy'} Available
                    </div>
                    <div className={``}>
                        <div className={`d-flex justify-content-start gap-4 align-items-center`}>
                            Quantity
                            <div className={`d-flex gap-3 align-items-center`}>
                                <button
                                    onClick={() => {
                                        if (qty > 1) {
                                            setQty(qty - 1)
                                        }
                                    }}
                                    style={{
                                        border: '1px solid rgb(222,222,222)',
                                        width: '30px',
                                        backgroundColor: 'rgba(246,246,246,0.85)'
                                    }}>-
                                </button>
                                <small>{qty}</small>
                                <button
                                    onClick={() => {
                                        if (qty < artwork.number_of_copies_for_sale) {
                                            setQty(qty + 1)
                                        }
                                    }}
                                    style={{
                                        width: '30px',
                                        border: '1px solid rgb(222,222,222)',
                                        backgroundColor: 'rgba(246,246,246,0.85)'
                                    }}>+
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={``}>
                        <button
                            onClick={() => {

                                let cart = localStorage.getItem("cart")

                                if (cart === null) {
                                    localStorage.setItem("cart", JSON.stringify([]))
                                }

                                let newCart = [...JSON.parse(localStorage.getItem("cart")), {
                                    "item_id": artwork.id,
                                    "artist_id": artist.id,
                                    "item_img": artwork.main_image,
                                    "title": artwork.title,
                                    "artist_name": artist.display_name,
                                    "price": artwork.price_without_shipping,
                                    "qty": qty,
                                    "max_qty": artwork.number_of_copies_for_sale
                                }]

                                localStorage.setItem("cart", JSON.stringify(newCart))

                                console.log(localStorage.getItem("cart"));
                            }}
                            style={{
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

            {/* <div className={`w-100 gap-2 d-flex`}>
                <div className={`border`} style={{ width: '42px', height: '40px' }}>1</div>
                <div className={`border`} style={{ width: '42px', height: '40px' }}>2</div>
                <div className={`border`} style={{ width: '42px', height: '40px' }}>3</div>
                <div className={`border`} style={{ width: '42px', height: '40px' }}>4</div>
            </div> */}

            <div className={` w-100 gap-2 d-flex`}>
                <ul className={`d-flex flex-column gap-1`} style={{ listStyle: 'none', padding: '0', margin: 0 }}>
                    <li>
                        <b>Original Artwork {artwork.number_of_copies === 1 ? '(One Of A Kind)' : ''}</b> {artwork.artwork_category} , {artwork.medium}
                        {/* <b>Original Artwork (One Of A Kind)</b> Sculpture, Clay / Wire / Wood / Paper maché on Metal */}
                    </li>
                    <li>
                        <b>Dimensions</b> Height {artwork.height}cm, Width {artwork.width}cm  {artwork.thickness > 0 ? `, Deapth ${artwork.thickness}cm` : ``} {artwork.weight > 0 ? `/ ${artwork.weight} kg` : ``}
                        {/* <b>Dimensions</b> Height 40cm, Width 25cm, Depth 12.5cm / 4.00 kg */}
                    </li>
                    <li>
                        <b>Artwork's condition</b> The artwork is in {artwork.artwork_condition.toLocaleLowerCase()} condition
                    </li>
                    <li>
                        <b>Fit for outdoor?</b> {artwork.can_display_outdoors ? `Yes, This artwork can be displayed outdoor` : `No, This artwork can not be displayed outdoor`}
                    </li>
                    <li>
                        <b>Framing</b> {artwork.is_framed ? ` This artwork is framed ` : ` This artwork is not framed`}
                    </li>
                    {
                        artwork.is_framed ? <li><b>Frame Dimensions</b> Height {artwork.frame_height}cm, Width {artwork.width}cm, Thickness {artwork.frame_thickness}cm</li> : undefined
                    }
                    <li>
                        <b>Hanging</b> {artwork.ready_to_hang ? `Yes, This artwork is ready to hang` : `No, This artwork is not ready to hang`}
                    </li>
                    <li>
                        <b>Display on walls</b> {artwork.can_display_on_walls ? `Yes, This artwork can be display on walls` : `No, This artwork can not be display on walls`}
                    </li>
                </ul>
            </div>

            <div className={`d-flex flex-column gap-2`}>
                <text style={{ fontSize: '18px' }}><b>Description</b></text>
                {artwork.description}
            </div>

            <div className="w-100 d-flex flex-column gap-2">
                <text style={{ fontSize: '18px' }}><b>Artist</b></text>
                <ArtworkViewArtist
                    id={artist.id}
                    profileImg={artist.profile_img_url}
                    displayName={artist.display_name}
                    biography={artist.biography} />
            </div>

            <ArtworkReviewSection artworkId={artwork.id} />

        </div>
    );
}

export default ArtworkView;