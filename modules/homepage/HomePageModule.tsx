import { FeaturePost } from "./components/FeaturePost";
import { HeroSection } from "./components/HeroSection";
import { PopularTheme } from "./components/PopularTheme";
import { RecentPost } from "./components/RecentPost";

export function HomePageModule() {
    return(
        <main>
            <HeroSection />
            <FeaturePost />
            <PopularTheme />
            <RecentPost />
        </main>
    )
}