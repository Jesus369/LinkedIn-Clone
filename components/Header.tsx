import { Briefcase, HomeIcon, SearchIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex items-center max-w-6xl mx-auto p-2">
      <Image
        className="rounded-lg"
        src="https://links.papareact.com/b3z"
        width={40}
        height={40}
        alt="logo"
      />

      <div className="flex-1">
        <form className="flex items-center space-x-1 bg-gray-100 flex-1 p-2 rounded-md mx-2 max-w-96">
          <SearchIcon className="h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent flex-1 outline-none"
          />
        </form>
      </div>

      <div className="flex items-center space-x-4 px-6">
        <Link href="" className="icon">
          <HomeIcon className="h-5" />
          <p>Home</p>
        </Link>
        <Link href="" className="icon hidden md:flex">
          <UserIcon className="h-5" />
          <p>Network</p>
        </Link>
        <Link href="" className="icon hidden md:flex">
          <Briefcase className="h-5" />
          <p>Jobs</p>
        </Link>

        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <Button asChild variant="secondary">
            <SignInButton />
          </Button>
        </SignedOut>
      </div>
    </div>
  );
};

export default Header;
