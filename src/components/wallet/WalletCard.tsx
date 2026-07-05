"use client";

import { useAccount, useBalance, useDisconnect } from "wagmi";
import { formatUnits } from "viem";
import { Copy, LogOut } from "lucide-react";

export default function WalletCard() {
  const { address, chain, isConnected } = useAccount();

  const { data: balance, isLoading } = useBalance({
    address,
  });

  const { disconnectAsync } = useDisconnect();

  const shortAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : "";

  const formattedBalance = balance
    ? `${Number(formatUnits(balance.value, balance.decimals)).toFixed(4)} ${balance.symbol}`
    : "0";

    const copyAddress = async () => {
        if (!address) return;

        await navigator.clipboard.writeText(address);
    };

  if (!isConnected) return null;

  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900/80 p-6 shadow-xl backdrop-blur">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold tracking-wide">Connected Wallet</h2>

                <button onClick={() => disconnectAsync()}  className="rounded-xl bg-red-600 p-2.5 text-white transition-all duration-200 hover:scale-105 hover:bg-red-700">
                    <LogOut size={18} />
                </button>
            </div>

        <div className="space-y-5">
            <div>
            <p className="mb-1 text-sm text-gray-400">Address</p>

                <div className="flex items-center justify-between rounded-xl border border-gray-700 bg-gray-800/70 px-4 py-3">
                    <span className="font-mono">{shortAddress}</span>

                    <button onClick={copyAddress} className="rounded-lg p-2 transition hover:bg-gray-700">
                    <Copy size={18} />
                    </button>
                </div>
            </div>

            <div>
            <p className="mb-1 text-sm text-gray-400">Network</p>

                <div className="rounded-xl border border-gray-700 bg-gray-800/70 px-4 py-3">
                    {chain?.name}
                </div>
            </div>

            <div>
                <p className="mb-1 text-sm text-gray-400">Native Balance</p>

                <div className="rounded-xl border border-gray-700 bg-gray-800/70 px-4 py-3">
                    {isLoading ? "Loading..." : formattedBalance}
                </div>
            </div>
        </div>
    </div>
  );
}