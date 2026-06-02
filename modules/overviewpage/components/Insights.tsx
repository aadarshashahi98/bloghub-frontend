export function Insights() {

    const insightsData = [{
        title: "Total Views",
        value: 1000
    },
    {
        title: "Total Comments",
        value: 122
    },
    {
        title: "Total Blogs",
        value: 1500
    },
    {
        title: "New Visitor",
        value: 50
    }]
    return(
        <div>
            <div className="flex flex-col gap-4 p-5">
                <h3 className="text-2xl font-semibold">Overview</h3>
                <div className="w-full h-1 bg-black"></div>
            </div>
            <ul className="flex justify-between w-7xl gap-5 m-5">
                {insightsData.map((insight, index) => (
                    <li key={index} className="bg-gray-200 flex flex-col justify-center items-start w-[70%] p-5 gap-5 rounded-lg">
                        <span>{insight.title}:</span>
                        <span className="font-bold text-4xl">{insight.value}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}