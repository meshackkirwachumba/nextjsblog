import React from "react";

const Footer = () => {
  return (
    <div
      className="
        h-[100px]
        w-full
        flex
        justify-between
        items-center
        text-gray-500
        gap-2
      
     "
    >
      {/* logo */}
      <div className="font-semibold">MeshDev</div>

      {/* text */}
      <div className="text-xs">
        Mesh Creative thoughts Agency.All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
