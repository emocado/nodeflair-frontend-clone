import Skill from "./Skill"
import Tag from "./Tag"

/* eslint-disable react/prop-types */
const JobCard = ({ index, selectedIndex, setSelectedIndex, job }) => {
  const selectedGreenOutline = index === selectedIndex ? "outline-3 outline outline-green-500" : ""
  return (
    <div className="p-[5px]">
      <div onClick={() => setSelectedIndex(index)} className={`cursor-pointer h-full text-base shadow-md card-hover rounded-lg ${selectedGreenOutline}`}>
        <div className="h-full flex px-5 pt-5 pb-1 min-h-full flex-col bg-white rounded-tl-lg rounded-tr-lg">
          <div className="flex justify-start justify-items-start flex-wrap sm:flex-nowrap">
            <img className="w-[45px] h-[45px] rounded-[4px] mr-2.5" src={job.logo} alt="logo" />
            <div className="pl-3 sm:order-3 ml-auto">
              <Tag>{job.tag}</Tag>
            </div>
            <div className="max-[440px]:mt-[5px]">
              <p className="mb-0.5 text-sm whitespace-pre-wrap">
                <span>
                  {job.company}
                </span>
                {job.rating && <span className="pl-2">{job.rating} ★</span>}
              </p>
              <h2 className="font-bold leading-1.5 mb-0 job-card-title text-ellipsis overflow-hidden">{job.title}</h2>
            </div>
          </div>
          <div className="w-100 sm:pl-[55px]">
            <div className="flex gap-2 mb-1.5 text-sm">
              <span className="text-green-500 font-bold">
                {job.datetime}
              </span>
              <div className="flex justify-center gap-0.5 text-text-gray">
                <img src="geo-alt-fill.svg" alt="location" />
                {job.location}
              </div>
            </div>
            <div>
              <p className="mb-0.5 text-sm font-semibold whitespace-pre-wrap">
                {job.salary && <span className="pt-1 pr-2">{job.salary}</span>}
                {job.isEstimate && <span className="py-[3px] px-[7px] font-normal rounded-[5px] bg-bg-gray">EST</span>}
              </p>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-3"></div>
        </div>
        <div className="w-full px-4 bottom-0 min-h-[40px] whitespace-nowrap overflow-hidden text-ellipsis bg-white rounded-bl-lg rounded-br-lg">
          {job.skills.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default JobCard