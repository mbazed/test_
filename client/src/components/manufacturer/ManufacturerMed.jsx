import { useState } from 'react';

const ManufacturerMed = () => {
    const [medicineID, setMedicineID] = useState('');
    const [quantity, setQuantity] = useState('');
    const [doe, setDoe] = useState('');
    const [description, setDescription] = useState('');

    const handleMedicineID = (e) => {
        setMedicineID(e.target.value);
        console.log(medicineID);
    };

    const handleQuantity = (e) => {
        setQuantity(e.target.value);
        console.log(quantity);
    };

    const handleDoe = (e) => {
        setDoe(e.target.value);
        console.log(doe);
    };

    const handleDescription = (e) => {
        setDescription(e.target.value);
        console.log(description);
    };

    return (
        <div>
            <h1>Manufacture Medicine</h1>
            <div className="flex ">
                <div className="w-1/2">
                    <div className="p-16">
                        <label className="p-8 " htmlFor="name">MedicineID</label>
                        <input 
                            className=""
                            id="name"
                            type="text"
                            onChange={handleMedicineID}
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="p-16">
                        <label className="p-8" htmlFor="quantity">Quantity</label>
                        <input 
                            className=""
                            id="quantity"
                            type="text"
                            onChange={handleQuantity}
                            placeholder="Quantity"
                            required
                        />
                    </div>
                </div>
                
                <div className="w-1/2">
                    <div className="p-16">
                        <label className="p-8" htmlFor="doe">Date of Expiry</label>
                        <input 
                            className=""
                            id="doe"
                            type="text"
                            onChange={handleDoe}
                            placeholder="Date of Expiry"
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

export default ManufacturerMed;
