

import React from 'react';
import { BsBox } from 'react-icons/bs';

const Features = () => {
  return (
    <div className="text-black p-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Features</h1>
      <p className="text-lg mb-8 text-center">Explore the powerful features of our Pharmaceutical supply chain website using Blockchain</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-xl font-bold mb-4"><BsBox className="inline-block mr-2" />Add Stakeholders</h1>
          <p>Option to add manufacturers, raw materials suppliers, distributors, and retailers</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-xl font-bold mb-4"><BsBox className="inline-block mr-2" />Order Medicine</h1>
          <p>Option to order medicine applicable only for retailers</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-xl font-bold mb-4"><BsBox className="inline-block mr-2" />Update Status Of Medicine</h1>
          <p>Option to update the status of medicine for manufacturers, raw material suppliers, distributors, and retailers</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-xl font-bold mb-4"><BsBox className="inline-block mr-2" />Track Medicine</h1>
          <p>Option to track any medicine</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
