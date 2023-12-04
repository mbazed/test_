import React, { useState } from 'react';

const Tracker = () => {
  const [license, setLicense] = useState('');

  const handleLicense = (e) => {
    setLicense(e.target.value);
    console.log(license);
  };

  return (
    <div className="p-8">
        <h1 className="text-6xl font-bold mb-8 text-blue-500">Track Medicine</h1>
        
        <div className="p-4">
                <label className="block mb-8 text-4xl " htmlFor="license">Enter Medicine ID</label>
                <input
                className="border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-3xl"
                id="license"
                type="text"
                onChange={handleLicense}
                placeholder="Medicine ID"
                required
                />
        </div>
        <button className='bg-blue-500 text-white px-6 py-3 rounded-md mt-8 hover:bg-blue-600 text-3xl'>Track</button>
    </div>
  );
};

export default Tracker;
