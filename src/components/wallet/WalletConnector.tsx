"use client";

import { useAccount, useConnect } from "wagmi";

export default function WalletConnector() {
  const { isConnected } = useAccount();
  const { connect, connectors } = useConnect();

  if (isConnected) return null;

  const injectedConnector = connectors.find(
    (connector) => connector.type === "injected"
  );

  return (
    <button
      onClick={() => {
        if (injectedConnector) {
          connect({ connector: injectedConnector });
        }
      }}
      className="w-full rounded-2xl bg-blue-600 px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-blue-700 active:scale-95"
    >
      Connect Wallet
    </button>
  );
}