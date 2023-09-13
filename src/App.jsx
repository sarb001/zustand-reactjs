import { useState } from 'react'
import Column from './Components/Column'
import '../src/styles/App.css' ;
import MainApp from './MainComponents/MainApp';

function App() {
  return (
    <>
          <div className="App">
                  {/* <Column state = "PLANNED" />
                  <Column state = "ONGOING" />
                  <Column state = "DONE" />  */}
                   <MainApp />
          </div>
    </>
  )
}

export default App
