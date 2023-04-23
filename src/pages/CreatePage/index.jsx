import React from "react";
import "./create.scss";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { taskFormSchema } from "../../validations/taskFormSchema";
import { useDispatch } from "react-redux";
import { actAddTask } from "../../redux/features/task/taskSlice";
import { makeRandomId } from "../../utils";


const initialFormValues = {
    todoTitle: "",
    todoCreator: "",
    todoCreated: "",
    todoDescription: "",
}

const CreatePage = () => {
    const dispatch = useDispatch()
    const methods = useForm({
        defaultValues: initialFormValues,
        resolver: yupResolver(taskFormSchema)
    })
    const { control, handleSubmit, formState: { errors }, reset } = methods

    const onValid = (values) => {
        const task = {
            ...values,
            id: makeRandomId(),
        }
        dispatch(actAddTask(task))
        reset(initialFormValues)

    }

    return (
        <div className="todo-create">
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
                <div className="todo-row">
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePage;