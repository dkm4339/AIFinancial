"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-40 pb-20 px-4">
      <div className="container mx-auto text-center">
        {/* Yahan changes kiye hain: gradient-title hata kar naya gradient lagaya hai */}
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 font-extrabold bg-gradient-to-r from-slate-900 via-blue-800 to-cyan-500 text-transparent bg-clip-text">
          Manage Your Finances <br /> with Intelligence
        </h1>
        
        {/* Subtitle ka color thoda cool (slate) kar diya taaki blue theme se match kare */}
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </Link>
          <Link href="https://deepakmaurya.netlify.app/">
            <Button size="lg" variant="outline" className="px-8 border-blue-600 text-blue-600 hover:bg-blue-50">
              Contact Us
            </Button>
          </Link>
        </div>
        
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.jpg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;