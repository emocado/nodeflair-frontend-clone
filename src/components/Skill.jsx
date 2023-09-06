/* eslint-disable react/prop-types */
const Skill = ({ skill }) => {
  return (
    <span className="mr-1 inline-block text-ellipsis align-top text-text-gray text-sm px-2 py-[5px] overflow-hidden max-w-90 max-h-8 font-mono font-bold rounded-[5px] truncate bg-bg-gray">
      {skill}
    </span>
  )
}

export default Skill