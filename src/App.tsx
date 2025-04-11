import JobListings from "./Joblisting";
import { jobs } from "./types";

const App = () => (
  <div className="App">
    <JobListings jobs={jobs} />
  </div>
);

export default App;
