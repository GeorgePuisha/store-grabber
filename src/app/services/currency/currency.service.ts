import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CurrencyService {

  public currentCurrency: string = "";
  public currentRate: number = 1;

  constructor(private http: HttpClient) {
    this.currentCurrency = localStorage.getItem("currency") || "BYN";
    this.currentRate = parseInt(localStorage.getItem("rate")) || 1;
  }

  public getExchangeRate(currency: string): void {
    if (currency !== "BYN") {
      this.http
        .get("http://www.nbrb.by/API/ExRates/Rates/" + currency + "?ParamMode=2")
        .map((data) => JSON.stringify(data))
        .subscribe((data) => {
          const resp: any = JSON.parse(data);
          this.currentRate = resp.Cur_OfficialRate;
        });
    } else {
      this.currentRate = 1;
    }
  }

  public initializeExchangeRates(): void {

  }

  public setCurrent(currency: string): void {
    this.currentCurrency = currency;
    this.getExchangeRate(this.currentCurrency);

    localStorage.setItem("currency", this.currentCurrency);
    localStorage.setItem("rate", this.currentRate.toString());
  }

}
