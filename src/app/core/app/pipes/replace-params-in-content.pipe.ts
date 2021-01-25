import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replaceParamsInContent'
})
export class ReplaceParamsInContentPipe implements PipeTransform {

    transform(value: string, regexValue: string, replaceValue: string): any {
        let regex = new RegExp(regexValue, 'g');
        return value.replace(regex, replaceValue);
    }
}
