import * as anchor from '@project-serum/anchor';
import { AnchorWallet, WalletContextState } from '@solana/wallet-adapter-react';
import { Connection } from '@solana/web3.js';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { idl, programs } from '@dialectlabs/web3';

const URLS = {
  // TODO: Move to protocol/web3
  devnet: 'https://api.devnet.solana.com',
  localnet: 'http://localhost:8899',
};

export const connected = (wallet: WalletType): boolean => {
  /*
    Wallets can be of type AnchorWallet or WalletContextState.

    - AnchorWallet is undefined if not connected. It has no connected attribute.
    - WalletContextState may be either null/undefined, or its attribute connected is false if it's not connected.

    This function connected should accommodate both types of wallets.
  */
  return (
    (wallet || false) && ('connected' in wallet ? wallet?.connected : true)
  );
};

type PropsType = {
  children: JSX.Element;
};

export type WalletType = WalletContextState | AnchorWallet | null | undefined;
export type ProgramType = anchor.Program | null;

type ValueType = {
  wallet: WalletType;
  setWallet: (_: WalletType) => void;
  network: string | null;
  setNetwork: (_: string | null) => void;
  rpcUrl: string | null;
  setRpcUrl: (_: string | null) => void;
  program: ProgramType;
};

const ApiContext = createContext<ValueType | null>(null);

export const ApiProvider = (props: PropsType): JSX.Element => {
  const [wallet, setWallet] = useState<WalletType>(null);
  const [program, setProgram] = useState<ProgramType>(null);
  const [network, setNetwork] = useState<string | null>('devnet');
  const [rpcUrl, setRpcUrl] = useState<string | null>(
    'https://api.devnet.solana.com'
  );
  const value = {
    wallet,
    setWallet,
    network,
    setNetwork,
    rpcUrl,
    setRpcUrl,
    program,
  };
  useEffect(() => {
    if (connected(wallet)) {
      console.log('CONNECTED', wallet);
      const n: 'devnet' | 'localnet' =
        network && Object.keys(URLS).includes(network)
          ? (network as 'devnet' | 'localnet')
          : 'devnet';
      console.log('n', n);
      const u = rpcUrl || URLS[n]; // TODO: Move to protocol/web3
      console.log('u', u);
      const connection = new Connection(u, 'recent');
      const provider = new anchor.Provider(
        connection,
        wallet as anchor.Wallet, // TODO: Check that this cast is acceptable
        anchor.Provider.defaultOptions()
      );
      anchor.setProvider(provider);
      const program = new anchor.Program(
        idl as anchor.Idl,
        programs[n].programAddress
      );
      setProgram(program);
    } else {
      console.log('DISCONNECTED', wallet);
      setProgram(null);
    }
  }, [connected(wallet), network, rpcUrl]);
  return (
    <ApiContext.Provider value={value}>{props.children}</ApiContext.Provider>
  );
};

export function useApi(): ValueType {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
}
