import React from "react";
import { LikeIcon, ReplyIcon, ReTweetIcon, ShareIcon } from "../icons/Icon";

const FeedItem2 = () => {
  return (
    
    <article className="flex space-x-2 border-b border-gray-extraLight px-4 py-3 cursor-pointer">
      <img
        src="https://pbs.twimg.com/profile_images/502368178941345792/CIhsSkas_400x400.jpeg"
        alt="Profile"
        className="w-11 h-11 rounded-full"
      />
      <div className="flex-1">
        <div className="flex items-center text-sm">
          <h4 className="font-bold">çArşı</h4>
          <span className="ml-1 text-gray-dark">@forzabesiktas</span>
          <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full" />
          <span className="text-gray-dark">4 sa</span>
        </div> 
        <p className="mt-2 text-gray-900 text-sm">
            özkaynak kurtarır geleceği...
        </p>

        <img
          className="-ml-6 my-2 rounded-xl max-h-96 mr-6 "
          src="https://pbs.twimg.com/media/FJSX_CmXwAIjYa_?format=jpg&name=medium"
          alt="Önder Karaveli"
        />
        <ul className="-ml-6 mt-3 flex justify-between max-w-md">
            <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
                    <ReplyIcon className="w-5 h-5 group-hover:text-primary-base" />
                </div>
                <span className="group-hover:text-primary-base">25  </span>
            </li>

            <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-200">
                    <ReTweetIcon className="w-5 h-5 group-hover:text-green-400" />
                </div>
                <span className="group-hover:text-green-400">160</span>
            </li>

            <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-pink-200">
                    <LikeIcon className="w-5 h-5 group-hover:text-pink-400" />
                </div>
                <span className="group-hover:text-pink-400">6,8 B</span>
            </li>

            <li className="-ml-2 flex items-center space-x-2 text-gray-dark text-sm group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
                    <ShareIcon className="w-5 h-5 group-hover:text-primary-base" />
                </div>
            </li>
        </ul>
      </div>
    </article>
    
  );
};

export default FeedItem2;
