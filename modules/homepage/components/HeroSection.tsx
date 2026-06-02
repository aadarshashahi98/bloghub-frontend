export function HeroSection() {
    return(
        <section className="flex flex-col justify-center items-center h-80 bg-gray-200 m-5 mx-25 rounded-2xl">
            <h1 className="text-2xl font-semibold mb-10">Welcome to BlogHub</h1>
            <p className="px-50 text-center">A community-driven platform where creators share insights, stories, and 
                expertise across diverse themes and subjects.
            </p>
            <div className="flex gap-2 mt-7">
                <button className="bg-black text-white text-sm font-semibold p-2 px-3 rounded-lg">Explore Content</button>
                <button className="bg-white border border-solid border-gray-300 text-sm font-semibold p-2 px-3 rounded-lg hover:bg-gray-300">Share Your Story</button>
            </div>
        </section>
    )
}