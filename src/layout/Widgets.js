import React from "react";
import { SearchIcon } from "../icons/Icon";
import { Timeline } from 'react-twitter-widgets'

const Widgets = () => {
  return (
    <aside className="w-80">
      <div className="flex items-center space-x-2 p-3 m-3 bg-gray-srchgray rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
        <SearchIcon className="w-5 h-5" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="bg-transparent placeholder-gray-dark focus:outline-none w-full text-sm "
        />
      </div>

      <div className="mt-5">
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "NASA",
          }}
          options={{
            height: "1000",
          }}
        />
      </div>
    </aside>
  );
};

export default Widgets;
