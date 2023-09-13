
 const PearSlices = (set) => ({
    pear : 0,
    addingpear : () => set((store) => ({
            pear :  store.pear + 1,
    })), 
    removingpear : () => set((store) => ({
            pear :  store.pear - 1,
    })) 
})

export default PearSlices