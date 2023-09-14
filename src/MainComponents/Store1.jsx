import  { create }  from 'zustand' ;


//when using object not function so thats why used ({}) for function used {} 


const Store1 = create((set) => ({
        apple : 0,
        addingapple : () => set((store) => ({
                apple :  store.apple + 1,
        })), 
        removingapple : () => set((store) => ({
                apple : store.apple - 1,
        })), 
        mango : 0,
        addingmangoes : () => set((store) => ({
                mango :  store.mango + 1,
        })), 
        removingmangoes : () => set((store) => ({
                mango :  store.mango - 1,
        })),
        pear : 0,
        addingpear : () => set((store) => ({
                pear :  store.pear + 1,
        })), 
        removingpear : () => set((store) => ({
                pear :  store.pear - 1,
        }))  
}))



export default Store1;