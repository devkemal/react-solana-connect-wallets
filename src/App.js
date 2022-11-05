import React, { useMemo } from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton, WalletDisconnectButton } from '@solana/wallet-adapter-react-ui';
import {
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletWalletAdapter,
  TrustWalletAdapter,
  WalletConnectWalletAdapter,
  SolletExtensionWalletAdapter
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';

function App() {
  // https://solana-labs.github.io/wallet-adapter/example/

  const network = WalletAdapterNetwork.Devnet; //(can be set to 'devnet', 'testnet', or 'mainnet-beta'.)

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter(),
      new SolletWalletAdapter(),
      new TrustWalletAdapter(),
      new WalletConnectWalletAdapter(),
      new SolletExtensionWalletAdapter(),
    ],
    []
  );
  return (
    <>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <div className='connectWallet'>
              <WalletDisconnectButton style={{ margin: '20px' }} />
              <WalletMultiButton style={{ margin: '20px' }} />
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
      <code>
        This Repo: <a href="https://github.com/humangillerden/react-solana-connect-wallets" target={'_blank'} rel="noreferrer noopener">/humangillerden/react-solana-connect-wallets</a><br />
        Source: <a href="https://github.com/solana-labs/wallet-adapter" target={'_blank'} rel="noreferrer noopener">/solana-labs/wallet-adapter</a>
      </code>
    </>
  );
}

export default App;