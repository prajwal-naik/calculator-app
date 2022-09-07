import React from 'react'

function Key({ value, row, bg, shadow }) {
  return (
    <div className={`${row===5?"col-span-2":"col-span-1"} ${"bg-["+bg+"]"} rounded-[10px] flex justify-center items-center `}>
        <p className='text-[50px]'>{value}</p>
    </div>
  )
}

export default Key