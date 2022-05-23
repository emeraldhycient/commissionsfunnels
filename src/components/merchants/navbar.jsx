import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky top-0 left-0 right-0 h-[3rem] bg-gray-50 border-b-[.1rem] border-gray-200 flex items-center px-2 md:px-6">
      <div className="flex-1 flex justify-between items-center">
        <div className="flex items-center">
          <Link
            to="/merchant/dashboard"
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
          <Link
            to="/merchant/dispatchers"
            className="ml-4 text-gray-500 hover:text-gray-700"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </Link>
          <Link to="/merchant/vendor/upload" className="ml-4">
            <button className="w-[99%] bg-slate-900 text-white px-2 py-1 mx-auto flex items-center justify-center items-center hover:bg-white border-[.1rem] hover:border-slate-900 hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="h-10 w-10 p-2 rounded-full bg-slate-900">
            {/* replace man with person usernmae*/}
            <img
              src="https://avatars.dicebear.com/api/human/man.svg"
              alt="avatar"
              className="h-full w-full rounded-full"
            />
          </div>
          <h2 className="mx-2 text-sm">Igweze Hycient</h2>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
