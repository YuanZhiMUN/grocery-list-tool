import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {
  items: Item[];
  shoppingList: Item[];
  selectedItem: Item;
  isPaid: boolean[];
  constructor(
    private itemService: ItemService,
    ) { 
      this.shoppingList = this.itemService.getShoppingList();
      this.isPaid = this.itemService.getDefaultPaid();
    }
    
  ngOnInit() {

  }

  addToCart(item): void {
    window.alert('Your product has been added to the cart!');
    this.itemService.addToCart(item);
  }

  deleteItem(item): void{
    if(confirm("Are you sure to delete "+ item.name)) {
      this.shoppingList = this.itemService.deleteItem(item.name);
    }
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
  }
} 
