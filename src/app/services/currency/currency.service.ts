import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyService {

  public current: string = "";

  constructor() {
    this.current = localStorage.getItem("currency") || "BYN";
  }

  setCurrent(currency: string): void {
    localStorage.setItem("currency", currency);
    this.current = currency;
  }

}
