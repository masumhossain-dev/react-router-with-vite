import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Index.css';

const Index = () => {
    const users = useLoaderData();
    return (
        <div className="user-main">
            {
                users.map(user=><User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Index;