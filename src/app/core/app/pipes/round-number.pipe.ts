import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'roundNumber'})
export class RoundNumberPipe implements PipeTransform {
    public transform(currentNumber: any, currencyType: string): string {
        if (null === currentNumber) {
            return '-';
        }

        currentNumber = parseFloat(currentNumber);

        if (!currentNumber) {
            return 0 + ' ' + currencyType;
        }

        let formattedNumber = this.uglyJsFormater(currentNumber, 9);

        if (['EUR', '€', '$', 'USD', 'USDT'].includes(currencyType)) {
            formattedNumber = this.uglyJsFormater(currentNumber, 2);
        } else if (currencyType === 'BTC') {
            formattedNumber = this.uglyJsFormater(currentNumber, 9);
        }  else if (currencyType === '%') {
            formattedNumber = this.uglyJsFormater(currentNumber, 2);
        }

        // Regex for removing zeros .replace(/([0-9]+(\.[0-9]*[1-9])?)(\.?0+$)/,'$1')

        return formattedNumber + ' ' + currencyType;
    }

    private uglyJsFormater(x: number, precision: number): string {
        const factor = Math.pow(10, precision);

        return (Math.round(x * factor) / factor).toFixed(precision);
    }

}
