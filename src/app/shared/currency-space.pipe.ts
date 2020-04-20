import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'currencySpace'
})

class SpacePipe implements PipeTransform {
  transform (value: any, args?: any): any {
    return value.replace('R$', 'R$ ')
      .replace('.', ',')
  }
}

export default SpacePipe
