function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/config-panel/config-panel-toggle/config-panel-toggle.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/config-panel/config-panel-toggle/config-panel-toggle.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsConfigPanelConfigPanelToggleConfigPanelToggleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button (click)=\"openConfig.emit()\" class=\"config-panel-toggle\" color=\"primary\" mat-fab type=\"button\">\r\n  <mat-icon [icIcon]=\"icSettings\"></mat-icon>\r\n</button>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/config-panel/config-panel.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/config-panel/config-panel.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsConfigPanelConfigPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"config$ | async as setting\" class=\"config-panel\">\r\n  <h2 class=\"headline mb-4\">\r\n    <ic-icon [icon]=\"icSettings\" class=\"mr-3\" inline=\"true\"></ic-icon>\r\n    <span>Configuration</span>\r\n  </h2>\r\n\r\n  <div class=\"section\">\r\n    <h5 class=\"subheading\">THEME STYLE</h5>\r\n\r\n    <div *ngFor=\"let config of configs; let first = first\"\r\n         [class.mt-6]=\"!first\"\r\n         class=\"rounded\">\r\n      <div class=\"layout-image rounded overflow-hidden relative hover:bg-hover shadow-8\">\r\n        <img [src]=\"config.imgSrc\" class=\"w-full block\">\r\n        <div class=\"layout-image-overlay\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"4px\">\r\n          <button (click)=\"setConfig(config.id, Style.light)\"\r\n                  class=\"bg-contrast-white text-contrast-black\"\r\n                  fxFlex=\"none\"\r\n                  mat-raised-button\r\n                  type=\"button\">LIGHT\r\n          </button>\r\n          <button (click)=\"setConfig(config.id, Style.default)\"\r\n                  color=\"primary\"\r\n                  fxFlex=\"none\"\r\n                  mat-raised-button\r\n                  type=\"button\">DEFAULT\r\n          </button>\r\n          <button (click)=\"setConfig(config.id, Style.dark)\"\r\n                  class=\"bg-contrast-black text-contrast-white\"\r\n                  fxFlex=\"none\"\r\n                  mat-raised-button\r\n                  type=\"button\">DARK\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"text-center body-2 mt-2\">{{ config.name }}</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"section\">\r\n    <h5 class=\"subheading\">LAYOUT</h5>\r\n\r\n    <div class=\"section-content\">\r\n      <h5 class=\"subheading\">ORIENTATION</h5>\r\n\r\n      <mat-slide-toggle (change)=\"layoutRTLChange($event)\" [checked]=\"isRTL$ | async\">RTL</mat-slide-toggle>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"section\">\r\n    <h5 class=\"subheading\">TOOLBAR</h5>\r\n\r\n    <div class=\"section-content\">\r\n      <h5 class=\"subheading\">POSITION</h5>\r\n\r\n      <mat-radio-group (change)=\"toolbarPositionChange($event)\"\r\n                       [value]=\"setting.toolbar.fixed ? 'fixed' : 'static'\"\r\n                       fxLayout=\"column\"\r\n                       fxLayoutGap=\"12px\">\r\n        <mat-radio-button value=\"fixed\">Fixed</mat-radio-button>\r\n        <mat-radio-button value=\"static\">Static</mat-radio-button>\r\n      </mat-radio-group>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"section\">\r\n    <h5 class=\"subheading\">FOOTER</h5>\r\n\r\n    <div class=\"section-content\">\r\n      <mat-slide-toggle (change)=\"footerVisibleChange($event)\" [checked]=\"setting.footer.visible\">Visible\r\n      </mat-slide-toggle>\r\n\r\n      <h5 class=\"subheading\">POSITION</h5>\r\n\r\n      <mat-radio-group (change)=\"footerPositionChange($event)\"\r\n                       [value]=\"setting.footer.fixed ? 'fixed' : 'static'\"\r\n                       fxLayout=\"column\"\r\n                       fxLayoutGap=\"12px\">\r\n        <mat-radio-button value=\"fixed\">Fixed</mat-radio-button>\r\n        <mat-radio-button value=\"static\">Static</mat-radio-button>\r\n      </mat-radio-group>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/footer/footer.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/footer/footer.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"footer\" fxLayout=\"row\">\r\n  <div fxFlex=\"auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\" vexContainer>\r\n    <a class=\"action\"\r\n       color=\"primary\"\r\n       fxFlex=\"none\"\r\n       href=\"//themeforest.net/item/vex-angular-8-material-design-admin-template/24472891\"\r\n       id=\"get-vex\"\r\n       mat-raised-button>\r\n      <ic-icon [icon]=\"icShoppingBasket\" class=\"ltr:mr-2 rtl:ml-2\" inline=\"true\" size=\"18px\"></ic-icon>\r\n      <span>Get Vex (Angular 8+)</span>\r\n    </a>\r\n    <div class=\"ltr:ml-4 rtl:mr-4\" fxHide fxShow.gt-sm>\r\n      Vex - Angular 8+ Material Design Admin Template - Save 100s of hours designing and coding\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/mega-menu/mega-menu.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/mega-menu/mega-menu.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsMegaMenuMegaMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [ngClass.gt-sm]=\"['mr-6']\" class=\"card overflow-auto\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\r\n  <div class=\"bg-primary-500 text-primary-contrast-500 p-gutter\" fxFlex=\"300px\" fxFlex.lt-md=\"auto\">\r\n    <h2 class=\"headline mb-4\">Mega Menu</h2>\r\n\r\n    <p class=\"caption\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there\r\n      live the blind\r\n      texts.</p>\r\n\r\n    <p class=\"caption\">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language\r\n      ocean.</p>\r\n\r\n    <button class=\"border border-primary-contrast border-solid mt-4\" mat-button type=\"button\">LEARN MORE</button>\r\n  </div>\r\n\r\n  <div class=\"p-gutter\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\">\r\n    <h3 class=\"body-2 m-0\">FEATURES</h3>\r\n\r\n    <div class=\"mt-4\" gdColumns=\"1fr 1fr 1fr\" gdGap=\"16px\">\r\n      <a (click)=\"close()\"\r\n         *ngFor=\"let feature of features\"\r\n         [routerLink]=\"feature.route\"\r\n         class=\"text-dark p-3 text-center hover:bg-hover hover:text-primary-500 trans-ease-out rounded block no-underline\">\r\n        <ic-icon [icon]=\"feature.icon\" class=\"text-primary-500\" size=\"32px\"></ic-icon>\r\n        <div class=\"body-1 mt-2\">{{ feature.label }}</div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"p-gutter\" fxFlex=\"350px\" fxFlex.lt-md=\"auto\">\r\n    <h3 class=\"body-2 m-0\">PAGES</h3>\r\n\r\n    <div class=\"mt-6\" gdColumns=\"1fr 1fr\" gdGap=\"16px 48px\">\r\n      <a (click)=\"close()\"\r\n         *ngFor=\"let page of pages\"\r\n         [routerLink]=\"page.route\"\r\n         class=\"text-dark body-1 no-underline hover:text-primary-500 trans-ease-out\">{{ page.label }}</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/navigation-item/navigation-item.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/navigation-item/navigation-item.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsNavigationItemNavigationItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a *ngIf=\"isLink(item) && !isFunction(item.route)\"\r\n   [class.hover:bg-hover]=\"!(isActive$ | async)(item)\"\r\n   [ngClass]=\"{ 'bg-primary-500 text-primary-contrast-500': (isActive$ | async)(item), 'navigation-color': !(isActive$ | async)(item) }\"\r\n   [routerLink]=\"item.route\"\r\n   class=\"navigation-item\"\r\n   matRipple>\r\n  {{ item.label }}\r\n</a>\r\n\r\n<div (click)=\"item.route()\"\r\n     *ngIf=\"isLink(item) && isFunction(item.route)\"\r\n     [class.hover:bg-hover]=\"!(isActive$ | async)(item)\"\r\n     class=\"navigation-item navigation-color\"\r\n     matRipple>\r\n  {{ item.label }}\r\n</div>\r\n\r\n<ng-container *ngIf=\"(isSubheading(item) && item.children?.length > 0) || isDropdown(item)\">\r\n  <div [class.hover:bg-hover]=\"!(isActive$ | async)(item)\"\r\n       [matMenuTriggerFor]=\"menu\"\r\n       [ngClass]=\"{ 'bg-primary-500 text-primary-contrast-500': (isActive$ | async)(item), 'navigation-color': !(isActive$ | async)(item) }\"\r\n       class=\"navigation-item\"\r\n       matRipple>\r\n    {{ item.label }}\r\n  </div>\r\n\r\n  <mat-menu #menu=\"matMenu\" yPosition=\"below\">\r\n    <ng-container *ngFor=\"let child of item.children\">\r\n      <a *ngIf=\"isLink(child) && !isFunction(child.route)\"\r\n         [routerLink]=\"child.route\"\r\n         class=\"navigation-menu-item\"\r\n         mat-menu-item>\r\n        <mat-icon [icIcon]=\"child.icon\"></mat-icon>\r\n        <span>{{ child.label }}</span>\r\n      </a>\r\n\r\n      <div (click)=\"child.route()\"\r\n           *ngIf=\"isLink(child) && isFunction(child.route)\"\r\n           class=\"navigation-menu-item\"\r\n           mat-menu-item>\r\n        <mat-icon [icIcon]=\"child.icon\"></mat-icon>\r\n        <span>{{ child.label }}</span>\r\n      </div>\r\n\r\n      <ng-container *ngIf=\"isDropdown(child)\">\r\n        <button [matMenuTriggerFor]=\"level1\" class=\"navigation-menu-item\" mat-menu-item>\r\n          <mat-icon [icIcon]=\"child.icon\"></mat-icon>\r\n          <span>{{ child.label }}</span>\r\n        </button>\r\n\r\n        <mat-menu #level1=\"matMenu\" yPosition=\"below\">\r\n          <ng-container *ngFor=\"let item of child.children\">\r\n            <ng-container [ngTemplateOutletContext]=\"{ item: item }\"\r\n                          [ngTemplateOutlet]=\"linkTemplate\"></ng-container>\r\n\r\n            <ng-container *ngIf=\"isDropdown(item)\">\r\n              <button [matMenuTriggerFor]=\"level2\"\r\n                      class=\"navigation-menu-item\"\r\n                      mat-menu-item>{{ item.label }}</button>\r\n\r\n              <mat-menu #level2=\"matMenu\" yPosition=\"below\">\r\n                <ng-container *ngFor=\"let child of item.children\">\r\n                  <ng-container [ngTemplateOutletContext]=\"{ item: child }\"\r\n                                [ngTemplateOutlet]=\"linkTemplate\"></ng-container>\r\n\r\n                  <ng-container *ngIf=\"isDropdown(child)\">\r\n                    <button [matMenuTriggerFor]=\"level3\"\r\n                            class=\"navigation-menu-item\"\r\n                            mat-menu-item>{{ child.label }}</button>\r\n\r\n                    <mat-menu #level3=\"matMenu\" yPosition=\"below\">\r\n                      <ng-container *ngFor=\"let item of child.children\">\r\n                        <ng-container [ngTemplateOutletContext]=\"{ item: item }\"\r\n                                      [ngTemplateOutlet]=\"linkTemplate\"></ng-container>\r\n\r\n                        <ng-container *ngIf=\"isDropdown(item)\">\r\n                          <button [matMenuTriggerFor]=\"level4\"\r\n                                  class=\"navigation-menu-item\"\r\n                                  mat-menu-item>{{ item.label }}</button>\r\n\r\n                          <mat-menu #level4=\"matMenu\" yPosition=\"below\">\r\n                            <ng-container *ngFor=\"let child of item.children\">\r\n                              <ng-container [ngTemplateOutletContext]=\"{ item: child }\"\r\n                                            [ngTemplateOutlet]=\"linkTemplate\"></ng-container>\r\n\r\n                              <ng-container *ngIf=\"isDropdown(child)\">\r\n                                <button [matMenuTriggerFor]=\"level5\"\r\n                                        class=\"navigation-menu-item\"\r\n                                        mat-menu-item>{{ child.label }}</button>\r\n\r\n                                <mat-menu #level5=\"matMenu\" yPosition=\"below\">\r\n                                  <ng-container *ngFor=\"let item of child.children\">\r\n                                    <ng-container [ngTemplateOutletContext]=\"{ item: item }\"\r\n                                                  [ngTemplateOutlet]=\"linkTemplate\"></ng-container>\r\n                                  </ng-container>\r\n                                </mat-menu>\r\n                              </ng-container>\r\n                            </ng-container>\r\n                          </mat-menu>\r\n                        </ng-container>\r\n                      </ng-container>\r\n                    </mat-menu>\r\n                  </ng-container>\r\n                </ng-container>\r\n              </mat-menu>\r\n            </ng-container>\r\n          </ng-container>\r\n        </mat-menu>\r\n      </ng-container>\r\n\r\n    </ng-container>\r\n  </mat-menu>\r\n\r\n  <ng-template #linkTemplate let-item=\"item\">\r\n    <a *ngIf=\"isLink(item) && !isFunction(item.route)\"\r\n       [routerLink]=\"item.route\"\r\n       class=\"navigation-menu-item\"\r\n       mat-menu-item>{{ item.label }}</a>\r\n\r\n    <div (click)=\"item.route()\"\r\n         *ngIf=\"isLink(item) && isFunction(item.route)\"\r\n         class=\"navigation-menu-item\"\r\n         mat-menu-item>{{ item.label }}</div>\r\n  </ng-template>\r\n</ng-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/popover/popover.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/popover/popover.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsPopoverPopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div @transformPopover class=\"popover\">\r\n  <ng-container [ngSwitch]=\"renderMethod\">\r\n    <div *ngSwitchCase=\"'text'\" [innerHTML]=\"content\"></div>\r\n    <ng-container *ngSwitchCase=\"'template'\">\r\n      <ng-container *ngTemplateOutlet=\"content; context: context\"></ng-container>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"'component'\">\r\n      <ng-container *ngComponentOutlet=\"content\"></ng-container>\r\n    </ng-container>\r\n  </ng-container>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/progress-bar/progress-bar.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/progress-bar/progress-bar.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsProgressBarProgressBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-progress-bar [class.visible]=\"loader.progress$ | async\"\r\n                  [value]=\"loader.progress$ | async\"\r\n                  class=\"progress-bar\"\r\n                  mode=\"determinate\"></mat-progress-bar>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/quickpanel/quickpanel.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/quickpanel/quickpanel.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsQuickpanelQuickpanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"body-2 p-6 bg-primary-500 text-primary-contrast-500\">\r\n  <p>TODAY</p>\r\n  <div class=\"display-1\">{{ dayName }}</div>\r\n  <div class=\"display-1\">{{ date }}</div>\r\n</div>\r\n\r\n<mat-divider></mat-divider>\r\n\r\n<mat-nav-list>\r\n  <h3 matSubheader>UPCOMING EVENTS</h3>\r\n  <a [routerLink]=\"[]\" mat-list-item>\r\n    <h4 matLine>Business Meeting</h4>\r\n    <p matLine>In 16 Minutes, Meeting Room</p>\r\n  </a>\r\n  <a [routerLink]=\"[]\" mat-list-item>\r\n    <h4 matLine>Ask for Vacation</h4>\r\n    <p matLine>12:00 PM</p>\r\n  </a>\r\n  <a [routerLink]=\"[]\" mat-list-item>\r\n    <h4 matLine>Dinner with Sophie</h4>\r\n    <p matLine>18:30 PM</p>\r\n  </a>\r\n  <a [routerLink]=\"[]\" mat-list-item>\r\n    <h4 matLine>Deadline for Project X</h4>\r\n    <p matLine>21:00 PM</p>\r\n  </a>\r\n  <mat-divider></mat-divider>\r\n  <h3 matSubheader>TODO-LIST</h3>\r\n  <a [routerLink]=\"[]\" mat-list-item>\r\n    <h4 matLine>Invite Jack to play golf</h4>\r\n    <p matLine>Added: 6 hours ago</p>\r\n  </a>\r\n  <a [routerLink]=\"[]\" mat-list-item>\r\n    <h4 matLine>Get to know Angular more</h4>\r\n    <p matLine>Added: 2 days ago</p>\r\n  </a>\r\n  <a [routerLink]=\"[]\" mat-list-item>\r\n    <h4 matLine>Configure that new router</h4>\r\n    <p matLine>Added: 5 days ago</p>\r\n  </a>\r\n  <mat-divider></mat-divider>\r\n  <h3 matSubheader>SERVER STATISTICS</h3>\r\n</mat-nav-list>\r\n\r\n<div class=\"list-item\" matRipple>\r\n  <p>CPU Load (71% / 100%)</p>\r\n  <p class=\"progress-bar\">\r\n    <mat-progress-bar color=\"primary\" mode=\"determinate\" value=\"71\"></mat-progress-bar>\r\n  </p>\r\n</div>\r\n\r\n<div class=\"list-item\" matRipple>\r\n  <p>RAM Usage (6,175 MB / 16,384 MB)</p>\r\n  <p class=\"progress-bar\">\r\n    <mat-progress-bar color=\"accent\" mode=\"determinate\" value=\"34\"></mat-progress-bar>\r\n  </p>\r\n</div>\r\n\r\n<div class=\"list-item\" matRipple>\r\n  <p>CPU Temp (43° / 80°)</p>\r\n  <p class=\"progress-bar\">\r\n    <mat-progress-bar color=\"warn\" mode=\"determinate\" value=\"54\"></mat-progress-bar>\r\n  </p>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/search/search.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/search/search.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div (keyup.escape)=\"close()\" [class.show]=\"show$ | async\" class=\"search\">\r\n  <button (click)=\"close()\"\r\n          class=\"ltr:right-12 rtl:left-12 top-12 absolute\"\r\n          color=\"primary\"\r\n          mat-icon-button\r\n          type=\"button\">\r\n    <mat-icon [icIcon]=\"icClose\"></mat-icon>\r\n  </button>\r\n\r\n  <input #searchInput (keyup.enter)=\"search()\" [formControl]=\"searchCtrl\" class=\"search-input\" placeholder=\"Search...\"/>\r\n  <div class=\"search-hint\">Hit enter to search</div>\r\n</div>\r\n\r\n<div (click)=\"close()\" *ngIf=\"show$ | async\" class=\"search-overlay\"></div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/sidebar/sidebar.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/sidebar/sidebar.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div (click)=\"close()\" [class.invisible]=\"invisibleBackdrop\" [class.visible]=\"opened\" class=\"backdrop\"></div>\r\n\r\n<div [class.open]=\"opened\" [class.position-left]=\"positionLeft\" [class.position-right]=\"positionRight\" class=\"sidebar\">\r\n  <ng-content></ng-content>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/sidenav-item/sidenav-item.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/sidenav-item/sidenav-item.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsSidenavItemSidenavItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a *ngIf=\"isLink(item) && !isFunction(item.route)\"\r\n   [fragment]=\"item.fragment\"\r\n   [routerLinkActiveOptions]=\"item.routerLinkActive || { exact: false }\"\r\n   [routerLink]=\"item.route\"\r\n   class=\"item\"\r\n   fxLayout=\"row\"\r\n   matRipple\r\n   routerLinkActive=\"active\">\r\n  <mat-icon *ngIf=\"level === 0\" [icIcon]=\"item.icon\" class=\"item-icon\" fxFlex=\"none\"></mat-icon>\r\n  <span class=\"item-label\" fxFlex=\"auto\">{{ item.label }}</span>\r\n  <span *ngIf=\"item.badge\"\r\n        [style.background]=\"item.badge.background\"\r\n        [style.color]=\"item.badge.color\"\r\n        class=\"item-badge\"\r\n        fxFlex=\"none\">{{ item.badge.value }}</span>\r\n</a>\r\n\r\n<div (click)=\"item.route()\"\r\n     *ngIf=\"isLink(item) && isFunction(item.route)\"\r\n     class=\"item\"\r\n     fxLayout=\"row\"\r\n     matRipple\r\n     routerLinkActive=\"active\">\r\n  <mat-icon *ngIf=\"level === 0\" [icIcon]=\"item.icon\" class=\"item-icon\" fxFlex=\"none\"></mat-icon>\r\n  <span class=\"item-label\" fxFlex=\"auto\">{{ item.label }}</span>\r\n  <span *ngIf=\"item.badge\"\r\n        [style.background]=\"item.badge.background\"\r\n        [style.color]=\"item.badge.color\"\r\n        class=\"item-badge\"\r\n        fxFlex=\"none\">{{ item.badge.value }}</span>\r\n</div>\r\n\r\n<ng-container *ngIf=\"isDropdown(item)\">\r\n  <div (click)=\"toggleOpen()\"\r\n       [class.active]=\"isOpen || isActive\"\r\n       [class.open]=\"isOpen\"\r\n       class=\"item\"\r\n       fxLayout=\"row\"\r\n       matRipple>\r\n    <mat-icon *ngIf=\"level === 0\" [icIcon]=\"item.icon\" class=\"item-icon\" fxFlex=\"none\"></mat-icon>\r\n    <span class=\"item-label\" fxFlex=\"auto\">{{ item.label }}</span>\r\n    <span *ngIf=\"item.badge\"\r\n          [style.background]=\"item.badge.background\"\r\n          [style.color]=\"item.badge.color\"\r\n          class=\"item-badge\"\r\n          fxFlex=\"none\">{{ item.badge.value }}</span>\r\n    <mat-icon [icIcon]=\"icKeyboardArrowRight\" class=\"item-dropdown-icon\" fxFlex=\"none\"></mat-icon>\r\n  </div>\r\n  <div [@dropdown]=\"isOpen\" class=\"item-dropdown\">\r\n    <vex-sidenav-item *ngFor=\"let subItem of item.children\" [item]=\"subItem\" [level]=\"level + 1\"></vex-sidenav-item>\r\n  </div>\r\n</ng-container>\r\n\r\n\r\n<ng-container *ngIf=\"isSubheading(item)\">\r\n  <div class=\"subheading\">{{ item.label }}</div>\r\n  <vex-sidenav-item *ngFor=\"let subItem of item.children\" [item]=\"subItem\" [level]=\"0\"></vex-sidenav-item>\r\n</ng-container>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.html":
  /*!**********************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.html ***!
    \**********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsToolbarNotificationsToolbarNotificationsDropdownToolbarNotificationsDropdownComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dropdown\">\r\n  <div class=\"dropdown-header\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <div>\r\n      <div class=\"dropdown-heading\">Notifications</div>\r\n      <div class=\"dropdown-subheading\">You have {{ notifications.length }} new notifications.</div>\r\n    </div>\r\n\r\n    <button [matMenuTriggerFor]=\"settingsMenu\" mat-icon-button type=\"button\">\r\n      <mat-icon [icIcon]=\"icSettings\" class=\"notifications-header-icon\"></mat-icon>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"dropdown-content\">\r\n    <a *ngFor=\"let notification of notifications; trackBy: trackById\"\r\n       [class.read]=\"notification.read\"\r\n       [routerLink]=\"[]\"\r\n       class=\"notification\"\r\n       fxLayout=\"row\"\r\n       fxLayoutAlign=\"start center\"\r\n       matRipple>\r\n      <ic-icon [icon]=\"notification.icon\"\r\n               [ngClass]=\"notification.colorClass\"\r\n               class=\"notification-icon\"\r\n               fxFlex=\"none\"\r\n               size=\"24px\"></ic-icon>\r\n      <div fxFlex=\"auto\">\r\n        <div class=\"notification-label\">{{ notification.label }}</div>\r\n        <div class=\"notification-description\">{{ notification.datetime | relativeDateTime }}</div>\r\n      </div>\r\n      <mat-icon [icIcon]=\"icChevronRight\" class=\"notification-chevron\" fxFlex=\"none\"></mat-icon>\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"dropdown-footer\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <button color=\"primary\" mat-button type=\"button\">MARK ALL AS READ</button>\r\n  </div>\r\n</div>\r\n\r\n<mat-menu #settingsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\r\n  <button mat-menu-item>\r\n    <mat-icon [icIcon]=\"icClearAll\"></mat-icon>\r\n    <span>Mark all as read</span>\r\n  </button>\r\n\r\n  <button mat-menu-item>\r\n    <mat-icon [icIcon]=\"icNotificationsOff\"></mat-icon>\r\n    <span>Disable Notifications</span>\r\n  </button>\r\n</mat-menu>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-notifications/toolbar-notifications.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-notifications/toolbar-notifications.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsToolbarNotificationsToolbarNotificationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button #originRef (click)=\"showPopover()\" [class.active]=\"dropdownOpen\" class=\"button\" mat-icon-button type=\"button\">\r\n  <mat-icon [icIcon]=\"icNotificationsActive\"></mat-icon>\r\n</button>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-search/toolbar-search.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-search/toolbar-search.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsToolbarSearchToolbarSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n  <button (click)=\"open()\" mat-icon-button>\r\n    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\r\n  </button>\r\n  <mat-form-field [class.search-open]=\"isOpen\" appearance=\"outline\" class=\"search\" fxFlex=\"auto\">\r\n    <mat-label>Search&hellip;</mat-label>\r\n    <input #input (blur)=\"close()\" matInput>\r\n  </mat-form-field>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsToolbarUserToolbarUserDropdownToolbarUserDropdownComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dropdown\">\r\n  <div class=\"dropdown-header\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <div class=\"dropdown-heading-icon\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <mat-icon [icIcon]=\"icPerson\"></mat-icon>\r\n      </div>\r\n      <div class=\"dropdown-heading\">{{ (user | async).userName }}</div>\r\n    </div>\r\n\r\n    <!-- <button [matMenuTriggerFor]=\"settingsMenu\"\r\n            mat-icon-button\r\n            matTooltip=\"Settings\"\r\n            matTooltipPosition=\"before\"\r\n            type=\"button\">\r\n      <mat-icon [icIcon]=\"icSettings\" class=\"notifications-header-icon\"></mat-icon>\r\n    </button> -->\r\n  </div>\r\n\r\n  <div class=\"dropdown-content\">\r\n    <div *ngIf=\"(user | async).isSubcriber; else notSub\">\r\n    <a (click)=\"close()\"\r\n       class=\"notification\"\r\n       fxLayout=\"row\"\r\n       [routerLink]=\"\"\r\n       fxLayoutAlign=\"start center\"\r\n       >\r\n        <mat-icon [icIcon]=\"checkCircle\"\r\n        color=\"green\"\r\n                  class=\"notification-icon\"\r\n                  fxFlex=\"none\"></mat-icon>\r\n        <div fxFlex=\"auto\">\r\n          <div class=\"notification-label\">Votre abonnement</div>\r\n          <div class=\"notification-description\">Actif</div>\r\n        </div>\r\n        <mat-icon [icIcon]=\"icChevronRight\" class=\"notification-chevron\" fxFlex=\"none\"></mat-icon>\r\n      </a>\r\n    </div>\r\n    <ng-template #notSub>\r\n      <a (click)=\"close()\"\r\n      class=\"notification\"\r\n      fxLayout=\"row\"\r\n      [routerLink]=\"\"\r\n      fxLayoutAlign=\"start center\"\r\n      >\r\n       <mat-icon [icIcon]=\"exclamationCircle\"\r\n       color=\"red\"\r\n                 class=\"notification-icon\"\r\n                 fxFlex=\"none\"></mat-icon>\r\n       <div fxFlex=\"auto\">\r\n         <div class=\"notification-label\">Votre abonnement</div>\r\n         <div class=\"notification-description\">Inactif</div>\r\n       </div>\r\n       <mat-icon [icIcon]=\"icChevronRight\" class=\"notification-chevron\" fxFlex=\"none\"></mat-icon>\r\n     </a>\r\n    </ng-template>\r\n    <a \r\n    *ngIf=\"user | async as u\"\r\n    (click)=\"copyClipboard(u.apiKey)\"\r\n    class=\"notification\"\r\n    fxLayout=\"row\"\r\n    fxLayoutAlign=\"start center\"\r\n    >\r\n     <mat-icon [icIcon]=\"keyIcon\"\r\n     color=\"#ff9f43\"\r\n               class=\"notification-icon\"\r\n               fxFlex=\"none\"></mat-icon>\r\n     <div fxFlex=\"auto\">\r\n       <div class=\"notification-label\">Clé API</div>\r\n       <div class=\"notification-description\">{{(user | async).apiKey}}</div>\r\n       <div class=\"notification-description\" *ngIf=\"isCopy\">Clé copié</div>\r\n     </div>\r\n     <!-- <mat-icon [icIcon]=\"icChevronRight\" class=\"notification-chevron\" fxFlex=\"none\"></mat-icon> -->\r\n   </a>\r\n    <!-- <a (click)=\"close()\"\r\n       class=\"notification\"\r\n       fxLayout=\"row\"\r\n       [routerLink]=\"\"\r\n       fxLayoutAlign=\"start center\"\r\n       >\r\n      <mat-icon [icIcon]=\"exclamationCircle\"\r\n      color=\"red\"\r\n                class=\"notification-icon\"\r\n                fxFlex=\"none\"></mat-icon>\r\n      <div fxFlex=\"auto\">\r\n        <div class=\"notification-label\">Votre abonnement</div>\r\n        <div class=\"notification-description\">Inactif</div>\r\n      </div>\r\n      <mat-icon [icIcon]=\"icChevronRight\" class=\"notification-chevron\" fxFlex=\"none\"></mat-icon>\r\n    </a> -->\r\n  </div>\r\n\r\n  <div class=\"dropdown-footer\" fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n    <!-- <button [matMenuTriggerFor]=\"statusMenu\" class=\"dropdown-footer-select\" mat-button type=\"button\">\r\n      <ng-container *ngFor=\"let status of statuses; trackBy: trackById\">\r\n        <span *ngIf=\"status === activeStatus\">\r\n          <mat-icon [icIcon]=\"status.icon\" [ngClass]=\"status.colorClass\"></mat-icon>\r\n          <span>{{ status.label }}</span>\r\n          <mat-icon [icIcon]=\"icArrowDropDown\" class=\"dropdown-footer-select-caret\"></mat-icon>\r\n        </span>\r\n      </ng-container>\r\n    </button> -->\r\n    <a (click)=\"close()\" [routerLink]=\"['/login']\" color=\"primary\" mat-button>Déconnexion</a>\r\n  </div>\r\n</div>\r\n\r\n<mat-menu #statusMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\r\n  <button (click)=\"setStatus(status)\"\r\n          *ngFor=\"let status of statuses; trackBy: trackById\"\r\n          mat-menu-item>\r\n    <ic-icon [icon]=\"status.icon\" [ngClass]=\"status.colorClass\" inline=\"true\" size=\"24px\"></ic-icon>\r\n    <span>{{ status.label }}</span>\r\n  </button>\r\n</mat-menu>\r\n\r\n\r\n<mat-menu #settingsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\r\n  <button mat-menu-item>\r\n    <mat-icon [icIcon]=\"icBusiness\"></mat-icon>\r\n    <span>Change Address</span>\r\n  </button>\r\n\r\n  <button mat-menu-item>\r\n    <mat-icon [icIcon]=\"icVerifiedUser\"></mat-icon>\r\n    <span>Change Username</span>\r\n  </button>\r\n\r\n  <button mat-menu-item>\r\n    <mat-icon [icIcon]=\"icLock\"></mat-icon>\r\n    <span>Change Password</span>\r\n  </button>\r\n\r\n  <button mat-menu-item>\r\n    <mat-icon [icIcon]=\"icNotificationsOff\"></mat-icon>\r\n    <span>Disable Notifications</span>\r\n  </button>\r\n</mat-menu>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-user/toolbar-user.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-user/toolbar-user.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexComponentsToolbarUserToolbarUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\r\n  #originRef\r\n  (click)=\"showPopover(originRef)\"\r\n  [class.bg-hover]=\"dropdownOpen\"\r\n  class=\"flex items-center rounded cursor-pointer relative trans-ease-out select-none py-1 pr-1 pl-3 hover:bg-hover\"\r\n  matRipple\r\n>\r\n  <div class=\"body-1 font-medium leading-snug ltr:mr-3 rtl:ml-3\" fxHide.xs>\r\n    {{username.userName}}\r\n  </div>\r\n  <div\r\n    [style.background-color]=\"theme.colors.primary['500'] | colorFade: 0.9\"\r\n    [style.color]=\"theme.colors.primary['500']\"\r\n    class=\"rounded-full h-9 w-9 flex items-center justify-center\"\r\n  >\r\n    <mat-icon [icIcon]=\"icPerson\"></mat-icon>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/layout/layout.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/layout/layout.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexLayoutLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [class.boxed]=\"isBoxed$ | async\"\r\n     [class.horizontal-layout]=\"!(isLayoutVertical$ | async)\"\r\n     [class.is-mobile]=\"!(isDesktop$ | async)\"\r\n     [class.vertical-layout]=\"isLayoutVertical$ | async\"\r\n     [class.has-fixed-footer]=\"(isFooterFixed$ | async) && isFooterVisible$ | async\"\r\n     [class.has-footer]=\"isFooterVisible$ | async\"\r\n     [class.scroll-disabled]=\"scrollDisabled$ | async\"\r\n     [class.toolbar-fixed]=\"isToolbarFixed$ | async\"\r\n     [class.sidenav-collapsed]=\"sidenavCollapsed$ | async\"\r\n     [class.content-container]=\"containerEnabled$ | async\"\r\n     [class.with-search]=\"searchOpen$ | async\"\r\n     class=\"page-container\">\r\n\r\n  <vex-progress-bar></vex-progress-bar>\r\n\r\n  <vex-search></vex-search>\r\n\r\n  <mat-sidenav-container class=\"sidenav-container\">\r\n    <mat-sidenav #sidenav\r\n                 [disableClose]=\"isDesktop$ | async\"\r\n                 [fixedInViewport]=\"!(isDesktop$ | async)\"\r\n                 [mode]=\"!(isDesktop$ | async) || (isLayoutVertical$ | async) ? 'over' : 'side'\"\r\n                 [opened]=\"(isDesktop$ | async) && !(isLayoutVertical$ | async)\"\r\n                 class=\"sidenav\">\r\n      <ng-container *ngTemplateOutlet=\"sidenavRef\"></ng-container>\r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav #quickpanel\r\n                 [fixedInViewport]=\"!(isDesktop$ | async)\"\r\n                 class=\"quickpanel\"\r\n                 mode=\"over\"\r\n                 position=\"end\">\r\n      <ng-container *ngTemplateOutlet=\"quickpanelRef\"></ng-container>\r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav-content class=\"sidenav-content\">\r\n      <ng-container *ngTemplateOutlet=\"toolbarRef\"></ng-container>\r\n\r\n      <main class=\"content\">\r\n        <router-outlet></router-outlet>\r\n      </main>\r\n\r\n      <ng-container *ngTemplateOutlet=\"footerRef\"></ng-container>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/layout/navigation/navigation.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/layout/navigation/navigation.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexLayoutNavigationNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"navigation\" fxLayout=\"row\" fxLayoutAlign=\"start center\" vexContainer>\r\n  <vex-navigation-item *ngFor=\"let item of items\" [item]=\"item\"></vex-navigation-item>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/layout/sidenav/sidenav.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/layout/sidenav/sidenav.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexLayoutSidenavSidenavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div (mouseenter)=\"onMouseEnter()\"\r\n     (mouseleave)=\"onMouseLeave()\"\r\n     [class.collapsed]=\"collapsed\"\r\n     [class.open]=\"collapsed && collapsedOpen$ | async\"\r\n     class=\"sidenav flex flex-col\">\r\n  <div class=\"sidenav-toolbar flex-none flex items-center\">\r\n    <img [src]=\"imageUrl$ | async\" class=\"w-6 select-none flex-none\">\r\n    <h2 class=\"title ltr:pl-4 rtl:pr-4 select-none flex-auto\">{{ title$ | async }}</h2>\r\n    <button (click)=\"toggleCollapse()\"\r\n            *ngIf=\"showCollapsePin$ | async\"\r\n            class=\"w-8 h-8 -mr-2 leading-none flex-none hidden lg:block\"\r\n            mat-icon-button\r\n            type=\"button\">\r\n      <mat-icon *ngIf=\"!collapsed\" [icIcon]=\"icRadioButtonChecked\" size=\"14px\"></mat-icon>\r\n      <mat-icon *ngIf=\"collapsed\" [icIcon]=\"icRadioButtonUnchecked\" size=\"14px\"></mat-icon>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"sidenav-items flex-auto\" vexScrollbar>\r\n    <vex-sidenav-item *ngFor=\"let item of items; trackBy: trackByRoute\"\r\n                      [item]=\"item\"\r\n                      [level]=\"0\"></vex-sidenav-item>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/@vex/layout/toolbar/toolbar.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/@vex/layout/toolbar/toolbar.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVexLayoutToolbarToolbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"toolbar w-full px-gutter\" fxLayout=\"row\" fxLayoutAlign=\"start center\" vexContainer>\r\n  <button (click)=\"openSidenav()\" [fxHide]=\"!mobileQuery\" mat-icon-button type=\"button\">\r\n    <mat-icon [icIcon]=\"icMenu\"></mat-icon>\r\n  </button>\r\n\r\n  <a *ngIf=\"isVerticalLayout$ | async\" [routerLink]=\"['/']\" class=\"ltr:mr-4 rtl:ml-4 block\" fxLayout=\"row\"\r\n    fxLayoutAlign=\"start center\">\r\n    <img class=\"w-8 select-none\" src=\"assets/img/demo/logo.svg\" />\r\n    <h1 [fxHide]=\"mobileQuery\" class=\"title ltr:pl-4 rtl:pr-4 m-0 select-none\">\r\n      DeepBot\r\n    </h1>\r\n  </a>\r\n\r\n\r\n  <div #megaMenuOriginRef class=\"ltr:ml-2 rtl:mr-2\">\r\n    <button *ngIf=\"isHorizontalLayout$ | async\" [fxHide]=\"mobileQuery\" color=\"primary\" mat-button type=\"button\">\r\n      Bot\r\n      <!-- <ic-icon\r\n        [icon]=\"icArrowDropDown\"\r\n        class=\"ltr:-mr-1 rtl:-ml-1\"\r\n        inline=\"true\"\r\n        ></ic-icon> -->\r\n    </button>\r\n  </div>\r\n  <div #megaMenuOriginRef class=\"ltr:ml-2 rtl:mr-2\">\r\n    <button *ngIf=\"isHorizontalLayout$ | async\" [fxHide]=\"mobileQuery\" color=\"primary\" mat-button type=\"button\">\r\n      Documentation\r\n      <!-- <ic-icon\r\n          [icon]=\"icArrowDropDown\"\r\n          class=\"ltr:-mr-1 rtl:-ml-1\"\r\n          inline=\"true\"\r\n          ></ic-icon> -->\r\n    </button>\r\n  </div>\r\n  <div #megaMenuOriginRef class=\"ltr:ml-2 rtl:mr-2\">\r\n    <button *ngIf=\"isHorizontalLayout$ | async\" [fxHide]=\"mobileQuery\" color=\"primary\" mat-button type=\"button\"\r\n      disabled>\r\n      Forum\r\n      <!-- <ic-icon\r\n                                                [icon]=\"icArrowDropDown\"\r\n                                                class=\"ltr:-mr-1 rtl:-ml-1\"\r\n                                                inline=\"true\"\r\n                                              ></ic-icon> -->\r\n    </button>\r\n  </div>\r\n\r\n  <span fxFlex></span>\r\n\r\n  <div class=\"-mx-3 flex items-center\">\r\n    <!-- <div class=\"px-1\">\r\n      <button (click)=\"openSearch()\" mat-icon-button type=\"button\">\r\n        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"px-1\">\r\n      <vex-toolbar-notifications></vex-toolbar-notifications>\r\n    </div>\r\n\r\n    <div class=\"px-1\">\r\n      <button (click)=\"openQuickpanel()\" mat-icon-button type=\"button\">\r\n        <mat-icon [icIcon]=\"icBookmarks\"></mat-icon>\r\n      </button>\r\n    </div> -->\r\n\r\n    <div class=\"px-1\">\r\n      <button [matMenuTriggerFor]=\"languageMenu\" mat-icon-button type=\"button\">\r\n        <mat-icon [icIcon]=\"emojioneFR\"></mat-icon>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"px-1\">\r\n      <div *ngIf=\"(user$ | async) as Account\">\r\n        <vex-toolbar-user [username]=\"user$ | async\"></vex-toolbar-user>\r\n      </div>\r\n    </div>\r\n\r\n    <mat-menu #languageMenu=\"matMenu\" overlapTrigger=\"false\" xPosition=\"before\" yPosition=\"below\">\r\n      <button mat-menu-item>\r\n        <mat-icon [icIcon]=\"emojioneFR\"></mat-icon>\r\n        <span>Français</span>\r\n      </button>\r\n      <button mat-menu-item disabled>\r\n        <mat-icon [icIcon]=\"emojioneUS\"></mat-icon>\r\n        <span>English</span>\r\n      </button>\r\n\r\n      <button mat-menu-item disabled>\r\n        <mat-icon [icIcon]=\"emojioneDE\"></mat-icon>\r\n        <span>German</span>\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<vex-navigation *ngIf=\"(isVerticalLayout$ | async) && isNavbarBelowToolbar$ | async\" [fxHide]=\"mobileQuery\">\r\n</vex-navigation>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Component/auth/login/login.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Component/auth/login/login.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<meta meta charset=\"utf-8\" />\r\n\r\n<div\r\n  class=\"w-full h-full bg-pattern\"\r\n  fxLayout=\"column\"\r\n  fxLayoutAlign=\"center center\"\r\n>\r\n  <div class=\"row w-100 mx-5 p-5\">\r\n    <div class=\"col-5\">\r\n      <mat-card>\r\n        <mat-card-header>\r\n          <img mat-card-avatar src=\"assets/img/logo-rounded.svg\" />\r\n          <mat-card-title>DeepBot</mat-card-title>\r\n        </mat-card-header>\r\n        <img mat-card-image src=\"assets/img/LoginTeaser.svg\" />\r\n        <mat-card-content>\r\n          <!--<p>Piqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. </p>-->\r\n          <dl class=\"row\">\r\n            <dt class=\"col-sm-3 my-2\">Description lists</dt>\r\n            <dd class=\"col-sm-9 my-2\">\r\n              A description list is perfect for defining terms.\r\n            </dd>\r\n\r\n            <dt class=\"col-sm-3 my-2\">Euismod</dt>\r\n            <dd class=\"col-sm-9 my-2\">\r\n              <p>\r\n                Vestibulum id ligula porta felis euismod semper eget lacinia\r\n                odio sem nec elit.\r\n              </p>\r\n              <p>Donec id elit non mi porta gravida at eget metus.</p>\r\n            </dd>\r\n\r\n            <dt class=\"col-sm-3 my-2\">Malesuada porta</dt>\r\n            <dd class=\"col-sm-9 my-2\">\r\n              Etiam porta sem malesuada magna mollis euismod.\r\n            </dd>\r\n\r\n            <dt class=\"col-sm-3 text-truncate my-2\">\r\n              Truncated term is truncated\r\n            </dt>\r\n            <dd class=\"col-sm-9 my-2\">\r\n              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum\r\n              nibh, ut fermentum massa justo sit amet risus.\r\n            </dd>\r\n\r\n            <dt class=\"col-sm-3 my-2\">Nesting</dt>\r\n            <dd class=\"col-sm-9 my-2\">\r\n              <dl class=\"row my-2\">\r\n                <dt class=\"col-sm-4\">Nested definition list</dt>\r\n                <dd class=\"col-sm-8\">\r\n                  Aenean posuere, tortor sed cursus feugiat, nunc augue blandit\r\n                  nunc.\r\n                </dd>\r\n              </dl>\r\n            </dd>\r\n          </dl>\r\n        </mat-card-content>\r\n        <mat-divider></mat-divider>\r\n        <mat-card-actions>\r\n          <div fxLayout=\"row\">\r\n            <span fxFlex></span>\r\n            <button type=\"button\" class=\"btn btn-primary btn-lg mr-2\">\r\n              Plus d'Info\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-primary btn-lg ml-2\">\r\n              Discord\r\n            </button>\r\n          </div>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n    <div class=\"col-2\"></div>\r\n    <div class=\"col-4 my-auto\">\r\n      <div\r\n        @fadeInUp\r\n        class=\" mx-auto card overflow-hidden w-full h-full max-w-xxl\"\r\n      >\r\n        <div class=\"mt-3 pb-0\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n          <div class=\"fill-current text-center\">\r\n            <img class=\"w-24\" src=\"assets/img/logo.svg\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"text-center mt-4\">\r\n          <h1 class=\"m-0\">Bienvenue</h1>\r\n          <h3 class=\" text-secondary m-0\">\r\n            Connectez vous à l'aide du formulaire ci-dessous\r\n          </h3>\r\n        </div>\r\n\r\n        <div\r\n          [formGroup]=\"form\"\r\n          class=\"p-6\"\r\n          fxLayout=\"column\"\r\n          fxLayoutGap=\"16px\"\r\n        >\r\n          <div fxFlex=\"auto\" fxLayout=\"column\">\r\n            <mat-form-field fxFlex=\"grow\">\r\n              <mat-label>Nom d'utilisateur ou E-Mail</mat-label>\r\n              <input formControlName=\"email\" matInput required />\r\n              <mat-error *ngIf=\"form.get('email').hasError('required')\"\r\n                >E-Mail ou Nom d'utilisatuer requis</mat-error\r\n              >\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex=\"grow\">\r\n              <mat-label>Mot de passe</mat-label>\r\n              <input\r\n                [type]=\"inputType\"\r\n                formControlName=\"password\"\r\n                matInput\r\n                required\r\n              />\r\n              <button\r\n                (click)=\"toggleVisibility()\"\r\n                mat-icon-button\r\n                matSuffix\r\n                matTooltip=\"Toggle Visibility\"\r\n                type=\"button\"\r\n              >\r\n                <mat-icon *ngIf=\"visible\" [icIcon]=\"icVisibility\"></mat-icon>\r\n                <mat-icon\r\n                  *ngIf=\"!visible\"\r\n                  [icIcon]=\"icVisibilityOff\"\r\n                ></mat-icon>\r\n              </button>\r\n              <mat-hint>Appuyez pour afficher le mot de passe</mat-hint>\r\n              <mat-error *ngIf=\"form.get('password').hasError('required')\"\r\n                >Votre mot de passe est requis</mat-error\r\n              >\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <mat-checkbox class=\"caption\" color=\"primary\">\r\n              <h3 class=\" text-secondary m-0\">\r\n                Mémoriser mes Identifiants\r\n              </h3></mat-checkbox\r\n            >\r\n            <a [routerLink]=\"['/forgot-password']\" class=\"caption\">\r\n              <h3 class=\" text-secondary m-0\">Mot de passe oublié ?</h3></a\r\n            >\r\n          </div>\r\n\r\n          <button\r\n            (click)=\"send()\"\r\n            color=\"primary\"\r\n            class=\"w-50 mx-auto\"\r\n            mat-raised-button\r\n            type=\"button\"\r\n          >\r\n            SE CONNECTER\r\n          </button>\r\n\r\n          <p class=\"text-secondary text-center\">\r\n            <a [routerLink]=\"['/register']\">\r\n              <h3 class=\" text-secondary m-0\">\r\n                Cliquez ici pour créer un compte\r\n              </h3></a\r\n            >\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Component/auth/register/register.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Component/auth/register/register.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentAuthRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w-full h-full bg-pattern\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <div @fadeInUp class=\"card overflow-hidden w-full max-w-xl\">\r\n    <div class=\"p-6 pb-0\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n      <div class=\"fill-current text-center\">\r\n        <img class=\"w-14\" src=\"assets/img/logo-rounded.svg\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"text-center mt-4\">\r\n      <h1 class=\"title m-0\">Cr�er un compte</h1>\r\n    </div>\r\n\r\n    <div [formGroup]=\"form\" class=\"p-6\" fxLayout=\"column\" fxLayoutGap=\"16px\">\r\n      <div fxFlex=\"auto\" fxLayout=\"column\">\r\n        <mat-form-field fxFlex=\"grow\">\r\n          <mat-label>Nom de compte</mat-label>\r\n          <input formControlName=\"name\" matInput required [(ngModel)]=\"userToCreate.userName\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field fxFlex=\"grow\">\r\n          <mat-label>E-Mail</mat-label>\r\n          <input formControlName=\"email\" matInput required [(ngModel)]=\"userToCreate.userEmail\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field fxFlex=\"grow\">\r\n          <mat-label>Mot de passe</mat-label>\r\n          <input [type]=\"inputType\" formControlName=\"password\" matInput required ng-model=\"\" [(ngModel)]=\"userToCreate.userPassword\" >\r\n          <button (click)=\"toggleVisibility()\" mat-icon-button matSuffix matTooltip=\"Toggle Visibility\" type=\"button\">\r\n            <mat-icon *ngIf=\"visible\" [icIcon]=\"icVisibility\"></mat-icon>\r\n            <mat-icon *ngIf=\"!visible\" [icIcon]=\"icVisibilityOff\"></mat-icon>\r\n          </button>\r\n          <mat-hint>Appuyez pour afficher le mot de passe</mat-hint>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field fxFlex=\"grow\">\r\n          <mat-label>Mot de passe (Confirmation)</mat-label>\r\n          <input [type]=\"inputType\" formControlName=\"passwordConfirm\" matInput required>\r\n          <button (click)=\"toggleVisibility()\" mat-icon-button matSuffix matTooltip=\"Toggle Visibility\" type=\"button\">\r\n            <mat-icon *ngIf=\"visible\" [icIcon]=\"icVisibility\"></mat-icon>\r\n            <mat-icon *ngIf=\"!visible\" [icIcon]=\"icVisibilityOff\"></mat-icon>\r\n          </button>\r\n          <mat-hint>Veuillez recopier votre mot de passe</mat-hint>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <!--<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <mat-checkbox class=\"caption\">I accept the <a>terms and conditions.</a></mat-checkbox>\r\n      </div>-->\r\n      <button (click)=\"CreateAccount()\" class=\"btn-lg w-75 mx-auto\" color=\"primary\" mat-raised-button type=\"button\">\r\n        Cr�er mon compte\r\n      </button>\r\n      <p class=\"text-secondary text-center\">\r\n        Vous avez d�ja un compte ?<br/>\r\n        <a [routerLink]=\"['/login']\">Connectez-vous Ici</a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Component/home/home.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Component/home/home.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-template #sidenavRef>\r\n  <vex-sidenav [collapsed]=\"sidenavCollapsed$ | async\"></vex-sidenav>\r\n</ng-template>\r\n\r\n<ng-template #toolbarRef>\r\n  <vex-toolbar\r\n    [hasShadow]=\"toolbarShadowEnabled$ | async\"\r\n    [mobileQuery]=\"!(isDesktop$ | async)\"\r\n    class=\"vex-toolbar\"\r\n  ></vex-toolbar>\r\n</ng-template>\r\n\r\n<!-- <ng-template #footerRef>\r\n    <vex-footer *ngIf=\"isFooterVisible$ | async\" class=\"vex-footer\"></vex-footer>\r\n  </ng-template> -->\r\n\r\n<ng-template #quickpanelRef>\r\n  <vex-quickpanel></vex-quickpanel>\r\n</ng-template>\r\n\r\n<vex-layout\r\n  [footerRef]=\"footerRef\"\r\n  [quickpanelRef]=\"quickpanelRef\"\r\n  [sidenavRef]=\"sidenavRef\"\r\n  [toolbarRef]=\"toolbarRef\"\r\n></vex-layout>\r\n\r\n<!-- <vex-config-panel-toggle\r\n    (openConfig)=\"configpanel.open()\"\r\n  ></vex-config-panel-toggle> -->\r\n\r\n<!-- CONFIGPANEL -->\r\n<!-- <vex-sidebar #configpanel [invisibleBackdrop]=\"true\" position=\"right\">\r\n    <vex-config-panel></vex-config-panel>\r\n  </vex-sidebar> -->\r\n<!-- END CONFIGPANEL -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./node_modules/webpack/buildin/global.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/global.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinGlobalJs(module, exports) {
    var g; // This works in non-strict mode

    g = function () {
      return this;
    }();

    try {
      // This works if eval is allowed (see CSP)
      g = g || new Function("return this")();
    } catch (e) {
      // This works if the window reference is available
      if (typeof window === "object") g = window;
    } // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}


    module.exports = g;
    /***/
  },

  /***/
  "./src/@vex/animations/dropdown.animation.ts":
  /*!***************************************************!*\
    !*** ./src/@vex/animations/dropdown.animation.ts ***!
    \***************************************************/

  /*! exports provided: dropdownAnimation */

  /***/
  function srcVexAnimationsDropdownAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dropdownAnimation", function () {
      return dropdownAnimation;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var dropdownAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('dropdown', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      height: 0,
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      height: '*',
      opacity: 1
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('false <=> true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms cubic-bezier(.35, 0, .25, 1)'))]);
    /***/
  },

  /***/
  "./src/@vex/animations/fade-in-up.animation.ts":
  /*!*****************************************************!*\
    !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
    \*****************************************************/

  /*! exports provided: fadeInUpAnimation, fadeInUp400ms */

  /***/
  function srcVexAnimationsFadeInUpAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function () {
      return fadeInUpAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function () {
      return fadeInUp400ms;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    function fadeInUpAnimation(duration) {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'translateY(20px)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("".concat(duration, "ms cubic-bezier(0.35, 0, 0.25, 1)"), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: 'translateY(0)',
        opacity: 1
      }))])]);
    }

    var fadeInUp400ms = fadeInUpAnimation(400);
    /***/
  },

  /***/
  "./src/@vex/animations/popover.animation.ts":
  /*!**************************************************!*\
    !*** ./src/@vex/animations/popover.animation.ts ***!
    \**************************************************/

  /*! exports provided: popoverAnimation */

  /***/
  function srcVexAnimationsPopoverAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "popoverAnimation", function () {
      return popoverAnimation;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var popoverAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('transformPopover', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 0,
      transform: 'scale(0.6)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 1
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale(1)'
    }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 0
    }))])]);
    /***/
  },

  /***/
  "./src/@vex/components/config-panel/config-panel-toggle/config-panel-toggle.component.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/@vex/components/config-panel/config-panel-toggle/config-panel-toggle.component.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcVexComponentsConfigPanelConfigPanelToggleConfigPanelToggleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".config-panel-toggle {\n  bottom: var(--padding);\n  position: fixed;\n  right: var(--padding);\n  z-index: 100;\n}\n\n::ng-deep [dir=rtl] .config-panel-toggle {\n  left: var(--padding);\n  right: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvY29uZmlnLXBhbmVsL2NvbmZpZy1wYW5lbC10b2dnbGUvQzpcXFVzZXJzXFxBQkNEXFxzb3VyY2VcXHJlcG9zXFxEZWVwQm90XFxEZWVwQm90XFxDbGllbnRBcHAvc3JjXFxAdmV4XFxjb21wb25lbnRzXFxjb25maWctcGFuZWxcXGNvbmZpZy1wYW5lbC10b2dnbGVcXGNvbmZpZy1wYW5lbC10b2dnbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvQHZleC9jb21wb25lbnRzL2NvbmZpZy1wYW5lbC9jb25maWctcGFuZWwtdG9nZ2xlL2NvbmZpZy1wYW5lbC10b2dnbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9AdmV4L2NvbXBvbmVudHMvY29uZmlnLXBhbmVsL2NvbmZpZy1wYW5lbC10b2dnbGUvY29uZmlnLXBhbmVsLXRvZ2dsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maWctcGFuZWwtdG9nZ2xlIHtcbiAgYm90dG9tOiB2YXIoLS1wYWRkaW5nKTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogdmFyKC0tcGFkZGluZyk7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuOjpuZy1kZWVwIFtkaXI9cnRsXSAuY29uZmlnLXBhbmVsLXRvZ2dsZSB7XG4gIGxlZnQ6IHZhcigtLXBhZGRpbmcpO1xuICByaWdodDogdW5zZXQ7XG59IiwiLmNvbmZpZy1wYW5lbC10b2dnbGUge1xuICBib3R0b206IHZhcigtLXBhZGRpbmcpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiB2YXIoLS1wYWRkaW5nKTtcbiAgei1pbmRleDogMTAwO1xufVxuXG46Om5nLWRlZXAgW2Rpcj1ydGxdIC5jb25maWctcGFuZWwtdG9nZ2xlIHtcbiAgbGVmdDogdmFyKC0tcGFkZGluZyk7XG4gIHJpZ2h0OiB1bnNldDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/@vex/components/config-panel/config-panel-toggle/config-panel-toggle.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/@vex/components/config-panel/config-panel-toggle/config-panel-toggle.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: ConfigPanelToggleComponent */

  /***/
  function srcVexComponentsConfigPanelConfigPanelToggleConfigPanelToggleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigPanelToggleComponent", function () {
      return ConfigPanelToggleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-settings */
    "./node_modules/@iconify/icons-ic/twotone-settings.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2__);

    var ConfigPanelToggleComponent =
    /*#__PURE__*/
    function () {
      function ConfigPanelToggleComponent() {
        _classCallCheck(this, ConfigPanelToggleComponent);

        this.openConfig = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_2___default.a;
      }

      _createClass(ConfigPanelToggleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConfigPanelToggleComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ConfigPanelToggleComponent.prototype, "openConfig", void 0);
    ConfigPanelToggleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-config-panel-toggle',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./config-panel-toggle.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/config-panel/config-panel-toggle/config-panel-toggle.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./config-panel-toggle.component.scss */
      "./src/@vex/components/config-panel/config-panel-toggle/config-panel-toggle.component.scss")).default]
    })], ConfigPanelToggleComponent);
    /***/
  },

  /***/
  "./src/@vex/components/config-panel/config-panel.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/@vex/components/config-panel/config-panel.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcVexComponentsConfigPanelConfigPanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".config-panel {\n  padding: var(--padding-16) var(--padding);\n}\n\n.heading {\n  margin-bottom: var(--padding);\n}\n\n.section {\n  border-bottom: 1px solid var(--foreground-divider);\n  margin-bottom: var(--padding-16);\n  padding-bottom: var(--padding-16);\n}\n\n.section:last-child {\n  border-bottom: none;\n}\n\n.section-content {\n  -webkit-margin-start: var(--padding-12);\n          margin-inline-start: var(--padding-12);\n}\n\n.section-content .subheading {\n  margin-top: var(--padding);\n}\n\n.subheading {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n\n.layout + .layout {\n  margin-top: var(--padding);\n}\n\n.layout-image:hover .layout-image-overlay {\n  background: rgba(0, 0, 0, 0.7);\n  opacity: 1;\n  visibility: visible;\n}\n\n.layout-image .layout-image-overlay {\n  border-radius: var(--border-radius);\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: var(--trans-ease-out);\n  visibility: hidden;\n  width: 100%;\n}\n\n.layout-image .layout-image-overlay button {\n  padding: 0 8px;\n}\n\n.color {\n  align-items: center;\n  border-radius: 50%;\n  box-shadow: var(--elevation-z8);\n  display: flex;\n  flex-direction: row;\n  height: 36px;\n  justify-content: center;\n  -webkit-margin-end: var(--padding-16);\n          margin-inline-end: var(--padding-16);\n  text-align: center;\n  vertical-align: middle;\n  width: 36px;\n}\n\n.color.light {\n  background: white;\n  color: #000;\n}\n\n.color.dark {\n  background: #303030;\n  color: white;\n}\n\n.color.flat {\n  background: #f5f5f5;\n  color: #000;\n}\n\nmat-slide-toggle + mat-slide-toggle,\nmat-slide-toggle + mat-checkbox,\nmat-checkbox + mat-slide-toggle,\nmat-checkbox + mat-checkbox {\n  display: block;\n  margin-top: var(--padding-12);\n}\n\n.style-name {\n  font: var(--font-body-2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvY29uZmlnLXBhbmVsL0M6XFxVc2Vyc1xcQUJDRFxcc291cmNlXFxyZXBvc1xcRGVlcEJvdFxcRGVlcEJvdFxcQ2xpZW50QXBwL3NyY1xcQHZleFxcY29tcG9uZW50c1xcY29uZmlnLXBhbmVsXFxjb25maWctcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvQHZleC9jb21wb25lbnRzL2NvbmZpZy1wYW5lbC9jb25maWctcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7QUNDRjs7QURFQTtFQUNFLGtEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHVDQUFBO1VBQUEsc0NBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtVQUFBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTs7OztFQUlFLGNBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL2NvbmZpZy1wYW5lbC9jb25maWctcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmlnLXBhbmVsIHtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy0xNikgdmFyKC0tcGFkZGluZyk7XG59XG5cbi5oZWFkaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFkZGluZyk7XG59XG5cbi5zZWN0aW9uIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZGRpbmctMTYpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFkZGluZy0xNik7XG59XG5cbi5zZWN0aW9uOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uc2VjdGlvbi1jb250ZW50IHtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0tcGFkZGluZy0xMik7XG59XG5cbi5zZWN0aW9uLWNvbnRlbnQgLnN1YmhlYWRpbmcge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWRkaW5nKTtcbn1cblxuLnN1YmhlYWRpbmcge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5sYXlvdXQgKyAubGF5b3V0IHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tcGFkZGluZyk7XG59XG5cbi5sYXlvdXQtaW1hZ2U6aG92ZXIgLmxheW91dC1pbWFnZS1vdmVybGF5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ubGF5b3V0LWltYWdlIC5sYXlvdXQtaW1hZ2Utb3ZlcmxheSB7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucy1lYXNlLW91dCk7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sYXlvdXQtaW1hZ2UgLmxheW91dC1pbWFnZS1vdmVybGF5IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAgOHB4O1xufVxuXG4uY29sb3Ige1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IHZhcigtLWVsZXZhdGlvbi16OCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMzZweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1wYWRkaW5nLTE2KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogMzZweDtcbn1cblxuLmNvbG9yLmxpZ2h0IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uY29sb3IuZGFyayB7XG4gIGJhY2tncm91bmQ6ICMzMDMwMzA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbG9yLmZsYXQge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBjb2xvcjogIzAwMDtcbn1cblxubWF0LXNsaWRlLXRvZ2dsZSArIG1hdC1zbGlkZS10b2dnbGUsXG5tYXQtc2xpZGUtdG9nZ2xlICsgbWF0LWNoZWNrYm94LFxubWF0LWNoZWNrYm94ICsgbWF0LXNsaWRlLXRvZ2dsZSxcbm1hdC1jaGVja2JveCArIG1hdC1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWRkaW5nLTEyKTtcbn1cblxuLnN0eWxlLW5hbWUge1xuICBmb250OiB2YXIoLS1mb250LWJvZHktMik7XG59IiwiLmNvbmZpZy1wYW5lbCB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctMTYpIHZhcigtLXBhZGRpbmcpO1xufVxuXG4uaGVhZGluZyB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZGRpbmcpO1xufVxuXG4uc2VjdGlvbiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWRkaW5nLTE2KTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZGRpbmctMTYpO1xufVxuXG4uc2VjdGlvbjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnNlY3Rpb24tY29udGVudCB7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZGRpbmctMTIpO1xufVxuXG4uc2VjdGlvbi1jb250ZW50IC5zdWJoZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tcGFkZGluZyk7XG59XG5cbi5zdWJoZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubGF5b3V0ICsgLmxheW91dCB7XG4gIG1hcmdpbi10b3A6IHZhcigtLXBhZGRpbmcpO1xufVxuXG4ubGF5b3V0LWltYWdlOmhvdmVyIC5sYXlvdXQtaW1hZ2Utb3ZlcmxheSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmxheW91dC1pbWFnZSAubGF5b3V0LWltYWdlLW92ZXJsYXkge1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubGF5b3V0LWltYWdlIC5sYXlvdXQtaW1hZ2Utb3ZlcmxheSBidXR0b24ge1xuICBwYWRkaW5nOiAwIDhweDtcbn1cblxuLmNvbG9yIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiB2YXIoLS1lbGV2YXRpb24tejgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tcGFkZGluZy0xNik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDM2cHg7XG59XG5cbi5jb2xvci5saWdodCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmNvbG9yLmRhcmsge1xuICBiYWNrZ3JvdW5kOiAjMzAzMDMwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb2xvci5mbGF0IHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgY29sb3I6ICMwMDA7XG59XG5cbm1hdC1zbGlkZS10b2dnbGUgKyBtYXQtc2xpZGUtdG9nZ2xlLFxubWF0LXNsaWRlLXRvZ2dsZSArIG1hdC1jaGVja2JveCxcbm1hdC1jaGVja2JveCArIG1hdC1zbGlkZS10b2dnbGUsXG5tYXQtY2hlY2tib3ggKyBtYXQtY2hlY2tib3gge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogdmFyKC0tcGFkZGluZy0xMik7XG59XG5cbi5zdHlsZS1uYW1lIHtcbiAgZm9udDogdmFyKC0tZm9udC1ib2R5LTIpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/@vex/components/config-panel/config-panel.component.ts":
  /*!********************************************************************!*\
    !*** ./src/@vex/components/config-panel/config-panel.component.ts ***!
    \********************************************************************/

  /*! exports provided: ConfigPanelComponent */

  /***/
  function srcVexComponentsConfigPanelConfigPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigPanelComponent", function () {
      return ConfigPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/config.service */
    "./src/@vex/services/config.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-settings */
    "./node_modules/@iconify/icons-ic/twotone-settings.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _services_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/layout.service */
    "./src/@vex/services/layout.service.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-check */
    "./node_modules/@iconify/icons-ic/twotone-check.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _services_style_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/style.service */
    "./src/@vex/services/style.service.ts");
    /* harmony import */


    var _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../interfaces/config-name.model */
    "./src/@vex/interfaces/config-name.model.ts");

    var ConfigPanelComponent =
    /*#__PURE__*/
    function () {
      function ConfigPanelComponent(configService, styleService, layoutService, route) {
        var _this = this;

        _classCallCheck(this, ConfigPanelComponent);

        this.configService = configService;
        this.styleService = styleService;
        this.layoutService = layoutService;
        this.route = route;
        this.configs = this.configService.configs;
        this.config$ = this.configService.config$;
        this.activeConfig$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (config) {
          return Object.keys(_this.configService.configs).find(function (key) {
            return _this.configService.configs[key] === config;
          });
        }));
        this.isRTL$ = this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (paramMap) {
          return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(paramMap.get('rtl'));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
        this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icCheck = _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.ConfigName = _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_10__["ConfigName"];
        this.Style = _services_style_service__WEBPACK_IMPORTED_MODULE_9__["Style"];
      }

      _createClass(ConfigPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setConfig",
        value: function setConfig(layout, style) {
          this.configService.setConfig(layout);
          this.styleService.setStyle(style);
        }
      }, {
        key: "sidenavOpenChange",
        value: function sidenavOpenChange(change) {
          change.checked ? this.layoutService.openSidenav() : this.layoutService.closeSidenav();
        }
      }, {
        key: "layoutRTLChange",
        value: function layoutRTLChange(change) {
          change.checked ? this.layoutService.enableRTL() : this.layoutService.disableRTL();
        }
      }, {
        key: "toolbarPositionChange",
        value: function toolbarPositionChange(change) {
          this.configService.updateConfig({
            toolbar: {
              fixed: change.value === 'fixed'
            }
          });
        }
      }, {
        key: "footerVisibleChange",
        value: function footerVisibleChange(change) {
          this.configService.updateConfig({
            footer: {
              visible: change.checked
            }
          });
        }
      }, {
        key: "footerPositionChange",
        value: function footerPositionChange(change) {
          this.configService.updateConfig({
            footer: {
              fixed: change.value === 'fixed'
            }
          });
        }
      }]);

      return ConfigPanelComponent;
    }();

    ConfigPanelComponent.ctorParameters = function () {
      return [{
        type: _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: _services_style_service__WEBPACK_IMPORTED_MODULE_9__["StyleService"]
      }, {
        type: _services_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }];
    };

    ConfigPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-config-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./config-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/config-panel/config-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./config-panel.component.scss */
      "./src/@vex/components/config-panel/config-panel.component.scss")).default]
    })], ConfigPanelComponent);
    /***/
  },

  /***/
  "./src/@vex/components/config-panel/config-panel.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/@vex/components/config-panel/config-panel.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ConfigPanelModule */

  /***/
  function srcVexComponentsConfigPanelConfigPanelModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigPanelModule", function () {
      return ConfigPanelModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _config_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./config-panel.component */
    "./src/@vex/components/config-panel/config-panel.component.ts");
    /* harmony import */


    var _config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./config-panel-toggle/config-panel-toggle.component */
    "./src/@vex/components/config-panel/config-panel-toggle/config-panel-toggle.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");

    var ConfigPanelModule = function ConfigPanelModule() {
      _classCallCheck(this, ConfigPanelModule);
    };

    ConfigPanelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"]],
      declarations: [_config_panel_component__WEBPACK_IMPORTED_MODULE_3__["ConfigPanelComponent"], _config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_4__["ConfigPanelToggleComponent"]],
      exports: [_config_panel_component__WEBPACK_IMPORTED_MODULE_3__["ConfigPanelComponent"], _config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_4__["ConfigPanelToggleComponent"]]
    })], ConfigPanelModule);
    /***/
  },

  /***/
  "./src/@vex/components/footer/footer.component.scss":
  /*!**********************************************************!*\
    !*** ./src/@vex/components/footer/footer.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcVexComponentsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  bottom: 0;\n  display: block;\n  width: 100%;\n  z-index: var(--footer-z-index);\n}\n\n.footer {\n  background: var(--footer-background);\n  color: var(--footer-color);\n  height: var(--footer-height);\n  padding-left: var(--padding);\n  padding-right: var(--padding);\n  position: relative;\n  z-index: var(--footer-z-index);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvZm9vdGVyL0M6XFxVc2Vyc1xcQUJDRFxcc291cmNlXFxyZXBvc1xcRGVlcEJvdFxcRGVlcEJvdFxcQ2xpZW50QXBwL3NyY1xcQHZleFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvQHZleC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiB2YXIoLS1mb290ZXItei1pbmRleCk7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb290ZXItYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1mb290ZXItY29sb3IpO1xuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmcpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiB2YXIoLS1mb290ZXItei1pbmRleCk7XG59IiwiOmhvc3Qge1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogdmFyKC0tZm9vdGVyLXotaW5kZXgpO1xufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9vdGVyLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tZm9vdGVyLWNvbG9yKTtcbiAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nKTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFkZGluZyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogdmFyKC0tZm9vdGVyLXotaW5kZXgpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/@vex/components/footer/footer.component.ts":
  /*!********************************************************!*\
    !*** ./src/@vex/components/footer/footer.component.ts ***!
    \********************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcVexComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-shopping-basket */
    "./node_modules/@iconify/icons-ic/twotone-shopping-basket.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_2__);

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.icShoppingBasket = _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_2___default.a;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return FooterComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FooterComponent.prototype, "customTemplate", void 0);
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/@vex/components/footer/footer.component.scss")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/@vex/components/footer/footer.module.ts":
  /*!*****************************************************!*\
    !*** ./src/@vex/components/footer/footer.module.ts ***!
    \*****************************************************/

  /*! exports provided: FooterModule */

  /***/
  function srcVexComponentsFooterFooterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterModule", function () {
      return FooterModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer.component */
    "./src/@vex/components/footer/footer.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _directives_container_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");

    var FooterModule = function FooterModule() {
      _classCallCheck(this, FooterModule);
    };

    FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _directives_container_container_module__WEBPACK_IMPORTED_MODULE_7__["ContainerModule"]],
      declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]]
    })], FooterModule);
    /***/
  },

  /***/
  "./src/@vex/components/mega-menu/mega-menu.component.ts":
  /*!**************************************************************!*\
    !*** ./src/@vex/components/mega-menu/mega-menu.component.ts ***!
    \**************************************************************/

  /*! exports provided: MegaMenuComponent */

  /***/
  function srcVexComponentsMegaMenuMegaMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MegaMenuComponent", function () {
      return MegaMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-layers */
    "./node_modules/@iconify/icons-ic/twotone-layers.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-assignment */
    "./node_modules/@iconify/icons-ic/twotone-assignment.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _iconify_icons_ic_twotone_contact_support__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-contact-support */
    "./node_modules/@iconify/icons-ic/twotone-contact-support.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_contact_support__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_contact_support__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-contacts */
    "./node_modules/@iconify/icons-ic/twotone-contacts.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _iconify_icons_ic_twotone_assessment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-assessment */
    "./node_modules/@iconify/icons-ic/twotone-assessment.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_assessment__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_assessment__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _iconify_icons_ic_twotone_book__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-book */
    "./node_modules/@iconify/icons-ic/twotone-book.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_book__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_book__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _popover_popover_ref__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../popover/popover-ref */
    "./src/@vex/components/popover/popover-ref.ts");

    var MegaMenuComponent =
    /*#__PURE__*/
    function () {
      function MegaMenuComponent(popoverRef) {
        _classCallCheck(this, MegaMenuComponent);

        this.popoverRef = popoverRef;
        this.features = [{
          icon: _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_2___default.a,
          label: 'Dashboard',
          route: '/'
        }, {
          icon: _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_3___default.a,
          label: 'AIO-Table',
          route: '/apps/aio-table'
        }, {
          icon: _iconify_icons_ic_twotone_contact_support__WEBPACK_IMPORTED_MODULE_4___default.a,
          label: 'Help Center',
          route: '/apps/help-center'
        }, {
          icon: _iconify_icons_ic_twotone_contacts__WEBPACK_IMPORTED_MODULE_5___default.a,
          label: 'Contacts',
          route: '/apps/contacts/grid'
        }, {
          icon: _iconify_icons_ic_twotone_assessment__WEBPACK_IMPORTED_MODULE_6___default.a,
          label: 'Scrumboard',
          route: '/apps/scrumboard/1'
        }, {
          icon: _iconify_icons_ic_twotone_book__WEBPACK_IMPORTED_MODULE_7___default.a,
          label: 'Documentation',
          route: '/documentation'
        }];
        this.pages = [{
          label: 'All-In-One Table',
          route: '/apps/aio-table'
        }, {
          label: 'Authentication',
          route: '/login'
        }, {
          label: 'Components',
          route: '/ui/components/overview'
        }, {
          label: 'Documentation',
          route: '/documentation'
        }, {
          label: 'FAQ',
          route: '/pages/faq'
        }, {
          label: 'Form Elements',
          route: '/ui/forms/form-elements'
        }, {
          label: 'Form Wizard',
          route: '/ui/forms/form-wizard'
        }, {
          label: 'Guides',
          route: '/pages/guides'
        }, {
          label: 'Help Center',
          route: '/apps/help-center'
        }, {
          label: 'Scrumboard',
          route: '/apps/scrumboard'
        }];
      }

      _createClass(MegaMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.popoverRef.close();
        }
      }]);

      return MegaMenuComponent;
    }();

    MegaMenuComponent.ctorParameters = function () {
      return [{
        type: _popover_popover_ref__WEBPACK_IMPORTED_MODULE_8__["PopoverRef"]
      }];
    };

    MegaMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-mega-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mega-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/mega-menu/mega-menu.component.html")).default
    })], MegaMenuComponent);
    /***/
  },

  /***/
  "./src/@vex/components/mega-menu/mega-menu.module.ts":
  /*!***********************************************************!*\
    !*** ./src/@vex/components/mega-menu/mega-menu.module.ts ***!
    \***********************************************************/

  /*! exports provided: MegaMenuModule */

  /***/
  function srcVexComponentsMegaMenuMegaMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MegaMenuModule", function () {
      return MegaMenuModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _mega_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mega-menu.component */
    "./src/@vex/components/mega-menu/mega-menu.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MegaMenuModule = function MegaMenuModule() {
      _classCallCheck(this, MegaMenuModule);
    };

    MegaMenuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_mega_menu_component__WEBPACK_IMPORTED_MODULE_3__["MegaMenuComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]],
      exports: [_mega_menu_component__WEBPACK_IMPORTED_MODULE_3__["MegaMenuComponent"]],
      entryComponents: [_mega_menu_component__WEBPACK_IMPORTED_MODULE_3__["MegaMenuComponent"]]
    })], MegaMenuModule);
    /***/
  },

  /***/
  "./src/@vex/components/navigation-item/navigation-item.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/@vex/components/navigation-item/navigation-item.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcVexComponentsNavigationItemNavigationItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navigation-item {\n  border-radius: 0.25rem;\n  cursor: pointer;\n  font-size: 0.875rem;\n  font-weight: 500;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-decoration: none;\n  display: block;\n  -webkit-margin-end: var(--padding-8);\n          margin-inline-end: var(--padding-8);\n  transition: var(--trans-ease-out);\n}\n\n.navigation-color {\n  color: var(--navigation-color);\n}\n\n.navigation-menu-item {\n  transition: var(--trans-ease-out);\n}\n\n.navigation-menu-item:hover {\n  color: #5c77ff;\n}\n\n.navigation-menu-item:hover .mat-icon {\n  color: #5c77ff;\n}\n\n.navigation-menu-item .mat-icon {\n  transition: var(--trans-ease-out);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvbmF2aWdhdGlvbi1pdGVtL0M6XFxVc2Vyc1xcQUJDRFxcc291cmNlXFxyZXBvc1xcRGVlcEJvdFxcRGVlcEJvdFxcQ2xpZW50QXBwL3NyY1xcQHZleFxcY29tcG9uZW50c1xcbmF2aWdhdGlvbi1pdGVtXFxuYXZpZ2F0aW9uLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvQHZleC9jb21wb25lbnRzL25hdmlnYXRpb24taXRlbS9uYXZpZ2F0aW9uLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7VUFBQSxtQ0FBQTtFQUNBLGlDQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGlDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL0B2ZXgvY29tcG9uZW50cy9uYXZpZ2F0aW9uLWl0ZW0vbmF2aWdhdGlvbi1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tcGFkZGluZy04KTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xufVxuXG4ubmF2aWdhdGlvbi1jb2xvciB7XG4gIGNvbG9yOiB2YXIoLS1uYXZpZ2F0aW9uLWNvbG9yKTtcbn1cblxuLm5hdmlnYXRpb24tbWVudS1pdGVtIHtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xufVxuXG4ubmF2aWdhdGlvbi1tZW51LWl0ZW06aG92ZXIge1xuICBjb2xvcjogIzVjNzdmZjtcbn1cblxuLm5hdmlnYXRpb24tbWVudS1pdGVtOmhvdmVyIC5tYXQtaWNvbiB7XG4gIGNvbG9yOiAjNWM3N2ZmO1xufVxuXG4ubmF2aWdhdGlvbi1tZW51LWl0ZW0gLm1hdC1pY29uIHtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xufSIsIi5uYXZpZ2F0aW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLXBhZGRpbmctOCk7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zLWVhc2Utb3V0KTtcbn1cblxuLm5hdmlnYXRpb24tY29sb3Ige1xuICBjb2xvcjogdmFyKC0tbmF2aWdhdGlvbi1jb2xvcik7XG59XG5cbi5uYXZpZ2F0aW9uLW1lbnUtaXRlbSB7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zLWVhc2Utb3V0KTtcbn1cblxuLm5hdmlnYXRpb24tbWVudS1pdGVtOmhvdmVyIHtcbiAgY29sb3I6ICM1Yzc3ZmY7XG59XG5cbi5uYXZpZ2F0aW9uLW1lbnUtaXRlbTpob3ZlciAubWF0LWljb24ge1xuICBjb2xvcjogIzVjNzdmZjtcbn1cblxuLm5hdmlnYXRpb24tbWVudS1pdGVtIC5tYXQtaWNvbiB7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zLWVhc2Utb3V0KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/@vex/components/navigation-item/navigation-item.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/@vex/components/navigation-item/navigation-item.component.ts ***!
    \**************************************************************************/

  /*! exports provided: NavigationItemComponent */

  /***/
  function srcVexComponentsNavigationItemNavigationItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationItemComponent", function () {
      return NavigationItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/navigation.service */
    "./src/@vex/services/navigation.service.ts");
    /* harmony import */


    var _utils_track_by__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../utils/track-by */
    "./src/@vex/utils/track-by.ts");

    var NavigationItemComponent =
    /*#__PURE__*/
    function () {
      function NavigationItemComponent(navigationService, router) {
        var _this2 = this;

        _classCallCheck(this, NavigationItemComponent);

        this.navigationService = navigationService;
        this.router = router;
        this.isActive$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
          return function (item) {
            return _this2.hasActiveChilds(item);
          };
        }));
        this.isLink = this.navigationService.isLink;
        this.isDropdown = this.navigationService.isDropdown;
        this.isSubheading = this.navigationService.isSubheading;
        this.trackByRoute = _utils_track_by__WEBPACK_IMPORTED_MODULE_5__["trackByRoute"];
      }

      _createClass(NavigationItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "hasActiveChilds",
        value: function hasActiveChilds(parent) {
          var _this3 = this;

          if (this.isLink(parent)) {
            return this.router.isActive(parent.route, false);
          }

          if (this.isDropdown(parent) || this.isSubheading(parent)) {
            return parent.children.some(function (child) {
              if (_this3.isDropdown(child)) {
                return _this3.hasActiveChilds(child);
              }

              if (_this3.isLink(child) && !_this3.isFunction(child.route)) {
                return _this3.router.isActive(child.route, false);
              }

              return false;
            });
          }

          return false;
        }
      }, {
        key: "isFunction",
        value: function isFunction(prop) {
          return prop instanceof Function;
        }
      }]);

      return NavigationItemComponent;
    }();

    NavigationItemComponent.ctorParameters = function () {
      return [{
        type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NavigationItemComponent.prototype, "item", void 0);
    NavigationItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-navigation-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigation-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/navigation-item/navigation-item.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation-item.component.scss */
      "./src/@vex/components/navigation-item/navigation-item.component.scss")).default]
    })], NavigationItemComponent);
    /***/
  },

  /***/
  "./src/@vex/components/navigation-item/navigation-item.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/@vex/components/navigation-item/navigation-item.module.ts ***!
    \***********************************************************************/

  /*! exports provided: NavigationItemModule */

  /***/
  function srcVexComponentsNavigationItemNavigationItemModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationItemModule", function () {
      return NavigationItemModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _navigation_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./navigation-item.component */
    "./src/@vex/components/navigation-item/navigation-item.component.ts");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");

    var NavigationItemModule = function NavigationItemModule() {
      _classCallCheck(this, NavigationItemModule);
    };

    NavigationItemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_navigation_item_component__WEBPACK_IMPORTED_MODULE_3__["NavigationItemComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"]],
      exports: [_navigation_item_component__WEBPACK_IMPORTED_MODULE_3__["NavigationItemComponent"]]
    })], NavigationItemModule);
    /***/
  },

  /***/
  "./src/@vex/components/popover/popover-ref.ts":
  /*!****************************************************!*\
    !*** ./src/@vex/components/popover/popover-ref.ts ***!
    \****************************************************/

  /*! exports provided: PopoverRef */

  /***/
  function srcVexComponentsPopoverPopoverRefTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverRef", function () {
      return PopoverRef;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var PopoverRef =
    /*#__PURE__*/
    function () {
      function PopoverRef(overlay, content, data) {
        var _this4 = this;

        _classCallCheck(this, PopoverRef);

        this.overlay = overlay;
        this.content = content;
        this.data = data;
        this.afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.afterClosed$ = this.afterClosed.asObservable();
        overlay.backdropClick().subscribe(function () {
          _this4._close('backdropClick', null);
        });
      }

      _createClass(PopoverRef, [{
        key: "close",
        value: function close(data) {
          this._close('close', data);
        }
      }, {
        key: "_close",
        value: function _close(type, data) {
          this.overlay.dispose();
          this.afterClosed.next({
            type: type,
            data: data
          });
          this.afterClosed.complete();
        }
      }]);

      return PopoverRef;
    }();
    /***/

  },

  /***/
  "./src/@vex/components/popover/popover.component.scss":
  /*!************************************************************!*\
    !*** ./src/@vex/components/popover/popover.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcVexComponentsPopoverPopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/@vex/components/popover/popover.component.ts":
  /*!**********************************************************!*\
    !*** ./src/@vex/components/popover/popover.component.ts ***!
    \**********************************************************/

  /*! exports provided: PopoverComponent */

  /***/
  function srcVexComponentsPopoverPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverComponent", function () {
      return PopoverComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _popover_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./popover-ref */
    "./src/@vex/components/popover/popover-ref.ts");
    /* harmony import */


    var _animations_popover_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../animations/popover.animation */
    "./src/@vex/animations/popover.animation.ts");

    var PopoverComponent =
    /*#__PURE__*/
    function () {
      function PopoverComponent(popoverRef) {
        _classCallCheck(this, PopoverComponent);

        this.popoverRef = popoverRef;
        this.renderMethod = 'component';
      }

      _createClass(PopoverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.content = this.popoverRef.content;

          if (typeof this.content === 'string') {
            this.renderMethod = 'text';
          }

          if (this.content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) {
            this.renderMethod = 'template';
            this.context = {
              close: this.popoverRef.close.bind(this.popoverRef)
            };
          }
        }
      }]);

      return PopoverComponent;
    }();

    PopoverComponent.ctorParameters = function () {
      return [{
        type: _popover_ref__WEBPACK_IMPORTED_MODULE_2__["PopoverRef"]
      }];
    };

    PopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./popover.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/popover/popover.component.html")).default,
      animations: [_animations_popover_animation__WEBPACK_IMPORTED_MODULE_3__["popoverAnimation"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./popover.component.scss */
      "./src/@vex/components/popover/popover.component.scss")).default]
    })], PopoverComponent);
    /***/
  },

  /***/
  "./src/@vex/components/popover/popover.module.ts":
  /*!*******************************************************!*\
    !*** ./src/@vex/components/popover/popover.module.ts ***!
    \*******************************************************/

  /*! exports provided: PopoverModule */

  /***/
  function srcVexComponentsPopoverPopoverModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverModule", function () {
      return PopoverModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./popover.component */
    "./src/@vex/components/popover/popover.component.ts");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");

    var PopoverModule = function PopoverModule() {
      _classCallCheck(this, PopoverModule);
    };

    PopoverModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_popover_component__WEBPACK_IMPORTED_MODULE_3__["PopoverComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayModule"]],
      entryComponents: [_popover_component__WEBPACK_IMPORTED_MODULE_3__["PopoverComponent"]]
    })], PopoverModule);
    /***/
  },

  /***/
  "./src/@vex/components/popover/popover.service.ts":
  /*!********************************************************!*\
    !*** ./src/@vex/components/popover/popover.service.ts ***!
    \********************************************************/

  /*! exports provided: PopoverService */

  /***/
  function srcVexComponentsPopoverPopoverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverService", function () {
      return PopoverService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _popover_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./popover-ref */
    "./src/@vex/components/popover/popover-ref.ts");
    /* harmony import */


    var _popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./popover.component */
    "./src/@vex/components/popover/popover.component.ts");

    var PopoverService =
    /*#__PURE__*/
    function () {
      function PopoverService(overlay, injector) {
        _classCallCheck(this, PopoverService);

        this.overlay = overlay;
        this.injector = injector;
      }

      _createClass(PopoverService, [{
        key: "open",
        value: function open(_ref) {
          var origin = _ref.origin,
              content = _ref.content,
              data = _ref.data,
              width = _ref.width,
              height = _ref.height,
              position = _ref.position,
              offsetX = _ref.offsetX,
              offsetY = _ref.offsetY;
          var overlayRef = this.overlay.create(this.getOverlayConfig({
            origin: origin,
            width: width,
            height: height,
            position: position,
            offsetX: offsetX,
            offsetY: offsetY
          }));
          var popoverRef = new _popover_ref__WEBPACK_IMPORTED_MODULE_4__["PopoverRef"](overlayRef, content, data);
          var injector = this.createInjector(popoverRef, this.injector);
          overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](_popover_component__WEBPACK_IMPORTED_MODULE_5__["PopoverComponent"], null, injector));
          return popoverRef;
        }
      }, {
        key: "createInjector",
        value: function createInjector(popoverRef, injector) {
          var tokens = new WeakMap([[_popover_ref__WEBPACK_IMPORTED_MODULE_4__["PopoverRef"], popoverRef]]);
          return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalInjector"](injector, tokens);
        }
      }, {
        key: "getOverlayConfig",
        value: function getOverlayConfig(_ref2) {
          var origin = _ref2.origin,
              width = _ref2.width,
              height = _ref2.height,
              position = _ref2.position,
              offsetX = _ref2.offsetX,
              offsetY = _ref2.offsetY;
          return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayConfig"]({
            hasBackdrop: true,
            width: width,
            height: height,
            backdropClass: 'popover-backdrop',
            positionStrategy: this.getOverlayPosition({
              origin: origin,
              position: position,
              offsetX: offsetX,
              offsetY: offsetY
            }),
            scrollStrategy: this.overlay.scrollStrategies.reposition()
          });
        }
      }, {
        key: "getOverlayPosition",
        value: function getOverlayPosition(_ref3) {
          var origin = _ref3.origin,
              position = _ref3.position,
              offsetX = _ref3.offsetX,
              offsetY = _ref3.offsetY;
          var positionStrategy = this.overlay.position().flexibleConnectedTo(origin).withPositions(position || this.getPositions()).withFlexibleDimensions(true).withDefaultOffsetY(offsetY || 0).withDefaultOffsetX(offsetX || 0).withTransformOriginOn('.popover').withPush(true);
          return positionStrategy;
        }
      }, {
        key: "getPositions",
        value: function getPositions() {
          return [{
            originX: 'center',
            originY: 'top',
            overlayX: 'center',
            overlayY: 'bottom'
          }, {
            originX: 'center',
            originY: 'bottom',
            overlayX: 'center',
            overlayY: 'top'
          }];
        }
      }]);

      return PopoverService;
    }();

    PopoverService.ctorParameters = function () {
      return [{
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    PopoverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PopoverService);
    /***/
  },

  /***/
  "./src/@vex/components/progress-bar/progress-bar.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/@vex/components/progress-bar/progress-bar.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcVexComponentsProgressBarProgressBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".progress-bar {\n  left: 0;\n  opacity: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  visibility: hidden;\n  z-index: 99999;\n}\n\n.progress-bar.visible {\n  opacity: 1;\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL0M6XFxVc2Vyc1xcQUJDRFxcc291cmNlXFxyZXBvc1xcRGVlcEJvdFxcRGVlcEJvdFxcQ2xpZW50QXBwL3NyY1xcQHZleFxcY29tcG9uZW50c1xccHJvZ3Jlc3MtYmFyXFxwcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvQHZleC9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL0B2ZXgvY29tcG9uZW50cy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNzLWJhciB7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB6LWluZGV4OiA5OTk5OTtcbn1cblxuLnByb2dyZXNzLWJhci52aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn0iLCIucHJvZ3Jlc3MtYmFyIHtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHotaW5kZXg6IDk5OTk5O1xufVxuXG4ucHJvZ3Jlc3MtYmFyLnZpc2libGUge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/@vex/components/progress-bar/progress-bar.component.ts":
  /*!********************************************************************!*\
    !*** ./src/@vex/components/progress-bar/progress-bar.component.ts ***!
    \********************************************************************/

  /*! exports provided: ProgressBarComponent */

  /***/
  function srcVexComponentsProgressBarProgressBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function () {
      return ProgressBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-loading-bar/core */
    "./node_modules/@ngx-loading-bar/core/fesm2015/ngx-loading-bar-core.js");

    var ProgressBarComponent =
    /*#__PURE__*/
    function () {
      function ProgressBarComponent(loader) {
        _classCallCheck(this, ProgressBarComponent);

        this.loader = loader;
      }

      _createClass(ProgressBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProgressBarComponent;
    }();

    ProgressBarComponent.ctorParameters = function () {
      return [{
        type: _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_2__["LoadingBarService"]
      }];
    };

    ProgressBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-progress-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./progress-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/progress-bar/progress-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./progress-bar.component.scss */
      "./src/@vex/components/progress-bar/progress-bar.component.scss")).default]
    })], ProgressBarComponent);
    /***/
  },

  /***/
  "./src/@vex/components/progress-bar/progress-bar.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/@vex/components/progress-bar/progress-bar.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ProgressBarModule */

  /***/
  function srcVexComponentsProgressBarProgressBarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressBarModule", function () {
      return ProgressBarModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./progress-bar.component */
    "./src/@vex/components/progress-bar/progress-bar.component.ts");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-loading-bar/core */
    "./node_modules/@ngx-loading-bar/core/fesm2015/ngx-loading-bar-core.js");
    /* harmony import */


    var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-loading-bar/router */
    "./node_modules/@ngx-loading-bar/router/fesm2015/ngx-loading-bar-router.js");

    var ProgressBarModule = function ProgressBarModule() {
      _classCallCheck(this, ProgressBarModule);
    };

    ProgressBarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__["ProgressBarComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"], _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__["LoadingBarModule"], _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_6__["LoadingBarRouterModule"]],
      exports: [_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__["ProgressBarComponent"]]
    })], ProgressBarModule);
    /***/
  },

  /***/
  "./src/@vex/components/quickpanel/quickpanel.component.scss":
  /*!******************************************************************!*\
    !*** ./src/@vex/components/quickpanel/quickpanel.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcVexComponentsQuickpanelQuickpanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-width: 80vw;\n}\n\nh3 {\n  padding: 16px 16px 0;\n}\n\np {\n  margin: 0;\n}\n\n.list-item {\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  font: var(--font-subheading-2);\n  justify-content: center;\n  min-height: 72px;\n  padding: 0 var(--padding-16);\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.list-item:hover {\n  background: var(--background-hover);\n}\n\n.progress-bar {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvcXVpY2twYW5lbC9DOlxcVXNlcnNcXEFCQ0RcXHNvdXJjZVxccmVwb3NcXERlZXBCb3RcXERlZXBCb3RcXENsaWVudEFwcC9zcmNcXEB2ZXhcXGNvbXBvbmVudHNcXHF1aWNrcGFuZWxcXHF1aWNrcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvQHZleC9jb21wb25lbnRzL3F1aWNrcGFuZWwvcXVpY2twYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUNBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3F1aWNrcGFuZWwvcXVpY2twYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDgwdnc7XG59XG5cbmgzIHtcbiAgcGFkZGluZzogMTZweCAxNnB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi5saXN0LWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQ6IHZhcigtLWZvbnQtc3ViaGVhZGluZy0yKTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDcycHg7XG4gIHBhZGRpbmc6IDAgdmFyKC0tcGFkZGluZy0xNik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5saXN0LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiA4MHZ3O1xufVxuXG5oMyB7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAwO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubGlzdC1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250OiB2YXIoLS1mb250LXN1YmhlYWRpbmctMik7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA3MnB4O1xuICBwYWRkaW5nOiAwIHZhcigtLXBhZGRpbmctMTYpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubGlzdC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/@vex/components/quickpanel/quickpanel.component.ts":
  /*!****************************************************************!*\
    !*** ./src/@vex/components/quickpanel/quickpanel.component.ts ***!
    \****************************************************************/

  /*! exports provided: QuickpanelComponent */

  /***/
  function srcVexComponentsQuickpanelQuickpanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuickpanelComponent", function () {
      return QuickpanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! luxon */
    "./node_modules/luxon/build/cjs-browser/luxon.js");
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_2__);

    var QuickpanelComponent =
    /*#__PURE__*/
    function () {
      function QuickpanelComponent() {
        _classCallCheck(this, QuickpanelComponent);

        this.date = luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local().toFormat('DD');
        this.dayName = luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local().toFormat('EEEE');
      }

      _createClass(QuickpanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return QuickpanelComponent;
    }();

    QuickpanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-quickpanel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quickpanel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/quickpanel/quickpanel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quickpanel.component.scss */
      "./src/@vex/components/quickpanel/quickpanel.component.scss")).default]
    })], QuickpanelComponent);
    /***/
  },

  /***/
  "./src/@vex/components/quickpanel/quickpanel.module.ts":
  /*!*************************************************************!*\
    !*** ./src/@vex/components/quickpanel/quickpanel.module.ts ***!
    \*************************************************************/

  /*! exports provided: QuickpanelModule */

  /***/
  function srcVexComponentsQuickpanelQuickpanelModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuickpanelModule", function () {
      return QuickpanelModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _quickpanel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./quickpanel.component */
    "./src/@vex/components/quickpanel/quickpanel.component.ts");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");

    var QuickpanelModule = function QuickpanelModule() {
      _classCallCheck(this, QuickpanelModule);
    };

    QuickpanelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_quickpanel_component__WEBPACK_IMPORTED_MODULE_3__["QuickpanelComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"]],
      exports: [_quickpanel_component__WEBPACK_IMPORTED_MODULE_3__["QuickpanelComponent"]]
    })], QuickpanelModule);
    /***/
  },

  /***/
  "./src/@vex/components/scrollbar/scrollbar.directive.ts":
  /*!**************************************************************!*\
    !*** ./src/@vex/components/scrollbar/scrollbar.directive.ts ***!
    \**************************************************************/

  /*! exports provided: ScrollbarDirective */

  /***/
  function srcVexComponentsScrollbarScrollbarDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollbarDirective", function () {
      return ScrollbarDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var simplebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! simplebar */
    "./node_modules/simplebar/dist/simplebar.esm.js");

    var ScrollbarDirective =
    /*#__PURE__*/
    function () {
      function ScrollbarDirective(_element, zone) {
        _classCallCheck(this, ScrollbarDirective);

        this._element = _element;
        this.zone = zone;
      }

      _createClass(ScrollbarDirective, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this5 = this;

          this.zone.runOutsideAngular(function () {
            _this5.scrollbarRef = new simplebar__WEBPACK_IMPORTED_MODULE_2__["default"](_this5._element.nativeElement, _this5.options);
          });
        }
      }]);

      return ScrollbarDirective;
    }();

    ScrollbarDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('vexScrollbar')], ScrollbarDirective.prototype, "options", void 0);
    ScrollbarDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[vexScrollbar],vex-scrollbar',
      host: {
        class: 'vex-scrollbar'
      }
    })], ScrollbarDirective);
    /***/
  },

  /***/
  "./src/@vex/components/scrollbar/scrollbar.module.ts":
  /*!***********************************************************!*\
    !*** ./src/@vex/components/scrollbar/scrollbar.module.ts ***!
    \***********************************************************/

  /*! exports provided: ScrollbarModule */

  /***/
  function srcVexComponentsScrollbarScrollbarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollbarModule", function () {
      return ScrollbarModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _scrollbar_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./scrollbar.directive */
    "./src/@vex/components/scrollbar/scrollbar.directive.ts");

    var ScrollbarModule = function ScrollbarModule() {
      _classCallCheck(this, ScrollbarModule);
    };

    ScrollbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_scrollbar_directive__WEBPACK_IMPORTED_MODULE_3__["ScrollbarDirective"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_scrollbar_directive__WEBPACK_IMPORTED_MODULE_3__["ScrollbarDirective"]]
    })], ScrollbarModule);
    /***/
  },

  /***/
  "./src/@vex/components/search/search.component.scss":
  /*!**********************************************************!*\
    !*** ./src/@vex/components/search/search.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcVexComponentsSearchSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".search {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  opacity: 0;\n  height: 50vh;\n  pointer-events: none;\n  transform: scale(0.75);\n  transition: all 0.25s cubic-bezier(0.2, 1, 0.3, 1);\n  z-index: 1050;\n}\n\n.search.show {\n  opacity: 1;\n  pointer-events: auto;\n  transform: scale(1);\n  transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);\n}\n\n.search-input {\n  border-bottom: 1px solid var(--foreground-divider);\n  font-size: 7vw;\n  line-height: 3rem;\n  width: 75%;\n  margin: 0;\n  border-radius: 0;\n  border-right-width: 0;\n  border-left-width: 0;\n  border-top-width: 0;\n  font-weight: 700;\n  background-color: transparent;\n}\n\n.search-input:focus {\n  outline: none;\n}\n\n.search-hint {\n  width: 75%;\n  font-size: 1rem;\n  text-align: right;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  margin-left: auto;\n  margin-right: auto;\n  color: var(--text-hint);\n  font-weight: 700;\n}\n\n.search-overlay {\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  height: 50vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvc2VhcmNoL0M6XFxVc2Vyc1xcQUJDRFxcc291cmNlXFxyZXBvc1xcRGVlcEJvdFxcRGVlcEJvdFxcQ2xpZW50QXBwL3NyY1xcQHZleFxcY29tcG9uZW50c1xcc2VhcmNoXFxzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzcmMvQHZleC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0RBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlEQUFBO0FDQ0Y7O0FERUE7RUFDRSxrREFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICBoZWlnaHQ6IDUwdmg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMiwgMSwgMC4zLCAxKTtcbiAgei1pbmRleDogMTA1MDtcbn1cblxuLnNlYXJjaC5zaG93IHtcbiAgb3BhY2l0eTogMTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjIsIDEsIDAuMywgMSk7XG59XG5cbi5zZWFyY2gtaW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbiAgZm9udC1zaXplOiA3dnc7XG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc2VhcmNoLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnNlYXJjaC1oaW50IHtcbiAgd2lkdGg6IDc1JTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBjb2xvcjogdmFyKC0tdGV4dC1oaW50KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnNlYXJjaC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xuICBoZWlnaHQ6IDUwdmg7XG59IiwiLnNlYXJjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgaGVpZ2h0OiA1MHZoO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjIsIDEsIDAuMywgMSk7XG4gIHotaW5kZXg6IDEwNTA7XG59XG5cbi5zZWFyY2guc2hvdyB7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC4yLCAxLCAwLjMsIDEpO1xufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIGZvbnQtc2l6ZTogN3Z3O1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICBmb250LXdlaWdodDogNzAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnNlYXJjaC1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zZWFyY2gtaGludCB7XG4gIHdpZHRoOiA3NSU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgY29sb3I6IHZhcigtLXRleHQtaGludCk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zZWFyY2gtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgaGVpZ2h0OiA1MHZoO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/@vex/components/search/search.component.ts":
  /*!********************************************************!*\
    !*** ./src/@vex/components/search/search.component.ts ***!
    \********************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcVexComponentsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-close */
    "./node_modules/@iconify/icons-ic/twotone-close.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/layout.service */
    "./src/@vex/services/layout.service.ts");
    /* harmony import */


    var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-take-until-destroy */
    "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/search.service */
    "./src/@vex/services/search.service.ts");

    var SearchComponent =
    /*#__PURE__*/
    function () {
      function SearchComponent(layoutService, searchService) {
        _classCallCheck(this, SearchComponent);

        this.layoutService = layoutService;
        this.searchService = searchService;
        this.show$ = this.layoutService.searchOpen$;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.searchService.isOpenSubject.next(true);
          this.searchCtrl.valueChanges.pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(function (value) {
            return _this6.searchService.valueChangesSubject.next(value);
          });
          this.show$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (show) {
            return show;
          }), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(function () {
            return _this6.input.nativeElement.focus();
          });
        }
      }, {
        key: "close",
        value: function close() {
          this.layoutService.closeSearch();
          this.searchCtrl.setValue(undefined);
          this.searchService.isOpenSubject.next(false);
        }
      }, {
        key: "search",
        value: function search() {
          this.searchService.submitSubject.next(this.searchCtrl.value);
          this.close();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.layoutService.closeSearch();
          this.searchCtrl.setValue(undefined);
          this.searchService.isOpenSubject.next(false);
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ctorParameters = function () {
      return [{
        type: _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]
      }, {
        type: _services_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', {
      static: true
    })], SearchComponent.prototype, "input", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/search/search.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search.component.scss */
      "./src/@vex/components/search/search.component.scss")).default]
    })], SearchComponent);
    /***/
  },

  /***/
  "./src/@vex/components/search/search.module.ts":
  /*!*****************************************************!*\
    !*** ./src/@vex/components/search/search.module.ts ***!
    \*****************************************************/

  /*! exports provided: SearchModule */

  /***/
  function srcVexComponentsSearchSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchModule", function () {
      return SearchModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search.component */
    "./src/@vex/components/search/search.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var SearchModule = function SearchModule() {
      _classCallCheck(this, SearchModule);
    };

    SearchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
      exports: [_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]]
    })], SearchModule);
    /***/
  },

  /***/
  "./src/@vex/components/sidebar/sidebar.component.scss":
  /*!************************************************************!*\
    !*** ./src/@vex/components/sidebar/sidebar.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcVexComponentsSidebarSidebarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidebar {\n  background: var(--background-card);\n  bottom: 0;\n  box-shadow: var(--elevation-z8);\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  max-width: 80vw;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: fixed;\n  top: 0;\n  transition-duration: var(--trans-ease-in-duration);\n  transition-property: transform, visibility;\n  transition-timing-function: var(--trans-ease-in-timing-function);\n  visibility: hidden;\n  width: var(--sidenav-width);\n  z-index: 1000;\n}\n\n@media (min-width: 600px) {\n  .sidebar {\n    max-width: unset;\n  }\n}\n\n.sidebar.position-left {\n  left: 0;\n  transform: translateX(-100%);\n}\n\n.sidebar.position-right {\n  right: 0;\n  transform: translateX(100%);\n}\n\n.sidebar.open {\n  transform: translateX(0);\n  visibility: visible;\n}\n\n.backdrop {\n  background-color: transparent;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition-duration: 400ms;\n  transition-property: background-color, visibility;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  visibility: hidden;\n  z-index: 800 !important;\n}\n\n.backdrop.visible {\n  background-color: rgba(0, 0, 0, 0.6);\n  visibility: visible;\n}\n\n.backdrop.invisible {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvc2lkZWJhci9DOlxcVXNlcnNcXEFCQ0RcXHNvdXJjZVxccmVwb3NcXERlZXBCb3RcXERlZXBCb3RcXENsaWVudEFwcC9zcmNcXEB2ZXhcXGNvbXBvbmVudHNcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvQHZleC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxrREFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0VBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxnQkFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRSxPQUFBO0VBQ0EsNEJBQUE7QUNBRjs7QURHQTtFQUNFLFFBQUE7RUFDQSwyQkFBQTtBQ0FGOztBREdBO0VBQ0Usd0JBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSwwQkFBQTtFQUNBLGlEQUFBO0VBQ0EsNERBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDQUY7O0FER0E7RUFDRSxvQ0FBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSw2QkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9AdmV4L2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNhcmQpO1xuICBib3R0b206IDA7XG4gIGJveC1zaGFkb3c6IHZhcigtLWVsZXZhdGlvbi16OCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDEgMCBhdXRvO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDgwdnc7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXRyYW5zLWVhc2UtaW4tZHVyYXRpb24pO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIHZpc2liaWxpdHk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10cmFucy1lYXNlLWluLXRpbWluZy1mdW5jdGlvbik7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IHZhcigtLXNpZGVuYXYtd2lkdGgpO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLnNpZGViYXIge1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gIH1cbn1cblxuLnNpZGViYXIucG9zaXRpb24tbGVmdCB7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG5cbi5zaWRlYmFyLnBvc2l0aW9uLXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbn1cblxuLnNpZGViYXIub3BlbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgdmlzaWJpbGl0eTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHotaW5kZXg6IDgwMCAhaW1wb3J0YW50O1xufVxuXG4uYmFja2Ryb3AudmlzaWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmJhY2tkcm9wLmludmlzaWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufSIsIi5zaWRlYmFyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jYXJkKTtcbiAgYm90dG9tOiAwO1xuICBib3gtc2hhZG93OiB2YXIoLS1lbGV2YXRpb24tejgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxIDAgYXV0bztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LXdpZHRoOiA4MHZ3O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10cmFucy1lYXNlLWluLWR1cmF0aW9uKTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCB2aXNpYmlsaXR5O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1pbi10aW1pbmctZnVuY3Rpb24pO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiB2YXIoLS1zaWRlbmF2LXdpZHRoKTtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICB9XG59XG4uc2lkZWJhci5wb3NpdGlvbi1sZWZ0IHtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cblxuLnNpZGViYXIucG9zaXRpb24tcmlnaHQge1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xufVxuXG4uc2lkZWJhci5vcGVuIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCB2aXNpYmlsaXR5O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgei1pbmRleDogODAwICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrZHJvcC52aXNpYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uYmFja2Ryb3AuaW52aXNpYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/@vex/components/sidebar/sidebar.component.ts":
  /*!**********************************************************!*\
    !*** ./src/@vex/components/sidebar/sidebar.component.ts ***!
    \**********************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcVexComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent(document) {
        _classCallCheck(this, SidebarComponent);

        this.document = document;
        this.position = 'left';
      }

      _createClass(SidebarComponent, [{
        key: "enableScrollblock",
        value: function enableScrollblock() {
          if (!this.document.body.classList.contains('vex-scrollblock')) {
            this.document.body.classList.add('vex-scrollblock');
          }
        }
      }, {
        key: "disableScrollblock",
        value: function disableScrollblock() {
          if (this.document.body.classList.contains('vex-scrollblock')) {
            this.document.body.classList.remove('vex-scrollblock');
          }
        }
      }, {
        key: "open",
        value: function open() {
          this.opened = true;
        }
      }, {
        key: "close",
        value: function close() {
          this.opened = false;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "opened",
        get: function get() {
          return this._opened;
        },
        set: function set(opened) {
          this._opened = opened;
          opened ? this.enableScrollblock() : this.disableScrollblock();
        }
      }, {
        key: "positionLeft",
        get: function get() {
          return this.position === 'left';
        }
      }, {
        key: "positionRight",
        get: function get() {
          return this.position === 'right';
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SidebarComponent.prototype, "position", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SidebarComponent.prototype, "invisibleBackdrop", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SidebarComponent.prototype, "opened", null);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/sidebar/sidebar.component.html")).default,
      host: {
        class: 'vex-sidebar'
      },
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.scss */
      "./src/@vex/components/sidebar/sidebar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))], SidebarComponent);
    /***/
  },

  /***/
  "./src/@vex/components/sidebar/sidebar.module.ts":
  /*!*******************************************************!*\
    !*** ./src/@vex/components/sidebar/sidebar.module.ts ***!
    \*******************************************************/

  /*! exports provided: SidebarModule */

  /***/
  function srcVexComponentsSidebarSidebarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarModule", function () {
      return SidebarModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sidebar.component */
    "./src/@vex/components/sidebar/sidebar.component.ts");

    var SidebarModule = function SidebarModule() {
      _classCallCheck(this, SidebarModule);
    };

    SidebarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]],
      exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]]
    })], SidebarModule);
    /***/
  },

  /***/
  "./src/@vex/components/sidenav-item/sidenav-item.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/@vex/components/sidenav-item/sidenav-item.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcVexComponentsSidenavItemSidenavItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".item {\n  align-items: center;\n  box-sizing: border-box;\n  color: var(--sidenav-item-color);\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  min-height: 48px;\n  padding: var(--padding-8) var(--sidenav-item-padding);\n  position: relative;\n  text-decoration: none;\n  transition: var(--trans-ease-out);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 100%;\n}\n\n.item:hover, .item.active {\n  background: var(--sidenav-item-background-active);\n}\n\n.item:hover .item-icon, .item.active .item-icon {\n  color: var(--sidenav-item-icon-color-active);\n}\n\n.item:hover .item-label, .item.active .item-label {\n  color: var(--sidenav-item-color-active);\n}\n\n.item:hover .item-dropdown-icon, .item.active .item-dropdown-icon {\n  color: var(--sidenav-item-color-active);\n}\n\n.item.open .item-dropdown-icon {\n  transform: rotate(90deg) !important;\n}\n\n:host(.item-level-1) .item {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 0));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 0));\n}\n\n:host(.item-level-1) .item:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n:host(.item-level-2) .item {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 1));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 1));\n}\n\n:host(.item-level-2) .item:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n:host(.item-level-3) .item {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 2));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 2));\n}\n\n:host(.item-level-3) .item:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n:host(.item-level-4) .item {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 3));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 3));\n}\n\n:host(.item-level-4) .item:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n:host(.item-level-5) .item {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 4));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 4));\n}\n\n:host(.item-level-5) .item:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n:host(.item-level-6) .item {\n  background: var(--sidenav-item-dropdown-background);\n  -webkit-padding-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 5));\n          padding-inline-start: calc(var(--sidenav-item-icon-size) + var(--sidenav-item-icon-gap) + var(--sidenav-item-padding) + (var(--sidenav-item-dropdown-gap) * 5));\n}\n\n:host(.item-level-6) .item:hover {\n  background: var(--sidenav-item-dropdown-background-hover);\n}\n\n.item-icon, .item-label, .item-dropdown-icon {\n  transition: inherit;\n}\n\n.item-icon {\n  color: var(--sidenav-item-icon-color);\n  font-size: var(--sidenav-item-icon-size);\n  height: var(--sidenav-item-icon-size);\n  -webkit-margin-end: var(--sidenav-item-icon-gap);\n          margin-inline-end: var(--sidenav-item-icon-gap);\n  width: var(--sidenav-item-icon-size);\n}\n\n.item-label {\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.item-badge {\n  border-radius: 9999px;\n  font-size: 11px;\n  line-height: 20px;\n  -webkit-margin-start: var(--padding-8);\n          margin-inline-start: var(--padding-8);\n  padding: 0 7px;\n  text-align: center;\n}\n\n.item-dropdown-icon {\n  color: var(--sidenav-item-icon-color);\n  font-size: 18px;\n  height: 18px;\n  line-height: 18px;\n  -webkit-margin-start: var(--padding-8);\n          margin-inline-start: var(--padding-8);\n  transform: rotate(0deg) !important;\n  width: 18px;\n}\n\n.item-dropdown {\n  overflow: hidden;\n}\n\n.subheading {\n  box-sizing: border-box;\n  color: var(--sidenav-item-color);\n  font: var(--font-caption);\n  margin-top: var(--padding);\n  padding: var(--padding-12) var(--padding);\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvc2lkZW5hdi1pdGVtL0M6XFxVc2Vyc1xcQUJDRFxcc291cmNlXFxyZXBvc1xcRGVlcEJvdFxcRGVlcEJvdFxcQ2xpZW50QXBwL3NyY1xcQHZleFxcY29tcG9uZW50c1xcc2lkZW5hdi1pdGVtXFxzaWRlbmF2LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvQHZleC9jb21wb25lbnRzL3NpZGVuYXYtaXRlbS9zaWRlbmF2LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxREFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsaURBQUE7QUNDRjs7QURFQTtFQUNFLDRDQUFBO0FDQ0Y7O0FERUE7RUFDRSx1Q0FBQTtBQ0NGOztBREVBO0VBQ0UsdUNBQUE7QUNDRjs7QURFQTtFQUNFLG1DQUFBO0FDQ0Y7O0FERUE7RUFDRSxtREFBQTtFQUNBLGdLQUFBO1VBQUEsK0pBQUE7QUNDRjs7QURFQTtFQUNFLHlEQUFBO0FDQ0Y7O0FERUE7RUFDRSxtREFBQTtFQUNBLGdLQUFBO1VBQUEsK0pBQUE7QUNDRjs7QURFQTtFQUNFLHlEQUFBO0FDQ0Y7O0FERUE7RUFDRSxtREFBQTtFQUNBLGdLQUFBO1VBQUEsK0pBQUE7QUNDRjs7QURFQTtFQUNFLHlEQUFBO0FDQ0Y7O0FERUE7RUFDRSxtREFBQTtFQUNBLGdLQUFBO1VBQUEsK0pBQUE7QUNDRjs7QURFQTtFQUNFLHlEQUFBO0FDQ0Y7O0FERUE7RUFDRSxtREFBQTtFQUNBLGdLQUFBO1VBQUEsK0pBQUE7QUNDRjs7QURFQTtFQUNFLHlEQUFBO0FDQ0Y7O0FERUE7RUFDRSxtREFBQTtFQUNBLGdLQUFBO1VBQUEsK0pBQUE7QUNDRjs7QURFQTtFQUNFLHlEQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0RBQUE7VUFBQSwrQ0FBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO1VBQUEscUNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO1VBQUEscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9AdmV4L2NvbXBvbmVudHMvc2lkZW5hdi1pdGVtL3NpZGVuYXYtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1jb2xvcik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWluLWhlaWdodDogNDhweDtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy04KSB2YXIoLS1zaWRlbmF2LWl0ZW0tcGFkZGluZyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucy1lYXNlLW91dCk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLml0ZW06aG92ZXIsIC5pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1iYWNrZ3JvdW5kLWFjdGl2ZSk7XG59XG5cbi5pdGVtOmhvdmVyIC5pdGVtLWljb24sIC5pdGVtLmFjdGl2ZSAuaXRlbS1pY29uIHtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWNvbG9yLWFjdGl2ZSk7XG59XG5cbi5pdGVtOmhvdmVyIC5pdGVtLWxhYmVsLCAuaXRlbS5hY3RpdmUgLml0ZW0tbGFiZWwge1xuICBjb2xvcjogdmFyKC0tc2lkZW5hdi1pdGVtLWNvbG9yLWFjdGl2ZSk7XG59XG5cbi5pdGVtOmhvdmVyIC5pdGVtLWRyb3Bkb3duLWljb24sIC5pdGVtLmFjdGl2ZSAuaXRlbS1kcm9wZG93bi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1jb2xvci1hY3RpdmUpO1xufVxuXG4uaXRlbS5vcGVuIC5pdGVtLWRyb3Bkb3duLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgIWltcG9ydGFudDtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtMSkgLml0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZCk7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLXNpemUpICsgdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tZ2FwKSArIHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nKSArICh2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tZ2FwKSAqIDApKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtMSkgLml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTIpIC5pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKSArIHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWdhcCkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0tcGFkZGluZykgKyAodmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWdhcCkgKiAxKSk7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTIpIC5pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC0zKSAuaXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1nYXApICsgdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmcpICsgKHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1nYXApICogMikpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC0zKSAuaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtNCkgLml0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZCk7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLXNpemUpICsgdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tZ2FwKSArIHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nKSArICh2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tZ2FwKSAqIDMpKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtNCkgLml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTUpIC5pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKSArIHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWdhcCkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0tcGFkZGluZykgKyAodmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWdhcCkgKiA0KSk7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTUpIC5pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC02KSAuaXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1nYXApICsgdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmcpICsgKHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1nYXApICogNSkpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC02KSAuaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuLml0ZW0taWNvbiwgLml0ZW0tbGFiZWwsIC5pdGVtLWRyb3Bkb3duLWljb24ge1xuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xufVxuXG4uaXRlbS1pY29uIHtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWNvbG9yKTtcbiAgZm9udC1zaXplOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKTtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWdhcCk7XG4gIHdpZHRoOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKTtcbn1cblxuLml0ZW0tbGFiZWwge1xuICBmbGV4OiAxO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLml0ZW0tYmFkZ2Uge1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZGRpbmctOCk7XG4gIHBhZGRpbmc6IDAgN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pdGVtLWRyb3Bkb3duLWljb24ge1xuICBjb2xvcjogdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tY29sb3IpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZGRpbmctOCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxOHB4O1xufVxuXG4uaXRlbS1kcm9wZG93biB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zdWJoZWFkaW5nIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1jb2xvcik7XG4gIGZvbnQ6IHZhcigtLWZvbnQtY2FwdGlvbik7XG4gIG1hcmdpbi10b3A6IHZhcigtLXBhZGRpbmcpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTEyKSB2YXIoLS1wYWRkaW5nKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn0iLCIuaXRlbSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0tY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctOCkgdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmcpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pdGVtOmhvdmVyLCAuaXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tYmFja2dyb3VuZC1hY3RpdmUpO1xufVxuXG4uaXRlbTpob3ZlciAuaXRlbS1pY29uLCAuaXRlbS5hY3RpdmUgLml0ZW0taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1jb2xvci1hY3RpdmUpO1xufVxuXG4uaXRlbTpob3ZlciAuaXRlbS1sYWJlbCwgLml0ZW0uYWN0aXZlIC5pdGVtLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1jb2xvci1hY3RpdmUpO1xufVxuXG4uaXRlbTpob3ZlciAuaXRlbS1kcm9wZG93bi1pY29uLCAuaXRlbS5hY3RpdmUgLml0ZW0tZHJvcGRvd24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0tY29sb3ItYWN0aXZlKTtcbn1cblxuLml0ZW0ub3BlbiAuaXRlbS1kcm9wZG93bi1pY29uIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTEpIC5pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKSArIHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWdhcCkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0tcGFkZGluZykgKyAodmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWdhcCkgKiAwKSk7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTEpIC5pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC0yKSAuaXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1nYXApICsgdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmcpICsgKHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1nYXApICogMSkpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC0yKSAuaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtMykgLml0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZCk7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLXNpemUpICsgdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tZ2FwKSArIHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nKSArICh2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tZ2FwKSAqIDIpKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtMykgLml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTQpIC5pdGVtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKSArIHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWdhcCkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0tcGFkZGluZykgKyAodmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWdhcCkgKiAzKSk7XG59XG5cbjpob3N0KC5pdGVtLWxldmVsLTQpIC5pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC01KSAuaXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGModmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSkgKyB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1nYXApICsgdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmcpICsgKHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1nYXApICogNCkpO1xufVxuXG46aG9zdCguaXRlbS1sZXZlbC01KSAuaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtNikgLml0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZCk7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLXNpemUpICsgdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tZ2FwKSArIHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nKSArICh2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tZ2FwKSAqIDUpKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtNikgLml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbi5pdGVtLWljb24sIC5pdGVtLWxhYmVsLCAuaXRlbS1kcm9wZG93bi1pY29uIHtcbiAgdHJhbnNpdGlvbjogaW5oZXJpdDtcbn1cblxuLml0ZW0taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1jb2xvcik7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1zaWRlbmF2LWl0ZW0taWNvbi1nYXApO1xuICB3aWR0aDogdmFyKC0tc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XG59XG5cbi5pdGVtLWxhYmVsIHtcbiAgZmxleDogMTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5pdGVtLWJhZGdlIHtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1wYWRkaW5nLTgpO1xuICBwYWRkaW5nOiAwIDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaXRlbS1kcm9wZG93bi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtaXRlbS1pY29uLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1wYWRkaW5nLTgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSAhaW1wb3J0YW50O1xuICB3aWR0aDogMThweDtcbn1cblxuLml0ZW0tZHJvcGRvd24ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc3ViaGVhZGluZyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiB2YXIoLS1zaWRlbmF2LWl0ZW0tY29sb3IpO1xuICBmb250OiB2YXIoLS1mb250LWNhcHRpb24pO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWRkaW5nKTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy0xMikgdmFyKC0tcGFkZGluZyk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/@vex/components/sidenav-item/sidenav-item.component.ts":
  /*!********************************************************************!*\
    !*** ./src/@vex/components/sidenav-item/sidenav-item.component.ts ***!
    \********************************************************************/

  /*! exports provided: SidenavItemComponent */

  /***/
  function srcVexComponentsSidenavItemSidenavItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavItemComponent", function () {
      return SidenavItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _animations_dropdown_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../animations/dropdown.animation */
    "./src/@vex/animations/dropdown.animation.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-take-until-destroy */
    "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/navigation.service */
    "./src/@vex/services/navigation.service.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_keyboard_arrow_right__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-keyboard-arrow-right */
    "./node_modules/@iconify/icons-ic/twotone-keyboard-arrow-right.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_keyboard_arrow_right__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_keyboard_arrow_right__WEBPACK_IMPORTED_MODULE_7__);

    var SidenavItemComponent =
    /*#__PURE__*/
    function () {
      function SidenavItemComponent(router, cd, navigationService) {
        _classCallCheck(this, SidenavItemComponent);

        this.router = router;
        this.cd = cd;
        this.navigationService = navigationService;
        this.icKeyboardArrowRight = _iconify_icons_ic_twotone_keyboard_arrow_right__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.isLink = this.navigationService.isLink;
        this.isDropdown = this.navigationService.isDropdown;
        this.isSubheading = this.navigationService.isSubheading;
      }

      _createClass(SidenavItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
            return _this7.isDropdown(_this7.item);
          }), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(function () {
            return _this7.onRouteChange();
          });
          this.navigationService.openChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () {
            return _this7.isDropdown(_this7.item);
          }), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(function (item) {
            return _this7.onOpenChange(item);
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes && changes.hasOwnProperty('item') && this.isDropdown(this.item)) {
            this.onRouteChange();
          }
        }
      }, {
        key: "toggleOpen",
        value: function toggleOpen() {
          this.isOpen = !this.isOpen;
          this.navigationService.triggerOpenChange(this.item);
          this.cd.markForCheck();
        }
      }, {
        key: "onOpenChange",
        value: function onOpenChange(item) {
          if (this.isChildrenOf(this.item, item)) {
            return;
          }

          if (this.hasActiveChilds(this.item)) {
            return;
          }

          if (this.item !== item) {
            this.isOpen = false;
            this.cd.markForCheck();
          }
        }
      }, {
        key: "onRouteChange",
        value: function onRouteChange() {
          if (this.hasActiveChilds(this.item)) {
            this.isActive = true;
            this.isOpen = true;
            this.navigationService.triggerOpenChange(this.item);
            this.cd.markForCheck();
          } else {
            this.isActive = false;
            this.isOpen = false;
            this.navigationService.triggerOpenChange(this.item);
            this.cd.markForCheck();
          }
        }
      }, {
        key: "isChildrenOf",
        value: function isChildrenOf(parent, item) {
          var _this8 = this;

          if (parent.children.indexOf(item) !== -1) {
            return true;
          }

          return parent.children.filter(function (child) {
            return _this8.isDropdown(child);
          }).some(function (child) {
            return _this8.isChildrenOf(child, item);
          });
        }
      }, {
        key: "hasActiveChilds",
        value: function hasActiveChilds(parent) {
          var _this9 = this;

          return parent.children.some(function (child) {
            if (_this9.isDropdown(child)) {
              return _this9.hasActiveChilds(child);
            }

            if (_this9.isLink(child) && !_this9.isFunction(child.route)) {
              return _this9.router.isActive(child.route, false);
            }
          });
        }
      }, {
        key: "isFunction",
        value: function isFunction(prop) {
          return prop instanceof Function;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "levelClass",
        get: function get() {
          return "item-level-".concat(this.level);
        }
      }]);

      return SidenavItemComponent;
    }();

    SidenavItemComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SidenavItemComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SidenavItemComponent.prototype, "level", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')], SidenavItemComponent.prototype, "levelClass", null);
    SidenavItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-sidenav-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidenav-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/sidenav-item/sidenav-item.component.html")).default,
      animations: [_animations_dropdown_animation__WEBPACK_IMPORTED_MODULE_2__["dropdownAnimation"]],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidenav-item.component.scss */
      "./src/@vex/components/sidenav-item/sidenav-item.component.scss")).default]
    })], SidenavItemComponent);
    /***/
  },

  /***/
  "./src/@vex/components/sidenav-item/sidenav-item.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/@vex/components/sidenav-item/sidenav-item.module.ts ***!
    \*****************************************************************/

  /*! exports provided: SidenavItemModule */

  /***/
  function srcVexComponentsSidenavItemSidenavItemModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavItemModule", function () {
      return SidenavItemModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _sidenav_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sidenav-item.component */
    "./src/@vex/components/sidenav-item/sidenav-item.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");

    var SidenavItemModule = function SidenavItemModule() {
      _classCallCheck(this, SidenavItemModule);
    };

    SidenavItemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_sidenav_item_component__WEBPACK_IMPORTED_MODULE_3__["SidenavItemComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"]],
      exports: [_sidenav_item_component__WEBPACK_IMPORTED_MODULE_3__["SidenavItemComponent"]]
    })], SidenavItemModule);
    /***/
  },

  /***/
  "./src/@vex/components/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.scss":
  /*!********************************************************************************************************************************!*\
    !*** ./src/@vex/components/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.scss ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcVexComponentsToolbarNotificationsToolbarNotificationsDropdownToolbarNotificationsDropdownComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".dropdown {\n  background: var(--background-card);\n  border-bottom-left-radius: var(--border-radius);\n  border-bottom-right-radius: var(--border-radius);\n  box-shadow: var(--elevation-z4);\n  max-width: 100vw;\n  overflow: hidden;\n  width: 350px;\n  border-radius: 0.25rem;\n}\n\n.dropdown-header {\n  background-color: #5c77ff;\n  box-shadow: var(--elevation-z6);\n  color: #FFF;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.dropdown-heading {\n  font: var(--font-title);\n}\n\n.dropdown-content {\n  max-height: 291px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.dropdown-footer {\n  background: var(--background-app-bar);\n  border-top: 1px solid var(--foreground-divider);\n  padding: var(--padding-8) var(--padding);\n}\n\n.notification {\n  color: var(--text-color);\n  padding: var(--padding-16) var(--padding);\n  position: relative;\n  text-decoration: none;\n  transition: var(--trans-ease-out);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.notification:hover {\n  background: var(--background-hover);\n}\n\n.notification:hover .notification-label {\n  color: #5c77ff;\n}\n\n.notification.read {\n  opacity: 0.5;\n}\n\n.notification-icon {\n  -webkit-margin-end: var(--padding);\n          margin-inline-end: var(--padding);\n}\n\n.notification-label {\n  transition: inherit;\n}\n\n.notification-description {\n  color: var(--text-secondary);\n  font: var(--font-caption);\n}\n\n.notification-chevron {\n  color: var(--text-hint);\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n\n.notification + .notification {\n  border-top: 1px solid var(--foreground-divider);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvdG9vbGJhci1ub3RpZmljYXRpb25zL3Rvb2xiYXItbm90aWZpY2F0aW9ucy1kcm9wZG93bi9DOlxcVXNlcnNcXEFCQ0RcXHNvdXJjZVxccmVwb3NcXERlZXBCb3RcXERlZXBCb3RcXENsaWVudEFwcC9zcmNcXEB2ZXhcXGNvbXBvbmVudHNcXHRvb2xiYXItbm90aWZpY2F0aW9uc1xcdG9vbGJhci1ub3RpZmljYXRpb25zLWRyb3Bkb3duXFx0b29sYmFyLW5vdGlmaWNhdGlvbnMtZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJzcmMvQHZleC9jb21wb25lbnRzL3Rvb2xiYXItbm90aWZpY2F0aW9ucy90b29sYmFyLW5vdGlmaWNhdGlvbnMtZHJvcGRvd24vdG9vbGJhci1ub3RpZmljYXRpb25zLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7RUFDQSwrQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esd0NBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGtDQUFBO1VBQUEsaUNBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsK0NBQUE7QUNDRiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3Rvb2xiYXItbm90aWZpY2F0aW9ucy90b29sYmFyLW5vdGlmaWNhdGlvbnMtZHJvcGRvd24vdG9vbGJhci1ub3RpZmljYXRpb25zLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jYXJkKTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tZWxldmF0aW9uLXo0KTtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDM1MHB4O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4uZHJvcGRvd24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNzdmZjtcbiAgYm94LXNoYWRvdzogdmFyKC0tZWxldmF0aW9uLXo2KTtcbiAgY29sb3I6ICNGRkY7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbn1cblxuLmRyb3Bkb3duLWhlYWRpbmcge1xuICBmb250OiB2YXIoLS1mb250LXRpdGxlKTtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiAyOTFweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZHJvcGRvd24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hcHAtYmFyKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctOCkgdmFyKC0tcGFkZGluZyk7XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctMTYpIHZhcigtLXBhZGRpbmcpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm5vdGlmaWNhdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG4ubm90aWZpY2F0aW9uOmhvdmVyIC5ub3RpZmljYXRpb24tbGFiZWwge1xuICBjb2xvcjogIzVjNzdmZjtcbn1cblxuLm5vdGlmaWNhdGlvbi5yZWFkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubm90aWZpY2F0aW9uLWljb24ge1xuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tcGFkZGluZyk7XG59XG5cbi5ub3RpZmljYXRpb24tbGFiZWwge1xuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xufVxuXG4ubm90aWZpY2F0aW9uLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udDogdmFyKC0tZm9udC1jYXB0aW9uKTtcbn1cblxuLm5vdGlmaWNhdGlvbi1jaGV2cm9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtaGludCk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbn1cblxuLm5vdGlmaWNhdGlvbiArIC5ub3RpZmljYXRpb24ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbn0iLCIuZHJvcGRvd24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNhcmQpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3gtc2hhZG93OiB2YXIoLS1lbGV2YXRpb24tejQpO1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMzUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5kcm9wZG93bi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM3N2ZmO1xuICBib3gtc2hhZG93OiB2YXIoLS1lbGV2YXRpb24tejYpO1xuICBjb2xvcjogI0ZGRjtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xufVxuXG4uZHJvcGRvd24taGVhZGluZyB7XG4gIGZvbnQ6IHZhcigtLWZvbnQtdGl0bGUpO1xufVxuXG4uZHJvcGRvd24tY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDI5MXB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5kcm9wZG93bi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFwcC1iYXIpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy04KSB2YXIoLS1wYWRkaW5nKTtcbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy0xNikgdmFyKC0tcGFkZGluZyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucy1lYXNlLW91dCk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubm90aWZpY2F0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbi5ub3RpZmljYXRpb246aG92ZXIgLm5vdGlmaWNhdGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjNWM3N2ZmO1xufVxuXG4ubm90aWZpY2F0aW9uLnJlYWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5ub3RpZmljYXRpb24taWNvbiB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1wYWRkaW5nKTtcbn1cblxuLm5vdGlmaWNhdGlvbi1sYWJlbCB7XG4gIHRyYW5zaXRpb246IGluaGVyaXQ7XG59XG5cbi5ub3RpZmljYXRpb24tZGVzY3JpcHRpb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICBmb250OiB2YXIoLS1mb250LWNhcHRpb24pO1xufVxuXG4ubm90aWZpY2F0aW9uLWNoZXZyb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1oaW50KTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xufVxuXG4ubm90aWZpY2F0aW9uICsgLm5vdGlmaWNhdGlvbiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/@vex/components/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.ts":
  /*!******************************************************************************************************************************!*\
    !*** ./src/@vex/components/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.ts ***!
    \******************************************************************************************************************************/

  /*! exports provided: ToolbarNotificationsDropdownComponent */

  /***/
  function srcVexComponentsToolbarNotificationsToolbarNotificationsDropdownToolbarNotificationsDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarNotificationsDropdownComponent", function () {
      return ToolbarNotificationsDropdownComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! luxon */
    "./node_modules/luxon/build/cjs-browser/luxon.js");
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _utils_track_by__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../utils/track-by */
    "./src/@vex/utils/track-by.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-settings */
    "./node_modules/@iconify/icons-ic/twotone-settings.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-chevron-right */
    "./node_modules/@iconify/icons-ic/twotone-chevron-right.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-notifications-off */
    "./node_modules/@iconify/icons-ic/twotone-notifications-off.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _iconify_icons_ic_twotone_clear_all__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-clear-all */
    "./node_modules/@iconify/icons-ic/twotone-clear-all.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_clear_all__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_clear_all__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-shopping-basket */
    "./node_modules/@iconify/icons-ic/twotone-shopping-basket.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-account-circle */
    "./node_modules/@iconify/icons-ic/twotone-account-circle.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _iconify_icons_ic_twotone_insert_chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-insert-chart */
    "./node_modules/@iconify/icons-ic/twotone-insert-chart.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_insert_chart__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_insert_chart__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-check-circle */
    "./node_modules/@iconify/icons-ic/twotone-check-circle.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-description */
    "./node_modules/@iconify/icons-ic/twotone-description.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var _iconify_icons_ic_twotone_feedback__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-feedback */
    "./node_modules/@iconify/icons-ic/twotone-feedback.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_feedback__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_feedback__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-verified-user */
    "./node_modules/@iconify/icons-ic/twotone-verified-user.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_14___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var _iconify_icons_ic_twotone_file_copy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-file-copy */
    "./node_modules/@iconify/icons-ic/twotone-file-copy.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_file_copy__WEBPACK_IMPORTED_MODULE_15___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_file_copy__WEBPACK_IMPORTED_MODULE_15__);

    var ToolbarNotificationsDropdownComponent =
    /*#__PURE__*/
    function () {
      function ToolbarNotificationsDropdownComponent() {
        _classCallCheck(this, ToolbarNotificationsDropdownComponent);

        this.notifications = [{
          id: '1',
          label: 'New Order Received',
          icon: _iconify_icons_ic_twotone_shopping_basket__WEBPACK_IMPORTED_MODULE_8___default.a,
          colorClass: 'text-primary-500',
          datetime: luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local().minus({
            hour: 1
          })
        }, {
          id: '2',
          label: 'New customer has registered',
          icon: _iconify_icons_ic_twotone_account_circle__WEBPACK_IMPORTED_MODULE_9___default.a,
          colorClass: 'text-orange-500',
          datetime: luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local().minus({
            hour: 2
          })
        }, {
          id: '3',
          label: 'Campaign statistics are available',
          icon: _iconify_icons_ic_twotone_insert_chart__WEBPACK_IMPORTED_MODULE_10___default.a,
          colorClass: 'text-purple-500',
          datetime: luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local().minus({
            hour: 5
          })
        }, {
          id: '4',
          label: 'Project has been approved',
          icon: _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_11___default.a,
          colorClass: 'text-green-500',
          datetime: luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local().minus({
            hour: 9
          })
        }, {
          id: '5',
          label: 'Client reports are available',
          icon: _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_12___default.a,
          colorClass: 'text-primary-500',
          datetime: luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local().minus({
            hour: 30
          })
        }, {
          id: '6',
          label: 'New review received',
          icon: _iconify_icons_ic_twotone_feedback__WEBPACK_IMPORTED_MODULE_13___default.a,
          colorClass: 'text-orange-500',
          datetime: luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local().minus({
            hour: 40
          }),
          read: true
        }, {
          id: '7',
          label: '22 verified registrations',
          icon: _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_14___default.a,
          colorClass: 'text-green-500',
          datetime: luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local().minus({
            hour: 60
          })
        }, {
          id: '8',
          label: 'New files available',
          icon: _iconify_icons_ic_twotone_file_copy__WEBPACK_IMPORTED_MODULE_15___default.a,
          colorClass: 'text-amber-500',
          datetime: luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local().minus({
            hour: 90
          })
        }];
        this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icChevronRight = _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icClearAll = _iconify_icons_ic_twotone_clear_all__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icNotificationsOff = _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.trackById = _utils_track_by__WEBPACK_IMPORTED_MODULE_3__["trackById"];
      }

      _createClass(ToolbarNotificationsDropdownComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToolbarNotificationsDropdownComponent;
    }();

    ToolbarNotificationsDropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-toolbar-notifications-dropdown',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./toolbar-notifications-dropdown.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./toolbar-notifications-dropdown.component.scss */
      "./src/@vex/components/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.scss")).default]
    })], ToolbarNotificationsDropdownComponent);
    /***/
  },

  /***/
  "./src/@vex/components/toolbar-notifications/toolbar-notifications.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/@vex/components/toolbar-notifications/toolbar-notifications.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcVexComponentsToolbarNotificationsToolbarNotificationsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".button.active {\n  background: var(--background-hover);\n}\n\n.button .mat-icon {\n  color: var(--toolbar-icon-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvdG9vbGJhci1ub3RpZmljYXRpb25zL0M6XFxVc2Vyc1xcQUJDRFxcc291cmNlXFxyZXBvc1xcRGVlcEJvdFxcRGVlcEJvdFxcQ2xpZW50QXBwL3NyY1xcQHZleFxcY29tcG9uZW50c1xcdG9vbGJhci1ub3RpZmljYXRpb25zXFx0b29sYmFyLW5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvQHZleC9jb21wb25lbnRzL3Rvb2xiYXItbm90aWZpY2F0aW9ucy90b29sYmFyLW5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3Rvb2xiYXItbm90aWZpY2F0aW9ucy90b29sYmFyLW5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG4uYnV0dG9uIC5tYXQtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS10b29sYmFyLWljb24tY29sb3IpO1xufSIsIi5idXR0b24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbi5idXR0b24gLm1hdC1pY29uIHtcbiAgY29sb3I6IHZhcigtLXRvb2xiYXItaWNvbi1jb2xvcik7XG59Il19 */";
    /***/
  },

  /***/
  "./src/@vex/components/toolbar-notifications/toolbar-notifications.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/@vex/components/toolbar-notifications/toolbar-notifications.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ToolbarNotificationsComponent */

  /***/
  function srcVexComponentsToolbarNotificationsToolbarNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarNotificationsComponent", function () {
      return ToolbarNotificationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _popover_popover_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../popover/popover.service */
    "./src/@vex/components/popover/popover.service.ts");
    /* harmony import */


    var _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./toolbar-notifications-dropdown/toolbar-notifications-dropdown.component */
    "./src/@vex/components/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_notifications_active__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-notifications-active */
    "./node_modules/@iconify/icons-ic/twotone-notifications-active.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_notifications_active__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_notifications_active__WEBPACK_IMPORTED_MODULE_4__);

    var ToolbarNotificationsComponent =
    /*#__PURE__*/
    function () {
      function ToolbarNotificationsComponent(popover, cd) {
        _classCallCheck(this, ToolbarNotificationsComponent);

        this.popover = popover;
        this.cd = cd;
        this.icNotificationsActive = _iconify_icons_ic_twotone_notifications_active__WEBPACK_IMPORTED_MODULE_4___default.a;
      }

      _createClass(ToolbarNotificationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showPopover",
        value: function showPopover() {
          var _this10 = this;

          this.dropdownOpen = true;
          this.cd.markForCheck();
          var popoverRef = this.popover.open({
            content: _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarNotificationsDropdownComponent"],
            origin: this.originRef,
            offsetY: 12,
            position: [{
              originX: 'center',
              originY: 'top',
              overlayX: 'center',
              overlayY: 'bottom'
            }, {
              originX: 'end',
              originY: 'bottom',
              overlayX: 'end',
              overlayY: 'top'
            }]
          });
          popoverRef.afterClosed$.subscribe(function () {
            _this10.dropdownOpen = false;

            _this10.cd.markForCheck();
          });
        }
      }]);

      return ToolbarNotificationsComponent;
    }();

    ToolbarNotificationsComponent.ctorParameters = function () {
      return [{
        type: _popover_popover_service__WEBPACK_IMPORTED_MODULE_2__["PopoverService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('originRef', {
      static: true,
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    })], ToolbarNotificationsComponent.prototype, "originRef", void 0);
    ToolbarNotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-toolbar-notifications',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./toolbar-notifications.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-notifications/toolbar-notifications.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./toolbar-notifications.component.scss */
      "./src/@vex/components/toolbar-notifications/toolbar-notifications.component.scss")).default]
    })], ToolbarNotificationsComponent);
    /***/
  },

  /***/
  "./src/@vex/components/toolbar-notifications/toolbar-notifications.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/@vex/components/toolbar-notifications/toolbar-notifications.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ToolbarNotificationsModule */

  /***/
  function srcVexComponentsToolbarNotificationsToolbarNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarNotificationsModule", function () {
      return ToolbarNotificationsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./toolbar-notifications.component */
    "./src/@vex/components/toolbar-notifications/toolbar-notifications.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _popover_popover_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../popover/popover.module */
    "./src/@vex/components/popover/popover.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../pipes/relative-date-time/relative-date-time.module */
    "./src/@vex/pipes/relative-date-time/relative-date-time.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./toolbar-notifications-dropdown/toolbar-notifications-dropdown.component */
    "./src/@vex/components/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.ts");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");

    var ToolbarNotificationsModule = function ToolbarNotificationsModule() {
      _classCallCheck(this, ToolbarNotificationsModule);
    };

    ToolbarNotificationsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarNotificationsComponent"], _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_13__["ToolbarNotificationsDropdownComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _popover_popover_module__WEBPACK_IMPORTED_MODULE_6__["PopoverModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"], _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_10__["RelativeDateTimeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__["IconModule"]],
      exports: [_toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarNotificationsComponent"]],
      entryComponents: [_toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_13__["ToolbarNotificationsDropdownComponent"]]
    })], ToolbarNotificationsModule);
    /***/
  },

  /***/
  "./src/@vex/components/toolbar-search/toolbar-search.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/@vex/components/toolbar-search/toolbar-search.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcVexComponentsToolbarSearchToolbarSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-icon {\n  color: #5c77ff;\n}\n\n.search {\n  margin-top: 22px;\n  opacity: 0;\n  overflow: hidden;\n  transition: var(--trans-ease-in-out);\n  visibility: hidden;\n  width: 0;\n}\n\n.search.search-open {\n  margin-left: var(--padding-8);\n  margin-right: var(--padding-8);\n  opacity: 1;\n  visibility: visible;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvdG9vbGJhci1zZWFyY2gvQzpcXFVzZXJzXFxBQkNEXFxzb3VyY2VcXHJlcG9zXFxEZWVwQm90XFxEZWVwQm90XFxDbGllbnRBcHAvc3JjXFxAdmV4XFxjb21wb25lbnRzXFx0b29sYmFyLXNlYXJjaFxcdG9vbGJhci1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzcmMvQHZleC9jb21wb25lbnRzL3Rvb2xiYXItc2VhcmNoL3Rvb2xiYXItc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvQHZleC9jb21wb25lbnRzL3Rvb2xiYXItc2VhcmNoL3Rvb2xiYXItc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1pY29uIHtcbiAgY29sb3I6ICM1Yzc3ZmY7XG59XG5cbi5zZWFyY2gge1xuICBtYXJnaW4tdG9wOiAyMnB4O1xuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucy1lYXNlLWluLW91dCk7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDA7XG59XG5cbi5zZWFyY2guc2VhcmNoLW9wZW4ge1xuICBtYXJnaW4tbGVmdDogdmFyKC0tcGFkZGluZy04KTtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1wYWRkaW5nLTgpO1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB3aWR0aDogMjUwcHg7XG59IiwiLm1hdC1pY29uIHtcbiAgY29sb3I6ICM1Yzc3ZmY7XG59XG5cbi5zZWFyY2gge1xuICBtYXJnaW4tdG9wOiAyMnB4O1xuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucy1lYXNlLWluLW91dCk7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDA7XG59XG5cbi5zZWFyY2guc2VhcmNoLW9wZW4ge1xuICBtYXJnaW4tbGVmdDogdmFyKC0tcGFkZGluZy04KTtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1wYWRkaW5nLTgpO1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB3aWR0aDogMjUwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/@vex/components/toolbar-search/toolbar-search.component.ts":
  /*!************************************************************************!*\
    !*** ./src/@vex/components/toolbar-search/toolbar-search.component.ts ***!
    \************************************************************************/

  /*! exports provided: ToolbarSearchComponent */

  /***/
  function srcVexComponentsToolbarSearchToolbarSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarSearchComponent", function () {
      return ToolbarSearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-search */
    "./node_modules/@iconify/icons-ic/twotone-search.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__);

    var ToolbarSearchComponent =
    /*#__PURE__*/
    function () {
      function ToolbarSearchComponent(cd) {
        _classCallCheck(this, ToolbarSearchComponent);

        this.cd = cd;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default.a;
      }

      _createClass(ToolbarSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "open",
        value: function open() {
          var _this11 = this;

          this.isOpen = true;
          this.cd.markForCheck();
          setTimeout(function () {
            _this11.input.nativeElement.focus();
          }, 100);
        }
      }, {
        key: "close",
        value: function close() {
          this.isOpen = false;
          this.cd.markForCheck();
        }
      }]);

      return ToolbarSearchComponent;
    }();

    ToolbarSearchComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      static: true
    })], ToolbarSearchComponent.prototype, "input", void 0);
    ToolbarSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-toolbar-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./toolbar-search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-search/toolbar-search.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./toolbar-search.component.scss */
      "./src/@vex/components/toolbar-search/toolbar-search.component.scss")).default]
    })], ToolbarSearchComponent);
    /***/
  },

  /***/
  "./src/@vex/components/toolbar-search/toolbar-search.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/@vex/components/toolbar-search/toolbar-search.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ToolbarSearchModule */

  /***/
  function srcVexComponentsToolbarSearchToolbarSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarSearchModule", function () {
      return ToolbarSearchModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _toolbar_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./toolbar-search.component */
    "./src/@vex/components/toolbar-search/toolbar-search.component.ts");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");

    var ToolbarSearchModule = function ToolbarSearchModule() {
      _classCallCheck(this, ToolbarSearchModule);
    };

    ToolbarSearchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_toolbar_search_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarSearchComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"]],
      exports: [_toolbar_search_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarSearchComponent"]]
    })], ToolbarSearchModule);
    /***/
  },

  /***/
  "./src/@vex/components/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/@vex/components/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcVexComponentsToolbarUserToolbarUserDropdownToolbarUserDropdownComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".dropdown {\n  background: var(--background-card);\n  border-bottom-left-radius: var(--border-radius);\n  border-bottom-right-radius: var(--border-radius);\n  box-shadow: var(--elevation-z4);\n  max-width: 200vw;\n  width: 250px;\n  overflow: hidden;\n  border-radius: 0.25rem;\n}\n\n.dropdown-header {\n  background-color: #5c77ff;\n  color: #FFF;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-right: 1rem;\n  padding-left: 0.75rem;\n  box-shadow: var(--elevation-z6);\n}\n\n.dropdown-heading-icon {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 999999px;\n  margin-right: var(--padding-12);\n  padding: var(--padding-8);\n}\n\n.dropdown-heading-icon .mat-icon {\n  font-size: 32px;\n  height: 32px;\n  width: 32px;\n}\n\n.dropdown-heading {\n  font: var(--font-title);\n}\n\n.dropdown-content {\n  max-height: 300px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.dropdown-footer {\n  background: var(--background-app-bar);\n  border-top: 1px solid var(--foreground-divider);\n  padding: var(--padding-8) var(--padding-12);\n}\n\n.dropdown-footer-select {\n  padding-left: var(--padding-12);\n}\n\n.dropdown-footer-select .mat-icon:not(.dropdown-footer-select-caret) {\n  margin-right: var(--padding-8);\n  vertical-align: -7px !important;\n}\n\n.dropdown-footer-select-caret {\n  color: var(--text-hint);\n  font-size: 18px;\n  height: 18px;\n  vertical-align: -4px !important;\n  width: 18px;\n}\n\n.notification {\n  color: var(--text-color);\n  padding: var(--padding-16) var(--padding);\n  position: relative;\n  text-decoration: none;\n  transition: var(--trans-ease-out);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.notification:hover {\n  background: var(--background-hover);\n}\n\n.notification:hover .notification-label {\n  color: #5c77ff;\n}\n\n.notification.read {\n  opacity: 0.5;\n}\n\n.notification-icon {\n  margin-right: var(--padding);\n}\n\n.notification-label {\n  transition: inherit;\n}\n\n.notification-description {\n  color: var(--text-secondary);\n  font: var(--font-caption);\n}\n\n.notification-chevron {\n  color: var(--text-hint);\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n\n.notification + .notification {\n  border-top: 1px solid var(--foreground-divider);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2NvbXBvbmVudHMvdG9vbGJhci11c2VyL3Rvb2xiYXItdXNlci1kcm9wZG93bi9DOlxcVXNlcnNcXEFCQ0RcXHNvdXJjZVxccmVwb3NcXERlZXBCb3RcXERlZXBCb3RcXENsaWVudEFwcC9zcmNcXEB2ZXhcXGNvbXBvbmVudHNcXHRvb2xiYXItdXNlclxcdG9vbGJhci11c2VyLWRyb3Bkb3duXFx0b29sYmFyLXVzZXItZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJzcmMvQHZleC9jb21wb25lbnRzL3Rvb2xiYXItdXNlci90b29sYmFyLXVzZXItZHJvcGRvd24vdG9vbGJhci11c2VyLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7RUFDQSwrQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0EsMkNBQUE7QUNDRjs7QURFQTtFQUNFLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNDRjs7QURFQTtFQUNFLG1DQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9AdmV4L2NvbXBvbmVudHMvdG9vbGJhci11c2VyL3Rvb2xiYXItdXNlci1kcm9wZG93bi90b29sYmFyLXVzZXItZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNhcmQpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3gtc2hhZG93OiB2YXIoLS1lbGV2YXRpb24tejQpO1xuICBtYXgtd2lkdGg6IDIwMHZ3O1xuICB3aWR0aDogMjUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5kcm9wZG93bi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM3N2ZmO1xuICBjb2xvcjogI0ZGRjtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gIGJveC1zaGFkb3c6IHZhcigtLWVsZXZhdGlvbi16Nik7XG59XG5cbi5kcm9wZG93bi1oZWFkaW5nLWljb24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTk5OXB4O1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXBhZGRpbmctMTIpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTgpO1xufVxuXG4uZHJvcGRvd24taGVhZGluZy1pY29uIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbn1cblxuLmRyb3Bkb3duLWhlYWRpbmcge1xuICBmb250OiB2YXIoLS1mb250LXRpdGxlKTtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZHJvcGRvd24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hcHAtYmFyKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctOCkgdmFyKC0tcGFkZGluZy0xMik7XG59XG5cbi5kcm9wZG93bi1mb290ZXItc2VsZWN0IHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nLTEyKTtcbn1cblxuLmRyb3Bkb3duLWZvb3Rlci1zZWxlY3QgLm1hdC1pY29uOm5vdCguZHJvcGRvd24tZm9vdGVyLXNlbGVjdC1jYXJldCkge1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXBhZGRpbmctOCk7XG4gIHZlcnRpY2FsLWFsaWduOiAtN3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1mb290ZXItc2VsZWN0LWNhcmV0IHtcbiAgY29sb3I6IHZhcigtLXRleHQtaGludCk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogLTRweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMThweDtcbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy0xNikgdmFyKC0tcGFkZGluZyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucy1lYXNlLW91dCk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubm90aWZpY2F0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbi5ub3RpZmljYXRpb246aG92ZXIgLm5vdGlmaWNhdGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjNWM3N2ZmO1xufVxuXG4ubm90aWZpY2F0aW9uLnJlYWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5ub3RpZmljYXRpb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0tcGFkZGluZyk7XG59XG5cbi5ub3RpZmljYXRpb24tbGFiZWwge1xuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xufVxuXG4ubm90aWZpY2F0aW9uLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udDogdmFyKC0tZm9udC1jYXB0aW9uKTtcbn1cblxuLm5vdGlmaWNhdGlvbi1jaGV2cm9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtaGludCk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbn1cblxuLm5vdGlmaWNhdGlvbiArIC5ub3RpZmljYXRpb24ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbn0iLCIuZHJvcGRvd24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNhcmQpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3gtc2hhZG93OiB2YXIoLS1lbGV2YXRpb24tejQpO1xuICBtYXgtd2lkdGg6IDIwMHZ3O1xuICB3aWR0aDogMjUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5kcm9wZG93bi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM3N2ZmO1xuICBjb2xvcjogI0ZGRjtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gIGJveC1zaGFkb3c6IHZhcigtLWVsZXZhdGlvbi16Nik7XG59XG5cbi5kcm9wZG93bi1oZWFkaW5nLWljb24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTk5OXB4O1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXBhZGRpbmctMTIpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLTgpO1xufVxuXG4uZHJvcGRvd24taGVhZGluZy1pY29uIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbn1cblxuLmRyb3Bkb3duLWhlYWRpbmcge1xuICBmb250OiB2YXIoLS1mb250LXRpdGxlKTtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZHJvcGRvd24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hcHAtYmFyKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmQtZGl2aWRlcik7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctOCkgdmFyKC0tcGFkZGluZy0xMik7XG59XG5cbi5kcm9wZG93bi1mb290ZXItc2VsZWN0IHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nLTEyKTtcbn1cblxuLmRyb3Bkb3duLWZvb3Rlci1zZWxlY3QgLm1hdC1pY29uOm5vdCguZHJvcGRvd24tZm9vdGVyLXNlbGVjdC1jYXJldCkge1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXBhZGRpbmctOCk7XG4gIHZlcnRpY2FsLWFsaWduOiAtN3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1mb290ZXItc2VsZWN0LWNhcmV0IHtcbiAgY29sb3I6IHZhcigtLXRleHQtaGludCk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogLTRweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMThweDtcbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZy0xNikgdmFyKC0tcGFkZGluZyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFucy1lYXNlLW91dCk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubm90aWZpY2F0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7XG59XG5cbi5ub3RpZmljYXRpb246aG92ZXIgLm5vdGlmaWNhdGlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjNWM3N2ZmO1xufVxuXG4ubm90aWZpY2F0aW9uLnJlYWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5ub3RpZmljYXRpb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0tcGFkZGluZyk7XG59XG5cbi5ub3RpZmljYXRpb24tbGFiZWwge1xuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xufVxuXG4ubm90aWZpY2F0aW9uLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgZm9udDogdmFyKC0tZm9udC1jYXB0aW9uKTtcbn1cblxuLm5vdGlmaWNhdGlvbi1jaGV2cm9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQtaGludCk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbn1cblxuLm5vdGlmaWNhdGlvbiArIC5ub3RpZmljYXRpb24ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZC1kaXZpZGVyKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/@vex/components/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/@vex/components/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: ToolbarUserDropdownComponent */

  /***/
  function srcVexComponentsToolbarUserToolbarUserDropdownToolbarUserDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarUserDropdownComponent", function () {
      return ToolbarUserDropdownComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _utils_track_by__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../utils/track-by */
    "./src/@vex/utils/track-by.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-person */
    "./node_modules/@iconify/icons-ic/twotone-person.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-settings */
    "./node_modules/@iconify/icons-ic/twotone-settings.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-check-circle */
    "./node_modules/@iconify/icons-ic/twotone-check-circle.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-access-time */
    "./node_modules/@iconify/icons-ic/twotone-access-time.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _iconify_icons_ic_twotone_do_not_disturb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-do-not-disturb */
    "./node_modules/@iconify/icons-ic/twotone-do-not-disturb.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_do_not_disturb__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_do_not_disturb__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _iconify_icons_ic_twotone_offline_bolt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-offline-bolt */
    "./node_modules/@iconify/icons-ic/twotone-offline-bolt.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_offline_bolt__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_offline_bolt__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-chevron-right */
    "./node_modules/@iconify/icons-ic/twotone-chevron-right.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-arrow-drop-down */
    "./node_modules/@iconify/icons-ic/twotone-arrow-drop-down.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-business */
    "./node_modules/@iconify/icons-ic/twotone-business.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-verified-user */
    "./node_modules/@iconify/icons-ic/twotone-verified-user.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var _iconify_icons_ic_twotone_lock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-lock */
    "./node_modules/@iconify/icons-ic/twotone-lock.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_lock__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_lock__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-notifications-off */
    "./node_modules/@iconify/icons-ic/twotone-notifications-off.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_14___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var _popover_popover_ref__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../popover/popover-ref */
    "./src/@vex/components/popover/popover-ref.ts");
    /* harmony import */


    var _app_Component_auth_reducers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../../app/Component/auth/reducers */
    "./src/app/Component/auth/reducers/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var src_app_Component_auth_actions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! src/app/Component/auth/actions */
    "./src/app/Component/auth/actions/index.ts");
    /* harmony import */


    var _iconify_icons_fa_solid_check_circle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @iconify/icons-fa-solid/check-circle */
    "./node_modules/@iconify/icons-fa-solid/check-circle.js");
    /* harmony import */


    var _iconify_icons_fa_solid_check_circle__WEBPACK_IMPORTED_MODULE_19___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_fa_solid_check_circle__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */


    var _iconify_icons_fa_solid_exclamation_circle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @iconify/icons-fa-solid/exclamation-circle */
    "./node_modules/@iconify/icons-fa-solid/exclamation-circle.js");
    /* harmony import */


    var _iconify_icons_fa_solid_exclamation_circle__WEBPACK_IMPORTED_MODULE_20___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_fa_solid_exclamation_circle__WEBPACK_IMPORTED_MODULE_20__);
    /* harmony import */


    var _iconify_icons_fa_solid_key__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @iconify/icons-fa-solid/key */
    "./node_modules/@iconify/icons-fa-solid/key.js");
    /* harmony import */


    var _iconify_icons_fa_solid_key__WEBPACK_IMPORTED_MODULE_21___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_fa_solid_key__WEBPACK_IMPORTED_MODULE_21__);

    var ToolbarUserDropdownComponent =
    /*#__PURE__*/
    function () {
      function ToolbarUserDropdownComponent(cd, popoverRef, store) {
        _classCallCheck(this, ToolbarUserDropdownComponent);

        this.cd = cd;
        this.popoverRef = popoverRef;
        this.store = store;
        this.user = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_17__["select"])(_app_Component_auth_reducers__WEBPACK_IMPORTED_MODULE_16__["getUser"]));
        this.statuses = [{
          id: 'online',
          label: 'Online',
          icon: _iconify_icons_ic_twotone_check_circle__WEBPACK_IMPORTED_MODULE_5___default.a,
          colorClass: 'text-green-500'
        }, {
          id: 'away',
          label: 'Away',
          icon: _iconify_icons_ic_twotone_access_time__WEBPACK_IMPORTED_MODULE_6___default.a,
          colorClass: 'text-orange-500'
        }, {
          id: 'dnd',
          label: 'Do not disturb',
          icon: _iconify_icons_ic_twotone_do_not_disturb__WEBPACK_IMPORTED_MODULE_7___default.a,
          colorClass: 'text-red-500'
        }, {
          id: 'offline',
          label: 'Offline',
          icon: _iconify_icons_ic_twotone_offline_bolt__WEBPACK_IMPORTED_MODULE_8___default.a,
          colorClass: 'text-gray-500'
        }];
        this.isCopy = false;
        this.activeStatus = this.statuses[0];
        this.checkCircle = _iconify_icons_fa_solid_check_circle__WEBPACK_IMPORTED_MODULE_19___default.a;
        this.trackById = _utils_track_by__WEBPACK_IMPORTED_MODULE_2__["trackById"];
        this.icPerson = _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icSettings = _iconify_icons_ic_twotone_settings__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icChevronRight = _iconify_icons_ic_twotone_chevron_right__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icArrowDropDown = _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.exclamationCircle = _iconify_icons_fa_solid_exclamation_circle__WEBPACK_IMPORTED_MODULE_20___default.a;
        this.icBusiness = _iconify_icons_ic_twotone_business__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.icVerifiedUser = _iconify_icons_ic_twotone_verified_user__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icLock = _iconify_icons_ic_twotone_lock__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.keyIcon = _iconify_icons_fa_solid_key__WEBPACK_IMPORTED_MODULE_21___default.a;
        this.icNotificationsOff = _iconify_icons_ic_twotone_notifications_off__WEBPACK_IMPORTED_MODULE_14___default.a;
        this.store.dispatch(src_app_Component_auth_actions__WEBPACK_IMPORTED_MODULE_18__["AuthActions"].getUser());
      }

      _createClass(ToolbarUserDropdownComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setStatus",
        value: function setStatus(status) {
          this.activeStatus = status;
          this.cd.markForCheck();
        }
      }, {
        key: "close",
        value: function close() {
          this.popoverRef.close();
        }
      }, {
        key: "copyClipboard",
        value: function copyClipboard(apiKey) {
          var _this12 = this;

          this.isCopy = true;
          var selBox = document.createElement('textarea');
          selBox.style.position = 'fixed';
          selBox.style.left = '0';
          selBox.style.top = '0';
          selBox.style.opacity = '0';
          selBox.value = apiKey;
          document.body.appendChild(selBox);
          selBox.focus();
          selBox.select();
          document.execCommand('copy');
          document.body.removeChild(selBox);
          setTimeout(function () {
            _this12.isCopy = false;

            _this12.close();
          }, 5000);
        }
      }]);

      return ToolbarUserDropdownComponent;
    }();

    ToolbarUserDropdownComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _popover_popover_ref__WEBPACK_IMPORTED_MODULE_15__["PopoverRef"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["Store"]
      }];
    };

    ToolbarUserDropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-toolbar-user-dropdown',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./toolbar-user-dropdown.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./toolbar-user-dropdown.component.scss */
      "./src/@vex/components/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.scss")).default]
    })], ToolbarUserDropdownComponent);
    /***/
  },

  /***/
  "./src/@vex/components/toolbar-user/toolbar-user.component.ts":
  /*!********************************************************************!*\
    !*** ./src/@vex/components/toolbar-user/toolbar-user.component.ts ***!
    \********************************************************************/

  /*! exports provided: ToolbarUserComponent */

  /***/
  function srcVexComponentsToolbarUserToolbarUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarUserComponent", function () {
      return ToolbarUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _popover_popover_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../popover/popover.service */
    "./src/@vex/components/popover/popover.service.ts");
    /* harmony import */


    var _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./toolbar-user-dropdown/toolbar-user-dropdown.component */
    "./src/@vex/components/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-person */
    "./node_modules/@iconify/icons-ic/twotone-person.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _utils_tailwindcss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../utils/tailwindcss */
    "./src/@vex/utils/tailwindcss.ts");

    var ToolbarUserComponent =
    /*#__PURE__*/
    function () {
      function ToolbarUserComponent(popover, cd) {
        _classCallCheck(this, ToolbarUserComponent);

        this.popover = popover;
        this.cd = cd;
        this.icPerson = _iconify_icons_ic_twotone_person__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.theme = _utils_tailwindcss__WEBPACK_IMPORTED_MODULE_5__["default"];
      }

      _createClass(ToolbarUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showPopover",
        value: function showPopover(originRef) {
          var _this13 = this;

          this.dropdownOpen = true;
          this.cd.markForCheck();
          var popoverRef = this.popover.open({
            content: _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarUserDropdownComponent"],
            origin: originRef,
            offsetX: -180,
            offsetY: 12,
            position: [{
              originX: 'center',
              originY: 'top',
              overlayX: 'center',
              overlayY: 'bottom'
            }, {
              originX: 'end',
              originY: 'bottom',
              overlayX: 'end',
              overlayY: 'top'
            }]
          });
          popoverRef.afterClosed$.subscribe(function () {
            _this13.dropdownOpen = false;

            _this13.cd.markForCheck();
          });
        }
      }]);

      return ToolbarUserComponent;
    }();

    ToolbarUserComponent.ctorParameters = function () {
      return [{
        type: _popover_popover_service__WEBPACK_IMPORTED_MODULE_2__["PopoverService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ToolbarUserComponent.prototype, "username", void 0);
    ToolbarUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-toolbar-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./toolbar-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/components/toolbar-user/toolbar-user.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })], ToolbarUserComponent);
    /***/
  },

  /***/
  "./src/@vex/components/toolbar-user/toolbar-user.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/@vex/components/toolbar-user/toolbar-user.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ToolbarUserModule */

  /***/
  function srcVexComponentsToolbarUserToolbarUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarUserModule", function () {
      return ToolbarUserModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _toolbar_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./toolbar-user.component */
    "./src/@vex/components/toolbar-user/toolbar-user.component.ts");
    /* harmony import */


    var _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./toolbar-user-dropdown/toolbar-user-dropdown.component */
    "./src/@vex/components/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../pipes/relative-date-time/relative-date-time.module */
    "./src/@vex/pipes/relative-date-time/relative-date-time.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../pipes/color/color-fade.module */
    "./src/@vex/pipes/color/color-fade.module.ts");

    var ToolbarUserModule = function ToolbarUserModule() {
      _classCallCheck(this, ToolbarUserModule);
    };

    ToolbarUserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_toolbar_user_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarUserComponent"], _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarUserDropdownComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _pipes_relative_date_time_relative_date_time_module__WEBPACK_IMPORTED_MODULE_10__["RelativeDateTimeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconModule"], _pipes_color_color_fade_module__WEBPACK_IMPORTED_MODULE_14__["ColorFadeModule"]],
      exports: [_toolbar_user_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarUserComponent"]],
      entryComponents: [_toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarUserDropdownComponent"]]
    })], ToolbarUserModule);
    /***/
  },

  /***/
  "./src/@vex/directives/container/container.directive.ts":
  /*!**************************************************************!*\
    !*** ./src/@vex/directives/container/container.directive.ts ***!
    \**************************************************************/

  /*! exports provided: ContainerDirective */

  /***/
  function srcVexDirectivesContainerContainerDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContainerDirective", function () {
      return ContainerDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/config.service */
    "./src/@vex/services/config.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-take-until-destroy */
    "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");

    var ContainerDirective =
    /*#__PURE__*/
    function () {
      function ContainerDirective(configService, cd) {
        var _this14 = this;

        _classCallCheck(this, ContainerDirective);

        this.configService = configService;
        this.cd = cd;
        this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (config) {
          return config.boxed;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(function (boxed) {
          _this14.enabled = boxed;

          _this14.cd.markForCheck();
        });
      }

      _createClass(ContainerDirective, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return ContainerDirective;
    }();

    ContainerDirective.ctorParameters = function () {
      return [{
        type: _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.container')], ContainerDirective.prototype, "enabled", void 0);
    ContainerDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[vexContainer]'
    })], ContainerDirective);
    /***/
  },

  /***/
  "./src/@vex/directives/container/container.module.ts":
  /*!***********************************************************!*\
    !*** ./src/@vex/directives/container/container.module.ts ***!
    \***********************************************************/

  /*! exports provided: ContainerModule */

  /***/
  function srcVexDirectivesContainerContainerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContainerModule", function () {
      return ContainerModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _container_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./container.directive */
    "./src/@vex/directives/container/container.directive.ts");

    var ContainerModule = function ContainerModule() {
      _classCallCheck(this, ContainerModule);
    };

    ContainerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_container_directive__WEBPACK_IMPORTED_MODULE_3__["ContainerDirective"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_container_directive__WEBPACK_IMPORTED_MODULE_3__["ContainerDirective"]]
    })], ContainerModule);
    /***/
  },

  /***/
  "./src/@vex/interfaces/config-name.model.ts":
  /*!**************************************************!*\
    !*** ./src/@vex/interfaces/config-name.model.ts ***!
    \**************************************************/

  /*! exports provided: ConfigName */

  /***/
  function srcVexInterfacesConfigNameModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigName", function () {
      return ConfigName;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ConfigName;

    (function (ConfigName) {
      ConfigName["apollo"] = "vex-layout-apollo";
      ConfigName["zeus"] = "vex-layout-zeus";
      ConfigName["hermes"] = "vex-layout-hermes";
      ConfigName["poseidon"] = "vex-layout-poseidon";
      ConfigName["ares"] = "vex-layout-ares";
      ConfigName["ikaros"] = "vex-layout-ikaros";
    })(ConfigName || (ConfigName = {}));
    /***/

  },

  /***/
  "./src/@vex/layout/layout.component.scss":
  /*!***********************************************!*\
    !*** ./src/@vex/layout/layout.component.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcVexLayoutLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-container {\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.sidenav {\n  background: var(--sidenav-background);\n}\n\n.sidenav ::ng-deep .mat-drawer-inner-container {\n  overflow: hidden;\n}\n\n.content {\n  background: var(--background-base);\n  min-height: calc(100% - var(--toolbar-height) - var(--navigation-height));\n  position: relative;\n  width: 100%;\n}\n\n.has-footer .content {\n  min-height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n}\n\n.scroll-disabled {\n  overflow: hidden;\n}\n\n.scroll-disabled .content {\n  height: calc(100% - var(--toolbar-height) - var(--navigation-height));\n  min-height: unset;\n  overflow: hidden;\n}\n\n.scroll-disabled.has-fixed-footer .content, .scroll-disabled.has-footer .content {\n  height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n  min-height: unset;\n}\n\n.is-mobile ::ng-deep .vex-toolbar {\n  position: fixed;\n  width: 100%;\n}\n\n.is-mobile .content {\n  margin-top: var(--toolbar-height);\n}\n\n.sidenav-container {\n  background: var(--background-base);\n  height: 100%;\n  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);\n}\n\n.sidenav-content {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.with-search {\n  overflow: hidden;\n  position: fixed;\n}\n\n.with-search .sidenav-container {\n  pointer-events: none;\n  transform: perspective(1000px) translate3d(0, 50vh, 0) rotate3d(1, 0, 0, 30deg);\n  transform-origin: 50vw 50vh;\n  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);\n  border-radius: 0.25rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  overflow: visible;\n}\n\n.toolbar-fixed ::ng-deep .vex-toolbar {\n  position: fixed;\n  width: var(--toolbar-width);\n  z-index: 50;\n}\n\n.toolbar-fixed .content {\n  margin-top: calc(var(--toolbar-height) + var(--navigation-height));\n}\n\n.has-fixed-footer ::ng-deep .vex-footer {\n  box-shadow: var(--footer-elevation);\n  position: fixed;\n}\n\n.has-fixed-footer .content {\n  margin-bottom: var(--footer-height);\n  min-height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n}\n\n.has-fixed-footer.scroll-disabled .content {\n  height: calc(100% - var(--toolbar-height) - var(--navigation-height) - var(--footer-height));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC9DOlxcVXNlcnNcXEFCQ0RcXHNvdXJjZVxccmVwb3NcXERlZXBCb3RcXERlZXBCb3RcXENsaWVudEFwcC9zcmNcXEB2ZXhcXGxheW91dFxcbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL0B2ZXgvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQ0NGOztBREVBO0VBQ0UscUNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQ0FBQTtFQUNBLHlFQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxnR0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHFFQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsNEZBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSx1REFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLCtFQUFBO0VBQ0EsMkJBQUE7RUFDQSx1REFBQTtFQUNBLHNCQUFBO0VBQ0EsaURBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usa0VBQUE7QUNDRjs7QURFQTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsbUNBQUE7RUFDQSxnR0FBQTtBQ0NGOztBREVBO0VBQ0UsNEZBQUE7QUNDRiIsImZpbGUiOiJzcmMvQHZleC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyIHtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5zaWRlbmF2IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi1iYWNrZ3JvdW5kKTtcbn1cblxuLnNpZGVuYXYgOjpuZy1kZWVwIC5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250ZW50IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1iYXNlKTtcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9vbGJhci1oZWlnaHQpIC0gdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhhcy1mb290ZXIgLmNvbnRlbnQge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS10b29sYmFyLWhlaWdodCkgLSB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCkgLSB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XG59XG5cbi5zY3JvbGwtZGlzYWJsZWQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2Nyb2xsLWRpc2FibGVkIC5jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS10b29sYmFyLWhlaWdodCkgLSB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCkpO1xuICBtaW4taGVpZ2h0OiB1bnNldDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNjcm9sbC1kaXNhYmxlZC5oYXMtZml4ZWQtZm9vdGVyIC5jb250ZW50LCAuc2Nyb2xsLWRpc2FibGVkLmhhcy1mb290ZXIgLmNvbnRlbnQge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvb2xiYXItaGVpZ2h0KSAtIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSAtIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcbiAgbWluLWhlaWdodDogdW5zZXQ7XG59XG5cbi5pcy1tb2JpbGUgOjpuZy1kZWVwIC52ZXgtdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pcy1tb2JpbGUgLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiB2YXIoLS10b29sYmFyLWhlaWdodCk7XG59XG5cbi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtYmFzZSk7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuMiwgMSwgMC4zLCAxKTtcbn1cblxuLnNpZGVuYXYtY29udGVudCB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLndpdGgtc2VhcmNoIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4ud2l0aC1zZWFyY2ggLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KSB0cmFuc2xhdGUzZCgwLCA1MHZoLCAwKSByb3RhdGUzZCgxLCAwLCAwLCAzMGRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwdncgNTB2aDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuMiwgMSwgMC4zLCAxKTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgYm94LXNoYWRvdzogMCAyNXB4IDUwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi50b29sYmFyLWZpeGVkIDo6bmctZGVlcCAudmV4LXRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiB2YXIoLS10b29sYmFyLXdpZHRoKTtcbiAgei1pbmRleDogNTA7XG59XG5cbi50b29sYmFyLWZpeGVkIC5jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS10b29sYmFyLWhlaWdodCkgKyB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCkpO1xufVxuXG4uaGFzLWZpeGVkLWZvb3RlciA6Om5nLWRlZXAgLnZleC1mb290ZXIge1xuICBib3gtc2hhZG93OiB2YXIoLS1mb290ZXItZWxldmF0aW9uKTtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uaGFzLWZpeGVkLWZvb3RlciAuY29udGVudCB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS10b29sYmFyLWhlaWdodCkgLSB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCkgLSB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XG59XG5cbi5oYXMtZml4ZWQtZm9vdGVyLnNjcm9sbC1kaXNhYmxlZCAuY29udGVudCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9vbGJhci1oZWlnaHQpIC0gdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xufSIsIi5wYWdlLWNvbnRhaW5lciB7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuXG4uc2lkZW5hdiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGVuYXYtYmFja2dyb3VuZCk7XG59XG5cbi5zaWRlbmF2IDo6bmctZGVlcCAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtYmFzZSk7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvb2xiYXItaGVpZ2h0KSAtIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oYXMtZm9vdGVyIC5jb250ZW50IHtcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9vbGJhci1oZWlnaHQpIC0gdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xufVxuXG4uc2Nyb2xsLWRpc2FibGVkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNjcm9sbC1kaXNhYmxlZCAuY29udGVudCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9vbGJhci1oZWlnaHQpIC0gdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpKTtcbiAgbWluLWhlaWdodDogdW5zZXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zY3JvbGwtZGlzYWJsZWQuaGFzLWZpeGVkLWZvb3RlciAuY29udGVudCwgLnNjcm9sbC1kaXNhYmxlZC5oYXMtZm9vdGVyIC5jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS10b29sYmFyLWhlaWdodCkgLSB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCkgLSB2YXIoLS1mb290ZXItaGVpZ2h0KSk7XG4gIG1pbi1oZWlnaHQ6IHVuc2V0O1xufVxuXG4uaXMtbW9iaWxlIDo6bmctZGVlcCAudmV4LXRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaXMtbW9iaWxlIC5jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tdG9vbGJhci1oZWlnaHQpO1xufVxuXG4uc2lkZW5hdi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWJhc2UpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjIsIDEsIDAuMywgMSk7XG59XG5cbi5zaWRlbmF2LWNvbnRlbnQge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi53aXRoLXNlYXJjaCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLndpdGgtc2VhcmNoIC5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCkgdHJhbnNsYXRlM2QoMCwgNTB2aCwgMCkgcm90YXRlM2QoMSwgMCwgMCwgMzBkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MHZ3IDUwdmg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjIsIDEsIDAuMywgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGJveC1zaGFkb3c6IDAgMjVweCA1MHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4udG9vbGJhci1maXhlZCA6Om5nLWRlZXAgLnZleC10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogdmFyKC0tdG9vbGJhci13aWR0aCk7XG4gIHotaW5kZXg6IDUwO1xufVxuXG4udG9vbGJhci1maXhlZCAuY29udGVudCB7XG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tdG9vbGJhci1oZWlnaHQpICsgdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpKTtcbn1cblxuLmhhcy1maXhlZC1mb290ZXIgOjpuZy1kZWVwIC52ZXgtZm9vdGVyIHtcbiAgYm94LXNoYWRvdzogdmFyKC0tZm9vdGVyLWVsZXZhdGlvbik7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmhhcy1maXhlZC1mb290ZXIgLmNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdG9vbGJhci1oZWlnaHQpIC0gdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpIC0gdmFyKC0tZm9vdGVyLWhlaWdodCkpO1xufVxuXG4uaGFzLWZpeGVkLWZvb3Rlci5zY3JvbGwtZGlzYWJsZWQgLmNvbnRlbnQge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXRvb2xiYXItaGVpZ2h0KSAtIHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KSAtIHZhcigtLWZvb3Rlci1oZWlnaHQpKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/@vex/layout/layout.component.ts":
  /*!*********************************************!*\
    !*** ./src/@vex/layout/layout.component.ts ***!
    \*********************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcVexLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/layout.service */
    "./src/@vex/services/layout.service.ts");
    /* harmony import */


    var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-take-until-destroy */
    "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../utils/check-router-childs-data */
    "./src/@vex/utils/check-router-childs-data.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _services_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../services/config.service */
    "./src/@vex/services/config.service.ts");
    /* harmony import */


    var _utils_tailwindcss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../utils/tailwindcss */
    "./src/@vex/utils/tailwindcss.ts");

    var LayoutComponent =
    /*#__PURE__*/
    function () {
      function LayoutComponent(cd, breakpointObserver, layoutService, configService, router, document) {
        var _this15 = this;

        _classCallCheck(this, LayoutComponent);

        this.cd = cd;
        this.breakpointObserver = breakpointObserver;
        this.layoutService = layoutService;
        this.configService = configService;
        this.router = router;
        this.document = document;
        this.isLayoutVertical$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (config) {
          return config.layout === 'vertical';
        }));
        this.isBoxed$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (config) {
          return config.boxed;
        }));
        this.isToolbarFixed$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (config) {
          return config.toolbar.fixed;
        }));
        this.isFooterFixed$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (config) {
          return config.footer.fixed;
        }));
        this.isFooterVisible$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (config) {
          return config.footer.visible;
        }));
        this.sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
        this.isDesktop$ = this.breakpointObserver.observe("(min-width: ".concat(_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_11__["default"].screens.lg, ")")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (state) {
          return state.matches;
        }));
        this.scrollDisabled$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function () {
          return Object(_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_8__["checkRouterChildsData"])(_this15.router.routerState.root.snapshot, function (data) {
            return data.scrollDisabled;
          });
        }));
        this.containerEnabled$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function () {
          return Object(_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_8__["checkRouterChildsData"])(_this15.router.routerState.root.snapshot, function (data) {
            return data.containerEnabled;
          });
        }));
        this.searchOpen$ = this.layoutService.searchOpen$;
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.isDesktop$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (matches) {
            return !matches;
          }), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(function () {
            return _this16.layoutService.expandSidenav();
          });
          this.layoutService.quickpanelOpen$.pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(function (open) {
            return open ? _this16.quickpanel.open() : _this16.quickpanel.close();
          });
          this.layoutService.sidenavOpen$.pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(function (open) {
            return open ? _this16.sidenav.open() : _this16.sidenav.close();
          });
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["withLatestFrom"])(this.isDesktop$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (_ref4) {
            var _ref5 = _slicedToArray(_ref4, 2),
                event = _ref5[0],
                matches = _ref5[1];

            return !matches;
          }), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(function () {
            return _this16.sidenav.close();
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this17 = this;

          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (e) {
            return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["Scroll"];
          }), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(function (e) {
            if (e.position) {
              // backward navigation
              _this17.sidenavContainer.scrollable.scrollTo({
                start: e.position[0],
                top: e.position[1]
              });
            } else if (e.anchor) {
              // anchor navigation
              var scroll = function scroll(anchor) {
                return _this17.sidenavContainer.scrollable.scrollTo({
                  behavior: 'smooth',
                  top: anchor.offsetTop,
                  left: anchor.offsetLeft
                });
              };

              var anchorElem = _this17.document.getElementById(e.anchor);

              if (anchorElem) {
                scroll(anchorElem);
              } else {
                setTimeout(function () {
                  anchorElem = _this17.document.getElementById(e.anchor);
                  scroll(anchorElem);
                }, 100);
              }
            } else {
              // forward navigation
              _this17.sidenavContainer.scrollable.scrollTo({
                top: 0,
                start: 0
              });
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
      }, {
        type: _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]
      }, {
        type: _services_config_service__WEBPACK_IMPORTED_MODULE_10__["ConfigService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayoutComponent.prototype, "sidenavRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayoutComponent.prototype, "toolbarRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayoutComponent.prototype, "footerRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayoutComponent.prototype, "quickpanelRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('quickpanel', {
      static: true
    })], LayoutComponent.prototype, "quickpanel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav', {
      static: true
    })], LayoutComponent.prototype, "sidenav", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], {
      static: true
    })], LayoutComponent.prototype, "sidenavContainer", void 0);
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-layout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/layout/layout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./layout.component.scss */
      "./src/@vex/layout/layout.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]))], LayoutComponent);
    /***/
  },

  /***/
  "./src/@vex/layout/layout.module.ts":
  /*!******************************************!*\
    !*** ./src/@vex/layout/layout.module.ts ***!
    \******************************************/

  /*! exports provided: LayoutModule */

  /***/
  function srcVexLayoutLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
      return LayoutModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout.component */
    "./src/@vex/layout/layout.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/progress-bar/progress-bar.module */
    "./src/@vex/components/progress-bar/progress-bar.module.ts");
    /* harmony import */


    var _components_search_search_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/search/search.module */
    "./src/@vex/components/search/search.module.ts");

    var LayoutModule = function LayoutModule() {
      _classCallCheck(this, LayoutModule);
    };

    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"], _components_progress_bar_progress_bar_module__WEBPACK_IMPORTED_MODULE_6__["ProgressBarModule"], _components_search_search_module__WEBPACK_IMPORTED_MODULE_7__["SearchModule"]],
      exports: [_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"]]
    })], LayoutModule);
    /***/
  },

  /***/
  "./src/@vex/layout/navigation/navigation.component.scss":
  /*!**************************************************************!*\
    !*** ./src/@vex/layout/navigation/navigation.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcVexLayoutNavigationNavigationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  background: var(--navigation-background);\n  display: block;\n  height: var(--navigation-height);\n  position: relative;\n  z-index: 200;\n}\n\n.navigation {\n  height: var(--navigation-height);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC9uYXZpZ2F0aW9uL0M6XFxVc2Vyc1xcQUJDRFxcc291cmNlXFxyZXBvc1xcRGVlcEJvdFxcRGVlcEJvdFxcQ2xpZW50QXBwL3NyY1xcQHZleFxcbGF5b3V0XFxuYXZpZ2F0aW9uXFxuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL0B2ZXgvbGF5b3V0L25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9AdmV4L2xheW91dC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW5hdmlnYXRpb24tYmFja2dyb3VuZCk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IHZhcigtLW5hdmlnYXRpb24taGVpZ2h0KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyMDA7XG59XG5cbi5uYXZpZ2F0aW9uIHtcbiAgaGVpZ2h0OiB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCk7XG59IiwiOmhvc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1uYXZpZ2F0aW9uLWJhY2tncm91bmQpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjAwO1xufVxuXG4ubmF2aWdhdGlvbiB7XG4gIGhlaWdodDogdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/@vex/layout/navigation/navigation.component.ts":
  /*!************************************************************!*\
    !*** ./src/@vex/layout/navigation/navigation.component.ts ***!
    \************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcVexLayoutNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/navigation.service */
    "./src/@vex/services/navigation.service.ts");

    var NavigationComponent =
    /*#__PURE__*/
    function () {
      function NavigationComponent(navigationService) {
        _classCallCheck(this, NavigationComponent);

        this.navigationService = navigationService;
        this.items = this.navigationService.items;
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ctorParameters = function () {
      return [{
        type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]
      }];
    };

    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/layout/navigation/navigation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation.component.scss */
      "./src/@vex/layout/navigation/navigation.component.scss")).default]
    })], NavigationComponent);
    /***/
  },

  /***/
  "./src/@vex/layout/navigation/navigation.module.ts":
  /*!*********************************************************!*\
    !*** ./src/@vex/layout/navigation/navigation.module.ts ***!
    \*********************************************************/

  /*! exports provided: NavigationModule */

  /***/
  function srcVexLayoutNavigationNavigationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationModule", function () {
      return NavigationModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./navigation.component */
    "./src/@vex/layout/navigation/navigation.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../components/navigation-item/navigation-item.module */
    "./src/@vex/components/navigation-item/navigation-item.module.ts");
    /* harmony import */


    var _directives_container_container_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");

    var NavigationModule = function NavigationModule() {
      _classCallCheck(this, NavigationModule);
    };

    NavigationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_10__["NavigationItemModule"], _directives_container_container_module__WEBPACK_IMPORTED_MODULE_11__["ContainerModule"]],
      exports: [_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]]
    })], NavigationModule);
    /***/
  },

  /***/
  "./src/@vex/layout/sidenav/sidenav.component.scss":
  /*!********************************************************!*\
    !*** ./src/@vex/layout/sidenav/sidenav.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcVexLayoutSidenavSidenavComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidenav {\n  color: var(--sidenav-color);\n  height: 100%;\n  transition: var(--trans-ease-out);\n  width: var(--sidenav-width);\n}\n\n.sidenav.collapsed {\n  width: var(--sidenav-collapsed-width);\n}\n\n.sidenav.collapsed:not(.open) .sidenav-toolbar .title {\n  opacity: 0;\n  -webkit-padding-start: var(--sidenav-item-padding);\n          padding-inline-start: var(--sidenav-item-padding);\n}\n\n.sidenav.collapsed:not(.open) ::ng-deep .sidenav-items .item-icon {\n  -webkit-margin-end: var(--sidenav-item-padding);\n          margin-inline-end: var(--sidenav-item-padding);\n}\n\n.sidenav.collapsed:not(.open) ::ng-deep .sidenav-items .subheading, .sidenav.collapsed:not(.open) ::ng-deep .sidenav-items .item-badge, .sidenav.collapsed:not(.open) ::ng-deep .sidenav-items .item-label {\n  opacity: 0;\n}\n\n.sidenav.collapsed:not(.open) ::ng-deep .simplebar-track.simplebar-vertical {\n  visibility: hidden !important;\n}\n\n.sidenav.collapsed ::ng-deep .subheading, .sidenav.collapsed ::ng-deep .item-badge, .sidenav.collapsed ::ng-deep .item-label {\n  transition: all 200ms var(--trans-ease-out-timing-function);\n}\n\n.sidenav.collapsed.open {\n  width: var(--sidenav-width);\n}\n\n.sidenav-toolbar {\n  align-items: center;\n  background: var(--sidenav-toolbar-background);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  height: var(--toolbar-height);\n  padding: 0 var(--padding);\n  white-space: nowrap;\n  width: 100%;\n}\n\n.sidenav-toolbar .title {\n  transition: padding var(--trans-ease-out-duration) var(--trans-ease-out-timing-function), opacity var(--trans-ease-out-duration) var(--trans-ease-out-timing-function);\n}\n\n.sidenav-items {\n  padding-top: var(--padding);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC9zaWRlbmF2L0M6XFxVc2Vyc1xcQUJDRFxcc291cmNlXFxyZXBvc1xcRGVlcEJvdFxcRGVlcEJvdFxcQ2xpZW50QXBwL3NyY1xcQHZleFxcbGF5b3V0XFxzaWRlbmF2XFxzaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL0B2ZXgvbGF5b3V0L3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTtFQUNFLHFDQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0Esa0RBQUE7VUFBQSxpREFBQTtBQ0NGOztBREVBO0VBQ0UsK0NBQUE7VUFBQSw4Q0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7QUNDRjs7QURFQTtFQUNFLDJEQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usc0tBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL0B2ZXgvbGF5b3V0L3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2IHtcbiAgY29sb3I6IHZhcigtLXNpZGVuYXYtY29sb3IpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zLWVhc2Utb3V0KTtcbiAgd2lkdGg6IHZhcigtLXNpZGVuYXYtd2lkdGgpO1xufVxuXG4uc2lkZW5hdi5jb2xsYXBzZWQge1xuICB3aWR0aDogdmFyKC0tc2lkZW5hdi1jb2xsYXBzZWQtd2lkdGgpO1xufVxuXG4uc2lkZW5hdi5jb2xsYXBzZWQ6bm90KC5vcGVuKSAuc2lkZW5hdi10b29sYmFyIC50aXRsZSB7XG4gIG9wYWNpdHk6IDA7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1zaWRlbmF2LWl0ZW0tcGFkZGluZyk7XG59XG5cbi5zaWRlbmF2LmNvbGxhcHNlZDpub3QoLm9wZW4pIDo6bmctZGVlcCAuc2lkZW5hdi1pdGVtcyAuaXRlbS1pY29uIHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nKTtcbn1cblxuLnNpZGVuYXYuY29sbGFwc2VkOm5vdCgub3BlbikgOjpuZy1kZWVwIC5zaWRlbmF2LWl0ZW1zIC5zdWJoZWFkaW5nLCAuc2lkZW5hdi5jb2xsYXBzZWQ6bm90KC5vcGVuKSA6Om5nLWRlZXAgLnNpZGVuYXYtaXRlbXMgLml0ZW0tYmFkZ2UsIC5zaWRlbmF2LmNvbGxhcHNlZDpub3QoLm9wZW4pIDo6bmctZGVlcCAuc2lkZW5hdi1pdGVtcyAuaXRlbS1sYWJlbCB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5zaWRlbmF2LmNvbGxhcHNlZDpub3QoLm9wZW4pIDo6bmctZGVlcCAuc2ltcGxlYmFyLXRyYWNrLnNpbXBsZWJhci12ZXJ0aWNhbCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4uc2lkZW5hdi5jb2xsYXBzZWQgOjpuZy1kZWVwIC5zdWJoZWFkaW5nLCAuc2lkZW5hdi5jb2xsYXBzZWQgOjpuZy1kZWVwIC5pdGVtLWJhZGdlLCAuc2lkZW5hdi5jb2xsYXBzZWQgOjpuZy1kZWVwIC5pdGVtLWxhYmVsIHtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIHZhcigtLXRyYW5zLWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbik7XG59XG5cbi5zaWRlbmF2LmNvbGxhcHNlZC5vcGVuIHtcbiAgd2lkdGg6IHZhcigtLXNpZGVuYXYtd2lkdGgpO1xufVxuXG4uc2lkZW5hdi10b29sYmFyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZW5hdi10b29sYmFyLWJhY2tncm91bmQpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IHZhcigtLXRvb2xiYXItaGVpZ2h0KTtcbiAgcGFkZGluZzogMCB2YXIoLS1wYWRkaW5nKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaWRlbmF2LXRvb2xiYXIgLnRpdGxlIHtcbiAgdHJhbnNpdGlvbjogcGFkZGluZyB2YXIoLS10cmFucy1lYXNlLW91dC1kdXJhdGlvbikgdmFyKC0tdHJhbnMtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uKSwgb3BhY2l0eSB2YXIoLS10cmFucy1lYXNlLW91dC1kdXJhdGlvbikgdmFyKC0tdHJhbnMtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uKTtcbn1cblxuLnNpZGVuYXYtaXRlbXMge1xuICBwYWRkaW5nLXRvcDogdmFyKC0tcGFkZGluZyk7XG59IiwiLnNpZGVuYXYge1xuICBjb2xvcjogdmFyKC0tc2lkZW5hdi1jb2xvcik7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnMtZWFzZS1vdXQpO1xuICB3aWR0aDogdmFyKC0tc2lkZW5hdi13aWR0aCk7XG59XG5cbi5zaWRlbmF2LmNvbGxhcHNlZCB7XG4gIHdpZHRoOiB2YXIoLS1zaWRlbmF2LWNvbGxhcHNlZC13aWR0aCk7XG59XG5cbi5zaWRlbmF2LmNvbGxhcHNlZDpub3QoLm9wZW4pIC5zaWRlbmF2LXRvb2xiYXIgLnRpdGxlIHtcbiAgb3BhY2l0eTogMDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXNpZGVuYXYtaXRlbS1wYWRkaW5nKTtcbn1cblxuLnNpZGVuYXYuY29sbGFwc2VkOm5vdCgub3BlbikgOjpuZy1kZWVwIC5zaWRlbmF2LWl0ZW1zIC5pdGVtLWljb24ge1xuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tc2lkZW5hdi1pdGVtLXBhZGRpbmcpO1xufVxuXG4uc2lkZW5hdi5jb2xsYXBzZWQ6bm90KC5vcGVuKSA6Om5nLWRlZXAgLnNpZGVuYXYtaXRlbXMgLnN1YmhlYWRpbmcsIC5zaWRlbmF2LmNvbGxhcHNlZDpub3QoLm9wZW4pIDo6bmctZGVlcCAuc2lkZW5hdi1pdGVtcyAuaXRlbS1iYWRnZSwgLnNpZGVuYXYuY29sbGFwc2VkOm5vdCgub3BlbikgOjpuZy1kZWVwIC5zaWRlbmF2LWl0ZW1zIC5pdGVtLWxhYmVsIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnNpZGVuYXYuY29sbGFwc2VkOm5vdCgub3BlbikgOjpuZy1kZWVwIC5zaW1wbGViYXItdHJhY2suc2ltcGxlYmFyLXZlcnRpY2FsIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlbmF2LmNvbGxhcHNlZCA6Om5nLWRlZXAgLnN1YmhlYWRpbmcsIC5zaWRlbmF2LmNvbGxhcHNlZCA6Om5nLWRlZXAgLml0ZW0tYmFkZ2UsIC5zaWRlbmF2LmNvbGxhcHNlZCA6Om5nLWRlZXAgLml0ZW0tbGFiZWwge1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgdmFyKC0tdHJhbnMtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uKTtcbn1cblxuLnNpZGVuYXYuY29sbGFwc2VkLm9wZW4ge1xuICB3aWR0aDogdmFyKC0tc2lkZW5hdi13aWR0aCk7XG59XG5cbi5zaWRlbmF2LXRvb2xiYXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbmF2LXRvb2xiYXItYmFja2dyb3VuZCk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogdmFyKC0tdG9vbGJhci1oZWlnaHQpO1xuICBwYWRkaW5nOiAwIHZhcigtLXBhZGRpbmcpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNpZGVuYXYtdG9vbGJhciAudGl0bGUge1xuICB0cmFuc2l0aW9uOiBwYWRkaW5nIHZhcigtLXRyYW5zLWVhc2Utb3V0LWR1cmF0aW9uKSB2YXIoLS10cmFucy1lYXNlLW91dC10aW1pbmctZnVuY3Rpb24pLCBvcGFjaXR5IHZhcigtLXRyYW5zLWVhc2Utb3V0LWR1cmF0aW9uKSB2YXIoLS10cmFucy1lYXNlLW91dC10aW1pbmctZnVuY3Rpb24pO1xufVxuXG4uc2lkZW5hdi1pdGVtcyB7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1wYWRkaW5nKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/@vex/layout/sidenav/sidenav.component.ts":
  /*!******************************************************!*\
    !*** ./src/@vex/layout/sidenav/sidenav.component.ts ***!
    \******************************************************/

  /*! exports provided: SidenavComponent */

  /***/
  function srcVexLayoutSidenavSidenavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavComponent", function () {
      return SidenavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _utils_track_by__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../utils/track-by */
    "./src/@vex/utils/track-by.ts");
    /* harmony import */


    var _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/navigation.service */
    "./src/@vex/services/navigation.service.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_radio_button_checked__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-radio-button-checked */
    "./node_modules/@iconify/icons-ic/twotone-radio-button-checked.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_radio_button_checked__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_radio_button_checked__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _iconify_icons_ic_twotone_radio_button_unchecked__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-radio-button-unchecked */
    "./node_modules/@iconify/icons-ic/twotone-radio-button-unchecked.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_radio_button_unchecked__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_radio_button_unchecked__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _services_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/layout.service */
    "./src/@vex/services/layout.service.ts");
    /* harmony import */


    var _services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/config.service */
    "./src/@vex/services/config.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var SidenavComponent =
    /*#__PURE__*/
    function () {
      function SidenavComponent(navigationService, layoutService, configService) {
        _classCallCheck(this, SidenavComponent);

        this.navigationService = navigationService;
        this.layoutService = layoutService;
        this.configService = configService;
        this.collapsedOpen$ = this.layoutService.sidenavCollapsedOpen$;
        this.title$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (config) {
          return config.sidenav.title;
        }));
        this.imageUrl$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (config) {
          return config.sidenav.imageUrl;
        }));
        this.showCollapsePin$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (config) {
          return config.sidenav.showCollapsePin;
        }));
        this.items = this.navigationService.items;
        this.trackByRoute = _utils_track_by__WEBPACK_IMPORTED_MODULE_2__["trackByRoute"];
        this.icRadioButtonChecked = _iconify_icons_ic_twotone_radio_button_checked__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icRadioButtonUnchecked = _iconify_icons_ic_twotone_radio_button_unchecked__WEBPACK_IMPORTED_MODULE_5___default.a;
      }

      _createClass(SidenavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onMouseEnter",
        value: function onMouseEnter() {
          this.layoutService.collapseOpenSidenav();
        }
      }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
          this.layoutService.collapseCloseSidenav();
        }
      }, {
        key: "toggleCollapse",
        value: function toggleCollapse() {
          this.collapsed ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();
        }
      }]);

      return SidenavComponent;
    }();

    SidenavComponent.ctorParameters = function () {
      return [{
        type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]
      }, {
        type: _services_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"]
      }, {
        type: _services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SidenavComponent.prototype, "collapsed", void 0);
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-sidenav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidenav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/layout/sidenav/sidenav.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidenav.component.scss */
      "./src/@vex/layout/sidenav/sidenav.component.scss")).default]
    })], SidenavComponent);
    /***/
  },

  /***/
  "./src/@vex/layout/sidenav/sidenav.module.ts":
  /*!***************************************************!*\
    !*** ./src/@vex/layout/sidenav/sidenav.module.ts ***!
    \***************************************************/

  /*! exports provided: SidenavModule */

  /***/
  function srcVexLayoutSidenavSidenavModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavModule", function () {
      return SidenavModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sidenav.component */
    "./src/@vex/layout/sidenav/sidenav.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _components_sidenav_item_sidenav_item_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/sidenav-item/sidenav-item.module */
    "./src/@vex/components/sidenav-item/sidenav-item.module.ts");
    /* harmony import */


    var _components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/scrollbar/scrollbar.module */
    "./src/@vex/components/scrollbar/scrollbar.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");

    var SidenavModule = function SidenavModule() {
      _classCallCheck(this, SidenavModule);
    };

    SidenavModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _components_sidenav_item_sidenav_item_module__WEBPACK_IMPORTED_MODULE_5__["SidenavItemModule"], _components_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_6__["ScrollbarModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"]],
      exports: [_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"]]
    })], SidenavModule);
    /***/
  },

  /***/
  "./src/@vex/layout/toolbar/toolbar.component.scss":
  /*!********************************************************!*\
    !*** ./src/@vex/layout/toolbar/toolbar.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcVexLayoutToolbarToolbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  background: var(--toolbar-background);\n  box-sizing: border-box;\n  color: var(--toolbar-color);\n  display: block;\n  white-space: nowrap;\n  width: 100%;\n  z-index: var(--toolbar-z-index);\n}\n\n.toolbar {\n  height: var(--toolbar-height);\n}\n\n.mat-icon {\n  color: var(--toolbar-icon-color);\n}\n\na {\n  color: var(--toolbar-color);\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9AdmV4L2xheW91dC90b29sYmFyL0M6XFxVc2Vyc1xcQUJDRFxcc291cmNlXFxyZXBvc1xcRGVlcEJvdFxcRGVlcEJvdFxcQ2xpZW50QXBwL3NyY1xcQHZleFxcbGF5b3V0XFx0b29sYmFyXFx0b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL0B2ZXgvbGF5b3V0L3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtFQUNBLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL0B2ZXgvbGF5b3V0L3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdG9vbGJhci1iYWNrZ3JvdW5kKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6IHZhcigtLXRvb2xiYXItY29sb3IpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IHZhcigtLXRvb2xiYXItei1pbmRleCk7XG59XG5cbi50b29sYmFyIHtcbiAgaGVpZ2h0OiB2YXIoLS10b29sYmFyLWhlaWdodCk7XG59XG5cbi5tYXQtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS10b29sYmFyLWljb24tY29sb3IpO1xufVxuXG5hIHtcbiAgY29sb3I6IHZhcigtLXRvb2xiYXItY29sb3IpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59IiwiOmhvc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10b29sYmFyLWJhY2tncm91bmQpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogdmFyKC0tdG9vbGJhci1jb2xvcik7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogdmFyKC0tdG9vbGJhci16LWluZGV4KTtcbn1cblxuLnRvb2xiYXIge1xuICBoZWlnaHQ6IHZhcigtLXRvb2xiYXItaGVpZ2h0KTtcbn1cblxuLm1hdC1pY29uIHtcbiAgY29sb3I6IHZhcigtLXRvb2xiYXItaWNvbi1jb2xvcik7XG59XG5cbmEge1xuICBjb2xvcjogdmFyKC0tdG9vbGJhci1jb2xvcik7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/@vex/layout/toolbar/toolbar.component.ts":
  /*!******************************************************!*\
    !*** ./src/@vex/layout/toolbar/toolbar.component.ts ***!
    \******************************************************/

  /*! exports provided: ToolbarComponent */

  /***/
  function srcVexLayoutToolbarToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
      return ToolbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/layout.service */
    "./src/@vex/services/layout.service.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_bookmarks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-bookmarks */
    "./node_modules/@iconify/icons-ic/twotone-bookmarks.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_bookmarks__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_bookmarks__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _iconify_icons_emojione_flag_for_flag_united_states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @iconify/icons-emojione/flag-for-flag-united-states */
    "./node_modules/@iconify/icons-emojione/flag-for-flag-united-states.js");
    /* harmony import */


    var _iconify_icons_emojione_flag_for_flag_united_states__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_emojione_flag_for_flag_united_states__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _iconify_icons_emojione_flag_for_flag_germany__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-emojione/flag-for-flag-germany */
    "./node_modules/@iconify/icons-emojione/flag-for-flag-germany.js");
    /* harmony import */


    var _iconify_icons_emojione_flag_for_flag_germany__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_emojione_flag_for_flag_germany__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _iconify_icons_emojione_flag_for_flag_france__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @iconify/icons-emojione/flag-for-flag-france */
    "./node_modules/@iconify/icons-emojione/flag-for-flag-france.js");
    /* harmony import */


    var _iconify_icons_emojione_flag_for_flag_france__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_emojione_flag_for_flag_france__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-menu */
    "./node_modules/@iconify/icons-ic/twotone-menu.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/config.service */
    "./src/@vex/services/config.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-person-add */
    "./node_modules/@iconify/icons-ic/twotone-person-add.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _iconify_icons_ic_twotone_assignment_turned_in__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-assignment-turned-in */
    "./node_modules/@iconify/icons-ic/twotone-assignment-turned-in.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_assignment_turned_in__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_assignment_turned_in__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var _iconify_icons_ic_twotone_ballot__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-ballot */
    "./node_modules/@iconify/icons-ic/twotone-ballot.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_ballot__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_ballot__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-description */
    "./node_modules/@iconify/icons-ic/twotone-description.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-assignment */
    "./node_modules/@iconify/icons-ic/twotone-assignment.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_14___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var _iconify_icons_ic_twotone_receipt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-receipt */
    "./node_modules/@iconify/icons-ic/twotone-receipt.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_receipt__WEBPACK_IMPORTED_MODULE_15___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_receipt__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */


    var _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-done-all */
    "./node_modules/@iconify/icons-ic/twotone-done-all.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_16___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var _services_navigation_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../services/navigation.service */
    "./src/@vex/services/navigation.service.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-arrow-drop-down */
    "./node_modules/@iconify/icons-ic/twotone-arrow-drop-down.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_18___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */


    var _components_popover_popover_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../components/popover/popover.service */
    "./src/@vex/components/popover/popover.service.ts");
    /* harmony import */


    var _components_mega_menu_mega_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../components/mega-menu/mega-menu.component */
    "./src/@vex/components/mega-menu/mega-menu.component.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-search */
    "./node_modules/@iconify/icons-ic/twotone-search.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_21___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_21__);
    /* harmony import */


    var _app_Component_auth_reducers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../../../app/Component/auth/reducers */
    "./src/app/Component/auth/reducers/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var ToolbarComponent =
    /*#__PURE__*/
    function () {
      function ToolbarComponent(layoutService, configService, navigationService, popoverService, store) {
        _classCallCheck(this, ToolbarComponent);

        this.layoutService = layoutService;
        this.configService = configService;
        this.navigationService = navigationService;
        this.popoverService = popoverService;
        this.store = store;
        this.user$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_23__["select"])(_app_Component_auth_reducers__WEBPACK_IMPORTED_MODULE_22__["getUser"]));
        this.navigationItems = this.navigationService.items;
        this.isHorizontalLayout$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (config) {
          return config.layout === 'horizontal';
        }));
        this.isVerticalLayout$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (config) {
          return config.layout === 'vertical';
        }));
        this.isNavbarInToolbar$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (config) {
          return config.navbar.position === 'in-toolbar';
        }));
        this.isNavbarBelowToolbar$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (config) {
          return config.navbar.position === 'below-toolbar';
        }));
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_21___default.a;
        this.icBookmarks = _iconify_icons_ic_twotone_bookmarks__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.emojioneUS = _iconify_icons_emojione_flag_for_flag_united_states__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.emojioneDE = _iconify_icons_emojione_flag_for_flag_germany__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.emojioneFR = _iconify_icons_emojione_flag_for_flag_france__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icMenu = _iconify_icons_ic_twotone_menu__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icPersonAdd = _iconify_icons_ic_twotone_person_add__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.icAssignmentTurnedIn = _iconify_icons_ic_twotone_assignment_turned_in__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.icBallot = _iconify_icons_ic_twotone_ballot__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icDescription = _iconify_icons_ic_twotone_description__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.icAssignment = _iconify_icons_ic_twotone_assignment__WEBPACK_IMPORTED_MODULE_14___default.a;
        this.icReceipt = _iconify_icons_ic_twotone_receipt__WEBPACK_IMPORTED_MODULE_15___default.a;
        this.icDoneAll = _iconify_icons_ic_twotone_done_all__WEBPACK_IMPORTED_MODULE_16___default.a;
        this.icArrowDropDown = _iconify_icons_ic_twotone_arrow_drop_down__WEBPACK_IMPORTED_MODULE_18___default.a;
      }

      _createClass(ToolbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openQuickpanel",
        value: function openQuickpanel() {
          this.layoutService.openQuickpanel();
        }
      }, {
        key: "openSidenav",
        value: function openSidenav() {
          this.layoutService.openSidenav();
        }
      }, {
        key: "openMegaMenu",
        value: function openMegaMenu(origin) {
          this.popoverService.open({
            content: _components_mega_menu_mega_menu_component__WEBPACK_IMPORTED_MODULE_20__["MegaMenuComponent"],
            origin: origin,
            position: [{
              originX: 'start',
              originY: 'bottom',
              overlayX: 'start',
              overlayY: 'top'
            }, {
              originX: 'end',
              originY: 'bottom',
              overlayX: 'end',
              overlayY: 'top'
            }]
          });
        }
      }, {
        key: "openSearch",
        value: function openSearch() {
          this.layoutService.openSearch();
        }
      }]);

      return ToolbarComponent;
    }();

    ToolbarComponent.ctorParameters = function () {
      return [{
        type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
      }, {
        type: _services_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"]
      }, {
        type: _services_navigation_service__WEBPACK_IMPORTED_MODULE_17__["NavigationService"]
      }, {
        type: _components_popover_popover_service__WEBPACK_IMPORTED_MODULE_19__["PopoverService"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_23__["Store"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ToolbarComponent.prototype, "mobileQuery", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.shadow-b')], ToolbarComponent.prototype, "hasShadow", void 0);
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-toolbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./toolbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/@vex/layout/toolbar/toolbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./toolbar.component.scss */
      "./src/@vex/layout/toolbar/toolbar.component.scss")).default]
    })], ToolbarComponent);
    /***/
  },

  /***/
  "./src/@vex/layout/toolbar/toolbar.module.ts":
  /*!***************************************************!*\
    !*** ./src/@vex/layout/toolbar/toolbar.module.ts ***!
    \***************************************************/

  /*! exports provided: ToolbarModule */

  /***/
  function srcVexLayoutToolbarToolbarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarModule", function () {
      return ToolbarModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./toolbar.component */
    "./src/@vex/layout/toolbar/toolbar.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _components_toolbar_notifications_toolbar_notifications_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/toolbar-notifications/toolbar-notifications.module */
    "./src/@vex/components/toolbar-notifications/toolbar-notifications.module.ts");
    /* harmony import */


    var _components_toolbar_user_toolbar_user_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../components/toolbar-user/toolbar-user.module */
    "./src/@vex/components/toolbar-user/toolbar-user.module.ts");
    /* harmony import */


    var _components_toolbar_search_toolbar_search_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../components/toolbar-search/toolbar-search.module */
    "./src/@vex/components/toolbar-search/toolbar-search.module.ts");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../navigation/navigation.module */
    "./src/@vex/layout/navigation/navigation.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../components/navigation-item/navigation-item.module */
    "./src/@vex/components/navigation-item/navigation-item.module.ts");
    /* harmony import */


    var _components_mega_menu_mega_menu_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../components/mega-menu/mega-menu.module */
    "./src/@vex/components/mega-menu/mega-menu.module.ts");
    /* harmony import */


    var _directives_container_container_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../directives/container/container.module */
    "./src/@vex/directives/container/container.module.ts");

    var ToolbarModule = function ToolbarModule() {
      _classCallCheck(this, ToolbarModule);
    };

    ToolbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"], _components_toolbar_notifications_toolbar_notifications_module__WEBPACK_IMPORTED_MODULE_9__["ToolbarNotificationsModule"], _components_toolbar_user_toolbar_user_module__WEBPACK_IMPORTED_MODULE_10__["ToolbarUserModule"], _components_toolbar_search_toolbar_search_module__WEBPACK_IMPORTED_MODULE_11__["ToolbarSearchModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconModule"], _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_13__["NavigationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], _components_navigation_item_navigation_item_module__WEBPACK_IMPORTED_MODULE_15__["NavigationItemModule"], _components_mega_menu_mega_menu_module__WEBPACK_IMPORTED_MODULE_16__["MegaMenuModule"], _directives_container_container_module__WEBPACK_IMPORTED_MODULE_17__["ContainerModule"]],
      exports: [_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarComponent"]]
    })], ToolbarModule);
    /***/
  },

  /***/
  "./src/@vex/pipes/color/color-fade.module.ts":
  /*!***************************************************!*\
    !*** ./src/@vex/pipes/color/color-fade.module.ts ***!
    \***************************************************/

  /*! exports provided: ColorFadeModule */

  /***/
  function srcVexPipesColorColorFadeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorFadeModule", function () {
      return ColorFadeModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _color_fade_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./color-fade.pipe */
    "./src/@vex/pipes/color/color-fade.pipe.ts");

    var ColorFadeModule = function ColorFadeModule() {
      _classCallCheck(this, ColorFadeModule);
    };

    ColorFadeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_color_fade_pipe__WEBPACK_IMPORTED_MODULE_3__["ColorFadePipe"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_color_fade_pipe__WEBPACK_IMPORTED_MODULE_3__["ColorFadePipe"]]
    })], ColorFadeModule);
    /***/
  },

  /***/
  "./src/@vex/pipes/color/color-fade.pipe.ts":
  /*!*************************************************!*\
    !*** ./src/@vex/pipes/color/color-fade.pipe.ts ***!
    \*************************************************/

  /*! exports provided: ColorFadePipe */

  /***/
  function srcVexPipesColorColorFadePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorFadePipe", function () {
      return ColorFadePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! color */
    "./node_modules/color/index.js");
    /* harmony import */


    var color__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_2__);

    var ColorFadePipe =
    /*#__PURE__*/
    function () {
      function ColorFadePipe() {
        _classCallCheck(this, ColorFadePipe);
      }

      _createClass(ColorFadePipe, [{
        key: "transform",
        value: function transform(value, ratio) {
          return color__WEBPACK_IMPORTED_MODULE_2___default()(value).fade(ratio);
        }
      }]);

      return ColorFadePipe;
    }();

    ColorFadePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'colorFade'
    })], ColorFadePipe);
    /***/
  },

  /***/
  "./src/@vex/pipes/relative-date-time/relative-date-time.module.ts":
  /*!************************************************************************!*\
    !*** ./src/@vex/pipes/relative-date-time/relative-date-time.module.ts ***!
    \************************************************************************/

  /*! exports provided: RelativeDateTimeModule */

  /***/
  function srcVexPipesRelativeDateTimeRelativeDateTimeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RelativeDateTimeModule", function () {
      return RelativeDateTimeModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./relative-date-time.pipe */
    "./src/@vex/pipes/relative-date-time/relative-date-time.pipe.ts");

    var RelativeDateTimeModule = function RelativeDateTimeModule() {
      _classCallCheck(this, RelativeDateTimeModule);
    };

    RelativeDateTimeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_3__["RelativeDateTimePipe"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_relative_date_time_pipe__WEBPACK_IMPORTED_MODULE_3__["RelativeDateTimePipe"]]
    })], RelativeDateTimeModule);
    /***/
  },

  /***/
  "./src/@vex/pipes/relative-date-time/relative-date-time.pipe.ts":
  /*!**********************************************************************!*\
    !*** ./src/@vex/pipes/relative-date-time/relative-date-time.pipe.ts ***!
    \**********************************************************************/

  /*! exports provided: RelativeDateTimePipe */

  /***/
  function srcVexPipesRelativeDateTimeRelativeDateTimePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RelativeDateTimePipe", function () {
      return RelativeDateTimePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RelativeDateTimePipe =
    /*#__PURE__*/
    function () {
      function RelativeDateTimePipe() {
        _classCallCheck(this, RelativeDateTimePipe);
      }

      _createClass(RelativeDateTimePipe, [{
        key: "transform",
        value: function transform(value) {
          return value ? value.toRelative() : null;
        }
      }]);

      return RelativeDateTimePipe;
    }();

    RelativeDateTimePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'relativeDateTime'
    })], RelativeDateTimePipe);
    /***/
  },

  /***/
  "./src/@vex/services/config.service.ts":
  /*!*********************************************!*\
    !*** ./src/@vex/services/config.service.ts ***!
    \*********************************************/

  /*! exports provided: ConfigService */

  /***/
  function srcVexServicesConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
      return ConfigService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _utils_merge_deep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../utils/merge-deep */
    "./src/@vex/utils/merge-deep.ts");
    /* harmony import */


    var _layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./layout.service */
    "./src/@vex/services/layout.service.ts");
    /* harmony import */


    var _configs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./configs */
    "./src/@vex/services/configs.ts");
    /* harmony import */


    var _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../interfaces/config-name.model */
    "./src/@vex/interfaces/config-name.model.ts");

    var ConfigService =
    /*#__PURE__*/
    function () {
      function ConfigService(document, layoutService) {
        var _this18 = this;

        _classCallCheck(this, ConfigService);

        this.document = document;
        this.layoutService = layoutService;
        this.defaultConfig = _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_7__["ConfigName"].apollo;
        this.configs = _configs__WEBPACK_IMPORTED_MODULE_6__["configs"];
        this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.configs.find(function (c) {
          return c.id === _this18.defaultConfig;
        }));
        this.config$ = this._configSubject.asObservable();
        this.config$.subscribe(function (config) {
          return _this18._updateConfig(config);
        });
      }

      _createClass(ConfigService, [{
        key: "setConfig",
        value: function setConfig(config) {
          var settings = this.configs.find(function (c) {
            return c.id === config;
          });

          if (settings) {
            this._configSubject.next(settings);
          }
        }
      }, {
        key: "updateConfig",
        value: function updateConfig(config) {
          this._configSubject.next(Object(_utils_merge_deep__WEBPACK_IMPORTED_MODULE_4__["mergeDeep"])(Object.assign({}, this._configSubject.getValue()), config));
        }
      }, {
        key: "_updateConfig",
        value: function _updateConfig(config) {
          var body = this.document.body;
          this.configs.forEach(function (c) {
            if (body.classList.contains(c.id)) {
              body.classList.remove(c.id);
            }
          });
          body.classList.add(config.id);
          config.sidenav.state === 'expanded' ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav(); // Workaround so charts and other externals know they have to resize on Layout switch

          if (window) {
            window.dispatchEvent(new Event('resize'));
            setTimeout(function () {
              window.dispatchEvent(new Event('resize'));
            }, 200);
          }
        }
      }]);

      return ConfigService;
    }();

    ConfigService.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }, {
        type: _layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"]
      }];
    };

    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]))], ConfigService);
    /***/
  },

  /***/
  "./src/@vex/services/configs.ts":
  /*!**************************************!*\
    !*** ./src/@vex/services/configs.ts ***!
    \**************************************/

  /*! exports provided: configs */

  /***/
  function srcVexServicesConfigsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "configs", function () {
      return configs;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _utils_merge_deep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utils/merge-deep */
    "./src/@vex/utils/merge-deep.ts");
    /* harmony import */


    var _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../interfaces/config-name.model */
    "./src/@vex/interfaces/config-name.model.ts");

    var defaultConfig = {
      id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_2__["ConfigName"].apollo,
      name: 'Apollo',
      imgSrc: 'assets/img/logo-rounded.svg',
      layout: 'horizontal',
      boxed: false,
      sidenav: {
        title: 'DEEPBOT',
        imageUrl: 'assets/img/logo-rounded.svg',
        showCollapsePin: false,
        state: 'collapsed'
      },
      toolbar: {
        fixed: true
      },
      navbar: {
        position: 'below-toolbar'
      },
      footer: {
        visible: true,
        fixed: true
      }
    };
    var configs = [defaultConfig, Object(_utils_merge_deep__WEBPACK_IMPORTED_MODULE_1__["mergeDeep"])(Object.assign({}, defaultConfig), {
      id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_2__["ConfigName"].hermes,
      name: 'Hermes',
      imgSrc: '//vex-landing.visurel.com/assets/img/layouts/hermes.png',
      layout: 'vertical',
      boxed: true,
      toolbar: {
        fixed: false
      },
      footer: {
        fixed: false
      }
    }), Object(_utils_merge_deep__WEBPACK_IMPORTED_MODULE_1__["mergeDeep"])(Object.assign({}, defaultConfig), {
      id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_2__["ConfigName"].ares,
      name: 'Ares',
      imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ares.png',
      toolbar: {
        fixed: false
      },
      navbar: {
        position: 'in-toolbar'
      },
      footer: {
        fixed: false
      }
    }), Object(_utils_merge_deep__WEBPACK_IMPORTED_MODULE_1__["mergeDeep"])(Object.assign({}, defaultConfig), {
      id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_2__["ConfigName"].zeus,
      name: 'Zeus',
      imgSrc: '//vex-landing.visurel.com/assets/img/layouts/zeus.png',
      sidenav: {
        state: 'collapsed'
      }
    }), Object(_utils_merge_deep__WEBPACK_IMPORTED_MODULE_1__["mergeDeep"])(Object.assign({}, defaultConfig), {
      id: _interfaces_config_name_model__WEBPACK_IMPORTED_MODULE_2__["ConfigName"].ikaros,
      name: 'Ikaros',
      imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ikaros.png',
      layout: 'vertical',
      boxed: true,
      toolbar: {
        fixed: false
      },
      navbar: {
        position: 'in-toolbar'
      },
      footer: {
        fixed: false
      }
    })];
    /***/
  },

  /***/
  "./src/@vex/services/layout.service.ts":
  /*!*********************************************!*\
    !*** ./src/@vex/services/layout.service.ts ***!
    \*********************************************/

  /*! exports provided: LayoutService */

  /***/
  function srcVexServicesLayoutServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutService", function () {
      return LayoutService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LayoutService =
    /*#__PURE__*/
    function () {
      function LayoutService(router) {
        _classCallCheck(this, LayoutService);

        this.router = router;
        this._quickpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.quickpanelOpen$ = this._quickpanelOpenSubject.asObservable();
        this._sidenavOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.sidenavOpen$ = this._sidenavOpenSubject.asObservable();
        this._sidenavCollapsedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.sidenavCollapsed$ = this._sidenavCollapsedSubject.asObservable();
        this._sidenavCollapsedOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.sidenavCollapsedOpen$ = this._sidenavCollapsedOpenSubject.asObservable();
        this._configpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.configpanelOpen$ = this._configpanelOpenSubject.asObservable();
        this._searchOpen = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.searchOpen$ = this._searchOpen.asObservable();
      }

      _createClass(LayoutService, [{
        key: "openQuickpanel",
        value: function openQuickpanel() {
          this._quickpanelOpenSubject.next(true);
        }
      }, {
        key: "closeQuickpanel",
        value: function closeQuickpanel() {
          this._quickpanelOpenSubject.next(false);
        }
      }, {
        key: "openSidenav",
        value: function openSidenav() {
          this._sidenavOpenSubject.next(true);
        }
      }, {
        key: "closeSidenav",
        value: function closeSidenav() {
          this._sidenavOpenSubject.next(false);
        }
      }, {
        key: "collapseSidenav",
        value: function collapseSidenav() {
          this._sidenavCollapsedSubject.next(true);
        }
      }, {
        key: "expandSidenav",
        value: function expandSidenav() {
          this._sidenavCollapsedSubject.next(false);
        }
      }, {
        key: "collapseOpenSidenav",
        value: function collapseOpenSidenav() {
          this._sidenavCollapsedOpenSubject.next(true);
        }
      }, {
        key: "collapseCloseSidenav",
        value: function collapseCloseSidenav() {
          this._sidenavCollapsedOpenSubject.next(false);
        }
      }, {
        key: "openConfigpanel",
        value: function openConfigpanel() {
          this._configpanelOpenSubject.next(true);
        }
      }, {
        key: "closeConfigpanel",
        value: function closeConfigpanel() {
          this._configpanelOpenSubject.next(false);
        }
      }, {
        key: "openSearch",
        value: function openSearch() {
          this._searchOpen.next(true);
        }
      }, {
        key: "closeSearch",
        value: function closeSearch() {
          this._searchOpen.next(false);
        }
      }, {
        key: "enableRTL",
        value: function enableRTL() {
          this.router.navigate([], {
            queryParams: {
              rtl: 'true'
            }
          }).then(function () {
            if (window) {
              window.location.reload();
            }
          });
        }
      }, {
        key: "disableRTL",
        value: function disableRTL() {
          this.router.navigate([], {
            queryParams: {
              rtl: 'false'
            }
          }).then(function () {
            if (window) {
              window.location.reload();
            }
          });
        }
      }]);

      return LayoutService;
    }();

    LayoutService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LayoutService);
    /***/
  },

  /***/
  "./src/@vex/services/navigation.service.ts":
  /*!*************************************************!*\
    !*** ./src/@vex/services/navigation.service.ts ***!
    \*************************************************/

  /*! exports provided: NavigationService */

  /***/
  function srcVexServicesNavigationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
      return NavigationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var NavigationService =
    /*#__PURE__*/
    function () {
      function NavigationService() {
        _classCallCheck(this, NavigationService);

        this.items = [];
        this._openChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.openChange$ = this._openChangeSubject.asObservable();
      }

      _createClass(NavigationService, [{
        key: "triggerOpenChange",
        value: function triggerOpenChange(item) {
          this._openChangeSubject.next(item);
        }
      }, {
        key: "isLink",
        value: function isLink(item) {
          return item.type === 'link';
        }
      }, {
        key: "isDropdown",
        value: function isDropdown(item) {
          return item.type === 'dropdown';
        }
      }, {
        key: "isSubheading",
        value: function isSubheading(item) {
          return item.type === 'subheading';
        }
      }]);

      return NavigationService;
    }();

    NavigationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NavigationService);
    /***/
  },

  /***/
  "./src/@vex/services/search.service.ts":
  /*!*********************************************!*\
    !*** ./src/@vex/services/search.service.ts ***!
    \*********************************************/

  /*! exports provided: SearchService */

  /***/
  function srcVexServicesSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchService", function () {
      return SearchService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SearchService = function SearchService() {
      _classCallCheck(this, SearchService);

      this.valueChangesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
      this.valueChanges$ = this.valueChangesSubject.asObservable();
      this.submitSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      this.submit$ = this.submitSubject.asObservable();
      this.isOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
      this.isOpen$ = this.isOpenSubject.asObservable();
    };

    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SearchService);
    /***/
  },

  /***/
  "./src/@vex/services/splash-screen.service.ts":
  /*!****************************************************!*\
    !*** ./src/@vex/services/splash-screen.service.ts ***!
    \****************************************************/

  /*! exports provided: SplashScreenService */

  /***/
  function srcVexServicesSplashScreenServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplashScreenService", function () {
      return SplashScreenService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var SplashScreenService =
    /*#__PURE__*/
    function () {
      function SplashScreenService(router, document, animationBuilder) {
        var _this19 = this;

        _classCallCheck(this, SplashScreenService);

        this.router = router;
        this.document = document;
        this.animationBuilder = animationBuilder;
        this.splashScreenElem = this.document.body.querySelector('#vex-splash-screen');

        if (this.splashScreenElem) {
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function () {
            return _this19.hide();
          });
        }
      }

      _createClass(SplashScreenService, [{
        key: "hide",
        value: function hide() {
          var _this20 = this;

          var player = this.animationBuilder.build([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
            opacity: 1
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('400ms cubic-bezier(0.25, 0.8, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
            opacity: 0
          }))]).create(this.splashScreenElem);
          player.onDone(function () {
            return _this20.splashScreenElem.remove();
          });
          player.play();
        }
      }]);

      return SplashScreenService;
    }();

    SplashScreenService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }, {
        type: _angular_animations__WEBPACK_IMPORTED_MODULE_5__["AnimationBuilder"]
      }];
    };

    SplashScreenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]))], SplashScreenService);
    /***/
  },

  /***/
  "./src/@vex/services/style.service.ts":
  /*!********************************************!*\
    !*** ./src/@vex/services/style.service.ts ***!
    \********************************************/

  /*! exports provided: Style, StyleService */

  /***/
  function srcVexServicesStyleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Style", function () {
      return Style;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StyleService", function () {
      return StyleService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-take-until-destroy */
    "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");

    var Style;

    (function (Style) {
      Style["light"] = "vex-style-light";
      Style["default"] = "vex-style-default";
      Style["dark"] = "vex-style-dark";
    })(Style || (Style = {}));

    var StyleService =
    /*#__PURE__*/
    function () {
      function StyleService(document) {
        var _this21 = this;

        _classCallCheck(this, StyleService);

        this.document = document;
        this.defaultStyle = Style.default;
        this._styleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.defaultStyle);
        this.style$ = this._styleSubject.asObservable();
        this.style$.pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).subscribe(function (style) {
          return _this21._updateStyle(style);
        });
      }

      _createClass(StyleService, [{
        key: "setStyle",
        value: function setStyle(style) {
          this._styleSubject.next(style);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "_updateStyle",
        value: function _updateStyle(style) {
          var body = this.document.body;
          Object.values(Style).filter(function (s) {
            return s !== style;
          }).forEach(function (value) {
            if (body.classList.contains(value)) {
              body.classList.remove(value);
            }
          });
          body.classList.add(style);
        }
      }]);

      return StyleService;
    }();

    StyleService.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };

    StyleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))], StyleService);
    /***/
  },

  /***/
  "./src/@vex/utils/check-router-childs-data.ts":
  /*!****************************************************!*\
    !*** ./src/@vex/utils/check-router-childs-data.ts ***!
    \****************************************************/

  /*! exports provided: checkRouterChildsData */

  /***/
  function srcVexUtilsCheckRouterChildsDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "checkRouterChildsData", function () {
      return checkRouterChildsData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function checkRouterChildsData(route, compareWith) {
      if (compareWith(route.data)) {
        return true;
      }

      if (!route.firstChild) {
        return false;
      }

      return checkRouterChildsData(route.firstChild, compareWith);
    }
    /***/

  },

  /***/
  "./src/@vex/utils/merge-deep.ts":
  /*!**************************************!*\
    !*** ./src/@vex/utils/merge-deep.ts ***!
    \**************************************/

  /*! exports provided: mergeDeep */

  /***/
  function srcVexUtilsMergeDeepTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mergeDeep", function () {
      return mergeDeep;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /**
     * Performs a deep merge of `source` into `target`.
     * Mutates `target` only but not its objects and arrays.
     *
     * @author inspired by [jhildenbiddle](https://stackoverflow.com/a/48218209).
     */


    function mergeDeep(target, source) {
      var isObject = function isObject(obj) {
        return obj && typeof obj === 'object';
      };

      if (!isObject(target) || !isObject(source)) {
        return source;
      }

      Object.keys(source).forEach(function (key) {
        var targetValue = target[key];
        var sourceValue = source[key];

        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
          target[key] = targetValue.concat(sourceValue);
        } else if (isObject(targetValue) && isObject(sourceValue)) {
          target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
        } else {
          target[key] = sourceValue;
        }
      });
      return target;
    }
    /***/

  },

  /***/
  "./src/@vex/utils/tailwindcss.ts":
  /*!***************************************!*\
    !*** ./src/@vex/utils/tailwindcss.ts ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcVexUtilsTailwindcssTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! tailwindcss/resolveConfig */
    "./node_modules/tailwindcss/resolveConfig.js");
    /* harmony import */


    var tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _tailwind_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../tailwind.config */
    "./tailwind.config.js");
    /* harmony import */


    var _tailwind_config__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_tailwind_config__WEBPACK_IMPORTED_MODULE_2__);

    var theme = tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1___default()(_tailwind_config__WEBPACK_IMPORTED_MODULE_2___default.a).theme;
    /* harmony default export */

    __webpack_exports__["default"] = theme;
    /***/
  },

  /***/
  "./src/@vex/utils/track-by.ts":
  /*!************************************!*\
    !*** ./src/@vex/utils/track-by.ts ***!
    \************************************/

  /*! exports provided: trackByRoute, trackById, trackByKey, trackByValue, trackByLabel */

  /***/
  function srcVexUtilsTrackByTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "trackByRoute", function () {
      return trackByRoute;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "trackById", function () {
      return trackById;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "trackByKey", function () {
      return trackByKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "trackByValue", function () {
      return trackByValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "trackByLabel", function () {
      return trackByLabel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function trackByRoute(index, item) {
      return item.route;
    }

    function trackById(index, item) {
      return item.id;
    }

    function trackByKey(index, item) {
      return item.key;
    }

    function trackByValue(index, value) {
      return value;
    }

    function trackByLabel(index, value) {
      return value.label;
    }
    /***/

  },

  /***/
  "./src/@vex/vex.module.ts":
  /*!********************************!*\
    !*** ./src/@vex/vex.module.ts ***!
    \********************************/

  /*! exports provided: VexModule */

  /***/
  function srcVexVexModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VexModule", function () {
      return VexModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout/layout.module */
    "./src/@vex/layout/layout.module.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");

    var VexModule = function VexModule() {
      _classCallCheck(this, VexModule);
    };

    VexModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"]],
      exports: [_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"]],
      providers: [{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
        useValue: {
          appearance: 'fill'
        }
      }]
    })], VexModule);
    /***/
  },

  /***/
  "./src/app/Component/auth.module.ts":
  /*!******************************************!*\
    !*** ./src/app/Component/auth.module.ts ***!
    \******************************************/

  /*! exports provided: COMPONENTS, AuthModule */

  /***/
  function srcAppComponentAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COMPONENTS", function () {
      return COMPONENTS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/Component/home/home.component.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _auth_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/reducers */
    "./src/app/Component/auth/reducers/index.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _auth_effects_auth_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/effects/auth.effects */
    "./src/app/Component/auth/effects/auth.effects.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_vex_layout_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/@vex/layout/layout.module */
    "./src/@vex/layout/layout.module.ts");
    /* harmony import */


    var src_vex_layout_sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/@vex/layout/sidenav/sidenav.module */
    "./src/@vex/layout/sidenav/sidenav.module.ts");
    /* harmony import */


    var src_vex_layout_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/@vex/layout/toolbar/toolbar.module */
    "./src/@vex/layout/toolbar/toolbar.module.ts");
    /* harmony import */


    var src_vex_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/@vex/components/footer/footer.module */
    "./src/@vex/components/footer/footer.module.ts");
    /* harmony import */


    var src_vex_components_config_panel_config_panel_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/@vex/components/config-panel/config-panel.module */
    "./src/@vex/components/config-panel/config-panel.module.ts");
    /* harmony import */


    var src_vex_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/@vex/components/sidebar/sidebar.module */
    "./src/@vex/components/sidebar/sidebar.module.ts");
    /* harmony import */


    var src_vex_components_quickpanel_quickpanel_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/@vex/components/quickpanel/quickpanel.module */
    "./src/@vex/components/quickpanel/quickpanel.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var COMPONENTS = [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]];

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('auth', _auth_reducers__WEBPACK_IMPORTED_MODULE_4__["reducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_auth_effects_auth_effects__WEBPACK_IMPORTED_MODULE_6__["AuthEffects"]]), _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], src_vex_layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"], src_vex_layout_sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_9__["SidenavModule"], src_vex_layout_toolbar_toolbar_module__WEBPACK_IMPORTED_MODULE_10__["ToolbarModule"], src_vex_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_11__["FooterModule"], src_vex_components_config_panel_config_panel_module__WEBPACK_IMPORTED_MODULE_12__["ConfigPanelModule"], src_vex_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_13__["SidebarModule"], src_vex_components_quickpanel_quickpanel_module__WEBPACK_IMPORTED_MODULE_14__["QuickpanelModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"]],
      declarations: COMPONENTS
    })], AuthModule);
    /***/
  },

  /***/
  "./src/app/Component/auth/actions/auth.actions.ts":
  /*!********************************************************!*\
    !*** ./src/app/Component/auth/actions/auth.actions.ts ***!
    \********************************************************/

  /*! exports provided: loginSuccess, login, loginFailure, getUser, getUserSuccess */

  /***/
  function srcAppComponentAuthActionsAuthActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loginSuccess", function () {
      return loginSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "login", function () {
      return login;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loginFailure", function () {
      return loginFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getUser", function () {
      return getUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getUserSuccess", function () {
      return getUserSuccess;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var loginSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[AUTH/LOGIN] Login Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var login = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[AUTH/LOGIN] Login', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var loginFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[AUTH/LOGIN] Login Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[AUTH] GET USER');
    var getUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[AUTH] GET USER SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    /***/
  },

  /***/
  "./src/app/Component/auth/actions/index.ts":
  /*!*************************************************!*\
    !*** ./src/app/Component/auth/actions/index.ts ***!
    \*************************************************/

  /*! exports provided: AuthActions */

  /***/
  function srcAppComponentAuthActionsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.actions */
    "./src/app/Component/auth/actions/auth.actions.ts");
    /* harmony reexport (module object) */


    __webpack_require__.d(__webpack_exports__, "AuthActions", function () {
      return _auth_actions__WEBPACK_IMPORTED_MODULE_1__;
    });
    /***/

  },

  /***/
  "./src/app/Component/auth/effects/auth.effects.ts":
  /*!********************************************************!*\
    !*** ./src/app/Component/auth/effects/auth.effects.ts ***!
    \********************************************************/

  /*! exports provided: AuthEffects */

  /***/
  function srcAppComponentAuthEffectsAuthEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthEffects", function () {
      return AuthEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/auth.services */
    "./src/app/Component/auth/services/auth.services.ts");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../actions */
    "./src/app/Component/auth/actions/index.ts");
    /* harmony import */


    var src_app_service_TalkService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/service/TalkService */
    "./src/app/service/TalkService.ts");

    var AuthEffects = function AuthEffects(actions$, authService, router, deeptalk) {
      var _this22 = this;

      _classCallCheck(this, AuthEffects);

      this.actions$ = actions$;
      this.authService = authService;
      this.router = router;
      this.deeptalk = deeptalk;
      this.login$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
        return _this22.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_7__["AuthActions"].login), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) {
          return action.user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (user) {
          return _this22.authService.login(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            return _actions__WEBPACK_IMPORTED_MODULE_7__["AuthActions"].loginSuccess({
              user: user
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions__WEBPACK_IMPORTED_MODULE_7__["AuthActions"].loginFailure({
              error: error
            }));
          }));
        }));
      });
      this.loginSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
        return _this22.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_7__["AuthActions"].loginSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) {
          return action.user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) {
          var token = user.token;
          localStorage.setItem('DeepBot', token);

          _this22.router.navigate(['/']);
        }));
      }, {
        dispatch: false
      });
      this.loginFailure$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
        return _this22.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_7__["AuthActions"].loginFailure), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) {
          return action.error;
        }));
      });
      this.fetchUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
        return _this22.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_7__["AuthActions"].getUser), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) {
          return action;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function () {
          return _this22.authService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (account) {
            return _actions__WEBPACK_IMPORTED_MODULE_7__["AuthActions"].getUserSuccess({
              account: account
            });
          }));
        }));
      });
      this.fetchUserSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
        return _this22.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_7__["AuthActions"].getUserSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) {
          return action.account;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (account) {
          _this22.deeptalk.startConnection();
        }));
      }, {
        dispatch: false
      });
    };

    AuthEffects.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
      }, {
        type: _services_auth_services__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_service_TalkService__WEBPACK_IMPORTED_MODULE_8__["TalkService"]
      }];
    };

    AuthEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthEffects);
    /***/
  },

  /***/
  "./src/app/Component/auth/login/login.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/Component/auth/login/login.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentAuthLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/Component/auth/login/login.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/Component/auth/login/login.component.ts ***!
    \*********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-visibility */
    "./node_modules/@iconify/icons-ic/twotone-visibility.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-visibility-off */
    "./node_modules/@iconify/icons-ic/twotone-visibility-off.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../@vex/animations/fade-in-up.animation */
    "./src/@vex/animations/fade-in-up.animation.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../actions */
    "./src/app/Component/auth/actions/index.ts");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, fb, cd, snackbar, http, toastr, store) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.fb = fb;
        this.cd = cd;
        this.snackbar = snackbar;
        this.http = http;
        this.toastr = toastr;
        this.store = store;
        this.inputType = 'password';
        this.visible = false;
        this.icVisibility = _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icVisibilityOff = _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_6___default.a;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "send",
        value: function send() {
          var user = {
            userName: this.form.controls["email"].value,
            userPassword: this.form.controls["password"].value,
            userEmail: ''
          };
          this.store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_11__["AuthActions"].login({
            user: user
          })); // this.http.post<User>(environment.apiURL + 'User/Login', body, httpOptions).subscribe(
          //     (result: any) => {
          //         localStorage.setItem('DeepBot', result.token);
          //         this.router.navigateByUrl('');
          //     },
          //     (err) => { }
          // );
        }
      }, {
        key: "toggleVisibility",
        value: function toggleVisibility() {
          if (this.visible) {
            this.inputType = 'password';
            this.visible = false;
            this.cd.markForCheck();
          } else {
            this.inputType = 'text';
            this.visible = true;
            this.cd.markForCheck();
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Component/auth/login/login.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      animations: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_7__["fadeInUp400ms"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/Component/auth/login/login.component.scss")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/Component/auth/reducers/auth.reducers.ts":
  /*!**********************************************************!*\
    !*** ./src/app/Component/auth/reducers/auth.reducers.ts ***!
    \**********************************************************/

  /*! exports provided: initialState, reducer, getUser, getError, getPending */

  /***/
  function srcAppComponentAuthReducersAuthReducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getUser", function () {
      return getUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getError", function () {
      return getError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getPending", function () {
      return getPending;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions */
    "./src/app/Component/auth/actions/index.ts");

    var initialState = {
      account: null,
      error: null,
      pending: false
    };
    var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["AuthActions"].login, function (state) {
      return Object.assign({}, state, {
        pending: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["AuthActions"].loginSuccess, function (state, _ref6) {
      var user = _ref6.user;
      return Object.assign({}, state, {
        user: user,
        pending: false
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["AuthActions"].loginFailure, function (state, _ref7) {
      var error = _ref7.error;
      return Object.assign({}, state, {
        error: error,
        pending: false
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["AuthActions"].getUser, function (state) {
      return Object.assign({}, state, {
        pending: true
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["AuthActions"].getUserSuccess, function (state, _ref8) {
      var account = _ref8.account;
      return Object.assign({}, state, {
        account: account,
        pending: false
      });
    }));

    var getUser = function getUser(state) {
      return state.account;
    };

    var getError = function getError(state) {
      return state.error;
    };

    var getPending = function getPending(state) {
      return state.pending;
    };
    /***/

  },

  /***/
  "./src/app/Component/auth/reducers/index.ts":
  /*!**************************************************!*\
    !*** ./src/app/Component/auth/reducers/index.ts ***!
    \**************************************************/

  /*! exports provided: reducers, selectAuthState, selectAuthStatusState, getUser, getError, getPending */

  /***/
  function srcAppComponentAuthReducersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectAuthState", function () {
      return selectAuthState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectAuthStatusState", function () {
      return selectAuthStatusState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getUser", function () {
      return getUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getError", function () {
      return getError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getPending", function () {
      return getPending;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _reducers_auth_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../reducers/auth.reducers */
    "./src/app/Component/auth/reducers/auth.reducers.ts");

    function reducers(state, action) {
      return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
        status: _reducers_auth_reducers__WEBPACK_IMPORTED_MODULE_2__["reducer"]
      })(state, action);
    }

    var selectAuthState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('auth');
    var selectAuthStatusState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAuthState, function (state) {
      return state.status;
    });
    var getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAuthStatusState, _reducers_auth_reducers__WEBPACK_IMPORTED_MODULE_2__["getUser"]);
    var getError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAuthStatusState, _reducers_auth_reducers__WEBPACK_IMPORTED_MODULE_2__["getError"]);
    var getPending = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectAuthStatusState, _reducers_auth_reducers__WEBPACK_IMPORTED_MODULE_2__["getPending"]);
    /***/
  },

  /***/
  "./src/app/Component/auth/register/register.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/Component/auth/register/register.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentAuthRegisterRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/Component/auth/register/register.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Component/auth/register/register.component.ts ***!
    \***************************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentAuthRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-visibility */
    "./node_modules/@iconify/icons-ic/twotone-visibility.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-visibility-off */
    "./node_modules/@iconify/icons-ic/twotone-visibility-off.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../@vex/animations/fade-in-up.animation */
    "./src/@vex/animations/fade-in-up.animation.ts");
    /* harmony import */


    var _webModel_UserModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../webModel/UserModel */
    "./src/webModel/UserModel.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(router, fb, cd, http) {
        _classCallCheck(this, RegisterComponent);

        this.router = router;
        this.fb = fb;
        this.cd = cd;
        this.http = http;
        this.userToCreate = new _webModel_UserModel__WEBPACK_IMPORTED_MODULE_7__["User"]();
        this.inputType = 'password';
        this.visible = false;
        this.icVisibility = _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icVisibilityOff = _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_3___default.a;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            passwordConfirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        }
      }, {
        key: "CreateAccount",
        value: function CreateAccount() {
          var body = JSON.stringify(this.userToCreate);
          this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiURL + 'User/Register', body, httpOptions).subscribe(function (result) {
            console.log(result);
          }, function (err) {});
        }
      }, {
        key: "toggleVisibility",
        value: function toggleVisibility() {
          if (this.visible) {
            this.inputType = 'password';
            this.visible = false;
            this.cd.markForCheck();
          } else {
            this.inputType = 'text';
            this.visible = true;
            this.cd.markForCheck();
          }
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Component/auth/register/register.component.html")).default,
      animations: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_6__["fadeInUp400ms"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.scss */
      "./src/app/Component/auth/register/register.component.scss")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/Component/auth/services/auth.services.ts":
  /*!**********************************************************!*\
    !*** ./src/app/Component/auth/services/auth.services.ts ***!
    \**********************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppComponentAuthServicesAuthServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http, store) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.store = store;
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(_ref9) {
          var userName = _ref9.userName,
              userPassword = _ref9.userPassword;
          var body = {
            UserName: userName,
            Password: userPassword
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL, "User/Login"), body, httpOptions);
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL, "User/getUser"));
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('DeepBot');
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/Component/home/home.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/Component/home/home.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Component/home/home.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/Component/home/home.component.ts ***!
    \**************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _vex_services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../@vex/services/layout.service */
    "./src/@vex/services/layout.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../@vex/utils/check-router-childs-data */
    "./src/@vex/utils/check-router-childs-data.ts");
    /* harmony import */


    var _vex_services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../@vex/services/config.service */
    "./src/@vex/services/config.service.ts");
    /* harmony import */


    var _vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../@vex/utils/tailwindcss */
    "./src/@vex/utils/tailwindcss.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _auth_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../auth/actions */
    "./src/app/Component/auth/actions/index.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(layoutService, configService, breakpointObserver, router, store) {
        var _this23 = this;

        _classCallCheck(this, HomeComponent);

        this.layoutService = layoutService;
        this.configService = configService;
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.store = store;
        this.sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
        this.isFooterVisible$ = this.configService.config$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (config) {
          return config.footer.visible;
        }));
        this.isDesktop$ = this.breakpointObserver.observe("(min-width: ".concat(_vex_utils_tailwindcss__WEBPACK_IMPORTED_MODULE_8__["default"].screens.lg, ")")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (state) {
          return state.matches;
        }));
        this.toolbarShadowEnabled$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
          return Object(_vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_6__["checkRouterChildsData"])(_this23.router.routerState.root.snapshot, function (data) {
            return data.toolbarShadowEnabled;
          });
        }));
        this.store.dispatch(_auth_actions__WEBPACK_IMPORTED_MODULE_10__["AuthActions"].getUser());
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.layoutService.configpanelOpen$.pipe(
          //     untilDestroyed(this)
          // ).subscribe(open => open ? this.configpanel.open() : this.configpanel.close());
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _vex_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]
      }, {
        type: _vex_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('configpanel', {
      static: true
    })], HomeComponent.prototype, "configpanel", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Component/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/Component/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/Service/user.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/Service/user.service.ts ***!
    \*****************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServiceUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _webModel_UserModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../webModel/UserModel */
    "./src/webModel/UserModel.ts");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.user = new _webModel_UserModel__WEBPACK_IMPORTED_MODULE_3__["User"]();
      }

      _createClass(UserService, [{
        key: "roleMatch",
        value: function roleMatch(allowedRoles) {
          var isMatch = false;
          var payLoad = JSON.parse(window.atob(localStorage.getItem('DeepBot').split('.')[1]));
          var userRole = payLoad.role;
          allowedRoles.forEach(function (element) {
            if (userRole == element) {
              isMatch = true;
              return false;
            }
          });
          return isMatch;
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UserService);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _vex_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../@vex/services/config.service */
    "./src/@vex/services/config.service.ts");
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! luxon */
    "./node_modules/luxon/build/cjs-browser/luxon.js");
    /* harmony import */


    var luxon__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _vex_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../@vex/services/navigation.service */
    "./src/@vex/services/navigation.service.ts");
    /* harmony import */


    var _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @iconify/icons-ic/twotone-layers */
    "./node_modules/@iconify/icons-ic/twotone-layers.js");
    /* harmony import */


    var _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(_iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _vex_services_layout_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../@vex/services/layout.service */
    "./src/@vex/services/layout.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _vex_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../@vex/services/splash-screen.service */
    "./src/@vex/services/splash-screen.service.ts");
    /* harmony import */


    var _vex_services_style_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../@vex/services/style.service */
    "./src/@vex/services/style.service.ts");

    var AppComponent = function AppComponent(configService, styleService, renderer, platform, document, localeId, layoutService, route, navigationService, splashScreenService) {
      var _this24 = this;

      _classCallCheck(this, AppComponent);

      this.configService = configService;
      this.styleService = styleService;
      this.renderer = renderer;
      this.platform = platform;
      this.document = document;
      this.localeId = localeId;
      this.layoutService = layoutService;
      this.route = route;
      this.navigationService = navigationService;
      this.splashScreenService = splashScreenService;
      this.title = 'vex';
      luxon__WEBPACK_IMPORTED_MODULE_3__["Settings"].defaultLocale = this.localeId;

      if (this.platform.BLINK) {
        this.renderer.addClass(this.document.body, 'is-blink');
      }
      /**
       * Customize the template to your needs with the ConfigService
       * Example:
       *  this.configService.updateConfig({
       *    sidenav: {
       *      title: 'Custom App',
       *      imageUrl: '//placehold.it/100x100',
       *      showCollapsePin: false
       *    },
       *    showConfigButton: false,
       *    footer: {
       *      visible: false
       *    }
       *  });
       */

      /**
       * Config Related Subscriptions
       * You can remove this if you don't need the functionality of being able to enable specific configs with queryParams
       * Example: example.com/?layout=apollo&style=default
       */


      this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (queryParamMap) {
        return queryParamMap.has('rtl') && Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(queryParamMap.get('rtl'));
      })).subscribe(function (queryParamMap) {
        _this24.document.body.dir = 'rtl';

        _this24.configService.updateConfig({
          rtl: true
        });
      });
      this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (queryParamMap) {
        return queryParamMap.has('layout');
      })).subscribe(function (queryParamMap) {
        return _this24.configService.setConfig(queryParamMap.get('layout'));
      });
      this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (queryParamMap) {
        return queryParamMap.has('style');
      })).subscribe(function (queryParamMap) {
        return _this24.styleService.setStyle(queryParamMap.get('style'));
      });
      this.navigationService.items = [{
        type: 'link',
        label: 'Dashboard',
        route: '/',
        icon: _iconify_icons_ic_twotone_layers__WEBPACK_IMPORTED_MODULE_7___default.a
      }];
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _vex_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: _vex_services_style_service__WEBPACK_IMPORTED_MODULE_13__["StyleService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
        }]
      }, {
        type: _vex_services_layout_service__WEBPACK_IMPORTED_MODULE_8__["LayoutService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
      }, {
        type: _vex_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"]
      }, {
        type: _vex_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_12__["SplashScreenService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'vex-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]))], AppComponent);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _vex_vex_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../@vex/vex.module */
    "./src/@vex/vex.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _Component_auth_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./Component/auth/login/login.component */
    "./src/app/Component/auth/login/login.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @visurel/iconify-angular */
    "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _Component_auth_register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./Component/auth/register/register.component */
    "./src/app/Component/auth/register/register.component.ts");
    /* harmony import */


    var _Component_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./Component/home/home.component */
    "./src/app/Component/home/home.component.ts");
    /* harmony import */


    var _guard_auth_guard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./guard/auth-guard.component */
    "./src/app/guard/auth-guard.component.ts");
    /* harmony import */


    var _Service_user_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./Service/user.service */
    "./src/app/Service/user.service.ts");
    /* harmony import */


    var _interceptor_auth_incerpetor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./interceptor/auth.incerpetor */
    "./src/app/interceptor/auth.incerpetor.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @ngrx/router-store */
    "./node_modules/@ngrx/router-store/fesm2015/router-store.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
    /* harmony import */


    var _reducers__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./reducers */
    "./src/app/reducers/index.ts");
    /* harmony import */


    var _Component_auth_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./Component/auth.module */
    "./src/app/Component/auth.module.ts");
    /* harmony import */


    var _service_TalkService__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./service/TalkService */
    "./src/app/service/TalkService.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _Component_auth_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _Component_auth_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"]],
      imports: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__["IconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"].forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(), _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _Component_auth_module__WEBPACK_IMPORTED_MODULE_31__["AuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], // Vex
      _vex_vex_module__WEBPACK_IMPORTED_MODULE_5__["VexModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_26__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_30__["ROOT_REDUCERS"], {
        metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_30__["metaReducers"],
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true
        }
      }), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_28__["StoreRouterConnectingModule"].forRoot({
        routerState: 1
        /* Minimal */

      }), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_29__["StoreDevtoolsModule"].instrument({
        name: 'DeepBot',
        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].production // In a production build you would want to disable the Store Devtools
        // logOnly: environment.production,

      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_27__["EffectsModule"].forRoot([]), _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"].forRoot([{
        path: 'login',
        component: _Component_auth_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
        pathMatch: 'full'
      }, {
        path: 'register',
        component: _Component_auth_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
        pathMatch: 'full'
      }, {
        path: '',
        component: _Component_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
        pathMatch: 'full',
        canActivate: [_guard_auth_guard_component__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]]
      }])],
      providers: [_Service_user_service__WEBPACK_IMPORTED_MODULE_23__["UserService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
        useClass: _interceptor_auth_incerpetor__WEBPACK_IMPORTED_MODULE_24__["AuthInterceptor"],
        multi: true
      }, _service_TalkService__WEBPACK_IMPORTED_MODULE_32__["TalkService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/guard/auth-guard.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/guard/auth-guard.component.ts ***!
    \***********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardAuthGuardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Service/user.service */
    "./src/app/Service/user.service.ts");

    var AuthGuard =
    /*#__PURE__*/

    /** auth.guard component*/
    function () {
      /** auth.guard ctor */
      function AuthGuard(router, service) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.service = service;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (localStorage.getItem("DeepBot") != null) {
            //let roles = next.data['permittedRoles'] as Array<string>
            var payLoad = JSON.parse(window.atob(localStorage.getItem('DeepBot').split('.')[1]));
            var roles = [payLoad.role];

            if (roles) {
              if (this.service.roleMatch(roles)) {
                return true;
              } else {
                this.router.navigateByUrl('forbiden');
                return false;
              }
            } else {
              this.router.navigateByUrl('login');
              return false;
            }
          } else {
            this.router.navigateByUrl('login');
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _Service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })
    /** auth.guard component*/
    ], AuthGuard);
    /***/
  },

  /***/
  "./src/app/interceptor/auth.incerpetor.ts":
  /*!************************************************!*\
    !*** ./src/app/interceptor/auth.incerpetor.ts ***!
    \************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppInterceptorAuthIncerpetorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(router) {
        _classCallCheck(this, AuthInterceptor);

        this.router = router;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this25 = this;

          if (localStorage.getItem("DeepBot") != null) {
            var clonedReq = req.clone({
              headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('DeepBot'))
            });
            return next.handle(clonedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (succ) {}, function (err) {
              if (err.status == 401) {
                localStorage.removeItem('DeepBot');

                _this25.router.navigateByUrl('login');
              } else if (err.status == 403) {
                _this25.router.navigateByUrl('forbiden');
              }
            }));
          } else {
            return next.handle(req.clone());
          }
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/reducers/index.ts":
  /*!***********************************!*\
    !*** ./src/app/reducers/index.ts ***!
    \***********************************/

  /*! exports provided: ROOT_REDUCERS, logger, metaReducers */

  /***/
  function srcAppReducersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROOT_REDUCERS", function () {
      return ROOT_REDUCERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "logger", function () {
      return logger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "metaReducers", function () {
      return metaReducers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/router-store */
    "./node_modules/@ngrx/router-store/fesm2015/router-store.js");
    /* harmony import */


    var _Component_auth_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Component/auth/reducers */
    "./src/app/Component/auth/reducers/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * Every reducer module's default export is the reducer function itself. In
     * addition, each module should export a type or interface that describes
     * the state of the reducer plus any selector functions. The `* as`
     * notation packages up all of the exports into a single object.
     */

    /**
     * Our state is composed of a map of action reducer functions.
     * These reducer functions are called with each dispatched action
     * and the current or initial state and return a new immutable state.
     */


    var ROOT_REDUCERS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('Root reducers token', {
      factory: function factory() {
        return {
          router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__["routerReducer"],
          auth: _Component_auth_reducers__WEBPACK_IMPORTED_MODULE_3__["reducers"]
        };
      }
    }); // console.log all actions

    function logger(reducer) {
      return function (state, action) {
        var result = reducer(state, action);
        console.groupCollapsed(action.type);
        console.log('prev state', state);
        console.log('action', action);
        console.log('next state', result);
        console.groupEnd();
        return result;
      };
    }
    /**
     * By default, @ngrx/store uses combineReducers with the reducer map to compose
     * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
     * that will be composed to form the root meta-reducer.
     */


    var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? [logger] : [];
    /***/
  },

  /***/
  "./src/app/service/TalkService.ts":
  /*!****************************************!*\
    !*** ./src/app/service/TalkService.ts ***!
    \****************************************/

  /*! exports provided: TalkService */

  /***/
  function srcAppServiceTalkServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TalkService", function () {
      return TalkService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @aspnet/signalr */
    "./node_modules/@aspnet/signalr/dist/esm/index.js");

    var TalkService =
    /*#__PURE__*/
    function () {
      function TalkService() {
        _classCallCheck(this, TalkService);

        this.messageReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.connectionEstablished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.connectIsEstablished = false;
        this.createConnection(); // this.startConnection();
        // this.joinRoom();
        // this.initNewTcp();
      }

      _createClass(TalkService, [{
        key: "sendMessage",
        value: function sendMessage(message) {
          this._hubConnection.invoke('SendPackage', message, '5000');
        }
      }, {
        key: "createConnection",
        value: function createConnection() {
          this._hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_2__["HubConnectionBuilder"]().withUrl("https://localhost:44319/deeptalk", {
            accessTokenFactory: function accessTokenFactory() {
              return localStorage.getItem('DeepBot');
            },
            skipNegotiation: true,
            transport: _aspnet_signalr__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets
          }).build();
        }
      }, {
        key: "joinRoom",
        value: function joinRoom() {
          console.log('passe bien ici');

          this._hubConnection.invoke('JoinRoomClient');
        }
      }, {
        key: "sendPackage",
        value: function sendPackage() {
          this._hubConnection.invoke('SendPackage', 'test', '500');
        }
      }, {
        key: "initNewTcp",
        value: function initNewTcp() {
          this._hubConnection.invoke('InitTcpCli');
        }
      }, {
        key: "startConnection",
        value: function startConnection() {
          var _this26 = this;

          this._hubConnection.start().then(function () {
            _this26.connectIsEstablished = true;
            console.log('Init connection on DeepTalk');

            _this26.connectionEstablished.emit(true);

            _this26._hubConnection.invoke('JoinRoomClient');
          }).catch(function (err) {
            console.log('Error on initialize connection with DeepTalk, retrying...');
            setTimeout(function () {
              this.startConnection();
            }, 5000);
          });
        }
      }]);

      return TalkService;
    }();

    TalkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TalkService);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiURL: 'https://localhost:44319/api/'
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  "./src/webModel/UserModel.ts":
  /*!***********************************!*\
    !*** ./src/webModel/UserModel.ts ***!
    \***********************************/

  /*! exports provided: User */

  /***/
  function srcWebModelUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./tailwind.config.js":
  /*!****************************!*\
    !*** ./tailwind.config.js ***!
    \****************************/

  /*! no static exports found */

  /***/
  function tailwindConfigJs(module, exports) {
    module.exports = {
      prefix: '',
      important: ':root',
      separator: ':',
      theme: {
        screens: {
          sm: '600px',
          md: '960px',
          lg: '1280px'
        },
        colors: {
          transparent: 'transparent',
          black: 'var(--text-color)',
          white: 'var(--text-color-light)',
          'contrast-black': 'black',
          'contrast-white': 'white',
          gray: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#eeeeee',
            300: '#e0e0e0',
            400: '#bdbdbd',
            500: '#9e9e9e',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121'
          },
          red: {
            50: '#ffebee',
            100: '#ffcdd2',
            200: '#ef9a9a',
            300: '#e57373',
            400: '#ef5350',
            500: '#f44336',
            600: '#e53935',
            700: '#d32f2f',
            800: '#c62828',
            900: '#b71c1c'
          },
          orange: {
            50: '#fff3e0',
            100: '#ffe0b2',
            200: '#ffcc80',
            300: '#ffb74d',
            400: '#ffa726',
            500: '#ff9800',
            600: '#fb8c00',
            700: '#f57c00',
            800: '#ef6c00',
            900: '#e65100'
          },
          'deep-orange': {
            50: '#fbe9e7',
            100: '#ffccbc',
            200: '#ffab91',
            300: '#ff8a65',
            400: '#ff7043',
            500: '#ff5722',
            600: '#f4511e',
            700: '#e64a19',
            800: '#d84315',
            900: '#bf360c'
          },
          amber: {
            50: '#fff8e1',
            100: '#ffecb3',
            200: '#ffe082',
            300: '#ffd54f',
            400: '#ffca28',
            500: '#ffc107',
            600: '#ffb300',
            700: '#ffa000',
            800: '#ff8f00',
            900: '#ff6f00'
          },
          'light-green': {
            50: '#f1f8e9',
            100: '#dcedc8',
            200: '#c5e1a5',
            300: '#aed581',
            400: '#9ccc65',
            500: '#8bc34a',
            600: '#7cb342',
            700: '#689f38',
            800: '#558b2f',
            900: '#33691e'
          },
          green: {
            50: '#e8f5e9',
            100: '#c8e6c9',
            200: '#a5d6a7',
            300: '#81c784',
            400: '#66bb6a',
            500: '#4caf50',
            600: '#43a047',
            700: '#388e3c',
            800: '#2e7d32',
            900: '#1b5e20'
          },
          teal: {
            50: '#e0f2f1',
            100: '#b2dfdb',
            200: '#80cbc4',
            300: '#4db6ac',
            400: '#26a69a',
            500: '#009688',
            600: '#00897b',
            700: '#00796b',
            800: '#00695c',
            900: '#004d40'
          },
          cyan: {
            50: '#e0f7fa',
            100: '#b2ebf2',
            200: '#80deea',
            300: '#4dd0e1',
            400: '#26c6da',
            500: '#00bcd4',
            600: '#00acc1',
            700: '#0097a7',
            800: '#00838f',
            900: '#006064'
          },
          purple: {
            50: '#f3e5f5',
            100: '#e1bee7',
            200: '#ce93d8',
            300: '#ba68c8',
            400: '#ab47bc',
            500: '#9c27b0',
            600: '#8e24aa',
            700: '#7b1fa2',
            800: '#6a1b9a',
            900: '#4a148c'
          },
          'deep-purple': {
            50: '#ede7f6',
            100: '#d1c4e9',
            200: '#b39ddb',
            300: '#9575cd',
            400: '#7e57c2',
            500: '#673ab7',
            600: '#5e35b1',
            700: '#512da8',
            800: '#4527a0',
            900: '#311b92'
          },
          primary: {
            50: '#ecefff',
            100: '#ced7ff',
            200: '#aebcff',
            300: '#8ea1ff',
            400: '#758cff',
            500: '#5c77ff',
            600: '#5570ff',
            700: '#4b65ff',
            800: '#415bff',
            900: '#3048ff'
          }
        },
        spacing: {
          px: '1px',
          gutter: 'var(--padding-gutter)',
          '0': '0',
          '1': '0.25rem',
          '2': '0.5rem',
          '3': '0.75rem',
          '4': '1rem',
          '5': '1.25rem',
          '6': '1.5rem',
          '8': '2rem',
          '9': '2.25rem',
          '10': '2.5rem',
          '12': '3rem',
          '14': '3.5rem',
          '16': '4rem',
          '20': '5rem',
          '24': '6rem',
          '32': '8rem',
          '40': '10rem',
          '48': '12rem',
          '56': '14rem',
          '64': '16rem'
        },
        backgroundColor: function backgroundColor(theme) {
          return _objectSpread({
            base: 'var(--background-base)',
            card: 'var(--background-card)',
            'app-bar': 'var(--background-app-bar)',
            hover: 'var(--background-hover)'
          }, theme('colors'));
        },
        backgroundPosition: {
          bottom: 'bottom',
          center: 'center',
          left: 'left',
          'left-bottom': 'left bottom',
          'left-top': 'left top',
          right: 'right',
          'right-bottom': 'right bottom',
          'right-top': 'right top',
          top: 'top'
        },
        backgroundSize: {
          auto: 'auto',
          cover: 'cover',
          contain: 'contain'
        },
        borderColor: function borderColor(theme) {
          return _objectSpread({}, theme('colors'), {
            default: 'var(--foreground-divider)'
          });
        },
        borderRadius: {
          none: '0',
          sm: '0.125rem',
          default: '0.25rem',
          lg: '0.5rem',
          full: '9999px'
        },
        borderWidth: {
          default: '1px',
          '0': '0',
          '2': '2px',
          '4': '4px',
          '8': '8px'
        },
        boxShadow: {
          default: 'var(--elevation-z6)',
          md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          lg: '0px 7px 8px -4px rgba(82, 63, 104, 0.06),0px 12px 17px 2px rgba(82, 63, 104, 0.042),0px 5px 22px 4px rgba(82, 63, 104, 0.036)',
          xl: '0px 8px 10px -5px rgba(82, 63, 104, 0.06),0px 16px 24px 2px rgba(82, 63, 104, 0.042),0px 6px 30px 5px rgba(82, 63, 104, 0.036)',
          '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
          none: 'none',
          b: '0 10px 30px 0 rgba(82,63,104,.06)',
          1: 'var(--elevation-z1)',
          2: 'var(--elevation-z2)',
          3: 'var(--elevation-z3)',
          4: 'var(--elevation-z4)',
          5: 'var(--elevation-z5)',
          6: 'var(--elevation-z6)',
          7: 'var(--elevation-z7)',
          8: 'var(--elevation-z8)',
          9: 'var(--elevation-z9)',
          10: 'var(--elevation-z10)',
          11: 'var(--elevation-z11)',
          12: 'var(--elevation-z12)',
          13: 'var(--elevation-z13)',
          14: 'var(--elevation-z14)',
          15: 'var(--elevation-z15)',
          16: 'var(--elevation-z16)',
          17: 'var(--elevation-z17)',
          18: 'var(--elevation-z18)',
          19: 'var(--elevation-z19)',
          20: 'var(--elevation-z20)'
        },
        container: {
          center: true,
          padding: 'var(--padding-gutter)'
        },
        cursor: {
          auto: 'auto',
          default: 'default',
          pointer: 'pointer',
          wait: 'wait',
          text: 'text',
          move: 'move',
          'not-allowed': 'not-allowed'
        },
        fill: {
          current: 'currentColor'
        },
        flex: {
          '1': '1 1 0%',
          auto: '1 1 auto',
          initial: '0 1 auto',
          none: 'none'
        },
        flexGrow: {
          '0': '0',
          default: '1'
        },
        flexShrink: {
          '0': '0',
          default: '1'
        },
        fontFamily: {
          sans: ['Roboto', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple ColorDef Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto ColorDef Emoji"'],
          serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
          mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
        },
        fontSize: {
          xs: '0.75rem',
          sm: '0.875rem',
          base: '1rem',
          lg: '1.125rem',
          xl: '1.25rem',
          '2xl': '1.5rem',
          '3xl': '1.875rem',
          '4xl': '2.25rem',
          '5xl': '3rem',
          '6xl': '4rem'
        },
        fontWeight: {
          hairline: '100',
          thin: '200',
          light: '300',
          normal: '400',
          medium: '500',
          semibold: '600',
          bold: '700',
          extrabold: '800',
          black: '900'
        },
        height: function height(theme) {
          return _objectSpread({
            auto: 'auto'
          }, theme('spacing'), {
            full: '100%',
            screen: '100vh'
          });
        },
        inset: {
          '0': '0',
          '1': '0.25rem',
          '2': '0.5rem',
          '3': '0.75rem',
          '4': '1rem',
          '5': '1.25rem',
          '6': '1.5rem',
          '8': '2rem',
          '10': '2.5rem',
          '12': '3rem',
          '-1': '-0.25rem',
          '-2': '-0.5rem',
          '-3': '-0.75rem',
          '-4': '-1rem',
          '-5': '-1.25rem',
          '-6': '-1.5rem',
          '-8': '-2rem',
          '-10': '-2.5rem',
          '-12': '-3rem',
          auto: 'auto'
        },
        letterSpacing: {
          tighter: '-0.05em',
          tight: '-0.025em',
          normal: '0',
          wide: '0.025em',
          wider: '0.05em',
          widest: '0.1em'
        },
        lineHeight: {
          none: '1',
          tight: '1.25',
          snug: '1.375',
          normal: '1.5',
          relaxed: '1.625',
          loose: '2'
        },
        listStyleType: {
          none: 'none',
          disc: 'disc',
          decimal: 'decimal'
        },
        margin: function margin(theme, _ref10) {
          var negative = _ref10.negative;
          return _objectSpread({
            auto: 'auto'
          }, theme('spacing'), {}, negative(theme('spacing')), {}, negative({
            gutter: 'var(--padding-gutter)'
          }));
        },
        maxHeight: {
          full: '100%',
          screen: '100vh'
        },
        maxWidth: {
          xxxs: '16rem',
          xxs: '18rem',
          xs: '20rem',
          sm: '24rem',
          md: '28rem',
          lg: '32rem',
          xl: '36rem',
          '2xl': '42rem',
          '3xl': '48rem',
          '4xl': '56rem',
          '5xl': '64rem',
          '6xl': '72rem',
          full: '100%'
        },
        minHeight: {
          '0': '0',
          full: '100%',
          screen: '100vh'
        },
        minWidth: function minWidth(theme) {
          return _objectSpread({
            '0': '0',
            full: '100%'
          }, theme('spacing'));
        },
        objectPosition: {
          bottom: 'bottom',
          center: 'center',
          left: 'left',
          'left-bottom': 'left bottom',
          'left-top': 'left top',
          right: 'right',
          'right-bottom': 'right bottom',
          'right-top': 'right top',
          top: 'top'
        },
        opacity: {
          '0': '0',
          '25': '0.25',
          '50': '0.5',
          '75': '0.75',
          '100': '1'
        },
        order: {
          first: '-9999',
          last: '9999',
          none: '0',
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
          '6': '6',
          '7': '7',
          '8': '8',
          '9': '9',
          '10': '10',
          '11': '11',
          '12': '12'
        },
        padding: function padding(theme) {
          return theme('spacing');
        },
        placeholderColor: function placeholderColor(theme) {
          return theme('colors');
        },
        stroke: {
          current: 'currentColor'
        },
        textColor: function textColor(theme) {
          return _objectSpread({
            'secondary': 'var(--text-secondary)',
            'hint': 'var(--text-hint)'
          }, theme('colors'), {
            'primary-contrast': {
              50: '#000',
              100: '#000',
              200: '#000',
              300: '#000',
              400: '#000',
              500: '#FFF',
              600: '#FFF',
              700: '#FFF',
              800: '#FFF',
              900: '#FFF'
            },
            'red-contrast': {
              50: '#000',
              100: '#000',
              200: '#000',
              300: '#000',
              400: '#000',
              500: '#FFF',
              600: '#FFF',
              700: '#FFF',
              800: '#FFF',
              900: '#FFF'
            },
            'green-contrast': {
              50: '#000',
              100: '#000',
              200: '#000',
              300: '#000',
              400: '#000',
              500: '#FFF',
              600: '#FFF',
              700: '#FFF',
              800: '#FFF',
              900: '#FFF'
            },
            'amber-contrast': {
              50: '#000',
              100: '#000',
              200: '#000',
              300: '#000',
              400: '#000',
              500: '#000',
              600: '#000',
              700: '#000',
              800: '#000',
              900: '#000'
            },
            'orange-contrast': {
              50: '#000',
              100: '#000',
              200: '#000',
              300: '#000',
              400: '#000',
              500: '#000',
              600: '#000',
              700: '#000',
              800: '#FFF',
              900: '#FFF'
            },
            'deep-orange-contrast': {
              50: '#000',
              100: '#000',
              200: '#000',
              300: '#000',
              400: '#000',
              500: '#FFF',
              600: '#FFF',
              700: '#FFF',
              800: '#FFF',
              900: '#FFF'
            },
            'purple-contrast': {
              50: '#000',
              100: '#000',
              200: '#000',
              300: '#FFF',
              400: '#FFF',
              500: '#FFF',
              600: '#FFF',
              700: '#FFF',
              800: '#FFF',
              900: '#FFF'
            },
            'deep-purple-contrast': {
              50: '#000',
              100: '#000',
              200: '#000',
              300: '#FFF',
              400: '#FFF',
              500: '#FFF',
              600: '#FFF',
              700: '#FFF',
              800: '#FFF',
              900: '#FFF'
            },
            'cyan-contrast': {
              50: '#000',
              100: '#000',
              200: '#000',
              300: '#000',
              400: '#000',
              500: '#FFF',
              600: '#FFF',
              700: '#FFF',
              800: '#FFF',
              900: '#FFF'
            },
            'teal-contrast': {
              50: '#000',
              100: '#000',
              200: '#000',
              300: '#000',
              400: '#000',
              500: '#FFF',
              600: '#FFF',
              700: '#FFF',
              800: '#FFF',
              900: '#FFF'
            },
            'gray-contrast': {
              50: '#000',
              100: '#000',
              200: '#000',
              300: '#000',
              400: '#000',
              500: '#FFF',
              600: '#FFF',
              700: '#FFF',
              800: '#FFF',
              900: '#FFF'
            },
            'light-green-contrast': {
              50: '#000',
              100: '#000',
              200: '#000',
              300: '#000',
              400: '#000',
              500: '#000',
              600: '#000',
              700: '#FFF',
              800: '#FFF',
              900: '#FFF'
            }
          });
        },
        width: function width(theme) {
          return _objectSpread({
            auto: 'auto'
          }, theme('spacing'), {
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',
            '3/12': '25%',
            '4/12': '33.333333%',
            '5/12': '41.666667%',
            '6/12': '50%',
            '7/12': '58.333333%',
            '8/12': '66.666667%',
            '9/12': '75%',
            '10/12': '83.333333%',
            '11/12': '91.666667%',
            full: '100%',
            screen: '100vw'
          });
        },
        zIndex: {
          auto: 'auto',
          '0': '0',
          '10': '10',
          '20': '20',
          '30': '30',
          '40': '40',
          '50': '50'
        }
      },
      variants: {
        accessibility: ['responsive', 'focus'],
        alignContent: ['responsive'],
        alignItems: ['responsive'],
        alignSelf: ['responsive'],
        appearance: ['responsive'],
        backgroundAttachment: ['responsive'],
        backgroundColor: ['responsive', 'hover', 'focus'],
        backgroundPosition: ['responsive'],
        backgroundRepeat: ['responsive'],
        backgroundSize: ['responsive'],
        borderCollapse: ['responsive'],
        borderColor: ['responsive', 'hover', 'focus'],
        borderRadius: ['responsive'],
        borderStyle: ['responsive'],
        borderWidth: ['responsive', 'ltr', 'rtl'],
        boxShadow: ['responsive', 'hover', 'focus'],
        cursor: ['responsive'],
        display: ['responsive'],
        fill: ['responsive'],
        flex: ['responsive'],
        flexDirection: ['responsive'],
        flexGrow: ['responsive'],
        flexShrink: ['responsive'],
        flexWrap: ['responsive'],
        float: ['responsive'],
        fontFamily: ['responsive'],
        fontSize: ['responsive'],
        fontSmoothing: ['responsive'],
        fontStyle: ['responsive'],
        fontWeight: ['responsive', 'hover', 'focus'],
        height: ['responsive'],
        inset: ['responsive', 'ltr', 'rtl'],
        justifyContent: ['responsive'],
        letterSpacing: ['responsive'],
        lineHeight: ['responsive'],
        listStylePosition: ['responsive'],
        listStyleType: ['responsive'],
        margin: ['responsive', 'ltr', 'rtl'],
        maxHeight: ['responsive'],
        maxWidth: ['responsive'],
        minHeight: ['responsive'],
        minWidth: ['responsive'],
        objectFit: ['responsive'],
        objectPosition: ['responsive'],
        opacity: ['responsive', 'hover', 'focus'],
        order: ['responsive'],
        outline: ['responsive', 'focus'],
        overflow: ['responsive'],
        padding: ['responsive', 'ltr', 'rtl'],
        placeholderColor: ['responsive', 'focus'],
        pointerEvents: ['responsive'],
        position: ['responsive'],
        resize: ['responsive'],
        stroke: ['responsive'],
        tableLayout: ['responsive'],
        textAlign: ['responsive'],
        textColor: ['responsive', 'hover', 'focus'],
        textDecoration: ['responsive', 'hover', 'focus'],
        textTransform: ['responsive'],
        userSelect: ['responsive'],
        verticalAlign: ['responsive'],
        visibility: ['responsive'],
        whitespace: ['responsive'],
        width: ['responsive'],
        wordBreak: ['responsive'],
        zIndex: ['responsive']
      },
      corePlugins: {},
      plugins: [function (_ref11) {
        var addVariant = _ref11.addVariant,
            e = _ref11.e;
        addVariant('ltr', function (_ref12) {
          var separator = _ref12.separator,
              modifySelectors = _ref12.modifySelectors;
          modifySelectors(function (_ref13) {
            var className = _ref13.className;
            return "[dir=ltr] .ltr".concat(e(separator)).concat(className);
          });
        });
        addVariant('rtl', function (_ref14) {
          var separator = _ref14.separator,
              modifySelectors = _ref14.modifySelectors;
          modifySelectors(function (_ref15) {
            var className = _ref15.className;
            return "[dir=rtl] .rtl".concat(e(separator)).concat(className);
          });
        });
      }]
    };
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
    /*! C:\Users\ABCD\source\repos\DeepBot\DeepBot\ClientApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map