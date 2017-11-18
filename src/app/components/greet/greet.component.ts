import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: "app-greet",
  templateUrl: "./greet.component.html",
  styleUrls: ["./greet.component.css"],
})
export class GreetComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
