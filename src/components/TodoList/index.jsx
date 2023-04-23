import React from "react";
import "./todolist.scss";
import { useDispatch } from "react-redux";
import { actDeleteTaskById } from "../../redux/features/task/taskSlice";
import { useNavigate, generatePath } from "react-router-dom";
import { SHOP_ROUTER } from "../../constants/router";


const TodoList = ({ taskList }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const renderTaskList = (tasks) => {
        return tasks?.map((task, index) => {
            return <div className="todo-show" key={index} >
                <p className="todo-title">Title: {task?.todoTitle || ""}</p>
                <p className="todo-creator">Creator: {task?.todoCreator || ""}</p>
                <p className={task.todoType === "New" ? "green" : task.todoType === "Doing" ? "orange" : task.todoType === "Done" ? "blue" : "black"} >Status: {task.todoType}</p>
                <p className="todo-description">Description: {task?.todoDescription || ""}</p>
                <div className="todo-btn">
                    <button onClick={() => handleGoEditTask(task.id)}>Edit</button>
                    <button onClick={() => dispatch(actDeleteTaskById(task.id))}>Delete</button>
                </div>
            </div>
        })
    }

    const handleGoEditTask = (id) => {
        navigate(generatePath(SHOP_ROUTER.EDIT_TASK, { idEdit: id }))
    }

    return (
        <div className="todolist">
            {renderTaskList(taskList)}
        </div>
    )
}

export default TodoList;