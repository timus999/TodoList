import React, { useState } from "react";

const Todolist = () => {
  const [state, setstate] = useState([]);
  const [item, setItem] = useState("");

  const showData = (e) => {
    const value = e.target.value;
    setItem(value);
  };
  const addItems = () => {
    setstate((preValue) => {
      return [...preValue, item];
    });
    setItem("");
  };
  return (
    <>
      <div className="h-full px-26 mx-auto font-mono flex justify-center bg-[#898F9C]">
        <div className="mx-20 my-32 text-center w-1/2">
          <h1 className="text-5xl mt-10 mb-10">Todolist</h1>
          <div>
            <input
              className="px-2 py-2 w-2/4 mt-6 outline-none border border-gray-300 focus:border-blue-500"
              type="text"
              onChange={showData}
              placeholder="Enter work...."
              value={item}
              name="item"
            />
          </div>
          <div className="mt-6 text-center">
            <button
              className="text-2xl bg-blue-600 px-6 py-1 rounded-lg hover:bg-blue-500"
              onClick={() => {
                addItems();
              }}
            >
              Add
            </button>
          </div>
          <div className="text-xl mt-6 flex justify-center">
            <div className="w-1/2">
              {state.map((val, ind) => {
                return (
                  <p className="mt-2 bg-red-500 px-2 py-1 " key={ind}>
                    {val}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todolist;
