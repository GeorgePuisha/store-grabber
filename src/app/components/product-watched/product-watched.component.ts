import { environment } from "../../../environments/environment";

import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: "app-product-watched",
  templateUrl: "./product-watched.component.html",
  styleUrls: ["./product-watched.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ProductWatchedComponent implements OnInit {

  profile: any;
  product: any = {};
  lastPrice: string;
  currency: string = "BYN";
  priceData: any = [];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Day';
  showYAxisLabel = true;
  yAxisLabel = 'Price';
  timeline = true;
  autoScale = true;
  colorScheme = {
    domain: ["#343A40"]
  };

  visible: boolean = false;

  public buildDateString(date: Date) {
    return date.getUTCDate().toString() + "." + (date.getUTCMonth() + 1).toString() + "." + date.getUTCFullYear().toString();
  }

  public createSeries(product) {
    let series: object[] = [];
    let date: Date = new Date(Date.parse(product.createdAt));
    product.price.forEach(price => {
      let point: object = {
        value: parseInt(price),
        name: this.buildDateString(date)
      };
      date.setDate(date.getDate() + 1);
      series.push(point);
    });
    return series;
  }

  public parseData(product: any) {
    let data: object = {
      name: product.name,
      series: this.createSeries(product)
    };
    this.priceData.push(data);
    console.log(this.priceData);
  }

  constructor(private route: ActivatedRoute, private http: HttpClient, public auth: AuthService) {
    this.auth.getProfile((err, profile) => {
      this.profile = profile;
      this.route.params.subscribe(params => {
        this.http
          .get(environment.API_URL + "watched/" + params.key + "/" + this.profile.email)
          .map((data) => JSON.stringify(data))
          .subscribe((data) => {
            this.product = JSON.parse(data);
            this.lastPrice = this.product.price[this.product.price.length - 1];
            this.parseData(this.product);
            this.visible = true;
          });
      });
    });
  }

  ngOnInit() {
  }

}
