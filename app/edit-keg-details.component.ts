import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <div>
      <h3>Edit Keg:</h3>
      <label>Name:</label>
      <input [(ngModel)]="keg.name" class="col-sm-8 input-lg" />
      <label>Brand:</label>
      <input [(ngModel)]="keg.brand" class="col-sm-8 input-lg" />
      <label>Price:</label>
      <input [(ngModel)]="keg.price" class="col-sm-8 input-lg" />
      <label>Alcohol:</label>
      <input [(ngModel)]="keg.alcohol" class="col-sm-8 input-lg" />
    </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
