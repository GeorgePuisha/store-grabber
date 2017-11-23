import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Product } from "../product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  @Input() showedProducts: Product[];

  constructor() { }

  ngOnInit() {
    console.log(this.showedProducts);
  }

}
