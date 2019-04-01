"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
class App {
    OnInit() {
        let createDate = new Date();
        console.log(createDate);
    }
}
exports.App = App;
let app = new App();
$(document).ready(function () {
    console.log("ready!");
    app.OnInit();
});
//# sourceMappingURL=login.js.map