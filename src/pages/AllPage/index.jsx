import React, { useEffect } from "react";
import { Pagination } from "antd"
import "./allpage.scss";
import TodoList from "../../components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { actGetAllTask } from "../../redux/features/task/taskSlice";



const AllPage = () => {
    const tasks = useSelector(state => state.tasks.taskList)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actGetAllTask())
    }, [dispatch])

    return (
        <div className="todo-allpage">
            <div className="todo-content">
                <TodoList taskList={tasks} />
            </div>
            <div className="todo-pagination">
                <Pagination defaultCurrent={1} total={50} />
            </div>
        </div>
    )
}

export default AllPage;