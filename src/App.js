import logo from './logo.svg';
import './App.css';
import GrandFather from './Components/GrandFather/GrandFather';
import { createContext, useState } from 'react';

export const RingContext= createContext('ring')

function App() {
  const [house,sethouse]=useState(1)
  const ornaments='diamond ring'
  const jewellery='neckles'
  return (
  <RingContext.Provider value={[jewellery,house]}>
      <div className="App"> 
    <button onClick={()=>sethouse(house+1)}>Buy a new house</button>
     <GrandFather house={house} ornaments={ornaments}></GrandFather>
    </div>
  </RingContext.Provider>
  );
}

export default App;
