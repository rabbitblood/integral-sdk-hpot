import { BigintIsh } from '../types/BigIntish';
import { Fraction } from './Fraction';
import { Rounding } from '../enums/rounding';
export declare class Percent extends Fraction {
    /**
     * This boolean prevents a fraction from being interpreted as a Percent
     */
    readonly isPercent: true;
    constructor(numerator: BigintIsh, denominator?: BigintIsh);
    add(other: Fraction | BigintIsh): Percent;
    subtract(other: Fraction | BigintIsh): Percent;
    multiply(other: Fraction | BigintIsh): Percent;
    divide(other: Fraction | BigintIsh): Percent;
    toSignificant(significantDigits?: number, format?: object, rounding?: Rounding): string;
    toFixed(decimalPlaces?: number, format?: object, rounding?: Rounding): string;
}
