import React, { useState, useContext, useEffect } from "react";
import { contxt } from "../mainContext";
import Hammer from "hammerjs";
const Pack = ({ manifest}) => {
  const ctx = useContext(contxt);
  const activa=(newState)=>{
    let dd=ctx.apps.map(a=>{
      if(a.key==manifest.key){
        a.active=newState
      }
      return a
    })
    ctx.setApps(dd)
  }
  const [active, setActive] = useState(manifest.active || false);
  const sizes = {
    hfull: "calc(100vh - 48px)",
    hhalf: "calc(50vh - 48px)",
    whalf: "50vw",
    wfull: "100vw",
    auto: "auto",
  };
  const [size, setSize] = useState({
    w: sizes[manifest.orientation.w],
    h: sizes[manifest.orientation.h],
  });

  useEffect(()=>{
    if(manifest.active){
      let el=document.querySelector('#drag-bar')
      let drtr=document.querySelector('#drag-target')
      let thr=new Hammer.Manager(el)
      let pan=new Hammer.Pan()
      thr.add(pan)
      drtr.style.position='fixed';
      thr.on('pan', (e)=>{
        
        
        drtr.style.top=e.center.y+'px' 
        drtr.style.left=e.center.x+'px'
        
      })
    }
    
    
  },[manifest.active])
  return (
    <div className="m-0 p-0">
      
      {manifest.active && (
        <div
          className="window fixed top-0 left-0 bg-white"
          style={{
            width: size.w,
            height: size.h,
            maxHeight: sizes.hfull,
            maxWidth: sizes.wfull,
            minHeight: "200px",
            minWidth: "200px",
          }}
          id='drag-target'
        >
          <div className="bg-gray-100 flex justify-between items-center w-full" id='drag-bar'>
            <div></div>
            <div>
              <button
                className="mx-2"
                onClick={() => {
                  activa(false);
                }}
              >
                <i className="fa fa-minus"></i>
              </button>
              <button
                className="mx-2"
                onClick={() => {
                  if (size.h == sizes.wfull || size.w == sizes.wfull) {
                    setSize({ w: sizes.whalf, h: sizes.hhalf });
                  } else {
                    setSize({ w: sizes.wfull, h: sizes.hfull });
                  }
                }}
              >
                <i className="fa fa-window-restore"></i>
              </button>
              <button
                className="mx-2"
                onClick={() => {
                  activa(false);
                  setSize({ w: sizes[manifest.orientation.w], h: sizes[manifest.orientation.h] });
                }}
              >
                <i className="fa fa-times"></i>
              </button>
            </div>
          </div>
          <div>{manifest.app}</div>
        </div>
      )}
    </div>
  );
};

export default Pack;
