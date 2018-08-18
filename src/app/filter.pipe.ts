import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ninjas: any, searchTerm: any): any {

    if(searchTerm === undefined){
      return ninjas;
    }

    return ninjas.filter(function(ninja){
      return ninja.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

}
