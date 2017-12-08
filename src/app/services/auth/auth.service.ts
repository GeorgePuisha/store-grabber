import { environment } from "../../../environments/environment";

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

import "rxjs/add/operator/filter";
import * as auth0 from "auth0-js";

@Injectable()
export class AuthService {

  userProfile: any;

  auth0 = new auth0.WebAuth({
    clientID: environment.CLIENT_ID,
    domain: "store-grabber.eu.auth0.com",
    responseType: "token id_token",
    audience: "https://store-grabber.eu.auth0.com/userinfo",
    redirectUri: environment.URL,
    scope: "openid email profile"
  });

  constructor(public router: Router, public http: HttpClient) { }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = "";
        this.setSession(authResult);
        this.router.navigate(["/"]);
      } else if (err) {
        this.router.navigate(["/"]);
      }
    });
  }

  private hoursToMilliseconds(hours: number): number {
    const minutesInHour = 60;
    const secondsInMinute = 60;
    const millisecondsInSecond = 1000;
    return hours * minutesInHour * secondsInMinute * millisecondsInSecond;
  }

  private setSession(authResult): void {
    const hoursInDay = 24;
    const expiresAt = JSON.stringify(this.hoursToMilliseconds(hoursInDay) + new Date().getTime());
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
    this.saveUser(this);
  }

  private saveUser(auth) {
    auth.getProfile((err, profile) => {
      this.http
        .post(environment.API_URL + "login/", { email: profile.email, nickname: profile.nickname })
        .subscribe();
    });
  }

  public getProfile(watchProfile): void {
    const accessToken = localStorage.getItem("access_token");
    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
        self.userProfile.email = profile.email || profile.sub;
      }
      watchProfile(err, profile);
    });
  }

  public logout(): void {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    this.router.navigate(["/"]);
  }

  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }
}
