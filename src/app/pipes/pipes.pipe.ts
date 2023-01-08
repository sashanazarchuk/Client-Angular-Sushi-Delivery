import { Pipe, PipeTransform } from '@angular/core';
import { IFood } from '../model/food';

@Pipe({
  name: 'filters'
})
export class PipesPipe implements PipeTransform {

  transform(foods: IFood[], search: string = ''): IFood[] {
    if (!search.trim()) {
      return foods
    }
    return foods.filter(food => {
      return food.name.toLowerCase().includes(search.toLowerCase());
    })
  }
}
