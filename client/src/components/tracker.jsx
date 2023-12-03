import React, { useState } from 'react';

const Tracker = () => {
  const [license, setLicense] = useState('');

  const handleLicense = (e) => {
    setLicense(e.target.value);
    console.log(license);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Track Medicine</h1>
      
      <div className="p-4">
        <label className="block mb-2" htmlFor="license">
        Enter License ID
        </label>
        <input
          className="border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="license"
          type="text"
          onChange={handleLicense}
          placeholder="License ID"
          required
        />
      </div>
    </div>
  );
};

export default Tracker;
