// import { useState } from 'react';
// import intro from '../../images/intro.jpg'
// import Features from '../features/Features';

// const Home = () => {
//   const [id, setId] = useState('');

//   const handleChange = (e) => {
//     setId(id, e.target.value);
//     console.log(e.target.value);
//   };

//   return (
//         <div>
//         <div className="h-screen flex justify-center items-center bg-gradient-to-r from-[#0D0D0D] to-[#03396c] text-sky-700">
//         <div className="flex w-full">
                
//                 <div className=" w-1/2 mr-8 mt-8 h-3/4 ">
//                 <img src={intro} alt="Your Image" className="w-full h-full object-cover" />
//                 </div>
                
//                 <div className="w-1/2 mt-20">
//                 <h1 className="text-3xl font-bold mb-4 tracking-wider font-serif">
//                 REVOLUTIONIZING THE<br />
//                 <br />PHARMACEUTICAL SUPPLY CHAIN
//                 </h1>
//                 <p className="text-lg mb-4 mt-5">Introducing pharmatrust: The Future of Healthcare</p>

//                 <div className="flex items-center space-x-4 mt-10 ml-28">
//                 <input
//                 type="text"
//                 placeholder="Enter Medicine ID"
//                 onChange={(e) => handleChange(e)}
//                 className="py-2 px-2 border-none text-black"
//                 />
//                 <button className="bg-sky-800 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">
//                 Track Medicines
//                 </button>
//                 </div>
                
//                 </div>
//         </div>
//         </div>
//         <Features/>
//         </div>
    
//   );
// };

// export default Home;
import React, { useState } from 'react';
import { MdGroups } from 'react-icons/md';
import { GiMedicines } from 'react-icons/gi';
import { CgTrack } from 'react-icons/cg';
import { GrDocumentUpdate } from 'react-icons/gr';
import bgImage from '../../images/bg_image.jpg'
import { useNavigate } from 'react-router-dom';


const Home = () => {
        const navigate=useNavigate();

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

        const backgroundStyles = {
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              };
              
        return (

        <div className="flex flex-wrap items-start p-9 bg-white" /*style={backgroundStyles}*/>
                <div className="max-w-5xl mx-4 my-20">
                        <h1 className="text-7xl font-bold text-blue-500 mb-20">What is PharmaTrust ?</h1>
                        <p className="text-2xl leading-relaxed mt-4 text-gray-700 text-justify">
                        Welcome to PharmaTrust, a pioneering initiative poised to revolutionize the pharmaceutical industry through the transformative 
                        capabilities of blockchain technology. Our mission is centered on establishing a transparent and legalized pharmaceutical supply chain 
                        system, prioritizing patient safety, regulatory compliance, and overall industry integrity. With a focus on blockchain-based platform 
                        development, real-time updates, secure records, and transparent information sharing, PharmaTrust aims to reshape the pharmaceutical
                        landscape. By leveraging the power of blockchain, we ensure tamper-proof records, document vital information, and enhance 
                        transparency and accountability within the pharmaceutical supply chain. Our commitment to pharmaceutical integrity assurance 
                        involves implementing a blockchain-based system to validate drug authenticity, ultimately reducing the risk of counterfeit products 
                        and ensuring patient safety within a regulated and legalized framework. Join us in embracing a future where PharmaTrust's innovative 
                        solutions redefine the standards of security, transparency, and compliance in the pharmaceutical industry.
                        </p>
                </div>
                <div className="flex flex-col max-w-2xl my-16 ml-8 mb-8 ">
                        <h1 className='text-5xl font-bold text-blue-500 mb-6'>Features</h1>
                        <div className="mb-6 p-5 shadow-md transition-all duration-300 hover:shadow-lg rounded-lg">
                                <h1 className="text-3xl mb-2"><MdGroups className="inline-block mr-2" />Add Stakeholders</h1>
                                <p className="text-xl">Option to add manufacturers, raw materials suppliers, distributors, and retailers</p>
                        </div>
                        <div className="mb-6 p-5 shadow-md transition-all duration-300 hover:shadow-lg rounded-lg">
                                <h1 className="text-3xl mb-2"><GiMedicines className="inline-block mr-2" />Order Medicines</h1>
                                <p className="text-xl">Option to order medicine applicable only for retailers</p>
                        </div>
                        <div className="mb-6 p-5 shadow-md transition-all duration-300 hover:shadow-lg rounded-lg">
                                <h1 className="text-3xl mb-2"><CgTrack className="inline-block mr-2" />Track Medicines</h1>
                                <p className="text-xl">Option to update the status of medicine for manufacturers, raw material suppliers, distributors, and retailers</p>
                        </div>
                        <div className="mb-6 p-5 shadow-md transition-all duration-300 hover:shadow-lg rounded-lg">
                                <h1 className="text-3xl mb-2"><GrDocumentUpdate className="inline-block mr-2" />Update Medicines</h1>
                                <p className="text-xl">Option to track any medicine</p>
                        </div>
                </div>
                <div className="flex justify-center items-center w-screen h-56 grid grid-cols-2 gap-2 content-normal mt-32">
                        {/* Container for Consumer */}
                        <div className="p-8 rounded-md shadow-md mr-8 ">
                                <h1 className="text-7xl font-bold mb-36 text-violet-400">Are you a Consumer ?</h1>
                                <label className="block text-gray-700 mb-6 text-4xl">Enter Medicine ID</label>
                                <input
                                className="border border-gray-300 rounded-md p-2 w-full mb-6 text-4xl"
                                id="medicineID"
                                type="text"
                                onChange={handleMedicineID}
                                placeholder="Medicine ID"
                                required
                                />
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-4xl">Track</button>
                        </div>

                        {/* Container for Stakeholders */}
                        <div className="p-6 rounded-md shadow-md">
                                <h1 className="text-7xl font-bold mb-36 text-rose-300">Are you a Stakeholder?</h1>
                                <div className="grid grid-cols-8 gap-3 ">
                                        <div className="col-start-2 col-span-6 mb-16 ">
                                                <button onClick={handleRmsClick} className="bg-blue-500 text-white px-6 py-4 rounded-xl hover:bg-blue-600 text-5xl">Raw Material Supplier</button>
                                        </div>
                                        <div className="col-start-1 col-end-3 mb-16">
                                                <button onClick={handleGovernmentClick} className="bg-blue-500 text-white px-6 py-4 rounded-md hover:bg-blue-600 text-5xl">Government</button>
                                        </div>
                                        <div className='col-end-8 col-span-2'>
                                                <button onClick={handleManufacturersClick} className="bg-blue-500 text-white px-6 py-4 rounded-md hover:bg-blue-600 text-5xl">Manufacturer</button>
                                        </div>
                                        <div className="col-start-1 col-end-3 mb-16">
                                                <button onClick={handleDistributorsClick} className="bg-blue-500 text-white px-6 py-4 rounded-md hover:bg-blue-600 text-5xl">Distributor</button>
                                        </div>
                                        <div className='col-end-8 col-span-2'>
                                                <button onClick={handleRetailersClick} className="bg-blue-500 text-white px-6 py-4 rounded-md hover:bg-blue-600 text-5xl">Retailer</button>
                                        </div>
                                </div>
                        </div>
                </div>
                <div class>

                </div>

        </div>
  );
};

export default Home;




