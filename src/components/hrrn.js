export default function HRRN(arrivalTimes, burstTimes) {
    // Parse the input strings into arrays of integers
    const arrivals = arrivalTimes.trim().split(/\s+/).map(Number);
    const bursts = burstTimes.trim().split(/\s+/).map(Number);
  
    // Create an array of objects to store the results
    const results = [];
  
    // Initialize variables to track the current time and the total waiting time
    let currentTime = 0;
    let totalWaitingTime = 0;
  
    // Loop through each process and calculate its response ratio
    for (let i = 0; i < arrivals.length; i++) {
      // Calculate the wait time and response ratio for this process
      const waitTime = Math.max(0, currentTime - arrivals[i]);
      const responseRatio = (waitTime + bursts[i]) / bursts[i];
  
      // Add this process to the results array
      results.push({
        job: i + 1,
        arrivalTime: arrivals[i],
        burstTime: bursts[i],
        finishTime: currentTime + bursts[i],
        turnaroundTime: waitTime + bursts[i],
        waitingTime: waitTime
      });
  
      // Update the current time and total waiting time
      currentTime += bursts[i];
      totalWaitingTime += waitTime;
    }
  
    // Calculate the average waiting time and return the results array
    const averageWaitingTime = totalWaitingTime / arrivals.length;
    return { results, averageWaitingTime };
  }
  