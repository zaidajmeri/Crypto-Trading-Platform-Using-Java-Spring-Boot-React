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
    <div className="space-y-2 flex flex-col">
      {menu.map((item, index) => {
        return (
          <SheetClose asChild key={index}>
            <Link href={item.path} className="w-full">
              <Button
                variant="outline"
                className="flex items-center justify-start gap-3 py-6 w-full"
              >
                {item.icon}
                <span className="text-base">{item.name}</span>
              </Button>
            </Link>
          </SheetClose>
        );
      })}
    </div>
  );
}

export default SideBaar;