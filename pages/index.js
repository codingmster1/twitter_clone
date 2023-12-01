import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar';
import PostFeed from "@/components/Postfeed";
import Trending from '@/components/Trending';
import BottomBanner from '@/components/BottomBanner';
import { useSelector } from 'react-redux';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const username = useSelector(state => state.user.username)
  console.log(username)
  return (
    <div>
      <div className="bg-[#d4fdf6] min-h-screen text-[#000000]
    max-w-[1400px] mx-auto flex font-Zelda">
        <Sidebar />
        <PostFeed />
        <Trending />
      </div>

      {!username && <BottomBanner />}

    </div>

  );
}
