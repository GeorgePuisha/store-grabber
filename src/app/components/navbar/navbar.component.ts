import { Component, OnInit } from "@angular/core";
import { SearchComponent } from "../search/search.component";
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService) { }


  ngOnInit() {
  }

}
