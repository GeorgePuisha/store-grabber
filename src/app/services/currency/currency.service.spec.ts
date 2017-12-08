import { TestBed, async, inject } from "@angular/core/testing";

import { CurrencyService } from "./currency.service";
import { AuthService } from "../auth/auth.service";

import { APP_BASE_HREF } from "@angular/common";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { appRoutes } from "../../app.routing";

import { AppModule } from "../../app.module";

import { HttpClientModule, HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe("CurrencyService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CurrencyService,
        AuthService
      ],
      imports: [
        AppModule,
        HttpClientTestingModule,
        HttpClientModule,
        RouterTestingModule.withRoutes(appRoutes),
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
