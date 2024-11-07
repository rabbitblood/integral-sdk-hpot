import { Token } from '../entities';
/**
 * Computes a pool address
 * @param poolDeployer The Algebra Pool Deployer address
 * @param tokenA The first token of the pair, irrespective of sort order
 * @param tokenB The second token of the pair, irrespective of sort order
 * @param initCodeHashManualOverride The initial code hash override
 * @returns The pool address
 */
export declare function computePoolAddress({ tokenA, tokenB, initCodeHashManualOverride, poolDeployer }: {
    tokenA: Token;
    tokenB: Token;
    initCodeHashManualOverride?: string;
    poolDeployer?: string;
}): string;
export declare function computeCustomPoolAddress({ tokenA, tokenB, customPoolDeployer, initCodeHashManualOverride, mainPoolDeployer }: {
    tokenA: Token;
    tokenB: Token;
    customPoolDeployer: string;
    initCodeHashManualOverride?: string;
    mainPoolDeployer?: string;
}): string;
export declare function computePoolAddressZkSync({ poolDeployer, tokenA, tokenB, initCodeHashManualOverride, }: {
    tokenA: Token;
    tokenB: Token;
    initCodeHashManualOverride?: string;
    poolDeployer?: string;
}): string;
