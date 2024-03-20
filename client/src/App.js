import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import Roles from './components/home/Roles.jsx'
import Manufacturer from './components/stakeholders/Manufacturer.jsx';
import Retailers from './components/stakeholders/Retailers.jsx';
import Rms from './components/stakeholders/Rms.jsx';
import Government from './components/stakeholders/Government.jsx';
import Distributors from './components/stakeholders/Distributors.jsx';
import Register from './components/government/Register.jsx';
import Tracker from './components/tracker.jsx';
import ManufacturerMed from './components/manufacturer/ManufacturerMed.jsx';
import SupplyRm from './components/RMS/SupplyRm.jsx';
import DenyRm from './components/RMS/DenyRm.jsx';
import Distribute from './components/Distributor/Distribute.jsx';
import Sell from './components/Retailer/Sell.jsx';
import Order from './components/Retailer/Order.jsx';
import Retail from './components/Retailer/Retail.jsx';

function App() {
  return (
        <Router>
                <div className='App'>
                <Header />
                <Routes>
                        <Route path='/' Component={Home} />
                        <Route path='/Roles' Component={Roles} />
                        <Route path='/government' Component={Government} />
                        <Route path='/register' Component={Register} />
                        <Route path='/rms' Component={Rms} />
                        <Route path='/supplyrms' Component={SupplyRm} />
                        <Route path='/denyrms' Component={DenyRm} />
                        <Route path='/manufacturers' Component={Manufacturer} />
                        <Route path='/medicineManufacture' Component={ManufacturerMed} />
                        <Route path='/distributors' Component={Distributors} />
                        <Route path='/distribute' Component={Distribute} />
                        <Route path='/retailers' Component={Retailers} />
                        <Route path='/retail' Component={Retail}/>
                        <Route path='/sell' Component={Sell}  />
                        <Route path='/order' Component={Order} />
                        <Route path='/track' Component={Tracker} />
                </Routes> 
                </div>
        </Router>
  );
}

export default App;
