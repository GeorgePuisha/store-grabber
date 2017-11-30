import { environment } from "../../../environments/environment";

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: 'app-product-watched',
  templateUrl: './product-watched.component.html',
  styleUrls: ['./product-watched.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductWatchedComponent implements OnInit {

  product: any = {};
  lastPrice: string;
  currency: string = "BYN";

  constructor(private route: ActivatedRoute, private http: HttpClient, public auth: AuthService) {
    this.route.params.subscribe(params => {
      this.http
        .get(environment.API_URL + "watched/" + params.key)
        .map((data) => JSON.stringify(data))
        .subscribe((data) => {
          this.product = JSON.parse(data);
          this.lastPrice = this.product.price[this.product.price.length - 1]
        });
    });
  }

  ngOnInit() {
  }

}
