import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { SHOP_ROUTER } from "../../constants/router";
import './header.scss';
import { useDispatch } from "react-redux";
import { actSearchAllTask } from "../../redux/features/task/taskSlice";


const Header = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="todo-header">
            <div className="todo-create">
                <li><Link to={SHOP_ROUTER.CREATE_TASK}>Create New Task</Link></li>
            </div>
            <div className="todo-search">
                <form action="">
                    <input type="text" placeholder="Type something to search" onChange={handleSearch} value={search} />
                    <button onClick={() => dispatch(actSearchAllTask(search))}>Search</button>
                </form>
            </div>
        </div>
    )
}

export default Header;