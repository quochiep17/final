import React from "react";
import { Link } from 'react-router-dom'
import { SHOP_ROUTER } from "../../constants/router";
import './sidebar.scss';

const Sidebar = () => {
    return (
        <div className="todo-sidebar">
            <ul className="todo-menu">
                <li><Link to={SHOP_ROUTER.ALL_TASK}>All Task</Link></li>
                <li><Link to={SHOP_ROUTER.NEW_TASK}>New Task</Link></li>
                <li><Link to={SHOP_ROUTER.DOING_TASK}>Doing Task</Link></li>
                <li><Link to={SHOP_ROUTER.DONE_TASK}>Done Task</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar;