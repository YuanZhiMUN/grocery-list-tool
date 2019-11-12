import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: Item[];
  shoppingList: Item[];
  cartNumber: number;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
    this.cartNumber = this.itemService.getCartNumber();
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

  addToCart(product): void {
    window.alert('Your product has been added to the cart!');
    this.cartNumber += 1;
    this.itemService.addToCart(product);
  }
}
