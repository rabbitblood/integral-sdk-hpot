import { Price, Token } from "../entities";
export declare function tryParsePrice(baseToken?: Token, quoteToken?: Token, value?: string): Price<Token, Token> | undefined;
export declare function tryParseTick(baseToken?: Token, quoteToken?: Token, value?: string, tickSpacing?: number): number | undefined;
