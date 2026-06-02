import { PageHeading } from "@/components/common/PageHeading"

export function Filter() {
    const theme = [
        {id: 1, title: "Technology"},
        {id: 2, title: "Travel"},]
    return(
        <section className="m-10 mx-25">
            <PageHeading heading={"Browse Content"} description={"Discover blogs and vlogs from our community of creators"}/>
            <div className="flex justify-between border border-solid border-gray-300 rounded-2xl p-7 mt-5">
                <div>
                    <label>Search</label><br/>
                    <input className="bg-gray-100 p-2 px-3 text-sm rounded-lg w-[19vw]" name="search" placeholder="Search posts, authors, tags..."/>
                </div>
                <div>
                    <label>Theme</label><br/>
                    <select className="bg-gray-100 p-2 px-3 text-sm rounded-lg w-[19vw]" name="theme">
                        <option>All Theme</option>
                        {theme.map((item, index) => <option key={index} value={item.id}>{item.title}</option>)}
                    </select>
                </div>
                <div>
                    <label>Content Type</label><br/>
                    <select className="bg-gray-100 p-2 px-3 text-sm rounded-lg w-[19vw]" name="content">
                        <option>All Types</option>
                        <option>Blog Posts</option>
                        <option>Video Blogs</option>
                    </select>
                </div>
                <div>
                    <label>Search</label><br/>
                    <select className="bg-gray-100 p-2 px-3 text-sm rounded-lg w-[19vw]" name="sort">
                        <option value="Oldest First">Oldest First</option>
                        <option value="Newest First">Newest First</option>
                        <option value="Title A-Z">Title A-Z</option>
                    </select>
                </div>
            </div>
        </section>
    )
}