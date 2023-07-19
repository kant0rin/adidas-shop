import { strapiApi } from '@/utils/api';
import React from "react";
import Banner from "@/components/sections/home/Banner/Banner";
async function test() {
  const response = await strapiApi.request.get('/tests/1');
  return response.data.data;
}

export default async function Home() {
  const data = await test()
  const text = data.attributes.test

  return (
    <main>
      <Banner/>
    </main>
  );
}
