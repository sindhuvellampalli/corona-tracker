function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/Dashboard/dashboard/dashboard.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/Dashboard/dashboard/dashboard.component.ts ***!
    \************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var src_app_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/dashboard.service */
    "./src/app/dashboard.service.ts");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DashboardComponent_tr_68_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_tr_68_Template_td_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var states_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](70);

          return ctx_r4.showDistricts(_r1, states_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var states_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", states_r3.state, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", states_r3.confirmed, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](states_r3.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", states_r3.recovered, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](states_r3.deaths);
      }
    }

    function DashboardComponent_ng_template_69_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var districts_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", districts_r8.key, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", districts_r8.value.confirmed, " ");
      }
    }

    function DashboardComponent_ng_template_69_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_69_Template_button_click_1_listener() {
          var modal_r6 = ctx.$implicit;
          return modal_r6.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "perfect-scrollbar", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "DISTRICTS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "CONFIRMED");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DashboardComponent_ng_template_69_tr_19_Template, 5, 2, "tr", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "keyvalue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 1, ctx_r2.popupData));
      }
    }

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(dashboard, modalService) {
        _classCallCheck(this, DashboardComponent);

        this.dashboard = dashboard;
        this.modalService = modalService;
        this.displayedColumns = ['state', 'confirmed', 'active', 'recovered', 'deaths'];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //this.tableData.sort = this.sort;
          this.getIndiaCount();
          this.getAllStates();
        }
      }, {
        key: "getIndiaCount",
        value: function getIndiaCount() {
          var _this = this;

          this.subscription = this.dashboard.getStateData().subscribe(function (res) {
            _this.cardsData = res['statewise'][0];
            res['statewise'].splice(0, 1);
            _this.tableData = res['statewise'];
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.tableData);
          });
        }
      }, {
        key: "getAllStates",
        value: function getAllStates() {
          var _this2 = this;

          this.subscription = this.dashboard.getDistrictData().subscribe(function (res) {
            _this2.Data = res;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
          console.log(event);
        }
      }, {
        key: "showDistricts",
        value: function showDistricts(content, state) {
          var _this3 = this;

          this.popupData = this.Data[state.state].districtData;
          console.log(this.Data[state.state]);
          this.modelRef = this.modalService.open(content, {
            windowClass: "myCustomModalClass",
            ariaLabelledBy: "modal-basic-title"
          });
          this.modelRef.result.then(function (result) {
            _this3.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this3.closeResult = "Dismissed ".concat(_this3.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
          } else {
            return "with: ".concat(reason);
          }
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      viewQuery: function DashboardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        }
      },
      decls: 71,
      vars: 6,
      consts: [[1, "container-fluid", "pl-0", "pr-0", "nav-header"], [1, "navbar", "sticky-top", "navbar-dark", "bg-dark"], [1, "container-fluid", "pl-0", "pr-0"], [1, "row"], [1, "col-md-6", "col-lg-6", "col-sm-6", "col-xs-6"], ["href", "#", 1, "navbar-brand"], [1, "container-fluid", "totalCards"], [1, "col-lg-3", "col-md-3", "col-sm-3", "col-xs-3", "individualCards"], [1, "card", "text-center", "my-auto"], [1, "cardOne"], [1, "cardTwo"], [1, "cardThree"], [1, "cardFour"], [1, "container-fluid"], [1, "card", "table-card-ref"], [1, "scrollbar"], [1, "perfect-scroll-bar-ref", "table-responsive"], ["sortable-table", "", 1, "table"], [1, "table-dark", "table-striped"], [1, "myvisit-col-acc"], [1, "myvisit-col-date"], [1, "myvisit-col-city"], [1, "myvisit-col-mngr"], [1, "myvisit-col-status"], [1, "tbodyclass"], [4, "ngFor", "ngForOf"], ["submit", ""], [1, "myvisit-col-acc", 3, "click"], [1, "modal-header", "header-ref"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "model-body-ref"], ["sortable-table", "", 1, "table", "popup-table"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "COVID-19 TRACKER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "CONFIRMED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "ACTIVE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "RECOVERED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "DECEASED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Click on the State to know more information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "perfect-scrollbar", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "table", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "thead", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "STATE/UI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "CONFIRMED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "ACTIVE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "RECOVERED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "DECEASED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tbody", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, DashboardComponent_tr_68_Template, 11, 5, "tr", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, DashboardComponent_ng_template_69_Template, 21, 3, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("LAST UPDATED ", ctx.cardsData == null ? null : ctx.cardsData.lastupdatedtime, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cardsData == null ? null : ctx.cardsData.confirmed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cardsData == null ? null : ctx.cardsData.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cardsData == null ? null : ctx.cardsData.recovered);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cardsData == null ? null : ctx.cardsData.deaths);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tableData);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["KeyValuePipe"]],
      styles: [".totalCards[_ngcontent-%COMP%]{\r\n    margin-top:1rem\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  height: 8rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    \r\n}\r\n\r\n.individualCards[_ngcontent-%COMP%]{\r\n  margin-bottom: 2.5rem;\r\n  padding: 0 3rem;\r\n  \r\n}\r\n\r\n.cardOne[_ngcontent-%COMP%]{\r\n    color: red;\r\n   font-weight: bold;\r\n\r\n}\r\n\r\n.cardTwo[_ngcontent-%COMP%]{\r\n\r\n    color: blue;\r\n    font-weight: bold;\r\n   \r\n    \r\n}\r\n\r\n.cardThree[_ngcontent-%COMP%]{\r\n    color: green;\r\n    font-weight: bold;\r\n   \r\n\r\n}\r\n\r\n.cardFour[_ngcontent-%COMP%]{\r\n    color: grey;\r\n    font-weight: bold;\r\n  \r\n\r\n\r\n}\r\n\r\n.nav-header[_ngcontent-%COMP%]{\r\n  margin-top: 1rem;\r\n}\r\n\r\n.items[_ngcontent-%COMP%]{\r\n  color: #e0e0e0;\r\n  font-size: 4px;\r\n}\r\n\r\n\r\n\r\n.all-visit-header-ref-id[_ngcontent-%COMP%] {\r\n    font-family: \"dxc-Regular\";\r\n    font-weight: 600;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%]{\r\n  padding:8px 5px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%] {\r\nwidth: 50%;\r\ndisplay: table;\r\ntext-align: center;\r\n}\r\n\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n  border: 1px solid #D9D9D9;\r\n  border-radius: 0;\r\n}\r\n\r\n.nav-item.nav-link.item.active[_ngcontent-%COMP%] {\r\n  background-color:  #00C9FF;\r\n  color: white;\r\n  border-radius: 0;\r\n}\r\n\r\n.nav-item.nav-link.item[_ngcontent-%COMP%]{\r\n  color: black;\r\n  width: 50%;\r\n  text-align: center;\r\n}\r\n\r\n.card-reference-id[_ngcontent-%COMP%] {\r\n    padding: 12px 12px;\r\n    border-radius: 0;\r\n}\r\n\r\n.colspan-ref-id[_ngcontent-%COMP%] {\r\n    padding-right: 0;\r\n}\r\n\r\n.buttons-reference-id[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    margin-top: 1rem;\r\n    font-weight: 600;\r\n}\r\n\r\n.reset-reference[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #00C9FF !important;\r\n  margin: 0 15px;\r\n  padding: 0;\r\n  border-radius: 0;\r\n}\r\n\r\n.row-ref[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: end;\r\n}\r\n\r\n.table-card-ref[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n  margin: 1rem 0 3rem;\r\n  height:100%;\r\n}\r\n\r\n\r\n\r\n.form-group.hidden[_ngcontent-%COMP%] {\r\n    width: 0;\r\n    margin: 0;\r\n    border: none;\r\n    padding: 0;\r\n  }\r\n\r\n.custom-day[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 0.185rem 0.25rem;\r\n    display: inline-block;\r\n    height: 2rem;\r\n    width: 2rem;\r\n  }\r\n\r\n.custom-day.focused[_ngcontent-%COMP%] {\r\n    background-color: #e6e6e6;\r\n  }\r\n\r\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(2, 117, 216);\r\n    color: white;\r\n  }\r\n\r\n.custom-day.faded[_ngcontent-%COMP%] {\r\n    background-color: rgba(2, 117, 216, 0.5);\r\n  }\r\n\r\n.all-visit-header-ref-id[_ngcontent-%COMP%] {\r\n    font-family: \"dxc-Regular\";\r\n    font-weight: 600;\r\n}\r\n\r\n.table[_ngcontent-%COMP%] {\r\n    width: 106%;\r\n    \r\n    margin-bottom: 0;\r\n    background-color: #fff;\r\n  \r\n  }\r\n\r\n.table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    color: white;\r\n    vertical-align: bottom;\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\r\n  }\r\n\r\ntable[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%]:last-child{\r\n    margin-bottom:1rem\r\n  }\r\n\r\n.table[_ngcontent-%COMP%]    > caption[_ngcontent-%COMP%]    + thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:first-child    > th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > colgroup[_ngcontent-%COMP%]    + thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:first-child    > th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child    > th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > caption[_ngcontent-%COMP%]    + thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:first-child    > td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > colgroup[_ngcontent-%COMP%]    + thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:first-child    > td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]:first-child    > tr[_ngcontent-%COMP%]:first-child    > td[_ngcontent-%COMP%] {\r\n    border-top: 0;\r\n  }\r\n\r\n.table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    + tbody[_ngcontent-%COMP%] {\r\n    border-top: 1px solid rgba(0, 0, 0, 0.12);\r\n  }\r\n\r\n.table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n  }\r\n\r\n.table[_ngcontent-%COMP%]   .no-border[_ngcontent-%COMP%] {\r\n    border: 0;\r\n  }\r\n\r\n.table-condensed[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-condensed[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-condensed[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-condensed[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .table-condensed[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .table-condensed[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\r\n    padding: 0.8rem;\r\n  }\r\n\r\n.tbodyclass[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    padding-right: 10px;\r\n  }\r\n\r\n.table-bordered[_ngcontent-%COMP%] {\r\n    border: 0;\r\n  }\r\n\r\n.table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    border-bottom: 1px solid #e0e0e0e0;\r\n  }\r\n\r\n.table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\r\n    border-bottom-width: 2px;\r\n  }\r\n\r\n.table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > td[_ngcontent-%COMP%], .table-striped[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > th[_ngcontent-%COMP%] {\r\n    background-color: #f5f5f5;\r\n  }\r\n\r\n.table-hover[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\r\n    \r\n    background-color: #D9D9D9;\r\n  }\r\n\r\n@media screen and (max-width: 768px) {\r\n    .table-responsive-vertical[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%] {\r\n      margin-bottom: 0;\r\n      background-color: transparent;\r\n    }\r\n    .table-responsive-vertical[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%], .table-responsive-vertical[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n    .table-responsive-vertical[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%] {\r\n      display: block;\r\n    }\r\n    .table-responsive-vertical[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\r\n      display: block;\r\n      border: 1px solid #e0e0e0;\r\n      border-radius: 2px;\r\n      margin-bottom: 1.6rem;\r\n    }\r\n    .table-responsive-vertical[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\r\n      display: block;\r\n      background-color: #fff;\r\n\r\n      text-align: right;\r\n    }\r\n    .table-responsive-vertical[_ngcontent-%COMP%]    > .table[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[data-title][_ngcontent-%COMP%]::before {\r\n      content: attr(data-title);\r\n      float: left;\r\n      font-size: inherit;\r\n      color: #757575;\r\n    }\r\n    .table-responsive-vertical[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\r\n      border: 0;\r\n    }\r\n    .table-responsive-vertical[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\r\n      border: 0;\r\n      border-bottom: 1px solid #e0e0e0;\r\n    }\r\n    .table-responsive-vertical[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:last-child {\r\n      border-bottom: 0;\r\n    }\r\n    .table-responsive-vertical[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .table-responsive-vertical[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd) {\r\n      background-color: #fff;\r\n     \r\n    }\r\n    .table-responsive-vertical[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]:nth-child(odd) {\r\n      background-color: #f5f5f5;\r\n    }\r\n    .table-responsive-vertical[_ngcontent-%COMP%]    > .table-hover[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-responsive-vertical[_ngcontent-%COMP%]    > .table-hover[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover {\r\n      background-color: rgba(0, 0, 0, 0.12);\r\n      background-color: #D9D9D9;\r\n  }\r\n}\r\n\r\n.table-striped.table-mc-red[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > td[_ngcontent-%COMP%], .table-striped.table-mc-red[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:nth-child(odd)    > th[_ngcontent-%COMP%] {\r\n    background-color: #fde0dc;\r\n  }\r\n\r\n.table-hover.table-mc-red[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover.table-mc-red[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\r\n    background-color: #f9bdbb;\r\n  }\r\n\r\n.table-row[_ngcontent-%COMP%] {\r\n    background-color:#D9D9D9;\r\n    color:#000000;\r\n    text-align: center;\r\n  }\r\n\r\n.table-main[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n.accountName[_ngcontent-%COMP%]{\r\n    color: #00C9FF;\r\n    font-weight: 600;\r\n  }\r\n\r\n.accountName[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n  }\r\n\r\n.plannedVisits[_ngcontent-%COMP%]{\r\ncursor:default !important;\r\n}\r\n\r\n.export-button[_ngcontent-%COMP%]{\r\n    background-color: #000000;\r\n    color: white;\r\n    border: 0;\r\n    padding: 5px 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    float: right;\r\n  }\r\n\r\n.date-fields-label[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 7px;\r\n  }\r\n\r\n.items-per-page[_ngcontent-%COMP%]{\r\n  padding-left: 0.05rem;\r\n  margin-top: 1.25%;\r\n }\r\n\r\n.white-space-ref[_ngcontent-%COMP%] {\r\n  white-space: nowrap;\r\n  align-items: center;\r\n }\r\n\r\n\r\n\r\n.button-ref-id[_ngcontent-%COMP%]{\r\n   background: none;\r\n   color: #000000;\r\n   border:0;\r\n   box-shadow: 0 0 0 0.2rem rgb(255, 255, 255);\r\n }\r\n\r\n.table-card-ref[_ngcontent-%COMP%]   .perfect-scroll-bar-ref[_ngcontent-%COMP%]:first-child {\r\n   height: auto;\r\n }\r\n\r\n.perfect-scroll-bar-ref[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  \r\n  position: relative;\r\n  \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n#nav-tab[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\r\n  border-right: 0px;\r\n}\r\n\r\n\r\n\r\n.perfect-scroll-bar-ref[_ngcontent-%COMP%]   table.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .perfect-scroll-bar-ref[_ngcontent-%COMP%]   table.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  display:table;\r\n  width:100%;\r\n  table-layout:fixed;\r\n}\r\n\r\n.perfect-scroll-bar-ref[_ngcontent-%COMP%]   table.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\r\n  display:block;\r\n  \r\n  overflow:auto;\r\n}\r\n\r\n\r\n\r\n.form-group-class-ref-d[_ngcontent-%COMP%] {\r\n  width: 7.8rem;\r\n}\r\n\r\n.date-input-text-ref[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  padding: 5px 5px;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n  font-size: 10px;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%]::-moz-placeholder {\r\n  font-size: 10px;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%]::-ms-input-placeholder {\r\n  font-size: 10px;\r\n}\r\n\r\n.input-group[_ngcontent-%COMP%]::placeholder {\r\n  font-size: 10px;\r\n}\r\n\r\n.input-column-word-wrap[_ngcontent-%COMP%]{\r\n  word-break: unset;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.Export.container-fluid[_ngcontent-%COMP%]{\r\n  margin-left:3%;\r\n}\r\n\r\n.totalItems[_ngcontent-%COMP%]{\r\n padding:0;\r\n}\r\n\r\n.selectedItems[_ngcontent-%COMP%]{\r\n padding:0;\r\n}\r\n\r\n.arrowButtons[_ngcontent-%COMP%]{\r\n  margin-top: 15%;\r\n  margin-bottom: 15%;\r\n  align-self: center;\r\n  padding-left: 3px;\r\n}\r\n\r\n.arrowButtons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\npadding-left: 10px;\r\n}\r\n\r\n\r\n\r\n.export-btn-id[_ngcontent-%COMP%]{\r\n  background-color:#FFED00;\r\n  font-weight: 600;\r\n  margin-top: 5%;\r\n  margin-left: 87.8%;\r\n \r\n}\r\n\r\n.export-model-content[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 550px;\r\n    pointer-events: auto;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid rgba(0,0,0,.2);\r\n    height:auto;\r\n     \r\n    outline: 0;\r\n}\r\n\r\n.column-heading[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  font-family: \"dxc-regular\";\r\n  font-size: smaller;\r\n \r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  margin-top: 0.2rem;\r\n  \r\n  border-radius: 5px;\r\n}\r\n\r\n\r\n\r\n.selectedFields[_ngcontent-%COMP%]{\r\n  background-color: #D9D9D9;\r\n  cursor: pointer;\r\n}\r\n\r\n.export-modal-body-content[_ngcontent-%COMP%]{\r\nheight: auto;\r\n\r\n\r\n}\r\n\r\n@media(min-width: 320px) and (max-width: 374.98px){ \r\n  .individualCards[_ngcontent-%COMP%]{\r\n    padding: 0;\r\n    margin-bottom: 2.5rem;\r\n      width: 75%;\r\n      margin-left: 3rem;\r\n  }\r\n  .export-model-content[_ngcontent-%COMP%]{\r\n    width: 285px;\r\n    margin-bottom: 50px;\r\n  }\r\n  .totalItems[_ngcontent-%COMP%]{\r\n    height:191px;\r\n  }\r\n  .selectedItems[_ngcontent-%COMP%]{\r\n    height:191px;\r\n  }\r\n  .export-btn-id[_ngcontent-%COMP%]{\r\n    margin-left: 80.8%\r\n  }\r\n  .forMobile[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n  .arrowButtons[_ngcontent-%COMP%]{\r\n    margin-top: 1px;\r\n    margin-bottom: 1px;\r\n    height: 50px;\r\n    padding: 10px;\r\n    \r\n  }\r\n  .selectedcard[_ngcontent-%COMP%]{\r\n    height:192px;\r\n    width: 273px;\r\n    margin-left: 4px;\r\n    \r\n  }\r\n  .column-content[_ngcontent-%COMP%]{\r\n    height: 176px ;\r\n    \r\n  }\r\n  .export-modal-body-content[_ngcontent-%COMP%]{\r\n    margin-bottom: 16px;\r\n  }\r\n  \r\n  \r\n\r\n}\r\n\r\n@media(min-width: 375px) and (max-width: 425px){\r\n  .individualCards[_ngcontent-%COMP%]{\r\n    padding: 0;\r\n    margin-bottom: 2.5rem;\r\n      width: 75%;\r\n      margin-left: 3rem;\r\n  }\r\n  .export-model-content[_ngcontent-%COMP%]{\r\n    width: 285px;\r\n    margin-bottom: 50px;\r\n  }\r\n  .totalItems[_ngcontent-%COMP%]{\r\n    height:191px;\r\n  }\r\n  .selectedItems[_ngcontent-%COMP%]{\r\n    height:191px;\r\n  }\r\n  .export-btn-id[_ngcontent-%COMP%]{\r\n    margin-left: 80.8%\r\n  }\r\n  .forMobile[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n  .table[_ngcontent-%COMP%] {\r\n    \r\n    max-width: 100%;\r\n   \r\n   \r\n  }\r\n\r\n  .popup-table[_ngcontent-%COMP%]{\r\n    width:33%;\r\n    \r\n  }\r\n\r\n  \r\n  .perfect-scroll-bar-ref[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    position: relative;\r\n    height: 600px;\r\n  }\r\n  .arrowButtons[_ngcontent-%COMP%]{\r\n    margin-top: 1px;\r\n    margin-bottom: 1px;\r\n    height: 50px;\r\n    padding: 10px;\r\n    \r\n  }\r\n  .selectedcard[_ngcontent-%COMP%]{\r\n    height:192px;\r\n    width: 273px;\r\n    margin-left: 4px;\r\n    \r\n  }\r\n  .column-content[_ngcontent-%COMP%]{\r\n    height: 176px ;\r\n    \r\n  }\r\n  .export-modal-body-content[_ngcontent-%COMP%]{\r\n    margin-bottom: 16px;\r\n}\r\n\r\n}\r\n\r\n.selectedcard[_ngcontent-%COMP%]{\r\n  \r\n   border-radius: 0px;\r\n   border-color:#D9D9D9 ;\r\n }\r\n\r\n.column-content[_ngcontent-%COMP%]{\r\n  padding:15px 15px 15px 15px;\r\n  font-family: \"dxc-regular\";\r\n  font-size: smaller;\r\n  height: 300px;\r\n  cursor: context-menu;\r\n}\r\n\r\nhr[_ngcontent-%COMP%]{\r\n  \r\n  border:0.8px solid #D9D9D9;\r\n  margin-bottom:0;\r\n  \r\n}\r\n\r\n.column-heading[_ngcontent-%COMP%]{\r\n  width:100%;\r\ntext-align: center;\r\n\r\n}\r\n\r\n.headingcss[_ngcontent-%COMP%]{\r\n  padding: 5px 5px 5px 5px;\r\n  display: flex;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]{\r\n  \r\n    border-radius: 0px !important;\r\n \r\n}\r\n\r\n.modal-spacing[_ngcontent-%COMP%]{\r\n    padding: 2rem;\r\n}\r\n\r\n.export-main-header-ref[_ngcontent-%COMP%] {\r\n  \r\n  padding-bottom: 0.3rem;\r\n  font-size: 14px;\r\n  border-bottom:0;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]{\r\nborder-radius: 0%;\r\n}\r\n\r\n.date-fields[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding: 0 15px;\r\n}\r\n\r\n.divide-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  padding-top: 5px;\r\n  margin: 0 13px;\r\n}\r\n\r\n.ngx-pagination[_ngcontent-%COMP%]{\r\n  padding:0;\r\n  margin-bottom:0;\r\n}\r\n\r\n.pagination-ctr[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  padding: 10px 0;\r\n}\r\n\r\n.pagination-ctr[_ngcontent-%COMP%]  .ngx-pagination  {\r\n  margin-bottom: 0; \r\n  padding:0;\r\n}\r\n\r\n\r\n\r\n.pagination-ctr[_ngcontent-%COMP%]   .pagination-export-pagecontrols[_ngcontent-%COMP%] {\r\n  padding-right: 10px;\r\n}\r\n\r\n.pagination-ctr[_ngcontent-%COMP%]   .pagination-export-pagedd[_ngcontent-%COMP%] {\r\n  white-space: nowrap;\r\n  padding: 0 10px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.pagination-ctr[_ngcontent-%COMP%]   .pagination-export-pagedd[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.pagination-ctr[_ngcontent-%COMP%]   .pagination-export-pagedd[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{\r\n  margin: 0 10px;\r\n  padding: 5px;\r\n  width: 6rem;\r\n}\r\n\r\n\r\n\r\n.group-arrow[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n\r\n.arrow-ctr[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.arrow-grp[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n}\r\n\r\n.arrow-grp-ctr[_ngcontent-%COMP%]{\r\n  padding-left: 10px;\r\n}\r\n\r\n.arrow-grp[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  margin-bottom:0;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 575.98px) { \r\n\r\n  .popup-table[_ngcontent-%COMP%]{\r\n    width:39%;\r\n    \r\n  }\r\n  .individualCards[_ngcontent-%COMP%]{\r\n    padding: 0;\r\n    margin-bottom: 2.5rem;\r\n      width: 75%;\r\n      margin-left: 3rem;\r\n  }\r\n\r\n  .perfect-scroll-bar-ref[_ngcontent-%COMP%]   table.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{\r\n    display: inherit;\r\n    max-height: 400px;\r\n  }\r\n  .table-responsive[_ngcontent-%COMP%] {\r\n    \r\n    width: 60rem;\r\n  }\r\n  .colspan-ref-id[_ngcontent-%COMP%]   .date-range-label-ref[_ngcontent-%COMP%] {\r\n    white-space: pre-wrap !important;\r\n  }\r\n  .form-group-class-ref-d[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  .date-fields[_ngcontent-%COMP%] {\r\n      display: flex;\r\n      flex-direction: column;\r\n      flex-direction: row;\r\n      padding: 0 15px;\r\n  }\r\n  .divide-item[_ngcontent-%COMP%]  {\r\n    margin:0;\r\n    padding:0 5px;\r\n  }\r\n  .divide-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    margin:0;\r\n    padding:0;\r\n  }\r\n  .pagination-ctr[_ngcontent-%COMP%]  .ngx-pagination {\r\n    margin-bottom: 0;\r\n    padding: 0;\r\n    white-space: nowrap;\r\n  }\r\n  .pagination-ctr[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n    justify-content: space-between;\r\n    padding: 10px 0;\r\n  }\r\n  .pagination-ctr[_ngcontent-%COMP%]   .pagination-export-button[_ngcontent-%COMP%], .pagination-ctr[_ngcontent-%COMP%]   .pagination-export-pagedd[_ngcontent-%COMP%], .pagination-ctr[_ngcontent-%COMP%]   .pagination-export-pagecontrols[_ngcontent-%COMP%] {\r\n    padding: 0.5rem 0.5rem 0.5rem 0;\r\n    width: 100%;\r\n    text-align: right;\r\n  }\r\n  .pagination-ctr[_ngcontent-%COMP%]   .pagination-export-pagedd[_ngcontent-%COMP%] {\r\n    justify-content: flex-end;\r\n  }\r\n  .table-responsive[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    white-space: nowrap;\r\n  }\r\n}\r\n\r\n@media (min-width: 576px) and (max-width: 767.98px) {\r\n  .popup-table[_ngcontent-%COMP%]{\r\n    width:30%;\r\n    \r\n  }\r\n  .individualCards[_ngcontent-%COMP%]{\r\n    padding: 0;\r\n    margin-bottom: 2.5rem;\r\n      width: 75%;\r\n      margin-left: 3rem;\r\n  } \r\n  .table-responsive[_ngcontent-%COMP%] {\r\n    max-width: 768px;\r\n  }\r\n  .items-per-page[_ngcontent-%COMP%]{ \r\n    padding-right: 15px;\r\n  }\r\n  .pagination-ctr[_ngcontent-%COMP%]  .ngx-pagination {\r\n      margin-bottom: 0;\r\n      padding: 0;\r\n      white-space: nowrap;\r\n  }\r\n  \r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 991.98px) { \r\n  .date-range-label-ref[_ngcontent-%COMP%] {\r\n    white-space: normal;\r\n  }\r\n  .divide-item[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .myvisit-col-mngr[_ngcontent-%COMP%]{\r\n    width:19%;\r\n  }\r\n  .date-fields[_ngcontent-%COMP%]   .dt-to[_ngcontent-%COMP%]{\r\n    padding-left: 10px;\r\n  }\r\n  .row-ref[_ngcontent-%COMP%] {\r\n      display: flex;\r\n      align-items: end;\r\n      flex-direction: column;  \r\n  }\r\n \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRGFzaGJvYXJkL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSx1Q0FBdUM7RUFDekMsWUFBWTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7O0FBRTNCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7O0FBRWpCOztBQUNBO0lBQ0ksVUFBVTtHQUNYLGlCQUFpQjs7QUFFcEI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGlCQUFpQjs7O0FBR3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjs7O0FBR3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjs7OztBQUlyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQVFFLFFBQVE7O0FBRVI7SUFDRSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQztBQUNELFVBQVU7QUFDVixjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFDQztFQUNDLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFDQTtFQUNFLDJDQUEyQztFQUMzQyxjQUFjO0VBQ2QsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFD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QUFrQjtFQUNwQjtFQUNBO01BQ0ksYUFBYTtNQUNiLGdCQUFnQjtNQUNoQixzQkFBc0I7RUFDMUI7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9EYXNoYm9hcmQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvdGFsQ2FyZHN7XHJcbiAgICBtYXJnaW4tdG9wOjFyZW1cclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgaGVpZ2h0OiA4cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuLmluZGl2aWR1YWxDYXJkc3tcclxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbiAgcGFkZGluZzogMCAzcmVtO1xyXG4gIFxyXG59XHJcbi5jYXJkT25le1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcblxyXG4uY2FyZFR3b3tcclxuXHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICBcclxuICAgIFxyXG59XHJcblxyXG4uY2FyZFRocmVle1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIFxyXG5cclxufVxyXG5cclxuLmNhcmRGb3Vye1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICBcclxuXHJcblxyXG59XHJcblxyXG4ubmF2LWhlYWRlcntcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcbi5pdGVtc3tcclxuICBjb2xvcjogI2UwZTBlMDtcclxuICBmb250LXNpemU6IDRweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAvKiBjc3MgKi9cclxuXHJcbiAgLmFsbC12aXNpdC1oZWFkZXItcmVmLWlkIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcImR4Yy1SZWd1bGFyXCI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5uYXYtaXRlbXtcclxuICBwYWRkaW5nOjhweCA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuIC5uYXYtaXRlbSB7XHJcbndpZHRoOiA1MCU7XHJcbmRpc3BsYXk6IHRhYmxlO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXYtdGFicyAubmF2LWxpbmsge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4gLm5hdi1pdGVtLm5hdi1saW5rLml0ZW0uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzAwQzlGRjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLm5hdi1pdGVtLm5hdi1saW5rLml0ZW17XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jYXJkLXJlZmVyZW5jZS1pZCB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59IFxyXG4uY29sc3Bhbi1yZWYtaWQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG4uYnV0dG9ucy1yZWZlcmVuY2UtaWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnJlc2V0LXJlZmVyZW5jZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMEM5RkYgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgMTVweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5yb3ctcmVmIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbn1cclxuLnRhYmxlLWNhcmQtcmVmIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG1hcmdpbjogMXJlbSAwIDNyZW07XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuLyogREFURSBSQU5HRSBTRUxFQ1RPUiAqL1xyXG4uZm9ybS1ncm91cC5oaWRkZW4ge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAuY3VzdG9tLWRheSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgfVxyXG4gIC5jdXN0b20tZGF5LmZvY3VzZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICB9XHJcbiAgLmN1c3RvbS1kYXkucmFuZ2UsIC5jdXN0b20tZGF5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5jdXN0b20tZGF5LmZhZGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTE3LCAyMTYsIDAuNSk7XHJcbiAgfVxyXG5cclxuICAuYWxsLXZpc2l0LWhlYWRlci1yZWYtaWQge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiZHhjLVJlZ3VsYXJcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgICB3aWR0aDogMTA2JTtcclxuICAgIC8qIG1heC13aWR0aDogMTAwJTsgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIFxyXG4gIH0gIFxyXG4gIC50YWJsZSA+IHRoZWFkID4gdHIgPiB0aCB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH1cclxuICB0YWJsZT4gdGJvZHk+dHI6bGFzdC1jaGlsZHtcclxuICAgIG1hcmdpbi1ib3R0b206MXJlbVxyXG4gIH1cclxuICAudGFibGUgPiBjYXB0aW9uICsgdGhlYWQgPiB0cjpmaXJzdC1jaGlsZCA+IHRoLFxyXG4gIC50YWJsZSA+IGNvbGdyb3VwICsgdGhlYWQgPiB0cjpmaXJzdC1jaGlsZCA+IHRoLFxyXG4gIC50YWJsZSA+IHRoZWFkOmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgPiB0aCxcclxuICAudGFibGUgPiBjYXB0aW9uICsgdGhlYWQgPiB0cjpmaXJzdC1jaGlsZCA+IHRkLFxyXG4gIC50YWJsZSA+IGNvbGdyb3VwICsgdGhlYWQgPiB0cjpmaXJzdC1jaGlsZCA+IHRkLFxyXG4gIC50YWJsZSA+IHRoZWFkOmZpcnN0LWNoaWxkID4gdHI6Zmlyc3QtY2hpbGQgPiB0ZCB7XHJcbiAgICBib3JkZXItdG9wOiAwO1xyXG4gIH1cclxuICAudGFibGUgPiB0Ym9keSArIHRib2R5IHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH1cclxuICAudGFibGUgLnRhYmxlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgfVxyXG4gIC50YWJsZSAubm8tYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbiAgLnRhYmxlLWNvbmRlbnNlZCA+IHRoZWFkID4gdHIgPiB0aCxcclxuICAudGFibGUtY29uZGVuc2VkID4gdGJvZHkgPiB0ciA+IHRoLFxyXG4gIC50YWJsZS1jb25kZW5zZWQgPiB0Zm9vdCA+IHRyID4gdGgsXHJcbiAgLnRhYmxlLWNvbmRlbnNlZCA+IHRoZWFkID4gdHIgPiB0ZCxcclxuICAudGFibGUtY29uZGVuc2VkID4gdGJvZHkgPiB0ciA+IHRkLFxyXG4gIC50YWJsZS1jb25kZW5zZWQgPiB0Zm9vdCA+IHRyID4gdGQge1xyXG4gICAgcGFkZGluZzogMC44cmVtO1xyXG4gIH1cclxuICAudGJvZHljbGFzcyB0ciB0ZHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIC50YWJsZS1ib3JkZXJlZCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgfVxyXG4gIC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0aCxcclxuICAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGgsXHJcbiAgLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRoLFxyXG4gIC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0ZCxcclxuICAudGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQsXHJcbiAgLnRhYmxlLWJvcmRlcmVkID4gdGZvb3QgPiB0ciA+IHRkIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwZTA7XHJcbiAgfVxyXG4gIC50YWJsZS1ib3JkZXJlZCA+IHRoZWFkID4gdHIgPiB0aCxcclxuICAudGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xyXG4gIH1cclxuICAudGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkgPiB0ZCxcclxuICAudGFibGUtc3RyaXBlZCA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkgPiB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIH1cclxuICAudGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyOmhvdmVyID4gdGQsXHJcbiAgLnRhYmxlLWhvdmVyID4gdGJvZHkgPiB0cjpob3ZlciA+IHRoIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnRhYmxlLXJlc3BvbnNpdmUtdmVydGljYWwgPiAudGFibGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgIC50YWJsZS1yZXNwb25zaXZlLXZlcnRpY2FsID4gLnRhYmxlID4gdGhlYWQsXHJcbiAgICAudGFibGUtcmVzcG9uc2l2ZS12ZXJ0aWNhbCA+IC50YWJsZSA+IHRmb290IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC50YWJsZS1yZXNwb25zaXZlLXZlcnRpY2FsID4gLnRhYmxlID4gdGJvZHkge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC50YWJsZS1yZXNwb25zaXZlLXZlcnRpY2FsID4gLnRhYmxlID4gdGJvZHkgPiB0ciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNnJlbTtcclxuICAgIH1cclxuICAgIC50YWJsZS1yZXNwb25zaXZlLXZlcnRpY2FsID4gLnRhYmxlID4gdGJvZHkgPiB0ZCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAudGFibGUtcmVzcG9uc2l2ZS12ZXJ0aWNhbCA+IC50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZFtkYXRhLXRpdGxlXTo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICB9XHJcbiAgICAudGFibGUtcmVzcG9uc2l2ZS12ZXJ0aWNhbCA+IC50YWJsZS1ib3JkZXJlZCB7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgIH1cclxuICAgIC50YWJsZS1yZXNwb25zaXZlLXZlcnRpY2FsID4gLnRhYmxlLWJvcmRlcmVkID4gdGJvZHkgPiB0ciA+IHRkIHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgIH1cclxuICAgIC50YWJsZS1yZXNwb25zaXZlLXZlcnRpY2FsXHJcbiAgICAgID4gLnRhYmxlLWJvcmRlcmVkXHJcbiAgICAgID4gdGJvZHlcclxuICAgICAgPiB0clxyXG4gICAgICA+IHRyXHJcbiAgICAgID4gdGQ6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAudGFibGUtcmVzcG9uc2l2ZS12ZXJ0aWNhbCA+IC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdGQsXHJcbiAgICAudGFibGUtcmVzcG9uc2l2ZS12ZXJ0aWNhbCA+IC50YWJsZS1ib3JkZXJlZCA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgLnRhYmxlLXJlc3BvbnNpdmUtdmVydGljYWxcclxuICAgICAgPiAudGFibGUtYm9yZGVyZWRcclxuICAgICAgPiB0Ym9keVxyXG4gICAgICA+IHRyXHJcbiAgICAgID4gdGQ6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLXJlc3BvbnNpdmUtdmVydGljYWwgPiAudGFibGUtaG92ZXIgPiB0Ym9keSA+IHRyOmhvdmVyID4gdGQsXHJcbiAgICAudGFibGUtcmVzcG9uc2l2ZS12ZXJ0aWNhbCA+IC50YWJsZS1ob3ZlciA+IHRib2R5ID4gdHI6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xyXG4gIH1cclxufVxyXG4gIC50YWJsZS1zdHJpcGVkLnRhYmxlLW1jLXJlZCA+IHRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkgPiB0ZCxcclxuICAudGFibGUtc3RyaXBlZC50YWJsZS1tYy1yZWQgPiB0Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpID4gdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZTBkYztcclxuICB9XHJcbiAgLnRhYmxlLWhvdmVyLnRhYmxlLW1jLXJlZCA+IHRib2R5ID4gdHIgOmhvdmVyID4gdGQsXHJcbiAgLnRhYmxlLWhvdmVyLnRhYmxlLW1jLXJlZCA+IHRib2R5ID4gdHIgOmhvdmVyID4gdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YmRiYjtcclxuICB9XHJcblxyXG4gIC50YWJsZS1yb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRDlEOUQ5O1xyXG4gICAgY29sb3I6IzAwMDAwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnRhYmxlLW1haW4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmFjY291bnROYW1le1xyXG4gICAgY29sb3I6ICMwMEM5RkY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBcclxuIC5hY2NvdW50TmFtZTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9ICBcclxuXHJcbi5wbGFubmVkVmlzaXRze1xyXG5jdXJzb3I6ZGVmYXVsdCAhaW1wb3J0YW50O1xyXG59XHJcbiAgLmV4cG9ydC1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgLmRhdGUtZmllbGRzLWxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogN3B4O1xyXG4gIH1cclxuXHJcblxyXG4gLml0ZW1zLXBlci1wYWdle1xyXG4gIHBhZGRpbmctbGVmdDogMC4wNXJlbTtcclxuICBtYXJnaW4tdG9wOiAxLjI1JTtcclxuIH1cclxuXHJcblxyXG4gLndoaXRlLXNwYWNlLXJlZiB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gfVxyXG4gLyogLnBhZ2luYXRpb257XHJcbiAgIG1hcmdpbi10b3A6IDMlO1xyXG4gfSAqL1xyXG5cclxuIC5idXR0b24tcmVmLWlke1xyXG4gICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICBjb2xvcjogIzAwMDAwMDtcclxuICAgYm9yZGVyOjA7XHJcbiAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiB9XHJcbiAudGFibGUtY2FyZC1yZWYgLnBlcmZlY3Qtc2Nyb2xsLWJhci1yZWY6Zmlyc3QtY2hpbGQge1xyXG4gICBoZWlnaHQ6IGF1dG87XHJcbiB9XHJcbiAucGVyZmVjdC1zY3JvbGwtYmFyLXJlZiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAvKiBvdmVyZmxvdy15OiBhdXRvOyAqL1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvKiBoZWlnaHQ6IDIwcmVtOyAqL1xyXG59XHJcblxyXG4vKiAudGFibGUtY2FyZC1yZWYgIGRpdjpudGgtY2hpbGQoMikgdGFibGUudGFibGUgdGJvZHl7XHJcbiAgZGlzcGxheTpub25lO1xyXG59ICovXHJcbi8qIC5wZXJmZWN0LXNjcm9sbC1iYXItcmVmIHRhYmxlLnRhYmxlIHRoZWFkLnRhYmxlLWRhcmsudGFibGUtc3RyaXBlZHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59ICovXHJcbi8qIC5teXZpc2l0LWNvbC1hY2Mge1xyXG4gIHdpZHRoOiAxNyU7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBcclxufVxyXG4ubXl2aXNpdC1jb2wtZGF0ZSB7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG4ubXl2aXNpdC1jb2wtY2l0eSB7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG4ubXl2aXNpdC1jb2wtbW5ncntcclxuICB3aWR0aDogMTclO1xyXG59XHJcbi5teXZpc2l0LWNvbC1zdGF0dXN7XHJcbiAgd2lkdGg6IDE3JTtcclxufVxyXG4ubXl2aXNpdC1jb2wtc3RhZ2V7XHJcbiAgd2lkdGg6IDE5JTtcclxufSAqL1xyXG4vKiAjbmF2LXRhYiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufSAqL1xyXG4jbmF2LXRhYiBhOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItcmlnaHQ6IDBweDtcclxufVxyXG4vKiAucGVyZmVjdC1zY3JvbGwtYmFyLXJlZiB0YWJsZS50YWJsZTpmaXJzdC1jaGlsZCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDowO1xyXG59XHJcbi5wZXJmZWN0LXNjcm9sbC1iYXItcmVmIHRhYmxlLnRhYmxlOmZpcnN0LWNoaWxkIHRib2R5IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG5cclxufSAqL1xyXG5cclxuLnBlcmZlY3Qtc2Nyb2xsLWJhci1yZWYgdGFibGUudGFibGUgdGhlYWQsIC5wZXJmZWN0LXNjcm9sbC1iYXItcmVmIHRhYmxlLnRhYmxlIHRib2R5IHRyIHtcclxuICBkaXNwbGF5OnRhYmxlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgdGFibGUtbGF5b3V0OmZpeGVkOy8qIGV2ZW4gY29sdW1ucyB3aWR0aCAsIGZpeCB3aWR0aCBvZiB0YWJsZSB0b28qL1xyXG59XHJcbi5wZXJmZWN0LXNjcm9sbC1iYXItcmVmIHRhYmxlLnRhYmxlIHRib2R5IHtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIC8qIG1heC1oZWlnaHQ6NjAwcHg7ICovXHJcbiAgb3ZlcmZsb3c6YXV0bztcclxufVxyXG4vKiAuZGF0ZS1yYW5nZS1sYWJlbC1yZWYge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn0gKi9cclxuLmZvcm0tZ3JvdXAtY2xhc3MtcmVmLWQge1xyXG4gIHdpZHRoOiA3LjhyZW07XHJcbn1cclxuLmRhdGUtaW5wdXQtdGV4dC1yZWYge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nOiA1cHggNXB4O1xyXG59XHJcbi5pbnB1dC1ncm91cDo6cGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4uaW5wdXQtY29sdW1uLXdvcmQtd3JhcHtcclxuICB3b3JkLWJyZWFrOiB1bnNldDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuLkV4cG9ydC5jb250YWluZXItZmx1aWR7XHJcbiAgbWFyZ2luLWxlZnQ6MyU7XHJcbn1cclxuLnRvdGFsSXRlbXN7XHJcbiBwYWRkaW5nOjA7XHJcbn1cclxuLnNlbGVjdGVkSXRlbXN7XHJcbiBwYWRkaW5nOjA7XHJcbn1cclxuLmFycm93QnV0dG9uc3tcclxuICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTUlO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDNweDtcclxufVxyXG4uYXJyb3dCdXR0b25zIGRpdntcclxucGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi8qIC5hcnJvd0J1dHRvbnMgZGl2e1xyXG4gIGhlaWdodDogMjRweDtcclxuICB3aWR0aDogMzdweDtcclxufSAqL1xyXG4uZXhwb3J0LWJ0bi1pZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkVEMDA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tbGVmdDogODcuOCU7XHJcbiBcclxufVxyXG4uZXhwb3J0LW1vZGVsLWNvbnRlbnR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogNTUwcHg7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMik7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgICAvKiA0ODVweDsgKi9cclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuLmNvbHVtbi1oZWFkaW5ne1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiBcImR4Yy1yZWd1bGFyXCI7XHJcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gXHJcbn1cclxuaHIge1xyXG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcclxuICBcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLyogLmZpcnN0LXJvd3tcclxuICBmb250LWZhbWlseTogXCJkeGMtcmVndWxhclwiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbn0gKi9cclxuLnNlbGVjdGVkRmllbGRze1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEOUQ5RDk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5leHBvcnQtbW9kYWwtYm9keS1jb250ZW50e1xyXG5oZWlnaHQ6IGF1dG87XHJcbi8qIDMwMHB4OyAqL1xyXG5cclxufVxyXG5cclxuIEBtZWRpYShtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzc0Ljk4cHgpeyBcclxuICAuaW5kaXZpZHVhbENhcmRze1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxuICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDNyZW07XHJcbiAgfVxyXG4gIC5leHBvcnQtbW9kZWwtY29udGVudHtcclxuICAgIHdpZHRoOiAyODVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG4gIC50b3RhbEl0ZW1ze1xyXG4gICAgaGVpZ2h0OjE5MXB4O1xyXG4gIH1cclxuICAuc2VsZWN0ZWRJdGVtc3tcclxuICAgIGhlaWdodDoxOTFweDtcclxuICB9XHJcbiAgLmV4cG9ydC1idG4taWR7XHJcbiAgICBtYXJnaW4tbGVmdDogODAuOCVcclxuICB9XHJcbiAgLmZvck1vYmlsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuICAuYXJyb3dCdXR0b25ze1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8qIHBhZGRpbmctdG9wOiA2cHg7ICovXHJcbiAgfVxyXG4gIC5zZWxlY3RlZGNhcmR7XHJcbiAgICBoZWlnaHQ6MTkycHg7XHJcbiAgICB3aWR0aDogMjczcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAyMHB4ICovXHJcbiAgfVxyXG4gIC5jb2x1bW4tY29udGVudHtcclxuICAgIGhlaWdodDogMTc2cHggO1xyXG4gICAgLyogMTc2cHggKi9cclxuICB9XHJcbiAgLmV4cG9ydC1tb2RhbC1ib2R5LWNvbnRlbnR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIH1cclxuICAvKiAubXl2aXNpdC1jb2wtYWNjIHtcclxuICAgIHdpZHRoOiAzMiU7XHJcbiAgfVxyXG4gIC5teXZpc2l0LWNvbC1kYXRlIHtcclxuICAgIHdpZHRoOiAzNiU7XHJcbiAgfVxyXG4gIFxyXG4gIC5teXZpc2l0LWNvbC1jaXR5IHtcclxuICAgIHdpZHRoOiAxNiU7XHJcbiAgfVxyXG4gIC5teXZpc2l0LWNvbC1tbmdye1xyXG4gICAgd2lkdGg6IDM4JTtcclxuICB9XHJcbiAgLm15dmlzaXQtY29sLXN0YXR1c3tcclxuICAgIHdpZHRoOiAyNyU7XHJcbiAgfVxyXG4gIC5teXZpc2l0LWNvbC1zdGFnZXtcclxuICAgIHdpZHRoOiAxOSU7XHJcbiAgfSAqL1xyXG4gIFxyXG5cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWF4LXdpZHRoOiA0MjVweCl7XHJcbiAgLmluZGl2aWR1YWxDYXJkc3tcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbiAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xyXG4gIH1cclxuICAuZXhwb3J0LW1vZGVsLWNvbnRlbnR7XHJcbiAgICB3aWR0aDogMjg1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIH1cclxuICAudG90YWxJdGVtc3tcclxuICAgIGhlaWdodDoxOTFweDtcclxuICB9XHJcbiAgLnNlbGVjdGVkSXRlbXN7XHJcbiAgICBoZWlnaHQ6MTkxcHg7XHJcbiAgfVxyXG4gIC5leHBvcnQtYnRuLWlke1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgwLjglXHJcbiAgfVxyXG4gIC5mb3JNb2JpbGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbiAgLnRhYmxlIHtcclxuICAgIFxyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICBcclxuICAgXHJcbiAgfVxyXG5cclxuICAucG9wdXAtdGFibGV7XHJcbiAgICB3aWR0aDozMyU7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZDsgKi9cclxuICB9XHJcbi8qIC5wb3B1cC10YWJsZSAgdHIgdGggLC5wb3B1cC10YWJsZSB0ciB0ZCB7XHJcbmJvcmRlciA6MXB4IHNvbGlkXHJcbn0gKi9cclxuICBcclxuICAucGVyZmVjdC1zY3JvbGwtYmFyLXJlZiB7XHJcbiAgICAvKiBvdmVyZmxvdzogc2Nyb2xsOyAqL1xyXG4gICAgLyogb3ZlcmZsb3cteTogYXV0bzsgKi9cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgfVxyXG4gIC5hcnJvd0J1dHRvbnN7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLyogcGFkZGluZy10b3A6IDZweDsgKi9cclxuICB9XHJcbiAgLnNlbGVjdGVkY2FyZHtcclxuICAgIGhlaWdodDoxOTJweDtcclxuICAgIHdpZHRoOiAyNzNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDIwcHggKi9cclxuICB9XHJcbiAgLmNvbHVtbi1jb250ZW50e1xyXG4gICAgaGVpZ2h0OiAxNzZweCA7XHJcbiAgICAvKiAxNzZweCAqL1xyXG4gIH1cclxuICAuZXhwb3J0LW1vZGFsLWJvZHktY29udGVudHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuLyogLm15dmlzaXQtY29sLWFjYyB7XHJcbiBcclxuICB3aWR0aDo0MHZ3O1xyXG59XHJcbi5teXZpc2l0LWNvbC1kYXRlIHtcclxuICB3aWR0aDozOHZ3O1xyXG59XHJcblxyXG4ubXl2aXNpdC1jb2wtY2l0eSB7XHJcbiAgd2lkdGg6IDI0dnc7XHJcbn1cclxuLm15dmlzaXQtY29sLW1uZ3J7XHJcbiAgd2lkdGg6IDQ4dnc7XHJcbn1cclxuLm15dmlzaXQtY29sLXN0YXR1c3tcclxuICB3aWR0aDogMzh2dztcclxufVxyXG4ubXl2aXNpdC1jb2wtc3RhZ2V7XHJcbiAgd2lkdGg6IDM0dnc7XHJcbn0gKi9cclxufVxyXG5cclxuLnNlbGVjdGVkY2FyZHtcclxuICBcclxuICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICBib3JkZXItY29sb3I6I0Q5RDlEOSA7XHJcbiB9XHJcbi5jb2x1bW4tY29udGVudHtcclxuICBwYWRkaW5nOjE1cHggMTVweCAxNXB4IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiZHhjLXJlZ3VsYXJcIjtcclxuICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBjdXJzb3I6IGNvbnRleHQtbWVudTtcclxufVxyXG5ocntcclxuICAvKiBtYXJnaW4tdG9wOiAxLjByZW07ICovXHJcbiAgYm9yZGVyOjAuOHB4IHNvbGlkICNEOUQ5RDk7XHJcbiAgbWFyZ2luLWJvdHRvbTowO1xyXG4gIFxyXG59XHJcbi5jb2x1bW4taGVhZGluZ3tcclxuICB3aWR0aDoxMDAlO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbi5oZWFkaW5nY3Nze1xyXG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5tb2RhbC1jb250ZW50e1xyXG4gIC8qIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50OyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiBcclxufVxyXG5cclxuLm1vZGFsLXNwYWNpbmd7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4uZXhwb3J0LW1haW4taGVhZGVyLXJlZiB7XHJcbiAgLyogbWFyZ2luOiAwIDFyZW07XHJcbiAgYm9yZGVyLWNvbG9yOiAjNzA3MDcwOyAqL1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlci1ib3R0b206MDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnR7XHJcbmJvcmRlci1yYWRpdXM6IDAlO1xyXG59XHJcbi5kYXRlLWZpZWxkcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxufVxyXG4uZGl2aWRlLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBtYXJnaW46IDAgMTNweDtcclxufVxyXG5cclxuLm5neC1wYWdpbmF0aW9ue1xyXG4gIHBhZGRpbmc6MDtcclxuICBtYXJnaW4tYm90dG9tOjA7XHJcbn1cclxuLnBhZ2luYXRpb24tY3RyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG4ucGFnaW5hdGlvbi1jdHI6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uICB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDsgXHJcbiAgcGFkZGluZzowO1xyXG59XHJcbi8qIC5wYWdpbmF0aW9uLWN0cjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gbGkge1xyXG4gXHJcbn1cclxuLnBhZ2luYXRpb24tY3RyIC5wYWdpbmF0aW9uLWV4cG9ydC1wYWdlY29udHJvbHMge1xyXG4gIFxyXG59ICovXHJcbi5wYWdpbmF0aW9uLWN0ciAucGFnaW5hdGlvbi1leHBvcnQtcGFnZWNvbnRyb2xzIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59IFxyXG4ucGFnaW5hdGlvbi1jdHIgLnBhZ2luYXRpb24tZXhwb3J0LXBhZ2VkZCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4ucGFnaW5hdGlvbi1jdHIgLnBhZ2luYXRpb24tZXhwb3J0LXBhZ2VkZCBsYWJlbCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5wYWdpbmF0aW9uLWN0ciAucGFnaW5hdGlvbi1leHBvcnQtcGFnZWRkIHNlbGVjdHtcclxuICBtYXJnaW46IDAgMTBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgd2lkdGg6IDZyZW07XHJcbn1cclxuXHJcbi8qKiBzb3J0YWJsZSBhcnJvdyBzdGFydCAqL1xyXG4uZ3JvdXAtYXJyb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYXJyb3ctY3Rye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYXJyb3ctZ3JwIGkge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4uYXJyb3ctZ3JwLWN0cntcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmFycm93LWdycCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxudGFibGUgdHIgdGggbGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206MDtcclxufVxyXG4vKiogc29ydGFibGUgYXJyb3cgZW5kICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHsgXHJcblxyXG4gIC5wb3B1cC10YWJsZXtcclxuICAgIHdpZHRoOjM5JTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkOyAqL1xyXG4gIH1cclxuICAuaW5kaXZpZHVhbENhcmRze1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxuICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDNyZW07XHJcbiAgfVxyXG5cclxuICAucGVyZmVjdC1zY3JvbGwtYmFyLXJlZiB0YWJsZS50YWJsZSB0Ym9keXtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICB9XHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gICAgLyogbWF4LXdpZHRoOiA1NzUuOThweDsgKi9cclxuICAgIHdpZHRoOiA2MHJlbTtcclxuICB9XHJcbiAgLmNvbHNwYW4tcmVmLWlkIC5kYXRlLXJhbmdlLWxhYmVsLXJlZiB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmZvcm0tZ3JvdXAtY2xhc3MtcmVmLWQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5kYXRlLWZpZWxkcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICB9XHJcbiAgLmRpdmlkZS1pdGVtICB7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIHBhZGRpbmc6MCA1cHg7XHJcbiAgfVxyXG4gIC5kaXZpZGUtaXRlbSBsYWJlbCB7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIHBhZGRpbmc6MDtcclxuICB9XHJcbiAgLnBhZ2luYXRpb24tY3RyOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG4gIC5wYWdpbmF0aW9uLWN0ciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICB9XHJcbiAgLnBhZ2luYXRpb24tY3RyIC5wYWdpbmF0aW9uLWV4cG9ydC1idXR0b24sXHJcbiAgLnBhZ2luYXRpb24tY3RyIC5wYWdpbmF0aW9uLWV4cG9ydC1wYWdlZGQsXHJcbiAgLnBhZ2luYXRpb24tY3RyIC5wYWdpbmF0aW9uLWV4cG9ydC1wYWdlY29udHJvbHMge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDAuNXJlbSAwLjVyZW0gMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5wYWdpbmF0aW9uLWN0ciAucGFnaW5hdGlvbi1leHBvcnQtcGFnZWRkIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG4gIC50YWJsZS1yZXNwb25zaXZlIHRoIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgLnBvcHVwLXRhYmxle1xyXG4gICAgd2lkdGg6MzAlO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQ7ICovXHJcbiAgfVxyXG4gIC5pbmRpdmlkdWFsQ2FyZHN7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG4gICAgICB3aWR0aDogNzUlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogM3JlbTtcclxuICB9IFxyXG4gIC50YWJsZS1yZXNwb25zaXZlIHtcclxuICAgIG1heC13aWR0aDogNzY4cHg7XHJcbiAgfVxyXG4gIC5pdGVtcy1wZXItcGFnZXsgXHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuICAucGFnaW5hdGlvbi1jdHI6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbiAgXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxLjk4cHgpIHsgXHJcbiAgLmRhdGUtcmFuZ2UtbGFiZWwtcmVmIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgfVxyXG4gIC5kaXZpZGUtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAubXl2aXNpdC1jb2wtbW5ncntcclxuICAgIHdpZHRoOjE5JTtcclxuICB9XHJcbiAgLmRhdGUtZmllbGRzIC5kdC10b3tcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbiAgLnJvdy1yZWYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogZW5kO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgXHJcbiAgfVxyXG4gXHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: src_app_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
        }];
      }, {
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_Dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app/Dashboard/dashboard/dashboard.component */
    "./src/app/Dashboard/dashboard/dashboard.component.ts");

    var routes = [{
      path: '',
      component: _app_Dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }, {
      path: "**",
      component: _app_Dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    } // {
    //   path:'',redirectTo:'/dashboard',pathMatch:'full'
    // }
    ];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'trackingProject';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _Dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Dashboard/dashboard/dashboard.component */
    "./src/app/Dashboard/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");

    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
      suppressScrollY: false
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_51__["PERFECT_SCROLLBAR_CONFIG"],
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_48__["BrowserAnimationsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_50__["NgbModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_12__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_13__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_16__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_36__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_37__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_38__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_39__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_40__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_41__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_42__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_43__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_44__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_45__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_46__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_47__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollingModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_49__["Ng2SearchPipeModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_51__["PerfectScrollbarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _Dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_48__["BrowserAnimationsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_50__["NgbModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_12__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_13__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_16__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_36__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_37__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_38__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_39__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_40__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_41__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_42__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_43__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_44__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_45__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_46__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_47__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollingModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_49__["Ng2SearchPipeModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_51__["PerfectScrollbarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _Dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_48__["BrowserAnimationsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_50__["NgbModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_11__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_12__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_13__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_15__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_16__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_18__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_31__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_33__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_36__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_37__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_38__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_39__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_40__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_41__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_42__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_43__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_44__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_45__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_46__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_47__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollingModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_49__["Ng2SearchPipeModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_51__["PerfectScrollbarModule"]],
          providers: [{
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_51__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard.service.ts":
  /*!**************************************!*\
    !*** ./src/app/dashboard.service.ts ***!
    \**************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcAppDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DashboardService = /*#__PURE__*/function () {
      function DashboardService(httpclient) {
        _classCallCheck(this, DashboardService);

        this.httpclient = httpclient;
      }

      _createClass(DashboardService, [{
        key: "getStateData",
        value: function getStateData() {
          return this.httpclient.get("https://api.covid19india.org/data.json");
        }
      }, {
        key: "getDistrictData",
        value: function getDistrictData() {
          return this.httpclient.get("https://api.covid19india.org/state_district_wise.json");
        }
      }]);

      return DashboardService;
    }();

    DashboardService.ɵfac = function DashboardService_Factory(t) {
      return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DashboardService,
      factory: DashboardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\tracker\trackingProject\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map