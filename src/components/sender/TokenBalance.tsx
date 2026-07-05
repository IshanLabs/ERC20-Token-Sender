"use client";

import { useAccount, useReadContract } from "wagmi";
import { formatUnits } from "viem";
import { erc20Abi } from "@/lib/erc20ABI";

type TokenBalanceProps = {
  tokenAddress: string;
};

export default function TokenBalance({ tokenAddress }: TokenBalanceProps) {
  const { address } = useAccount();

  const isValidAddress =
    tokenAddress.startsWith("0x") && tokenAddress.length === 42;

  const { data: balance } = useReadContract({
    address: tokenAddress as `0x${string}`,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: {
      enabled: !!address && isValidAddress,
    },
  });

  const { data: decimals } = useReadContract({
    address: tokenAddress as `0x${string}`,
    abi: erc20Abi,
    functionName: "decimals",
    query: {
      enabled: isValidAddress,
    },
  });

  const { data: symbol } = useReadContract({
    address: tokenAddress as `0x${string}`,
    abi: erc20Abi,
    functionName: "symbol",
    query: {
      enabled: isValidAddress,
    },
  });

  const formattedBalance =
    balance !== undefined && decimals !== undefined
      ? Number(formatUnits(balance, decimals)).toFixed(4)
      : null;

  return (
    <div className="space-y-5 rounded-2xl border border-gray-800 bg-gray-900/80 p-6 shadow-xl backdrop-blur">
      <h2 className="text-lg font-bold tracking-wide">ERC-20 Balance</h2>

      {!isValidAddress ? (
        <p className="text-gray-400">
          Enter a valid token contract address above.
        </p>
      ) : formattedBalance ? (
        <div className="rounded-xl border border-gray-700 bg-gray-800/70 p-5">
          <p className="text-sm text-gray-400">Balance</p>
          <p className="mt-2 text-3xl font-bold">
            {formattedBalance} {symbol}
          </p>
        </div>
      ) : (
        <p className="text-gray-400">Loading token data...</p>
      )}
    </div>
  );
}