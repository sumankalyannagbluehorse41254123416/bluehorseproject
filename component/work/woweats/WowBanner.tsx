import Image from "next/image";

export default function WowBanner() {
  return (
    <div className="relative w-full h-125 overflow-hidden">
      
      
      <Image
        src="/assest/images/sliderlogo/wowbannerimage.jpg"  
        alt="Wow Banner"
        fill
        priority
        className="object-cover object-center"
      />
    </div>
  );
}
