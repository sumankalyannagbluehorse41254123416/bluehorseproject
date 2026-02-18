import BriefSection from "@/component/work/woweats/BriefSection";
import KishaBanner from "@/component/work/woweats/KishaBanner";
import OmnichannelSection from "@/component/work/woweats/OmnichannelSection";
import TheBackgroundSection from "@/component/work/woweats/TheBackgroundSection";
import WowBanner from "@/component/work/woweats/WowBanner";
import WowEatsBanner from "@/component/work/woweats/WowEatsBanner";

export default function Workeats() {
    return (
        <>
            <WowBanner />
            <WowEatsBanner />
            <OmnichannelSection />
            <TheBackgroundSection />
            <BriefSection />
            <KishaBanner />

        </>
    );
}
