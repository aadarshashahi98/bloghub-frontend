"use client"

import { Cards } from "@/components/common/Cards"
import { fetchBlogsWithThemeName } from "@/lib/api/api"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { MdEdit } from "react-icons/md"
import { RiDeleteBin6Line } from "react-icons/ri"

type BlogItem = {
  id: string
  imageURL: string
  type: string
  themeTitle: string
  createdAT: Date
  title: string
  author: string
  breifDescription: string
  tags: string[]
}

export function Blog() {
  const [filterList, setfilterList] = useState<BlogItem[]>([])
  const [loading, setLoading] = useState(true);
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await fetchBlogsWithThemeName()
        setfilterList(data)
      } catch (error) {
        console.error("Error fetching blogs:", error)
      } finally {
        setLoading(false)
      }
    }

    loadBlogs()
  }, [])
    return(
        <div className="m-10 mx-25">
            <h3 className="mb-5">{filterList.length} post found</h3>
            <div className="grid grid-cols-3 gap-5">
            {
                filterList.map((item, index) =>
                    <div key={index} className="border border-solid border-gray-300 rounded-xl hover:shadow-lg relative">  
                        <Cards item={item} />
                        {pathname === "/manage"? 
                            <>
                                <button className="bg-gray-100 opacity-60 p-2 m-2 rounded-lg absolute top-0" onClick={() => router.push("/edit/" + item.id)}><MdEdit/></button>
                                <button className="bg-gray-100 opacity-60 p-2 m-2 rounded-lg absolute top-0 left-10"><RiDeleteBin6Line className="text-red-500"/></button>
                            </>
                        : null}
                    </div>
                )
            }
            </div>
        </div>
    )
}