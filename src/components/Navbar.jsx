import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-indigo-800 text-white py-2 h-14">
      <div className="logo">
        <span className="text-xl font-bold mx-8">item</span>
      </div>
      <ul className="flex gap-7 mx-8 items-center">
        <li className="cursor-pointer hover:font-bold transition-all">Home</li>
        <li className="cursor-pointer hover:font-bold transition-all">Your Task</li>
      </ul>
    </nav>


  );
};

export default Navbar;
