import React from 'react'
import placeHolder from "../assets/placeHolder.png";

const HomePage = () => {
  return (
    <div>
        <h2 className="text-3xl font-bold mb-7 text-center mt-10">
          Popular Movies
        </h2>
        <div className="grid grid-cols-4 gap-4">
          <div className=" bg-yellow-700 border border-yellow-700 rounded overflow-x-hidden">
            <div className="w-full pb-4">
              <img src={placeHolder} alt="" className="w-full" />
            </div>
            <div>
              <h3 className="text-md font-bold px-2">The Extraction</h3>
              <p className="text-[14px] px-2 font-semibold mb-4">
                Realease Date: xxxx/xx/xx
              </p>
            </div>
          </div>

          <div className=" bg-yellow-700 border border-yellow-700 rounded overflow-x-hidden">
            <div className="w-full pb-4">
              <img src={placeHolder} alt="" className="w-full" />
            </div>
            <div>
              <h3 className="text-md font-bold px-2">The Extraction</h3>
              <p className="text-[14px] px-2 font-semibold mb-4">
                Realease Date: xxxx/xx/xx
              </p>
            </div>
          </div>

          <div className=" bg-yellow-700 border border-yellow-700 rounded overflow-x-hidden">
            <div className="w-full pb-4">
              <img src={placeHolder} alt="" className="w-full" />
            </div>
            <div>
              <h3 className="text-md font-bold px-2">The Extraction</h3>
              <p className="text-[14px] px-2 font-semibold mb-4">
                Realease Date: xxxx/xx/xx
              </p>
            </div>
          </div>

          <div className=" bg-yellow-700 border border-yellow-700 rounded overflow-x-hidden">
            <div className="w-full pb-4">
              <img src={placeHolder} alt="" className="w-full" />
            </div>
            <div>
              <h3 className="text-md font-bold px-2">The Extraction</h3>
              <p className="text-[14px] px-2 font-semibold mb-4">
                Realease Date: xxxx/xx/xx
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HomePage