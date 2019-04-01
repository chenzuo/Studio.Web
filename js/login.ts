import * as $ from "jquery";
export class App {
  public OnInit(): void {
    let createDate = new Date();
    console.log(createDate);
  }
}

let app = new App();

$(document).ready(function() {
  console.log("ready!");
  app.OnInit();
});
