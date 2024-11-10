"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

interface AdventuresCarousellCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

function AdventuresCarousellCard({
  title,
  description,
  imageSrc,
}: AdventuresCarousellCardProps) {
  return (
    <Card className="relative w-full flex p-[1rem] gap-[1rem] h-[30rem] shadow-none border-none">
      <Image
        src={imageSrc}
        alt={title}
        fill={true}
        quality={95}
        className=""
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      <CardHeader className="absolute bottom-0 left-0 bg-black/30 w-full text-white">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-white">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default function AdventuresCarousell() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1500 }),
  ]);
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <AdventuresCarousellCard
            title="East Java Exploration"
            description="Test"
            imageSrc="https://images.unsplash.com/photo-1694250990115-ca7d9d991b24?q=80&w=3395&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="embla__slide">
          <AdventuresCarousellCard
            title="Diving in Tioman"
            description="Test"
            imageSrc="https://images.unsplash.com/photo-1626309010374-30e0f7aa9cb7?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="embla__slide">
          <AdventuresCarousellCard
            title="Camping in Kanchanaburi"
            description="Test"
            imageSrc="https://images.unsplash.com/photo-1665212208759-22f641304b0b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="embla__slide">
          <AdventuresCarousellCard
            title="Khao Yai"
            description="Test"
            imageSrc="https://plus.unsplash.com/premium_photo-1664365805235-c5b33fb82b2a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </div>
  );
}
