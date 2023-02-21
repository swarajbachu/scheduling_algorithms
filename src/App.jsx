import './App.css'
import React from 'react'
import { createContext,useState } from 'react'
import Body from './Containers/body'

export const AppContext = createContext()

const App = () => {

  const [arrivalTime, setArrivalTime] = useState("");
  const [burstTime, setBurstTime] = useState("");
  const [results, setResults] = useState([]);
  const [averageWaitingTime, setAverageWaitingTime] = useState(0);

  return (
    <AppContext.Provider value={{
      arrivalTime, setArrivalTime,
      burstTime, setBurstTime,
      results, setResults,
      averageWaitingTime, setAverageWaitingTime
    }}>
    <div >
      <Body />
    </div>
    </AppContext.Provider>
  )
}

export default App
