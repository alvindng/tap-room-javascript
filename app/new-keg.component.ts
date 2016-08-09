import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div>
      <h3>Add a Keg:</h3>
      <input placeholder="Name" class="col-sm-8 input-lg" #newName>
      <input placeholder="Brand" class="col-sm-8 input-lg" #newBrand>
      <input placeholder="Price" class="col-sm-8 input-lg" #newPrice>
      <input placeholder="Alcohol Content" class="col-sm-8 input-lg" #newAlcohol>
      <button class="btn btn-lg btn-success" (click)="addKeg(newName, newBrand, newPrice, newAlcohol)">Add</button>
    </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Object>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, userBrand: HTMLInputElement, userPrice: HTMLInputElement, userAlcohol: HTMLInputElement){
    this.onSubmitNewKeg.emit({
      name: userName.value,
      brand: userBrand.value,
      price: userPrice.value,
      alcohol: userAlcohol.value
    });
    userName.value = "";
    userBrand.value = "";
    userPrice.value = "";
    userAlcohol.value = "";
  }
}
