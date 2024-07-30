import React from 'react'

const SelectOptions = (
  {
  opt,
  opt1,
  opt2,
  opt3,
  val,
  val1,
  val2,
  val3,
  names,
  ids
}
) => {
  return (
    <>
     <select
          name={names}
          id={ids}
          className="bookingInput capitalize rounded-xl w-full px-3 py-2 border-none"
        >
          <option value={val}>{opt}</option>
          <option value={val1}>{opt1}</option>
          <option value={val2}>{opt2}</option>
          <option value={val3}>{opt3}</option>
        </select> 
    </>
  )
}

export default SelectOptions
