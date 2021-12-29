import React, { useState, useContext } from "react";
import { contxt } from "../mainContext";
import Apk from "../features/Apk";
import Pack from "../features/Pack";
const Desktop = () => {
  const ctx = useContext(contxt);
  const [height, setHeight] = useState("50vh");
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${ctx?.wallpaper})`,
        backgroundSize: "auto auto",
      }}
    >
      <div>
        {ctx.apps.map((a) => {
          return <Pack key={a.key} manifest={a} />;
        })}
      </div>
      <div
        className="bg-op-black w-full fixed bottom-0"
        style={{ height: ctx.desktop ? height : "0vh", transition: ".3s" }}
      >
        {ctx.desktop && (
          <div>
            <div className="flex justify-center items-center mt-4">
              <button
                className=" p-2 shadow w-12 h-12 rounded-full bg-white"
                onClick={() => {
                  height == "50vh" ? setHeight("100vh") : setHeight("50vh");
                }}
              >
                {height == "50vh" ? (
                  <i className="fa fa-chevron-up"></i>
                ) : (
                  <i className="fa fa-chevron-down"></i>
                )}
              </button>
            </div>
            <div className="flex justify-center items-center mt-4">
              <input
                type="text"
                placeholder="search your device apps setting, and web"
                className="shadow w-1/2 py-2 text-xl px-4 rounded-full"
              />
            </div>
            <div className="apps grid grid-cols-5 text-center gap-6 pt-4">
              {ctx.apps.map((a) => {
                return <Apk key={a.key} manifest={a} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Desktop;
