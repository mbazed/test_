import React, { useState } from 'react'

const Distribute = () => {

        const [medicineID, setMedicineID] = useState('');
        const [description, setDescription] = useState('');

        const handleMedicineID = (e) => {
                setMedicineID(e.target.value);
                console.log(medicineID);
        };

        const handleDescription = (e) => {
                setDescription(e.target.value);
                console.log(description);
        };
        return (
        <div>
                        <h1 className='text-5xl font-bold text-blue-500 mt-16 mb-16'>Distribute Medicine</h1>
                        <div className="grid grid-cols-2 gap-4 drop-shadow-xl">
                                <div className="p-16 drop-shadow-xl">
                                        <label className="p-8 text-4xl" htmlFor="name">Medicine ID</label>
                                        <input 
                                        className="text-3xl border border-black-300 rounded-md"
                                        id="name"
                                        type="text"
                                        onChange={handleMedicineID}
                                        placeholder="Medicine ID"
                                        required
                                        />
                                </div>
                                <div className="p-16 drop-shadow-xl">
                                        <label className="p-8 text-4xl" htmlFor="description">Description</label>
                                        <input 
                                        className="text-3xl border border-black-300 rounded-md"
                                        id="description"
                                        type="text"
                                        onChange={handleDescription}
                                        placeholder="Description"
                                        required
                                        />
                        </div>
                </div>
                <button className='bg-blue-500 text-white px-6 py-3 rounded-md mt-8 hover:bg-blue-600 text-3xl'>Distribute</button>      
        </div>
  )
}

export default Distribute
