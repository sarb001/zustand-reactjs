import  { create }  from 'zustand' ;


//when using object not function so thats why used ({}) for function used {} 


// const Store1 = create((set) => ({
//         apple : 0,
//         addingapple : () => set((store) => ({
//                 apple :  store.apple + 1,
//         })), 
//         removingapple : () => set((store) => ({
//                 apple : store.apple - 1,
//         })), 
//         mango : 0,
//         addingmangoes : () => set((store) => ({
//                 mango :  store.mango + 1,
//         })), 
//         removingmangoes : () => set((store) => ({
//                 mango :  store.mango - 1,
//         })),
//         pens : 0,
//         addingpens : () => set((store) => ({
//                 pens :  store.pens + 1,
//         })), 
//         removingpens : () => set((store) => ({
//                 pens :  store.pens - 1,
//         })),  
//         sketches : 0,
//         addingsketches : () => set((store) => ({
//                 sketches :  store.sketches + 1,
//         })), 
//         removingsketches : () => set((store) => ({
//                 sketches :  store.sketches - 1,
//         }))  

// }))



// Above Structure is given but if diff types are present and to use nesting 
// produce is used to handle nesting

import { produce } from 'immer' ;

const Store1 = create((set) => ({
        fruits : {
                apple : 0,
                mango : 0,
        },
        stationary: {
                pens : 0,
                sketches : 0,
        },

        addingfruitsapple : () => set(produce((state) => {
                state.fruits.apple  += 1;
        })),
        deletefruitsapple :  () => set(produce((state) => {
                state.fruits.apple  -= 1;
        })),
        addingfruitsmango : () => set(produce((state) => {
                state.fruits.mango  += 1;
        })),
        deletefruitsmango :  () => set(produce((state) => {
                state.fruits.mango  -= 1;
        }))
}))

export default Store1;