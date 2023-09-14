import React, { useEffect } from 'react'
import '../styles/MainApp.css' ;
import  Store1  from '../MainComponents/Store1' ;

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

   const { apple , pear , mango ,addingapple  ,removingapple  
      ,addingmangoes ,removingmangoes , addingpear ,removingpear } = Store1();
      console.log('APPLE -',apple);
      console.log('pear -',pear);
      console.log('mango -',mango);
      console.log(' incmango -',addingapple);
      console.log(' demango -',removingapple);

  return (
   <>
      <div className = "mainappcontainer">
              <span> Slices in Zustand   </span>
               <div className="mangocounter">
                  <h3> Mongo - {mango} </h3>
                  <button onClick = {addingmangoes}> Add Mango ++    </button>
                  <button onClick = {removingmangoes}> Remove Mango -- </button>
               </div>
               <div className="applecounter">
                  <h3> Apple - {apple} </h3>
                  <button onClick = {addingapple}> Add Apple ++    </button>
                  <button onClick = {removingapple}> Remove Apple -- </button>
               </div>
               <div className="pearcounter">
                  <h3> Pear - {pear} </h3>
                  <button onClick = {addingpear}> Add Pear ++    </button>
                  <button onClick = {removingpear}> Remove Pear -- </button>
               </div>
      </div>
   </>
  )
}

export default MainApp



         