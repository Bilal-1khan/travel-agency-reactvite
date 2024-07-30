import React from "react";

const InputLabel = ({label,input,type,id}) => {
  return (
    <>
      <div className="my-2 py-1">
        <label htmlFor={id} className=" mx-2">{label}</label>
        <input
          id={id}
          className="formInput w-full my-2 px-3 py-2 text-[0.875rem] border-none outline-none rounded-full"
          type={type}
          placeholder={input}
        />
      </div>
    </>
  );
};

export default InputLabel;
