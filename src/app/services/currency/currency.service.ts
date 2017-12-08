import { environment } from "../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class CurrencyService {

  public currentCurrency: string = "";
  public currentRate: number = 1;

  constructor(private http: HttpClient, public auth: AuthService) {
    this.currentCurrency = localStorage.getItem("currency") || "BYN";
    this.currentRate = parseInt(localStorage.getItem("rate")) || 1;
  }

  public saveCurrentCurrencyAndRate() {
    this.http
      .put(environment.API_URL + "currency/", { email: this.auth.userProfile.email, currency: this.currentCurrency, rate: this.currentRate })
      .subscribe();
  }

  public setExchangeRate(currency: string): void {
    if (currency !== "BYN") {
      this.http
        .get("https://www.nbrb.by/API/ExRates/Rates/" + currency + "?ParamMode=2")
        .map((data) => JSON.stringify(data))
        .subscribe((data) => {
          const resp: any = JSON.parse(data);
          this.currentRate = resp.Cur_OfficialRate;
          this.saveCurrentCurrencyAndRate();
        });
    } else {
      this.currentRate = 1;
      this.saveCurrentCurrencyAndRate();
    }
  }

  public setCurrent(currency: string): void {
    this.currentCurrency = currency;
    this.setExchangeRate(this.currentCurrency);

    localStorage.setItem("currency", this.currentCurrency);
    localStorage.setItem("rate", this.currentRate.toString());
  }
}
