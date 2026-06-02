import Link from "next/link";

type CardItem = {
  id: string
  imageURL: string
  type: string
  themeTitle: string
  createdAT: Date
  title: string
  author: string
  breifDescription: string
  tags?: string[]
}

export function Cards({item}: {item: CardItem}) {
    return (
        <Link href={`/blog/${item.id}`}>
            <div className="h-48 bg-cover bg-center bg-no-repeat rounded-t-lg" style={{backgroundImage: `url(${item.imageURL})`}}>
                <p className={`float-right bg-${item.type === "Blog" ? "black" : "white"} text-${item.type === "Blog" ? "white" : "black"} text-xs font-semibold p-1 px-2 rounded-lg m-[0.5vw]`}>{item.type}</p>
            </div>
            <div className="m-5">
                <div className="flex justify-between mb-5">
                    <p className="border border-solid border-gray-300 rounded-lg p-1 px-2 text-xs font-semibold">{item.themeTitle}</p>
                    <p className="text-xs">  {new Date(item.createdAT).toLocaleDateString("en-US", {year: "numeric",month: "short",day: "numeric",})}</p>
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-3">by {item.author}</p>
                <p className="text-sm text-gray-500 mb-3">{item.breifDescription}</p>
                <div className="mb-3 flex gap-2">
                    {
                        item.tags?.slice(0, 3).map(nextItem => 
                            <p key={nextItem} className="text-[10px] font-bold text-black bg-gray-200 p-1 px-2 rounded-lg">{nextItem}</p>
                        )
                    }
                </div>
            </div>
        </Link>
        
    )
}