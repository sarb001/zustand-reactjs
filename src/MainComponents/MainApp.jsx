import React, { useEffect } from 'react'
import '../styles/MainApp.css' ;
import  Store1  from '../MainComponents/Store1' ;
import { useStore } from 'zustand';

const MainApp = () => {

   // const mango = useStore((store) => store.mango);
   // const incmango = useStore((store) => store.addingmangoes);
   // const decmango = useStore((store) => store.removingmangoes);

   // const apple = useStore((store) => store.apple);
   // const incapple = useStore((store) => store.addingapple);
   // const decapple = useStore((store) => store.removingapple);

   // const pear = useStore((store) => store.pear);
   // const incPear = useStore((store) => store.addingpear);
   // const decPear = useStore((store) => store.removingpear);

   //used Destructuring  better than above 

      // const { apple , pens , sketches , mango ,
      //    addingapple  ,removingapple  
      //    ,addingmangoes ,removingmangoes ,
      //    addingpens   , removingpens , 
      //    addingsketches  , removingsketches } = Store1();


   // In immer case -
   // taking data from Nesting 

    const apple = Store1((store) => store.fruits.apple);

   const addingapple = Store1((store) => store.addingfruitsapple);
   console.log('adding fruits -',addingapple);

   const deletingapple = Store1((store) => store.deletefruitsapple);
   console.log('deleting fruits -',deletingapple);

      // do it  for others as well mango  , pens , stickers 


  return (
   <>
      <div className = "mainappcontainer">

              <span> Slices in Zustand   </span>
               <div className="first-container">
                     <h4> Fruits Special  </h4>
                     {/* <div className="mangocounter">
                        <h3> Mongo - {mango} </h3>
                        <button onClick = {addingmangoes}> Add Mango ++    </button>
                        <button onClick = {removingmangoes}> Remove Mango -- </button>
                     </div> */}
                     <div className="applecounter">
                        <h3> Apple here - {apple} </h3>
                        <button onClick = {addingapple}> Add Apple ++    </button>
                        <button onClick = {deletingapple}> Remove Apple -- </button>
                     </div>
               </div>
               {/* <div className="second">
                     <h4> Stationary Special  </h4>
                  <div className="penscounter">
                     <h3> Pens - {pens} </h3>
                     <button onClick = {addingpens}> Add pens ++    </button>
                     <button onClick = {removingpens}> Remove pens -- </button>
                  </div>
                  <div className="sketchescounter">
                     <h3> Sketches - {sketches} </h3>
                     <button onClick = {addingsketches}> Add sketches ++    </button>
                     <button onClick = {removingsketches}> Remove sketches -- </button>
                  </div>
               </div> */}
      </div>
   </>
  )
}

export default MainApp



         