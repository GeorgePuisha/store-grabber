import { environment } from "../../../environments/environment";

import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { ProductComponent } from "../product/product.component";
import { Product } from "../product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {

  @Input() title: string;
  @Input() canBeWatched: boolean;
  @Input() showedProducts: Product[];

  constructor() { }

  ngOnInit() {
  }
}
