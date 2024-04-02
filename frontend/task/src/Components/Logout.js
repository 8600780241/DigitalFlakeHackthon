import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Logout({ token }) {
    const navigate = useNavigate();
    function Cancel() {
        navigate('/home')
    }
    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:8000/user/logout')
            localStorage.removeItem("token");
            navigate('/')
        } catch (error) {
            console.error('Logout failed', error);
        }
    }
    return (<>
        <form class="modal-content" >
            <div class="container">
                <h1>Logout</h1>
                <p style={{
                    fontFamily: "Poppins",
                    fontSize: "30px",
                    fontWeight: "400",
                    lineHeight: "32px",
                    textAlign: "center",
                }}>Are you sure you want to logout?</p>
                <div class="clearfix">
                    <button type="button" class="cancelbtn" style={{
                        fontFamily: "Inter",
                        fontSize: "16.17px",
                        borderRadius: '8px',
                        textAlign: "center",
                        width: "100px",
                        margin: '20px'
                    }} onClick={Cancel}>Cancel</button>
                    <button type="button" class="deletebtn" style={{
                        fontFamily: "Inter",
                        fontSize: "16.17px",
                        borderRadius: '8px',
                        textAlign: "center",
                        width: "100px",
                        margin: '20px',
                        backgroundColor: "#662671",
                        color: "white"
                    }} onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </form>
    </>)
}
