import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-blue-950 text-white h-screen grid grid-cols-4'>
        <aside className='col-span-1'>
          <div className='mb-5'>
            <h1>MovieBase</h1>
          </div>

          <div className='flex flex-col justify-between'>
            <ul>
            <li>Home</li>
            <li>TV Show</li>
            <li>Action</li>
            <li>Comedy</li>
          </ul>
          <ul>
            <li>Sethings</li>
          </ul>
          </div>
        </aside>

        <main className='col-span-3'>
          <div className='flex justify-between mb-5'>
            <h2>Home</h2>
            <div>
              <input type="search" id='search'placeholder='Search Movies By Title....'/>
              <button>Search</button>
            </div>
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
  )
}

export default App
