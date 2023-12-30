import { CornerLeftDown, CornerRightDown, MoveDown } from "lucide-react";
import React from "react";
import BoxModel from "./BoxModel";

const LeftRightBoxModel = ({ data, leftanchestor, rightanchestor }) => {
  return (
    <>
      <div className="w-full">
        <div className="absolute p-2 m-3 border border-black w-56 text-center ml-24">
          {data}
        </div>
        <div className="relative w-80 ml-24 pt-[42px] flex justify-around">
          <div>
            <div className="">
              <CornerLeftDown size={64} strokeWidth={1} />
              <span>{leftanchestor}</span>
            </div>
          

            <BoxModel data="Redirect To Dashboard" anchestor="Navigate to" />
            
          </div>

          <div>
          <div>
            <CornerRightDown size={64} strokeWidth={1} />
            <span>{rightanchestor}</span>
            </div>
            <BoxModel data="Show Error Message"  />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftRightBoxModel;
