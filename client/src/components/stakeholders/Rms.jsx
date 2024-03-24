import React from 'react'
import { useNavigate } from 'react-router-dom';
import rawMaterialSupply from '../../images/rawmaterials.jpg'
// import trackMedicine from '../../images/checkpoints.jpg'
import Shortage from '../../images/Shortage.jpeg'
import checkpointsnew from '../../images/checkpointsnew.jpg'
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
                
                <div className="text-white bg-jade p-12 h-screen overflow-hidden">
                        <h1 className="text-5xl font-bold mb-20">Raw material Supplier Dashboard</h1>
                        {/* <div className="mb-6 text-2xl pt-8">What would you like to do?</div> */}

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div onClick={handleRmsClick} className="cursor-pointer bg-jade  rounded-lg shadow-lg flex flex-col justify-center h-100 ">
                                        <div className="overflow-hidden">
                                                <img src={rawMaterialSupply} alt="Supply Raw Materials" className="rounded-lg shadow-lg"/>
                                        </div>
                                        <button className="text-3xl font-bold rounded-b-lg mb-2 h-32 p-9 text-white bg-sky-800 text-center"><a href='/'>Supply Raw Materials</a></button>
                                </div>
                                <div onClick={handleDrmsClick} className="cursor-pointer bg-jade  rounded-lg shadow-md flex flex-col justify-center h-100 ">
                                        <div className="overflow-hidden">
                                                <img src={Shortage} alt="Shortage of Raw Materials" className="rounded-lg shadow-lg"/>
                                        </div>
                                        <button className="text-3xl font-bold rounded-b-lg mb-2 h-32 p-9 text-white bg-sky-800 text-center"><a href='/'>Insufficient Raw Materials</a></button>
                                </div>
                                <div onClick={handleTrackerClick} className="cursor-pointer bg-jade rounded-lg shadow-md flex flex-col justify-center h-100 ">
                                        <div className="overflow-hidden">
                                                <img src={checkpointsnew} alt="Track Medicines" className="rounded-lg shadow-lg"/>
                                        </div>
                                        <button className="text-3xl font-bold rounded-b-lg mb-2 h-32 p-9 text-white bg-sky-800 text-center"><a href='/'>Track Medicines</a></button>
                                </div>
                        </div>
                </div>
                
        )
}

export default Rms
