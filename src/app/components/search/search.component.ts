import { environment } from "../../../environments/environment";

import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ProductComponent } from "../product/product.component";
import { Product } from "../product";
import 'rxjs/add/operator/map'

import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  query: string;
  pagesLoaded: number = 0;
  showedProducts: Product[] = [];

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  public onKey(event: any) {
    this.query = event.target.value;
    if (event.keyCode == 13) {
      this.search();
    }
  }

  public search() {
    this.pagesLoaded = 1;
    this.showedProducts = [];
    this.loadPage(this.pagesLoaded);
  }

  public loadPage(pageToLoad: number) {
    this.http
      .get(environment.API_URL + "search/" + this.query + "/" + pageToLoad.toString())
      .map((data) => JSON.stringify(data))
      .subscribe((data) => {
        const page: Product[] = JSON.parse(data);
        this.showedProducts = this.showedProducts.concat(page);
        console.log(this.showedProducts);
      });
  }

  public onScroll() {
    this.pagesLoaded++;
    this.loadPage(this.pagesLoaded);
  }
}
