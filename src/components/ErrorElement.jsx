import { Link } from "react-router-dom";
export function ErrorElement() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2 text-white">Page Not Found</h2>
      <p className="mb-6 text-md text-gray-500">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        // className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        className="px-4 py-2 bg-slate-900 border-2 rounded-2xl border-slate-500 text-white hover:bg-slate-700 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
