/* eslint-disable react/prop-types */
const Tag = ({ children }) => {
  return (
    <span className="text-green-500 text-sm inline-block w-max px-2 py-1 font-semibold rounded-[5px] bg-green-100">
      {children}
    </span>
  )
}

export default Tag