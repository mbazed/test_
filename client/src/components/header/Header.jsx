import React from 'react';

const Header = () => {
  return (
    <div className="p-9 flex flex-col md:flex-row items-center justify-between bg-heading w-full">
      <div>
        <a href="/" className="text-white font-bold tracking-wider text-6xl transform transition-transform hover:scale-150">PHARMATRUST</a>
      </div>
      <div className="font-serif flex items-center space-x-4 mt-4 md:mt-0"> 
        <ul className="flex space-x-8 text-4xl">
        <li><a href="/" className="text-white hover:text-jade transform transition-transform hover:scale-110">Home</a></li>
          <li><a href="/Roles" className="text-white text-4xl hover:text-jade">Roles</a></li>
          {/* <li><a href="/features" className="text-2xl text-white hover:text-gray-400">Track Medicine</a></li> */}
          <li><a href="/" className="text-white hover:text-jade">FAQ'S</a></li>
        </ul>
        {/* <button className="text-4xl mt-4 md:mt-0 hover:bg-white hover:text-jade text-white font-bold py-2 px-4 rounded">Connect Wallet</button> */}
      </div>
    </div>
  );
}

export default Header;
