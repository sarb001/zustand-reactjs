
 const MangoSlices = (set) => ({
    mango : 0,
    addingmangoes : () => set((store) => ({
            mango :  store.mango + 1,
    })), 
    removingmangoes : () => set((store) => ({
            mango :  store.mango - 1,
    })), 
})

export default MangoSlices