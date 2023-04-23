import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actSearchDoneTask } from "../../redux/features/task/taskSlice";
import TodoList from "../../components/TodoList";

const DonePage = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks.tasks)

    useEffect(() => {
        dispatch(actSearchDoneTask())
    }, [dispatch])
    return (
        <div>
            <TodoList taskList={tasks} />
        </div>
    )
}

export default DonePage;