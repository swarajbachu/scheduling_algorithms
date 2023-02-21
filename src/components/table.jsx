import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";



const Table = ()  => {

    const { results,averageWaitingTime } = useContext(AppContext);

  return (
    <div className="container mx-auto">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Job</th>
            <th className="py-3 px-6 text-left">Arrival Time</th>
            <th className="py-3 px-6 text-left">Burst Time</th>
            <th className="py-3 px-6 text-left">Finish Time</th>
            <th className="py-3 px-6 text-left">Turnaround Time</th>
            <th className="py-3 px-6 text-left">Waiting Time</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {results.map((result) => (
            <tr key={result.job} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{result.job}</td>
              <td className="py-3 px-6 text-left">{result.arrivalTime}</td>
              <td className="py-3 px-6 text-left">{result.burstTime}</td>
              <td className="py-3 px-6 text-left">{result.finishTime}</td>
              <td className="py-3 px-6 text-left">{result.turnaroundTime}</td>
              <td className="py-3 px-6 text-left">{result.waitingTime}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="py-3 px-6 text-left text-gray-600">Average Waiting Time:</td>
            <td className="py-3 px-6 text-left text-gray-600">{averageWaitingTime}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Table;
