import { environment } from "../../../environments/environment";

import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { Product } from "../product";

import { HttpClient } from "@angular/common/http";

import { AuthService } from "../../services/auth/auth.service";
import { CurrencyService } from "../../services/currency/currency.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  profile: any;
  @Input() product: Product;
  @Input() canBeWatched: boolean = true;

  constructor(public http: HttpClient, public auth: AuthService, public currency: CurrencyService) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.profile = this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

  public watch(product: Product) {
    this.http
      .get(environment.API_URL + "watch/" + this.profile.email + "/" + product.key)
      .map((data) => JSON.stringify(data))
      .subscribe((data) => {
      });
    this.canBeWatched = false;
  }

  public unwatch(product: Product) {
    this.http
      .get(environment.API_URL + "unwatch/" + this.profile.email + "/" + product.key)
      .map((data) => JSON.stringify(data))
      .subscribe((data) => {
      });
    this.canBeWatched = true;
  }

}
