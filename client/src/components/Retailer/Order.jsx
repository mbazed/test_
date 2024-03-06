import React, { useState } from 'react'

const Order = () => {
    const [medname, setMedname] = useState(" ");
    const [doe, setDoe] = useState(" ");
    const [description, setDescription] = useState(" ");

    const handleMedname = (e) => {
        console.log(e.target.value);
        setMedname(e.target.value);
        // console.log(medicineID);
    };

    const handleDoe = (e) => {
        console.log(e.target.value);
        let newDate = new Date(e.target.value ).toDateString()
        console.log(newDate);
        setDoe(newDate);
    };

    const handleDescription = (e) => {
        setDescription(e.target.value);
        console.log(description);
    };

        

  return (
    <div>
                <h1 className='text-6xl text-center font-bold text-blue-500 mt-16 mb-16'>Order Medicine</h1>
                <div className="flex ">
                <div className="w-1/2">
                    <div className="p-16 drop-shadow-xl">
                        <label className="p-8 text-4xl font-bold" htmlFor="name">Medicine Name</label>
                        <input 
                            className="text-3xl border border-black-300 rounded-md"
                            id="name"
                            type="text"
                            onChange={handleMedname}
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="p-16 drop-shadow-xl">
                        <label className="p-8 font-bold text-4xl" htmlFor="description">Description</label>
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
                
                <div className="w-1/2">
                    <div className="p-16 drop-shadow-xl">
                        <label className="p-8 text-4xl font-bold" htmlFor="doe">Date of Expiry</label>
                        <input 
                            className="text-3xl border border-black-300 rounded-md"
                            id="doe"
                            type="date"
                            onChange={handleDoe}
                            placeholder="Date of Expiry"
                            required
                        />
                    </div>
                </div>
            </div>    
            <button className='bg-blue-500 text-white px-6 py-3 rounded-md mt-8 hover:bg-blue-600 text-3xl'>Order</button>        
    </div>
  )
}

export default Order
