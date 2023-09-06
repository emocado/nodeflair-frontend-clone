const JobCard = () => {
  return (
    <div>
      <div className="cursor-pointer h-full text-base shadow-md transition duration-200 rounded-lg bg-gray-200 outline-3 outline outline-green-500">
        <div className="h-full flex px-5 pt-5 pb-1 min-h-full flex-col bg-white rounded-tl-lg rounded-tr-lg">
          <div className="flex justify-start justify-items-start flex-nowrap">
            <img className="w-11 h-11 rounded-md mr-2.5" src="src/assets/cambridge.png" alt="logo" />
            <div>
              <p className="mb-0.5 whitespace-pre-wrap">
                <span className="text-sm pr-2">
                  Cambridge University Press & Assessment
                </span>
                <span className="text-sm">3.9 ★</span>
              </p>
              <h2 className="font-bold text-lg leading-1.5 mb-0">Mid Software Engineer - 3524</h2>
            </div>
            <div className="pl-3">
              <span className="text-green-500 inline-block px-2 py-1 font-semibold rounded-md bg-green-100">Fullstack</span>
            </div>
          </div>
          <div className="w-100 pl-14">
            <div className="flex gap-2">
              <span className="text-green-500 font-bold">
                1 minute ago
              </span>
              <div className="flex justify-center gap-1">
                <img src="src/assets/geo-alt-fill.svg" alt="location" />
                Philippines
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-4"></div>
        </div>
        <div className="flex gap-1 w-full px-4 bottom-0 min-h-[40px] whitespace-nowrap overflow-hidden text-ellipsis bg-white rounded-bl-lg rounded-br-lg">
          <span className="text-gray-600 inline-block px-2 py-1 overflow-hidden max-w-90 max-h-8 font-mono font-bold rounded-md truncate bg-gray-200">
            Intellij
          </span>
          <span className="text-gray-600 inline-block px-2 py-1 overflow-hidden max-w-90 max-h-8 font-mono font-bold rounded-md truncate bg-gray-200">
            Gitlab
          </span>
        </div>
      </div>
    </div>
  )
}

export default JobCard