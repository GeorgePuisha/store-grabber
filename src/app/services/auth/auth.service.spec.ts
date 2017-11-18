import { Location } from "@angular/common";
import { TestBed, inject, fakeAsync, tick } from "@angular/core/testing";

import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { appRoutes } from "../../app.routing";

import { AppComponent } from "../../app.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { GreetComponent } from "../../components/greet/greet.component";
import { FooterComponent } from "../../components/footer/footer.component";

import { AuthService } from "./auth.service";

describe("AuthService", () => {

  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        GreetComponent,
        FooterComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(appRoutes)
      ],
      providers: [
        AuthService
      ]
    });

    router = TestBed.get(Router);
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
      auth = new AuthService(router);
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
