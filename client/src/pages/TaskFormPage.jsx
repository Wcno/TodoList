import { useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export default function TaskFormPage() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async data => {
    if (params.id) {
      await updateTask(params.id, data);
      toast.success("Task updated successfully!", {
        style: {
          background: "#333",
          color: "#fff",
          borderRadius: "8px",
          fontWeight: "bold",
        },
        iconTheme: {
          primary: "#4ade80",
          secondary: "#fff",
        },
      });
    } else {
      await createTask(data);
      toast.success("Task created successfully!", {
        style: {
          background: "#333",
          color: "#fff",
          borderRadius: "8px",
          fontWeight: "bold",
        },
        iconTheme: {
          primary: "#4ade80",
          secondary: "#fff",
        },
      });
    }
    navigate('/tasks');
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const res = await getTask(params.id);
        setValue("title", res.data.title)
        setValue("description", res.data.description)
      }
    }
    loadTask();
  }, [params.id, setValue]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {params.id ? "Edit Task" : "Create New Task"}
        </h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-1" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter task title"
              {...register("title", { required: true })}
              className={`border ${errors.title ? "border-red-400" : "border-gray-300"} rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400 transition`}
              autoFocus
            />
            {errors.title && <span className="text-red-500 text-xs mt-1">This field is required</span>}
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter task description"
              {...register("description", { required: true })}
              className={`border ${errors.description ? "border-red-400" : "border-gray-300"} rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400 transition resize-none`}
              rows={5}
            ></textarea>
            {errors.description && <span className="text-red-500 text-xs mt-1">This field is required</span>}
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            {params.id ? "Update Task" : "Create Task"}
          </button>
        </form>
        {params.id && (
          <button
            onClick={() => {
              const confirmDelete = window.confirm("Are you sure you want to delete this task?");
              if (confirmDelete) {
                deleteTask(params.id).then(() => {
                  navigate('/tasks');
                });
              }
            }}
            className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition shadow-md focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Delete Task
          </button>
        )}
        <button
          onClick={() => navigate('/tasks')}
          className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}