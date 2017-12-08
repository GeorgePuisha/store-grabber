import { environment } from "../../../environments/environment";
import * as moment from "moment";

import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

import { AuthService } from "../../services/auth/auth.service";
import { CurrencyService } from "../../services/currency/currency.service";

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
  priceData: any = [];

  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = "Day";
  showYAxisLabel = true;
  yAxisLabel = "Price";
  timeline = true;
  autoScale = true;
  colorScheme = {
    domain: ["#4BBF73"]
  };

  visible: boolean = false;

  public createSeries(product) {
    let series: object[] = [];
    let date = moment(product.createdAt);
    product.price.forEach(price => {
      let point: object = {
        value: parseInt(price),
        name: date.format("DD.MM.YYYY")
      };
      date = moment(date).add(1, "days");
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
  }

  constructor(private route: ActivatedRoute, private http: HttpClient, public auth: AuthService, public currency: CurrencyService) {
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
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }
}
