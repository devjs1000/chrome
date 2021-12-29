import React, { useState, useEffect, useContext } from "react";
import Panel from "./Panel";
import { contxt } from "../mainContext";
import Hammer from "hammerjs";
import Apk from "../features/Apk";
const Bar = () => {
  const [panelVisibility, setPanelVisibility] = useState(false);
  const ctx = useContext(contxt);
  let d = new Date();
  const [time, setTime] = useState(`${d.getHours()}:${d.getMinutes()}`);
  const timer = () => {
    let d = new Date();
    setTime(`${d.getHours()}:${d.getMinutes()}`);
  };
  useEffect(() => {
    const timeInterval = setInterval(timer, 1000);
    let br = document.querySelector("#bar");
    let thor = new Hammer.Manager(br);
    let pan = new Hammer.Swipe();
    thor.add(pan);
    thor.on("swipeup", (e) => {
      if (!ctx.desktop) {
        ctx.setDesktop(true);
      }
    });
    thor.on('swipedown', ()=>{
      if (ctx.desktop) {
        ctx.setDesktop(false);
      }
    })
    return () => {
      clearInterval(timeInterval);
    };
  }, []);
  return (
    <div
      id="bar"
      className={`${
        ctx.windowOpen == 0 && "rounded-t-3xl"
      } px-3 flex justify-between items-center fixed bottom-0 h-12 w-full`}
      style={{ backgroundColor: "rgba(0,0,0,.9)" }}
      onScroll={() => {
        alert();
      }}
    >
      <div className="w-auto justify-start ">
        <button
          onClick={() => {
            ctx.desktop ? ctx.setDesktop(false) : ctx.setDesktop(true);
          }}
          className="bg-op-white w-9 h-9 rounded-full flex items-center justify-center text-white"
        >
          <i className="fa fa-dot-circle text-xl"></i>
        </button>
      </div>

      <div className="flex justify-center items-center pt-1 truncate ">
        {ctx.apps.map(a=>{
          if(a.pin){
            return (
              <Apk key={`apk.${a.key}`} manifest={a}/>
            )
          }
          
        })}
      </div>

      <div className="w-auto justify-end flex items-center content-center">
        {panelVisibility && <Panel time={time} />}
        <div
          className="h-8 px-4 gap-2 rounded-full flex bg-op-white justify-center"
          onClick={() => {
            panelVisibility
              ? setPanelVisibility(false)
              : setPanelVisibility(true);
          }}
        >
          <button
            className="text-white "
            onClick={() => {
              ctx.wifi ? ctx.setWifi(false) : ctx.setWifi(true);
            }}
            name="wifi"
          >
            {ctx.wifi ? (
              <i className="fa fa-wifi"></i>
            ) : (
              <i className="fa fa-wifi text-black"></i>
            )}
          </button>
          <button
            className="text-white transform-gpu -rotate-90"
            name="battery"
          >
            <i className="fa fa-battery-quarter"></i>
          </button>
          <button className="text-white" name="time">
            {time}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bar;
