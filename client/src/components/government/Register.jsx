import { useState,useEffect } from 'react';
import Web3 from "web3";
import SupplyChainABI from "../artifacts/PharmaTrust.json"
import { useHistory, useNavigate } from "react-router-dom"

const Register = () => {

        const useNavigate = useNavigate()
        useEffect(() => {
            loadWeb3();
            loadBlockchaindata();
        }, [])
        const [currentaccount, setCurrentaccount] = useState("");
        const [loader, setloader] = useState(true);
        const [SupplyChain, setSupplyChain] = useState();
        

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

        const loadWeb3 = async () => {
                if (window.ethereum) {
                    window.web3 = new Web3(window.ethereum);
                    await window.ethereum.enable();
                } else if (window.web3) {
                    window.web3 = new Web3(window.web3.currentProvider);
                } else {
                    window.alert(
                        "Non-Ethereum browser detected. You should consider trying MetaMask!"
                    );
                }
        };
        const loadBlockchaindata =async =>{
                
        }
        const handleRegistration = async () => {
                try {
                    // Determine which option is selected
                    switch (industry) {
                        case "r": // Raw Material Supplier
                            await registerRawMaterialSupplier();
                            break;
                        case "m": // Manufacturer
                            await registerManufacturer();
                            break;
                        case "d": // Distributor
                            await registerDistributor();
                            break;
                        case "re": // Retailer
                            await registerRetailer();
                            break;
                        default:
                            // Invalid option selected
                            alert("Invalid industry option:", industry);
                            break;
                    }
                } catch (error) {
                    // Handle errors during registration
                    alert("Error during registration:", error);
                    // Optionally, provide feedback to the user (e.g., show an error message)
                }
            };
            
            const registerRawMaterialSupplier = async () => {
                // Call the smart contract method to register the raw material supplier
                const receipt = await SupplyChain.methods.addRMS(wallet, name, license).send({ from: currentaccount });
                // Handle successful registration
                console.log("Raw Material Supplier registered:", receipt);
                // Optionally, provide feedback to the user (e.g., show a success message)
            };
            
            const registerManufacturer = async () => {
                // Call the smart contract method to register the manufacturer
                const receipt = await SupplyChain.methods.addManufacturer(wallet, name, license).send({ from: currentaccount });
                // Handle successful registration
                console.log("Manufacturer registered:", receipt);
                // Optionally, provide feedback to the user (e.g., show a success message)
            };
            
            const registerDistributor = async () => {
                // Call the smart contract method to register the distributor
                const receipt = await SupplyChain.methods.addDistributor(wallet, name, license).send({ from: currentaccount });
                // Handle successful registration
                console.log("Distributor registered:", receipt);
                // Optionally, provide feedback to the user (e.g., show a success message)
            };
            
            const registerRetailer = async () => {
                // Call the smart contract method to register the retailer
                const receipt = await SupplyChain.methods.addRetailer(wallet, name, license).send({ from: currentaccount });
                // Handle successful registration
                console.log("Retailer registered:", receipt);
                // Optionally, provide feedback to the user (e.g., show a success message)
            };
            
        

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
                                                        <option value="r">Raw Material Supplier</option>
                                                        <option value="m">Manufacturer</option>
                                                        <option value="d">Distributer</option>
                                                        <option value="re">Retailer</option>
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
                        <button className='border-4 border-green-400 bg-white text-green-400 px-6 py-3 rounded-md mt-8 hover:bg-green-300 hover:text-white transition-all duration-300 text-3xl font-bold' onSubmit={handleRegistration}>Register</button>

                </div>
        );
}

export default Register;
