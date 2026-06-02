import { Blog } from "./components/Blog";
import { Filter } from "./components/Filter";

export function BrowsePageModule() {
    return(
        <main>
            <Filter />
            <Blog />
        </main>
    )
}