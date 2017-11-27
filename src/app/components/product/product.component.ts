import { environment } from "../../../environments/environment";

import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Product } from "../product";

import { HttpClient } from "@angular/common/http";

import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  profile: any;
  hiddenButtons: any[] = [];
  @Input() showedProducts: Product[];

  constructor(public http: HttpClient, public auth: AuthService) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

  public watch(product: Product) {
    this.http
      .get(environment.API_URL + "watch/" + this.profile.name + "/" + product.key)
      .map((data) => JSON.stringify(data))
      .subscribe((data) => {
      });
    this.hiddenButtons[product.key] = true;
  }

}
