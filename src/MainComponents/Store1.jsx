import  { create }  from 'zustand' ;


//when using object not function so thats why used ({}) for function used {} 

import  AppleSlices  from '../Slices/AppleSlices';
import  MangoSlices  from '../Slices/MangoSlices';
import  Pearslices  from '../Slices/PearSlices';

const Store = (set) => ({
        ...AppleSlices(set),
        ...MangoSlices(set),
        ...Pearslices(set)
})

export const useStore = create(Store);