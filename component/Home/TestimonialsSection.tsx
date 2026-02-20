"use client";

import React from "react";

const TestimonialsSection = () => {
  const handleExpandVideo = (url: string, title: string) => {
    if (typeof window !== "undefined" && (window as any).expandVideo) {
      (window as any).expandVideo(url, title);
    }
  };

  const testimonials = [
    // Left column
    {
      name: "Nilesh Mitesh",
      title: "Founder & designer of",
      company: "KORA",
      logo: "https://www.bluehorse.in/testimonial-new/img/kisah_logo 1.png",
      image: "https://www.bluehorse.in/testimonial-new/img/expert_img1.png",
      linkedin: "https://www.linkedin.com/in/nileshchhadva/",
      quote: "Great working with your team! We truly value your partnership, and prompt website support.",
      caseStudy: "https://www.bluehorse.in/work/kora-ecommerce-solutions-for-ethnic-brand",
      gradient: "",
      size: "normal"
    },
    {
      name: "Sandeep Amar",
      title: "Founder of",
      company: "PDlab.me",
      image: "https://www.bluehorse.in/testimonial-new/img/left4.png",
      linkedin: "https://www.linkedin.com/in/sandeepamar/",
      quote: "BlueHorse delivers expert tech solutions with solid engineering, complex coding, and 24/7 support.",
      gradient: "from-purple-400 via-purple-300 to-blue-300",
      size: "normal"
    },
    {
      name: "Ayesha R Goyal",
      title: "Founder of Creoo",
      company: "",
      logo: "https://www.bluehorse.in/testimonial-new/img/creeo.png",
      image: "https://www.bluehorse.in/testimonial-new/img/expert3.jpg",
      linkedin: "https://www.linkedin.com/in/ayeshagoyal/",
      quote: "Loved BlueHorse's can-do attitude—proactive, collaborative, and truly committed to building the right product.",
      video: "https://www.youtube.com/embed/SN43mMBNQPE?si=1sUeMJFdecJU7IhG",
      videoTitle: "Creating Impact: Ayesha R Goyal Sharing his experiences Working with BlueHorse Software",
      gradient: "from-pink-300 via-orange-200 to-yellow-200",
      size: "large"
    },
    {
      name: "Vijesh Sharma",
      title: "Founder & CEO of",
      company: "IPLIX",
      image: "https://via.placeholder.com/400x500",
      linkedin: "#",
      quote: "The team was highly skilled and committed, driven by the founder's personal involvement.",
      video: "#",
      gradient: "from-green-600 via-green-500 to-green-400",
      size: "normal"
    },
    {
      name: "Tomoaki Fujiki",
      title: "Managing Editor of",
      company: "Entrepreneur Middle East",
      image: "https://via.placeholder.com/400x300",
      linkedin: "#",
      quote: "Very happy with our new site. BlueHorse handled everything smoothly and exceeded expectations!",
      gradient: "from-green-400 via-teal-300 to-cyan-300",
      size: "normal"
    },
    {
      name: "Ankitesh Shaah",
      title: "Founder of",
      company: "Social Homes Office",
      image: "https://via.placeholder.com/400x300",
      linkedin: "#",
      quote: "Working with BlueHorse Software is a B2C eCommerce site – highly skilled, transparent, flexible, and absolute team.",
      gradient: "from-purple-600 via-purple-500 to-pink-500",
      size: "normal"
    },
  ];

  const testimonialsRight = [
    {
      name: "Kapil Chopra",
      title: "Founder of",
      company: "EazyDiner and The Postcard Hotel",
      logo: "https://www.bluehorse.in/testimonial-new/img/eazydiner_logo.png",
      image: "https://www.bluehorse.in/testimonial-new/img/right_expert.jpg",
      linkedin: "https://www.linkedin.com/in/kapil-chopra-454849117/",
      quote: "BlueHorse is a top IT company with a passionate, dedicated team of tech professionals.",
      caseStudy: "https://www.bluehorse.in/work/eazydiner-tech-solution-for-food-industry",
      gradient: "from-indigo-600 via-purple-600 to-purple-700",
      size: "large"
    },
    {
      name: "Ajai Jain",
      title: "Founder of",
      company: "SEPAL",
      image: "https://via.placeholder.com/400x500",
      linkedin: "#",
      quote: "Impressed by BlueHorse's proactive approach and strong communication; achieved success from the start",
      video: "#",
      gradient: "from-purple-400 via-pink-300 to-purple-300",
      size: "large"
    },
    {
      name: "Ramachandra Vattikonda",
      title: "Vice President of Benedictim IT services",
      company: "",
      image: "https://via.placeholder.com/400x300",
      linkedin: "#",
      quote: "Associated with BlueHorse since 2016; they efficiently developed the CIS website as promised.",
      video: "#",
      gradient: "from-green-700 via-green-600 to-green-500",
      size: "normal"
    },
    {
      name: "Sampath Chaudhary",
      title: "Founder & CEO of",
      company: "Argon Managing Systems",
      image: "https://via.placeholder.com/400x400",
      linkedin: "#",
      quote: "Trusted BlueHorse's can-do attitude—always proactive, even when challenges come up.",
      video: "#",
      gradient: "from-blue-600 via-blue-500 to-indigo-600",
      size: "normal"
    },
    {
      name: "Ritesh Aggarwal",
      title: "Founder of",
      company: "Yellow Haat",
      image: "https://via.placeholder.com/400x300",
      linkedin: "#",
      quote: "Highly appreciated BlueHorse for their expert, professional website development and exceptional client service.",
      gradient: "from-pink-300 via-rose-200 to-orange-200",
      size: "normal"
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-semibold uppercase text-gray-700 mb-6">
          Trusted by the experts globally
        </h2>
        
        <p className="text-lg text-gray-500 max-w-2xl mb-12">
          We have a healthy mix of clients who rely on us for their web and mobile
          app development needs. Our Clients have loved our one-point-contact
          systems for addressing their concerns.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} handleExpandVideo={handleExpandVideo} />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {testimonialsRight.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} handleExpandVideo={handleExpandVideo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ 
  name, 
  title, 
  company, 
  logo, 
  image, 
  linkedin, 
  quote, 
  caseStudy, 
  video,
  videoTitle,
  gradient, 
  size,
  handleExpandVideo 
}: any) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${size === 'large' ? 'h-[500px]' : 'h-[280px]'} group`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-85`}></div>
      </div>

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-between text-white">
        {/* Header with Logo/Name and LinkedIn */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            {logo && (
              <img src={logo} alt={company} className="h-8 mb-3 object-contain" />
            )}
            <div className="space-y-1">
              <p className="font-semibold text-base">
                {name}
              </p>
              <p className="text-sm opacity-90">
                {title} {company && <span className="block">{company}</span>}
              </p>
            </div>
          </div>
          
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="shrink-0 w-8 h-8 bg-white/20 hover:bg-white/30 rounded flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          )}
        </div>

        {/* Quote and CTA */}
        <div className="space-y-4">
          <p className="text-sm md:text-base leading-relaxed">
            "{quote}"
          </p>
          
          {caseStudy && (
            <a 
              href={caseStudy} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
            >
              View Casestudy 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          )}
          
          {video && (
            <button
              onClick={() => handleExpandVideo(video, videoTitle || `${name} Testimonial`)}
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all cursor-pointer"
            >
              View on YouTube 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;