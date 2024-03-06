import React from 'react'
import { useNavigate } from 'react-router-dom';

const Distributors = () => {

        const navigate=useNavigate();

        const handleDistributeClick = () => {
                      navigate('/distribute');
        };

        const handleTrackerClick = () => {
                
                      navigate('/track');
        };
        return (
        <div className="text-black p-12">
                <h1 className="text-5xl font-bold mb-4">Welcome Distributor!!</h1>
                <div className="mb-6 text-2xl pt-8">What would you like to do?</div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div onClick={handleDistributeClick} className="cursor-pointer bg-white p-6 rounded-lg shadow-md flex flex-col justify-center h-80">
                                        <h2 className="text-xl font-bold mb-2 h-32 p-11 text-white bg-sky-700 text-center">Distribute Medicines</h2>
                                        <p className="mb-0">fbnwjehbgfvjhsebgjksb</p>
                                </div>
                                {/* <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center h-80">
                                <h2 className="text-xl font-bold mb-2 h-32 p-11 text-white bg-sky-700 text-center">Sell Medicines</h2>
                                <p className="mb-0">fbnwjehbgfvjhsebgjksb</p>
                                </div> */}
                                <div onClick={handleTrackerClick} className="cursor-pointer bg-white p-6 rounded-lg shadow-md flex flex-col justify-center h-80 ">
                                        <h2 className="text-xl font-bold mb-2 h-32 p-11 text-white bg-sky-700 text-center">Track Medicines</h2>
                                        <p className="mb-0">fbnwjehbgfvjhsebgjksb</p>
                        </div>
                </div>
        </div>
  )
}

export default Distributors