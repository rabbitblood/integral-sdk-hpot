import JSBI from 'jsbi';
export declare abstract class SwapMath {
    /**
     * Cannot be constructed.
     */
    static computeSwapStep(sqrtRatioCurrentX96: JSBI, sqrtRatioTargetX96: JSBI, liquidity: JSBI, amountRemaining: JSBI, feePips: number): [JSBI, JSBI, JSBI, JSBI];
}
