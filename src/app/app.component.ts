import { Component } from "@angular/core";

import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";

import { AuthService } from "./services/auth/auth.service";
import { NotificationService } from "./services/notification/notification.service";
import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { ViewContainerRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  constructor(public auth: AuthService, public notification: NotificationService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    auth.handleAuthentication();
    this.toastr.setRootViewContainerRef(vcr);
    this.notification.GetInstanceStatus().subscribe((result) => {
      this.handleMessage(result);
    });
  }

  public handleMessage(result: any): void {
    if (result.status === "success") {
      this.showSuccess(result.text);
    } else if (result.status === "error") {
      this.showError(result.text);
    } else if (result.status === "info") {
      this.showInfo(result.text);
    } else if (result.status === "warning") {
      this.showWarning(result.text);
    }
  }

  showSuccess(message: string) {
    this.toastr.success(message, "Success!");
  }

  showError(message: string) {
    this.toastr.error(message, "Oops!");
  }

  showWarning(message: string) {
    this.toastr.warning(message, "Alert!");
  }

  showInfo(message: string) {
    this.toastr.info(message);
  }
}
