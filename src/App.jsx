import JobCard from "./components/JobCard"
import JobInformation from "./components/JobInformation"

function App() {

  return (
    <div className="flex px-[15px] max-w-[1140px] mx-auto">
      <div className="min-w-[250px] w-[427px] max-[1010px]:flex-grow">
        <JobCard />
      </div>
      <JobInformation />
    </div>
  )
}

export default App
