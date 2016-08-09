import { Component } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <keg-list
      [kegList]="kegs"
      (onKegSelect)="kegWasSelected($event)">
    </keg-list>
  </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Heffeweisen", "Widmer Brewery", 5.5, 11, 0),
      new Keg("Total Domination IPA", "Ninkasi", 6, 10.5, 1),
      new Keg("PBR", "PBR", 2, 5, 2)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
  }
}
