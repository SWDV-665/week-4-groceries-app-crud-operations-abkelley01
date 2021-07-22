import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {
/*all functions pertaining to list items can be found here: add, remove, edit*/
  items = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }

  addItem(item) {
    this.items.push(item);
  }

  editItem(item,index) {
    this.items[index] = item;
  }

}
