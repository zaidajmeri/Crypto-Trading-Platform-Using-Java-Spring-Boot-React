import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

function AssetTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Coin</TableHead>
          <TableHead>Symbol</TableHead>
          <TableHead>Valume</TableHead>
          <TableHead>Market Cap</TableHead>
          <TableHead>24h</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium flex items-center gap-2">
            <Avatar className="-z-50">
              <AvatarImage
                src="https://coin-images.coingecko.com/coins/
images/1/large/bitcoin.png?1696501400"
              />
            </Avatar>
            <span>BitCoin</span>
          </TableCell>
          <TableCell>BTC </TableCell>
          <TableCell>8707416005</TableCell>
          <TableCell className="">1364881428323</TableCell>
          <TableCell className="">-0.2334%</TableCell>
          <TableCell className="text-right  ">69249</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default AssetTable;
