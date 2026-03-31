'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const blogPosts = [
  {
    id: 1,
    excerpt: 'How to Create an Invoice in Shopify Order...',
    image: '/assest/images/sliderlogo/blogslideone.jpg',
  },
  {
    id: 2,
    excerpt: 'How to Create a Shopify App for Its...',
    image: '/assest/images/sliderlogo/blogslidetwo.jpg',
  },
  {
    id: 3,
    excerpt: 'Why Image Optimization Is Critical for Every Shopify...',
    image: '/assest/images/sliderlogo/blogslidetherre.jpg',
  },
  {
    id: 4,
    excerpt:
      'Understanding Headless Architecture with Shopify: A Complete Developer...',
    image: '/assest/images/sliderlogo/blogslidefour.jpg',
  },
  {
    id: 5,
    excerpt: 'How to Create a Shopify App for Its...',
    image: '/assest/images/sliderlogo/blogslidetwo.jpg',
  },
  {
    id: 6,
    excerpt: 'How to Create an Invoice in Shopify Order...',
    image: '/assest/images/sliderlogo/blogslideone.jpg',
  },
  {
    id: 7,
    excerpt: 'How to Create a Shopify App for Its...',
    image: '/assest/images/sliderlogo/blogslidetwo.jpg',
  },
  {
    id: 8,
    excerpt:
      'Understanding Headless Architecture with Shopify: A Complete Developer...',
    image: '/assest/images/sliderlogo/blogslidefour.jpg',
  },
  {
    id: 9,
    excerpt: 'How to Create a Shopify App for Its...',
    image: '/assest/images/sliderlogo/blogslidetwo.jpg',
  },
  {
    id: 10,
    excerpt: 'How to Create an Invoice in Shopify Order...',
    image: '/assest/images/sliderlogo/blogslideone.jpg',
  },
  {
    id: 11,
    excerpt: 'How to Create a Shopify App for Its...',
    image: '/assest/images/sliderlogo/blogslidetwo.jpg',
  },
  {
    id: 12,
    excerpt: 'Why Image Optimization Is Critical for Every Shopify...',
    image: '/assest/images/sliderlogo/blogslidetherre.jpg',
  },
];

const BlogsSection = () => {
  return (
    <section className="bg-white mt-20">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-15">
          <h2 className="text-40 md:text-5xl font-normal tracking-tight text-[#515253] big-noodle">
            BLOGS
          </h2>
          <p className="mt-3 text-xl text-gray-600">
            Insights, Tips & Trends to Grow Your Shopify Store
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerGroup={3}
          pagination={{
            clickable: true
          }}
          className="blogSwiper"
          breakpoints={{
            320: { slidesPerView: 1, slidesPerGroup: 1 },
            640: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 4, slidesPerGroup: 4 },
          }}
        >

          {blogPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <Link href="#" className="flex flex-col overflow-hidden">

                {/* Image */}
                <div className="relative w-full h-[200px] overflow-hidden">
                  <Image
                    src={post.image}
                    alt="blog image"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div className="pt-4">
                  <p className="text-[20px] text-[#121212] font-semibold leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default BlogsSection;