import {useState} from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from "../../constants/Routes.js";

export default function LoginForm() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let credentials = {
        email: email,
        password: password
    }
    
    const handleLogin = () => {
    
        const login = async () => {
            try {
                // Call your API here using Axios
                const response = await axios.post(`${BASE_URL}/users/login`, credentials, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if(response.data.success){
                    localStorage.setItem("user",JSON.stringify(response.data.user))
                    navigate('/');
                }else{
                    alert(response.data.message)
                }

            } catch (error) {
                console.error("Error:", error.message);
            }
        };

        login();
    };


    return (
        <div
            className={`d-flex  p-5 flex-column gap-5`}
            style={{
                width: "40%",
                backgroundColor: "rgb(255,255,255)",
                marginTop: "20px",
            }}
        >
            <div className={` d-flex flex-column gap-4`}>
                <div className={``}>
                    <input
                        style={{height: "50px", borderRadius: "1px"}}
                        placeholder={"Email"}
                        className={`form-control`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={``}>
                    <input
                        style={{height: "50px", borderRadius: "1px"}}
                        placeholder={"Password"}
                        type="password"
                        className={`form-control`}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>

            <div className={`d-flex justify-content-center align-items-center flex-column gap-3`}>
                <div className={` w-100`}>
                    <button
                        className={`w-100 p-0`}
                        style={{
                            border: "none",
                            color: "white",
                            backgroundColor: "#1f1f1f",
                            height: "50px",
                        }}
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
                <div className={``}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <span style={{fontSize: "16px"}}>Don't have an account? {<Link onClick={()=>{
                        navigate('/sign-in');
                    }} style={{color:'black'}}>Sign up</Link>}</span>
                </div>
            </div>
        </div>
    );
}

