import React, { useState } from 'react'

const DenyRm = () => {
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
                <h1>Deny Raw Materials</h1>
                <div className="flex">
                    <div className="w-1/2 flex">
                        <div className="p-16">
                            <label className="p-8" htmlFor="name">Medicine ID</label>
                            <input 
                                className=""
                                id="name"
                                type="text"
                                onChange={handleMedicineID}
                                placeholder="Medicine ID"
                                required
                            />
                        </div>
                        <div className="p-16">
                            <label className="p-8" htmlFor="description">Description</label>
                            <input 
                                className=""
                                id="description"
                                type="text"
                                onChange={handleDescription}
                                placeholder="Description"
                                required
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default DenyRm
