import { Price, Token } from '../entities';
export declare function getTickToPrice(baseToken?: Token, quoteToken?: Token, tick?: number): Price<Token, Token> | undefined;
