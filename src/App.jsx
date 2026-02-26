import { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#020d18] text-white h-screen grid grid-cols-4">
        <aside className="col-span-1 m-4 px-3 py-3 border border-[#3a414e] rounded-xl relative">
          <div className="mb-6">
            <div className="flex items-center">
              <svg
                className="w-6 h-6"
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                ></path>
              </svg>
              <h1 className="text-2xl font-bold text-yellow-600">MBase</h1>
            </div>
          </div>

          <ul>
            <li className="text-lg font-semibold border py-1 px-3 rounded-md border-[#3a414e] mb-3">
              Home
            </li>
            <li className="text-lg font-semibold border py-1 px-3 rounded-md border-[#3a414e] mb-3">
              TV Show
            </li>
            <li className="text-lg font-semibold border py-1 px-3 rounded-md border-[#3a414e] mb-3">
              Action
            </li>
            <li className="text-lg font-semibold border py-1 px-3 rounded-md border-[#3a414e] mb-3">
              Comedy
            </li>
          </ul>
          <ul className="absolute bottom-0 right-3 left-3">
            <li className="text-lg font-semibold border py-1 px-3 rounded-md border-[#3a414e] mb-3">
              Sethings
            </li>
          </ul>
        </aside>

        <main className="col-span-3 border my-4 mr-4 rounded-xl border-[#3a414e] px-3 py-3">
          <div className="flex items-center justify-between gap-6 mb-5 border border-[#3a414e] rounded-md px-3 py-4">
            <h2 className="text-lg font-semibold">Home</h2>
            <form action="" className="flex gap-x-1 items-center">
              <input
                type="search"
                placeholder="Search movies ..."
                className="bg-black placeholder:text-xs px-4 border border-[#3a414e] rounded-tl-3xl rounded-bl-3xl w-2xl h-10"
              />
              <button
                type="submit"
                className="bg-yellow-600 py-1 px-4 font-semibold text-sm rounded-tr-3xl rounded-br-3xl border border-[#3a414e] h-8"
              >
                Search
              </button>
            </form>
          </div>

          <div>
            <h2>Popular Movies</h2>
            <div>
              <div>
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <h3>The Extraction</h3>
                  <i></i>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
