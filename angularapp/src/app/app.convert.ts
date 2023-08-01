import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convert'
})
export class ConvertPipe implements PipeTransform {

    transform(fromcurrency: number, toCurrency: number, amount: number)
        return Math.round(toCurrency*amount/fromcurrency)

}