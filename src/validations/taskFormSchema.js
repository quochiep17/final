import * as Yup from "yup";

export const taskFormSchema = Yup.object({
    todoTitle: Yup.string().required("please input todo title"),
    todoCreator: Yup.string().required("please input todo creator"),
    todoCreated: Yup.string().required("please input todo created"),
    todoDescription: Yup.string().required("please input todo description"),
}); 