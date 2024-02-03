// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserSignInForm = () => {

    const navigate = useNavigate();
    const [userType, setUserType] = useState('Artist'); // Default to 'Artist'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleContinue = () => {

        if (userType === 'Artist') {
            navigate('/artist-sign-in');
        } else {
            navigate('/buyer-sign-in');
        }

        localStorage.setItem("user_data", JSON.stringify({
            "email": email,
            "password": password
        }));

    };

    return (
        <div className={`d-flex p-5 flex-column gap-5`}
            style={{ width: '40%', backgroundColor: 'rgb(255,255,255)', marginTop: '20px' }}>
            <div className={` d-flex flex-column gap-4`}>
                <div className={``}>
                    {/* Dropdown for user type */}
                    <select style={{ height: '50px', borderRadius: '1px' }} className={`form-select`}
                        value={userType}
                        onChange={handleUserTypeChange}>
                        <option value="Artist">Artist</option>
                        <option value="Art Enthusiast">Art Enthusiast</option>
                    </select>
                </div>
                <div className={``}>
                    {/* Input for email */}
                    <input style={{ height: '50px', borderRadius: '1px' }} placeholder={'Email'}
                        className={`form-control`} value={email} onChange={handleEmailChange} />
                </div>
                <div className={``}>
                    {/* Input for password */}
                    <input style={{ height: '50px', borderRadius: '1px' }} placeholder={'Password'} type="password"
                        className={`form-control`} value={password} onChange={handlePasswordChange} />
                </div>
            </div>

            <div className={`d-flex justify-content-center align-items-center flex-column gap-3`}>
                <div className={` w-100`}>
                    {/* Button for form submission */}
                    <button className={`w-100 p-0`}
                        style={{ border: 'none', color: 'white', backgroundColor: '#1f1f1f', height: '50px' }}
                        onClick={handleContinue}>
                        Continue
                    </button>
                </div>
                <div className={``}>
                    <text style={{ fontSize: '16px' }}>Already have an account? Sign in</text>
                </div>
            </div>
        </div>
    );
};

export default UserSignInForm;
