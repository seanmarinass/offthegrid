import BannerSection from "@/sections/bannerSection";
import IntroSection from "@/sections/introSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-[2rem] w-full">
      <BannerSection />
      <IntroSection />
    </div>
  );
}
