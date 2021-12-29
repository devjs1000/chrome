import React, { useState, useContext } from "react";
import { contxt } from "../mainContext";
const Apk = ({ manifest }) => {
    const ctx=useContext(contxt)
    const activa=(newState)=>{
        let dd=ctx.apps.map(a=>{
          if(a.key==manifest.key){
            a.active=newState
          }
          return a
        })
        ctx.setApps(dd)
      }
  return (
    <div>
      <button className="" onClick={
         ()=>{
            if(manifest.active){
                activa(false)
                ctx.setWindowOpen(ctx.windowOpen - 1);
            }else{
                activa(true)
                ctx.setWindowOpen(ctx.windowOpen + 1);
            }
         }
      }>
        <img
          src={manifest.icon}
          alt={manifest.name}
          style={{ width: "40px", height: "40px" }}
          className="rounded-full"
        />
      </button>
      
      
    </div>
  );
};

export default Apk;
