"use client"
import { PageHeading } from "@/components/common/PageHeading"
import { fetchThemes } from "@/lib/api/api"
import { Blog, BlogType } from "@/lib/types/blog"
import { ThemeItem } from "@/lib/types/theme"
import { useEffect, useState } from "react"

export function BlogForm() {
    const [submitted, setSubmitted] = useState(false)
    const [theme, setTheme] = useState<ThemeItem[]>([])
    const [tags, setTags] = useState<string[]>([])
    const [newTag, setNewTag] = useState("")
    const [inputValues, setInputValues] = useState<Blog>({
        id: 0,
        title: "",
        type: BlogType.BLOG,
        themeID: 0,
        author: "",
        breifDescription: "",
        content: "",
        imageURL: "",
        tags: [],
        createdAT: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setInputValues(prevValues => ({
            ...prevValues,
            [name]: name === "themeID" ? Number(value) : value
        }))
    }

    useEffect(() => {
        const loadThemes = async () => {
          try {
            const data = await fetchThemes();
            setTheme(data);

            if (data.length > 0) {
                setInputValues(prev => ({
                    ...prev,
                    themeID: data[0].id
                }))
            }
          } catch (error) {
            console.error("Error fetching themes:", error);
          }
        };
    
        loadThemes();
    }, []);

    const handleAddTag = () => {
        if(newTag.trim() === "" || tags.includes(newTag.trim())) return
        setTags([...tags, newTag.trim()])
        setNewTag("")
    }

    const handleRemoveTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const blogData = {
            ...inputValues,
            tags: tags
        }

        try {
            const res = await fetch("http://localhost:4000/blog", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(blogData)
            })

            if (res.ok) {
                setSubmitted(true)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="m-10 mx-24 relative">
                <PageHeading heading={"Submit Your Content"} description={"Share your knowledge, experience, or creative work with the community"}/>
                {submitted ? (
                    <div className="border border-green-500 bg-green-50 rounded-lg p-10 mt-10 text-center">
                        <h2 className="text-2xl font-semibold text-green-700">
                            🎉 Your post  has been submitted successfully
                        </h2>
                        <p className="mt-3 text-gray-600">
                            Thank you for sharing your content with the community.
                        </p>
                    </div>
                ): (
                    <form onSubmit={handleSubmit} className="border border-solid border-gray-300 rounded-lg p-7 mt-10">
                        <p>Create a New Post</p>

                        <div className="flex justify-between mt-10 gap-5">
                            <div className="w-full">
                                <label>Title *</label><br/>
                                <input className="w-full p-2 px-3 bg-gray-100 rounded-lg outline-none" name="title" placeholder="Enter your post title" value={inputValues.title} onChange={(e) =>handleChange(e)}/>
                            </div>
                            <div className="w-full">
                                <label>Author Name *</label><br/>
                                <input className="w-full p-2 px-3 bg-gray-100 rounded-lg outline-none" name="author" placeholder="Your Name" value={inputValues.author} onChange={(e) =>handleChange(e)}/>
                            </div>
                        </div>
                        <div className="flex justify-between mt-10 gap-5">
                            <div className="w-full">
                                <label>Content Type *</label><br/>
                                <select className="w-full p-2 px-3 bg-gray-100 rounded-lg outline-none" name="type" value={inputValues.type} onChange={(e) =>handleChange(e)}>
                                    <option value="Blog Post">Blog Post</option>
                                    <option value="Video Blog">Video Blog</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <label>Theme *</label>
                                <select className="w-full p-2 px-3 bg-gray-100 rounded-lg outline-none" name="themeID" value={inputValues.themeID} onChange={(e) =>handleChange(e)}>
                                    {
                                        theme.map((item, index) => 
                                            <option key={index} value={item.id}>{item.title}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="mt-5">
                            <label>Breif Description *</label><br/>
                            <textarea className="w-full h-[20vh] p-2 px-3 bg-gray-100 rounded-lg outline-none" name="breifDescription" value={inputValues.breifDescription} onChange={(e) =>handleChange(e)}></textarea>
                        </div>
                        <div className="mt-5">
                            <label>Content *</label><br/>
                            <textarea className="w-full h-[20vh] p-2 px-3 bg-gray-100 rounded-lg outline-none" name="content" value={inputValues.content} onChange={(e) =>handleChange(e)}></textarea>
                        </div>
                        <div className="mt-5">
                            <label>Cover Image URL</label><br/>
                            <input className="w-full p-2 px-3 bg-gray-100 rounded-lg outline-none" name="imageURL" placeholder="https://example.com/image.jpg" value={inputValues.imageURL} onChange={(e) =>handleChange(e)}/>
                        </div>
                        <div className="mt-5">
                            <label>Tags </label><br/>
                            <div className="flex justify-between gap-2">
                                <div className="flex gap-1 w-[90%] bg-gray-100 rounded-lg">
                                    <ul className="flex flex-wrap shrink-0 gap-1 mx-1">
                                        {
                                            tags.map(item =>
                                                <li key={item} className="flex bg-white text-sm rounded-lg p-1 px-2 my-2">
                                                    <p>{item}</p>
                                                    <button type="button" className="pl-2" onClick={() => handleRemoveTag(item)}>x</button>
                                                </li>
                                            )
                                        }
                                    </ul>
                                    <input className="w-full p-2 px-3 bg-gray-100 rounded-lg outline-none" placeholder="Add a tag" value={newTag} onChange={(e) => setNewTag(e.target.value)}/>
                                </div>
                                <button className="border border-solid border-gray-300 bg-white text-sm p-2 px-3 rounded-lg" type="button" onClick={() => handleAddTag()}>Add Tag</button>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-5">
                            <button type="submit" className="bg-black text-white text-sm p-2 px-3 rounded-lg font-semibold">Submit Post</button>
                            <button type="button" className="p-2 px-4 rounded-lg text-sm fonr-bold border border-solid border-gray-300">Cancel</button>
                        </div>

                    </form>
                )}
            </div>
        </>
    )
}