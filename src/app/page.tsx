"use client";

import { useState } from "react";

import dynamic from "next/dynamic";

const WalletConnector = dynamic(() => import("@/components/wallet/WalletConnector"), { ssr: false });

const WalletCard = dynamic(() => import("@/components/wallet/WalletCard"), { ssr: false });

const TokenBalance = dynamic(() => import("@/components/sender/TokenBalance"), { ssr: false });

const SendToken = dynamic(() => import("@/components/sender/SendToken"), { ssr: false });

export default function Home() {
  const [tokenAddress, setTokenAddress] = useState("");

  return (
          <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black px-6 py-10">
        <div className="mx-auto w-full max-w-4xl space-y-8">

          <div className="text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-white">
              TokenSender
            </h1>

            <p className="mt-3 text-lg text-gray-400">
              Send ERC-20 Tokens securely on Ethereum using MetaMask.
            </p>
          </div>

          <WalletConnector />

          <WalletCard />

          <div className="rounded-2xl border border-gray-800 bg-gray-900/80 p-6 shadow-xl backdrop-blur">
            <label className="mb-3 block text-sm font-medium text-gray-400">
              Token Contract Address
            </label>

            <input
              type="text"
              value={tokenAddress}
              onChange={(e) => setTokenAddress(e.target.value)}
              placeholder="0x..."
              className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <TokenBalance tokenAddress={tokenAddress} />

          <SendToken tokenAddress={tokenAddress} />

        </div>
      </main>
  );
}