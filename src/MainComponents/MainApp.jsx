import React, { useEffect } from 'react'
import '../styles/MainApp.css' ;
import { useStore } from '../MainComponents/Store1' ;

const MainApp = () => {

   const mango = useStore((store) => store.mango);
   const incmango = useStore((store) => store.addingmangoes);
   const decmango = useStore((store) => store.removingmangoes);

   const apple = useStore((store) => store.apple);
   const incapple = useStore((store) => store.addingapple);
   const decapple = useStore((store) => store.removingapple);

   const pear = useStore((store) => store.pear);
   const incPear = useStore((store) => store.addingpear);
   const decPear = useStore((store) => store.removingpear);

  return (
   <>
      <div className = "mainappcontainer">
              <span> Slices in Zustand   </span>
               <div className="mangocounter">
                  <h3> Mongo - {mango} </h3>
                  <button onClick = {incmango}> Add Mango ++    </button>
                  <button onClick = {decmango}> Remove Mango -- </button>
               </div>
               <div className="applecounter">
                  <h3> Apple - {apple} </h3>
                  <button onClick = {incapple}> Add Apple ++    </button>
                  <button onClick = {decapple}> Remove Apple -- </button>
               </div>
               <div className="pearcounter">
                  <h3> Pear - {pear} </h3>
                  <button onClick = {incPear}> Add Pear ++    </button>
                  <button onClick = {decPear}> Remove Pear -- </button>
               </div>
      </div>
   </>
  )
}

export default MainApp



         