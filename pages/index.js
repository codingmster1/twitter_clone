import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-[#d4fdf6] min-h-screen text-[#000000]
    max-w-[1400px] mx-auto font-Zelda">
      <Sidebar />
      { /*<Postfeed /> 
        <Trending />*/}
    </div>
  );
}
