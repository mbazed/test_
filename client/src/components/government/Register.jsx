import { useState } from 'react';

const Register = () => {
    const [name, setName] = useState('');
    const [industry, setIndustry] = useState('');
    const [wallet, setWallet] = useState('');
    const [license, setLicense] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
        console.log(name);
    }

    const handleIndustry = (e) => {
        setIndustry(e.target.value);
        console.log(industry);
    }

    const handleWallet = (e) => {
        setWallet(e.target.value);
        console.log(wallet);
    }

    const handleLicense = (e) => {
        setLicense(e.target.value);
        console.log(license);
    }

    return (
        <div className="">
                <h1 className="text-6xl text-center font-bold text-blue-500 mt-16 mb-16">Register Stakeholders</h1>
                <div className="flex">
                        <div className="w-1/2 ">
                                <div className="p-16 drop-shadow-xl">
                                        <label className="p-8 text-4xl font-bold" htmlFor="name">Company Name</label>
                                        <input 
                                                className="text-3xl border border-black-300 rounded-md"
                                                id="name"
                                                type="text"
                                                onChange={handleName}
                                                placeholder="Name"
                                                required
                                        />
                                </div>
                                <div className="p-16 drop-shadow-xl">
                                        <label className="p-8 text-4xl font-bold" htmlFor="wallet">Wallet address</label>
                                        <input 
                                                className="text-3xl border border-black-300 rounded-md"
                                                id="wallet"
                                                type="text"
                                                onChange={handleWallet}
                                                placeholder="Wallet address"
                                                required
                                        />
                                </div>
                        </div>
                
                        <div className="w-1/2">
                                <div className="p-16 drop-shadow-xl">
                                        <label className="p-8 text-4xl font-bold" htmlFor="industry">Stakeholder</label>
                                        <select 
                                                className="text-3xl border border-black-300 rounded-md"
                                                onChange={handleIndustry}
                                                required
                                        >
                                                <option value="">Select an option</option>
                                                <option value="o">Raw Material Supplier</option>
                                                <option value="f">Manufacturer</option>
                                                <option value="m">Distributer</option>
                                                <option value="o">Retailer</option>
                                        </select>
                                </div>
                                <div className="p-16 drop-shadow-xl">
                                        <label className="p-8 text-4xl font-bold" htmlFor="license">License ID</label>
                                        <input 
                                                className="text-3xl border border-black-300 rounded-md"
                                                id="license"
                                                type="text"
                                                onChange={handleLicense}
                                                placeholder="License ID"
                                                required
                                        />
                                </div>
                        </div>
                </div>
                <button className='border-4 border-green-400 bg-white text-green-400 px-6 py-3 rounded-md mt-8 hover:bg-green-300 hover:text-white transition-all duration-300 text-3xl font-bold'>Register</button>

        </div>
    );
}

export default Register;
