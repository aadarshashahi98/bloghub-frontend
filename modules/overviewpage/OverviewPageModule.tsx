import BlogViewsChart from "./components/BlogViewsChart";
import { Insights } from "./components/Insights";

export function OverviewPageModule() {
    return(
        <div>
            <Insights />
            <BlogViewsChart />
        </div>
    )
}