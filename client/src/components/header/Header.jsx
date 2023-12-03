import React from 'react';

const Header = () => {
  return (
    <nav className="bg-gradient-to-r from-[#0D0D0D] to-[#03396c] p-4 my-1 flex flex-col md:flex-row items-center justify-between fixed w-full z-10">
      <div>
        <a href="/login" className="text-white font-bold tracking-wider text-2xl hover:text-white">PHARMATRUST</a>
      </div>
      <div className="font-serif flex items-center space-x-4 mt-4 md:mt-0"> 
        <ul className="flex space-x-4">
          <li><a href="/about" className="text-white hover:text-gray-400">ABOUT</a></li>
          <li><a href="/features" className="text-white hover:text-gray-400">FEATURES</a></li>
          <li><a href="/faqs" className="text-white hover:text-gray-400">FAQS</a></li>
        </ul>
        <button className="mt-4 md:mt-0 hover:bg-white hover:text-sky-700 text-white font-bold py-2 px-4 rounded">LOGIN</button>
      </div>
    </nav>
  );
}

export default Header;
