import  { create } from 'zustand' ;
import axios from 'axios' ;

const Store = (set) => ({
        counter : 0,
        // normal counter 
        increasecounter : () => set((state) => ({counter : state.counter  + 1})),
        decreasecounter : () => set((state) => ({ counter :  state.counter - 1})),

        // adding arguments 

        decreaseBy : (num) => set((state) => ({ counter :  state.counter - num})),
        increaseBy : (num) => set((state) => ({ counter :  state.counter + num})),

        // add two numbers 
        addBy : (num1,num2) => set((state) => ({ counter :  state.counter + num1 + num2})),

        // fetch data Asynchronously 

        users : [],
        getusers : async () => {
          const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
          set(() => ({ users : data }));
          console.log('data here -',data);
        }
})

export const useStore = create(Store);