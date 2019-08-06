(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-scoreboard></app-scoreboard>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/scoreboard/scoreboard.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/scoreboard/scoreboard.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--The content below is only a placeholder and can be replaced.-->\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<div align = \"center\">\n\t<span>\n\t\t<p>Round {{round}}</p>\n\t\t<button (click)=\"changeRound('plus')\">\n\t\t\t<i class=\"fa fa-caret-up\" aria-hidden=\"true\"></i>\n\t\t</button>\n\t\t<button (click)=\"changeRound('minus')\">\n\t\t\t<i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n\t\t</button>\n\t\t<button (click)=\"addPlayer()\">\n\t\t\t<i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\n\t\t</button>\n\t</span>\n\t\n</div>\n<table id=\"DefaultTable\" align=\"center\">\n  <tr>\n      <th></th><th>Bid</th><th>Names</th><th>Scores <i class=\"fa fa-sort\" (click)=\"sortPlayersByScore()\"></i></th><th></th>\n  </tr>\n  <tr *ngFor=\"let player of players; let i=index\">\n    \t<td (click)=\"gotCall(i)\">\n\t\t\t<i class=\"fa fa-check-circle\"></i>\n\t\t</td>\n\t\t<td>\n\t\t\t<input type=\"number\" class=\"bidInput\" pattern=\"[0-9]*\" placeholder=\"0\" [(ngModel)]=\"player.bid\" tabindex=\"2\">\n\t\t</td>\n\t\t<td>\n\t\t\t<span>\n\t\t\t\t<input type=\"text\" class=\"inputName\" [(ngModel)]=\"player.name\" value=\"{{player.name}}\">\n\t\t\t</span>\n\t\t</td>\n\t\t<td>\n\t\t\t<span>\n\t\t\t\t<input type=\"number\" class=\"scoreInput\" pattern=\"[0-9]*\" [(ngModel)]=\"player.score\"  tabindex=\"3\">\n\t\t\t</span>\n\t\t</td>\n\t\t<td (click)=\"deletePlayer(i)\">\n\t\t\t<i class=\"fa fa-trash\"></i>\n\t\t</td>\n  </tr>\n</table>\n<table id=\"JeopardyModeTable\" align=\"center\" >\n\t\t<tr>\n\t\t\t\t<th></th><th></th><th>Wager</th><th>Hide</th><th>Names</th><th>Scores <i class=\"fa fa-sort\" (click)=\"sortPlayersByScore()\"></i></th><th></th>\n\t\t</tr>\n\t\t<td (click)=\"gotJeopardyCall(i)\">\n\t\t\t<i class=\"fa fa-check-circle\"></i>\n\t\t</td>\n\t\t<td (click)=\"missJeopardyCall(i)\">\n\t\t\t<i class=\"fa fa-times\"></i></td>\n\t\t<td>\n\t\t\t<input type=\"number\" class=\"bidInput\" pattern=\"[0-9]*\" placeholder=\"0\" [(ngModel)]=\"player.bid\" tabindex=\"2\">\n\t\t</td>\n\t\t<td>\n\n\t\t</td>\n\t\t<!-- <td><input type=\"number\" pattern=\"[0-9]*\" [(ngModel)]=\"player.wager\" class=\"{{player.wagerClassName}}\" autocomplete=\"off\" /></td> -->\n\t\t\t<!-- <td><mat-slide-toggle color=\"warn\" (change)=\"toggleWagerInput($event,i)\"></mat-slide-toggle></td> -->\n\t\t<td>\n\t\t\t<span>\n\t\t\t\t<input type=\"text\" class=\"inputName\" [(ngModel)]=\"player.name\" value=\"{{player.name}}\">\n\t\t\t</span>\n\t\t</td>\n\t\t<td>\n\t\t\t<span>\n\t\t\t\t<input type=\"number\" class=\"scoreInput\" pattern=\"[0-9]*\" [(ngModel)]=\"player.score\"  tabindex=\"3\">\n\t\t\t</span>\n\t\t</td>\n\t\t<td (click)=\"deletePlayer(i)\">\n\t\t\t<i class=\"fa fa-trash\"></i>\n\t\t</td>\n\t</table>\n\n<div align = \"center\">\n    <button (click)=\"debugPlayers()\">Debug</button>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ScoreKeeper';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scoreboard/scoreboard.component */ "./src/app/scoreboard/scoreboard.component.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_6__["ScoreboardComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/scoreboard/scoreboard.component.css":
/*!*****************************************************!*\
  !*** ./src/app/scoreboard/scoreboard.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');\n/*Google Fonts*/\n* {\n\tfont-size: 26px;\n\tfont-family: 'Raleway', sans-serif;\n}\nth {\n\tpadding: 16px;\n}\nth, td {\n\tcolor: white;\n\tborder: 1px solid white;\n\tborder-radius: 5%;\n\ttext-align: center;\n\tpadding-top: 5px;\n\tpadding-bottom: 5px;\n}\nbutton{\n\tborder-radius: 8px;\n\tborder-width: medium;\n\tbackground-color: transparent;\n\tcolor: white ; \n}\np{\n\tcolor: white;\n\tdisplay: inline-block;\n}\ninput {\n    background: transparent;\n\tcolor: white;\n\ttext-align: center;\n\tborder: 0px;\n}\ninput.inputName{\n\twidth:140px;\n}\ninput.bidInput{\n\twidth: 50px;\n}\ninput.scoreInput{\n\twidth: 120px;\n}\ni.fa.fa-check-circle {\n    color: green;\n}\ni.fa.fa-user-plus {\n    color: green;\n}\ni.fa.fa-times{\n    color: rgb(253, 90, 90);\n}\ni.fa.fa-trash{\n    color: rgb(253, 90, 90);\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NvcmVib2FyZC9zY29yZWJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDJFQUEyRTtBQUQzRSxlQUFlO0FBR2Y7Q0FDQyxlQUFlO0NBQ2Ysa0NBQWtDO0FBQ25DO0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7QUFDQTtDQUNDLFlBQVk7Q0FDWix1QkFBdUI7Q0FDdkIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCLDZCQUE2QjtDQUM3QixhQUFhO0FBQ2Q7QUFDQTtDQUNDLFlBQVk7Q0FDWixxQkFBcUI7QUFDdEI7QUFDQTtJQUNJLHVCQUF1QjtDQUMxQixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLFdBQVc7QUFDWjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9zY29yZWJvYXJkL3Njb3JlYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qR29vZ2xlIEZvbnRzKi9cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheSZkaXNwbGF5PXN3YXAnKTtcblxuKiB7XG5cdGZvbnQtc2l6ZTogMjZweDtcblx0Zm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbn1cbnRoIHtcblx0cGFkZGluZzogMTZweDtcbn1cbnRoLCB0ZCB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XG5cdGJvcmRlci1yYWRpdXM6IDUlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHBhZGRpbmctdG9wOiA1cHg7XG5cdHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5idXR0b257XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0Ym9yZGVyLXdpZHRoOiBtZWRpdW07XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRjb2xvcjogd2hpdGUgOyBcbn1cbnB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuaW5wdXQge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRjb2xvcjogd2hpdGU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Ym9yZGVyOiAwcHg7XG59XG5pbnB1dC5pbnB1dE5hbWV7XG5cdHdpZHRoOjE0MHB4O1xufVxuaW5wdXQuYmlkSW5wdXR7XG5cdHdpZHRoOiA1MHB4O1xufVxuaW5wdXQuc2NvcmVJbnB1dHtcblx0d2lkdGg6IDEyMHB4O1xufVxuaS5mYS5mYS1jaGVjay1jaXJjbGUge1xuICAgIGNvbG9yOiBncmVlbjtcbn1cblxuaS5mYS5mYS11c2VyLXBsdXMge1xuICAgIGNvbG9yOiBncmVlbjtcbn1cblxuaS5mYS5mYS10aW1lc3tcbiAgICBjb2xvcjogcmdiKDI1MywgOTAsIDkwKTtcbn1cbmkuZmEuZmEtdHJhc2h7XG4gICAgY29sb3I6IHJnYigyNTMsIDkwLCA5MCk7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/scoreboard/scoreboard.component.ts":
/*!****************************************************!*\
  !*** ./src/app/scoreboard/scoreboard.component.ts ***!
  \****************************************************/
/*! exports provided: ScoreboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreboardComponent", function() { return ScoreboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../player */ "./src/player.ts");



let ScoreboardComponent = class ScoreboardComponent {
    constructor() {
        this.players = new Array();
        this.round = 7;
    }
    ngOnInit() {
        var numPlayers = 3;
        for (var i = 0; i < numPlayers; i++) {
            var createdPlayer = new _player__WEBPACK_IMPORTED_MODULE_2__["Player"]();
            createdPlayer.setName('Created' + i);
            this.players.push(createdPlayer);
        }
        console.log(this.players);
    }
    sortPlayersByScore() {
        console.log('About to sort');
        this.players = this.players.sort(_player__WEBPACK_IMPORTED_MODULE_2__["Player"].getComparatorScores());
    }
    addPlayer() {
        var createdPlayer = new _player__WEBPACK_IMPORTED_MODULE_2__["Player"]();
        createdPlayer.setName('NewPlayer');
        this.players.push(createdPlayer);
    }
    deletePlayer(i) {
        console.log('i is ' + i);
        this.players.splice(Number(i), 1);
    }
    gotCall(i) {
        var player = this.players[i];
        player.score = Number(player.score) + Number(player.getBid()) + Number(10);
    }
    gotJeopardyCall(i) {
        var player = this.players[i];
        player.score = Number(player.score) + Number(player.wager);
    }
    missJeopardyCall(i) {
        var player = this.players[i];
        player.score = Number(player.score) - Number(player.wager);
    }
    debugPlayers() {
        console.log(this.players);
    }
    changeRound(dir) {
        if (dir == 'plus') {
            this.round = Number(this.round) + 1;
        }
        else if (dir == 'minus') {
            this.round = Number(this.round) - 1;
        }
        else {
            console.error('Invalid value of dir = ' + dir);
        }
        // reset bids
        for (var p of this.players) {
            p.bid = null;
        }
    }
    toggleJeopardyMode() {
        var jeopardy = document.getElementById('JeopardyModeTable');
        var defTable = document.getElementById('DefaultTable');
        if (jeopardy.hidden) {
            defTable.hidden = true;
            jeopardy.hidden = false;
        }
        else {
            defTable.hidden = false;
            jeopardy.hidden = true;
        }
    }
    toggleWagerInput(event, i) {
        // var newClassName = Player.getInitialWagerClassName();
        // if (event.source.checked){
        //   newClassName = 'key';
        // }
        // this.players[i].setWagerClassName(newClassName);
    }
};
ScoreboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scoreboard',
        template: __webpack_require__(/*! raw-loader!./scoreboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/scoreboard/scoreboard.component.html"),
        styles: [__webpack_require__(/*! ./scoreboard.component.css */ "./src/app/scoreboard/scoreboard.component.css")]
    })
], ScoreboardComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
class Player {
    constructor() {
        this.name = '';
        this.bid = 0;
        this.score = 0;
        this.wager = 0;
    }
    setName(n) {
        this.name = n;
    }
    setBid(n) {
        this.bid = n;
    }
    getBid() {
        if (this.bid) {
            return this.bid;
        }
        return 0;
    }
    setWagerClassName(n) {
        this.wagerClassName = n;
    }
    static getComparatorScores() {
        return function (a, b) {
            return Number(b.score) - Number(a.score);
        };
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/colegannaway/Desktop/ScoreKeeper/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map