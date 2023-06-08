import Image from 'next/image';
import { DarkModeButton } from '@/components';

export default function Home() {
  return (
    <main className="h-screen bg-white dark:bg-slate-800 text-black dark:text-white">
      <div className="sticky p-2 border-b-[1px] border-slate-400 flex justify-between">
        <p className="text-xl font-bold px-10">Rud</p>
        <div className="px-10 flex justify-center">
          <DarkModeButton />
        </div>
      </div>

      <div className="flex justify-center items-center h-[calc(100vh-4rem)]">공사중</div>
    </main>
  );
}
