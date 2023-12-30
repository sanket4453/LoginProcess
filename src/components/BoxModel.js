import { MoveDown } from "lucide-react";
import React from "react";

const BoxModel = ({ data, anchestor }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className=" p-2 m-3   border border-black">{data}</div>
    {anchestor ?     <div className="text-center">
        <MoveDown size={56} strokeWidth={1} />
       <span>{anchestor}</span> 
      </div>
       : null}
    </div>
  );
};

export default BoxModel;
