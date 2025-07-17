import { useNavigate } from 'react-router-dom';

export function TaskCard({ task }) {
    const navigate = useNavigate();

    return (
        <div
            className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-2xl shadow-2xl hover:from-gray-700 hover:to-gray-800 transition-colors cursor-pointer border border-gray-700 mb-6"
            onClick={() => {
                navigate(`/tasks/${task.id}`);
            }}
        >
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-extrabold tracking-tight">Task Overview</h2>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${task.done ? 'bg-green-600' : 'bg-yellow-600'}`}>
                    {task.done ? 'Completed' : 'Pending'}
                </span>
            </div>
            <div className="mb-3">
                <h3 className="text-lg font-semibold text-gray-200 mb-1">Title</h3>
                <p className="text-xl font-bold">{task.title}</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-1">Description</h3>
                <p className="text-gray-300">{task.description}</p>
            </div>
        </div>
    );
}