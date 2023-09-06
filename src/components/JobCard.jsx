/* eslint-disable react/prop-types */
const JobCard = ({ index, selectedIndex, setSelectedIndex, job }) => {
  const selectedGreenOutline = index === selectedIndex ? "outline-3 outline outline-green-500" : ""
  return (
    <div className="p-[5px]">
      <div onClick={() => setSelectedIndex(index)} className={`cursor-pointer h-full text-base shadow-md transition duration-200 rounded-lg hover:translate-y-[-3px] ${selectedGreenOutline}`}>
        <div className="h-full flex px-5 pt-5 pb-1 min-h-full flex-col bg-white rounded-tl-lg rounded-tr-lg">
          <div className="flex justify-start justify-items-start flex-wrap min-[440px]:flex-nowrap">
            <img className="w-[45px] h-[45px] rounded-[4px] mr-2.5" src={job.logo} alt="logo" />
            <div className="pl-3 min-[440px]:order-3 ml-auto">
              <span className="text-green-500 text-sm inline-block w-max px-2 py-1 font-semibold rounded-[5px] bg-green-100">{job.tag}</span>
            </div>
            <div className="max-[440px]:mt-[5px]">
              <p className="mb-0.5 text-sm whitespace-pre-wrap">
                <span>
                  {job.company}
                </span>
                {job.rating && <span className="pl-2">{job.rating} ★</span>}
              </p>
              <h2 className="font-bold leading-1.5 mb-0 jobCardTitle text-ellipsis overflow-hidden">{job.title}</h2>
            </div>
          </div>
          <div className="w-100 min-[440px]:pl-[55px]">
            <div className="flex gap-2 mb-1.5 text-sm">
              <span className="text-green-500 font-bold">
                {job.datetime}
              </span>
              <div className="flex justify-center gap-0.5 text-[#838383]">
                <img src="src/assets/geo-alt-fill.svg" alt="location" />
                {job.location}
              </div>
            </div>
            <div>
              <p className="mb-0.5 text-sm font-semibold whitespace-pre-wrap">
                {job.salary && <span className="pt-1 pr-2">{job.salary}</span>}
                {job.isEstimate && <span className="py-[3px] px-[7px] font-normal rounded-[5px] bg-[#f1f1f1]">EST</span>}
              </p>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-3"></div>
        </div>
        <div className="w-full px-4 bottom-0 min-h-[40px] whitespace-nowrap overflow-hidden text-ellipsis bg-white rounded-bl-lg rounded-br-lg">
          {job.skills.map((skill, index) => (
            <span key={index} className="mr-1 inline-block text-ellipsis align-top text-[#838383] text-sm px-2 py-[5px] overflow-hidden max-w-90 max-h-8 font-mono font-bold rounded-[5px] truncate bg-[#f1f1f1]">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JobCard