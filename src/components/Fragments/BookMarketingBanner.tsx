import { useMarketingBannerImagePath } from "@/hooks/bookPageHook"
import { MarketingBannerCarousel, MarketingBannerContentImage } from "../Elements/MarketingBanner"

export const BookMarketingBanner = () => {
    const marketingBanners = useMarketingBannerImagePath()

    return <>
        <MarketingBannerCarousel>
            {marketingBanners.map((content, key) => (
                <MarketingBannerContentImage 
                    key={key}
                    imagePath={content.imagePath}
                />
            ))}
        </MarketingBannerCarousel>
    </>
}