import { TestBed, inject } from "@angular/core/testing";

import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from "../../app.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { GreetComponent } from "../../components/greet/greet.component";
import { FooterComponent } from "../../components/footer/footer.component";

import { AuthService } from "./auth.service";

describe("AuthService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        GreetComponent,
        FooterComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        AuthService
      ]
    });
  });

  it("should be created", inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
