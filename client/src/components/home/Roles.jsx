import React, { useState } from 'react';
// import { MdGroups } from 'react-icons/md';
// import { GiMedicines } from 'react-icons/gi';
// import { CgTrack } from 'react-icons/cg';
// import { GrDocumentUpdate } from 'react-icons/gr';
// import bgImage from '../../images/bg_image.jpg'
import { useNavigate } from 'react-router-dom';


const Home = () => {
        const navigate=useNavigate();

        const handleTracking = () => {
                navigate('/track');
         };
        const handleGovernmentClick = () => {
                      navigate('/government');
        };
        const handleRmsClick = () => {
                      navigate('/rms');
        };
        const handleManufacturersClick = () => {
                      navigate('/manufacturers');
        };
        const handleDistributorsClick = () => {
                      navigate('/distributors');
        };
        const handleRetailersClick = () => {
                      navigate('/retailers');
        };

        const [medicineID, setMedicineID] = useState('');

        const handleMedicineID =(e) =>{
                setMedicineID(e.target.value);
        }

        
              
        return (

        <div className="flex flex-wrap items-start p-20 bg-jade h-full">  
                        {/* Container for Consumer */}
                        <div className="max-w-5xl mx-4 my-20 w-1/2">
                                <h1 className="text-7xl font-bold text-white mb-16">Are you a Consumer ?</h1>
                                <p className="text-2xl leading-relaxed mt-4 text-white text-justify">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <button className="bg-jade text-white px-6 py-4 rounded-md hover:bg-heading text-2xl md:text-5xl mt-10" onClick={handleTracking}>Track Medicine</button>
                        </div>

                        {/* Container for Stakeholders */}
                        <div className="flex flex-col max-w-5xl my-20 ml-8 mb-8 place-content-center w-1/2">
                                <h1 className='text-7xl font-bold text-white mb-6'>Are you a Stakeholder?</h1>
                                <div className="grid  md:grid-cols-1 gap-6 justify-center w-2/3 mx-40">
                                        <button onClick={handleRmsClick} className="bg-jade text-white mt-10 px-6 py-4 rounded-md hover:bg-heading text-2xl md:text-5xl">Raw Material Supplier</button>
                                        <button onClick={handleGovernmentClick} className="bg-jade text-white px-6 py-4 rounded-md hover:bg-heading text-2xl md:text-5xl">Government</button>
                                        <button onClick={handleManufacturersClick} className="bg-jade text-white px-6 py-4 rounded-md hover:bg-heading text-2xl md:text-5xl">Manufacturer</button>
                                        <button onClick={handleDistributorsClick} className="bg-jade text-white px-6 py-4 rounded-md hover:bg-heading text-2xl md:text-5xl">Distributor</button>
                                        <button onClick={handleRetailersClick} className="bg-jade text-white px-6 py-4 rounded-md hover:bg-heading text-2xl md:text-5xl">Retailer</button>

                                </div>

                        </div>

        </div>
  );
};

export default Home;




