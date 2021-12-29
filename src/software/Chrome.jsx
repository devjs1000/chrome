import React, { useState, useEffect } from "react";

const Chrome = () => {
  const [tab, setTab] = useState([
    {
      title: "self",
      url: "http://localhost:3000",
      active: false,
      key: 1,
    },
    {
      title: "new tab",
      url: "https://www.bing.com",
      active: true,
      key: 2,
    },
  ]);
  const [url, setUrl] = useState();
  const [active, setActive] = useState(2);

  useEffect(() => {
    for (let i of tab) {
      if (i.active) {
        setUrl(i.url);
        break;
      }
    }
  }, []);
  const search = (e) => {
    setUrl(e.target.value);
  };
  const theSearch = (e) => {
    if (e.keyCode == 13) {
    }
  };
  return (
    <div className="">
      <div>
        <div
          className="shadow bg-gray-300 flex justify-start items-center"
          name="tabs-area"
        >
          {tab.map((a) => {
            let isa = active == a.key;
            return (
              <div
                className={` p-1 flex justify-between w-48 bg-${
                  isa ? "white rounded-t" : "gray-300 rounded-t"
                }`}
                key={a.url + Math.random() * 50}
              >
                <button
                  className="flex-1"
                  onClick={() => {
                    setActive(a.key);
                    setUrl(a.url);
                  }}
                >
                  {a.title}
                </button>
                <button
                  onClick={() => {
                    
                    let filteredTab = [
                      ...tab.filter((b) => {
                       
                        return b.key != a.key;
                      }),
                    ];
                    
                   
                    setTab(filteredTab);
                  }}
                >
                  <i className="fa fa-times"></i>
                </button>
              </div>
            );
          })}
          <button
            className="mx-4"
            onClick={() => {
              setTab([
                ...tab,
                {
                  title: "new tab",
                  url: "https://www.bing.com",
                  active: true,
                  key: tab.length + 1,
                },
              ]);
            }}
          >
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>
      <div>
        <div
          className="shadow py-2 bg-white flex justify-between items-center"
          name="tabs-area"
        >
          <div>
            <button className="mx-1">
              <i className="fa fa-arrow-left"></i>
            </button>
            <button className="mx-1">
              <i className="fa fa-arrow-right"></i>
            </button>
            <button className="mx-1">
              <i className="fa fa-redo"></i>
            </button>
            <button className="mx-1">
              <i className="fa fa-home"></i>
            </button>
          </div>
          <div className="flex-1 mx-6 flex ">
            <input
              type="text"
              placeholder="search"
              onChange={search}
              onKeyUp={theSearch}
              value={url}
              className="bg-gray-200  py-1  px-4 outline-none rounded-full flex-1"
            />
          </div>
          <div className="flex justify-center items-center">
            <button className="mx-1">
              <i className="fa fa-puzzle-piece"></i>
            </button>
            <button className="mx-1">
              <i className="fa fa-ellipsis-v"></i>
            </button>
          </div>
        </div>
      </div>
      <iframe
        src={url}
        frameBorder="0"
        className="w-full "
        style={{ height: "80vh" }}
        onChange={() => {
          console.log("ch");
        }}
      ></iframe>
    </div>
  );
};

export default Chrome;
