import Users from "./components/Users/Users";
import UserDetails from "./components/User-details/UserDetails";
import Posts from "./components/Posts/Posts";
import classes from "./App.module.css"
import {useState} from "react";

const App = () => {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);
    const [posts, setPosts] = useState([])

    const getUser = (user) => {
        setUser(user)
        setUserId(null);
    };
    const getUserId = (id) => {
        setUserId(id);
    }
    console.log(userId)
    return (
        <div>
            <div className={classes.wrap}>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>
            {userId && <Posts userId={userId}/>}
        </div>
    );
}

export default App;
