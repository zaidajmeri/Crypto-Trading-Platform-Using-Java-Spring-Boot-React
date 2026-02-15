import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu, GiMagnifyingGlass } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SideBaar from "./SideBaar";
import { SearchIcon, X } from "lucide-react";
import Link from "next/link";

function NavBar() {
  return (
    <div className="px-4 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full h-10 w-10"
            >
              <GiHamburgerMenu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-72 border-r-0 flex flex-col p-0 [&>button]:hidden"
            side="left"
          >
            <SheetHeader className="px-6 pt-6 pb-4 space-y-0">
              <div className="flex items-center justify-between">
                <SheetTitle className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://cdn.pixabay.com/photo/2021/04/30/16/47/binance-logo-6219389_1280.png" />
                    <AvatarFallback>ZT</AvatarFallback>
                  </Avatar>
                  <div className="flex gap-1 text-xl font-bold">
                    <span className="text-orange-700">Zen</span>
                    <span>Trading</span>
                  </div>
                </SheetTitle>
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </SheetClose>
              </div>
            </SheetHeader>
            <div className="flex-1 px-6 mt-2 overflow-y-auto">
              <SideBaar />
            </div>
          </SheetContent>
        </Sheet>

        <Link href={"/"} className="text-sm lg:text-base cursor-pointer font-semibold">
          ZenTrading
        </Link>
        
        <div className="hidden md:block ml-4">
          <Button variant="outline" className="flex items-center gap-2">
            <SearchIcon className="h-4 w-4" />
            <span>Search</span>
          </Button>
        </div>
      </div>

      <div>
        <Avatar className="h-9 w-9">
          <AvatarFallback className="bg-orange-700 text-white">
            Z
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default NavBar;