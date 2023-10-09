import Link from 'next/link';
import React from 'react';
import { Icons } from './Icons';
import { buttonVariants } from './ui/Button';
import { getAuthSession } from '@/lib/auth';
import UserAccountNav from './UserAccountNav';
import SearchBar from './SearchBar';
import { cn } from '@/lib/utils';

// type Props = {}

const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* LOGO */}
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="h-12 w-12 sm:h-9 sm:w-9" />
          <p className="hidden text-zinc-700 text-md font-semibold md:block">
            Geddit
          </p>
        </Link>

        {/* Search bar */}
        <SearchBar />
        {session ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href="/sign-in" className={cn(buttonVariants(), 'w-24')}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
