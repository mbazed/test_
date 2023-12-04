import React from 'react';

const Header = () => {
  return (
    <nav className=" bg-gradient-to-r from-[#0D0D0D] to-[#03396c]    p-8  flex flex-col md:flex-row items-center justify-between   w-full">
      <div>
        <a href="/" className="text-white font-bold tracking-wider text-4xl hover:text-white">PHARMATRUST</a>
      </div>
      <div className="font-serif flex items-center space-x-4 mt-4 md:mt-0"> 
        <ul className="flex space-x-4">
          <li><a href="/about" className="text-white text-2xl hover:text-gray-400">Roles</a></li>
          {/* <li><a href="/features" className="text-2xl text-white hover:text-gray-400">Track Medicine</a></li> */}
          <li><a href="/faqs" className="text-2xl text-white hover:text-gray-400">FAQ'S</a></li>
        </ul>
        <button className="text-2xl mt-4 md:mt-0 hover:bg-white hover:text-sky-700 text-white font-bold py-2 px-4 rounded">Connect Wallet</button>
      </div>
    </nav>
  );
}

export default Header;
