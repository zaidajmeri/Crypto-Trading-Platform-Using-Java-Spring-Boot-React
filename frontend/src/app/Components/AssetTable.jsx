import React from "react";
import { useState, useEffect } from "react";
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
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const marketData = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
    );
    const json = await marketData.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="px-4 py-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] pl-4">Coin</TableHead>
            <TableHead className="px-6">Symbol</TableHead>
            <TableHead className="px-6">Volume</TableHead>
            <TableHead className="px-6">Market Cap</TableHead>
            <TableHead className="px-6">24h</TableHead>
            <TableHead className="text-right pr-4">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell className="font-medium pl-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
                    </Avatar>
                    <span>BitCoin</span>
                  </div>
                </TableCell>
                <TableCell className="px-6">BTC</TableCell>
                <TableCell className="px-6">8,707,416,005</TableCell>
                <TableCell className="px-6">1,364,881,428,323</TableCell>
                <TableCell className="px-6">-0.2334%</TableCell>
                <TableCell className="text-right pr-4">69,249</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default AssetTable;