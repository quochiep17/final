import { createSlice } from "@reduxjs/toolkit"
import { KEY_TODO_LIST } from "../../../constants/common";

const initialState = {
    taskList: JSON.parse(localStorage.getItem(KEY_TODO_LIST)) || [],
    taskDetail: {},
    newTask: [],
    doingTask: [],
    doneTask: [],
};

const taskSlice = createSlice({
    name: 'task',
    initialState: initialState,
    reducers: {
        actAddTask: (state, action) => {
            const _taskList = [...state.taskList, action.payload];
            state.taskList = _taskList;
            localStorage.getItem(KEY_TODO_LIST, JSON.stringify(_taskList));
        },
        actDeleteTaskById: (state, action) => {
            const id = action.payload;
            const _taskList = state.taskList.filter((task) => task.id !== id);
            state.taskList = _taskList;
            localStorage.getItem(KEY_TODO_LIST, JSON.stringify(_taskList));
        },
        actUpdateDetailTask: (state, action) => {
            const id = action.payload;
            const task = state.taskList.find((task) => task.id === id);
            if (task) {
                state.taskDetail = task;
            }
        },
        actUpdtateTask: (state, action) => {
            const { id, task } = action.payload;
            const exitedIndexTask = state.taskList.findIndex(
                (task) => task.id === id
            );
            const _taskList = [...state.taskList];
            if (exitedIndexTask !== -1) {
                _taskList[exitedIndexTask] = {
                    ..._taskList[exitedIndexTask],
                    ...task,
                };
                state.taskList = _taskList;
                localStorage.getItem(KEY_TODO_LIST, JSON.stringify(_taskList));
            }
        },
        actGetAllTask: (state, action) => {
            state.task = JSON.parse(localStorage.getItem(KEY_TODO_LIST)) || []
        },
        actSearchAllTask: (state, action) => {
            if (!action.payload) {
                state.task = JSON.parse(localStorage.getItem(KEY_TODO_LIST)) || []
            } else {
                state.task = state.task.filter(task => task.todoTitle.toLowerCase().includes(action.payload.toLowerCase()))
            };
        },
        actSearchNewTask: (state, action) => {
            const data = JSON.parse(localStorage.getItem(KEY_TODO_LIST)) || []
            state.task = data.filter(task => task.status === 'NEW')
        },
        actSearchDoingTask: (state, action) => {
            const data = JSON.parse(localStorage.getItem(KEY_TODO_LIST)) || []
            state.task = data.filter(task => task.status === 'DOING')
        },
        actSearchDoneTask: (state, action) => {
            const data = JSON.parse(localStorage.getItem(KEY_TODO_LIST)) || []
            state.task = data.filter(task => task.status === 'DONE')
        }
    },
});


export const { actAddTask, actDeleteTaskById, actUpdateDetailTask, actUpdtateTask, actSearchAllTask, actSearchNewTask, actSearchDoingTask, actSearchDoneTask, actGetAllTask } = taskSlice.actions;
export default taskSlice.reducer;