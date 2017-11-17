import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GreetComponent } from "./greet.component";

import { RouterTestingModule } from "@angular/router/testing";

import { AuthService } from "../../services/auth/auth.service";

describe("GreetComponent", () => {
  let component: GreetComponent;
  let fixture: ComponentFixture<GreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GreetComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        AuthService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should be visible by default", async(() => {
    const fixture = TestBed.createComponent(GreetComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("div.greet")).toBeTruthy();
  }));

  it("should be invisible if authenticated", () => {
    const expiresAt = JSON.stringify(1000 + new Date().getTime());
    localStorage.setItem("expires_at", expiresAt);

    const fixture = TestBed.createComponent(GreetComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("div.greet")).toBeNull();
  });

});
