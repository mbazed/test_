import React from 'react'
import { useNavigate } from 'react-router-dom';
import rawMaterialSupply from '../../images/raw-materials.webp'
import trackMedicine from '../../images/checkpoints.jpg'
// import trackMedicine from '../../images/checkpoints.jpg'
// import rawMaterialSupply   from '../../images/supply.jpeg'



const Rms = () => {
        const navigate = useNavigate();

        const handleRmsClick = () => {
                // Navigate to the Register component when clicking on "Register Stakeholders"
                navigate('/supplyrms');
        };

        const handleDrmsClick = () => {
                // Navigate to the Register component when clicking on "Register Stakeholders"
                navigate('/denyrms');
        };

        const handleTrackerClick = () => {
                // Navigate to the Register component when clicking on "Register Stakeholders"
                navigate('/track');
        };
        

        return (
                <div className="text-black p-12">
                        <h1 className="text-5xl font-bold mb-4">Welcome Raw material supplier!!</h1>
                        <div className="mb-6 text-2xl pt-8">What would you like to do?</div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div onClick={handleRmsClick} className="cursor-pointer bg-white p-6 rounded-lg shadow-md flex flex-col justify-center h-80 ">
                                        <div className="overflow-hidden">
                                                <img src={rawMaterialSupply} alt="manufacturing" />
                                        </div>
                                        <button className="text-xl font-bold mb-2 h-32 p-11 text-white bg-sky-700 text-center"><a href='/'>Supply Raw Materials</a></button>
                                </div>
                                <div onClick={handleDrmsClick} className="cursor-pointer bg-white p-6 rounded-lg shadow-md flex flex-col justify-center h-80 ">
                                        <div className="overflow-hidden">
                                                <img src={trackMedicine} alt="manufacturing" />
                                        </div>
                                        <button className="text-xl font-bold mb-2 h-32 p-11 text-white bg-sky-700 text-center"><a href='/'>Insufficient Raw Materials</a></button>
                                </div>
                                <div onClick={handleTrackerClick} className="cursor-pointer bg-white p-6 rounded-lg shadow-md flex flex-col justify-center h-80 ">
                                        <div className="overflow-hidden">
                                                <img src={trackMedicine} alt="manufacturing" />
                                        </div>
                                        <button className="text-xl font-bold mb-2 h-32 p-11 text-white bg-sky-700 text-center"><a href='/'>Track Medicines</a></button>
                                </div>
                        </div>
                </div>
        )
}

export default Rms
