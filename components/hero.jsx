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
    <section className="pt-40 pb-20 px-4 hero-background relative overflow-hidden">
      {/* Flowing Money Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated money bills */}
        <div className="money-flow money-flow-1">💵</div>
        <div className="money-flow money-flow-2">💴</div>
        <div className="money-flow money-flow-3">💶</div>
        <div className="money-flow money-flow-4">💷</div>
        <div className="money-flow money-flow-5">💵</div>
        <div className="money-flow money-flow-6">💴</div>
        <div className="money-flow money-flow-7">💶</div>
        <div className="money-flow money-flow-8">💷</div>
        <div className="money-flow money-flow-9">💵</div>
        <div className="money-flow money-flow-10">💴</div>
        
        {/* Gradient blurs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-transparent rounded-full filter blur-3xl"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-bl from-purple-300/20 to-transparent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-t from-green-300/10 to-transparent rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          Manage Your Finances <br /> with Intelligence
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          {/* <Link href="https://www.youtube.com/roadsidecoder">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link> */}
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.jpeg"
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
