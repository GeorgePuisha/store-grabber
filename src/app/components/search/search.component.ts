import { environment } from "../../../environments/environment";

import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ProductComponent } from "../product/product.component";
import { Product } from "../product";
import "rxjs/add/operator/map"

import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  title: string = "Results:";
  query: string;
  pagesMax: number = 0;
  pagesLoaded: number = 0;
  showedProducts: Product[] = [];
  isFound: boolean = false;
  loading: boolean = false;

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  public onKey(event: any) {
    this.query = event.target.value;
    this.loading = true;
    this.search();
  }

  public search() {
    this.showedProducts = [];
    this.pagesLoaded = 0;
    this.getPageAmount();
    this.loadPage();
  }

  public getPageAmount() {
    this.loading = true;
    this.http
      .get(environment.API_URL + "search/" + this.query + "/last")
      .map((data) => JSON.stringify(data))
      .subscribe((data) => {
        this.pagesMax = parseInt(data);
        this.pagesMax > 0 ? this.isFound = true : this.isFound = false;
        this.loading = false;
      });
  }

  public loadPage() {
    this.loading = true;
    const pageToLoad: number = this.pagesLoaded + 1;
    this.http
      .get(environment.API_URL + "search/" + this.query + "/" + pageToLoad.toString())
      .map((data) => JSON.stringify(data))
      .subscribe((data) => {
        const page: Product[] = JSON.parse(data);
        this.pagesLoaded++;
        this.showedProducts = this.showedProducts.concat(page);
        this.loading = false;
      });
  }

  public onScroll() {
    if (this.pagesLoaded < this.pagesMax) {
      this.loadPage();
    }
  }
}
