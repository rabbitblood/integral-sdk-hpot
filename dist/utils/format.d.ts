import { Currency, CurrencyAmount, Price } from '../entities';
import { BigNumberish } from '@ethersproject/bignumber';
export declare const capitalize: (s: any) => string;
export declare const formatK: (value: string) => any;
export declare function shortenAddress(address: string, chars?: number): string;
export declare function shortenString(string: string, length: number): string;
export declare function formatPercent(percentString: any): string;
export declare const formatNumber: (number: any, usd?: boolean, scale?: boolean) => string;
export declare function formatNumberScale(number: any, usd?: boolean, decimals?: number): string;
export declare function escapeRegExp(string: string): string;
export declare const formatBalance: (value: BigNumberish, decimals?: number, maxFraction?: number) => string;
export declare function formatCurrencyAmount(amount: CurrencyAmount<Currency> | undefined, sigFigs: number): string;
export declare function formatPrice(price: Price<Currency, Currency> | undefined, sigFigs: number): string;
export declare function formatDateAgo(date: Date): string;