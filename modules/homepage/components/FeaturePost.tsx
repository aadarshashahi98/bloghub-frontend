"use client"

import { Cards } from "@/components/common/Cards"
import { fetchBlogsWithThemeName } from "@/lib/api/api"
import { useEffect, useState } from "react"

type BlogItem = {
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

export function FeaturePost() {
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

  return (
    <section className="m-10 mx-25">
      <div className="flex justify-between my-10">
        <h2 className="text-xl font-semibold">Feature Post</h2>
        <p className="cursor-pointer hover:underline">View All →</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {blog.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 rounded-lg hover:shadow-lg transition duration-300"
          >
            <Cards item={item} />
          </div>
        ))}
      </div>
    </section>
  )
}
