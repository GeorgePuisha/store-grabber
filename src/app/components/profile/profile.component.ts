import { environment } from "../../../environments/environment";

import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { CurrencyService } from "../../services/currency/currency.service";
import { HttpClient } from "@angular/common/http";
import { Product } from "../product";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {

  profile: any;
  visible: boolean = false;
  title: string = "Watched goods:"
  showedProducts: Product[] = [];

  constructor(public auth: AuthService, public http: HttpClient, public currency: CurrencyService) {
  }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      this.getAllWatched();
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        this.getAllWatched();
      });
    }
  }

  public getAllWatched() {
    this.http
      .get(environment.API_URL + "watched/all/" + this.profile.email)
      .map((data) => JSON.stringify(data))
      .subscribe((data) => {
        this.showedProducts = JSON.parse(data);
        this.visible = true;
      });
  }
}
