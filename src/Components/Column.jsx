import React, { useState } from 'react'
import '../styles/Column.css' ;
import Task from './Task';
import { useStore } from './Store';

const Column   = ({state}) => {

   const tasks = useStore((store) => 
   store.tasks.filter((task) => task.state  === state));     // from 3 selcted 1 

   const addTask  = useStore((store) => store.addtasks);
   const setDraggedTask = useStore((store) => store.setDraggedTask);
   const DraggedTask    = useStore((store) => store.draggedTask);
   const moveTask       = useStore((store) => store.moveTask);

    const [text,setText] = useState('');
    const [open,setopen] = useState(false);
    const [drop,setDrop] = useState(false);

  return (
        <div className = {`column ${drop}`}  
         onDragOver  = {(e) =>  {
            setDrop(true);
            e.preventDefault();
         }}

          onDrop={(e) => {
             console.log('dragged task -');
             moveTask(DraggedTask , state);
             setDraggedTask(null);
          }} 
          
          onDragLeave={(e) => {
             setDrop(false);
             e.preventDefault();
          }}
        >
           <div className="statewrapper">
             <p> {state} </p>
             <button onClick={() => setopen(true)}> Add </button>
            </div> 
            {tasks.map((task) => (
               <Task  title = {task.title} key = {task.title} />
            ))}
        
             {open &&  (
                <div className='Modal'>
                     <div className="modalcontent">
                        <input  value = {text}  onChange = {(e) => setText(e.target.value)}  />
                        <button onClick={() =>  {
                           addTask(text,state);
                           setText('');
                           setopen(false);
                        }
                        }> Submit </button>
                     </div>
                </div>
                ) 
            }
      </div>
  )
}

export default Column