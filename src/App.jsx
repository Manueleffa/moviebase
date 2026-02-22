import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <aside>
          <div>
            <h1>MovieBase</h1>
          </div>

          <ul>
            <li>Home</li>
            <li>TV Show</li>
            <li>Action</li>
            <li>Comedy</li>
            <li>Sethings</li>
          </ul>
        </aside>

        <main>
          <div>
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
