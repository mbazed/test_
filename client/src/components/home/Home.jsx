import { useState } from 'react';
import intro from '../../images/intro.jpg'
import Features from '../features/Features';

const Home = () => {
  const [id, setId] = useState('');

  const handleChange = (e) => {
    setId(id, e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-[#0D0D0D] to-[#03396c] text-sky-700">
      <div className="flex w-full">
        
        <div className=" w-1/2 mr-8 mt-8 h-3/4 ">
          <img src={intro} alt="Your Image" className="w-full h-full object-cover" />
        </div>
        
        <div className="w-1/2 mt-20">
          <h1 className="text-3xl font-bold mb-4 tracking-wider font-serif">
            REVOLUTIONIZING THE<br />
            <br />PHARMACEUTICAL SUPPLY CHAIN
          </h1>
          <p className="text-lg mb-4 mt-5">Introducing pharmatrust: The Future of Healthcare</p>

          <div className="flex items-center space-x-4 mt-10 ml-28">
            <input
              type="text"
              placeholder="Enter Medicine ID"
              onChange={(e) => handleChange(e)}
              className="py-2 px-2 border-none text-black"
            />
            <button className="bg-sky-800 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">
              Track Medicines
            </button>
          </div>
          
        </div>
        
      </div>
      
    </div>
    
  );
};

export default Home;
