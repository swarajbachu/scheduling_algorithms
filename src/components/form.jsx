import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'
import HRRN from './hrrn'


const Form = () => {

    const { arrivalTime, setArrivalTime, 
        burstTime, setBurstTime, setResults,  setAverageWaitingTime 
    } = useContext(AppContext)

  
    const handleArrivalTimeChange = (event) => {
      setArrivalTime(event.target.value);
    };
  
    const handleBurstTimeChange = (event) => {
      setBurstTime(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const { results, averageWaitingTime } = HRRN(arrivalTime, burstTime);
      setResults(results);
      console.log(results);
      setAverageWaitingTime(averageWaitingTime);
    };
  
    return (
      <div className="container mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="arrivalTime">
              Arrival Time
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="arrivalTime"
              type="text"
              placeholder="1 2 3 4 5"
              value={arrivalTime}
              onChange={handleArrivalTimeChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="burstTime">
              Burst Time
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="burstTime"
              type="text"
              placeholder="5 4 3 2 1"
              value={burstTime}
              onChange={handleBurstTimeChange}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Calculate
            </button>
          </div>
        </form>
      </div>
    );
  }

export default Form
