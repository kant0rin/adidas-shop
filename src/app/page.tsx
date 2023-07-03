import { strapiApi } from '@/utils/api';
import Button from "@/components/ui/buttons/Button/Button";

async function test() {
  const response = await strapiApi.request.get('/tests/1');
  return response.data.data;
}

export default async function Home() {
  const data = await test()
  const text = data.attributes.test

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>{text}</div>
      <Button variant="contained">
        <p>sign up for free</p>
      </Button>
    </main>
  );
}
