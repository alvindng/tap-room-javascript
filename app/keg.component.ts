import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <div>
    <h4>{{ keg.brand }}, {{ keg.name }}</h4>
    <h5>{{ keg.price }}, {{ keg.alcohol }}</h5>
    <h6>Pints Left: {{ keg.pints }}</h6>
    <button (click)="buyPint()" class="btn btn-success">Buy Pint</button>
  </div><br>
  `
})
export class KegComponent {
  public keg: Keg;
  buyPint(){
    if (this.keg.pints === 0) {
      return this.keg.pints;
    } else {
      this.keg.pints -= 1
    }
  }
}
