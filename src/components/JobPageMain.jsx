import { useState } from "react"
import JobCard from "./JobCard"
import JobInformation from "./JobInformation"
import { jobTestData } from "../data/job-test-data"

const JobPageMain = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { title } = jobTestData[selectedIndex]
  return (
    <div className="flex min-[350px]:px-[15px] max-w-[1140px] mx-auto">
      <div className="min-w-[250px] w-[427px] max-[1010px]:flex-grow">
        {jobTestData.map((job, index) => (
          <JobCard key={index} index={index} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} job={job} />
        ))}
      </div>
      <JobInformation title={title} />
    </div>
  )
}

export default JobPageMain
