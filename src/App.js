import './App.css';
import Comments from "./components/Comments/Comments";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";

function App() {
    return (
        <div>
            <div className='double-box'>
                <Users/>
                <Posts/>
            </div>
            <Comments className='comments'/>
        </div>
    );
}

export default App;
