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

  titleRecommended: string = "Watched by other users:";
  titleShowed: string = "Results:";
  query: string;
  pagesMax: number = 0;
  pagesLoaded: number = 0;
  recommendedProducts: Product[] = [];
  showedProducts: Product[] = [];

  hasRecommendations: boolean = false;
  isFound: boolean = false;
  loading: boolean = false;

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  public onKey(event: any) {
    this.query = event.target.value;
    this.loading = true;
    setTimeout(() => this.search(), 500);
  }

  public search() {
    this.showedProducts = [];
    this.pagesLoaded = 0;
    const regex = new RegExp("[^\s-]")
    if (this.query && regex.test(this.query)) {
      this.getPageAmount();
      this.getRecommended();
      this.loadPage();
    }
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

  public handleRecommended(response) {
    this.recommendedProducts = [];
    response.forEach((product) => {
      const recommended: Product = product._source;
      this.recommendedProducts = this.recommendedProducts.concat(recommended);
    });
    this.recommendedProducts.length > 0 ? this.hasRecommendations = true : this.hasRecommendations = false;
  }

  public getRecommended() {
    this.loading = true;
    this.http
      .get(environment.API_URL + "recommended/" + this.query)
      .map((data) => JSON.stringify(data))
      .subscribe((data) => {
        this.handleRecommended(JSON.parse(data));

        this.loading = false;
      });
  }

  public onScroll() {
    if (this.pagesLoaded < this.pagesMax) {
      this.loadPage();
    }
  }
}
