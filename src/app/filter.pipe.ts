import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class FilterPipe implements PipeTransform {

  public transform(value: any,keys: string, term: string): any {
    if (!term) return value;
    return (value || []).filter(mydata => keys.split(',').some(key => mydata.hasOwnProperty(key) && 
    new RegExp(term, 'gi').test(mydata[key])));
  }

}
