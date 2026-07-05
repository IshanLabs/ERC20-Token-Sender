"use client";

import { useAccount, useDisconnect } from "wagmi";

export default function DisconnectButton() {
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  if (!isConnected) return null;

  return (
    <button
      onClick={() => disconnect()}
      className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white transition hover:bg-red-700"
    >
      Disconnect
    </button>
  );
}