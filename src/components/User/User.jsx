import { Link} from "react-router-dom";
import './User.css';


const User = ({user}) => {
    const {name, id} = user;
    return (
        <div className="user-container">
            <h1>{name}</h1>
            <Link to= {`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;