import React from 'react'
import { Trash2 } from 'lucide-react';
const Task = ({ index, text, status, deleteTask, updateStatus }) => {

return ( 
<div className='bg-white shadow-md rounded-lg p-3 flex flex-col gap-2'>

  <div className='flex justify-between items-center'>
    <p className='font-medium'>{text}</p>
    <span className='cursor-pointer' onClick={()=>deleteTask(index)}><Trash2 size={17}/></span>
  </div>

  <div className='flex gap-2'>
    <button
      onClick={() => updateStatus(index, "pending")}
      className={`px-2 py-1 rounded text-sm cursor-pointer ${
        status === "pending" ? "bg-yellow-500 text-white" : "bg-gray-300"
      }`}
    >Pending</button>

    <button
      onClick={() => updateStatus(index, "in-progress")}
      className={`px-2 py-1 rounded text-sm  cursor-pointer ${
        status === "in-progress" ? "bg-blue-500 text-white" : "bg-gray-300"
      }`}
    >In Progress</button>

    <button
      onClick={() => updateStatus(index, "done")}
      className={`px-2 py-1 rounded text-sm cursor-pointer ${
        status === "done" ? "bg-green-600 text-white" : "bg-gray-300"
      }`}
    >Done</button>
  </div>

</div>

)
}

export default Task;
