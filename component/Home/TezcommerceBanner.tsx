import Image from "next/image";

export default function TezcommerceBanner() {
  return (
    <section className="tezcommerce_banner">
      <div className="container">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdtBb4EzlqwtVVoBK1oSUruJVo5jiTKCc44JgaX3jB5mJZ5Hw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full">
          <Image
            src="https://www.bluehorse.in/assets/image/d2c-banner.png"
            alt="TezCommerce D2C Banner"
            width={1920}
            height={600}
            className="w-full h-auto"
            priority
          />
        </a>
      </div>
    </section>
  );
}
