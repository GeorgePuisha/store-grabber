import { TestBed, async, inject } from "@angular/core/testing";

import { CurrencyService } from "./currency.service";

import { HttpClientModule, HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe("CurrencyService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CurrencyService
      ],
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
      ],
    });
  });

  it("should be created", inject([CurrencyService], (service: CurrencyService) => {
    expect(service).toBeTruthy();
  }));

  describe("NBRB call", () => {
    let url: string = "http://www.nbrb.by/API/ExRates/Currencies";
    describe("GET/ " + url, () => {
      it("should issue a request", async(inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
        http.get(url).subscribe();
        backend.expectOne({
          url,
          method: "GET"
        });
      })));
      it("should have status 200", async(inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
        http.get(url).subscribe();
        backend.expectOne(url).flush(null, { status: 200, statusText: 'Ok' });
      })));
    });
  });
});
