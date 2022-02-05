import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {FormCreate} from "./components/formCreate/FormCreate";
import {TodoList} from "./components/todoList/TodoList";

function App() {
    return (
        <div>
            <Counter/>
            <FormCreate/>
            <TodoList/>
        </div>
    );
}

export default App;
