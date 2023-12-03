import React from 'react';
import medicineManufacture from '../../images/manufacturing.jpg'
import trackMedicine from '../../images/checkpoints.jpg'
import { useNavigate} from 'react-router-dom';


const Manufacturer = () => {
        const navigate = useNavigate();

        const handleManufactureClick = () => {
        // Navigate to the Register component when clicking on "Register Stakeholders"
              navigate('/medicineManufacture');
        };

        const handleTrackerClick = () => {
                // Navigate to the Register component when clicking on "Register Stakeholders"
                      navigate('/tracking');
        };

  return (
    <div className="text-black p-12">
      <h1 className="text-5xl font-bold mb-4">Welcome Manufacturer!!</h1>
      <div className="mb-6 text-2xl pt-8">What would you like to do?</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div onClick={handleManufactureClick} className="cursor-pointer bg-white p-6 rounded-lg shadow-md flex flex-col justify-center h-80 overflow-hidden">
          <div className="overflow-hidden">
            <img src={medicineManufacture} alt="manufacturing"/>
          </div>
          <button class="text-xl font-bold mb-2 h-32 p-11 text-white bg-sky-700 text-center">Manufacture medicine</button>
        </div>
        <div onClick={handleTrackerClick} className="cursor-pointer bg-white p-6 rounded-lg shadow-md flex flex-col justify-center h-80 ">
          <div className="overflow-hidden">
          <img src={trackMedicine} alt="manufacturing"/>
          </div>
          <button className="text-xl font-bold mb-2 h-32 p-11 text-white bg-sky-700 text-center"><a href='/'>Track Medicines</a></button>
        </div>
      </div>
    </div>
  );
}

export default Manufacturer;
