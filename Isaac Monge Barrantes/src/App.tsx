import { useWallet } from "./hooks/useWallet";
import { WalletSection } from "./components/WalletSection";

export default function App() {
  const wallet = useWallet();

  return (
    <main className="container">
      <header className="hero">
        <h1>🌴 Propina Pura Vida</h1>
        <p>Envía propinas en XLM a tus creadores, meseros o amigos favoritos, sobre Stellar Testnet.</p>
      </header>

      <WalletSection
        address={wallet.address}
        wrongNetwork={wallet.wrongNetwork}
        connecting={wallet.connecting}
        error={wallet.error}
        onConnect={wallet.connect}
        onDisconnect={wallet.disconnect}
      />
    </main>
  );
}
