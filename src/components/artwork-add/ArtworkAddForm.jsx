import axios from "axios";
import { useRef, useState } from "react";
import { Form, Toast } from "react-bootstrap";
import { BASE_URL } from "../../constants/Routes.js";
import img from '../../assets/white-image.png';

const ArtworkAddForm = () => {

    const imgRef = useRef(null);

    const [title, setTitle] = useState("");
    const [yearOfCreation, setYearOfCreation] = useState("");
    const [category, setCategory] = useState("");
    const [medium, setMedium] = useState("");
    const [supportSurface, setSupportSurface] = useState("");
    const [numOfCopies, setNumOfCopies] = useState("");
    const [numOfCopiesForSale, setNumOfCopiesForSale] = useState("");
    const [displayOutdoor, setDisplayOutdoor] = useState(false);
    const [displayOnWall, setDisplayOnWall] = useState(false);
    const [readyToHang, setReadyToHang] = useState(false);
    const [framed, setFramed] = useState(false);
    const [frameHeight, setFrameHeight] = useState("");
    const [frameWidth, setFrameWidth] = useState("");
    const [frameThickness, setFrameThickness] = useState("");
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    const [thickness, setThickness] = useState("");
    const [weight, setWeight] = useState("");
    const [salesStatus, setSalesStatus] = useState("");
    const [priceWithoutShipping, setPriceWithoutShipping] = useState("");
    const [discountPrice, setDiscountPrice] = useState("");
    const [condition, setCondition] = useState("");
    const [description, setDescription] = useState("");
    const [style, setStyle] = useState("");
    const [keywords, setKeywords] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    // Event handlers for input changes
    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleYearOfCreationChange = (e) => setYearOfCreation(e.target.value);
    const handleCategoryChange = (e) => setCategory(e.target.value);
    const handleMediumChange = (e) => setMedium(e.target.value);
    const handleSupportSurfaceChange = (e) => setSupportSurface(e.target.value);
    const handleNumOfCopiesChange = (e) => setNumOfCopies(e.target.value);
    const handleNumOfCopiesForSaleChange = (e) => setNumOfCopiesForSale(e.target.value);
    const handleDisplayOutdoorChange = () => setDisplayOutdoor(!displayOutdoor);
    const handleDisplayOnWallChange = () => setDisplayOnWall(!displayOnWall);
    const handleReadyToHangChange = () => setReadyToHang(!readyToHang);
    const handleFramedChange = () => setFramed(!framed);
    const handleFrameHeightChange = (e) => setFrameHeight(e.target.value);
    const handleFrameWidthChange = (e) => setFrameWidth(e.target.value);
    const handleFrameThicknessChange = (e) => setFrameThickness(e.target.value);
    const handleHeightChange = (e) => setHeight(e.target.value);
    const handleWidthChange = (e) => setWidth(e.target.value);
    const handleThicknessChange = (e) => setThickness(e.target.value);
    const handleWeightChange = (e) => setWeight(e.target.value);
    const handleSalesStatusChange = (e) => setSalesStatus(e.target.value);
    const handlePriceWithoutShippingChange = (e) => setPriceWithoutShipping(e.target.value);
    const handleDiscountPriceChange = (e) => setDiscountPrice(e.target.value);
    const handleConditionChange = (e) => setCondition(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);
    const handleStyleChange = (e) => setStyle(e.target.value);
    const handleKeywordsChange = (e) => setKeywords(e.target.value);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // Handle the file as needed, e.g., display the file name
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onloadend = () => {
                // Set the file contents as the source for the <img> tag
                setSelectedFile(reader.result);
            };

            reader.readAsDataURL(file);
        }
        console.log("Selected file:", file.name);
    };

    const handleChooseImage = () => {
        // Trigger the file input click when the "Choose Image" button is clicked
        if (imgRef.current) {
            imgRef.current.click();
        }
    };

    // Save button click handler
    const handleSave = () => {

        var userResponse = confirm("Do you want to save this artwork?");

        if (userResponse) {

            // Create FormData object
            const formData = new FormData();
            formData.append('title', title);
            formData.append('year_of_creation', yearOfCreation);
            formData.append('artwork_category', category);
            formData.append('medium', medium);
            formData.append('support_surface', supportSurface);
            formData.append('number_of_copies', numOfCopies);
            formData.append('number_of_copies_for_sale', numOfCopiesForSale);
            formData.append('can_display_outdoor', displayOutdoor);
            formData.append('can_display_on_wall', displayOnWall);
            formData.append('ready_to_hang', readyToHang);
            formData.append('is_framed', framed);
            formData.append('frame_height', frameHeight);
            formData.append('frame_width', frameWidth);
            formData.append('frame_thickness', frameThickness);
            formData.append('height', height);
            formData.append('width', width);
            formData.append('thickness', thickness);
            formData.append('weight', weight);
            formData.append('sales_status', salesStatus);
            formData.append('price_without_shipping', priceWithoutShipping);
            formData.append('discount_price', discountPrice);
            formData.append('artwork_condition', condition);
            formData.append('description', description);
            formData.append('artwork_style', style);
            formData.append('keywords', keywords);

            // set artist
            const user = JSON.parse(localStorage.getItem("user"));
            formData.append('artist_id', user.id);

            const file = imgRef.current.files[0];
            if (file) {
                formData.append("main_image", file);
            }

            axios
                .post(`${BASE_URL}/artworks`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((response) => {

                    alert(response.data.message);

                })
                .catch((error) => {
                    console.error("Error:", error);
                });

        } else {

        }

    };

    return (
        <div className={`d-flex justify-content-center my-5`}>
            <div className={` d-flex flex-column gap-4`}
                style={{ backgroundColor: 'rgba(246,246,246,0.85)', border: '1px solid rgb(222,222,222)', width: '60vw' }}>

                <div className={`p-3 d-flex flex-column gap-3`}>

                    <div style={{ paddingBottom: '20px' }}>
                        <text style={{ color: '#2a2525', fontWeight: 450, fontSize: '18px' }}>Let's add your new artwork</text>
                    </div>

                    <div className={`d-flex p-3 gap-2 flex-column align-items-center justify-content-center`}>
                        <img alt={''} width={'420px'}
                            src={selectedFile === null ? img : selectedFile}
                            className={`border`}
                            style={{
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                objectFit: 'cover'
                            }} />
                        <button
                            onClick={handleChooseImage}
                            style={{
                                backgroundColor: '#111111',
                                fontSize: '14px',
                                color: 'white',
                                border: '1px solid black',
                                width: '420px',
                                height: '40px'
                            }}>Choose Image</button>

                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            ref={imgRef}
                            onChange={handleFileChange}
                        />
                    </div>
                </div>

                <div className={`p-3 d-flex flex-column gap-3`}>

                    <div style={{ borderBottom: '1px solid #d5d5d5', paddingBottom: '20px' }}>
                        <text style={{ color: '#2a2525', fontWeight: 450, fontSize: '18px' }}>Info</text>
                    </div>

                    <div className={`d-flex p-3  flex-column justify-content-center gap-4`}>

                        <div className={`d-flex justify-content-start align-items-center`}>
                            <text style={{ fontWeight: 500 }} className={`w-25`}>Title</text>
                            <input className={`w-75 form-control`} value={title} onChange={handleTitleChange} />
                        </div>
                        <div className={`d-flex justify-content-start align-items-center`}>
                            <text style={{ fontWeight: 500 }} className={`w-25`}>Year of creation</text>
                            <input onChange={handleYearOfCreationChange} type={'number'} style={{ width: '200px' }} className={`form-control`} />
                        </div>

                    </div>

                </div>


                <div className={`p-3 d-flex flex-column gap-3`}>
                    <div style={{ borderBottom: '1px solid #d5d5d5', paddingBottom: '20px' }}>
                        <text style={{ color: '#2a2525', fontWeight: 450, fontSize: '18px' }}>Classification</text>
                    </div>

                    <div className={`p-3 d-flex  flex-column justify-content-center gap-4`}>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{ fontWeight: 500 }} className={`w-25`}>Category</text>
                            <div className={`d-flex w-100`}>
                                <select onChange={handleCategoryChange} value={category} style={{ width: '400px' }} className={`form-select`}>
                                    <option value={""}>Select Category</option>
                                    <option value={"Drawing"}>Drawing</option>
                                    <option value={"Painting"}>Painting</option>
                                    <option value={"Sculpture"}>Sculpture</option>
                                    <option value={"Wall Art"}>Wall Art</option>
                                </select>
                            </div>
                        </div>


                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{ fontWeight: 500 }} className={`w-25`}>Medium</text>
                            <div className={`d-flex w-100`}>
                                <input onChange={handleMediumChange} value={medium} style={{ width: '400px' }} className={`form-control`}></input>
                            </div>
                        </div>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{ fontWeight: 500 }} className={`w-25`}>Support or surface</text>
                            <div className={`d-flex w-100`}>
                                <select value={supportSurface} onChange={handleSupportSurfaceChange} style={{ width: '400px' }} className={`form-select`}>
                                    <option value={""}>Select Support or Surface</option>
                                    <option value={"Paper"}>Paper</option>
                                    <option value={"Cardboard"}>Cardboard</option>
                                    <option value={"Wood"}>Wood</option>
                                    <option value={"Glass"}>Glass</option>
                                </select>
                            </div>
                        </div>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{ fontWeight: 500 }} className={`w-25`}>Number of copies</text>
                            <div className={`d-flex w-100`}>
                                <input
                                    value={numOfCopies}
                                    onChange={handleNumOfCopiesChange}
                                    type={'number'}
                                    style={{ width: '220px' }}
                                    className={`form-control`}></input>
                            </div>
                        </div>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{ fontWeight: 500 }} className={`w-25`}>Number of copies for sale</text>
                            <div className={`d-flex w-100`}>
                                <input value={numOfCopiesForSale}
                                    onChange={handleNumOfCopiesForSaleChange}
                                    type={'number'}
                                    style={{ width: '220px' }}
                                    className={`form-control`}></input>
                            </div>
                        </div>

                    </div>

                </div>


                <div className={`p-3 d-flex flex-column gap-3`}>
                    <div style={{ borderBottom: '1px solid #d5d5d5', paddingBottom: '20px' }}>

                        <text style={{ color: '#2a2525', fontWeight: 450, fontSize: '18px' }}>Presentation</text>
                    </div>

                    <div className={`d-flex p-3  flex-column justify-content-center gap-4`}>
                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{ fontWeight: 500 }} className={`w-50`}>This artwork can be displayed outdoor
                            </text>
                            <
                                Form.Check
                                onChange={handleDisplayOutdoorChange}
                                label={'Yes'}
                            />
                            <
                                Form.Check
                                onChange={handleDisplayOutdoorChange}
                                label={'No'}
                            />
                        </div>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{ fontWeight: 500 }} className={`w-50`}>This artwork is intended to be displayed
                                on a wall?
                            </text>
                            <
                                Form.Check
                                onChange={handleDisplayOnWallChange}
                                label={'Yes'}
                            />
                            <
                                Form.Check
                                onChange={handleDisplayOnWallChange}
                                label={'No'}
                            />
                        </div>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{ fontWeight: 500 }} className={`w-50`}>Ready to hang</text>
                            <
                                Form.Check
                                onChange={handleReadyToHangChange}
                                label={'Yes'}
                            />
                            <
                                Form.Check
                                onChange={handleReadyToHangChange}
                                label={'No'}
                            />
                        </div>
                    </div>

                </div>


                <div className={`p-3 d-flex flex-column gap-3`}>
                    <div style={{ borderBottom: '1px solid #d5d5d5', paddingBottom: '20px' }}>
                        <text style={{ color: '#2a2525', fontWeight: 450, fontSize: '18px' }}>Framing</text>
                    </div>

                    <div className={`p-3 d-flex  flex-column justify-content-center gap-4`}>
                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{ fontWeight: 500 }} className={`w-25`}>Artwork is framed</text>
                            <
                                Form.Check
                                onChange={handleFramedChange}
                                label={'Yes'}
                            />
                            <
                                Form.Check
                                onChange={handleFramedChange}
                                label={'No'}
                            />
                        </div>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{ fontWeight: 500 }} className={`w-25`}>Frame height (cm)</text>
                            <input onChange={handleFrameHeightChange} value={frameHeight} style={{ width: '300px' }} className={`form-control`} />
                        </div>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{ fontWeight: 500 }} className={`w-25`}>Frame width (cm)</text>
                            <input onChange={handleFrameWidthChange} value={frameWidth} style={{ width: '300px' }} className={`form-control`} />
                        </div>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{ fontWeight: 500 }} className={`w-25`}>Frame thickness (cm)</text>
                            <input onChange={handleFrameThicknessChange} value={frameThickness} style={{ width: '300px' }} className={`form-control`} />
                        </div>

                    </div>

                </div>


                <div className={`p-3 d-flex flex-column gap-3`}>
                    <div style={{ borderBottom: '1px solid #d5d5d5', paddingBottom: '20px' }}>
                        <text style={{ color: '#2a2525', fontWeight: 450, fontSize: '18px' }}>Size</text>
                    </div>
                    <div className={`p-3 d-flex  flex-column justify-content-center gap-4`}>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{ fontWeight: 500 }} className={`w-25`}>Height (cm)</text>
                            <input onChange={handleHeightChange} value={height} style={{ width: '300px' }} className={`form-control`} />
                        </div>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{ fontWeight: 500 }} className={`w-25`}>Width (cm)</text>
                            <input onChange={handleWidthChange} value={width} style={{ width: '300px' }} className={`form-control`} />
                        </div>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{ fontWeight: 500 }} className={`w-25`}>Thickness (cm)</text>
                            <input onChange={handleThicknessChange} value={thickness} style={{ width: '300px' }} className={`form-control`} />
                        </div>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{ fontWeight: 500 }} className={`w-25`}>Weight (kg)</text>
                            <input onChange={handleWeightChange} value={weight} style={{ width: '300px' }} className={`form-control`} />
                        </div>

                    </div>

                </div>


                <div className={`p-3 d-flex flex-column gap-3`}>
                    <div style={{ borderBottom: '1px solid #d5d5d5', paddingBottom: '20px' }}>
                        <text style={{ color: '#2a2525', fontWeight: 450, fontSize: '18px' }}>Sales</text>
                    </div>

                    <div className={`d-flex flex-column gap-2`}>
                        <div className={`p-2 d-flex  flex-column justify-content-center gap-4`}>
                            <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                                <text style={{ fontWeight: 500 }} className={`w-25`}>status</text>
                                <select onChange={handleSalesStatusChange} value={salesStatus} style={{ width: '300px' }} className={`form-select`}>
                                    <option value={""}>Select Status</option>
                                    <option value={"For Sale"}>For Sale</option>
                                    <option value={"Not for Sale"}>Not for Sale</option>
                                    <option value={"Sold"}>Sold</option>
                                </select>
                            </div>
                        </div>

                        <div className={`p-2 d-flex  flex-column justify-content-center gap-4`}>
                            <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                                <text style={{ fontWeight: 500 }} className={`w-25`}>Price without shipping</text>
                                <input onChange={handlePriceWithoutShippingChange} value={priceWithoutShipping} style={{ width: '300px' }} className={`form-control`}></input>
                            </div>
                        </div>

                        <div className={`p-2 d-flex  flex-column justify-content-center gap-4`}>
                            <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                                <text style={{ fontWeight: 500 }} className={`w-25`}>Discount price</text>
                                <input onChange={handleDiscountPriceChange} value={discountPrice} style={{ width: '300px' }} className={`form-control`}></input>
                            </div>
                        </div>
                    </div>

                </div>


                <div className={`p-3 d-flex flex-column gap-3`}>
                    <div style={{ borderBottom: '1px solid #d5d5d5', paddingBottom: '20px' }}>
                        <text style={{ color: '#2a2525', fontWeight: 450, fontSize: '18px' }}>About this Artwork</text>
                    </div>
                    <div className={`p-3 d-flex  flex-column justify-content-center gap-4`}>
                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{ fontWeight: 500 }} className={`w-25`}>condition</text>
                            <select onChange={handleConditionChange} value={condition} className={`form-select`}>
                                <option value={""}>Select Condition</option>
                                <option value={"Perfect"}>Perfect</option>
                                <option value={"Very Good"}>Very Good</option>
                                <option value={"Good"}>Good</option>
                                <option value={"Not Good"}>Not Good</option>
                            </select>
                        </div>
                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{ fontWeight: 500 }} className={`w-25`}>description</text>
                            <textarea onChange={handleDescriptionChange} value={description} className={`border form-control`} />
                        </div>
                        <div className={`gap-5 d-flex justify-content-center align-items-center`}>
                            <text style={{ fontWeight: 500 }} className={`w-25`}>style</text>
                            <select onChange={handleStyleChange} value={style} className={`form-select`}>
                                <option value="">Select Style</option>
                                <option value="Abstract">Abstract</option>
                                <option value="Animal">Animal</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Everyday Life">Everyday Life</option>
                                <option value="History">History</option>
                                <option value="Humor">Humor</option>
                                <option value="Landscape">Landscape</option>
                                <option value="Love">Love</option>
                                <option value="Portrait">Portrait</option>
                                <option value="Urban">Urban</option>
                                <option value="World Culture">World Culture</option>
                            </select>
                        </div>
                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{ fontWeight: 500 }} className={`w-25`}>keywords</text>
                            <input onChange={handleKeywordsChange} value={keywords} className={`border form-control`} />
                        </div>
                    </div>

                </div>

                <div className={`d-flex  justify-content-end`}>
                    <div className={`w-25`}></div>
                    <div className={`d-flex w-75 align-items-center justify-content-end`}
                        style={{ paddingRight: '30px' }}>
                        <button
                            onClick={handleSave}
                            style={{
                                width: '180px',
                                border: 'none',
                                backgroundColor: '#111111',
                                color: 'white',
                                height: '45px'
                            }}>Save
                        </button>
                    </div>
                </div>

                <div className={`d-flex justify-content-end`}>

                </div>

            </div>

        </div>
    );
}


export default ArtworkAddForm;