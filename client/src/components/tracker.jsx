import React, { useState,useEffect } from 'react';
import Web3 from "web3";
import PharmaTrustABI from "./artifacts/PharmaTrust.json"

const Tracker = () => {
        const [medicineID, setMedicineID] = useState();
        const [currentaccount, setCurrentaccount] = useState("");
        const [loader, setloader] = useState(true);
        const [Data, setData] = useState();
        const [MED, setMED] = useState();
        const [MedStage, setMedStage] = useState();
        const [ID, setID] = useState();
        const [RMS, setRMS] = useState();
        const [MAN, setMAN] = useState();
        const [DIS, setDIS] = useState();
        const [RET, setRET] = useState();
        const [TrackTillSold, showTrackTillSold] = useState(false);
        const [TrackTillRetail, showTrackTillRetail] = useState(false);
        const [TrackTillDistribution, showTrackTillDistribution] = useState(false);
        const [TrackTillManufacture, showTrackTillManufacture] = useState(false);
        const [TrackTillRMS, showTrackTillRMS] = useState(false);
        const [TrackTillOrdered, showTrackTillOrdered] = useState(false);

        const handleMedicineID = (e) => {
                const newMedicineID = e.target.value;
                setMedicineID(newMedicineID);
                console.log(newMedicineID); // Log the updated value directly
        };

        const handleRefresh = () => {
                window.location.reload(); // Refresh the page
        };

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
                window.alert(
                        "Non-Ethereum browser detected. You should consider trying MetaMask!"
                );
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
                    const medStage = {};
                    for (i = 0; i < medCtr; i++) {
                        const medicine = await contract.methods.medAvailable(i + 1).call();
                        const stage = await contract.methods.showStage(i + 1).call();

                        // Use the index of the medAvailable array as the key for the med object
                        med[i + 1] = medicine;
                        medStage[i + 1] = stage;
                    }
                    setMED(med);
                    setMedStage(medStage);
                    console.log(medStage);
                    const rmsCtr = await contract.methods.rmsCount().call();
                    const rms = {};
                    for (i = 0; i < rmsCtr; i++) {
                        rms[i + 1] = await contract.methods.RMS(i + 1).call();
                    }
                    setRMS(rms);
                    const manCtr = await contract.methods.manCount().call();
                    const man = {};
                    for (i = 0; i < manCtr; i++) {
                        man[i + 1] = await contract.methods.MAN(i + 1).call();
                    }
                    setMAN(man);
                    const disCtr = await contract.methods.distCount().call();
                    const dis = {};
                    for (i = 0; i < disCtr; i++) {
                        dis[i + 1] = await contract.methods.DIST(i + 1).call();
                    }
                    setDIS(dis);
                    const retCtr = await contract.methods.phCount().call();
                    const ret = {};
                    for (i = 0; i < retCtr; i++) {
                        ret[i + 1] = await contract.methods.RET(i + 1).call();
                    }
                    setRET(ret);
                    setloader(false);
                }
                else {
                    window.alert('The smart contract is not deployed to current network')
                }
        }

        const handlerSubmit = async (event) => {
                event.preventDefault();
                var ctr = await Data.methods.medicineCount().call();
                console.log(medicineID);
                if (!((medicineID > 0) && (medicineID <= ctr)))
                    alert("Invalid Medicine ID!!!");
                else {
                    // eslint-disable-next-line
                    console.log(medicineID)
                    console.log(MED[medicineID]);
                    if (MED[medicineID].stage == 6)
                        showTrackTillSold(true);
                    // eslint-disable-next-line
                    else if (MED[medicineID].stage == 5)
                        showTrackTillRetail(true);
                    // eslint-disable-next-line
                    else if (MED[medicineID].stage == 4)
                        showTrackTillDistribution(true);
                    // eslint-disable-next-line
                    else if (MED[medicineID].stage == 3)
                        showTrackTillManufacture(true);
                    // eslint-disable-next-line
                    else if (MED[medicineID].stage == 2)
                        showTrackTillRMS(true);
                    else
                        showTrackTillOrdered(true);
                }
                console.log(MED[medicineID]);
                console.log(MED[medicineID].stage);
                console.log(TrackTillManufacture);
            }        
            const renderStageTable = () => {
                if (TrackTillSold && MED && MED[medicineID] && RET && MAN && DIS && RMS) {
                    return (
                        <div>
                                <table className="w-full mt-4 border border-gray-200">
                                        <thead className='bg-gray-100'>
                                        <tr>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">Stage</th>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">Stakeholder Type</th>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">Stakeholder ID</th>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">Name</th>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">License</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className='bg-white'>
                                                        <td className="border border-gray-200 px-4 py-2 text-2xl">Sold</td>
                                                        <td className= "border border-gray-200 px-4 py-2 text-2xl">Retailer</td>
                                                        <td className= "border border-gray-200 px-4 py-2 text-2xl">{MED[medicineID].RETid}</td>
                                                        <td className= "border border-gray-200 px-4 py-2 text-2xl">{RET[MED[medicineID].RETid].name}</td>
                                                        <td className="border border-gray-200 px-4 py-2 text-2xl">{RET[MED[medicineID].RETid].place}</td>
                                                </tr>
                                        <tr className='bg-gray-100'>
                                                        <td className="border border-gray-200 px-4 py-2 text-2xl">Retail</td>
                                                        <td className= "border border-gray-200 px-4 py-2 text-2xl">Retailer</td>
                                                        <td className= "border border-gray-200 px-4 py-2 text-2xl">{MED[medicineID].RETid}</td>
                                                        <td className= "border border-gray-200 px-4 py-2 text-2xl">{RET[MED[medicineID].RETid].name}</td>
                                                        <td className="border border-gray-200 px-4 py-2 text-2xl">{RET[MED[medicineID].RETid].place}</td>
                                                </tr>
                                        <tr className="bg-white">
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">Distribution</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">Distributor</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{MED[medicineID].DISTid}</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{DIS[MED[medicineID].DISTid].name}</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{DIS[MED[medicineID].DISTid].place}</td>
                                        </tr>
                                        <tr className="bg-gray-100">
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">Manufacturing</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">Manufacturer</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{MED[medicineID].MANid}</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{MAN[MED[medicineID].MANid].name}</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{MAN[MED[medicineID].MANid].place}</td>
                                        </tr>
                                        <tr className="bg-white">
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">Raw material Supplying</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">Raw Material Supplier</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{MED[medicineID].RMSid}</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{RMS[MED[medicineID].RMSid].name}</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{RMS[MED[medicineID].RMSid].place}</td>
                                        </tr >
                                        </tbody>
                                </table>
                        </div>
                    );
                } else if (TrackTillRetail && MED && MED[medicineID] && RET && MAN && DIS && RMS) {
                    return (
                        <div>
                        <table className="w-full mt-4 border border-gray-200">
                                <thead className='bg-gray-100'>
                                <tr>
                                        <th className="border border-gray-200 px-4 py-2 text-2xl text-center">Stage</th>
                                        <th className="border border-gray-200 px-4 py-2 text-2xl text-center">Stakeholder Type</th>
                                        <th className="border border-gray-200 px-4 py-2 text-2xl text-center">Stakeholder ID</th>
                                        <th className="border border-gray-200 px-4 py-2 text-2xl text-center">Name</th>
                                        <th className="border border-gray-200 px-4 py-2 text-2xl text-center">License</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className='bg-gray-100'>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">Retail</td>
                                                <td className= "border border-gray-200 px-4 py-2 text-2xl">Retailer</td>
                                                <td className= "border border-gray-200 px-4 py-2 text-2xl">{MED[medicineID].RETid}</td>
                                                <td className= "border border-gray-200 px-4 py-2 text-2xl">{RET[MED[medicineID].RETid].name}</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{RET[MED[medicineID].RETid].place}</td>
                                        </tr>
                                <tr className="bg-white">
                                        <td className="border border-gray-200 px-4 py-2 text-2xl">Distribution</td>
                                        <td className="border border-gray-200 px-4 py-2 text-2xl">Distributor</td>
                                        <td className="border border-gray-200 px-4 py-2 text-2xl">{MED[medicineID].DISTid}</td>
                                        <td className="border border-gray-200 px-4 py-2 text-2xl">{DIS[MED[medicineID].DISTid].name}</td>
                                        <td className="border border-gray-200 px-4 py-2 text-2xl">{DIS[MED[medicineID].DISTid].place}</td>
                                </tr>
                                <tr className="bg-gray-100">
                                        <td className="border border-gray-200 px-4 py-2 text-2xl">Manufacturing</td>
                                        <td className="border border-gray-200 px-4 py-2 text-2xl">Manufacturer</td>
                                        <td className="border border-gray-200 px-4 py-2 text-2xl">{MED[medicineID].MANid}</td>
                                        <td className="border border-gray-200 px-4 py-2 text-2xl">{MAN[MED[medicineID].MANid].name}</td>
                                        <td className="border border-gray-200 px-4 py-2 text-2xl">{MAN[MED[medicineID].MANid].place}</td>
                                </tr>
                                <tr className="bg-white">
                                        <td className="border border-gray-200 px-4 py-2 text-2xl">Raw material Supplying</td>
                                        <td className="border border-gray-200 px-4 py-2 text-2xl">Raw Material Supplier</td>
                                        <td className="border border-gray-200 px-4 py-2 text-2xl">{MED[medicineID].RMSid}</td>
                                        <td className="border border-gray-200 px-4 py-2 text-2xl">{RMS[MED[medicineID].RMSid].name}</td>
                                        <td className="border border-gray-200 px-4 py-2 text-2xl">{RMS[MED[medicineID].RMSid].place}</td>
                                </tr >
                                </tbody>
                        </table>
                </div>
                    );
                } else if (TrackTillDistribution && MED && MED[medicineID] && MAN && DIS && RMS) {
                    return (
                        <div>
                                <table className="w-full mt-4 border border-gray-200">
                                        <thead className='bg-gray-100'>
                                        <tr>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">Stage</th>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">Stakeholder Type</th>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">Stakeholder ID</th>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">Name</th>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">License</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="bg-white">
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">Distribution</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">Distributor</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{MED[medicineID].DISTid}</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{DIS[MED[medicineID].DISTid].name}</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{DIS[MED[medicineID].DISTid].place}</td>
                                        </tr>
                                        <tr className="bg-gray-100">
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">Manufacturing</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">Manufacturer</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{MED[medicineID].MANid}</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{MAN[MED[medicineID].MANid].name}</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{MAN[MED[medicineID].MANid].place}</td>
                                        </tr>
                                        <tr className="bg-white">
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">Raw material Supplying</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">Raw Material Supplier</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{MED[medicineID].RMSid}</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{RMS[MED[medicineID].RMSid].name}</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{RMS[MED[medicineID].RMSid].place}</td>
                                        </tr >
                                        </tbody>
                                </table>
                        </div>

                    );
                } else if (TrackTillManufacture && MED && MED[medicineID] && MAN && RMS) {
                    return (
                        <div>
                                <table className="w-full mt-4 border border-gray-200">
                                        <thead className='bg-gray-100'>
                                        <tr>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">Stage</th>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">Stakeholder Type</th>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">Stakeholder ID</th>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">Name</th>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">License</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                       <tr className="bg-gray-100">
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">Manufacturing</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">Manufacturer</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{MED[medicineID].MANid}</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{MAN[MED[medicineID].MANid].name}</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{MAN[MED[medicineID].MANid].place}</td>
                                        </tr>
                                        <tr className="bg-white">
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">Raw material Supplying</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">Raw Material Supplier</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{MED[medicineID].RMSid}</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{RMS[MED[medicineID].RMSid].name}</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{RMS[MED[medicineID].RMSid].place}</td>
                                        </tr >
                                        </tbody>
                                </table>
                        </div>

                    );
                } else if (TrackTillRMS && MED && MED[medicineID] && RMS) {
                    return (
                        <div>
                        <table className="w-full mt-4 border border-gray-200">
                                        <thead className='bg-gray-100'>
                                        <tr>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">Stage</th>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">Stakeholder Type</th>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">Stakeholder ID</th>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">Name</th>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">License</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="bg-white">
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">Raw material Supplying</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">Raw Material Supplier</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{MED[medicineID].RMSid}</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{RMS[MED[medicineID].RMSid].name}</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">{RMS[MED[medicineID].RMSid].place}</td>
                                        </tr >
                                        </tbody>
                                </table>
                        </div>
                    );
                } else if (TrackTillOrdered && MED && MED[medicineID] ) {
                    return (
                        <div>
                                <table className="w-full mt-4 border border-gray-200">
                                        <thead className='bg-gray-100'>
                                        <tr>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">Stage</th>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">Stakeholder Type</th>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">Stakeholder ID</th>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">Name</th>
                                                <th className="border border-gray-200 px-4 py-2 text-2xl text-center">License</th>
                                        </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                      <tr className="bg-white">
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">Medicine Proccesing</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">Processing</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">Processing</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">Processing</td>
                                                <td className="border border-gray-200 px-4 py-2 text-2xl">Processing</td>
                                        </tr>
                                        </tbody>
                                </table>
                        </div>
                    );
                } else {
                    return null;
                }
            }

        return (
                <div className="p-8">
                        <h1 className="text-6xl font-bold mb-8 text-blue-500">Track Medicine</h1>
                        
                        <div className="p-4">
                                <label className="block mb-8 text-4xl " htmlFor="license">Enter Medicine ID</label>
                                <input
                                className="border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-3xl"
                                id="license"
                                type="text"
                                onChange={handleMedicineID}
                                placeholder="Medicine ID"
                                required
                                />
                        </div>
                        <button className='bg-blue-500 text-white px-6 py-3 rounded-md mt-8 hover:bg-blue-600 text-3xl' onClick={handlerSubmit}>Track</button>
                        <table className="w-full mt-4 border border-gray-200">
                                <thead>
                                <tr className="bg-gray-100">
                                        <th className="border border-gray-200 px-4 py-2 text-2xl">Medicine ID</th>
                                        <th className="border border-gray-200 px-4 py-2 text-2xl">Name</th>
                                        <th className="border border-gray-200 px-4 py-2 text-2xl">Date of Expiry</th>
                                        <th className="border border-gray-200 px-4 py-2 text-2xl">Description</th>
                                        <th className="border border-gray-200 px-4 py-2 text-2xl">Current Stage</th>
                                </tr>
                                </thead>
                                <tbody>
                                {MED && Object.values(MED).map((med, index) => (
                                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                                        <td className="border border-gray-200 px-4 py-2 text-2xl">{med.id}</td>
                                        <td className="border border-gray-200 px-4 py-2 text-2xl">{med.name}</td>
                                        <td className="border border-gray-200 px-4 py-2 text-2xl">{med.expDate}</td>
                                        <td className="border border-gray-200 px-4 py-2 text-2xl">{med.description}</td>
                                        <td className="border border-gray-200 px-4 py-2 text-2xl">{MedStage[index+1]}</td>
                                        </tr>
                                ))}
                                </tbody>
                        </table>

                        <hr />
                        
                        {renderStageTable()}
                        <button className="bg-gray-500 text-white px-6 py-3 rounded-md ml-4 hover:bg-gray-600 text-3xl font-bold mt-4" onClick={handleRefresh}>Refresh</button>
                </div>
                );
        };

export default Tracker;
