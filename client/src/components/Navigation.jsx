import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 shadow-lg p-5 flex items-center justify-between">
            <Link to="/tasks" className="flex items-center gap-2 group">
                <svg
                    className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                </svg>
                <h1 className="text-white text-3xl font-extrabold tracking-tight group-hover:text-yellow-400 transition-colors">
                    Task App
                </h1>
            </Link>
            <Link
                to="/tasks-create"
                className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg shadow-md hover:bg-yellow-500 hover:scale-105 font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
                + Create Task
            </Link>
        </nav>
    );
}
