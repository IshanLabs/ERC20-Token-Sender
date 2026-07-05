# ERC20 Token Sender

A modern Web3 decentralized application (dApp) built with **Next.js**, **React**, **TypeScript**, **Wagmi**, **Viem**, and **Tailwind CSS** that allows users to connect their MetaMask wallet, view ERC-20 token balances, and securely transfer ERC-20 tokens on the Ethereum Sepolia test network.

---

## Features

- Connect MetaMask wallet
- Display connected wallet address
- Display connected network
- Display native ETH balance
- Read ERC-20 token information
  - Token Symbol
  - Token Decimals
  - Wallet Token Balance
- Send ERC-20 tokens to any Ethereum address
- Display transaction hash after successful submission
- Responsive dark UI

---

## Tech Stack

- Next.js
- React
- TypeScript
- Wagmi
- Viem
- TanStack Query
- Tailwind CSS
- MetaMask
- Ethereum Sepolia Testnet

---

## Screenshots

> Add screenshots here after deployment.

Example:

```
/screenshots/home.png
/screenshots/send-token.png
```

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/erc20-token-sender.git
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

## How It Works

1. Connect MetaMask.
2. Enter an ERC-20 token contract address.
3. The application reads:
   - Token Symbol
   - Token Decimals
   - Wallet Balance
4. Enter a recipient address.
5. Enter the token amount.
6. Sign the transaction in MetaMask.
7. Tokens are transferred on-chain.

---

## Project Structure

```
src/
│
├── app/
│
├── components/
│   ├── wallet/
│   └── sender/
│
├── lib/
│   ├── wagmi.ts
│   └── erc20ABI.ts
```

---

## Learning Objectives

This project was built to learn the fundamentals of Web3 development, including:

- Wallet connection
- Ethereum accounts
- Smart contract interaction
- Reading contract data
- Writing blockchain transactions
- ERC-20 token standard
- Wagmi hooks
- Viem utilities
- React state management
- Next.js App Router

---

## Future Improvements

- Transaction confirmation status
- Copy transaction hash
- Etherscan transaction link
- Better form validation
- Toast notifications
- Network switching
- Multi-token support
- Transaction history

---

## Author

**Ishan**

GitHub: https://github.com/YOUR_USERNAME

LinkedIn: https://linkedin.com/in/YOUR_LINKEDIN

---

## Acknowledgements

This project was designed and developed by **Ishan** as a personal learning project.

OpenAI's **ChatGPT** was used as a development assistant for explaining Web3 concepts, debugging issues, and reviewing implementation decisions. All code was integrated, tested, and adapted as part of the learning process.

---

## License

This project is licensed under the MIT License.
