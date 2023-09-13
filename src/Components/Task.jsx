import React from 'react'
import '../styles/Task.css' ;
import { useStore } from './Store';

const Task = ({title}) => {
    
    const tasks = useStore((store) => 
    store.tasks.find((task) => task.title === title));           
    // if task.title from store  === title from prop then data shown 

   const deleteTask = useStore((store) => store.deletetask);
   const setDraggedTask = useStore((store) => store.setDraggedTask);

  return (
    <div className = "task"  draggable  
     onDragStart = {() => setDraggedTask(tasks.title)}> 

        <div>{tasks.title}</div>
         <div className="bottomwrapper">
            <button onClick={() => deleteTask(tasks.title)}> Delete </button>
             <div className={`status ${tasks.state}`}>
                  {tasks.state} 
             </div>
         </div>
    </div>
  )
}

export default Task