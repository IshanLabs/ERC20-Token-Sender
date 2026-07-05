"use client";

import { useAccount } from "wagmi";

export default function WalletInfo() {
  const { address, chain, isConnected } = useAccount();

  if (!isConnected) return null;

  return (
    <div className="rounded-lg border p-4 space-y-2">
      <p>
        <strong>Address:</strong> {address}
      </p>

      <p>
        <strong>Network:</strong> {chain?.name}
      </p>

      <p>
        <strong>Chain ID:</strong> {chain?.id}
      </p>
    </div>
  );
}