import { environment } from "../../../environments/environment";

import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { HttpClient } from "@angular/common/http";
import { Product } from "../product";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {

  profile: any;
  title: string = "Watched goods:"
  showedProducts: Product[] = [];

  constructor(public auth: AuthService, public http: HttpClient) { }

  public getAllWatched() {
    this.http
      .get(environment.API_URL + "watched/" + this.profile.email)
      .map((data) => JSON.stringify(data))
      .subscribe((data) => {
        this.showedProducts = JSON.parse(data);
      });
  }

  ngOnInit() {
    this.auth.getProfile((err, profile) => {
      this.profile = profile;
      this.getAllWatched();
    });
  }
}
