type PageHeadingProps = {
    heading: string
    description: string
}

export function PageHeading({heading, description}: PageHeadingProps) {
    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold mb-4">{heading}</h1>
            <p className="px-50 text-center text-gray-500">{description}</p>
        </div>
    )
}
