import ApproachSection from "@/component/work/woweats/ApproachSection";
import BrandExperienceSection from "@/component/work/woweats/BrandExperienceSection";
import BriefSection from "@/component/work/woweats/BriefSection";
import ClientEcommerceSection from "@/component/work/woweats/ClientEcommerceSection";
import EngageSection from "@/component/work/woweats/EngageSection";
import GetQuerySection from "@/component/work/woweats/GetQuerySection";
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
            <ApproachSection />
            <EngageSection />   
            <BrandExperienceSection />
            <ClientEcommerceSection />
            <GetQuerySection />
            
        </>
    );
}
