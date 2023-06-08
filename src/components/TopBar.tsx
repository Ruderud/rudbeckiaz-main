import Link from 'next/link';
import { DarkModeButton } from './DarkModeButton';

export const TopBar = () => {
  return (
    <div className="sticky top-0 backdrop-blur-lg p-2 border-b-[1px] border-slate-400 flex justify-between">
      <Link href="/" className="text-xl font-bold px-10">
        Rud
      </Link>
      <div className="px-10 flex justify-center items-center gap-5">
        <Link href="/about">About</Link>
        <DarkModeButton />
      </div>
    </div>
  );
};
