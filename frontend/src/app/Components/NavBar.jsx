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
import { SearchIcon } from "lucide-react";

function NavBar() {
  return (
    <div className="px-2 py-3 border-b z-50 backgroud bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center">
      <div className=" flex items-center gap-3">
        <Sheet>
          <SheetTrigger>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full h-11 w-11"
            >
              <GiHamburgerMenu className="h-9 w-9 " />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-72 border-r-0 flex flex-col justify-center "
            side="left"
          >
            <SheetHeader>
              <SheetTitle>
                <div className=" text-3xl flex justify-center items-center gap-2">
                  <Avatar>
                    <AvatarImage src="https://cdn.pixabay.com/photo/2021/04/30/16/47/binance-logo-6219389_1280.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex gap-1 font-bold">
                    <span className="font-bold text-orange-700">Zosh</span>
                    <span>Tread</span>
                  </div>
                </div>
              </SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <SideBaar/>
          </SheetContent>
        </Sheet>

        <p className="text-sm lg:text-base cursor-pointer">Zosh treding</p>
        <div className="p-0 ml-9">
            <Button variant="outline" className="flex items-center gap-3">
                <SearchIcon/>
                <span>Search</span>
            </Button>

        </div>
      </div>

      <div className="">
        <Avatar>
            <AvatarFallback>
               Z 
            </AvatarFallback>
        </Avatar>
      </div>


    </div>
  );
}

export default NavBar;
