import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';
import { EditKegDetailsComponent } from './edit-keg-details.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, NewKegComponent, EditKegDetailsComponent],
  template: `
    <keg-display *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)"
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
}
