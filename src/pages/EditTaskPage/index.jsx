import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { taskFormSchema } from "../../validations/taskFormSchema";
import { useDispatch, useSelector } from "react-redux";
import { actUpdtateTask } from "../../redux/features/task/taskSlice";
import "./edit.scss";
import { actUpdateDetailTask } from "../../redux/features/task/taskSlice";
import { useParams } from "react-router-dom";
import { TASK_STATUS } from "../../constants/common";

const initialFormValues = {
    todoTitle: "",
    todoCreator: "",
    todoCreated: "",
    todoDescription: "",
    todoType: TASK_STATUS.NEW,
}

const EditTaskPage = () => {
    const dispatch = useDispatch()
    const { idEdit } = useParams() //Params sẽ chứa idTask 
    const taskDetail = useSelector(state => state.tasks.taskDetail)
    const methods = useForm({
        defaultValues: initialFormValues,
        resolver: yupResolver(taskFormSchema)
    })
    const { control, handleSubmit, formState: { errors }, reset } = methods

    const onValid = (values) => {
        dispatch(actUpdtateTask({ id: idEdit, task: values }))
    }

    useEffect(() => {
        if (idEdit) {
            dispatch(actUpdateDetailTask(idEdit))
        }
    }, [idEdit, dispatch])

    useEffect(() => {
        reset(taskDetail)
    }, [taskDetail, reset])

    return (
        <div className="todo-edit">
            <form className="todo-form" onSubmit={handleSubmit(onValid)}>
                <div className="todo-row">
                    <label>Title </label>
                    <Controller
                        name="todoTitle"
                        control={control}
                        render={({ field: { onChange, value } }) => {
                            return <input type="text" placeholder="Place holder" onChange={onChange} value={value} />
                        }}
                    />
                    {!!errors.todoTitle && <p style={{ color: "red", fontSize: 12 }}>{errors.todoTitle?.message}</p>}
                </div>
                <div className="todo-row">
                    <label>Creator </label>
                    <Controller
                        name="todoCreator"
                        control={control}
                        render={({ field }) => {
                            return <input type="text" placeholder="Name of creator" {...field} />
                        }}
                    />
                    {!!errors.todoCreator && <p style={{ color: "red", fontSize: 12 }}>{errors.todoCreator?.message}</p>}
                </div>
                <div className="todo-row">
                    <label>Created at </label>
                    <Controller
                        name="todoCreated"
                        control={control}
                        render={({ field }) => {
                            return <input type="text" placeholder="08-02-2021 07:45:20" {...field} />
                        }}
                    />
                    {!!errors.todoCreated && <p style={{ color: "red", fontSize: 12 }}>{errors.todoCreated?.message}</p>}
                </div>
                <div className="todo-row">
                    <label>Description </label>
                    <Controller
                        name="todoDescription"
                        control={control}
                        render={({ field }) => {
                            return <input type="text" placeholder="Description details" {...field} />
                        }}
                    />
                    {!!errors.todoDescription && <p style={{ color: "red", fontSize: 12 }}>{errors.todoDescription?.message}</p>}
                </div>
                <div style={{ display: "flex" }}>
                    <div className="todo-row">
                        <div className="todo-status" style={{ display: "flex" }}>
                            <Controller
                                name="todoType"
                                control={control}
                                render={({ field }) => {
                                    return <input type="radio" {...field} value={TASK_STATUS.NEW} />
                                }}
                            />
                            <p>New</p>
                        </div>
                    </div>
                    <div className="todo-row">
                        <div className="todo-status" style={{ display: "flex" }}>
                            <Controller
                                name="todoType"
                                control={control}
                                render={({ field }) => {
                                    return <input type="radio" {...field} value={TASK_STATUS.DOING} />
                                }}
                            />
                            <p>Doing</p>
                        </div>
                    </div>
                    <div className="todo-row">
                        <div className="todo-status" style={{ display: "flex" }}>
                            <Controller
                                name="todoType"
                                control={control}
                                render={({ field }) => {
                                    return <input type="radio" {...field} value={TASK_STATUS.DONE} />
                                }}
                            />
                            <p>Done</p>
                        </div>
                    </div>
                </div>
                <div className="todo-row">
                    <button type="submit">Save</button>
                    <button type="reset">Reset</button>
                    <button type="submit">Delete</button>
                </div>
            </form>
        </div>
    )
}

export default EditTaskPage;