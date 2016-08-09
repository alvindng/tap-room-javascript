import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { PintsPipe } from './pints.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, NewKegComponent, EditKegDetailsComponent],
  pipes: [PintsPipe],
  template: `
    <select (change)="onPintChange($event.target.value)">
      <option value="all">Show All</option>
      <option value="refill">Show Kegs in Need of Refill</option>
      <option value="full">Show Full Kegs</option>
    </select>
    <keg-display *ngFor="#currentKeg of kegList | pints:filterPints" (click)="kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [class.expensiveKeg]="currentKeg.price >= 5"
    [class.cheapKeg]="currentKeg.price < 5"
    [keg]="currentKeg">
    </keg-display>
    <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
    </edit-keg-details><br><br>
    <new-keg (onSubmitNewKeg)="createKeg($event.name, $event.brand, $event.price, $event.alcohol)"></new-keg>
  `
})
export class KegListComponent {
  public filterPints: number = 124;
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(name: string, brand: string, price: number, alcohol: number): void {
    this.kegList.push(
      new Keg(name, brand, price, alcohol, this.kegList.length)
    );
  }
  onPintChange(filterOption) {
    this.filterPints = filterOption;
  }
}
