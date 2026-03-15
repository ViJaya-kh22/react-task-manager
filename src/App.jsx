import React, { useState , useEffect} from 'react'
import Task from './components/Task';

const App = () => {

  const [input, setInput] = useState("");
  const[filter,setFilter]=useState("all");
  const[task,setTask]=useState(()=>{
    const savedTask = localStorage.getItem("task");
    return savedTask ? JSON.parse(savedTask) : [];
  });
  
  useEffect(()=>{
     localStorage.setItem("task", JSON.stringify(task));
  },[task]);

  const addTask = ()=>{
    if(input.trim() === "")return;

    setTask(prev =>
     [...prev , { id: Date.now(), text : input , status : "pending" }]
    )
    setInput("");
  }

  const updateStatus = (currentIndex,newStatus) =>{
    setTask(prev =>
      prev.map((item,index)=>
        index === currentIndex ? {...item , status : newStatus} : item   
      )
    )
  };

  const filterTask = 
   filter === "all" ? task :
   task.filter(item => item.status === filter)

  const delTask = (currentIndex) =>{
   const updated = task.filter((_,index) => currentIndex !== index);
   setTask(updated);
  }

  return (
    <div className='h-screen w-screen flex  flex-col items-center gap-5 '>
      <h1 className='text-2xl font-bold p-2'>Task Manager</h1>
      <div className='flex flex-col justify-between  gap-7 border rounded-sm h-35 w-87.5 p-3'>
        <input className='border py-2 px-2 rounded-sm' placeholder='Write Task...' value={input} onChange={(e)=>{setInput(e.target.value)}}
        onKeyDown={(e)=>{
          if(e.key === "Enter") addTask(); }}></input>
        <button className='bg-blue-700 border-sm py-2 text-white rounded-sm cursor-pointer'onClick={addTask}>Add Task</button>
      </div>

      <div className='flex flex-col rounded-sm p-5 gap-5 w-screen'>
        <div className='flex w-full justify-center gap-3'>
          <button className=' rounded-sm px-2 py-1 bg-gray-300 cursor-pointer'
          onClick={()=>setFilter("all")}>
            All</button>
          <button className=' rounded-sm px-2 py-1 bg-yellow-300 cursor-pointer'
          onClick={()=>setFilter("pending")}
          >Pending</button>
          <button className=' rounded-sm px-2 py-1 bg-blue-300 cursor-pointer'
          onClick={()=>setFilter("in-progress")}
          >In progress</button>
          <button className=' rounded-sm px-2 py-1 bg-green-300 cursor-pointer'
          onClick={()=>setFilter("done")}
          >Done</button>
        </div>

         <div className='grid sm:grid-cols-1 md:grid-cols-3 w-full px-20 gap-5'>
                 {
        filterTask.map((item,index)=>(
          <Task
          key={item.id}
          text={item.text}
          status={item.status}
          updateStatus={updateStatus}
          index={index}
          deleteTask={delTask}
          />
        ))
      }
         </div>
      </div>
    </div>
  )
}

export default App
