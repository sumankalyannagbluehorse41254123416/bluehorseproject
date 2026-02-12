"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const offices = [
  {
    city: "Medinipur",
    img: "/assest/images/sliderlogo/iit.jpg",
    address:
      "2nd Floor (Zbrdst Express), B8 Aurabinda Nagar, Midnapore - 721101",
    person: "Abdul Barik : (+91) 98302 43235",
    map: "https://www.google.com/maps/place/ZBRDST+Express",
  },
  {
    city: "Kolkata",
    img: "/assest/images/sliderlogo/kolkata.jpg",
    address:
      "Martin Burn iSpace 1 C-1 4th Floor, Street No 315 DH 6/35, New Town, Kolkata 700156",
    person: "Sumit Das : (+91) 90022 73866",
    map: "https://www.google.com/maps/place/Blue+Horse+Software+Solution+Pvt+Ltd",
  },
  {
    city: "Mumbai",
    img: "/assest/images/sliderlogo/mum.jpg",
    address:
      "Palm Spring Center, 4th Floor, Link Rd, Malad West, Mumbai, MH 400064, India",
    person: "Vineet Agarwala : (+91) 96470 00580",
    map: "https://www.google.com/maps/place/Palm+Spring",
  },
  {
    city: "New Delhi",
    img: "/assest/images/sliderlogo/newDelhi.jpg",
    address:
      "A-115, I.P. extension, Near Balco market, Patparganj Delhi-92",
    person: "Vineet Agarwala : (+91) 96470 00580",
    map: "https://www.google.com/maps",
  },
  {
    city: "Ontario",
    img: "/assest/images/sliderlogo/Cedarwoods.jpg",
    address:
      "309-16 Cedarwoods Crescent, Kitchener, Ontario, N2C2L4, Canada",
    person: "Hardik Patel : (+1) 306-715-9131",
    map: "https://www.google.com/maps",
  },
];

export default function OfficeAddressSection() {
  return (
    <section className="bg-[#efefef] py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-wrap justify-center gap-8">

  {offices.map((office, i) => (
    <div
      key={i}
      className="w-full sm:w-[48%] lg:w-[30%] bg-[#f4f4f4] rounded-xl p-6 shadow-sm"
    >
      {/* Image */}
      <div className="mb-4">
        <Image
          src={office.img}
          alt={office.city}
          width={400}
          height={200}
          className="rounded-lg w-full h-[180px] object-cover"
        />
      </div>

      {/* Text */}
      <p className="uppercase text-lg font-semibold text-gray-700 mb-2">
        {office.city}
      </p>

      <p className="text-gray-600 text-sm mb-2">
        {office.address}
      </p>

      <p className="text-gray-700 text-sm mb-4">
        {office.person}
      </p>

      {/* Button */}
      <a
        href={office.map}
        target="_blank"
        className="inline-flex items-center gap-3 bg-[#1f77b4] text-white px-5 py-3 rounded-md text-sm hover:opacity-90 transition"
      >
        View On Map
        <FaArrowRight />
      </a>
    </div>
  ))}

</div>

      </div>
    </section>
  );
}
