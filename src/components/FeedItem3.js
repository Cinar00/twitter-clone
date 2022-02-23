import React from "react";
import { LikeIcon, ReplyIcon, ReTweetIcon, ShareIcon } from "../icons/Icon";

const FeedItem3 = () => {
  return (
    
    <article className="flex space-x-2 border-b border-gray-extraLight px-4 py-3 cursor-pointer">
      <img
        src="https://pbs.twimg.com/profile_images/1468274887257206784/mTKztNsk_400x400.jpg"
        alt="Profile"
        className="w-11 h-11 rounded-full"
      />
      <div className="flex-1">
        <div className="flex items-center text-sm">
          <h4 className="font-bold">thesimsek</h4>
          <span className="ml-1 text-gray-dark">@thesimsee</span>
          <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full" />
          <span className="text-gray-dark">6 Ağu 2018</span>
        </div> 
        <p className="mt-2 text-gray-900 text-sm">
            "Eğer bir gün benim sözlerim bilimle ters düşerse bilimi seçiniz."
        </p>

        <img
          className="-ml-6 my-2 rounded-xl max-h-96 mr-6 "
          src="https://pbs.twimg.com/media/Dj6iLj6X0AAalG5?format=jpg&name=medium"
          alt="Atatürk"
        />
        <ul className="-ml-6 mt-3 flex justify-between max-w-md">
            <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
                    <ReplyIcon className="w-5 h-5 group-hover:text-primary-base" />
                </div>
                <span className="group-hover:text-primary-base">2</span>
            </li>

            <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-200">
                    <ReTweetIcon className="w-5 h-5 group-hover:text-green-400" />
                </div>
                <span className="group-hover:text-green-400">1</span>
            </li>

            <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-pink-200">
                    <LikeIcon className="w-5 h-5 group-hover:text-pink-400" />
                </div>
                <span className="group-hover:text-pink-400">4</span>
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

export default FeedItem3;
