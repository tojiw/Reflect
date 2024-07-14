import React from "react";
import Icons from "./sidebarIcons";
import Link from "next/link";
import Image from "next/image";
const Sidebar = () => {
  return (
    <div className="p-5 flex flex-col justify-center gap-10 max-w-[100px] w-full">
      {Icons.map((icon, index) => {
        const IconComponent = icon.src;
        return (
          <div key={index} className="flex flex-col items-center ">
            <Link href={icon.path}>
              <IconComponent size={24} color="#EA580C" />
            </Link>
            
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
