import React from "react";

const UserBox = () => {
  return (
    <div className="flex justify-between items-center mb-5 hover:bg-gray-200 cursor-pointer rounded-full py-2 px-1 pr-20 transform transition-colors duration-200">
      <img
        src="https://pbs.twimg.com/profile_images/1483048829217824769/AHnzqB4M_400x400.jpg"
        alt="Profile"
        className="w-11 h-11 rounded-full"
      />
      <div className="flex flex-col">
        <span className="font-bold text-md text-black">Çınar</span>
        <span className="text-sm text-gray-dark">@ciinaarr1881</span>
      </div>

      <div className="flex space-x-1 ml-2">
        <div className="w-1 h-1 bg-gray-800 rounded-full" />
        <div className="w-1 h-1 bg-gray-800 rounded-full" />
        <div className="w-1 h-1 bg-gray-800 rounded-full" />
      </div>
    </div>
  );
};

export default UserBox;
