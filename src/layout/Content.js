import React from "react";
import Divider from "../components/Divider";
import FeedList from "../components/FeedList";
import TweetBox from "../components/TweetBox";
import { PopulerIcon } from "../icons/Icon";

const Content = () => {
  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
      <header className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extraLight bg-white">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <PopulerIcon className="w-6 h-6 text-primary-base" />
      </header>
      <div className="flex space-x-4 px-4 py-3">
      <img
        src="https://pbs.twimg.com/profile_images/1483048829217824769/AHnzqB4M_400x400.jpg"
        alt="Profile"
        className="w-11 h-11 rounded-full"
      />
        <TweetBox />
      </div>
      <Divider/>
      
      {/* Feed section */}

        <FeedList  />
    </main>
  );
};

export default Content;
