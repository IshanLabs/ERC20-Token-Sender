"use client";

import { useState } from "react";
import { useReadContract, useWriteContract } from "wagmi";
import { parseUnits } from "viem";
import { erc20Abi } from "@/lib/erc20ABI";

type SendTokenProps = {
  tokenAddress: string;
};

export default function SendToken({ tokenAddress }: SendTokenProps) {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const isValidAddress =
    tokenAddress.startsWith("0x") && tokenAddress.length === 42;

  const { data: decimals } = useReadContract({
    address: tokenAddress as `0x${string}`,
    abi: erc20Abi,
    functionName: "decimals",
    query: {
      enabled: isValidAddress,
    },
  });

  const {
    writeContract,
    data: hash,
    isPending,
    error,
  } = useWriteContract();

  const handleSend = () => {
    if (!isValidAddress) {
      alert("Please enter a valid token contract address.");
      return;
    }

    if (!recipient.startsWith("0x") || recipient.length !== 42) {
      alert("Please enter a valid recipient address.");
      return;
    }

    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    if (decimals === undefined) {
      alert("Unable to load token decimals.");
      return;
    }

    writeContract({
      address: tokenAddress as `0x${string}`,
      abi: erc20Abi,
      functionName: "transfer",
      args: [
        recipient as `0x${string}`,
        parseUnits(amount, decimals),
      ],
    });
  };

  return (
    <div className="space-y-5 rounded-2xl border border-gray-800 bg-gray-900/80 p-6 shadow-xl backdrop-blur">
      <h2 className="text-lg font-bold tracking-wide">
        Send ERC-20 Token
      </h2>

      <div>
        <label className="mb-2 block text-sm text-gray-400">
          Recipient Address
        </label>

        <input
          type="text"
          placeholder="0x..."
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-gray-400">
          Amount
        </label>

        <input
          type="number"
          placeholder="0.0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        />
      </div>

        <button onClick={handleSend} disabled={!tokenAddress || !recipient || !amount || isPending}
            className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-blue-700 active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-700">
        
            {isPending ? "Waiting for Signature..." : "Send Token"}
            
        </button>

      {hash && (
        <div className="rounded-xl border border-gray-700 bg-gray-800/70 p-5">
          <p className="text-sm text-gray-400">Transaction Hash</p>
          <p className="mt-2 break-all font-mono text-sm">{hash}</p>
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-red-500 bg-red-900/20 p-4">
          <p className="text-red-400">
            {error.message}
          </p>
        </div>
      )}
    </div>
  );
}