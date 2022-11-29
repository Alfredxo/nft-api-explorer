import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import {alchemyProvider} from 'wagmi/providers/alchemy'
import Explore from './pages/explore';
import { InjectedConnector } from 'wagmi/connectors/injected'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'


const {chains, provider, webSocketProvider} = configureChains([chain.goerli], 
  [alchemyProvider({ apiKey: 'zgrXoFNALjBoNx6U_R0xLkfZJph_Yxz6' })])

const client = createClient({
  autoConnect: true,
  provider, webSocketProvider,
  connectors: [
    new WalletConnectConnector({ chains }), 
    new MetaMaskConnector({ chains }), 
    new CoinbaseWalletConnector({ chains }), 
    new InjectedConnector({ chains, options: { name: "Injected" } })
  ],
})




function App() {
  return (
    <WagmiConfig client={client}>
    <>
    <Explore></Explore>
    </>
    </WagmiConfig>
  );
}

export default App;
