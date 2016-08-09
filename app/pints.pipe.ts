import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "pints",
  pure: false
})
export class PintsPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var pintFilter = args[0];
    if(pintFilter === "refill") {
      return input.filter((keg) => {
        if(keg.pints < 10) {
          return keg;
        };
      });
    } else if (pintFilter === "full"){
      return input.filter((keg) => {
        if(keg.pints === 15) {
          return keg;
        };
      });
    } else {
      return input;
    }
  }
}
