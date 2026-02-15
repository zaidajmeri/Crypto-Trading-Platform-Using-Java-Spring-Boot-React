import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import {
  ActivityIcon,
  BookMarkedIcon,
  CreditCardIcon,
  HomeIcon,
  LandmarkIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  WalletIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function SideBaar() {
  const menu = [
    {
      name: "Home",
      path: "/",
      icon: <HomeIcon className="h-6 w-6" />,
    },
    {
      name: "Portfolio",
      path: "/portfolio",
      icon: <LayoutDashboardIcon className="h-6 w-6" />,
    },
    {
      name: "Watchlist",
      path: "/watchlist",
      icon: <BookMarkedIcon className="h-6 w-6" />,
    },

    {
      name: "Activity",
      path: "/activity",
      icon: <ActivityIcon className="h-6 w-6" />,
    },
    {
      name: "Wallet",
      path: "/wallet",
      icon: <WalletIcon className="h-6 w-6" />,
    },
    {
      name: "Payment Details",
      path: "/payment-details",
      icon: <LandmarkIcon className="h-6 w-6" />,
    },
    {
      name: "Withdrawal",
      path: "/withdrawal",
      icon: <CreditCardIcon className="h-6 w-6" />,
    },

    {
      name: "Logout",
      path: "/",
      icon: <LogOutIcon className="h-6 w-6" />,
    },
  ];
  return (
    <div className="mt-10 space-y-5 ">
      
        <SheetClose className="w-full">
          {menu.map((item, index) => {
            return (
            <div className="flex px-5 flex-col py-2" key={index}>
                <Link href={item.path}>
                <Button
                variant="outline"
                className="flex items-center justify-center gap-5 py-6 w-full"
              >
                <span className="w-8">
                  {item.icon}
                </span>
                <p>{item.name}</p>
              </Button>
</Link>
            </div>
            )
              
            
          })}
        </SheetClose>
      </div>
  );
}

export default SideBaar;
