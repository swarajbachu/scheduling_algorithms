# HRRN Scheduling Algorithm

This application implements the HRRN (Highest Response Ratio Next) scheduling algorithm using JavaScript and React. The algorithm prioritizes jobs based on the ratio of their waiting time and burst time, which allows the system to achieve a balanced utilization of resources.

To use the application, simply enter the arrival times and burst times for each job in the input fields and click on the "Calculate" button. The application will display the results in a table format, showing the job number, arrival time, burst time, finish time, turnaround time, and waiting time. In addition, it will also display a Gantt chart that shows the timeline of each job and its corresponding CPU utilization.

This application currently only implements the HRRN algorithm, but additional scheduling algorithms will be added in the future.

## Getting Started

To run the application locally, you can use `npm`, or `pnpm`. First, clone the repository and navigate to the project directory in your terminal. Then, run the following commands:

```sh
# if using npm
npm install
npm run dev

# if using pnpm
pnpm install
pnpm dev
```

The application will be accessible on [http://127.0.0.1:5173/](http://127.0.0.1:5173/)

Feedback and Support

Thank you for using our application! If you have any questions, feedback, or issues, please 
feel free to contact me or submit an issue on our GitHub repository. 

I appreciate your support!
