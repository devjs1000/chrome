import React, { useContext } from "react";
import { contxt } from "../mainContext";
import Panelfunctions from "./components/PanelFunctions";
const Panel = ({time}) => {
  const ctx = useContext(contxt);

  return (
    <div
      className="fixed rounded-2xl"
      style={{
        width: "360px",
        height: "430px",
        bottom: "53px",
        right: "10px",
        backgroundColor: "rgba(0,0,0,.9)",
      }}
    >
      <div className="flex justify-around items-center">
        <button className="">
          <img
            src={ctx.profile}
            className="w-8 h-8 m-4 rounded-full"
            alt="profile"
          />
        </button>
        <button className="bg-op-white py-1 px-3 text-sm rounded-full text-white">
          Sign out
        </button>

        <button className="bg-op-white  w-8 h-8 text-sm rounded-full text-white">
          <i className="fa fa-power-off"></i>
        </button>

        <button className="bg-op-white w-8 h-8 text-sm rounded-full text-white">
          <i className="fa fa-lock"></i>
        </button>
        <button className="bg-op-white w-8 h-8 text-sm rounded-full text-white">
          <i className="fa fa-cog"></i>
        </button>
        <button className=" py-1 px-3 text-sm rounded-full text-white">
          <i className="fa fa-chevron-down"></i>
        </button>
      </div>

      <div className="grid grid-rows-2 grid-cols-3">
        <Panelfunctions
          fn="wifi"
          identity="wifi"
          status={ctx.wifi}
          click={() => (ctx.wifi ? ctx.setWifi(false) : ctx.setWifi(true))}
        />
        <Panelfunctions
          fn="headphones"
          identity="bluetooth"
          status={ctx.bluetooth}
          click={() =>
            ctx.bluetooth ? ctx.setBluetooth(false) : ctx.setBluetooth(true)
          }
        />
        <Panelfunctions
          fn="universal-access"
          identity="accessibility"
          status={false}
        />
        <Panelfunctions fn="bell" identity="notifications" status={false} />
        <Panelfunctions
          fn="stop-circle"
          identity="Screen capture"
          status={false}
        />
        <Panelfunctions
          fn="eye"
          identity="nearby visibility"
          status={ctx.nearByLight}
          click={() => {
            ctx.nearByLight
              ? ctx.setNearByLight(false)
              : ctx.setNearByLight(true);
          }}
        />
      </div>
      <div className=" my-2">
        <div className="flex justify-center items-center my-4">
          <button className="text-white ml-4 bg-blue-800 rounded w-8  h-8 rounded-full" onClick={()=>{ctx.mute?ctx.setMute(false):ctx.setMute(true)}}>
            {ctx.mute ? (
              <i className="fa fa-volume-mute"></i>
            ) : (
              <i className="fa fa-volume-up"></i>
            )}
          </button>

          <input
            min="1"
            max="10"
            type="range"
            value={ctx.volume}
            onChange={(e) => {
              ctx.setVolume(e.target.value);

              if(ctx.mute) ctx.setMute(false)
            }}
            className={`w-4/5 mx-4 ${ctx.mute?"opacity-50": ""}`}
          />
        </div>

        <div className="flex justify-center items-center my-4">
          <button className="text-white ml-4 rounded w-8 h-8 bg-blue-800 rounded-full">
            <i className="fa fa-cloud"></i>
          </button>

          <input
            min="1"
            max="10"
            value={ctx.brightness}
            onChange={(e) => {
              ctx.setBrightness(e.target.value);
            }}
            type="range"
            className="w-4/5 mx-4"
          />
        </div>
      </div>
      <div className="flex justify-around text-white text-sm font-bold mx-3">
            <div className="bg-op-white py-1 px-4 rounded-full">
              {new Date().toDateString()}
            </div>
            <div className='bg-op-white py-1 px-4 rounded-full'>
              {time}
            </div>
      </div>
    </div>
  );
};

export default Panel;
