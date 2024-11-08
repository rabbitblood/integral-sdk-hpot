import { ChainId } from '../constants/chainIds';
import { Token } from './Token';

/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WNATIVE: { [chainId: number]: Token } = {
  [ChainId.Holesky]: new Token(
    ChainId.Holesky,
    '0x94373a4919b3240d86ea41593d5eba789fef3848',
    18,
    'WETH',
    'Wrapped ETH'
  ),
  [ChainId.BerachainTestnet]: new Token(
    ChainId.BerachainTestnet,
    '0x7507c1dc16935b82698e4c63f2746a2fcf994df8',
    18,
    'WBERA',
    'Wrapped BERA'
  ),
};
