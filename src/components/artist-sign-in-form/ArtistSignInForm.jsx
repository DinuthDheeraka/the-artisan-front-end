import {Form} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {useRef, useState} from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/Routes.js";

const ArtistSignInForm = () => {

    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [aboutYou, setAboutYou] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [postCode, setPostCode] = useState("");
    const [city, setCity] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("None");
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleCheckboxChange = (category) => {
        // Update the selected categories state based on checkbox changes
        if (selectedCategories.includes(category)) {
            setSelectedCategories((prevCategories) => prevCategories.filter((c) => c !== category));
        } else {
            setSelectedCategories((prevCategories) => [...prevCategories, category]);
        }
    };

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
        fileInputRef.current.click();
    };

    const handleContinue = () => {

        const formData = new FormData();
        
        const credentials = JSON.parse(localStorage.getItem("user_data"))

        formData.append("email", credentials.email);
        formData.append("password", credentials.password);
        formData.append("full_name", fullName);
        formData.append("display_name", displayName);
        formData.append("biography", aboutYou);
        formData.append("address", streetAddress);
        formData.append("postal_code", postCode);
        formData.append("city", city);
        formData.append("phone_number", phoneNumber);
        formData.append("date_of_birth", dob);
        formData.append("gender", gender);
        selectedCategories.forEach((category) => formData.append("categories", category));

        const file = fileInputRef.current.files[0];
        if (file) {
            formData.append("profile_image", file);
        }

        axios
            .post(`${BASE_URL}/artists`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                console.log(response);
                navigate("/");
            })
            .catch((error) => {
                console.error("Error:", error);
            });

    };


    return (<div className={`d-flex p-3 flex-column gap-2`}
                 style={{width: '60%', backgroundColor: '#ffffff', marginTop: '20px'}}>

        <div className={`px-2`}>
            <button className={``} style={{border: 'none'}}>Back
            </button>
        </div>

        <div className={`d-flex flex-column align-items-center justify-content-center`}>
            <text style={{fontSize: '40px', fontWeight: 350}}>What's your name?</text>
            <small style={{fontSize: '17px', color: '#818181'}}>We are the artisan,nice to meet you!</small>
        </div>

        <div className={`d-flex px-2 flex-column gap-4 justify-content-center mt-4`}>

            <div className={`d-flex align-items-center justify-content-center`}>
                <img alt={''} src={selectedFile} className={`border`}
                     style={{borderRadius: '100%', width: '120px', height: '120px'}}/>
            </div>

            <div className={`d-flex justify-content-center`}>
                <button style={{border: 'none'}} onClick={handleChooseImage}>
                    Choose a profile image
                </button>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{display: 'none'}}
                    onChange={handleFileChange}
                />
            </div>

            <div className={`d-flex align-items-center`}>
                <label className={`w-25`}>Full name</label>
                <input style={{height: '50px', borderRadius: '1px'}} placeholder={''}
                       className={`form-control`}
                       value={fullName}
                       onChange={(e) => setFullName(e.target.value)}
                />
            </div>

            <div className={`d-flex align-items-center`}>
                <label className={`w-25`}>Display name</label>
                <input style={{height: '50px', borderRadius: '1px'}} placeholder={''}
                       className={`form-control`}
                       value={displayName}
                       onChange={(e) => setDisplayName(e.target.value)}
                />
            </div>

            <div className={`d-flex align-items-center`}>
                <label style={{width: '20%'}} className={``}>Artist Category</label>
                <div className={`gap-4 d-flex w-75`}>
                    <Form.Check
                        label={'Painting'}
                        onChange={() => handleCheckboxChange('Painting')}
                        checked={selectedCategories.includes('Painting')}
                    />
                    <Form.Check
                        label={'Drawing'}
                        onChange={() => handleCheckboxChange('Drawing')}
                        checked={selectedCategories.includes('Drawing')}
                    />
                    <Form.Check
                        label={'Sculpture'}
                        onChange={() => handleCheckboxChange('Sculpture')}
                        checked={selectedCategories.includes('Sculpture')}
                    />
                    <Form.Check
                        label={'Handicraft'}
                        onChange={() => handleCheckboxChange('Handicraft')}
                        checked={selectedCategories.includes('Handicraft')}
                    />
                </div>
                {/* eslint-disable-next-line react/jsx-no-undef */}

            </div>

            <div className={`d-flex align-items-center`}>
                <label className={`w-25`}>Brief words about you</label>
                <input style={{height: '50px', borderRadius: '1px'}} placeholder={''}
                       className={`form-control`}
                       value={aboutYou}
                       onChange={(e) => setAboutYou(e.target.value)}
                />
            </div>

            <div className={`d-flex align-items-center`}>
                <label className={`w-25`}>Street Address</label>
                <input style={{height: '50px', borderRadius: '1px'}} placeholder={''}
                       className={`form-control`}
                       value={streetAddress}
                       onChange={(e) => setStreetAddress(e.target.value)}
                />
            </div>

            <div className={`d-flex align-items-center`}>
                <label className={`w-25`}>Postal Code</label>
                <input style={{height: '50px', borderRadius: '1px'}} placeholder={''}
                       className={`form-control`}
                       value={postCode}
                       onChange={(e) => setPostCode(e.target.value)}
                />
            </div>

            <div className={`d-flex align-items-center`}>
                <label className={`w-25`}>City</label>
                <input style={{height: '50px', borderRadius: '1px'}} placeholder={''}
                       className={`form-control`}
                       value={city}
                       onChange={(e) => setCity(e.target.value)}
                />
            </div>

            <div className={`d-flex align-items-center`}>
                <label className={`w-25`}>Phone Number</label>
                <input style={{height: '50px', borderRadius: '1px'}} placeholder={''}
                       className={`form-control`}
                       value={phoneNumber}
                       onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>

            <div className={`d-flex align-items-center`}>
                <label className={`w-25`}>Date of birth</label>
                <input style={{height: '50px', borderRadius: '1px', border: 'none'}} type={"date"}
                       placeholder={'Date Of Birth'}
                       className={`w-100 border`}
                       value={dob}
                       onChange={(e) => setDob(e.target.value)}
                />
            </div>

            <div className={`d-flex align-items-center`}>
                <label className={`w-25`}>Gender</label>
                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    style={{height: '50px', borderRadius: "1px"}} className={`form-select`}>
                    <option selected={true}>None</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>

            <div className={`d-flex align-items-center justify-content-end`}>
                <button
                    style={{
                        border: 'none', width: '300px', height: '50px', backgroundColor: '#212121', color: 'white',
                    }}
                    onClick={handleContinue}
                >
                    Sign In
                </button>
            </div>

        </div>
    </div>);
}

export default ArtistSignInForm;