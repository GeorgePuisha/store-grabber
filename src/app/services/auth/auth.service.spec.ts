import { Location } from "@angular/common";
import { TestBed, inject, fakeAsync, tick } from "@angular/core/testing";

import { APP_BASE_HREF } from "@angular/common";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { appRoutes } from "../../app.routing";

import { AppComponent } from "../../app.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HomeComponent } from "../../components/home/home.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ProfileComponent } from "../../components/profile/profile.component";
import { SearchComponent } from "../../components/search/search.component";
import { ProductComponent } from "../../components/product/product.component";
import { ProductListComponent } from "../../components/product-list/product-list.component";
import { ProductWatchedComponent } from "../../components/product-watched/product-watched.component";

import { NgxChartsModule } from "@swimlane/ngx-charts";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { NgHttpLoaderModule } from "ng-http-loader/ng-http-loader.module";

import { AuthService } from "./auth.service";
import { NotificationService } from "../notification/notification.service";

import { ToastModule } from "ng2-toastr/ng2-toastr";
import { ToastOptions } from "ng2-toastr";
import { CustomOption } from "../../toastr-options";

describe("AuthService", () => {

  let http: HttpClient;
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        FooterComponent,
        ProfileComponent,
        SearchComponent,
        ProductComponent,
        ProductListComponent,
        ProductWatchedComponent
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes(appRoutes),
        InfiniteScrollModule,
        NgxChartsModule,
        NgHttpLoaderModule,
        ToastModule.forRoot(),
      ],
      providers: [
        AuthService,
        NotificationService,
        { provide: ToastOptions, useClass: CustomOption },
        { provide: APP_BASE_HREF, useValue: "/" }
      ]
    });

    router = TestBed.get(Router);
    http = TestBed.get(HttpClient);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it("should be created", inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  describe("Isolated AuthService tests", () => {
    let auth: AuthService;
    beforeEach(() => {
      auth = new AuthService(router, http);
    });

    describe("logout()", () => {
      it("should clear access token", () => {
        localStorage.setItem("access_token", "12345");
        auth.logout();
        expect(localStorage.getItem("access_token")).toBeNull();
      });
      it("should redirect to index", () => {
        auth.logout();
        expect(location.path()).toBe("");
      });
    });

    describe("isAuthenticated()", () => {
      it("should return true if token has not expired yet", () => {
        const expiresAt = JSON.stringify(1000 + new Date().getTime());
        localStorage.setItem("expires_at", expiresAt);
        expect(auth.isAuthenticated()).toBeTruthy();
      });
    });
  });
});
