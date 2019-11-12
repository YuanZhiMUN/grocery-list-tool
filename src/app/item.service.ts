import { Injectable } from '@angular/core';
import { Item } from './item';
import { ITEMS } from './mock-item-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  shoppingList = [];
  paid = [];
  constructor() { }

  getItems(): Observable<Item[]> {
    return of(ITEMS);
  }

  getItem(name:any): Observable<Item> {
    return of(ITEMS.find(item => item.name === name));
  }

  addToCart(item: Item): void {
    this.shoppingList.push(item);
  }

  getShoppingList(){
    return this.shoppingList;
  }

  deleteItem(name: any){
    for(let i=0; i <this.shoppingList.length; i++){
      if(this.shoppingList[i].name === name){
        this.shoppingList.splice(i, 1);
        return this.shoppingList;
      }
    }
  }

  updateNote(name: string, context: string) {
    this.getItem(name).subscribe(item => {
      item.comment = context;
      return item;
    })
  }

  getDefaultPaid(){
    for(let i=0; i<this.shoppingList.length; i++){
      this.paid[i] = false;
    }
    return this.paid;
  }

  getCartNumber(){
    return this.shoppingList.length;
  }

  cancelComment(name: string){
    this.getItem(name).subscribe(item => {
      item.comment = "";
      return item;
    })
  }
}
