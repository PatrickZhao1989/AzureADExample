import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  callValueApi() {
    alert("Call Value API here");
    this.httpClient
      .get("http://localhost:61612/api/values")
      .subscribe((res) => {
        console.log(res);
      });
  }
}
