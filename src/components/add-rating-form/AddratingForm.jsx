import React, { useRef, useState } from 'react';
import axios from "axios";

export default function AddratingForm({ artworkId }) {

    const [rating, setRating] = useState('01'); // Default rating is '01'
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

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

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleImageUpload = () => {
        fileInputRef.current.click();
        // Implement image upload logic if needed
    };

    const handleSaveReview = () => {

        const formData = new FormData();

        const user = JSON.parse(localStorage.getItem("user"))

        formData.append("buyer_id", user.id);
        formData.append("artwork_id", artworkId);
        formData.append("email", email);
        formData.append("display_name", name);
        formData.append("review_comment", comment);
        formData.append("review_points", rating);

        const file = fileInputRef.current.files[0];
        if (file) {
            formData.append("review_image", file);
        }

        axios
            .post("http://127.0.0.1:8000/api/v1/artworks/reviews", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                alert(response.data.message);
                window.location.reload()
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div className={`d-flex w-100 flex-column gap-3 p-3`} style={{ backgroundColor: '#f1f1f1' }}>
            <div>
                <text style={{ fontWeight: 550, fontSize: '18px' }}>Leave your review</text>
            </div>
            <div>
                <small>Select Rating Points</small>
            </div>
            <div className={`align-items-center px-0 gap-2 d-flex`}>
                <div className={`d-flex gap-2`}>
                    <select
                        style={{ width: '126px', borderRadius: '0px' }}
                        className={`form-select`}
                        value={rating}
                        onChange={handleRatingChange}
                    >
                        {Array.from({ length: 10 }, (_, index) => (
                            <option key={index + 1}>{String(index + 1).padStart(2, '0')}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className={`d-flex gap-2`}>
                <div className={`w-50`}>
                    <input
                        placeholder={'Name'}
                        style={{ borderRadius: '0px' }}
                        className={`form-control`}
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className={`w-50`}>
                    <input
                        placeholder={'Email'}
                        style={{ borderRadius: '0px' }}
                        className={`form-control`}
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
            </div>
            <div className={`d-flex`}>
                <div className={`w-100`}>
                    <textarea
                        placeholder={'Comment'}
                        className={`form-control`}
                        style={{ borderRadius: '0px', height: '150px' }}
                        value={comment}
                        onChange={handleCommentChange}
                    />
                </div>
            </div>

            <div>
                <img
                    height={'200px'}
                    width={'200x'}
                    style={{ borderRadius: '1px' }}
                    className={`border`}
                    src={selectedFile == null ? 'https://semantic-ui.com/images/wireframe/white-image.png' : selectedFile}
                    // src={''}
                    alt="Review"
                />
            </div>

            <div className={`d-flex justify-content-start`}>
                <div className={`d-flex gap-2 w-50`}>
                    <button
                        style={{
                            fontSize: '15px',
                            height: '35px',
                            backgroundColor: 'transparent',
                            border: '1px solid #bdbdbd',
                            width: '200px',
                        }}
                        onClick={handleImageUpload}
                    >
                        Upload an Image
                    </button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <button
                        style={{
                            fontSize: '15px',
                            border: 'none',
                            width: '200px',
                            color: '#ffffff',
                            backgroundColor: '#111111',
                        }}
                        onClick={handleSaveReview}
                    >
                        Save Review
                    </button>
                </div>
            </div>
        </div>
    );
}
