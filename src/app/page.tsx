import { strapiApi } from '@/utils/api';
import React from "react";
import Banner from "@/components/sections/home/Banner/Banner";
import CarouselShoes from "@/components/sections/home/CarouselShoes/CarouselShoes";
import SaleBanner from "@/components/sections/home/SaleBanner/SaleBanner";
import ShoesCategories from "@/components/sections/home/ShoesCategories/ShoesCategories";
import CarouselCategories from "@/components/sections/home/CarouselCategories/CarouselCategories";

export default async function Home() {

  return (
    <main>
      <Banner/>
      <SaleBanner/>
      <ShoesCategories/>
      <CarouselShoes/>
      <CarouselCategories/>
    </main>
  );
}
