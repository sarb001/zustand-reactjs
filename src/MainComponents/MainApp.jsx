import React, { useEffect } from 'react'
import { useStore } from './Store1'
import '../styles/MainApp.css' ;

const MainApp = () => {

     const counter = useStore((store) => store.counter);
     const increasecounter = useStore((store) => store.increasecounter);
   //   console.log('incsrese ',increasecounter);
     const decreasecounter = useStore((store) => store.decreasecounter);

     const increaseBy = useStore((store) => store.increaseBy);
     const decreaseBy = useStore((store) => store.decreaseBy);

     const addnumbers = useStore((store) => store.addBy);

     const users = useStore((store) => store.users);
     console.log('users -',users);
     const getusers = useStore((store) => store.getusers);

     // fuction envoked inside  due to calling  1 time  only 
    useEffect(() => {
      getusers();
    },[])


  return (
   <>
      <div className = "mainappcontainer">
              <span> Counter App  </span>
              {/* <div className = "todocontainer">
                  <h3> Count = {counter} </h3>
                  <button onClick={increasecounter}> Increment ++  </button>
                  <button onClick={decreasecounter}> Decrement --  </button>

                  <button onClick={() => decreaseBy(100)}> Decrement by 100 </button>
                  <button onClick={() => increaseBy(100)}> Increment by 100  </button>

                  <button onClick={() => addnumbers(10,20)}> Add Numbers  </button>
              </div> */}

              {users.length > 0 && (
                  <div className="datacontainer">
                  <ul>
                  {users?.map((user) => (
                     <li> {user.email} || {user.name} </li>
                     ))}
                  </ul>
                  </div>
              )}
            

      </div>
   </>
  )
}

export default MainApp



         