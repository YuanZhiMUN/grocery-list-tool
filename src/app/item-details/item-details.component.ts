import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  item: Item;
  input: string;
  cartNumber: number;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private itemService: ItemService
  ) {}

  ngOnInit() {
    this.getItem();
    this.cartNumber = this.itemService.getCartNumber();
  }

  getItem(): void {
    const name  = this.route.snapshot.paramMap.get('name');
    this.itemService.getItem(name)
      .subscribe(item => this.item = item);
  }

  addToCart(product): void{
    window.alert('Your product has been added to the cart!');
    this.cartNumber += 1;
    this.itemService.addToCart(product);
  }

  onKey(event: any) { // without type info
    this.input = event.target.value;
  }

  cancelComment(): void{
    this.itemService.cancelComment(this.item.name);
  }

  addComment(): void{
    this.itemService.updateNote(this.item.name, this.input);
  }

  goBack(): void {
    this.location.back();
  }
}
