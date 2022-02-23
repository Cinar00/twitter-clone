import React from "react";
import { LikeIcon, ReplyIcon, ReTweetIcon, ShareIcon } from "../icons/Icon";

const FeedItem = () => {
  return (
    
    <article className="flex space-x-2 border-b border-gray-extraLight px-4 py-3 cursor-pointer">
      <img
        src="https://pbs.twimg.com/profile_images/1483048829217824769/AHnzqB4M_400x400.jpg"
        alt="Profile"
        className="w-11 h-11 rounded-full"
      />
      <div className="flex-1">
        <div className="flex items-center text-sm">
          <h4 className="font-bold">Çınar</h4>
          <span className="ml-1 text-gray-dark">@ciinaarr1881</span>
          <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full" />
          <span className="text-gray-dark">1 sa</span>
        </div> 
        <p className="mt-2 text-gray-900 text-sm">
          "Düşünün. <br />
          Çünkü henüz yasaklanmadı."
          <br /> <br />
          <b> 1984, George Orwell </b>
        </p>

        <img
          className="-ml-6 my-2 rounded-xl max-h-96 mr-6 "
          src="https://lynxotic.com/wp-content/uploads/2019/06/Orwell.gif"
          alt="George Orwell"
        />
        <ul className="-ml-6 mt-3 flex justify-between max-w-md">
            <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
                    <ReplyIcon className="w-5 h-5 group-hover:text-primary-base" />
                </div>
                <span className="group-hover:text-primary-base">654</span>
            </li>

            <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-200">
                    <ReTweetIcon className="w-5 h-5 group-hover:text-green-400" />
                </div>
                <span className="group-hover:text-green-400">12 B</span>
            </li>

            <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-pink-200">
                    <LikeIcon className="w-5 h-5 group-hover:text-pink-400" />
                </div>
                <span className="group-hover:text-pink-400">87 B</span>
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

export default FeedItem;
