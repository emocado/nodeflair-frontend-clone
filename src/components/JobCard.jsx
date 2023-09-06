const JobCard = () => {
  return (
    <div>
      <div className="cursor-pointer h-full text-base shadow-md transition duration-200 rounded-lg bg-gray-200 outline-3 outline outline-green-500">
        <div className="h-full flex px-5 pt-5 pb-1 min-h-full flex-col bg-white rounded-tl-lg rounded-tr-lg">
          <div className="flex justify-start justify-items-start flex-nowrap">
            <img className="w-[45px] h-[45px] rounded-[4px] mr-2.5" src="src/assets/cambridge.png" alt="logo" />
            <div>
              <p className="mb-0.5 text-sm whitespace-pre-wrap">
                <span>
                  Cambridge University Press & Assessment
                </span>
                <span className="pl-2">3.9 ★</span>
              </p>
              <h2 className="font-bold leading-1.5 mb-0 text-ellipsis overflow-hidden">Mid Software Engineer - 3524</h2>
            </div>
            <div className="pl-3">
              <span className="text-green-500 text-sm inline-block px-2 py-1 font-semibold rounded-[5px] bg-green-100">Fullstack</span>
            </div>
          </div>
          <div className="w-100 pl-[55px]">
            <div className="flex gap-2 mb-1.5 text-sm">
              <span className="text-green-500 font-bold">
                1 minute ago
              </span>
              <div className="flex justify-center gap-0.5 text-gray-500">
                <img src="src/assets/geo-alt-fill.svg" alt="location" />
                Philippines
              </div>
            </div>
            <div>
              <p className="mb-0.5 text-sm font-semibold whitespace-pre-wrap">
                <span className="pt-1 pr-2">₱170,000 - ₱200,000 / mth</span>
                <span className="py-[3px] px-[7px] font-normal rounded-[5px] bg-gray-200">EST</span>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-3"></div>
        </div>
        <div className="flex gap-1 w-full px-4 bottom-0 min-h-[40px] whitespace-nowrap overflow-hidden text-ellipsis bg-white rounded-bl-lg rounded-br-lg">
          <span className="flex items-center text-ellipsis text-gray-500 text-sm px-2 py-[5px] overflow-hidden max-w-90 max-h-8 font-mono font-bold rounded-[5px] truncate bg-gray-200">
            Intellij
          </span>
          <span className="flex items-center text-ellipsis text-gray-500 text-sm px-2 py-[5px] overflow-hidden max-w-90 max-h-8 font-mono font-bold rounded-[5px] truncate bg-gray-200">
            Gitlab
          </span>
        </div>
      </div>
    </div>
  )
}

export default JobCard