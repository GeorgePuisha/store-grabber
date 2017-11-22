import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { NavbarComponent } from "./navbar.component";

import { RouterTestingModule } from "@angular/router/testing";

import { HttpClientModule, HttpClient } from "@angular/common/http";

import { AuthService } from "../../services/auth/auth.service";

describe("NavbarComponent", () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let compiled;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarComponent
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        AuthService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should be visible by default", async(() => {
    expect(compiled.querySelector("nav")).toBeTruthy();
  }));

  describe("\"Log out\" button", () => {

    it("should be visible if not authenticated", () => {
      expect(compiled.querySelector("#logout")).toBeTruthy();
    });
  });
});
