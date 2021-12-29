import React from "react";

const Panelfunctions = ({ fn, status, identity, openfn, click }) => {
  const dbl=()=>{
      if(openfn){
        openfn()
      }
  }
  const cl=()=>{
    if(click){
      click()
    }
  }
  return (
    <div
      className={`flex justify-center flex-wrap items-center h-24 cursor-pointer shadow my-1 mx-1 
      `}
      onDoubleClick={dbl}
      onClick={cl}
    >

        <div className={`flex justify-center rounded-full items-center h-12 w-12 bg-${
        status ? "blue-400 text-black" : "op-white text-white"}`}>
        <i className={`fa text-xl rounded-full fa-${fn} `}></i>

        </div>
        <h5 className="truncate text-white w-24 text-center">{identity}</h5>

    </div>
  );
};

export default Panelfunctions;
