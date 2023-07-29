import {useLoaderData, useNavigate } from "react-router-dom";
import './UserDetail.css';


const UserDetail = () => {
    const userData = useLoaderData();
    const {name, username, company, address, email, phone} =  userData;
    const navigate = useNavigate();
    const GoBackHandler = ()=>{ 
        navigate(-1)
    }
    return (
        <div className="detail-container">
            <div className="detail-items">
            <h1>{name}</h1>
            <p className="username">Username: {username}</p>
            <h3>Company: {company.name}</h3>
            <p>Address: {address.city}, {address.street}, {address.suite}, {address.zipcode}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <button onClick={GoBackHandler}>Go Back</button>
            </div>
        </div>
    );
};

export default UserDetail;