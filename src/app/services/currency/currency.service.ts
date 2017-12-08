import { environment } from "../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CurrencyService {

  public currentCurrency: string = "";
  public currentRate: number = 1;

  constructor(private http: HttpClient) {
    this.currentCurrency = localStorage.getItem("currency") || "BYN";
    this.currentRate = parseInt(localStorage.getItem("rate")) || 1;
  }

  public saveCurrentCurrencyAndRate() {
    this.http
      .put(environment.API_URL + "currency/", { currency: this.currentCurrency, rate: this.currentRate })
      .subscribe();
  }

  public getExchangeRate(currency: string): void {
    this.currentRate = 1;
    if (currency !== "BYN") {
      this.http
        .get("http://www.nbrb.by/API/ExRates/Rates/" + currency + "?ParamMode=2")
        .map((data) => JSON.stringify(data))
        .subscribe((data) => {
          const resp: any = JSON.parse(data);
          this.currentRate = resp.Cur_OfficialRate;
          this.saveCurrentCurrencyAndRate();
        });
    }
  }

  public setCurrent(currency: string): void {
    this.currentCurrency = currency;
    this.getExchangeRate(this.currentCurrency);

    localStorage.setItem("currency", this.currentCurrency);
    localStorage.setItem("rate", this.currentRate.toString());
  }

}
