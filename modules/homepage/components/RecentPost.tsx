
"use client"

import { Cards } from "@/components/common/Cards";
import { fetchBlogsWithThemeName } from "@/lib/api/api";
import { useEffect, useState } from "react";

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

export function RecentPost() {
  const [blog, setBlog] = useState<BlogItem[]>([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await fetchBlogsWithThemeName()
        setBlog(data)
      } catch (error) {
        console.error("Error fetching blogs:", error)
      } finally {
        setLoading(false)
      }
    }

    loadBlogs()
  }, [])

  if (loading) return <p>Loading themes...</p>;

    return(
        <section className="m-10 mx-25">
            <div className="flex justify-between my-10">
                <h2>Recent Posts</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {blog.slice(3,5).map((item, index) => 
                    <div key={index} className="border border-solid border-gray-300 rounded-lg hover:shadow-lg"> 
                        <Cards item={item} />
                    </div>)}
            </div>
        </section>
    )
}