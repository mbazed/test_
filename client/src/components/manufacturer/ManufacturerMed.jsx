import React, { useState,useEffect } from 'react'
import Web3 from "web3";
import PharmaTrustABI from "../artifacts/PharmaTrust.json"

const ManufacturerMed = () => {

        const [medicineID, setMedicineID] = useState('');
        const [description, setDescription] = useState('');
        const [quantity, setQuantity] = useState(" ");
        const [doe, setDoe] = useState(" ");
        const [currentaccount, setCurrentaccount] = useState("");
        const [loader, setloader] = useState(true);
        const [Data, setData] = useState();
        const [MED, setMED] = useState();
        const [MedStage, setMedStage] = useState();
        const [ID, setID] = useState();

        useEffect(() => {
                loadWeb3();
                loadBlockchaindata();

                // Listen for account changes in MetaMask
                window.ethereum.on('accountsChanged', handleAccountsChanged);

                // Cleanup function to remove the event listener
                return () => {
                        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
                        };
                }, [])

                const handleAccountsChanged = (accounts) => {
                        // Reload the page when the connected account changes
                        window.location.reload();
                };

        const loadWeb3 = async () => {
                if (window.ethereum) {
                        window.web3 = new Web3(window.ethereum);
                        await window.ethereum.enable();
                } else if (window.web3) {
                        window.web3 = new Web3(window.web3.currentProvider);
                } else {
                        window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
                }
        };
        const loadBlockchaindata = async () => {
                setloader(true);
                const web3 = window.web3;
                const accounts = await web3.eth.getAccounts();
                const account = accounts[0];
                setCurrentaccount(account);
                const networkId = await web3.eth.net.getId();
                const networkData = PharmaTrustABI.networks[networkId];
                if (networkData) {
                        const contract = new web3.eth.Contract(PharmaTrustABI.abi, networkData.address);
                        setData(contract);
                        var i;
                        const medCtr = await contract.methods.medicineCount().call();
                        const med = {};
                        const medStage = [];
                        for (i = 0; i < medCtr; i++) {
                                med[i] = await contract.methods.medAvailable(i + 1).call();
                                medStage[i] = await contract.methods.showStage(i + 1).call();
                        }
                        setMED(med);
                        setMedStage(medStage);
                        setloader(false);
                }
                else {
                        window.alert('The smart contract is not deployed to current network')
                }
        }

        const handlerSubmitManufacturing = async (event) => {
                event.preventDefault();
                try {
                    var reciept = await Data.methods.Manufacturing(medicineID).send({ from: currentaccount });
                    if (reciept) {
                        loadBlockchaindata();
                    }
                }
                catch (err) {
                    alert("An error occured!!!")
                }
        }

        const handleMedicineID = (e) => {
                console.log(e.target.value);
                setMedicineID(e.target.value);
                // console.log(medicineID);
        };

        const handleQuantity = (e) => {
                setQuantity(e.target.value);
                console.log(quantity);
        };

        const handleDoe = (e) => {
                console.log(e.target.value);
                setDoe(e.target.value);
        };

        const handleDescription = (e) => {
                setDescription(e.target.value);
                console.log(description);
        };

    return (
        <div>
            <h1 className='text-6xl text-center font-bold text-blue-500 mt-16 mb-16'>Manufacture Medicine</h1>
            <div className="flex ">
                <div className="w-1/2">
                    <div className="p-16 drop-shadow-xl">
                        <label className="p-8 text-4xl font-bold" htmlFor="name">MedicineID</label>
                        <input 
                            className="text-3xl border border-black-300 rounded-md"
                            id="id"
                            type="text"
                            onChange={handleMedicineID}
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="p-16 drop-shadow-xl">
                        <label className="p-8 text-4xl font-bold" htmlFor="quantity">Quantity</label>
                        <input 
                            className="text-3xl border border-black-300 rounded-md"
                            id="quantity"
                            type="text"
                            onChange={handleQuantity}
                            placeholder="Quantity"
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
            </div>
            <button className='bg-blue-500 text-white px-6 py-3 rounded-md mt-8 hover:bg-blue-600 text-3xl' onClick={handlerSubmitManufacturing}>Manufacture</button>
        </div>
    );
}

export default ManufacturerMed;
