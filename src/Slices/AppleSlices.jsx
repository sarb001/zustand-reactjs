
 const AppleSlices = (set) => ({
    apple : 0,
    addingapple : () => set((store) => ({
            apple :  store.apple + 1,
    })), 
    removingapple : () => set((store) => ({
            apple : store.apple - 1,
    })), 
})

export default AppleSlices