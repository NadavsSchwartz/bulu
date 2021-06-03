import React from "react";

import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <div>
      <header className="flex flex-col sm:flex-row my-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem title="HOME" Icon={HomeIcon} />
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
          <HeaderItem title="LIKED" Icon={BadgeCheckIcon} />
          <HeaderItem title="Collection" Icon={CollectionIcon} />
          <HeaderItem title="Search" Icon={SearchIcon} />
          <HeaderItem title="Profile" Icon={UserIcon} />
        </div>
        <span className="flex flex-col text-7xl px-6 font-bold text-white">
          BULU
        </span>
      </header>
    </div>
  );
}

export default Header;
