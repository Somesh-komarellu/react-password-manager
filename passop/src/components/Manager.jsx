import React from "react";

const Manager = () => {
  return (
    <>
<div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
        <div className="bg-green-200 mycontainer">
        <h1>PassOP</h1>
        <p>Your own password manager</p>
        <div className="text-white  flex flex-col p-4">
            <input className="rounded-full" type="text" name=" " id=" " />
            <div className="flex">
                <input type="text" />
                <input type="text" />
            </div>

        </div>
        </div>
    </>

  );
};

export default Manager;
