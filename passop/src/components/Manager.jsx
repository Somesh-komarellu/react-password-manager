import React from "react";
import { useRef } from "react";
const Manager = () => {
  const ref=useRef()
  const showpassword=()=>{
    alert("show the password")
    if( ref.current.src.includes("icons/eyecross.png")){
      ref.current.src="icons/eye.png"

    }
    else{
       ref.current.src="icons/eyecross.png"
    }
  }
const savePassword=()=>{
  
}

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-green-100 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className=" mycontainer">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-500 ">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green text-lg text-center">
          Your own password manager
        </p>
        <div className=" flex flex-col p-4 text-black gap-7 items-center">
          <input placeholder="Enter website URL"
            className="rounded-full border border-green-500 w-full px-4 py-1"
            type="text"
            name=" "
            id=" "
          />
          <div className="flex w-full justify-between gap-7">
            <input placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full px-4 py-1"
              type="text"
              name=" "
              id=" "
            />
            <div className="relative">

            <input placeholder="Enter Password"
              className="rounded-full border border-green-500 w-full px-4 py-1"
              type="text"
              name=" "
              id=" "
              />
              <span className="absolute right-[5px] top-[2px] cursor-pointer" onClick={showpassword}>
                <img ref={ref} className="py-1"width={20} src="icons/eye.png" alt="eye" />
              </span>
              </div>
          </div>
          <button onClick={savePassword} className="flex justify-center items-center  bg-green-500 rounded-3xl w-fit  px-8 py-2 gap-3 border border-green-600 hover:bg-green-300 ">
          <lord-icon
            src="https://cdn.lordicon.com/efxgwrkc.json"
            trigger="hover"

            ></lord-icon>
            Add password</button>
        </div>
      </div>
    </>
  );
};

export default Manager;
