webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/components/dashboard/aas/aas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <nb-card>\n      <nb-card-header>\n        Add Model Configurations\n      </nb-card-header>\n      <nb-card-body>\n        <form #form=\"ngForm\">\n          <div class=\"container\">\n            <div class=\"setting-choice-box\">\n              <div class=\"title text-hint\">Model Parameters</div>\n              <ul class=\"option-list\">\n\n                <li class=\"option\">\n                  <div class=\"option-body row\">\n                    <div class=\"option-title col-md-8 col-sm-6\">Name</div>\n                    <div class=\"option-value col-md-4 col-sm-6\">\n                      <input name=\"aasName\" [(ngModel)]=\"aasSettings.name\" type=\"text\" required class=\"form-control form-control-info\">\n                    </div>\n                  </div>\n                  <div class=\"option-summary text-hint font-w-light\">What do you want to call it?</div>\n                </li>\n\n                <li class=\"option\">\n                  <div class=\"option-body row\">\n                    <div class=\"option-title col-md-8 col-sm-6\">Select your schema</div>\n                    <div class=\"option-value col-md-4 col-sm-6\">\n                      <div class=\"dropdown\" ngbDropdown>\n                        <button class=\"btn btn-outline-info\" type=\"button\" ngbDropdownToggle>\n                          {{aasSettings.schema}}\n                        </button>\n                        <ul ngbDropdownMenu class=\"dropdown-menu\">\n                          <li class=\"dropdown-item\" (click)=\"aasSettings.schema = item;onSchemaSelect(this.aasSettings.schema)\" *ngFor=\"let item of schemas\">\n                            {{item}}\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"option-summary text-hint font-w-light\">Choose schema on which model is to be created</div>\n                </li>\n\n                <li class=\"option\">\n                  <div class=\"option-body row\">\n                    <div class=\"option-title col-sm-12\">Select Attributes</div>\n                    <div class=\"col-sm-12\">\n                      <div class=\"row\">\n                          <div class=\"col-md-8 row\">\n                              <div class=\"p-3 item\" *ngFor=\"let i of aasSettings.attributes\">\n                                  {{i}}\n                                  <button type=\"button\" (click)=\"removeAttribute(i)\" class=\"ml-1 close\" aria-label=\"Close\">\n                                    <span aria-hidden=\"true\">&times;</span>\n                                  </button>\n                              </div>\n                          </div>\n                          <div class=\"col-md-4\">\n                              <div class=\"container\">\n                                  <div class=\"row\">\n                                  <div class=\"form-group col-md-8\">\n                                      <div class=\"dropdown\" ngbDropdown>\n                                          <button class=\"btn btn-outline-info\" type=\"button\" ngbDropdownToggle>\n                                            {{selectedAttribute}}\n                                          </button>\n                                          <ul ngbDropdownMenu class=\"dropdown-menu\">\n                                            <li class=\"dropdown-item\" (click)=\"selectedAttribute=item\" *ngFor=\"let item of attributes\">\n                                              {{item}}\n                                            </li>\n                                          </ul>\n                                        </div>\n                                  </div> \n                                  \n                                  <div class=\"form-group col-md-4\">\n                                      <button class=\"form-element btn btn btn-outline-info\" (click)=\"addAttribute();\">Add</button>\n                                  </div>\n                                             \n                                </div>\n                                \n                              </div>\n                          </div>\n\n                      </div>\n                        \n                        \n                    </div>\n                  </div>\n                  <div class=\"option-summary text-hint font-w-light\">Choose required attributes</div>\n                </li>\n\n          \n         \n              </ul>\n            </div>\n          </div>\n        </form>\n      </nb-card-body>\n      <nb-card-footer>\n        <button (click)=\"onSubmit()\" [disabled]=\"!form.valid\" class=\"col-md-4 offset-md-8 btn btn-md btn-hero-info\" type=\"submit\">\n          Save\n        </button>\n      </nb-card-footer>\n    </nb-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/aas.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  /*  .item-expand{\n        padding: 1rem;\n        box-shadow: 0px 0px 10px 1px black;\n        transform: scale(1.05) translateZ(100);\n    } */ }\n  :host-context(.nb-theme-default) .item {\n    background-color: #e9edf2;\n    border-radius: 5px;\n    margin: 2px; }\n  :host-context(.nb-theme-default) .setting-choice-box {\n    padding: 1.25rem; }\n    :host-context(.nb-theme-default) .setting-choice-box .title {\n      font-size: 1.25rem;\n      padding-bottom: 1.25rem; }\n    :host-context(.nb-theme-default) .setting-choice-box .option-list {\n      list-style: none;\n      padding: 0; }\n      :host-context(.nb-theme-default) .setting-choice-box .option-list .option {\n        border-bottom: 1px solid #ebeff5;\n        padding-top: 0.75rem;\n        padding-bottom: 0.75rem;\n        margin-bottom: 0.50rem; }\n        :host-context(.nb-theme-default) .setting-choice-box .option-list .option .option-body {\n          font-size: 1.15em; }\n        :host-context(.nb-theme-default) .setting-choice-box .option-list .option .option-summary {\n          font-size: 0.85em; }\n  :host-context(.nb-theme-default) .switch {\n    position: relative;\n    display: inline-block;\n    width: 4rem;\n    height: 1.75rem;\n    margin: 0;\n    cursor: pointer; }\n    :host-context(.nb-theme-default) .switch input {\n      display: none; }\n      :host-context(.nb-theme-default) .switch input:checked + .slider::before {\n        -webkit-transform: translateX(2.25rem);\n                transform: translateX(2.25rem); }\n    :host-context(.nb-theme-default) .switch .slider {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      border-radius: 1.75rem;\n      background-color: #ebeff5; }\n    :host-context(.nb-theme-default) .switch .slider::before {\n      position: absolute;\n      content: '';\n      height: 1.75rem;\n      width: 1.75rem;\n      border-radius: 50%;\n      background-color: #4ca6ff;\n      transition: 0.2s;\n      box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n    :host-context(.nb-theme-default) .switch .slider-disable::before {\n      background-color: #aaa; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-default) .light,\n    :host-context(.nb-theme-default) .cosmic {\n      display: none; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-default) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      padding: 0; } }\n\n:host-context(.nb-theme-cosmic) {\n  /*  .item-expand{\n        padding: 1rem;\n        box-shadow: 0px 0px 10px 1px black;\n        transform: scale(1.05) translateZ(100);\n    } */ }\n  :host-context(.nb-theme-cosmic) .item {\n    background-color: #494299;\n    border-radius: 5px;\n    margin: 2px; }\n  :host-context(.nb-theme-cosmic) .setting-choice-box {\n    padding: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .setting-choice-box .title {\n      font-size: 1.25rem;\n      padding-bottom: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .setting-choice-box .option-list {\n      list-style: none;\n      padding: 0; }\n      :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option {\n        border-bottom: 1px solid #2f296b;\n        padding-top: 0.75rem;\n        padding-bottom: 0.75rem;\n        margin-bottom: 0.50rem; }\n        :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option .option-body {\n          font-size: 1.15em; }\n        :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option .option-summary {\n          font-size: 0.85em; }\n  :host-context(.nb-theme-cosmic) .switch {\n    position: relative;\n    display: inline-block;\n    width: 4rem;\n    height: 1.75rem;\n    margin: 0;\n    cursor: pointer; }\n    :host-context(.nb-theme-cosmic) .switch input {\n      display: none; }\n      :host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n        -webkit-transform: translateX(2.25rem);\n                transform: translateX(2.25rem); }\n    :host-context(.nb-theme-cosmic) .switch .slider {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      border-radius: 1.75rem;\n      background-color: #2f296b; }\n    :host-context(.nb-theme-cosmic) .switch .slider::before {\n      position: absolute;\n      content: '';\n      height: 1.75rem;\n      width: 1.75rem;\n      border-radius: 50%;\n      background-color: #0088ff;\n      transition: 0.2s;\n      box-shadow: 0 0 0.25rem 0 rgba(161, 161, 229, 0.4);\n      background-image: linear-gradient(to right, #ad59ff, #7659ff); }\n    :host-context(.nb-theme-cosmic) .switch .slider-disable::before {\n      background-color: #aaa; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-cosmic) .light,\n    :host-context(.nb-theme-cosmic) .cosmic {\n      display: none; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      padding: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/aas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_analytics_service__ = __webpack_require__("../../../../../src/app/services/dashboard/analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dashboard_schema_service__ = __webpack_require__("../../../../../src/app/services/dashboard/schema.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_util_toast_service__ = __webpack_require__("../../../../../src/app/services/util/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AasComponent = (function () {
    function AasComponent(analyticsService, schemaService, toastService) {
        this.analyticsService = analyticsService;
        this.schemaService = schemaService;
        this.toastService = toastService;
        this.classificationAlgorithms = ['Logistic Regression', 'LDA', 'K-Nearest Neighbours', 'Naive Byaes', 'CART', 'SVM'];
        this.regressionAlgorithms = ['Linear', 'Ridge', 'LASSO Linear', 'Elastic Net', 'KNN', 'CART', 'SVM'];
        this.attributes = [];
        this.selectedAttribute = '';
        this.aasSettings = {
            name: '',
            schema: '',
            attributes: [],
        };
    }
    AasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.schemaService.getSchemas().subscribe(function (res) {
            _this.schemas = res.schemas.map(function (item) { return item.name; });
            _this.aasSettings.schema = _this.schemas[0];
            _this.onSchemaSelect(_this.aasSettings.schema);
        });
    };
    AasComponent.prototype.onSchemaSelect = function (schemaname) {
        var _this = this;
        this.schemaService.getSchemaStructure(schemaname).subscribe(function (res) {
            //console.log(res.data.structure);
            _this.schemaStructure = res.data.structure;
            //console.log(this.schemaStructure);
            _this.attributes = Object.keys(res.data.structure);
            //remove id,insertedAt and modifiedAt attributes
            _this.attributes.splice(_this.attributes.indexOf("_id"), 1);
            _this.attributes.splice(_this.attributes.indexOf("_insertAt"), 1);
            _this.attributes.splice(_this.attributes.indexOf("_updated"), 1);
            _this.selectedAttribute = _this.attributes[0];
        });
    };
    AasComponent.prototype.onSubmit = function () {
        var _this = this;
        var model = {
            name: this.aasSettings.name,
            data: {
                collectionName: this.aasSettings.schema,
                collectionAttributes: {}
            }
        };
        if (this.aasSettings.attributes.length == 0) {
            this.toastService.showToast(this.toastService.typeNum.error, "Oops!!,You have not added any attributes", "");
            return;
        }
        //console.log(model);
        for (var i in this.aasSettings.attributes) {
            var attrb = this.aasSettings.attributes[i];
            ////console.log(item);
            model.data.collectionAttributes[attrb] = this.schemaStructure[attrb].type;
        }
        //console.log(model);
        this.analyticsService.createModel(model).subscribe(function (res) {
            if (res.success) {
                _this.toastService.showToast(_this.toastService.typeNum.success, "Hurray!!", res.message);
                _this.resetForm();
            }
            else {
                _this.toastService.showToast(_this.toastService.typeNum.error, "Oops!!", res.message);
            }
        });
    };
    AasComponent.prototype.removeAttribute = function (i) {
        var index = this.aasSettings.attributes.indexOf(i);
        if (index >= 0) {
            this.aasSettings.attributes.splice(index, 1);
            this.attributes.push(i);
        }
    };
    AasComponent.prototype.addAttribute = function () {
        if (this.aasSettings.attributes.indexOf(this.selectedAttribute) < 0)
            this.aasSettings.attributes.push(this.selectedAttribute);
        if (this.selectedAttribute = '') {
            return;
        }
        this.attributes.splice(this.attributes.indexOf(this.selectedAttribute), 1);
        this.selectedAttribute = this.attributes[0];
        ////console.log(this.outputAttributes);
    };
    AasComponent.prototype.resetForm = function () {
        this.aasSettings = {
            name: '',
            schema: '',
            attributes: [],
        };
        this.ngOnInit();
    };
    return AasComponent;
}());
AasComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-aas',
        template: __webpack_require__("../../../../../src/app/components/dashboard/aas/aas.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/aas/aas.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dashboard_analytics_service__["a" /* AnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dashboard_analytics_service__["a" /* AnalyticsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_dashboard_schema_service__["a" /* SchemaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dashboard_schema_service__["a" /* SchemaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_util_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_util_toast_service__["a" /* ToastService */]) === "function" && _c || Object])
], AasComponent);

var _a, _b, _c;
//# sourceMappingURL=aas.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/aasModels/InputField.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputField; });
var InputField = (function () {
    function InputField(name, inputType, inputValues, htmlAttrs, hint) {
        this.name = name;
        this.inputType = inputType;
        this.inputValues = inputValues;
        this.htmlAttributes = htmlAttrs;
        this.hint = hint;
    }
    return InputField;
}());

//# sourceMappingURL=InputField.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/analyse-model/analyse-model.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  analyse-model works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/analyse-model/analyse-model.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/analyse-model/analyse-model.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyseModelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnalyseModelComponent = (function () {
    function AnalyseModelComponent() {
    }
    AnalyseModelComponent.prototype.ngOnInit = function () {
    };
    return AnalyseModelComponent;
}());
AnalyseModelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-analyse-model',
        template: __webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analyse-model.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analyse-model.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AnalyseModelComponent);

//# sourceMappingURL=analyse-model.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/analysis-tool-configure.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"isLoaded\">\n  <div class=\"col-lg-12\">\n    <nb-card  >\n      <nb-card-header>\n        Select Model To Configure\n      </nb-card-header>\n      <nb-card-body>\n        <ngb-accordion #acc=\"ngbAccordion\">\n\n          <ngb-panel *ngFor=\"let item of routes\">\n            <ng-template ngbPanelTitle>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"btn-group btn-group-full-width\" role=\"group\">\n                    <button type=\"button\" class=\"btn btn-{{getClassByOpertaionType(item.operationType)}} btn-fixed\">\n                      <span>{{item.operationType}}</span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-{{getClassByOpertaionType(item.operationType)}} btn-fixed\">\n                      <span>{{item.accessControl}}</span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-outline-{{getClassByOpertaionType(item.operationType)}} btn-block\">\n                      {{item.name}}\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </ng-template>\n            <ng-template ngbPanelContent>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  Usage Info :\n                </div>\n                <div class=\"offset-md-4 col-md-2\">\n                  <button (click)=\"deleteRoute(item.name)\" type=\"button\" class=\"btn btn-outline-danger btn-block\">\n                    Delete Route\n                  </button>\n                </div>\n              </div>\n              <hr>\n              <div class=\"row\" [class.d-md-none]=\"item.operationType != 'insert'\">\n                <div class=\"col-md-8\">\n                  Schema Structure of Insert\n                  <pre [innerHTML]=\"syntaxHighlight(schemaStructure)\">\n                  </pre>\n                </div>\n                <div class=\"col-md-4\">\n                  <strong>Usage Guide</strong>\n                  <ol>\n                    <li>API End Point : http://localhost:4000/api/{{item.operationType}}/{{item.schemaName}}/{{item.name}}</li>\n                    <li> Method of Request : {{item.requestMethod}}</li>\n                    <li> Request Content-Type: application/json</li>                    \n                  </ol>\n                  To Learn More Click\n                  <a href=\"#\">HERE(TODO)</a>\n                </div>\n              </div>\n              <div class=\"row\" [class.d-md-none]=\"item.requestByJSON\">                \n                <div class=\"col-md-12\">\n                  <strong>Usage Guide</strong>\n                  <ol>\n                    <li> API End Point : http://localhost:4000/api/{{item.operationType}}/{{item.name}}/{{item.schemaName}}/object_id_here</li>\n                    <li> Method of Request : {{item.requestMethod}}</li>\n                    <li> Request Content-Type: Simple Get Request</li>                    \n                  </ol>\n                </div>\n              </div>\n              <div class=\"row\" [class.d-md-none]=\"item.operationType == 'insert' || !item.requestByJSON\">\n                <div class=\"col-md-4\">\n                  Request Body\n                  <pre [innerHTML]=\"syntaxHighlight(item.requestBody)\">\n                  </pre>\n                </div>\n                <div class=\"col-md-4\">\n                  Constraints:\n                  <pre [innerHTML]=\"syntaxHighlight(item.constraints)\">\n                    </pre>\n                </div>\n                <div class=\"col-md-4\">\n                  <strong>Usage Guide:</strong>\n                  <ol>\n                    <li> API End Point : http://localhost:4000/api/{{item.operationType}}/{{item.schemaName}}/{{item.name}}</li>\n                    <li> Method of Request : {{item.requestMethod}}</li>\n                    <li> Request Content-Type: application/json</li>            \n                  </ol>\n                  To Learn More Click\n                  <a href=\"#\">HERE(TODO)</a>\n                </div>\n              </div>\n            </ng-template>\n          </ngb-panel>\n\n        </ngb-accordion>\n\n        <ng2-smart-table class='form-control-success' [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\"\n          (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\" (userRowSelect)=\"onUserRowSelect($event)\"></ng2-smart-table>\n      </nb-card-body>\n    </nb-card>\n\n\n    \n  </div>\n</div>\n\n<div class=\"row\" *ngIf=\"editEnabled\">\n  <div class=\"col-md-8\">\n     <!--Configure component-->\n        <nb-card>\n          <nb-card-header>\n            Add Model Configurations\n          </nb-card-header>\n          <nb-card-body  *ngFor=\"let item of aasJSON;let in=index\">\n            <app-configure-collapsible-panel [panelContents]='item' [attributesList]='modelMainConfig.configure.data.collectionAttributes'>  </app-configure-collapsible-panel>\n          \n          </nb-card-body>\n          <nb-card-footer>\n          Footer\n          </nb-card-footer>\n        </nb-card>\n   \n     <!--ends-->\n  </div>\n  <div class=\"col-lg-4\">\n      <nb-card>\n          <nb-card-header>\n            Data Statistics\n          </nb-card-header>\n          <nb-card-body>\n           \n          </nb-card-body>\n          <nb-card-footer>\n          Footer\n          </nb-card-footer>\n        </nb-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/analysis-tool-configure.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  /*  .item-expand{\n        padding: 1rem;\n        box-shadow: 0px 0px 10px 1px black;\n        transform: scale(1.05) translateZ(100);\n    } */ }\n  :host-context(.nb-theme-default) .item {\n    background-color: #e9edf2;\n    border-radius: 5px;\n    margin: 2px; }\n  :host-context(.nb-theme-default) .setting-choice-box {\n    padding: 1.25rem; }\n    :host-context(.nb-theme-default) .setting-choice-box .title {\n      font-size: 1.25rem;\n      padding-bottom: 1.25rem; }\n    :host-context(.nb-theme-default) .setting-choice-box .option-list {\n      list-style: none;\n      padding: 0; }\n      :host-context(.nb-theme-default) .setting-choice-box .option-list .option {\n        border-bottom: 1px solid #ebeff5;\n        padding-top: 0.75rem;\n        padding-bottom: 0.75rem;\n        margin-bottom: 0.50rem; }\n        :host-context(.nb-theme-default) .setting-choice-box .option-list .option .option-body {\n          font-size: 1.15em; }\n        :host-context(.nb-theme-default) .setting-choice-box .option-list .option .option-summary {\n          font-size: 0.85em; }\n  :host-context(.nb-theme-default) .switch {\n    position: relative;\n    display: inline-block;\n    width: 4rem;\n    height: 1.75rem;\n    margin: 0;\n    cursor: pointer; }\n    :host-context(.nb-theme-default) .switch input {\n      display: none; }\n      :host-context(.nb-theme-default) .switch input:checked + .slider::before {\n        -webkit-transform: translateX(2.25rem);\n                transform: translateX(2.25rem); }\n    :host-context(.nb-theme-default) .switch .slider {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      border-radius: 1.75rem;\n      background-color: #ebeff5; }\n    :host-context(.nb-theme-default) .switch .slider::before {\n      position: absolute;\n      content: '';\n      height: 1.75rem;\n      width: 1.75rem;\n      border-radius: 50%;\n      background-color: #4ca6ff;\n      transition: 0.2s;\n      box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n    :host-context(.nb-theme-default) .switch .slider-disable::before {\n      background-color: #aaa; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-default) .light,\n    :host-context(.nb-theme-default) .cosmic {\n      display: none; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-default) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      padding: 0; } }\n  :host-context(.nb-theme-default) .card-header {\n    padding: 0; }\n\n:host-context(.nb-theme-cosmic) {\n  /*  .item-expand{\n        padding: 1rem;\n        box-shadow: 0px 0px 10px 1px black;\n        transform: scale(1.05) translateZ(100);\n    } */ }\n  :host-context(.nb-theme-cosmic) .item {\n    background-color: #494299;\n    border-radius: 5px;\n    margin: 2px; }\n  :host-context(.nb-theme-cosmic) .setting-choice-box {\n    padding: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .setting-choice-box .title {\n      font-size: 1.25rem;\n      padding-bottom: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .setting-choice-box .option-list {\n      list-style: none;\n      padding: 0; }\n      :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option {\n        border-bottom: 1px solid #2f296b;\n        padding-top: 0.75rem;\n        padding-bottom: 0.75rem;\n        margin-bottom: 0.50rem; }\n        :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option .option-body {\n          font-size: 1.15em; }\n        :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option .option-summary {\n          font-size: 0.85em; }\n  :host-context(.nb-theme-cosmic) .switch {\n    position: relative;\n    display: inline-block;\n    width: 4rem;\n    height: 1.75rem;\n    margin: 0;\n    cursor: pointer; }\n    :host-context(.nb-theme-cosmic) .switch input {\n      display: none; }\n      :host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n        -webkit-transform: translateX(2.25rem);\n                transform: translateX(2.25rem); }\n    :host-context(.nb-theme-cosmic) .switch .slider {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      border-radius: 1.75rem;\n      background-color: #2f296b; }\n    :host-context(.nb-theme-cosmic) .switch .slider::before {\n      position: absolute;\n      content: '';\n      height: 1.75rem;\n      width: 1.75rem;\n      border-radius: 50%;\n      background-color: #0088ff;\n      transition: 0.2s;\n      box-shadow: 0 0 0.25rem 0 rgba(161, 161, 229, 0.4);\n      background-image: linear-gradient(to right, #ad59ff, #7659ff); }\n    :host-context(.nb-theme-cosmic) .switch .slider-disable::before {\n      background-color: #aaa; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-cosmic) .light,\n    :host-context(.nb-theme-cosmic) .cosmic {\n      display: none; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      padding: 0; } }\n  :host-context(.nb-theme-cosmic) .card-header {\n    padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/analysis-tool-configure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalysisToolConfigureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_dashboard_analytics_service__ = __webpack_require__("../../../../../src/app/services/dashboard/analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_dashboard_schema_service__ = __webpack_require__("../../../../../src/app/services/dashboard/schema.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_modal_modal__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/modal/modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_util_toast_service__ = __webpack_require__("../../../../../src/app/services/util/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__configure_render_configure_render_component__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-render/configure-render.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AnalysisToolConfigureComponent = (function () {
    function AnalysisToolConfigureComponent(analyticsService, route, schemaService, modalService, toastService, router) {
        this.analyticsService = analyticsService;
        this.route = route;
        this.schemaService = schemaService;
        this.modalService = modalService;
        this.toastService = toastService;
        this.router = router;
        this.editEnabled = false;
        this.myModels = [];
        this.isLoaded = false;
        this.isCollapsed = false;
        this.source = new __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__["a" /* LocalDataSource */]();
        this.settings = {};
    }
    AnalysisToolConfigureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.analyticsService.getModels().subscribe(function (res) {
            _this.myModels = res.schemas;
            console.log(_this.myModels);
            _this.isLoaded = true;
            _this.settings = {
                columns: {
                    name: {
                        title: "Model Name",
                        editable: false
                    },
                    schema: {
                        title: "Schema Name",
                        editable: false
                    },
                    configure: {
                        title: "Configure",
                        editable: false,
                        type: "custom",
                        renderComponent: __WEBPACK_IMPORTED_MODULE_7__configure_render_configure_render_component__["a" /* ConfigureRenderComponent */]
                    }
                },
                noDataMessage: "No models created",
                actions: false
            };
            var data = _this.myModels.map(function (item) { return { id: item._id, name: item.name, schema: item.data.collectionName, configure: item }; });
            _this.source.load(data);
        });
        //Fetching the aasJSON object from the node backend
        this.analyticsService.getAasJSON().subscribe(function (res) {
            _this.aasJSON = res;
        });
    };
    AnalysisToolConfigureComponent.prototype.onUserRowSelect = function (event) {
        this.modelMainConfig = event.data;
        console.log(this.modelMainConfig);
        this.editEnabled = true;
    };
    AnalysisToolConfigureComponent.prototype.processAasJSON = function () {
        this.aasJSON.array.forEach(function (element) {
            //create accordion panel
            // get its configuration items
            //generate parameters table
        });
    };
    return AnalysisToolConfigureComponent;
}());
AnalysisToolConfigureComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-analysis-tool-configure',
        template: __webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/analysis-tool-configure.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/analysis-tool-configure.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_dashboard_analytics_service__["a" /* AnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_dashboard_analytics_service__["a" /* AnalyticsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_dashboard_schema_service__["a" /* SchemaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_dashboard_schema_service__["a" /* SchemaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_modal_modal__["a" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap_modal_modal__["a" /* NgbModal */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_util_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_util_toast_service__["a" /* ToastService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _f || Object])
], AnalysisToolConfigureComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=analysis-tool-configure.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/configure-collapsible-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-success btn-block\" (click)=\"isCollapsed = !isCollapsed\"\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\" style=\"border-radius:0.175\">\n    {{panelContents.name}}\n  </button>\n\n<div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\" style=\"border:2px solid rgba(0, 0, 0, 0.250)\" >\n  <div class=\"card\">\n    <div class=\"card-body\" *ngFor=\"let section of panelContents.subsections\">\n      <app-panel-subsection [subsectionContents]='section'  [attributesList]='attributesList'></app-panel-subsection>\n    </div>\n  </div>\n</div>\n<!-- <ngb-panel>\n  <ng-template ngbPanelTitle>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n          <button type=\"button\" class=\"btn btn-info btn-block\">\n              Preprocessing\n          </button>\n        \n      </div>\n    </div>\n  </ng-template>\n  <ng-template ngbPanelContent>\n   Something goes here\n    <hr>\n\n  </ng-template>\n</ngb-panel> -->"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/configure-collapsible-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  /*  .item-expand{\n        padding: 1rem;\n        box-shadow: 0px 0px 10px 1px black;\n        transform: scale(1.05) translateZ(100);\n    } */ }\n  :host-context(.nb-theme-default) .item {\n    background-color: #e9edf2;\n    border-radius: 5px;\n    margin: 2px; }\n  :host-context(.nb-theme-default) .setting-choice-box {\n    padding: 1.25rem; }\n    :host-context(.nb-theme-default) .setting-choice-box .title {\n      font-size: 1.25rem;\n      padding-bottom: 1.25rem; }\n    :host-context(.nb-theme-default) .setting-choice-box .option-list {\n      list-style: none;\n      padding: 0; }\n      :host-context(.nb-theme-default) .setting-choice-box .option-list .option {\n        border-bottom: 1px solid #ebeff5;\n        padding-top: 0.75rem;\n        padding-bottom: 0.75rem;\n        margin-bottom: 0.50rem; }\n        :host-context(.nb-theme-default) .setting-choice-box .option-list .option .option-body {\n          font-size: 1.15em; }\n        :host-context(.nb-theme-default) .setting-choice-box .option-list .option .option-summary {\n          font-size: 0.85em; }\n  :host-context(.nb-theme-default) .switch {\n    position: relative;\n    display: inline-block;\n    width: 4rem;\n    height: 1.75rem;\n    margin: 0;\n    cursor: pointer; }\n    :host-context(.nb-theme-default) .switch input {\n      display: none; }\n      :host-context(.nb-theme-default) .switch input:checked + .slider::before {\n        -webkit-transform: translateX(2.25rem);\n                transform: translateX(2.25rem); }\n    :host-context(.nb-theme-default) .switch .slider {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      border-radius: 1.75rem;\n      background-color: #ebeff5; }\n    :host-context(.nb-theme-default) .switch .slider::before {\n      position: absolute;\n      content: '';\n      height: 1.75rem;\n      width: 1.75rem;\n      border-radius: 50%;\n      background-color: #4ca6ff;\n      transition: 0.2s;\n      box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n    :host-context(.nb-theme-default) .switch .slider-disable::before {\n      background-color: #aaa; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-default) .light,\n    :host-context(.nb-theme-default) .cosmic {\n      display: none; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-default) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      padding: 0; } }\n  :host-context(.nb-theme-default) .card-header {\n    padding: 0; }\n\n:host-context(.nb-theme-cosmic) {\n  /*  .item-expand{\n        padding: 1rem;\n        box-shadow: 0px 0px 10px 1px black;\n        transform: scale(1.05) translateZ(100);\n    } */ }\n  :host-context(.nb-theme-cosmic) .item {\n    background-color: #494299;\n    border-radius: 5px;\n    margin: 2px; }\n  :host-context(.nb-theme-cosmic) .setting-choice-box {\n    padding: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .setting-choice-box .title {\n      font-size: 1.25rem;\n      padding-bottom: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .setting-choice-box .option-list {\n      list-style: none;\n      padding: 0; }\n      :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option {\n        border-bottom: 1px solid #2f296b;\n        padding-top: 0.75rem;\n        padding-bottom: 0.75rem;\n        margin-bottom: 0.50rem; }\n        :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option .option-body {\n          font-size: 1.15em; }\n        :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option .option-summary {\n          font-size: 0.85em; }\n  :host-context(.nb-theme-cosmic) .switch {\n    position: relative;\n    display: inline-block;\n    width: 4rem;\n    height: 1.75rem;\n    margin: 0;\n    cursor: pointer; }\n    :host-context(.nb-theme-cosmic) .switch input {\n      display: none; }\n      :host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n        -webkit-transform: translateX(2.25rem);\n                transform: translateX(2.25rem); }\n    :host-context(.nb-theme-cosmic) .switch .slider {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      border-radius: 1.75rem;\n      background-color: #2f296b; }\n    :host-context(.nb-theme-cosmic) .switch .slider::before {\n      position: absolute;\n      content: '';\n      height: 1.75rem;\n      width: 1.75rem;\n      border-radius: 50%;\n      background-color: #0088ff;\n      transition: 0.2s;\n      box-shadow: 0 0 0.25rem 0 rgba(161, 161, 229, 0.4);\n      background-image: linear-gradient(to right, #ad59ff, #7659ff); }\n    :host-context(.nb-theme-cosmic) .switch .slider-disable::before {\n      background-color: #aaa; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-cosmic) .light,\n    :host-context(.nb-theme-cosmic) .cosmic {\n      display: none; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      padding: 0; } }\n  :host-context(.nb-theme-cosmic) .card-header {\n    padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/configure-collapsible-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigureCollapsiblePanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigureCollapsiblePanelComponent = (function () {
    function ConfigureCollapsiblePanelComponent() {
        this.isCollapsed = false;
    }
    ConfigureCollapsiblePanelComponent.prototype.ngOnInit = function () {
        console.log(this.panelContents);
        // console.log(this.attributesList)
    };
    return ConfigureCollapsiblePanelComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ConfigureCollapsiblePanelComponent.prototype, "panelContents", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ConfigureCollapsiblePanelComponent.prototype, "attributesList", void 0);
ConfigureCollapsiblePanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-configure-collapsible-panel',
        template: __webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/configure-collapsible-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/configure-collapsible-panel.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ConfigureCollapsiblePanelComponent);

//# sourceMappingURL=configure-collapsible-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/panel-input-field/panel-input-field.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n    <div class=\"option-body row\">\n      <div class=\"col-md-8 col-sm-6\">{{inputItem.name}}</div>\n      <div class=\"option-value col-md-4 col-sm-6\">\n        <input *ngIf=\"inputBox\" name=\"item\" type=\"{{inputItem.htmlAttributes.type}}\" required=\"{{inputItem.htmlAttributes.type}}\" class=\"form-control form-control-info\">\n        <select class=\"form-control\" *ngIf=\"selectBox\" name=\"item\" [(ngModel)]=\"selectBoxValue\" (ngModelChange)=\"onChange($event)\">\n          <option class=\"select-option\" *ngFor=\"let v of inputItem.inputValues\" [ngValue]=\"v\">{{v.name}}</option>\n        </select>\n      </div>\n    </div>\n  </nb-card-header>\n      <nb-card-body *ngIf=\"parameterBoxDisplay\">\n        <app-parameter-configurer  *ngIf=\"parameterBoxDisplay\" [parameterItem]='parameterItem'></app-parameter-configurer>\n    <!-- <ul class=\"option-list\">\n\n      <li class=\"option\" *ngFor=\"let item of parametersItems\">\n        <app-panel-input-field [inputItem]='item'></app-panel-input-field>\n      </li>\n\n    </ul> -->\n  </nb-card-body>\n  <nb-card-footer>\n    <div class=\" col-md-8 col-sm-6 option-summary text-hint font-w-light\">{{inputItem.hint}}</div>\n  </nb-card-footer>\n</nb-card>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/panel-input-field/panel-input-field.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  /*  .item-expand{\n        padding: 1rem;\n        box-shadow: 0px 0px 10px 1px black;\n        transform: scale(1.05) translateZ(100);\n    } */ }\n  :host-context(.nb-theme-default) .item {\n    background-color: #e9edf2;\n    border-radius: 5px;\n    margin: 2px; }\n  :host-context(.nb-theme-default) .title {\n    font-size: 1.25rem;\n    padding-bottom: 1.25rem; }\n  :host-context(.nb-theme-default) .option-list {\n    list-style: none;\n    padding: 0; }\n    :host-context(.nb-theme-default) .option-list .option {\n      border-bottom: 1px solid #ebeff5;\n      padding-top: 0.75rem;\n      padding-bottom: 0.75rem;\n      margin-bottom: 0.50rem; }\n      :host-context(.nb-theme-default) .option-list .option .option-body {\n        font-size: 1.15em; }\n      :host-context(.nb-theme-default) .option-list .option .option-summary {\n        font-size: 0.85em; }\n  :host-context(.nb-theme-default) nb-card {\n    box-shadow: none;\n    border: 1px solid  #dfe3eb; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-default) .light,\n    :host-context(.nb-theme-default) .cosmic {\n      display: none; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-default) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      padding: 0; } }\n  :host-context(.nb-theme-default) .card-header {\n    padding: 0; }\n  :host-context(.nb-theme-default) .select-option {\n    font-family: 'Exo'; }\n\n:host-context(.nb-theme-cosmic) {\n  /*  .item-expand{\n        padding: 1rem;\n        box-shadow: 0px 0px 10px 1px black;\n        transform: scale(1.05) translateZ(100);\n    } */ }\n  :host-context(.nb-theme-cosmic) .item {\n    background-color: #494299;\n    border-radius: 5px;\n    margin: 2px; }\n  :host-context(.nb-theme-cosmic) .title {\n    font-size: 1.25rem;\n    padding-bottom: 1.25rem; }\n  :host-context(.nb-theme-cosmic) .option-list {\n    list-style: none;\n    padding: 0; }\n    :host-context(.nb-theme-cosmic) .option-list .option {\n      border-bottom: 1px solid #2f296b;\n      padding-top: 0.75rem;\n      padding-bottom: 0.75rem;\n      margin-bottom: 0.50rem; }\n      :host-context(.nb-theme-cosmic) .option-list .option .option-body {\n        font-size: 1.15em; }\n      :host-context(.nb-theme-cosmic) .option-list .option .option-summary {\n        font-size: 0.85em; }\n  :host-context(.nb-theme-cosmic) nb-card {\n    box-shadow: none;\n    border: 1px solid  #dfe3eb; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-cosmic) .light,\n    :host-context(.nb-theme-cosmic) .cosmic {\n      display: none; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      padding: 0; } }\n  :host-context(.nb-theme-cosmic) .card-header {\n    padding: 0; }\n  :host-context(.nb-theme-cosmic) .select-option {\n    font-family: 'Exo'; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/panel-input-field/panel-input-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelInputFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aasModels_InputField__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/aasModels/InputField.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PanelInputFieldComponent = (function () {
    // private boxValues:any;
    // private boxAttributes:any;
    function PanelInputFieldComponent() {
        this.selectBox = false;
        this.inputBox = false;
        this.parameterBoxDisplay = false;
    }
    PanelInputFieldComponent.prototype.ngOnInit = function () {
        /**
         * The input field has 3 types of values received
         * Name              InputField
         *
         * Parameters[+]
         * attr1  val1
         * attr2  val2
         * .
         * .
         * .
         *
         */
        console.log("INPUT ITEM RECEIVED");
        console.log(this.inputItem);
        if (this.inputItem.inputType == "select")
            this.selectBox = true;
        else if (this.inputItem.inputType == "input")
            this.inputBox = true;
        //this.boxValues=this.inputItem.inputValues;
    };
    PanelInputFieldComponent.prototype.onChange = function (option) {
        if (option.name && option.params.length > 0) {
            this.parameterBoxDisplay = true;
        }
        this.parameterItem = option;
        //console.log(option);
    };
    return PanelInputFieldComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__aasModels_InputField__["a" /* InputField */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__aasModels_InputField__["a" /* InputField */]) === "function" && _a || Object)
], PanelInputFieldComponent.prototype, "inputItem", void 0);
PanelInputFieldComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-panel-input-field',
        template: __webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/panel-input-field/panel-input-field.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/panel-input-field/panel-input-field.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PanelInputFieldComponent);

var _a;
//# sourceMappingURL=panel-input-field.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/panel-subsection/panel-subsection.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n      <div class=\"title\">{{subsectionContents.name}}</div>\n  </nb-card-header>\n  <nb-card-body>\n      <ul class=\"option-list\">\n\n          <li class=\"option\" *ngFor=\"let item of inputItems\">\n              <app-panel-input-field [inputItem]='item'></app-panel-input-field>\n          </li>\n            \n        </ul>\n\n  </nb-card-body>\n  <nb-card-footer>\n      <div class=\"option-summary text-hint\">{{subsectionContents.hint}}</div>\n  </nb-card-footer>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/panel-subsection/panel-subsection.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  /*  .item-expand{\n        padding: 1rem;\n        box-shadow: 0px 0px 10px 1px black;\n        transform: scale(1.05) translateZ(100);\n    } */ }\n  :host-context(.nb-theme-default) .item {\n    background-color: #e9edf2;\n    border-radius: 5px;\n    margin: 2px; }\n  :host-context(.nb-theme-default) .option-list {\n    list-style: none;\n    padding: 0; }\n    :host-context(.nb-theme-default) .option-list .option {\n      border-bottom: 1px solid #ebeff5;\n      padding-top: 0.75rem;\n      padding-bottom: 0.75rem;\n      margin-bottom: 0.50rem; }\n      :host-context(.nb-theme-default) .option-list .option .option-body {\n        font-size: 1.15em; }\n      :host-context(.nb-theme-default) .option-list .option .option-summary {\n        font-size: 0.85em; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-default) .light,\n    :host-context(.nb-theme-default) .cosmic {\n      display: none; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-default) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      padding: 0; } }\n\n:host-context(.nb-theme-cosmic) {\n  /*  .item-expand{\n        padding: 1rem;\n        box-shadow: 0px 0px 10px 1px black;\n        transform: scale(1.05) translateZ(100);\n    } */ }\n  :host-context(.nb-theme-cosmic) .item {\n    background-color: #494299;\n    border-radius: 5px;\n    margin: 2px; }\n  :host-context(.nb-theme-cosmic) .option-list {\n    list-style: none;\n    padding: 0; }\n    :host-context(.nb-theme-cosmic) .option-list .option {\n      border-bottom: 1px solid #2f296b;\n      padding-top: 0.75rem;\n      padding-bottom: 0.75rem;\n      margin-bottom: 0.50rem; }\n      :host-context(.nb-theme-cosmic) .option-list .option .option-body {\n        font-size: 1.15em; }\n      :host-context(.nb-theme-cosmic) .option-list .option .option-summary {\n        font-size: 0.85em; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-cosmic) .light,\n    :host-context(.nb-theme-cosmic) .cosmic {\n      display: none; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      padding: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/panel-subsection/panel-subsection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelSubsectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aasModels_InputField__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/aasModels/InputField.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PanelSubsectionComponent = (function () {
    function PanelSubsectionComponent() {
        this.inputItems = [];
        this.forEachAttributes = [];
    }
    PanelSubsectionComponent.prototype.ngOnInit = function () {
        console.log("logging subsecion contents");
        console.log(this.subsectionContents);
        console.log(this.attributesList);
        this.prepareInputFields();
    };
    PanelSubsectionComponent.prototype.prepareInputFields = function () {
        var _this = this;
        if (!this.subsectionContents.forEach) {
            /**
             * if not required for all attributes of data,just use default name and create input items with it.
             */
            this.inputItems.push(new __WEBPACK_IMPORTED_MODULE_1__aasModels_InputField__["a" /* InputField */](this.subsectionContents.defaultDisplayName, this.subsectionContents.inputType, this.subsectionContents.inputValues, this.subsectionContents.htmlAttributes, this.subsectionContents.hint));
        }
        else {
            /**
             * Find the list of attributes who have the datatype of aasAttributes
             * and send them individually to the Inout Field
             */
            var requiredAttributes = [];
            console.log("logging started");
            var values_1 = Object.values(this.attributesList);
            Object.keys(this.attributesList).forEach(function (element, index) {
                //console.log(values[index]);
                if (values_1[index] === _this.subsectionContents.aasAttributesType)
                    _this.inputItems.push(new __WEBPACK_IMPORTED_MODULE_1__aasModels_InputField__["a" /* InputField */](element, _this.subsectionContents.inputType, _this.subsectionContents.inputValues, _this.subsectionContents.htmlAttributes, _this.subsectionContents.hint));
            });
            //TODO this part
            console.log(this.forEachAttributes);
        }
    };
    return PanelSubsectionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PanelSubsectionComponent.prototype, "subsectionContents", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PanelSubsectionComponent.prototype, "attributesList", void 0);
PanelSubsectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-panel-subsection',
        template: __webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/panel-subsection/panel-subsection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/panel-subsection/panel-subsection.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PanelSubsectionComponent);

//# sourceMappingURL=panel-subsection.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/parameter-configurer/parameter-configurer.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n    Configure Parameters for {{parameterItem.name}}\n  </nb-card-header>\n  <nb-card-body>\n    <app-panel-input-field *ngFor=\"let item of parameters\" [inputItem]=\"item\"></app-panel-input-field>\n  </nb-card-body>\n\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/parameter-configurer/parameter-configurer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  /*  .item-expand{\n        padding: 1rem;\n        box-shadow: 0px 0px 10px 1px black;\n        transform: scale(1.05) translateZ(100);\n    } */ }\n  :host-context(.nb-theme-default) .item {\n    background-color: #e9edf2;\n    border-radius: 5px;\n    margin: 2px; }\n  :host-context(.nb-theme-default) .title {\n    font-size: 1.25rem;\n    padding-bottom: 1.25rem; }\n  :host-context(.nb-theme-default) .option-list {\n    list-style: none;\n    padding: 0; }\n    :host-context(.nb-theme-default) .option-list .option {\n      border-bottom: 1px solid #ebeff5;\n      padding-top: 0.75rem;\n      padding-bottom: 0.75rem;\n      margin-bottom: 0.50rem; }\n      :host-context(.nb-theme-default) .option-list .option .option-body {\n        font-size: 1.15em; }\n      :host-context(.nb-theme-default) .option-list .option .option-summary {\n        font-size: 0.85em; }\n  :host-context(.nb-theme-default) nb-card {\n    box-shadow: none;\n    border: 1px solid  #dfe3eb; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-default) .light,\n    :host-context(.nb-theme-default) .cosmic {\n      display: none; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-default) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      padding: 0; } }\n  :host-context(.nb-theme-default) .card-header {\n    padding: 0; }\n  :host-context(.nb-theme-default) .select-option {\n    font-family: 'Exo'; }\n\n:host-context(.nb-theme-cosmic) {\n  /*  .item-expand{\n        padding: 1rem;\n        box-shadow: 0px 0px 10px 1px black;\n        transform: scale(1.05) translateZ(100);\n    } */ }\n  :host-context(.nb-theme-cosmic) .item {\n    background-color: #494299;\n    border-radius: 5px;\n    margin: 2px; }\n  :host-context(.nb-theme-cosmic) .title {\n    font-size: 1.25rem;\n    padding-bottom: 1.25rem; }\n  :host-context(.nb-theme-cosmic) .option-list {\n    list-style: none;\n    padding: 0; }\n    :host-context(.nb-theme-cosmic) .option-list .option {\n      border-bottom: 1px solid #2f296b;\n      padding-top: 0.75rem;\n      padding-bottom: 0.75rem;\n      margin-bottom: 0.50rem; }\n      :host-context(.nb-theme-cosmic) .option-list .option .option-body {\n        font-size: 1.15em; }\n      :host-context(.nb-theme-cosmic) .option-list .option .option-summary {\n        font-size: 0.85em; }\n  :host-context(.nb-theme-cosmic) nb-card {\n    box-shadow: none;\n    border: 1px solid  #dfe3eb; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-cosmic) .light,\n    :host-context(.nb-theme-cosmic) .cosmic {\n      display: none; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      padding: 0; } }\n  :host-context(.nb-theme-cosmic) .card-header {\n    padding: 0; }\n  :host-context(.nb-theme-cosmic) .select-option {\n    font-family: 'Exo'; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/parameter-configurer/parameter-configurer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterConfigurerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aasModels_InputField__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/aasModels/InputField.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParameterConfigurerComponent = (function () {
    function ParameterConfigurerComponent() {
        this.parameters = [];
    }
    ParameterConfigurerComponent.prototype.ngOnInit = function () {
        console.log("LOGGING PARAMTER ITEMS");
        console.log(this.parameterItem);
    };
    ParameterConfigurerComponent.prototype.ngOnChanges = function (changes) {
        console.log("LOGGING PARAMTER ITEMS");
        console.log(this.parameterItem);
        for (var propname in changes) {
            var change = changes[propname];
            var curVal = JSON.stringify(change.currentValue);
            var prevVal = JSON.stringify(change.previousValue);
            var changeLog = propname + ": currentValue = " + curVal + ", previousValue = " + prevVal;
        }
        this.generateParamterItems();
    };
    ParameterConfigurerComponent.prototype.generateParamterItems = function () {
        this.parameters = [];
        ;
        for (var _i = 0, _a = this.parameterItem.params; _i < _a.length; _i++) {
            var item = _a[_i];
            this.parameters.push(new __WEBPACK_IMPORTED_MODULE_1__aasModels_InputField__["a" /* InputField */](item.name, item.inputType, item.inpuValues, item.htmlAttributes, item.hint));
        }
    };
    return ParameterConfigurerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ParameterConfigurerComponent.prototype, "parameterItem", void 0);
ParameterConfigurerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-parameter-configurer',
        template: __webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/parameter-configurer/parameter-configurer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/parameter-configurer/parameter-configurer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ParameterConfigurerComponent);

//# sourceMappingURL=parameter-configurer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-render/configure-render.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-outline-info btn-sm\">{{renderValue}}</button>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-render/configure-render.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-render/configure-render.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigureRenderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigureRenderComponent = (function () {
    function ConfigureRenderComponent() {
    }
    ConfigureRenderComponent.prototype.ngOnInit = function () {
        this.renderValue = "Configure";
    };
    return ConfigureRenderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ConfigureRenderComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ConfigureRenderComponent.prototype, "rowData", void 0);
ConfigureRenderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-configure-render',
        template: __webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-render/configure-render.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-render/configure-render.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ConfigureRenderComponent);

//# sourceMappingURL=configure-render.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-create/analysis-tool-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <nb-card>\n      <nb-card-header>\n        Add Model Configurations\n      </nb-card-header>\n      <nb-card-body>\n        <form #form=\"ngForm\">\n          <div class=\"container\">\n            <div class=\"setting-choice-box\">\n              <div class=\"title text-hint\">Model Parameters</div>\n              <ul class=\"option-list\">\n\n                <li class=\"option\">\n                  <div class=\"option-body row\">\n                    <div class=\"option-title col-md-8 col-sm-6\">Name</div>\n                    <div class=\"option-value col-md-4 col-sm-6\">\n                      <input name=\"aasName\" [(ngModel)]=\"aasSettings.name\" type=\"text\" required class=\"form-control form-control-info\">\n                    </div>\n                  </div>\n                  <div class=\"option-summary text-hint font-w-light\">What do you want to call it?</div>\n                </li>\n\n                <li class=\"option\">\n                  <div class=\"option-body row\">\n                    <div class=\"option-title col-md-8 col-sm-6\">Select your schema</div>\n                    <div class=\"option-value col-md-4 col-sm-6\">\n                      <div class=\"dropdown\" ngbDropdown>\n                        <button class=\"btn btn-outline-info\" type=\"button\" ngbDropdownToggle>\n                          {{aasSettings.schema}}\n                        </button>\n                        <ul ngbDropdownMenu class=\"dropdown-menu\">\n                          <li class=\"dropdown-item\" (click)=\"aasSettings.schema = item;onSchemaSelect(this.aasSettings.schema)\" *ngFor=\"let item of schemas\">\n                            {{item}}\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"option-summary text-hint font-w-light\">Choose schema on which model is to be created</div>\n                </li>\n\n                <li class=\"option\">\n                  <div class=\"option-body row\">\n                    <div class=\"option-title col-sm-12\">Select Attributes</div>\n                    <div class=\"col-sm-12\">\n                      <div class=\"row\">\n                          <div class=\"col-md-8 row\">\n                              <div class=\"p-3 item\" *ngFor=\"let i of aasSettings.attributes\">\n                                  {{i}}\n                                  <button type=\"button\" (click)=\"removeAttribute(i)\" class=\"ml-1 close\" aria-label=\"Close\">\n                                    <span aria-hidden=\"true\">&times;</span>\n                                  </button>\n                              </div>\n                          </div>\n                          <div class=\"col-md-4\">\n                              <div class=\"container\">\n                                  <div class=\"row\">\n                                  <div class=\"form-group col-md-8\">\n                                      <div class=\"dropdown\" ngbDropdown>\n                                          <button class=\"btn btn-outline-info\" type=\"button\" ngbDropdownToggle>\n                                            {{selectedAttribute}}\n                                          </button>\n                                          <ul ngbDropdownMenu class=\"dropdown-menu\">\n                                            <li class=\"dropdown-item\" (click)=\"selectedAttribute=item\" *ngFor=\"let item of attributes\">\n                                              {{item}}\n                                            </li>\n                                          </ul>\n                                        </div>\n                                  </div> \n                                  \n                                  <div class=\"form-group col-md-4\">\n                                      <button class=\"form-element btn btn btn-outline-info\" (click)=\"addAttribute();\">Add</button>\n                                  </div>\n                                             \n                                </div>\n                                \n                              </div>\n                          </div>\n\n                      </div>\n                        \n                        \n                    </div>\n                  </div>\n                  <div class=\"option-summary text-hint font-w-light\">Choose required attributes</div>\n                </li>\n\n          \n         \n              </ul>\n            </div>\n          </div>\n        </form>\n      </nb-card-body>\n      <nb-card-footer>\n        <button (click)=\"onSubmit()\" [disabled]=\"!form.valid\" class=\"col-md-4 offset-md-8 btn btn-md btn-hero-info\" type=\"submit\">\n          Save\n        </button>\n      </nb-card-footer>\n    </nb-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-create/analysis-tool-create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  /*  .item-expand{\n        padding: 1rem;\n        box-shadow: 0px 0px 10px 1px black;\n        transform: scale(1.05) translateZ(100);\n    } */ }\n  :host-context(.nb-theme-default) .item {\n    background-color: #e9edf2;\n    border-radius: 5px;\n    margin: 2px; }\n  :host-context(.nb-theme-default) .setting-choice-box {\n    padding: 1.25rem; }\n    :host-context(.nb-theme-default) .setting-choice-box .title {\n      font-size: 1.25rem;\n      padding-bottom: 1.25rem; }\n    :host-context(.nb-theme-default) .setting-choice-box .option-list {\n      list-style: none;\n      padding: 0; }\n      :host-context(.nb-theme-default) .setting-choice-box .option-list .option {\n        border-bottom: 1px solid #ebeff5;\n        padding-top: 0.75rem;\n        padding-bottom: 0.75rem;\n        margin-bottom: 0.50rem; }\n        :host-context(.nb-theme-default) .setting-choice-box .option-list .option .option-body {\n          font-size: 1.15em; }\n        :host-context(.nb-theme-default) .setting-choice-box .option-list .option .option-summary {\n          font-size: 0.85em; }\n  :host-context(.nb-theme-default) .switch {\n    position: relative;\n    display: inline-block;\n    width: 4rem;\n    height: 1.75rem;\n    margin: 0;\n    cursor: pointer; }\n    :host-context(.nb-theme-default) .switch input {\n      display: none; }\n      :host-context(.nb-theme-default) .switch input:checked + .slider::before {\n        -webkit-transform: translateX(2.25rem);\n                transform: translateX(2.25rem); }\n    :host-context(.nb-theme-default) .switch .slider {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      border-radius: 1.75rem;\n      background-color: #ebeff5; }\n    :host-context(.nb-theme-default) .switch .slider::before {\n      position: absolute;\n      content: '';\n      height: 1.75rem;\n      width: 1.75rem;\n      border-radius: 50%;\n      background-color: #4ca6ff;\n      transition: 0.2s;\n      box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n    :host-context(.nb-theme-default) .switch .slider-disable::before {\n      background-color: #aaa; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-default) .light,\n    :host-context(.nb-theme-default) .cosmic {\n      display: none; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-default) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      padding: 0; } }\n\n:host-context(.nb-theme-cosmic) {\n  /*  .item-expand{\n        padding: 1rem;\n        box-shadow: 0px 0px 10px 1px black;\n        transform: scale(1.05) translateZ(100);\n    } */ }\n  :host-context(.nb-theme-cosmic) .item {\n    background-color: #494299;\n    border-radius: 5px;\n    margin: 2px; }\n  :host-context(.nb-theme-cosmic) .setting-choice-box {\n    padding: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .setting-choice-box .title {\n      font-size: 1.25rem;\n      padding-bottom: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .setting-choice-box .option-list {\n      list-style: none;\n      padding: 0; }\n      :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option {\n        border-bottom: 1px solid #2f296b;\n        padding-top: 0.75rem;\n        padding-bottom: 0.75rem;\n        margin-bottom: 0.50rem; }\n        :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option .option-body {\n          font-size: 1.15em; }\n        :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option .option-summary {\n          font-size: 0.85em; }\n  :host-context(.nb-theme-cosmic) .switch {\n    position: relative;\n    display: inline-block;\n    width: 4rem;\n    height: 1.75rem;\n    margin: 0;\n    cursor: pointer; }\n    :host-context(.nb-theme-cosmic) .switch input {\n      display: none; }\n      :host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n        -webkit-transform: translateX(2.25rem);\n                transform: translateX(2.25rem); }\n    :host-context(.nb-theme-cosmic) .switch .slider {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      border-radius: 1.75rem;\n      background-color: #2f296b; }\n    :host-context(.nb-theme-cosmic) .switch .slider::before {\n      position: absolute;\n      content: '';\n      height: 1.75rem;\n      width: 1.75rem;\n      border-radius: 50%;\n      background-color: #0088ff;\n      transition: 0.2s;\n      box-shadow: 0 0 0.25rem 0 rgba(161, 161, 229, 0.4);\n      background-image: linear-gradient(to right, #ad59ff, #7659ff); }\n    :host-context(.nb-theme-cosmic) .switch .slider-disable::before {\n      background-color: #aaa; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-cosmic) .light,\n    :host-context(.nb-theme-cosmic) .cosmic {\n      display: none; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      padding: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-create/analysis-tool-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalysisToolCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_analytics_service__ = __webpack_require__("../../../../../src/app/services/dashboard/analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dashboard_schema_service__ = __webpack_require__("../../../../../src/app/services/dashboard/schema.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_util_toast_service__ = __webpack_require__("../../../../../src/app/services/util/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnalysisToolCreateComponent = (function () {
    function AnalysisToolCreateComponent(analyticsService, schemaService, toastService) {
        this.analyticsService = analyticsService;
        this.schemaService = schemaService;
        this.toastService = toastService;
        this.attributes = [];
        this.aasSettings = {
            name: '',
            schema: '',
            attributes: [],
        };
    }
    AnalysisToolCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.schemaService.getSchemas().subscribe(function (res) {
            _this.schemas = res.schemas.map(function (item) { return item.name; });
            _this.aasSettings.schema = _this.schemas[0];
            _this.onSchemaSelect(_this.aasSettings.schema);
        });
    };
    AnalysisToolCreateComponent.prototype.onSchemaSelect = function (schemaname) {
        var _this = this;
        this.schemaService.getSchemaStructure(schemaname).subscribe(function (res) {
            //console.log(res.data.structure);
            _this.aasSettings.attributes = [];
            _this.schemaStructure = res.data.structure;
            //console.log(this.schemaStructure);
            _this.attributes = Object.keys(res.data.structure);
            //remove id,insertedAt and modifiedAt attributes
            _this.attributes.splice(_this.attributes.indexOf("_id"), 1);
            _this.attributes.splice(_this.attributes.indexOf("_insertAt"), 1);
            _this.attributes.splice(_this.attributes.indexOf("_updated"), 1);
            console.log("Schema select time attributes ");
            console.log(_this.attributes);
            _this.selectedAttribute = _this.attributes[0];
        });
    };
    AnalysisToolCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        var model = {
            name: this.aasSettings.name,
            data: {
                collectionName: this.aasSettings.schema,
                collectionAttributes: {}
            }
        };
        if (this.aasSettings.attributes.length == 0) {
            this.toastService.showToast(this.toastService.typeNum.error, "Oops!!,You have not added any attributes", "");
            return;
        }
        //console.log(model);
        for (var i in this.aasSettings.attributes) {
            var attrb = this.aasSettings.attributes[i];
            ////console.log(item);
            model.data.collectionAttributes[attrb] = this.schemaStructure[attrb].type;
        }
        //console.log(model);
        this.analyticsService.createModel(model).subscribe(function (res) {
            if (res.success) {
                _this.toastService.showToast(_this.toastService.typeNum.success, "Hurray!!", res.message);
                _this.resetForm();
            }
            else {
                _this.toastService.showToast(_this.toastService.typeNum.error, "Oops!!", res.message);
            }
        });
    };
    AnalysisToolCreateComponent.prototype.removeAttribute = function (i) {
        var index = this.aasSettings.attributes.indexOf(i);
        if (index >= 0) {
            this.aasSettings.attributes.splice(index, 1);
            this.attributes.push(i);
        }
    };
    // addAttribute2(attr){
    //     if(this.aasSettings.attributes.indexOf(attr)<0)
    //       this.aasSettings.attributes.push(attr);
    //     el
    // }
    AnalysisToolCreateComponent.prototype.addAttribute = function () {
        if (this.selectedAttribute == undefined) {
            return;
        }
        console.log(this.selectedAttribute);
        if (this.aasSettings.attributes.indexOf(this.selectedAttribute) < 0)
            this.aasSettings.attributes.push(this.selectedAttribute);
        console.log("printing index of selected attribute");
        console.log(this.attributes.indexOf(this.selectedAttribute));
        this.attributes.splice(this.attributes.indexOf(this.selectedAttribute), 1);
        this.selectedAttribute = this.attributes[0];
        ////console.log(this.outputAttributes);
        console.log(this.attributes);
        console.log(this.aasSettings.attributes);
    };
    AnalysisToolCreateComponent.prototype.resetForm = function () {
        this.aasSettings = {
            name: '',
            schema: '',
            attributes: [],
        };
        this.ngOnInit();
    };
    return AnalysisToolCreateComponent;
}());
AnalysisToolCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-analysis-tool-create',
        template: __webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-create/analysis-tool-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-create/analysis-tool-create.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dashboard_analytics_service__["a" /* AnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dashboard_analytics_service__["a" /* AnalyticsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_dashboard_schema_service__["a" /* SchemaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dashboard_schema_service__["a" /* SchemaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_util_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_util_toast_service__["a" /* ToastService */]) === "function" && _c || Object])
], AnalysisToolCreateComponent);

var _a, _b, _c;
//# sourceMappingURL=analysis-tool-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/build-models/build-model-configure/build-model-configure.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  build-model-configure works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/build-models/build-model-configure/build-model-configure.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/build-models/build-model-configure/build-model-configure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildModelConfigureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BuildModelConfigureComponent = (function () {
    function BuildModelConfigureComponent() {
    }
    BuildModelConfigureComponent.prototype.ngOnInit = function () {
    };
    return BuildModelConfigureComponent;
}());
BuildModelConfigureComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-build-model-configure',
        template: __webpack_require__("../../../../../src/app/components/dashboard/aas/build-models/build-model-configure/build-model-configure.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/aas/build-models/build-model-configure/build-model-configure.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BuildModelConfigureComponent);

//# sourceMappingURL=build-model-configure.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/build-models/build-model-create/build-model-create.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  build-model-create works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/build-models/build-model-create/build-model-create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/build-models/build-model-create/build-model-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildModelCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BuildModelCreateComponent = (function () {
    function BuildModelCreateComponent() {
    }
    BuildModelCreateComponent.prototype.ngOnInit = function () {
    };
    return BuildModelCreateComponent;
}());
BuildModelCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-build-model-create',
        template: __webpack_require__("../../../../../src/app/components/dashboard/aas/build-models/build-model-create/build-model-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/aas/build-models/build-model-create/build-model-create.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BuildModelCreateComponent);

//# sourceMappingURL=build-model-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/build-models/build-models.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  build-models works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/build-models/build-models.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/build-models/build-models.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildModelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BuildModelsComponent = (function () {
    function BuildModelsComponent() {
    }
    BuildModelsComponent.prototype.ngOnInit = function () {
    };
    return BuildModelsComponent;
}());
BuildModelsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-build-models',
        template: __webpack_require__("../../../../../src/app/components/dashboard/aas/build-models/build-models.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/aas/build-models/build-models.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BuildModelsComponent);

//# sourceMappingURL=build-models.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/configure-model/configure-model.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card >\n      <nb-card-header>\n        <div class=\"row\">\n          <div class=\"col-md-2 col-sm-4\">\n            <div class=\"dropdown\" ngbDropdown>\n              <button class=\"btn btn-outline-success\" type=\"button\" ngbDropdownToggle>\n                butrtn\n              </button>\n              <ul ngbDropdownMenu class=\"dropdown-menu\">\n                <li class=\"dropdown-item\" *ngFor=\"let item of schemaList\" (click)=\"onSelectSchema(item.name)\">\n                  {{ item.name }}\n                </li>\n              </ul>\n            </div>\n          </div>\n          <button [routerLink]=\"['add-route']\" routerLinkActive=\"active\" type=\"button\" class=\"col-md-2 offset-md-7 mr-2 btn btn-success\">\n          Add Route\n            <i class=\"fa fa-plus\"></i>\n          </button>\n        </div>\n      </nb-card-header>\n      <nb-card-body>\n        <ngb-accordion #acc=\"ngbAccordion\">\n\n          <ngb-panel *ngFor=\"let item of routes\">\n            <ng-template ngbPanelTitle>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"btn-group btn-group-full-width\" role=\"group\">\n                    <button type=\"button\" class=\"btn btn-{{getClassByOpertaionType(item.operationType)}} btn-fixed\">\n                      <span>{{item.operationType}}</span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-{{getClassByOpertaionType(item.operationType)}} btn-fixed\">\n                      <span>{{item.accessControl}}</span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-outline-{{getClassByOpertaionType(item.operationType)}} btn-block\">\n                      {{item.name}}\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </ng-template>\n            <ng-template ngbPanelContent>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  Usage Info :\n                </div>\n                <div class=\"offset-md-4 col-md-2\">\n                  <button (click)=\"deleteRoute(item.name)\" type=\"button\" class=\"btn btn-outline-danger btn-block\">\n                    Delete Route\n                  </button>\n                </div>\n              </div>\n              <hr>\n              <div class=\"row\" [class.d-md-none]=\"item.operationType != 'insert'\">\n                <div class=\"col-md-8\">\n                  Schema Structure of Insert\n                  <pre [innerHTML]=\"syntaxHighlight(schemaStructure)\">\n                  </pre>\n                </div>\n                <div class=\"col-md-4\">\n                  <strong>Usage Guide</strong>\n                  <ol>\n                    <li>API End Point : http://localhost:4000/api/{{item.operationType}}/{{item.schemaName}}/{{item.name}}</li>\n                    <li> Method of Request : {{item.requestMethod}}</li>\n                    <li> Request Content-Type: application/json</li>                    \n                  </ol>\n                  To Learn More Click\n                  <a href=\"#\">HERE(TODO)</a>\n                </div>\n              </div>\n              <div class=\"row\" [class.d-md-none]=\"item.requestByJSON\">                \n                <div class=\"col-md-12\">\n                  <strong>Usage Guide</strong>\n                  <ol>\n                    <li> API End Point : http://localhost:4000/api/{{item.operationType}}/{{item.name}}/{{item.schemaName}}/object_id_here</li>\n                    <li> Method of Request : {{item.requestMethod}}</li>\n                    <li> Request Content-Type: Simple Get Request</li>                    \n                  </ol>\n                </div>\n              </div>\n              <div class=\"row\" [class.d-md-none]=\"item.operationType == 'insert' || !item.requestByJSON\">\n                <div class=\"col-md-4\">\n                  Request Body\n                  <pre [innerHTML]=\"syntaxHighlight(item.requestBody)\">\n                  </pre>\n                </div>\n                <div class=\"col-md-4\">\n                  Constraints:\n                  <pre [innerHTML]=\"syntaxHighlight(item.constraints)\">\n                    </pre>\n                </div>\n                <div class=\"col-md-4\">\n                  <strong>Usage Guide:</strong>\n                  <ol>\n                    <li> API End Point : http://localhost:4000/api/{{item.operationType}}/{{item.schemaName}}/{{item.name}}</li>\n                    <li> Method of Request : {{item.requestMethod}}</li>\n                    <li> Request Content-Type: application/json</li>            \n                  </ol>\n                  To Learn More Click\n                  <a href=\"#\">HERE(TODO)</a>\n                </div>\n              </div>\n            </ng-template>\n          </ngb-panel>\n\n        </ngb-accordion>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n-->"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/configure-model/configure-model.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/configure-model/configure-model.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigureModelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_analytics_service__ = __webpack_require__("../../../../../src/app/services/dashboard/analytics.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigureModelComponent = (function () {
    function ConfigureModelComponent(analyticsService) {
        this.analyticsService = analyticsService;
        this.myModels = [];
    }
    ConfigureModelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.analyticsService.getModels().subscribe(function (res) {
            _this.myModels = res.schemas;
            console.log(_this.myModels);
        });
    };
    return ConfigureModelComponent;
}());
ConfigureModelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-configure-model',
        template: __webpack_require__("../../../../../src/app/components/dashboard/aas/configure-model/configure-model.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/aas/configure-model/configure-model.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dashboard_analytics_service__["a" /* AnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dashboard_analytics_service__["a" /* AnalyticsService */]) === "function" && _a || Object])
], ConfigureModelComponent);

var _a;
//# sourceMappingURL=configure-model.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/create-model/create-model.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  create-model works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/create-model/create-model.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/create-model/create-model.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateModelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateModelComponent = (function () {
    function CreateModelComponent() {
    }
    CreateModelComponent.prototype.ngOnInit = function () {
    };
    return CreateModelComponent;
}());
CreateModelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-model',
        template: __webpack_require__("../../../../../src/app/components/dashboard/aas/create-model/create-model.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/aas/create-model/create-model.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CreateModelComponent);

//# sourceMappingURL=create-model.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/visualization/visualization.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n        Visualize schema attribute\n      </nb-card-header>\n      <nb-card-body>\n        <div class=\"row\">\n          <div class=\"col-lg-2\">\n            <div class=\"col-lg-12 p-2\">              \n              <select (change)=\"getAttributes()\" [(ngModel)]=\"schemaName\" class=\"form-control form-control-info\" name=\"schemaName\">\n                <option value=\"\">Select Schema</option>                                \n                <option value=\"{{item.name}}\" *ngFor=\"let item of schemas\">{{item.name}}</option>\n              </select>\n            </div>\n            <div class=\"col-lg-12 p-2\">              \n              <select [(ngModel)]=\"xAttribute\" class=\"form-control form-control-info\" name=\"xAttribute\">\n                <option value=\"\">Select X Attribute</option>                                \n                <option value=\"{{item}}\" *ngFor=\"let item of attributeList\">{{item}}</option>\n              </select>\n            </div>\n            <div class=\"col-lg-12 p-2\">              \n              <select [(ngModel)]=\"yAttribute\" class=\"form-control form-control-info\" name=\"yAttribute\">\n                <option value=\"\">Select Y Attribute</option>                                \n                <option value=\"{{item}}\" *ngFor=\"let item of attributeList\">{{item}}</option>\n              </select>\n            </div>\n            <div class=\"col-lg-12 p-2\">              \n              <select [(ngModel)]=\"graphType\" class=\"form-control form-control-info\" name=\"graphType\">\n                <option value=\"\">Select Graph</option>                                \n                <option value=\"{{item}}\" *ngFor=\"let item of graphTypes\">{{item}}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-lg-10\">\n            <div class=\"img-box\">\n              <img class=\"img-fluid\" src=\"http://localhost:5000/analytics/visualize/{{graphType}}/{{schemaName}}/{{xAttribute}}/{{yAttribute}}\" alt=\"\">\n            </div>\n          </div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>    \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/visualization/visualization.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/aas/visualization/visualization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_schema_service__ = __webpack_require__("../../../../../src/app/services/dashboard/schema.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VisualizationComponent = (function () {
    function VisualizationComponent(schemaService) {
        this.schemaService = schemaService;
        this.graphType = '';
        this.schemaName = '';
        this.xAttribute = '';
        this.yAttribute = '';
        this.schemas = [];
        this.attributeList = [];
        this.graphTypes = ['bar', 'scatter'];
    }
    VisualizationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.schemaService.getSchemas().subscribe(function (res) {
            _this.schemas = res.schemas;
        });
    };
    VisualizationComponent.prototype.getAttributes = function () {
        var _this = this;
        console.log("res");
        this.schemaService.getSchemaStructure(this.schemaName).subscribe(function (res) {
            console.log(res);
            _this.attributeList = Object.keys(res.data.structure);
            console.log(_this.attributeList);
        });
    };
    return VisualizationComponent;
}());
VisualizationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-visualization',
        template: __webpack_require__("../../../../../src/app/components/dashboard/aas/visualization/visualization.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/aas/visualization/visualization.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dashboard_schema_service__["a" /* SchemaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dashboard_schema_service__["a" /* SchemaService */]) === "function" && _a || Object])
], VisualizationComponent);

var _a;
//# sourceMappingURL=visualization.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/analytics/analytics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8\">\n    <nb-card size=\"large\">\n      <nb-card-header>\n        Application Status - Todo User Hit Graph\n      </nb-card-header>\n      <nb-card-body>\n        <app-usage-line-chart></app-usage-line-chart>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-md-4\">\n    <nb-card size=\"large\">\n      <nb-card-header>\n        Application Details\n      </nb-card-header>\n      <nb-card-body>\n        <div class=\"setting-choice-box\">\n          <ul class=\"option-list\">\n            <li class=\"option\">\n              <div class=\"option-body row\">\n                <div class=\"col-md-4 col-sm-6\">\n                  <strong>Application Name</strong>\n                </div>\n                <div class=\"col-md-8 col-sm-6\">\n                  {{appDetails.appName}}\n                </div>\n              </div>\n            </li>\n            <li class=\"option\">\n              <div class=\"option-body row\">\n                <div class=\"col-md-4 col-sm-6\">\n                  <strong>Running Port</strong>\n                </div>\n                <div class=\"col-md-8 col-sm-6\">\n                  {{appDetails.port}}\n                </div>\n              </div>\n            </li>\n            <li class=\"option\">\n                <div class=\"option-body row\">\n                  <div class=\"col-md-4 col-sm-6\">\n                    <strong>Database Name</strong>\n                  </div>\n                  <div class=\"col-md-8 col-sm-6\">\n                    {{appDetails.database.name}}\n                  </div>\n                </div>\n              </li>\n              <li class=\"option\">\n                  <div class=\"option-body row\">\n                    <div class=\"col-md-4 col-sm-6\">\n                      <strong>Database Uri</strong>\n                    </div>\n                    <div class=\"col-md-8 col-sm-6\">\n                        mongodb://{{appDetails.database.hostname}}:{{appDetails.database.port}}/{{appDetails.database.name}}\n                    </div>\n                  </div>\n                </li>\n          </ul>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/analytics/analytics.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  /* Chart Related Styling */ }\n  :host-context(.nb-theme-default) ngx-echarts-pie,\n  :host-context(.nb-theme-default) ngx-echarts-bar,\n  :host-context(.nb-theme-default) ngx-echarts-line,\n  :host-context(.nb-theme-default) ngx-echarts-multiple-xaxis,\n  :host-context(.nb-theme-default) ngx-echarts-area-stack,\n  :host-context(.nb-theme-default) ngx-echarts-bar-animation,\n  :host-context(.nb-theme-default) ngx-echarts-radar {\n    display: block;\n    height: 456px;\n    width: 100%; }\n  :host-context(.nb-theme-default) /deep/ .echart {\n    height: 100%;\n    width: 100%; }\n  :host-context(.nb-theme-default) .setting-choice-box {\n    padding: 1.25rem; }\n    :host-context(.nb-theme-default) .setting-choice-box .title {\n      font-size: 1.25rem;\n      padding-bottom: 1.25rem; }\n    :host-context(.nb-theme-default) .setting-choice-box .option-list {\n      list-style: none;\n      padding: 0; }\n      :host-context(.nb-theme-default) .setting-choice-box .option-list .option {\n        border-bottom: 1px solid #ebeff5;\n        padding-top: 0.75rem;\n        padding-bottom: 0.75rem;\n        margin-bottom: 0.50rem; }\n        :host-context(.nb-theme-default) .setting-choice-box .option-list .option .option-body {\n          font-size: 1.15em; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-default) .light,\n    :host-context(.nb-theme-default) .cosmic {\n      display: none; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-default) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      padding: 0; } }\n\n:host-context(.nb-theme-cosmic) {\n  /* Chart Related Styling */ }\n  :host-context(.nb-theme-cosmic) ngx-echarts-pie,\n  :host-context(.nb-theme-cosmic) ngx-echarts-bar,\n  :host-context(.nb-theme-cosmic) ngx-echarts-line,\n  :host-context(.nb-theme-cosmic) ngx-echarts-multiple-xaxis,\n  :host-context(.nb-theme-cosmic) ngx-echarts-area-stack,\n  :host-context(.nb-theme-cosmic) ngx-echarts-bar-animation,\n  :host-context(.nb-theme-cosmic) ngx-echarts-radar {\n    display: block;\n    height: 456px;\n    width: 100%; }\n  :host-context(.nb-theme-cosmic) /deep/ .echart {\n    height: 100%;\n    width: 100%; }\n  :host-context(.nb-theme-cosmic) .setting-choice-box {\n    padding: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .setting-choice-box .title {\n      font-size: 1.25rem;\n      padding-bottom: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .setting-choice-box .option-list {\n      list-style: none;\n      padding: 0; }\n      :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option {\n        border-bottom: 1px solid #2f296b;\n        padding-top: 0.75rem;\n        padding-bottom: 0.75rem;\n        margin-bottom: 0.50rem; }\n        :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option .option-body {\n          font-size: 1.15em; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-cosmic) .light,\n    :host-context(.nb-theme-cosmic) .cosmic {\n      display: none; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      padding: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/analytics/analytics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_configuration_service__ = __webpack_require__("../../../../../src/app/services/dashboard/configuration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnalyticsComponent = (function () {
    function AnalyticsComponent(configurationService) {
        this.configurationService = configurationService;
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appDetails = { database: {} };
        this.configurationService.getApplicationDetails().subscribe(function (res) {
            //console.log(res.config);
            _this.appDetails = res.config;
        });
    };
    return AnalyticsComponent;
}());
AnalyticsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-analytics',
        template: __webpack_require__("../../../../../src/app/components/dashboard/analytics/analytics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/analytics/analytics.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dashboard_configuration_service__["a" /* ConfigurationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dashboard_configuration_service__["a" /* ConfigurationService */]) === "function" && _a || Object])
], AnalyticsComponent);

var _a;
//# sourceMappingURL=analytics.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/analytics/usage-line-chart/usage-line-chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/analytics/usage-line-chart/usage-line-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsageLineChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dashboard_configuration_service__ = __webpack_require__("../../../../../src/app/services/dashboard/configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_TimerObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/TimerObservable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsageLineChartComponent = (function () {
    function UsageLineChartComponent(theme, configService) {
        this.theme = theme;
        this.configService = configService;
        this.options = {};
        this.userHitRecordRefreshInterval = 10000;
    }
    UsageLineChartComponent.prototype.ngOnInit = function () {
    };
    UsageLineChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(0, _this.userHitRecordRefreshInterval)
                .subscribe(function () {
                _this.configService.getUserHitCounts()
                    .subscribe(function (res) {
                    _this.options = {
                        backgroundColor: echarts.bg,
                        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                label: {
                                    backgroundColor: echarts.tooltipBackgroundColor,
                                },
                            },
                        },
                        legend: {
                            data: ['API request count'],
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true,
                        },
                        xAxis: [
                            {
                                type: 'category',
                                boundaryGap: false,
                                data: ['210 sec', '200 sec', '190 sec', '180 sec', '170 sec', '160 sec', '150 sec', '140 sec', '130 sec', '120 sec', '110 sec', '100 sec', '90 sec', '80 sec', '70 sec', '60 sec', '50 sec', '40 sec', '30 sec', '20 sec', '10 sec'],
                                axisTick: {
                                    alignWithLabel: true,
                                },
                                axisPointer: {
                                    label: {
                                        formatter: function (params) {
                                            return ('' + params.value + ' before');
                                        },
                                    },
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: echarts.axisLineColor,
                                    },
                                },
                                axisLabel: {
                                    textStyle: {
                                        color: echarts.textColor,
                                    },
                                },
                            },
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                axisLine: {
                                    lineStyle: {
                                        color: echarts.axisLineColor,
                                    },
                                },
                                splitLine: {
                                    lineStyle: {
                                        color: echarts.splitLineColor,
                                    },
                                },
                                axisLabel: {
                                    textStyle: {
                                        color: echarts.textColor,
                                    },
                                },
                            },
                        ],
                        series: [
                            {
                                name: 'API request count',
                                type: 'line',
                                stack: 'Total amount',
                                areaStyle: { normal: { opacity: echarts.areaOpacity } },
                                data: res.count,
                            },
                        ],
                    };
                });
            });
        });
        // Chart View End
    };
    UsageLineChartComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return UsageLineChartComponent;
}());
UsageLineChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-usage-line-chart',
        template: "<div echarts [options]=\"options\" class=\"echart\"></div>",
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/analytics/usage-line-chart/usage-line-chart.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_dashboard_configuration_service__["a" /* ConfigurationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dashboard_configuration_service__["a" /* ConfigurationService */]) === "function" && _b || Object])
], UsageLineChartComponent);

var _a, _b;
//# sourceMappingURL=usage-line-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/application-logs/application-logs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <nb-card>\n      <nb-card-body>\n        Log\n        <hr>\n        <div class=\"container\" *ngFor=\"let item of logs\">\n          <pre [innerHTML]=\"item\"></pre>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/application-logs/application-logs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) pre {\n  outline: 1px solid #8a7fff;\n  background-color: #e9edf2;\n  padding: 5px;\n  margin: 5px; }\n\n:host-context(.nb-theme-cosmic) pre {\n  outline: 1px solid #7659ff;\n  background-color: #494299;\n  padding: 5px;\n  margin: 5px;\n  background-color: #a1a1e5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/application-logs/application-logs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationLogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_configuration_service__ = __webpack_require__("../../../../../src/app/services/dashboard/configuration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApplicationLogsComponent = (function () {
    function ApplicationLogsComponent(configurationService) {
        this.configurationService = configurationService;
    }
    ApplicationLogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configurationService.getAllLogs().subscribe(function (res) {
            _this.logs = res.logs;
        });
    };
    return ApplicationLogsComponent;
}());
ApplicationLogsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-application-logs',
        template: __webpack_require__("../../../../../src/app/components/dashboard/application-logs/application-logs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/application-logs/application-logs.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dashboard_configuration_service__["a" /* ConfigurationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dashboard_configuration_service__["a" /* ConfigurationService */]) === "function" && _a || Object])
], ApplicationLogsComponent);

var _a;
//# sourceMappingURL=application-logs.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/authentication/auth-routes/auth-routes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n        <div class=\"row\">\n          <div class=\"col-md-2 col-sm-4\">\n            {{ schemaName }}\n          </div>\n        </div>\n      </nb-card-header>\n      <nb-card-body>\n        <p class=\"text-hint\">Defult Authentication Routes</p>\n        <hr>\n        <ngb-accordion #acc=\"ngbAccordion\">\n          <ngb-panel>\n            <ng-template ngbPanelTitle>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"btn-group btn-group-full-width\" role=\"group\">\n                    <button type=\"button\" class=\"btn btn-primary btn-fixed\">\n                      <span>Register</span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-primary btn-fixed\">\n                      <span>Public</span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-secondary btn-block\">\n                      /api/auth/register\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </ng-template>\n            <ng-template ngbPanelContent>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                 <strong>Usage :</strong>\n                </div>\n              </div>\n              <hr>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  Example Request json object ::\n                  <pre [innerHTML]=\"syntaxHighlight(exampleRequest.register.request)\">                    \n                  </pre>\n                </div>\n                <div class=\"col-md-4\">\n                  Example Response json object ::\n                  <pre [innerHTML]=\"syntaxHighlight(exampleRequest.register.response)\">                    \n                  </pre>\n                </div>\n                <div class=\"col-md-4\">\n                  <strong>Usage Guide</strong>\n                  <ol>\n                    <li>API End Point : <a href=\"http://localhost:4000/api/register\">http://localhost:4000/api/register</a></li>\n                    <li> Method of Request : POST </li>\n                    <li> Request Content-Type: application/json</li>\n                  </ol>\n                </div>\n              </div>\n            </ng-template>\n          </ngb-panel>\n\n          <ngb-panel>\n            <ng-template ngbPanelTitle>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"btn-group btn-group-full-width\" role=\"group\">\n                    <button type=\"button\" class=\"btn btn-primary btn-fixed\">\n                      <span>Login</span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-primary btn-fixed\">\n                      <span>Public</span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-secondary btn-block\">\n                      /api/auth\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </ng-template>\n            <ng-template ngbPanelContent>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                 <strong>Usage :</strong>\n                </div>\n              </div>\n              <hr>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  Example Request json object ::\n                  <pre [innerHTML]=\"syntaxHighlight(exampleRequest.login.request)\">                    \n                  </pre>\n                </div>\n                <div class=\"col-md-4\">\n                  Example Response json object ::\n                  <pre [innerHTML]=\"syntaxHighlight(exampleRequest.login.response)\">                    \n                  </pre>\n                </div>\n                <div class=\"col-md-4\">\n                  <strong>Usage Guide</strong>\n                  <ol>\n                    <li>API End Point : <a href=\"http://localhost:4000/api/auth\">http://localhost:4000/api/auth</a></li>\n                    <li> Method of Request : POST </li>\n                    <li> Request Content-Type: application/json</li>\n                  </ol>\n                </div>\n              </div>\n            </ng-template>\n          </ngb-panel>\n\n          <ngb-panel>\n            <ng-template ngbPanelTitle>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"btn-group btn-group-full-width\" role=\"group\">\n                    <button type=\"button\" class=\"btn btn-primary btn-fixed\">\n                      <span>Google Login</span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-primary btn-fixed\">\n                      <span>Public</span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-secondary btn-block\">\n                      /api/auth/google\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </ng-template>\n            <ng-template ngbPanelContent>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                 <strong>Usage :</strong>\n                </div>\n              </div>\n              <hr>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  Example Request json object ::\n                  <pre [innerHTML]=\"exampleRequest.googleLogin.request\"></pre>\n                </div>\n                <div class=\"col-md-4\">\n                  Example Response json object ::\n                  <pre [innerHTML]=\"syntaxHighlight(exampleRequest.googleLogin.response)\">                    \n                  </pre>\n                </div>\n                <div class=\"col-md-4\">\n                  <strong>Usage Guide</strong>\n                  <ol>\n                    <li>API End Point : <a href=\"http://localhost:4000/api/auth/google\">http://localhost:4000/api/auth/google</a></li>\n                    <li> Method of Request : GET </li>\n                    <li> Request Content-Type: usage as link</li>\n                  </ol>\n                </div>\n              </div>              \n            </ng-template>\n          </ngb-panel>\n          <ngb-panel>\n            <ng-template ngbPanelTitle>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"btn-group btn-group-full-width\" role=\"group\">\n                    <button type=\"button\" class=\"btn btn-primary btn-fixed\">\n                      <span>Facebook Login</span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-primary btn-fixed\">\n                      <span>Public</span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-secondary btn-block\">\n                      /api/auth/facebook\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </ng-template>\n            <ng-template ngbPanelContent>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                 <strong>Usage :</strong>\n                 First enable facebook login from auth configuration.\n                 then get your appId and appSecret from facebook login\n                 then fill the appId and appSecret in configuration, and restart the server.\n                </div>\n              </div>\n              <hr>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  Example Response json object ::\n                  <pre [innerHTML]=\"syntaxHighlight(exampleRequest.facebookLogin.response)\">                    \n                  </pre>\n                </div>\n                <div class=\"col-md-4\">\n                  <strong>Usage Guide</strong>\n                  <ol>\n                    <li>API End Point : <a href=\"http://localhost:4000/api/auth/facebook\">http://localhost:4000/api/auth/facebook</a></li>\n                    <li> Method of Request : GET </li>\n                    <li> Request Content-Type: usage as link</li>\n                  </ol>\n                </div>\n              </div>              \n            </ng-template>\n          </ngb-panel>\n\n        </ngb-accordion>\n        <br>\n\n\n\n        <p class=\"text-hint\">User Created Routes</p>\n        <hr>\n        <ngb-accordion #acc=\"ngbAccordion\">\n          <ngb-panel *ngFor=\"let item of routes\">\n            <ng-template ngbPanelTitle>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"btn-group btn-group-full-width\" role=\"group\">\n                    <button type=\"button\" class=\"btn btn-{{getClassByOpertaionType(item.operationType)}} btn-fixed\">\n                      <span>{{item.operationType}}</span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-{{getClassByOpertaionType(item.operationType)}} btn-fixed\">\n                      <span>{{item.accessControl}}</span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-secondary btn-block\">\n                      {{item.name}}\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </ng-template>\n            <ng-template ngbPanelContent>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  Usage Info :\n                </div>\n                <div class=\"offset-md-4 col-md-2\">\n                  <button (click)=\"deleteRoute(item.name)\" type=\"button\" class=\"btn btn-outline-danger btn-block\">\n                    Delete Route\n                  </button>\n                </div>\n              </div>\n              <hr>\n              <div class=\"row\" [class.d-md-none]=\"item.operationType != 'insert'\">\n                <div class=\"col-md-8\">\n                  Schema Structure of Insert\n                  <pre [innerHTML]=\"syntaxHighlight(schemaStructure)\">\n                  </pre>\n                </div>\n                <div class=\"col-md-4\">\n                  <strong>Usage Guide</strong>\n                  <ol>\n                    <li>API End Point : http://localhost:4000/api/{{item.operationType}}/{{item.schemaName}}/{{item.name}}</li>\n                    <li> Method of Request : {{item.requestMethod}}</li>\n                    <li> Request Content-Type: application/json</li>\n                  </ol>\n                  To Learn More Click\n                  <a href=\"#\">HERE(TODO)</a>\n                </div>\n              </div>\n              <div class=\"row\" [class.d-md-none]=\"item.requestByJSON\">\n                <div class=\"col-md-12\">\n                  <strong>Usage Guide</strong>\n                  <ol>\n                    <li> API End Point : http://localhost:4000/api/{{item.operationType}}/{{item.name}}/{{item.schemaName}}/object_id_here</li>\n                    <li> Method of Request : {{item.requestMethod}}</li>\n                    <li> Request Content-Type: Simple Get Request</li>\n                  </ol>\n                </div>\n              </div>\n              <div class=\"row\" [class.d-md-none]=\"item.operationType == 'insert' || !item.requestByJSON\">\n                <div class=\"col-md-4\">\n                  Request Body\n                  <pre [innerHTML]=\"syntaxHighlight(item.requestBody)\">\n                  </pre>\n                </div>\n                <div class=\"col-md-4\">\n                  Constraints:\n                  <pre [innerHTML]=\"syntaxHighlight(item.constraints)\">\n                    </pre>\n                </div>\n                <div class=\"col-md-4\">\n                  <strong>Usage Guide:</strong>\n                  <ol>\n                    <li> API End Point : http://localhost:4000/api/{{item.operationType}}/{{item.schemaName}}/{{item.name}}</li>\n                    <li> Method of Request : {{item.requestMethod}}</li>\n                    <li> Request Content-Type: application/json</li>\n                  </ol>\n                  To Learn More Click\n                  <a href=\"#\">HERE(TODO)</a>\n                </div>\n              </div>\n            </ng-template>\n          </ngb-panel>\n        </ngb-accordion>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/authentication/auth-routes/auth-routes.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) /deep/ .card {\n  background: transparent;\n  border: none; }\n\n:host-context(.nb-theme-default) /deep/ .card-header {\n  margin-top: 0.75em !important;\n  border: 1px solid #e9edf2;\n  border-radius: 0;\n  background-color: #ffffff; }\n\n:host-context(.nb-theme-default) /deep/ .card-block {\n  text-align: left; }\n\n:host-context(.nb-theme-default) pre {\n  outline: 1px solid #8a7fff;\n  padding: 5px;\n  margin: 5px; }\n  :host-context(.nb-theme-default) pre /deep/ .string {\n    color: green; }\n  :host-context(.nb-theme-default) pre /deep/ .number {\n    color: darkorange; }\n  :host-context(.nb-theme-default) pre /deep/ .boolean {\n    color: blue; }\n  :host-context(.nb-theme-default) pre /deep/ .null {\n    color: magenta; }\n  :host-context(.nb-theme-default) pre /deep/ .key {\n    color: red; }\n\n:host-context(.nb-theme-cosmic) /deep/ .card {\n  background: transparent;\n  border: none; }\n\n:host-context(.nb-theme-cosmic) /deep/ .card-header {\n  margin-top: 0.75em !important;\n  border: 1px solid #494299;\n  border-radius: 0;\n  background-color: #3d3780; }\n\n:host-context(.nb-theme-cosmic) /deep/ .card-block {\n  text-align: left; }\n\n:host-context(.nb-theme-cosmic) pre {\n  outline: 1px solid #7659ff;\n  padding: 5px;\n  margin: 5px; }\n  :host-context(.nb-theme-cosmic) pre /deep/ .string {\n    color: green; }\n  :host-context(.nb-theme-cosmic) pre /deep/ .number {\n    color: darkorange; }\n  :host-context(.nb-theme-cosmic) pre /deep/ .boolean {\n    color: blue; }\n  :host-context(.nb-theme-cosmic) pre /deep/ .null {\n    color: magenta; }\n  :host-context(.nb-theme-cosmic) pre /deep/ .key {\n    color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/authentication/auth-routes/auth-routes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_route_handler_service__ = __webpack_require__("../../../../../src/app/services/dashboard/route-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dashboard_schema_service__ = __webpack_require__("../../../../../src/app/services/dashboard/schema.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_util_toast_service__ = __webpack_require__("../../../../../src/app/services/util/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthRoutesComponent = (function () {
    function AuthRoutesComponent(activatedRoutes, routeHandlerService, schemaService, router, toastService) {
        this.activatedRoutes = activatedRoutes;
        this.routeHandlerService = routeHandlerService;
        this.schemaService = schemaService;
        this.router = router;
        this.toastService = toastService;
        this.exampleRequest = {
            register: {
                request: "{\n        \"user\" : {\n          \"username\" : \"username/email\",\n          \"password\" : \"string\"\n        }\n      }",
                response: "{        \n        \"success\": \"true/false\"        \n        \"message\" : \"MSG\"\n    }"
            },
            login: {
                request: "{\n        \"user\" : {\n          \"username\" : \"username/email\",\n          \"password\" : \"string\"\n        }\n      }",
                response: "{        \n          \"success\": \"true/false\",\n          \"token\": \"Bearer token\",\n          \"data\" : { \"user\": \"info\" }        \n      }"
            },
            googleLogin: {
                request: "\n        Hit this api link and it will redirect\n        to google authentication and\n        return response.\n      ",
                response: "{\n        \"success\": \"true/false\",\n        \"token\": \"Bearer token\",\n        \"user\": \"user session object\",\n        \"data\" : { \"user\": \"info\" }\n      }"
            },
            facebookLogin: {
                request: "\n        Hit this api link and it will redirect\n        to facebook authentication and\n        return response.\n      ",
                response: "{\n        \"success\": \"true/false\"\n        \"token\": \"Bearer token\",\n        \"user\": \"user session object\",\n        \"data\" : { \"user\": \"info\" }\n      }"
            }
        };
    }
    AuthRoutesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.paramMap.subscribe(function (params) {
            _this.schemaName = 'authuser';
            _this.routeHandlerService.getRoutesOfSchema({
                schemaName: _this.schemaName
            })
                .subscribe(function (res) {
                console.log(res);
                _this.routes = res.data;
                _this.schemaService.getSchemaStructure(_this.schemaName).subscribe(function (resp) {
                    _this.schemaStructure = resp.data.structure;
                });
            });
        });
    };
    AuthRoutesComponent.prototype.onSelectSchema = function (schemaName) {
        this.router.navigate(['dashboard', 'api-access', schemaName]);
    };
    AuthRoutesComponent.prototype.getClassByOpertaionType = function (operation) {
        switch (operation) {
            case 'insert':
                return 'success';
            case 'update':
                return 'primary';
            case 'find':
                return 'info';
            case 'delete':
                return 'danger';
            default:
                return 'warning';
        }
    };
    AuthRoutesComponent.prototype.deleteRoute = function (routeName) {
        var _this = this;
        var route = {
            name: routeName,
            schemaName: this.schemaName
        };
        this.routeHandlerService.deleteRoute(route).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.toastService.showToast(_this.toastService.typeNum.success, "Hurray !!", res.message);
                _this.ngOnInit();
            }
            else {
                _this.toastService.showToast(_this.toastService.typeNum.error, "Oops!!", res.message);
            }
        });
    };
    AuthRoutesComponent.prototype.syntaxHighlight = function (json) {
        if (typeof json != 'string') {
            json = JSON.stringify(json, undefined, 2);
        }
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            var cls = 'text-warning';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'text-primary';
                }
                else {
                    cls = 'text-warning';
                }
            }
            else if (/true|false/.test(match)) {
                cls = 'text-info';
            }
            else if (/null/.test(match)) {
                cls = 'text-danger';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    };
    return AuthRoutesComponent;
}());
AuthRoutesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-auth-routes',
        template: __webpack_require__("../../../../../src/app/components/dashboard/authentication/auth-routes/auth-routes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/authentication/auth-routes/auth-routes.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_dashboard_route_handler_service__["a" /* RouteHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dashboard_route_handler_service__["a" /* RouteHandlerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_dashboard_schema_service__["a" /* SchemaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dashboard_schema_service__["a" /* SchemaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_util_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_util_toast_service__["a" /* ToastService */]) === "function" && _e || Object])
], AuthRoutesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=auth-routes.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/authentication/authentication.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-8\">\n    <nb-card>\n      <nb-card-header>\n        Authentication Configurations\n      </nb-card-header>\n      <nb-card-body>\n        <div class=\"container\">\n          <div class=\"setting-choice-box\">\n            <div class=\"title text-hint\">Sign up options</div>\n            <ul class=\"option-list\">\n\n              <li class=\"option\">\n                <div class=\"option-body row\">\n                  <div class=\"option-title col-md-8 col-sm-6\">Primary Login with</div>\n                  <div class=\"option-value col-md-4 col-sm-6\">\n                    <div class=\"dropdown\" ngbDropdown>\n                      <button class=\"btn btn-outline-info\" type=\"button\" ngbDropdownToggle>\n                        {{configurations.signInOptions.primaryLogin}}\n                      </button>\n                      <ul ngbDropdownMenu class=\"dropdown-menu\">\n                        <li class=\"dropdown-item\" (click)=\"configurations.signInOptions.primaryLogin = item\" *ngFor=\"let item of primaryLoginOptions\">\n                          {{item}}\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"option-summary text-hint font-w-light\">Choose a primary login method.</div>\n              </li>\n\n              <li class=\"option\">\n                <div class=\"option-body row\">\n                  <div class=\"option-title col-md-6 col-sm-6\">Email Verification</div>\n                  <div class=\"col-md-2\">\n                    <i class=\"fa-2x ion ion-email\" [class.text-warning]=\"configurations.signInOptions.verifyWithEmail\"></i>\n                  </div>\n                  <div class=\"option-value col-md-4 col-sm-6\">\n                    <label class=\"row\">\n                      <div class=\"col-md-4 text-hint\" *ngIf=\"!configurations.signInOptions.verifyWithEmail\">Enable</div>\n                      <div class=\"col-md-4 text-hint\" *ngIf=\"configurations.signInOptions.verifyWithEmail\">Disable</div>\n                      <div class=\"col-md-4\">\n                        <div class=\"switch\">\n                          <input type=\"checkbox\" name=\"verifyEmail\" [(ngModel)]=\"configurations.signInOptions.verifyWithEmail\" [checked]=\"configurations.signInOptions.verifyWithEmail\">\n                          <span class=\"slider\" [class.slider-disable]=\"!configurations.signInOptions.verifyWithEmail\"></span>\n                        </div>\n                      </div>\n                    </label>\n                  </div>\n                </div>\n                <div class=\"option-summary text-hint font-w-light\">Varify Email in case of email usage</div>\n              </li>\n\n              <li class=\"option\">\n                <div class=\"option-body row\">\n                  <div class=\"option-title col-md-6 col-sm-6\">Gmail login</div>\n                  <div class=\"col-md-2\">\n                    <i class=\"fa-2x ion ion-social-google-outline\" [class.text-danger]=\"configurations.signInOptions.googleLoginOption.isEnabled\"></i>\n                  </div>\n                  <div class=\"option-value col-md-4 col-sm-6\">\n                    <label class=\"row\">\n                      <div class=\"col-md-4 text-hint\" *ngIf=\"!configurations.signInOptions.googleLoginOption.isEnabled\">Enable</div>\n                      <div class=\"col-md-4 text-hint\" *ngIf=\"configurations.signInOptions.googleLoginOption.isEnabled\">Disable</div>\n                      <div class=\"col-md-4\">\n                        <div class=\"switch\">\n                          <input type=\"checkbox\" name=\"viaGoogle\" [(ngModel)]=\"configurations.signInOptions.googleLoginOption.isEnabled\" [checked]=\"configurations.signInOptions.loginWithGoogle\"\n                            #gmailCheck>\n                          <span class=\"slider\" [class.slider-disable]=\"!configurations.signInOptions.googleLoginOption.isEnabled\"></span>\n                        </div>\n                      </div>\n                    </label>\n                  </div>\n                </div>\n                <div class=\"option-summary text-hint font-w-light\">Set sign up with Gmail</div>\n                <div class=\"container p-2\" [class.d-md-none]=\"!configurations.signInOptions.googleLoginOption.isEnabled\">                                    \n                  <div class=\"row\">\n                    <div class=\"input-group col-md-7\">\n                      <input [(ngModel)]=\"configurations.signInOptions.googleLoginOption.clientID\" [disabled]=\"!unlockEdit\" class=\"form-control\" name=\"googleClientID\" type=\"text\" placeholder=\"Paste your Google client ID\">\n                    </div>\n                    <div class=\"input-group col-md-3\">\n                      <input [(ngModel)]=\"configurations.signInOptions.googleLoginOption.clientSecrete\" [disabled]=\"!unlockEdit\" class=\"form-control\" name=\"googleClientSecrete\" type=\"text\" placeholder=\"Paste your Google client Secrete\">\n                    </div>\n                    <button (click)=\"unlockEdit = !unlockEdit\" class=\"btn btn-outline-warning\">Edit <i class=\"fa fa-edit\"></i></button>\n                  </div>\n                  <br>\n                  <span class=\"text-danger\">If Parameters for facebook login is changed, Server need to be restart to set it in action.</span>\n                  <br>\n                </div>\n              </li>\n\n              <li class=\"option\">\n                <div class=\"option-body row\">\n                  <div class=\"option-title col-md-6 col-sm-6\">Facebook login</div>\n                  <div class=\"col-md-2\">\n                    <i class=\"fa-2x ion ion-social-facebook\" [class.text-info]=\"configurations.signInOptions.facebookLoginOption.isEnabled\"></i>\n                  </div>\n                  <div class=\"option-value col-md-4 col-sm-6\">\n                    <label class=\"row\">\n                      <div class=\"col-md-4 text-hint\" *ngIf=\"!configurations.signInOptions.facebookLoginOption.isEnabled\">Enable</div>\n                      <div class=\"col-md-4 text-hint\" *ngIf=\"configurations.signInOptions.facebookLoginOption.isEnabled\">Disable</div>\n                      <div class=\"col-md-4\">\n                        <div class=\"switch\">\n                          <input type=\"checkbox\" name=\"viaFacebook\" [(ngModel)]=\"configurations.signInOptions.facebookLoginOption.isEnabled\"  #facebookCheck>\n                          <span class=\"slider\" [class.slider-disable]=\"!configurations.signInOptions.facebookLoginOption.isEnabled\"></span>\n                        </div>\n                      </div>\n                    </label>\n                  </div>\n                </div>\n                <div class=\"option-summary text-hint font-w-light\">Set sign up with Facebook</div>\n                <div class=\"container p-2\" [class.d-md-none]=\"!configurations.signInOptions.facebookLoginOption.isEnabled\">                                    \n                  <div class=\"row\">\n                    <div class=\"input-group col-md-7\">\n                      <input [(ngModel)]=\"configurations.signInOptions.facebookLoginOption.clientID\" [disabled]=\"!unlockEdit\" class=\"form-control\" name=\"facebookClientID\" type=\"text\" placeholder=\"Paste your Facebook client ID\">\n                    </div>\n                    <div class=\"input-group col-md-3\">\n                      <input [(ngModel)]=\"configurations.signInOptions.facebookLoginOption.clientSecrete\" [disabled]=\"!unlockEdit\" class=\"form-control\" name=\"facebookClientSecrete\" type=\"text\" placeholder=\"Paste your Facebook client Secrete\">\n                    </div>\n                    <button (click)=\"unlockEdit = !unlockEdit\" class=\"btn btn-outline-warning\">Edit <i class=\"fa fa-edit\"></i></button>\n                  </div>\n                  <br>\n                  <span class=\"text-danger\">If Parameters for facebook login is changed, Server need to be restart to set it in action.</span>\n                  <br>\n                </div>\n              </li>             \n\n              <li class=\"option\">\n                <div class=\"option-body row\">\n                  <div class=\"option-title col-md-8 col-sm-6\">Redirect/Callback social login url</div>\n                  <div class=\"option-value col-md-4 col-sm-6\">\n                    <input  [(ngModel)]=\"configurations.signInOptions.redirectUrl\" class=\"form-control form-control-info\" type=\"text\">\n                  </div>\n                </div>\n                <div class=\"option-summary text-hint font-w-light\">Callback URL for social media login.</div>\n              </li>\n\n            </ul>\n          </div>\n        </div>\n      </nb-card-body>\n      <nb-card-footer>\n        <button (click)=\"saveConfigurations()\" class=\"col-md-4 offset-md-8 btn btn-hero-info\" type=\"button\">\n          Save\n        </button>\n      </nb-card-footer>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-4 col-md-4\">\n    <nb-card>\n      <nb-card-header>\n        Todo-Some Graphs Related to User\n      </nb-card-header>\n      <nb-card-body>\n\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/authentication/authentication.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .setting-choice-box {\n  padding: 1.25rem; }\n  :host-context(.nb-theme-default) .setting-choice-box .title {\n    font-size: 1.25rem;\n    padding-bottom: 1.25rem; }\n  :host-context(.nb-theme-default) .setting-choice-box .option-list {\n    list-style: none;\n    padding: 0; }\n    :host-context(.nb-theme-default) .setting-choice-box .option-list .option {\n      border-bottom: 1px solid #ebeff5;\n      padding-top: 0.75rem;\n      padding-bottom: 0.75rem;\n      margin-bottom: 0.50rem; }\n      :host-context(.nb-theme-default) .setting-choice-box .option-list .option .option-body {\n        font-size: 1.15em; }\n      :host-context(.nb-theme-default) .setting-choice-box .option-list .option .option-summary {\n        font-size: 0.85em; }\n\n:host-context(.nb-theme-default) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0;\n  cursor: pointer; }\n  :host-context(.nb-theme-default) .switch input {\n    display: none; }\n    :host-context(.nb-theme-default) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-default) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #ebeff5; }\n  :host-context(.nb-theme-default) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #4ca6ff;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n  :host-context(.nb-theme-default) .switch .slider-disable::before {\n    background-color: #aaa; }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) .light,\n  :host-context(.nb-theme-default) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    padding: 0; } }\n\n:host-context(.nb-theme-cosmic) .setting-choice-box {\n  padding: 1.25rem; }\n  :host-context(.nb-theme-cosmic) .setting-choice-box .title {\n    font-size: 1.25rem;\n    padding-bottom: 1.25rem; }\n  :host-context(.nb-theme-cosmic) .setting-choice-box .option-list {\n    list-style: none;\n    padding: 0; }\n    :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option {\n      border-bottom: 1px solid #2f296b;\n      padding-top: 0.75rem;\n      padding-bottom: 0.75rem;\n      margin-bottom: 0.50rem; }\n      :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option .option-body {\n        font-size: 1.15em; }\n      :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option .option-summary {\n        font-size: 0.85em; }\n\n:host-context(.nb-theme-cosmic) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0;\n  cursor: pointer; }\n  :host-context(.nb-theme-cosmic) .switch input {\n    display: none; }\n    :host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-cosmic) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #2f296b; }\n  :host-context(.nb-theme-cosmic) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0088ff;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(161, 161, 229, 0.4);\n    background-image: linear-gradient(to right, #ad59ff, #7659ff); }\n  :host-context(.nb-theme-cosmic) .switch .slider-disable::before {\n    background-color: #aaa; }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) .light,\n  :host-context(.nb-theme-cosmic) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    padding: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/authentication/authentication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_configuration_service__ = __webpack_require__("../../../../../src/app/services/dashboard/configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_util_toast_service__ = __webpack_require__("../../../../../src/app/services/util/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationComponent = (function () {
    function AuthenticationComponent(configurationService, toastService) {
        this.configurationService = configurationService;
        this.toastService = toastService;
        this.primaryLoginOptions = ['email', 'username'];
        this.unlockEdit = false;
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configurations = {
            signInOptions: {
                primaryLogin: 'email',
                allowLoginAsGuest: false,
                verifyWithEmail: false,
                googleLoginOption: {
                    isEnabled: false,
                    clientID: '',
                    clientSecrete: '',
                },
                facebookLoginOption: {
                    isEnabled: false,
                    clientID: '',
                    clientSecrete: '',
                },
                redirectUrl: ''
            },
        };
        this.configurationService.getAuthenticationConfig().subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.configurations = res.data.config;
            }
            else {
                _this.configurations = { signInOptions: {} };
            }
        });
    };
    AuthenticationComponent.prototype.saveConfigurations = function () {
        var _this = this;
        this.configurationService.setAuthenticationConfig(this.configurations).subscribe(function (res) {
            if (res.success) {
                _this.toastService.showToast(_this.toastService.typeNum.success, "Hurray!", res.message);
            }
            else {
                _this.toastService.showToast(_this.toastService.typeNum.error, "Oops!", res.message);
            }
        });
    };
    return AuthenticationComponent;
}());
AuthenticationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-authentication',
        template: __webpack_require__("../../../../../src/app/components/dashboard/authentication/authentication.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/authentication/authentication.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dashboard_configuration_service__["a" /* ConfigurationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dashboard_configuration_service__["a" /* ConfigurationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_util_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_util_toast_service__["a" /* ToastService */]) === "function" && _b || Object])
], AuthenticationComponent);

var _a, _b;
//# sourceMappingURL=authentication.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/authentication/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n    <nb-card-header>\n      <div class=\"row\">\n        <div class=\"col-md-3 p-2 pl-6\">\n            <h6>{{ tableTitle | uppercase }}</h6>\n        </div>                  \n      </div>\n    </nb-card-header>\n    <nb-card-body>    \n      <ng2-smart-table class='form-control form-control-success' [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\"\n        (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\"></ng2-smart-table>\n    </nb-card-body>\n  </nb-card>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/authentication/users/users.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nb-card {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/authentication/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dashboard_schema_service__ = __webpack_require__("../../../../../src/app/services/dashboard/schema.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap_modal_modal__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/modal/modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_util_toast_service__ = __webpack_require__("../../../../../src/app/services/util/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsersComponent = (function () {
    function UsersComponent(route, schemaService, modalService, toastService, router) {
        this.route = route;
        this.schemaService = schemaService;
        this.modalService = modalService;
        this.toastService = toastService;
        this.router = router;
        this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */]();
        this.settings = {};
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.paramMap.subscribe(function (params) {
            _this.tableTitle = 'authuser';
            _this.schemaService.getSchemaData(_this.tableTitle).subscribe(function (res) {
                if (res.data !== null && res.data.structure) {
                    if (res.success)
                        _this.toastService.showToast(_this.toastService.typeNum.info, "", res.message);
                    Object.keys(res.data.structure).forEach(function (i) {
                        res.data.structure[i].title = i;
                        res.data.structure[i].editable = false;
                    });
                    _this.settings = {
                        add: {
                            addButtonContent: '<i class="nb-plus"></i>',
                            createButtonContent: '<i class="nb-checkmark"></i>',
                            cancelButtonContent: '<i class="nb-close"></i>',
                            confirmCreate: true
                        },
                        edit: {
                            editButtonContent: '<i class="nb-edit"></i>',
                            saveButtonContent: '<i class="nb-checkmark"></i>',
                            cancelButtonContent: '<i class="nb-close"></i>',
                            confirmSave: true
                        },
                        delete: {
                            deleteButtonContent: '<i class="nb-trash"></i>',
                            confirmDelete: true,
                        },
                        actions: {
                            edit: false
                        },
                        columns: res.data.structure,
                    };
                    var data = res.data.rows;
                    _this.source.load(data);
                }
                else {
                    _this.settings = {
                        add: {
                            addButtonContent: '<i class="nb-plus"></i>',
                            createButtonContent: '<i class="nb-checkmark"></i>',
                            cancelButtonContent: '<i class="nb-close"></i>',
                            confirmCreate: true
                        },
                        edit: {
                            editButtonContent: '<i class="nb-edit"></i>',
                            saveButtonContent: '<i class="nb-checkmark"></i>',
                            cancelButtonContent: '<i class="nb-close"></i>',
                            confirmSave: true
                        },
                        delete: {
                            deleteButtonContent: '<i class="nb-trash"></i>',
                            confirmDelete: true,
                        },
                        actions: {
                            edit: false
                        },
                        columns: {},
                    };
                }
            });
        });
    };
    UsersComponent.prototype.onSelectSchema = function (schemaName) {
        this.router.navigate(['dashboard', 'table', schemaName]);
    };
    UsersComponent.prototype.onCreateConfirm = function (event) {
        var _this = this;
        var row = {
            schema: this.tableTitle,
            data: event.newData
        };
        this.schemaService.insertData(row).subscribe(function (res) {
            if (res.success) {
                event.confirm.resolve();
                _this.toastService.showToast(_this.toastService.typeNum.success, "Hurray!!", res.message);
                _this.ngOnInit();
            }
            else {
                event.confirm.reject();
                _this.toastService.showToast(_this.toastService.typeNum.error, "Oops!!", res.message);
            }
        });
    };
    UsersComponent.prototype.onSaveConfirm = function (event) {
        console.log("Save confirm");
    };
    UsersComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        if (window.confirm('Are you sure you want to delete?')) {
            var row = {
                schema: this.tableTitle,
                data: event.data
            };
            this.schemaService.deleteData(row).subscribe(function (res) {
                console.log(res);
                if (res.success) {
                    event.confirm.resolve();
                    _this.toastService.showToast(_this.toastService.typeNum.success, "Hurray!!", res.message);
                    //this.ngOnInit();
                }
                else {
                    event.confirm.reject();
                    _this.toastService.showToast(_this.toastService.typeNum.error, "Oops!!", res.message);
                }
            });
        }
        else {
            event.confirm.reject();
        }
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users',
        template: __webpack_require__("../../../../../src/app/components/dashboard/authentication/users/users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/authentication/users/users.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_dashboard_schema_service__["a" /* SchemaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dashboard_schema_service__["a" /* SchemaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap_modal_modal__["a" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap_modal_modal__["a" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_util_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_util_toast_service__["a" /* ToastService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], UsersComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-sample-layout>\n  <nb-menu [items]=\"menu\"></nb-menu>  \n  <router-outlet>    \n  </router-outlet>\n</ngx-sample-layout>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_schema_service__ = __webpack_require__("../../../../../src/app/services/dashboard/schema.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(schemaService) {
        this.schemaService = schemaService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var tempSchema = [];
        // this.schemaService.getSchemas().subscribe((res)=>{            
        //   for (let schema of res.schemas) {
        //     tempSchema.push({
        //       title: schema.name,
        //       link: ['table',schema.name]
        //     })
        //   }           
        //  });         
        this.menu = this.getMenuItems(tempSchema);
    };
    DashboardComponent.prototype.getMenuItems = function (schemas) {
        var MENU_ITEMS = [
            {
                title: 'Status',
                icon: 'nb-bar-chart',
                link: '/dashboard/analytics',
                home: true,
            },
            {
                title: 'End Points',
                group: true,
            },
            {
                title: 'Database',
                icon: 'nb-cloudy',
                link: '/dashboard/table',
                children: [
                    {
                        title: 'Schema',
                        link: '/dashboard/schema'
                    },
                    {
                        title: 'View Schema',
                        link: '/dashboard/table'
                    },
                    {
                        title: 'API Hit Points',
                        link: '/dashboard/api-access'
                    }
                ],
            },
            {
                title: 'Authentication',
                link: '/dashboard/authentication/settings',
                icon: 'nb-locked',
                children: [
                    {
                        title: 'Configurations',
                        link: '/dashboard/authentication/settings'
                    },
                    {
                        title: 'Users',
                        link: '/dashboard/authentication/users'
                    },
                    {
                        title: 'Routes',
                        link: '/dashboard/authentication/routes'
                    }
                ]
            },
            {
                title: 'AaS',
                icon: 'ion-ios-analytics-outline',
                children: [
                    {
                        title: 'Analysis Tool',
                        link: '/dashboard/analytics-tool',
                        children: [
                            {
                                title: 'Create Model',
                                link: '/dashboard/analytics-tool-create',
                            },
                            {
                                title: 'Configure Pipeline',
                                link: '/dashboard/analytics-tool-configure',
                            }
                        ]
                    },
                    {
                        title: 'Build Models',
                        children: [
                            {
                                title: 'Create Model',
                                link: '/dashboard/analytics-home-create',
                            },
                            {
                                title: 'Configure Model',
                                link: '/dashboard/analytics-home-configure',
                            }
                        ]
                    },
                    {
                        title: 'Visulisation',
                        link: '/dashboard/analytics/visualize'
                    }
                ]
            },
            {
                title: 'Storage Service',
                link: '/dashboard/storage-configuration',
                icon: 'ion-social-dropbox-outline',
                children: [
                    {
                        title: 'Configurations',
                        link: '/dashboard/storage-configuration'
                    }
                ]
            },
            {
                title: 'Settings',
                group: true,
            },
            {
                title: 'Logs',
                icon: 'nb-tables',
                link: '/dashboard/logs'
            },
            {
                title: 'Account',
                icon: 'nb-person',
                link: '/dashboard/user-profile',
            },
        ];
        return MENU_ITEMS;
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dashboard_schema_service__["a" /* SchemaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dashboard_schema_service__["a" /* SchemaService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modulesUtils_routing_dashboard_routing_module__ = __webpack_require__("../../../../../src/app/modulesUtils/routing/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schema_schema_component__ = __webpack_require__("../../../../../src/app/components/dashboard/schema/schema.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__analytics_analytics_component__ = __webpack_require__("../../../../../src/app/components/dashboard/analytics/analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/components/dashboard/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__schema_schema_modal_schema_modal_component__ = __webpack_require__("../../../../../src/app/components/dashboard/schema/schema-modal/schema-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__table_table_component__ = __webpack_require__("../../../../../src/app/components/dashboard/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__table_add_attribute_modal_add_attribute_modal_component__ = __webpack_require__("../../../../../src/app/components/dashboard/table/add-attribute-modal/add-attribute-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__authentication_authentication_component__ = __webpack_require__("../../../../../src/app/components/dashboard/authentication/authentication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__route_handlers_route_handlers_component__ = __webpack_require__("../../../../../src/app/components/dashboard/route-handlers/route-handlers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__route_handlers_add_route_modal_add_route_modal_component__ = __webpack_require__("../../../../../src/app/components/dashboard/route-handlers/add-route-modal/add-route-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__schema_schema_detail_card_schema_detail_card_component__ = __webpack_require__("../../../../../src/app/components/dashboard/schema/schema-detail-card/schema-detail-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__analytics_usage_line_chart_usage_line_chart_component__ = __webpack_require__("../../../../../src/app/components/dashboard/analytics/usage-line-chart/usage-line-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__authentication_users_users_component__ = __webpack_require__("../../../../../src/app/components/dashboard/authentication/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__authentication_auth_routes_auth_routes_component__ = __webpack_require__("../../../../../src/app/components/dashboard/authentication/auth-routes/auth-routes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__application_logs_application_logs_component__ = __webpack_require__("../../../../../src/app/components/dashboard/application-logs/application-logs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/components/dashboard/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__aas_aas_component__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/aas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__aas_configure_model_configure_model_component__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/configure-model/configure-model.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__aas_analyse_model_analyse_model_component__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analyse-model.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__aas_create_model_create_model_component__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/create-model/create-model.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__aas_analyse_model_analysis_tool_create_analysis_tool_create_component__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-create/analysis-tool-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__aas_analyse_model_analysis_tool_configure_analysis_tool_configure_component__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/analysis-tool-configure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__aas_build_models_build_models_component__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/build-models/build-models.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__aas_build_models_build_model_configure_build_model_configure_component__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/build-models/build-model-configure/build-model-configure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__aas_build_models_build_model_create_build_model_create_component__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/build-models/build-model-create/build-model-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__aas_analyse_model_analysis_tool_configure_configure_render_configure_render_component__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-render/configure-render.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__aas_analyse_model_analysis_tool_configure_configure_collapsible_panel_configure_collapsible_panel_component__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/configure-collapsible-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__aas_analyse_model_analysis_tool_configure_configure_collapsible_panel_panel_input_field_panel_input_field_component__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/panel-input-field/panel-input-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__aas_analyse_model_analysis_tool_configure_configure_collapsible_panel_panel_subsection_panel_subsection_component__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/panel-subsection/panel-subsection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__schema_edit_schema_edit_schema_component__ = __webpack_require__("../../../../../src/app/components/dashboard/schema/edit-schema/edit-schema.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__schema_edit_schema_attribute_config_attribute_config_component__ = __webpack_require__("../../../../../src/app/components/dashboard/schema/edit-schema/attribute-config/attribute-config.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__aas_analyse_model_analysis_tool_configure_configure_collapsible_panel_parameter_configurer_parameter_configurer_component__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/configure-collapsible-panel/parameter-configurer/parameter-configurer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__storage_service_storage_service_component__ = __webpack_require__("../../../../../src/app/components/dashboard/storage-service/storage-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__aas_visualization_visualization_component__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/visualization/visualization.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































var PAGES_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
];
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__modulesUtils_routing_dashboard_routing_module__["a" /* DashboardMainRouting */],
            __WEBPACK_IMPORTED_MODULE_4__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_10_ng2_smart_table__["b" /* Ng2SmartTableModule */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__["a" /* AngularEchartsModule */]
        ],
        declarations: PAGES_COMPONENTS.concat([
            __WEBPACK_IMPORTED_MODULE_5__schema_schema_component__["a" /* SchemaComponent */],
            __WEBPACK_IMPORTED_MODULE_6__analytics_analytics_component__["a" /* AnalyticsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__landing_page_landing_page_component__["a" /* LandingPageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__schema_schema_modal_schema_modal_component__["a" /* SchemaModalComponent */],
            __WEBPACK_IMPORTED_MODULE_9__table_table_component__["a" /* TableComponent */],
            __WEBPACK_IMPORTED_MODULE_11__table_add_attribute_modal_add_attribute_modal_component__["a" /* AddAttributeModalComponent */],
            __WEBPACK_IMPORTED_MODULE_12__authentication_authentication_component__["a" /* AuthenticationComponent */],
            __WEBPACK_IMPORTED_MODULE_13__route_handlers_route_handlers_component__["a" /* RouteHandlersComponent */],
            __WEBPACK_IMPORTED_MODULE_14__route_handlers_add_route_modal_add_route_modal_component__["a" /* AddRouteModalComponent */],
            __WEBPACK_IMPORTED_MODULE_15__schema_schema_detail_card_schema_detail_card_component__["a" /* SchemaDetailCardComponent */],
            __WEBPACK_IMPORTED_MODULE_16__analytics_usage_line_chart_usage_line_chart_component__["a" /* UsageLineChartComponent */],
            __WEBPACK_IMPORTED_MODULE_17__authentication_users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_18__authentication_auth_routes_auth_routes_component__["a" /* AuthRoutesComponent */],
            __WEBPACK_IMPORTED_MODULE_19__application_logs_application_logs_component__["a" /* ApplicationLogsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_21__aas_aas_component__["a" /* AasComponent */],
            __WEBPACK_IMPORTED_MODULE_22__aas_configure_model_configure_model_component__["a" /* ConfigureModelComponent */],
            __WEBPACK_IMPORTED_MODULE_23__aas_analyse_model_analyse_model_component__["a" /* AnalyseModelComponent */],
            __WEBPACK_IMPORTED_MODULE_24__aas_create_model_create_model_component__["a" /* CreateModelComponent */],
            __WEBPACK_IMPORTED_MODULE_25__aas_analyse_model_analysis_tool_create_analysis_tool_create_component__["a" /* AnalysisToolCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_26__aas_analyse_model_analysis_tool_configure_analysis_tool_configure_component__["a" /* AnalysisToolConfigureComponent */],
            __WEBPACK_IMPORTED_MODULE_27__aas_build_models_build_models_component__["a" /* BuildModelsComponent */],
            __WEBPACK_IMPORTED_MODULE_28__aas_build_models_build_model_configure_build_model_configure_component__["a" /* BuildModelConfigureComponent */],
            __WEBPACK_IMPORTED_MODULE_29__aas_build_models_build_model_create_build_model_create_component__["a" /* BuildModelCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_30__aas_analyse_model_analysis_tool_configure_configure_render_configure_render_component__["a" /* ConfigureRenderComponent */],
            __WEBPACK_IMPORTED_MODULE_31__aas_analyse_model_analysis_tool_configure_configure_collapsible_panel_configure_collapsible_panel_component__["a" /* ConfigureCollapsiblePanelComponent */],
            __WEBPACK_IMPORTED_MODULE_32__aas_analyse_model_analysis_tool_configure_configure_collapsible_panel_panel_input_field_panel_input_field_component__["a" /* PanelInputFieldComponent */],
            __WEBPACK_IMPORTED_MODULE_33__aas_analyse_model_analysis_tool_configure_configure_collapsible_panel_panel_subsection_panel_subsection_component__["a" /* PanelSubsectionComponent */],
            __WEBPACK_IMPORTED_MODULE_34__schema_edit_schema_edit_schema_component__["a" /* EditSchemaComponent */],
            __WEBPACK_IMPORTED_MODULE_35__schema_edit_schema_attribute_config_attribute_config_component__["a" /* AttributeConfigComponent */],
            __WEBPACK_IMPORTED_MODULE_36__aas_analyse_model_analysis_tool_configure_configure_collapsible_panel_parameter_configurer_parameter_configurer_component__["a" /* ParameterConfigurerComponent */],
            __WEBPACK_IMPORTED_MODULE_37__storage_service_storage_service_component__["a" /* StorageServiceComponent */],
            __WEBPACK_IMPORTED_MODULE_38__aas_visualization_visualization_component__["a" /* VisualizationComponent */],
        ]),
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__schema_schema_modal_schema_modal_component__["a" /* SchemaModalComponent */],
            __WEBPACK_IMPORTED_MODULE_11__table_add_attribute_modal_add_attribute_modal_component__["a" /* AddAttributeModalComponent */],
            __WEBPACK_IMPORTED_MODULE_30__aas_analyse_model_analysis_tool_configure_configure_render_configure_render_component__["a" /* ConfigureRenderComponent */],
        ]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"welcome-logo container col-md-6 col-lg-6 col-lg-offset-3\">\n    <img src=\"assets/images/welcome-logo.png\" alt=\"BAaS logo\">\n  </div>  \n</div>\n<div class=\"row\">\n  <div class=\"container text-center col-md-6 col-lg-6 col-lg-offset-3\">\n    <h6 class=\"text-hint\">\n      Backend Made Simple!!\n    </h6>\n    <hr> \n    <h5 class=\"text-hint\">\n        Lets get Started!!\n      </h5>   \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/landing-page/landing-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".welcome-logo {\n  text-align: center;\n  padding: 1em; }\n\n.welcome-logo > img {\n  width: 60%;\n  margin: 0.25rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    return LandingPageComponent;
}());
LandingPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing-page',
        template: __webpack_require__("../../../../../src/app/components/dashboard/landing-page/landing-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/landing-page/landing-page.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LandingPageComponent);

//# sourceMappingURL=landing-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/route-handlers/add-route-modal/add-route-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-8\">\n    <nb-card>\n      <nb-card-header>\n        Add Route Configurations\n      </nb-card-header>\n      <nb-card-body>\n        <form #form=\"ngForm\">\n          <div class=\"container\">\n            <div class=\"setting-choice-box\">\n              <div class=\"title text-hint\">Route Parameters</div>\n              <ul class=\"option-list\">\n\n                <li class=\"option\">\n                  <div class=\"option-body row\">\n                    <div class=\"option-title col-md-8 col-sm-6\">Route Name</div>\n                    <div class=\"option-value col-md-4 col-sm-6\">\n                      <input name=\"routeName\" type=\"text\" placeholder=\"Route Name\" [class.form-control-danger]=\"routeName.errors && (routeName.touched || routeName.dirty)\"\n                        pattern=\"[A-Za-z_-]{2,100}\" [(ngModel)]=\"routeModel.name\" class=\"form-control form-control-info\" required\n                        #routeName=\"ngModel\">\n                    </div>\n                  </div>\n                  <div class=\"option-summary text-hint font-w-light\" *ngIf=\"!routeName.errors || !(routeName.touched || routeName.dirty)\">What do you want to call it??</div>\n                  <div class=\"option-summary text-danger font-w-light\" *ngIf=\"routeName.errors && (routeName.touched || routeName.dirty)\">Route Name required and only contain alphabates and (-,_)</div>\n                </li>\n\n                <li class=\"option\">\n                  <div class=\"option-body row\">\n                    <div class=\"option-title col-md-8 col-sm-6\">Route For</div>\n                    <div class=\"option-value col-md-4 col-sm-6\">\n                      <div class=\"dropdown\" ngbDropdown>\n                        <button class=\"btn btn-outline-info\" type=\"button\" ngbDropdownToggle>\n                          {{routeModel.operationType}}\n                        </button>\n                        <ul ngbDropdownMenu class=\"dropdown-menu\">\n                          <li class=\"dropdown-item\" (click)=\"routeModel.operationType = opt\" *ngFor=\"let opt of operations\">\n                            {{opt}}\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"option-summary text-hint font-w-light\">Which type of operation to perform</div>\n                </li>\n\n                <li class=\"option\">\n                  <div class=\"option-body row\">\n                    <div class=\"option-title col-md-8 col-sm-6\">Route Accessibility</div>\n                    <div class=\"option-value col-md-4 col-sm-6\">\n                      <div class=\"dropdown\" ngbDropdown>\n                        <button class=\"btn btn-outline-info\" type=\"button\" ngbDropdownToggle>\n                          {{routeModel.accessControl}}\n                        </button>\n                        <ul ngbDropdownMenu class=\"dropdown-menu\">\n                          <li class=\"dropdown-item\" (click)=\"routeModel.accessControl = opt\" *ngFor=\"let opt of accessTypes\">\n                            {{opt}}\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"option-summary text-hint font-w-light\">Accessibility of route.</div>\n                </li>\n\n                <li class=\"option\" [class.d-md-none]=\"routeModel.accessControl == 'public'\">\n                  <div class=\"option-body row\">\n                    <div class=\"option-title col-md-8 col-sm-6\">User-based Session</div>\n                    <div class=\"option-value col-md-4 col-sm-6\">\n                      <label class=\"row\">\n                        <div class=\"col-md-4 text-hint\" *ngIf=\"!isUserBasedSession\">Enable</div>\n                        <div class=\"col-md-4 text-hint\" *ngIf=\"isUserBasedSession\">Disable</div>\n                        <div class=\"col-md-4\">\n                          <div class=\"switch\">\n                            <input type=\"checkbox\" name=\"userBasedSessionToggle\" [(ngModel)]=\"isUserBasedSession\" [checked]=\"isUserBasedSession\" #requestBody>\n                            <span class=\"slider\" [class.slider-disable]=\"!isUserBasedSession\"></span>\n                          </div>\n                        </div>\n                      </label>\n                    </div>\n                  </div>\n                  <div class=\"option-summary text-hint font-w-light\">Do you want to Enable or Disable unique user based route ?</div>\n                  <div class=\"container p-2\" [class.d-md-none]=\"!isUserBasedSession\">\n                    <div class=\"row\">\n                      <div class=\"col-md-10 row\">\n                        <input class=\"col-md-5 form-control form-control-info\" placeholder=\"Request key\" type=\"text\" #requestKey>\n                        <select class=\"offset-md-1 col-md-5 form-control form-control-info\" name=\"sessionAttrInRequest\"  #userAttribute>\n                          <option value=\"{{item}}\" *ngFor=\"let item of userAttributeList\">{{item}}</option>\n                        </select>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <button (click)=\"addInSessionBody(userAttribute,requestKey)\" class=\"btn btn-outline-primary\" type=\"button\">\n                          Add\n                        </button>\n                      </div>\n                      <div class=\"col-md-12 row\">\n                        <div class=\"p-3 item\" *ngFor=\"let i of userBasedSessionList\">\n                          {{i}}\n                          <button type=\"button\" (click)=\"removeInSessionBody(i)\" class=\"ml-1 close\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                          </button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n\n                <li class=\"option\" [class.d-md-none]=\"routeModel.operationType != 'find'\">\n                  <div class=\"option-body row\">\n                    <div class=\"option-title col-md-8 col-sm-6\">Select</div>\n                    <div class=\"option-value col-md-4 col-sm-6\">\n                      <label class=\"row\">\n                        <div class=\"col-md-4 text-hint\" *ngIf=\"!routeModel.select.isEnable\">Enable</div>\n                        <div class=\"col-md-4 text-hint\" *ngIf=\"routeModel.select.isEnable\">Disable</div>\n                        <div class=\"col-md-4\">\n                          <div class=\"switch\">\n                            <input type=\"checkbox\" name=\"machingConstraint\" [(ngModel)]=\"routeModel.select.isEnable\" [checked]=\"routeModel.select.isEnable\">\n                            <span class=\"slider\" [class.slider-disable]=\"!routeModel.select.isEnable\"></span>\n                          </div>\n                        </div>\n                      </label>\n                    </div>\n                  </div>\n                  <div class=\"option-summary text-hint font-w-light\">List of attributes from schema to be retrived?</div>\n                  <div class=\"container p-2\" [class.d-md-none]=\"!routeModel.select.isEnable\">\n                    <div class=\"row\">\n                      <div class=\"offset-md-6 col-md-3\">\n                        <select name=\"selectSchemaAttribute\" class=\"form-control form-control-info\" #selectSchemaAttribute>\n                          <option value=\"{{item}}\" *ngFor=\"let item of schemaAttributeList\">{{item}}</option>\n                        </select>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <button (click)=\"addAttributeFromSelectConstraint(selectSchemaAttribute)\" class=\"btn btn-outline-primary\" type=\"button\">\n                          Add\n                        </button>\n                      </div>\n                      <div class=\"col-md-12 row\">\n                        <div class=\"p-3 item\" *ngFor=\"let item of routeModel.select.attributes\">\n                          {{item}}\n                          <button type=\"button\" (click)=\"removeAttributeFromSelectConstraint(item)\" class=\"ml-1 close\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                          </button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n\n                <li class=\"option\" [class.d-md-none]=\"routeModel.operationType != 'find'\">\n                  <div class=\"option-body row\">\n                    <div class=\"option-title col-md-8 col-sm-6\">Limit</div>\n                    <div class=\"option-value col-md-4 col-sm-6\">\n                      <label class=\"row\">\n                        <div class=\"col-md-4 text-hint\" *ngIf=\"!routeModel.limit.isEnable\">Enable</div>\n                        <div class=\"col-md-4 text-hint\" *ngIf=\"routeModel.limit.isEnable\">Disable</div>\n                        <div class=\"col-md-4\">\n                          <div class=\"switch\">\n                            <input type=\"checkbox\" name=\"machingConstraint\" [(ngModel)]=\"routeModel.limit.isEnable\" [checked]=\"routeModel.limit.isEnable\">\n                            <span class=\"slider\" [class.slider-disable]=\"!routeModel.limit.isEnable\"></span>\n                          </div>\n                        </div>\n                      </label>\n                    </div>\n                  </div>\n                  <div class=\"option-summary text-hint font-w-light\">Number of rows to limit?</div>\n                  <div class=\"container p-2\" [class.d-md-none]=\"!routeModel.limit.isEnable\">\n                    <div class=\"row\">\n                      <div class=\"offset-md-8 col-md-3\">\n                        <input class=\"form-control form-control-info\" type=\"number\" name=\"limitValue\" [(ngModel)]=\"routeModel.limit.value\">\n                      </div>\n                    </div>\n                  </div>\n                </li>\n\n                <li class=\"option\" [class.d-md-none]=\"routeModel.operationType == 'insert' || routeModel.operationType == 'findById'\">\n                  <div class=\"option-body row\">\n                    <div class=\"option-title col-md-8 col-sm-6\">Request Body</div>\n                    <div class=\"option-value col-md-4 col-sm-6\">\n                      <label class=\"row\">\n                        <div class=\"col-md-4 text-hint\" *ngIf=\"!hasRequestBody\">Enable</div>\n                        <div class=\"col-md-4 text-hint\" *ngIf=\"hasRequestBody\">Disable</div>\n                        <div class=\"col-md-4\">\n                          <div class=\"switch\">\n                            <input type=\"checkbox\" name=\"requestBody\" [(ngModel)]=\"hasRequestBody\" [checked]=\"hasRequestBody\" #requestBody>\n                            <span class=\"slider\" [class.slider-disable]=\"!hasRequestBody\"></span>\n                          </div>\n                        </div>\n                      </label>\n                    </div>\n                  </div>\n                  <div class=\"option-summary text-hint font-w-light\">Route contain request body or not?</div>\n                  <div class=\"container p-2\" [class.d-md-none]=\"!hasRequestBody\">\n                    <div class=\"row\">\n                      <div class=\"col-md-8 row\">\n                        <div class=\"p-3 item\" *ngFor=\"let i of requestBodyAttributeList\">\n                          {{i}}\n                          <button type=\"button\" (click)=\"removeAttribute(i)\" class=\"ml-1 close\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                          </button>\n                        </div>\n                      </div>\n                      <div class=\" col-md-2\">\n                        <input type=\"text\" placeholder=\"Attribute Name\" class=\"form-control form-control-info\" #attrName>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <button (click)=\"addInRequestBody(attrName)\" class=\"btn btn-outline-primary\" type=\"button\">\n                          Add Attribute\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n\n                <li class=\"option\" [class.d-md-none]=\"routeModel.operationType == 'insert' || routeModel.operationType == 'findById' \">\n                  <div class=\"option-body row\">\n                    <div class=\"option-title col-md-8 col-sm-6\">Matching constraint (for find update delete)</div>\n                    <div class=\"option-value col-md-4 col-sm-6\">\n                      <label class=\"row\">\n                        <div class=\"col-md-4 text-hint\" *ngIf=\"!hasMatchingConstraint\">Enable</div>\n                        <div class=\"col-md-4 text-hint\" *ngIf=\"hasMatchingConstraint\">Disable</div>\n                        <div class=\"col-md-4\">\n                          <div class=\"switch\">\n                            <input type=\"checkbox\" name=\"machingConstraint\" [(ngModel)]=\"hasMatchingConstraint\" [checked]=\"hasMatchingConstraint\" #machingConstraint>\n                            <span class=\"slider\" [class.slider-disable]=\"!hasMatchingConstraint\"></span>\n                          </div>\n                        </div>\n                      </label>\n                    </div>\n                  </div>\n                  <div class=\"option-summary text-hint font-w-light\">Route contain request body or not?</div>\n                  <div class=\"container p-2\" [class.d-md-none]=\"!hasMatchingConstraint\">\n                    <div class=\"d-flex justify-content-center p-2 item\" [class.d-md-none]=\"requestBodyAttributeList.length != 0\">\n                      Add request body to match result\n                    </div>\n                    <div class=\"row\" [class.d-md-none]=\"requestBodyAttributeList.length == 0\">\n                      <div class=\"col-md-3\">\n                        <div class=\"dropdown\" ngbDropdown>\n                          <button class=\"btn btn-outline-info\" type=\"button\" ngbDropdownToggle>\n                            {{schemaAttribute}}\n                          </button>\n                          <ul ngbDropdownMenu class=\"dropdown-menu\">\n                            <li class=\"dropdown-item\" (click)=\"schemaAttribute = opt\" *ngFor=\"let opt of schemaAttributeList\">\n                              {{opt}}\n                            </li>\n                          </ul>\n                        </div>\n                      </div>\n                      <div class=\" col-md-3\">\n                        <select name=\"constraintCondition\" [(ngModel)]=\"constraintCondition\" class=\"form-control form-control-info\">\n                          <option value=\"{{item}}\" *ngFor=\"let item of constraints\">{{item}}</option>\n                        </select>\n                      </div>\n                      <div class=\" col-md-3\">\n                        <div class=\"dropdown\" ngbDropdown>\n                          <button class=\"btn btn-outline-info\" type=\"button\" ngbDropdownToggle>\n                            {{ requestBodyAttribute }}\n                          </button>\n                          <ul ngbDropdownMenu class=\"dropdown-menu\">\n                            <li class=\"dropdown-item\" (click)=\"requestBodyAttribute = opt\" *ngFor=\"let opt of requestBodyAttributeList\">\n                              {{opt}}\n                            </li>\n                          </ul>\n                        </div>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <button (click)=\"addMatchingConstraint()\" class=\"btn btn-outline-primary\" type=\"button\">\n                          Add Attribute\n                        </button>\n                      </div>\n                      <div class=\"col-md-12 row\">\n                        <div class=\"p-3 item\" *ngFor=\"let i of matchingConstraintList\">\n                          {{i}}\n                          <button type=\"button\" (click)=\"removeMatchingConstraint(i)\" class=\"ml-1 close\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                          </button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n\n                <li class=\"option\" [class.d-md-none]=\"routeModel.operationType != 'find'\">\n                  <div class=\"option-body row\">\n                    <div class=\"option-title col-md-8 col-sm-6\">Sort</div>\n                    <div class=\"option-value col-md-4 col-sm-6\">\n                      <label class=\"row\">\n                        <div class=\"col-md-4 text-hint\" *ngIf=\"!routeModel.sort.isEnable\">Enable</div>\n                        <div class=\"col-md-4 text-hint\" *ngIf=\"routeModel.sort.isEnable\">Disable</div>\n                        <div class=\"col-md-4\">\n                          <div class=\"switch\">\n                            <input type=\"checkbox\" name=\"machingConstraint\" [(ngModel)]=\"routeModel.sort.isEnable\" [checked]=\"routeModel.sort.isEnable\">\n                            <span class=\"slider\" [class.slider-disable]=\"!routeModel.sort.isEnable\"></span>\n                          </div>\n                        </div>\n                      </label>\n                    </div>\n                  </div>\n                  <div class=\"option-summary text-hint font-w-light\">Attributes list to sort?</div>\n                  <div class=\"container p-2\" [class.d-md-none]=\"!routeModel.sort.isEnable\">\n                    <div class=\"row\">\n                      <div class=\"offset-md-1 col-md-4\">\n                        <select name=\"sortSchemaAttribute\" class=\"form-control form-control-info\" #sortSchemaAttribute>\n                          <option value=\"{{item}}\" *ngFor=\"let item of schemaAttributeList\">{{item}}</option>\n                        </select>\n                      </div>\n                      <div class=\"ml-1 col-md-4\">\n                        <select name=\"sortOrder\" class=\"form-control form-control-info\" #sortOrder>\n                          <option value=\"1\">Ascending Order</option>\n                          <option value=\"-1\">Descending Order</option>\n                        </select>\n                      </div>\n                      <div class=\"ml-2 col-md-2\">\n                        <button (click)=\"addAttributeToSort(sortSchemaAttribute,sortOrder)\" class=\"btn btn-outline-primary\" type=\"button\">\n                          Add\n                        </button>\n                      </div>\n                      <div class=\"col-md-12 row\">\n                        <div class=\"p-3 item\" *ngFor=\"let item of routeModel.sort.attributes\">\n                          {{item}}\n                          <button type=\"button\" (click)=\"removeAttributeToSort(item)\" class=\"ml-1 close\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                          </button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n\n              </ul>\n            </div>\n          </div>\n        </form>\n      </nb-card-body>\n      <nb-card-footer>\n        <button (click)=\"addRoute()\" [disabled]=\"!form.valid\" class=\"col-md-4 offset-md-8 btn btn-hero-info\" type=\"button\">\n          Save\n        </button>\n      </nb-card-footer>\n    </nb-card>\n  </div>\n  <div class=\"col-md-4\">\n    <app-schema-detail-card [schemaStructure]=\"schemaStructure\"></app-schema-detail-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/route-handlers/add-route-modal/add-route-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  /*  .item-expand{\n        padding: 1rem;\n        box-shadow: 0px 0px 10px 1px black;\n        transform: scale(1.05) translateZ(100);\n    } */ }\n  :host-context(.nb-theme-default) .item {\n    background-color: #e9edf2;\n    border-radius: 5px;\n    margin: 2px; }\n  :host-context(.nb-theme-default) select {\n    -webkit-appearance: none;\n    appearance: none;\n    -moz-appearance: none;\n    -ms-progress-appearance: none; }\n  :host-context(.nb-theme-default) .setting-choice-box {\n    padding: 1.25rem; }\n    :host-context(.nb-theme-default) .setting-choice-box .title {\n      font-size: 1.25rem;\n      padding-bottom: 1.25rem; }\n    :host-context(.nb-theme-default) .setting-choice-box .option-list {\n      list-style: none;\n      padding: 0; }\n      :host-context(.nb-theme-default) .setting-choice-box .option-list .option {\n        border-bottom: 1px solid #ebeff5;\n        padding-top: 0.75rem;\n        padding-bottom: 0.75rem;\n        margin-bottom: 0.50rem; }\n        :host-context(.nb-theme-default) .setting-choice-box .option-list .option .option-body {\n          font-size: 1.15em; }\n        :host-context(.nb-theme-default) .setting-choice-box .option-list .option .option-summary {\n          font-size: 0.85em; }\n  :host-context(.nb-theme-default) .switch {\n    position: relative;\n    display: inline-block;\n    width: 4rem;\n    height: 1.75rem;\n    margin: 0;\n    cursor: pointer; }\n    :host-context(.nb-theme-default) .switch input {\n      display: none; }\n      :host-context(.nb-theme-default) .switch input:checked + .slider::before {\n        -webkit-transform: translateX(2.25rem);\n                transform: translateX(2.25rem); }\n    :host-context(.nb-theme-default) .switch .slider {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      border-radius: 1.75rem;\n      background-color: #ebeff5; }\n    :host-context(.nb-theme-default) .switch .slider::before {\n      position: absolute;\n      content: '';\n      height: 1.75rem;\n      width: 1.75rem;\n      border-radius: 50%;\n      background-color: #4ca6ff;\n      transition: 0.2s;\n      box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n    :host-context(.nb-theme-default) .switch .slider-disable::before {\n      background-color: #aaa; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-default) .light,\n    :host-context(.nb-theme-default) .cosmic {\n      display: none; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-default) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      padding: 0; } }\n\n:host-context(.nb-theme-cosmic) {\n  /*  .item-expand{\n        padding: 1rem;\n        box-shadow: 0px 0px 10px 1px black;\n        transform: scale(1.05) translateZ(100);\n    } */ }\n  :host-context(.nb-theme-cosmic) .item {\n    background-color: #494299;\n    border-radius: 5px;\n    margin: 2px; }\n  :host-context(.nb-theme-cosmic) select {\n    -webkit-appearance: none;\n    appearance: none;\n    -moz-appearance: none;\n    -ms-progress-appearance: none; }\n  :host-context(.nb-theme-cosmic) .setting-choice-box {\n    padding: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .setting-choice-box .title {\n      font-size: 1.25rem;\n      padding-bottom: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .setting-choice-box .option-list {\n      list-style: none;\n      padding: 0; }\n      :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option {\n        border-bottom: 1px solid #2f296b;\n        padding-top: 0.75rem;\n        padding-bottom: 0.75rem;\n        margin-bottom: 0.50rem; }\n        :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option .option-body {\n          font-size: 1.15em; }\n        :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option .option-summary {\n          font-size: 0.85em; }\n  :host-context(.nb-theme-cosmic) .switch {\n    position: relative;\n    display: inline-block;\n    width: 4rem;\n    height: 1.75rem;\n    margin: 0;\n    cursor: pointer; }\n    :host-context(.nb-theme-cosmic) .switch input {\n      display: none; }\n      :host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n        -webkit-transform: translateX(2.25rem);\n                transform: translateX(2.25rem); }\n    :host-context(.nb-theme-cosmic) .switch .slider {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      border-radius: 1.75rem;\n      background-color: #2f296b; }\n    :host-context(.nb-theme-cosmic) .switch .slider::before {\n      position: absolute;\n      content: '';\n      height: 1.75rem;\n      width: 1.75rem;\n      border-radius: 50%;\n      background-color: #0088ff;\n      transition: 0.2s;\n      box-shadow: 0 0 0.25rem 0 rgba(161, 161, 229, 0.4);\n      background-image: linear-gradient(to right, #ad59ff, #7659ff); }\n    :host-context(.nb-theme-cosmic) .switch .slider-disable::before {\n      background-color: #aaa; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-cosmic) .light,\n    :host-context(.nb-theme-cosmic) .cosmic {\n      display: none; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      padding: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/route-handlers/add-route-modal/add-route-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRouteModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dashboard_schema_service__ = __webpack_require__("../../../../../src/app/services/dashboard/schema.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dashboard_route_handler_service__ = __webpack_require__("../../../../../src/app/services/dashboard/route-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_util_toast_service__ = __webpack_require__("../../../../../src/app/services/util/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddRouteModalComponent = (function () {
    /* Constructor here */
    function AddRouteModalComponent(route, router, schemaService, routeHandlerSevice, toastService) {
        this.route = route;
        this.router = router;
        this.schemaService = schemaService;
        this.routeHandlerSevice = routeHandlerSevice;
        this.toastService = toastService;
        this.routeModel = {
            name: '',
            schemaName: '',
            operationType: 'insert',
            requestBody: [],
            constraint: [],
            accessControl: 'public',
            userBasedSession: {},
            select: {
                isEnable: false,
                attributes: []
            },
            limit: {
                isEnable: false,
                value: 100
            },
            sort: {
                isEnable: false,
                attributes: []
            }
        };
        this.operations = ['insert', 'find', 'update', 'delete', 'findById'];
        this.accessTypes = ['public', 'session', 'admin'];
        this.constraints = ['equal', 'not-equal', 'greater-than', 'greater-than-equal', 'less-than', 'less-than-equal', 'in-array', 'not-in-array', 'regex'];
        this.postOperations = ['limit', 'sort', 'max', 'select'];
        this.constraintCondition = this.constraints[0];
        this.hasRequestBody = this.hasMatchingConstraint = false;
        this.requestBodyAttributeList = [];
        this.matchingConstraintList = [];
        this.userBasedSessionList = [];
    }
    /* Life Cycle Hooks */
    AddRouteModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.paramMap.subscribe(function (params) {
            _this.routeModel.schemaName = params.get('schemaName');
            _this.schemaService.getSchemaData(_this.routeModel.schemaName).subscribe(function (res) {
                _this.schemaAttributeList = Object.keys(res.data.structure);
                _this.schemaAttribute = _this.schemaAttributeList[0];
                _this.schemaStructure = JSON.stringify(res.data.structure);
            });
            _this.schemaService.getSchemaStructure('authuser').subscribe(function (res) {
                _this.userAttributeList = Object.keys(res.data.structure);
            });
        });
    };
    AddRouteModalComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    /* Life Cycle Hooks */
    /* Functions Start Here */
    AddRouteModalComponent.prototype.addRoute = function () {
        var _this = this;
        this.routeModel.requestBody = this.requestBodyAttributeList;
        this.routeModel.constraint = this.matchingConstraintList.map(function (item) {
            return JSON.parse(item);
        });
        var userBasedSessionConstraint = this.userBasedSessionList.map(function (item) { return JSON.parse(item); });
        this.routeModel.userBasedSession = {
            isEnable: this.isUserBasedSession,
            sessionAttribute: userBasedSessionConstraint
        };
        console.log(this.routeModel);
        this.routeHandlerSevice.addRoute(this.routeModel).subscribe(function (res) {
            if (res.success) {
                _this.toastService.showToast(_this.toastService.typeNum.success, "Hurray !!", res.message);
                _this.router.navigate(["../"], { relativeTo: _this.route });
            }
            else {
                _this.toastService.showToast(_this.toastService.typeNum.error, "Oops!!", res.message);
            }
        });
    };
    AddRouteModalComponent.prototype.addInRequestBody = function (e) {
        var isPresent = this.requestBodyAttributeList.indexOf(e.value);
        //console.log(isPresent+'  '+e.value.toString().length+' '+e.value);
        if (isPresent >= 0 || e.value.toString().length === 0)
            alert("Unique values only!!");
        else {
            this.requestBodyAttributeList.push(e.value);
            this.requestBodyAttribute = e.value;
        }
    };
    AddRouteModalComponent.prototype.removeAttribute = function (i) {
        var index = this.requestBodyAttributeList.indexOf(i);
        if (index >= 0) {
            this.requestBodyAttributeList.splice(index, 1);
        }
    };
    AddRouteModalComponent.prototype.addInSessionBody = function (e, requestKeyTag) {
        var correctVariableNamePattern = new RegExp("^[A-z]+$");
        if (!correctVariableNamePattern.test(requestKeyTag.value) || requestKeyTag.value.toString().length === 0) {
            alert('Request key required and only contains alphabatest and length < 50');
        }
        else {
            var userSessionConstraint = {
                replaceKey: requestKeyTag.value,
                replaceWith: e.value
            };
            var isPresent = this.userBasedSessionList.indexOf(JSON.stringify(userSessionConstraint));
            if (isPresent >= 0 || e.value.toString().length === 0)
                alert("Unique values only!!");
            else {
                this.userBasedSessionList.push(JSON.stringify(userSessionConstraint));
                this.userAttributeList.splice(this.userAttributeList.indexOf(e.value), 1);
            }
        }
    };
    AddRouteModalComponent.prototype.removeInSessionBody = function (i) {
        var index = this.userBasedSessionList.indexOf(i);
        if (index >= 0) {
            this.userBasedSessionList.splice(index, 1);
        }
    };
    AddRouteModalComponent.prototype.addMatchingConstraint = function () {
        var matchingConstraint = {
            schemaAttribute: this.schemaAttribute,
            requestAttribute: this.requestBodyAttribute,
            constraint: this.constraintCondition
        };
        var isPresent = this.matchingConstraintList.indexOf(JSON.stringify(matchingConstraint));
        //console.log(isPresent);
        if (isPresent >= 0)
            alert("Unique constraints only!!");
        else {
            this.matchingConstraintList.push(JSON.stringify(matchingConstraint));
            //console.log(matchingConstraint)
        }
    };
    AddRouteModalComponent.prototype.removeMatchingConstraint = function (item) {
        var index = this.matchingConstraintList.indexOf(item);
        //console.log(index);
        if (index != -1) {
            this.matchingConstraintList.splice(index, 1);
            console.log(this.matchingConstraintList);
        }
    };
    AddRouteModalComponent.prototype.addAttributeFromSelectConstraint = function (e) {
        var isPresent = this.routeModel.select.attributes.indexOf(e.value);
        if (isPresent >= 0 || e.value.toString().length === 0)
            alert("Unique values only!!");
        else {
            this.routeModel.select.attributes.push(e.value);
        }
    };
    AddRouteModalComponent.prototype.removeAttributeFromSelectConstraint = function (item) {
        var index = this.routeModel.select.attributes.indexOf(item);
        if (index >= 0) {
            this.routeModel.select.attributes.splice(index, 1);
        }
    };
    AddRouteModalComponent.prototype.addAttributeToSort = function (sortSchemaAttribute, sortOrder) {
        var e = [sortSchemaAttribute.value, sortOrder.value];
        var isPresent = this.routeModel.sort.attributes.indexOf(e);
        if (isPresent >= 0 || e.length === 0)
            alert("Unique values only!!");
        else {
            this.routeModel.sort.attributes.push(e);
        }
    };
    AddRouteModalComponent.prototype.removeAttributeToSort = function (item) {
        var index = this.routeModel.sort.attributes.indexOf(item);
        if (index >= 0) {
            this.routeModel.sort.attributes.splice(index, 1);
        }
    };
    return AddRouteModalComponent;
}());
AddRouteModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-route-modal',
        template: __webpack_require__("../../../../../src/app/components/dashboard/route-handlers/add-route-modal/add-route-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/route-handlers/add-route-modal/add-route-modal.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_dashboard_schema_service__["a" /* SchemaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dashboard_schema_service__["a" /* SchemaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_dashboard_route_handler_service__["a" /* RouteHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dashboard_route_handler_service__["a" /* RouteHandlerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_util_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_util_toast_service__["a" /* ToastService */]) === "function" && _e || Object])
], AddRouteModalComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=add-route-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/route-handlers/route-handlers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <nb-card>\n      <nb-card-header>\n        <div class=\"row\">\n          <div class=\"col-md-2 col-sm-4\">\n            <div class=\"dropdown\" ngbDropdown>\n              <button class=\"btn btn-outline-success\" type=\"button\" ngbDropdownToggle>\n                {{ schemaName }}\n              </button>\n              <ul ngbDropdownMenu class=\"dropdown-menu\">\n                <li class=\"dropdown-item\" *ngFor=\"let item of schemaList\" (click)=\"onSelectSchema(item.name)\">\n                  {{ item.name }}\n                </li>\n              </ul>\n            </div>\n          </div>\n          <button [routerLink]=\"['add-route']\" routerLinkActive=\"active\" type=\"button\" class=\"col-md-2 offset-md-7 mr-2 btn btn-success\">\n          Add Route\n            <i class=\"fa fa-plus\"></i>\n          </button>\n        </div>\n      </nb-card-header>\n      <nb-card-body>\n        <ngb-accordion #acc=\"ngbAccordion\">\n\n          <ngb-panel *ngFor=\"let item of routes\">\n            <ng-template ngbPanelTitle>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"btn-group btn-group-full-width\" role=\"group\">\n                    <button type=\"button\" class=\"btn btn-{{getClassByOpertaionType(item.operationType)}} btn-fixed\">\n                      <span>{{item.operationType}}</span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-{{getClassByOpertaionType(item.operationType)}} btn-fixed\">\n                      <span>{{item.accessControl}}</span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-outline-{{getClassByOpertaionType(item.operationType)}} btn-block\">\n                      {{item.name}}\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </ng-template>\n            <ng-template ngbPanelContent>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  Usage Info :\n                </div>\n                <div class=\"offset-md-4 col-md-2\">\n                  <button (click)=\"deleteRoute(item.name)\" type=\"button\" class=\"btn btn-outline-danger btn-block\">\n                    Delete Route\n                  </button>\n                </div>\n              </div>\n              <hr>\n              <div class=\"row\" [class.d-md-none]=\"item.operationType != 'insert'\">\n                <div class=\"col-md-8\">\n                  Schema Structure of Insert\n                  <pre [innerHTML]=\"syntaxHighlight(schemaStructure)\">\n                  </pre>\n                </div>\n                <div class=\"col-md-4\">\n                  <strong>Usage Guide</strong>\n                  <ol>\n                    <li>API End Point : http://localhost:4000/api/{{item.operationType}}/{{item.schemaName}}/{{item.name}}</li>\n                    <li> Method of Request : {{item.requestMethod}}</li>\n                    <li> Request Content-Type: application/json</li>                    \n                  </ol>\n                  To Learn More Click\n                  <a href=\"#\">HERE(TODO)</a>\n                </div>\n              </div>\n              <div class=\"row\" [class.d-md-none]=\"item.requestByJSON\">                \n                <div class=\"col-md-12\">\n                  <strong>Usage Guide</strong>\n                  <ol>\n                    <li> API End Point : http://localhost:4000/api/{{item.operationType}}/{{item.name}}/{{item.schemaName}}/object_id_here</li>\n                    <li> Method of Request : {{item.requestMethod}}</li>\n                    <li> Request Content-Type: Simple Get Request</li>                    \n                  </ol>\n                </div>\n              </div>\n              <div class=\"row\" [class.d-md-none]=\"item.operationType == 'insert' || !item.requestByJSON\">\n                <div class=\"col-md-4\">\n                  Request Body\n                  <pre [innerHTML]=\"syntaxHighlight(item.requestBody)\">\n                  </pre>\n                </div>\n                <div class=\"col-md-4\">\n                  Constraints:\n                  <pre [innerHTML]=\"syntaxHighlight(item.constraints)\">\n                    </pre>\n                </div>\n                <div class=\"col-md-4\">\n                  <strong>Usage Guide:</strong>\n                  <ol>\n                    <li> API End Point : http://localhost:4000/api/{{item.operationType}}/{{item.schemaName}}/{{item.name}}</li>\n                    <li> Method of Request : {{item.requestMethod}}</li>\n                    <li> Request Content-Type: application/json</li>            \n                  </ol>\n                  To Learn More Click\n                  <a href=\"#\">HERE(TODO)</a>\n                </div>\n              </div>\n            </ng-template>\n          </ngb-panel>\n\n        </ngb-accordion>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/route-handlers/route-handlers.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) /deep/ .card {\n  background: transparent;\n  border: none; }\n\n:host-context(.nb-theme-default) /deep/ .card-header {\n  margin-top: 0.75em !important;\n  border: 1px solid #e9edf2;\n  border-radius: 0;\n  background-color: #ffffff; }\n\n:host-context(.nb-theme-default) /deep/ .card-block {\n  text-align: left; }\n\n:host-context(.nb-theme-default) pre {\n  outline: 1px solid #8a7fff;\n  padding: 5px;\n  margin: 5px; }\n  :host-context(.nb-theme-default) pre /deep/ .string {\n    color: green; }\n  :host-context(.nb-theme-default) pre /deep/ .number {\n    color: darkorange; }\n  :host-context(.nb-theme-default) pre /deep/ .boolean {\n    color: blue; }\n  :host-context(.nb-theme-default) pre /deep/ .null {\n    color: magenta; }\n  :host-context(.nb-theme-default) pre /deep/ .key {\n    color: red; }\n\n:host-context(.nb-theme-cosmic) /deep/ .card {\n  background: transparent;\n  border: none; }\n\n:host-context(.nb-theme-cosmic) /deep/ .card-header {\n  margin-top: 0.75em !important;\n  border: 1px solid #494299;\n  border-radius: 0;\n  background-color: #3d3780; }\n\n:host-context(.nb-theme-cosmic) /deep/ .card-block {\n  text-align: left; }\n\n:host-context(.nb-theme-cosmic) pre {\n  outline: 1px solid #7659ff;\n  padding: 5px;\n  margin: 5px; }\n  :host-context(.nb-theme-cosmic) pre /deep/ .string {\n    color: green; }\n  :host-context(.nb-theme-cosmic) pre /deep/ .number {\n    color: darkorange; }\n  :host-context(.nb-theme-cosmic) pre /deep/ .boolean {\n    color: blue; }\n  :host-context(.nb-theme-cosmic) pre /deep/ .null {\n    color: magenta; }\n  :host-context(.nb-theme-cosmic) pre /deep/ .key {\n    color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/route-handlers/route-handlers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteHandlersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_route_handler_service__ = __webpack_require__("../../../../../src/app/services/dashboard/route-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dashboard_schema_service__ = __webpack_require__("../../../../../src/app/services/dashboard/schema.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_util_toast_service__ = __webpack_require__("../../../../../src/app/services/util/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RouteHandlersComponent = (function () {
    function RouteHandlersComponent(activatedRoutes, routeHandlerService, schemaService, router, toastService) {
        this.activatedRoutes = activatedRoutes;
        this.routeHandlerService = routeHandlerService;
        this.schemaService = schemaService;
        this.router = router;
        this.toastService = toastService;
    }
    RouteHandlersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoutes.paramMap.subscribe(function (params) {
            _this.schemaName = params.get('schemaName');
            _this.schemaService.getSchemas().subscribe(function (response) {
                _this.schemaList = response.schemas;
                if (_this.schemaName === null)
                    _this.router.navigate(["./", response.schemas[0].name], { relativeTo: _this.activatedRoutes });
                else {
                    _this.routeHandlerService.getRoutesOfSchema({ schemaName: _this.schemaName })
                        .subscribe(function (res) {
                        console.log(res);
                        _this.routes = res.data;
                        _this.schemaService.getSchemaStructure(_this.schemaName).subscribe(function (resp) {
                            _this.schemaStructure = resp.data.structure;
                        });
                    });
                }
            });
        });
    };
    RouteHandlersComponent.prototype.onSelectSchema = function (schemaName) {
        this.router.navigate(['dashboard', 'api-access', schemaName]);
    };
    RouteHandlersComponent.prototype.getClassByOpertaionType = function (operation) {
        switch (operation) {
            case 'insert': return 'success';
            case 'update': return 'primary';
            case 'find': return 'info';
            case 'delete': return 'danger';
            default: return 'warning';
        }
    };
    RouteHandlersComponent.prototype.deleteRoute = function (routeName) {
        var _this = this;
        var route = {
            name: routeName,
            schemaName: this.schemaName
        };
        this.routeHandlerService.deleteRoute(route).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.toastService.showToast(_this.toastService.typeNum.success, "Hurray !!", res.message);
                _this.ngOnInit();
            }
            else {
                _this.toastService.showToast(_this.toastService.typeNum.error, "Oops!!", res.message);
            }
        });
    };
    RouteHandlersComponent.prototype.convertToString = function (item) {
        return JSON.stringify(item, null, 2); //.replace(/,/gi, ", \n\t").trim();
    };
    RouteHandlersComponent.prototype.syntaxHighlight = function (json) {
        if (typeof json != 'string') {
            json = JSON.stringify(json, undefined, 2);
        }
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            var cls = 'text-warning';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'text-primary';
                }
                else {
                    cls = 'text-warning';
                }
            }
            else if (/true|false/.test(match)) {
                cls = 'text-info';
            }
            else if (/null/.test(match)) {
                cls = 'text-danger';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    };
    return RouteHandlersComponent;
}());
RouteHandlersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-route-handlers',
        template: __webpack_require__("../../../../../src/app/components/dashboard/route-handlers/route-handlers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/route-handlers/route-handlers.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_dashboard_route_handler_service__["a" /* RouteHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dashboard_route_handler_service__["a" /* RouteHandlerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_dashboard_schema_service__["a" /* SchemaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dashboard_schema_service__["a" /* SchemaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_util_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_util_toast_service__["a" /* ToastService */]) === "function" && _e || Object])
], RouteHandlersComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=route-handlers.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/schema/edit-schema/attribute-config/attribute-config.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"element p-1 pb-2\">\n  <div class=\"input-box col-md-8 mb-4\">\n    <input class=\"attribute-name\" disabled name=\"name\" type=\"text\" [(ngModel)]=\"attributeStructure.name\">\n  </div>\n  <div (click)=\"removeAttribute()\" class=\"delete-btn\">\n    <i class=\"fa fa-trash\"></i>\n  </div>\n  <div class=\"row pl-5\" *ngIf=\"attributeStructure\">\n    <div class=\"col-md-3 mb-2\">\n      <select class=\"form-control\" name=\"dataType\" [(ngModel)]=\"attributeStructure.type\">\n        <option value=\"{{item}}\" *ngFor=\"let item of dataTypes\">{{item}}</option>\n      </select>\n    </div>    \n    <div class=\"col-md-3 mb-2\">\n      <input class=\"form-control\" name=\"default\" type=\"text\" [(ngModel)]=\"attributeStructure.default\" placeholder=\"defulat value\">\n    </div>\n    <div class=\"col-md-2\">\n      <nb-checkbox name=\"attributeUnique\" [(ngModel)]=\"attributeStructure.isUnique\">Is Unique</nb-checkbox>\n    </div>\n    <div class=\"col-md-2\">\n      <nb-checkbox name=\"attributeUnique\" [(ngModel)]=\"attributeStructure.isRequired\">Is Required</nb-checkbox>\n    </div>\n    <div class=\"col-md-2\">\n      <nb-checkbox name=\"attributeUnique\" [(ngModel)]=\"attributeStructure.encryptInHash\">Hashed Data</nb-checkbox>\n    </div>\n  </div>\n\n  <div class=\"col-md-3 offset-md-1 mt-2 input-group input-sm\" [class.d-none]=\"((attributeStructure.type != 'regex-validator') || !attributeStructure.regexPattern)\">\n    <input name=\"regexValidatorString\" placeholder=\"Regex Pattern\" [(ngModel)]=\"attributeStructure.regexPattern\" type=\"text\" class=\"form-control\">\n  </div>\n\n  <div class=\"row offset-md-1 mt-4\" [class.d-none]=\"((attributeStructure.type != 'enum')||(!attributeStructure.enumValues)) \">\n      <div class=\"row col-md-8 col-sm-6\">\n        <div class=\"p-2 item\" *ngFor=\"let item of attributeStructure.enumValues\">\n          {{item}}\n          <button type=\"button\" (click)=\"removeValueFromEnum(item)\" class=\"ml-1 close\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n      </div>\n      <div class=\"col-md-3 col-sm-4\">\n        <input class=\"form-control form-control-info\" name=\"enumValue\" placeholder=\"Enum Value\" [(ngModel)]=\"enumValue\"\n          type=\"text\">\n      </div>\n      <div class=\"col-md-1 col-sm-4 p-0\">\n        <button (click)=\"addValueInEnum()\" class=\"pt-2 btn btn-outline-info\">Add</button>\n      </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/schema/edit-schema/attribute-config/attribute-config.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .item {\n  background-color: #e9edf2;\n  border-radius: 5px;\n  margin: 2px;\n  max-height: 2.5rem; }\n\n:host-context(.nb-theme-default) .element {\n  box-sizing: border-box;\n  border-bottom: 1px solid #e9edf2;\n  margin-bottom: 1.5rem; }\n  :host-context(.nb-theme-default) .element .attribute-name {\n    padding: 0.5rem;\n    border: 0px;\n    border-bottom: 1px solid #e9edf2;\n    font-size: 1.25em; }\n  :host-context(.nb-theme-default) .element:before {\n    content: \"\";\n    position: absolute;\n    top: 40px;\n    left: 50px;\n    width: 50px;\n    height: 50px;\n    border-left: 3px dashed #e9edf2;\n    border-bottom: 3px dashed #e9edf2; }\n  :host-context(.nb-theme-default) .element .delete-btn {\n    position: absolute;\n    top: 0em;\n    right: 5em;\n    font-size: 1.25em;\n    color: #e9edf2; }\n  :host-context(.nb-theme-default) .element .delete-btn:hover {\n    color: #ff4c6a; }\n  :host-context(.nb-theme-default) .element select.form-control {\n    padding: 0rem 2rem 0rem 1rem;\n    padding-left: 1rem;\n    max-height: 2.5rem; }\n  :host-context(.nb-theme-default) .element .col-md-3 input[type=\"text\"] {\n    max-height: 2.5rem;\n    padding-bottom: 0.50em; }\n  :host-context(.nb-theme-default) .element .btn {\n    max-height: 2.5rem; }\n\n:host-context(.nb-theme-cosmic) .item {\n  background-color: #494299;\n  border-radius: 5px;\n  margin: 2px;\n  max-height: 2.5rem; }\n\n:host-context(.nb-theme-cosmic) .element {\n  box-sizing: border-box;\n  border-bottom: 1px solid #494299;\n  margin-bottom: 1.5rem; }\n  :host-context(.nb-theme-cosmic) .element .attribute-name {\n    padding: 0.5rem;\n    border: 0px;\n    border-bottom: 1px solid #494299;\n    font-size: 1.25em; }\n  :host-context(.nb-theme-cosmic) .element:before {\n    content: \"\";\n    position: absolute;\n    top: 40px;\n    left: 50px;\n    width: 50px;\n    height: 50px;\n    border-left: 3px dashed #494299;\n    border-bottom: 3px dashed #494299; }\n  :host-context(.nb-theme-cosmic) .element .delete-btn {\n    position: absolute;\n    top: 0em;\n    right: 5em;\n    font-size: 1.25em;\n    color: #494299; }\n  :host-context(.nb-theme-cosmic) .element .delete-btn:hover {\n    color: #ff386a; }\n  :host-context(.nb-theme-cosmic) .element select.form-control {\n    padding: 0rem 2rem 0rem 1rem;\n    padding-left: 1rem;\n    max-height: 2.5rem; }\n  :host-context(.nb-theme-cosmic) .element .col-md-3 input[type=\"text\"] {\n    max-height: 2.5rem;\n    padding-bottom: 0.50em; }\n  :host-context(.nb-theme-cosmic) .element .btn {\n    max-height: 2.5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/schema/edit-schema/attribute-config/attribute-config.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttributeConfigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_schema_service__ = __webpack_require__("../../../../../src/app/services/dashboard/schema.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AttributeConfigComponent = (function () {
    function AttributeConfigComponent(schemaService) {
        this.schemaService = schemaService;
        this.removeAttributeFinished = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.enumValue = '';
        this.dataTypes = [
            'string',
            'number',
            'boolean',
            'json',
            'enum',
            'date-iso',
            'timestamp',
            'integer',
            'decimal-only',
            'hexadecimal-number',
            'array',
            'alphanumeric-only',
            'email',
            'url',
            'mobile-phone',
            'regex-validator',
        ];
    }
    AttributeConfigComponent.prototype.ngOnInit = function () {
        this.structure = (this.attributeStructure);
    };
    AttributeConfigComponent.prototype.removeAttribute = function (e) {
        var _this = this;
        if (this.schemaName) {
            if (window.confirm('Do you really want to remove ' + this.attributeStructure['name'] + ' attribute ?')) {
                if (window.confirm('Data and routes corresponding to the attribute will also be removed !! sure to delete ?')) {
                    var attribute = {
                        schemaName: this.schemaName,
                        attribute: this.attributeStructure
                    };
                    this.schemaService.removeAttribute(attribute)
                        .subscribe(function (res) {
                        _this.removeAttributeFinished.emit(res);
                    });
                }
            }
        }
    };
    AttributeConfigComponent.prototype.addValueInEnum = function () {
        var isPresent = this.attributeStructure['enumValues'].indexOf(this.enumValue);
        //console.log(isPresent+'  '+e.value.toString().length+' '+e.value);
        if (isPresent >= 0 || this.enumValue.toString().length === 0)
            alert("Unique values only!!");
        else {
            this.attributeStructure['enumValues'].push(this.enumValue);
        }
        this.enumValue = "";
    };
    AttributeConfigComponent.prototype.removeValueFromEnum = function (e) {
        var index = this.attributeStructure['enumValues'].indexOf(e);
        if (index >= 0) {
            this.attributeStructure['enumValues'].splice(index, 1);
        }
    };
    return AttributeConfigComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AttributeConfigComponent.prototype, "attributeStructure", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AttributeConfigComponent.prototype, "schemaName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AttributeConfigComponent.prototype, "removeAttributeFinished", void 0);
AttributeConfigComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-attribute-config',
        template: __webpack_require__("../../../../../src/app/components/dashboard/schema/edit-schema/attribute-config/attribute-config.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/schema/edit-schema/attribute-config/attribute-config.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dashboard_schema_service__["a" /* SchemaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dashboard_schema_service__["a" /* SchemaService */]) === "function" && _a || Object])
], AttributeConfigComponent);

var _a;
//# sourceMappingURL=attribute-config.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/schema/edit-schema/edit-schema.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-9 col-lg-10 col-md-12\">\n    <nb-card>\n      <nb-card-header>\n        Edit schema\n      </nb-card-header>\n      <nb-card-body>\n        <div class=\"row\" *ngFor=\"let attribute of schemaStructure\" >          \n          <app-attribute-config class=\"col-lg-12 pl-4 pr-4\" (removeAttributeFinished)=\"removeDone($event)\" [schemaName]=\"schemaName\" [attributeStructure]=\"attribute\"></app-attribute-config>\n        </div>\n        <button (click)=\"saveSchemaStructure()\" class=\"btn btn-outline-success offset-md-8 col-md-3\">Save</button>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/schema/edit-schema/edit-schema.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/schema/edit-schema/edit-schema.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSchemaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dashboard_schema_service__ = __webpack_require__("../../../../../src/app/services/dashboard/schema.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_util_toast_service__ = __webpack_require__("../../../../../src/app/services/util/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditSchemaComponent = (function () {
    function EditSchemaComponent(activatedRoute, router, schemaService, toastService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.schemaService = schemaService;
        this.toastService = toastService;
    }
    EditSchemaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerServiceSubcription = this.activatedRoute.paramMap.subscribe(function (params) {
            _this.schemaName = params.get('schemaName');
            _this.schemaService.getSchemaStructure(_this.schemaName).subscribe(function (res) {
                _this.schemaStructure = [];
                Object.keys(res.data.structure).forEach(function (element) {
                    if (!(element.charAt(0) == '_') && (res.data.structure[element].name))
                        _this.schemaStructure.push(res.data.structure[element]);
                });
            });
        });
    };
    EditSchemaComponent.prototype.ngOnDestroy = function () {
        this.routerServiceSubcription.unsubscribe();
    };
    EditSchemaComponent.prototype.saveSchemaStructure = function () {
        var _this = this;
        var data = {
            schemaName: this.schemaName,
            structure: this.schemaStructure
        };
        this.schemaService.editSchemaStructure(data).subscribe(function (res) {
            if (res.success) {
                _this.toastService
                    .showToast(_this.toastService.typeNum.success, "Hurray!!", res.message);
            }
            else {
                _this.toastService
                    .showToast(_this.toastService.typeNum.error, "Oops!!", res.message);
            }
        });
    };
    EditSchemaComponent.prototype.removeDone = function (res) {
        if (res.success) {
            this.toastService
                .showToast(this.toastService.typeNum.success, "Hurray!!", res.message);
            this.ngOnInit();
        }
        else {
            this.toastService
                .showToast(this.toastService.typeNum.error, "Oops!!", res.message);
        }
    };
    return EditSchemaComponent;
}());
EditSchemaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-schema',
        template: __webpack_require__("../../../../../src/app/components/dashboard/schema/edit-schema/edit-schema.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/schema/edit-schema/edit-schema.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_dashboard_schema_service__["a" /* SchemaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dashboard_schema_service__["a" /* SchemaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_util_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_util_toast_service__["a" /* ToastService */]) === "function" && _d || Object])
], EditSchemaComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-schema.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/schema/schema-detail-card/schema-detail-card.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"large\">\n  <nb-card-header>\n    Schema Structure\n  </nb-card-header>\n  <nb-card-body>\n    <div>\n      <pre [innerHTML]=\"syntaxHighlight(schemaStructure)\">\n      </pre>\n    </div>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/schema/schema-detail-card/schema-detail-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) pre {\n  outline: 1px solid #8a7fff;\n  padding: 5px;\n  margin: 5px;\n  min-height: 5rem; }\n\n:host-context(.nb-theme-cosmic) pre {\n  outline: 1px solid #7659ff;\n  padding: 5px;\n  margin: 5px;\n  min-height: 5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/schema/schema-detail-card/schema-detail-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaDetailCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SchemaDetailCardComponent = (function () {
    function SchemaDetailCardComponent() {
    }
    SchemaDetailCardComponent.prototype.ngOnInit = function () {
        //console.log(this.syntaxHighlight(this.schemaStructure));
    };
    SchemaDetailCardComponent.prototype.syntaxHighlight = function (json) {
        if (typeof json != 'undefined') {
            if (typeof json == 'string') {
                json = JSON.parse(json);
                json = JSON.stringify(json, null, 2);
            }
            json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
                var cls = 'text-warning';
                if (/^"/.test(match)) {
                    if (/:$/.test(match)) {
                        cls = 'text-primary';
                    }
                    else {
                        cls = 'text-warning';
                    }
                }
                else if (/true|false/.test(match)) {
                    cls = 'text-info';
                }
                else if (/null/.test(match)) {
                    cls = 'text-danger';
                }
                return '<span class="' + cls + '">' + match + '</span>';
            });
        }
    };
    return SchemaDetailCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SchemaDetailCardComponent.prototype, "schemaStructure", void 0);
SchemaDetailCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-schema-detail-card',
        template: __webpack_require__("../../../../../src/app/components/dashboard/schema/schema-detail-card/schema-detail-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/schema/schema-detail-card/schema-detail-card.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SchemaDetailCardComponent);

//# sourceMappingURL=schema-detail-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/schema/schema-modal/schema-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{modalTitle}}</h4>\n  <button (click)=\"closeModal()\" type=\"button\" aria-label=\"Close\" class=\"close\">\n    <span aria-hidden=\"true\">×</span>\n  </button>\n</div>\n<div class=\"modal-body\">  \n    <form #form=\"ngForm\">\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\">\n              <i class=\"nb-tables\"></i>\n            </span>\n            <input name=\"schemaName\" id=\"schemaName\" pattern=\"[A-Za-z_]{2,100}\" [(ngModel)]=\"name\" placeholder=\"Schema Name\" class=\"form-control input-lg\"\n              [class.form-control-warning]=\"schemaName.errors && (schemaName.dirty || schemaName.touched) && schemaName.errors.required\"\n              required #schemaName=\"ngModel\">\n          </div>\n          <small class=\"form-text text-warning\" *ngIf=\"schemaName.errors && (schemaName.dirty || schemaName.touched) && schemaName.errors.required\">Schema Name Required!!</small>\n          <small class=\"form-text text-warning\" *ngIf=\"schemaName.errors && (schemaName.dirty || schemaName.touched) && schemaName.errors.pattern\">Only alphabate with '_' with length between 2-50 allowed!!</small>\n        </div>\n      </form>\n</div>\n<div class=\"modal-footer\">\n  <button [disabled]=\"submitted || !form.valid\" (click)=\"createSchema()\" type=\"button\" class=\"btn btn-round btn-success\">Create</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/schema/schema-modal/schema-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .modal-body .row .header {\n  padding: 0.5rem;\n  font-size: 1.35rem;\n  font-family: Exo; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .dropdown-toggle {\n    font-size: 0.75rem; } }\n\n:host-context(.nb-theme-cosmic) .modal-body .row .header {\n  padding: 0.5rem;\n  font-size: 1.35rem;\n  font-family: Exo; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) .dropdown-toggle {\n    font-size: 0.75rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/schema/schema-modal/schema-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap_modal_modal_ref__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/modal/modal-ref.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dashboard_schema_service__ = __webpack_require__("../../../../../src/app/services/dashboard/schema.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_util_toast_service__ = __webpack_require__("../../../../../src/app/services/util/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SchemaModalComponent = (function () {
    function SchemaModalComponent(activeModal, schemaService, toastService) {
        this.activeModal = activeModal;
        this.schemaService = schemaService;
        this.toastService = toastService;
    }
    SchemaModalComponent.prototype.ngOnInit = function () {
    };
    SchemaModalComponent.prototype.closeModal = function () {
        this.activeModal.close();
    };
    SchemaModalComponent.prototype.createSchema = function () {
        var _this = this;
        if (this.modalTitle === "Add new Schema") {
            this.submitted = true;
            var schema_1 = {
                name: this.name.toLowerCase()
            };
            this.schemaService.createSchema(schema_1).subscribe(function (res) {
                if (res.success) {
                    _this.toastService.showToast(_this.toastService.typeNum.success, "Hurray!!", res.message);
                    _this.activeModal.close(schema_1);
                }
                else {
                    _this.toastService.showToast(_this.toastService.typeNum.error, "Oops!!", res.message);
                    _this.activeModal.close();
                }
            });
        }
    };
    return SchemaModalComponent;
}());
SchemaModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-schema-modal',
        template: __webpack_require__("../../../../../src/app/components/dashboard/schema/schema-modal/schema-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/schema/schema-modal/schema-modal.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap_modal_modal_ref__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap_modal_modal_ref__["a" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_dashboard_schema_service__["a" /* SchemaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dashboard_schema_service__["a" /* SchemaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_util_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_util_toast_service__["a" /* ToastService */]) === "function" && _c || Object])
], SchemaModalComponent);

var _a, _b, _c;
//# sourceMappingURL=schema-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/schema/schema.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-3\">\n    <nb-card>\n      <nb-card-header>Add New Schema</nb-card-header>\n      <nb-card-body>\n        <div class=\"schema-options\">\n          <button type=\"button\" (click)=\"showAddSchemaModal()\" class=\"btn btn-success btn-round btn-block\">Add Schema</button>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-3\" *ngFor=\"let schema of schemas\">\n    <nb-card>\n      <nb-card-header>{{schema.name}}</nb-card-header>\n      <nb-card-body>\n        <div class=\"schema-options\">            \n          <button (click)=\"viewSchema(schema.name)\" type=\"button\" class=\"btn btn-round btn-primary btn-block\">View Schema</button>          \n          <button (click)=\"apiAccess(schema.name)\" type=\"button\" class=\"btn btn-round btn-info btn-block\">API Access</button>\n          <button (click)=\"editSchema(schema.name)\" type=\"button\" class=\"btn btn-round btn-warning btn-block\">Edit Schema</button>\n          <button (click)=\"deleteSchema(schema.name,$event)\" type=\"button\" class=\"btn btn-round btn-danger btn-block\">Delete Schema</button>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/schema/schema.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nb-card-body div:not(:last-child) {\n  margin-bottom: 1rem; }\n\nnb-card-header {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/schema/schema.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema_modal_schema_modal_component__ = __webpack_require__("../../../../../src/app/components/dashboard/schema/schema-modal/schema-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dashboard_schema_service__ = __webpack_require__("../../../../../src/app/services/dashboard/schema.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_util_toast_service__ = __webpack_require__("../../../../../src/app/services/util/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* custom imports */





var SchemaComponent = (function () {
    function SchemaComponent(modalService, schemaService, router, toastService) {
        this.modalService = modalService;
        this.schemaService = schemaService;
        this.router = router;
        this.toastService = toastService;
    }
    SchemaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.schemaService.getSchemas().subscribe(function (res) {
            _this.schemas = res.schemas;
        });
    };
    SchemaComponent.prototype.viewSchema = function (event) {
        //console.log(event);
        this.router.navigateByUrl('dashboard/' + 'table/' + event);
        // console.log(event);
        // const activeModal = this.modalService.open(SchemaModalComponent, {
        //   size: 'lg',
        //   // backdrop: 'static',
        //   container: 'nb-layout',
        // });    
        // activeModal.componentInstance.modalTitle = "Edit Schema";        
    };
    SchemaComponent.prototype.editSchema = function (schemaName) {
        this.router.navigateByUrl('dashboard/' + 'edit-schema/' + schemaName);
    };
    SchemaComponent.prototype.showAddSchemaModal = function () {
        var _this = this;
        var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__schema_modal_schema_modal_component__["a" /* SchemaModalComponent */], {
            size: 'sm',
            container: 'nb-layout',
        });
        activeModal.result.then(function (result) {
            if (result)
                _this.schemas.push(result);
        }, function (reason) { });
        activeModal.componentInstance.modalTitle = "Add new Schema";
    };
    SchemaComponent.prototype.apiAccess = function (schemaName) {
        this.router.navigate(['dashboard', 'api-access', schemaName]);
    };
    SchemaComponent.prototype.deleteSchema = function (schemaName) {
        var _this = this;
        if (window.confirm('Are you sure you want to delete?')) {
            if (window.confirm('Data lost would not be recovered, are you sure that you want to delete schema?')) {
                this.schemaService.deleteSchema(schemaName).subscribe(function (res) {
                    if (res.success) {
                        _this.toastService.showToast(_this.toastService.typeNum.success, "Hurray!", res.message);
                        _this.ngOnInit();
                    }
                    else {
                        _this.toastService.showToast(_this.toastService.typeNum.error, "Oops!", res.message);
                    }
                });
            }
        }
    };
    return SchemaComponent;
}());
SchemaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-schema',
        template: __webpack_require__("../../../../../src/app/components/dashboard/schema/schema.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/schema/schema.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_dashboard_schema_service__["a" /* SchemaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dashboard_schema_service__["a" /* SchemaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_util_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_util_toast_service__["a" /* ToastService */]) === "function" && _d || Object])
], SchemaComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=schema.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/storage-service/storage-service.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-8\">\n    <nb-card>\n      <nb-card-header>\n        Storage Service Configurations\n      </nb-card-header>\n      <nb-card-body>\n        <div class=\"container\">\n          <div class=\"setting-choice-box\">\n            <div class=\"title text-hint\">File Upload Options</div>\n            <ul class=\"option-list\">\n\n              <li class=\"option\">\n                <div class=\"option-body row\">\n                  <div class=\"option-title col-md-8 col-sm-6\">Upload Directory</div>\n                  <div class=\"option-value col-md-4 col-sm-6\">\n                    <input name=\"uploadDirectory\" [(ngModel)]=\"storageConfiguration.uploadDirectory\" type=\"text\" class=\"form-control form-control-info\">\n                  </div>\n                </div>\n                <div class=\"option-summary text-hint font-w-light\">Where you want to store file??</div>\n              </li>\n\n              <li class=\"option\">\n                <div class=\"option-body row\">\n                  <div class=\"option-title col-md-8 col-sm-6\">Enable Upload</div>\n                  <div class=\"option-value col-md-4 col-sm-6\">\n                    <label class=\"row\">\n                      <div class=\"col-md-4 text-hint\" *ngIf=\"!storageConfiguration.enableUpload\">Enable</div>\n                      <div class=\"col-md-4 text-hint\" *ngIf=\"storageConfiguration.enableUpload\">Disable</div>\n                      <div class=\"col-md-4\">\n                        <div class=\"switch\">\n                          <input type=\"checkbox\" [(ngModel)]=\"storageConfiguration.enableUpload\" name=\"enableUpload\">\n                          <span class=\"slider\" [class.slider-disable]=\"!storageConfiguration.enableUpload\"></span>\n                        </div>\n                      </div>\n                    </label>\n                  </div>\n                </div>\n                <div class=\"option-summary text-hint font-w-light\">Do you want to enable or disable storageConfiguration routes?</div>\n              </li>\n\n              <!-- <li class=\"option\">\n                <div class=\"option-body row\">\n                  <div class=\"option-title col-md-8 col-sm-6\">Max number of files</div>\n                  <div class=\"option-value col-md-4 col-sm-6\">\n                    <input type=\"number\" [(ngModel)]=\"storageConfiguration.maxNumberOfFilesPerRequest\" name=\"fileSizeLimit\" class=\"form-control form-control-info\">\n                  </div>\n                </div>\n                <div class=\"option-summary text-hint font-w-light\">What maximum number of files you want to allow?</div>\n              </li> -->\n\n              <li class=\"option\">\n                <div class=\"option-body row\">\n                  <div class=\"option-title col-md-8 col-sm-6\">File Size Limit (in MB)</div>\n                  <div class=\"option-value col-md-4 col-sm-6\">\n                    <input type=\"number\" pattern=\"[a-z]\" maxlength=\"50\" [(ngModel)]=\"storageConfiguration.maxFileSizeLimit\" name=\"fileSizeLimit\"\n                      class=\"form-control form-control-info\">\n                  </div>\n                </div>\n                <div class=\"option-summary text-hint font-w-light\">What maximum file size you want to allow?</div>\n              </li>\n              \n              <li class=\"option\">\n                <div class=\"option-body row\">\n                  <div class=\"option-title col-md-8 col-sm-6\">Allowed Mime types</div>\n                  <div class=\"option-value col-md-4 col-sm-6\">\n                    <input type=\"text\" placeholder=\"Mime Type Allowed\" class=\"form-control form-control-info\" #mimeTypeAllowed>\n                  </div>\n                </div>\n                <div class=\"option-summary text-hint font-w-light\">Which type of files are allowed to stored?</div>\n\n                <div class=\"container p-2\">\n                  <div class=\"row\">\n                    <div class=\"col-md-8 row\">\n                      <div class=\"p-3 item\" *ngFor=\"let item of storageConfiguration.allowedMimeTypes\">\n                        {{item}}\n                        <button type=\"button\" (click)=\"removeAllowedMimeTypeFromList(item)\" class=\"ml-1 close\" aria-label=\"Close\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                    </div>                    \n                    <div class=\"offset-md-1 col-md-3\">\n                      <button (click)=\"addAllowedMimeTypeToList(mimeTypeAllowed)\" class=\"btn btn-outline-primary\" type=\"button\">\n                        Add\n                      </button>\n                    </div>\n                  </div>\n                </div>\n\n              </li>\n\n              <li class=\"option\">\n                <div class=\"option-body row\">\n                  <div class=\"option-title col-md-8 col-sm-6\">Excepted Mime types</div>\n                  <div class=\"option-value col-md-4 col-sm-6\">\n                    <input type=\"text\" placeholder=\"Mime Type Excepted\" class=\"form-control form-control-info\" #mimeTypeExcepted>\n                  </div>\n                </div>\n                <div class=\"option-summary text-hint font-w-light\">Which type of files are not allowed to be stored?</div>\n\n                <div class=\"container p-2\">\n                  <div class=\"row\">\n                    <div class=\"col-md-8 row\">\n                      <div class=\"p-3 item\" *ngFor=\"let item of storageConfiguration.exceptedMimeTypes\">\n                        {{item}}\n                        <button type=\"button\" (click)=\"removeExceptedMimeTypesFromList(item)\" class=\"ml-1 close\" aria-label=\"Close\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                    </div>                    \n                    <div class=\"offset-md-1 col-md-3\">\n                      <button (click)=\"addExceptedMimeTypesToList(mimeTypeExcepted)\" class=\"btn btn-outline-primary\" type=\"button\">\n                        Add\n                      </button>\n                    </div>\n                  </div>\n                </div>\n\n              </li>\n\n            </ul>\n          </div>\n        </div>\n      </nb-card-body>\n\n      <nb-card-footer>\n        <button (click)=\"saveStorageConfig()\" class=\"col-md-4 offset-md-8 btn btn-hero-info\" type=\"button\">\n          Save\n        </button>\n      </nb-card-footer>\n    </nb-card>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/storage-service/storage-service.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .item {\n  background-color: #e9edf2;\n  border-radius: 5px;\n  margin: 2px; }\n\n:host-context(.nb-theme-default) .setting-choice-box {\n  padding: 1.25rem; }\n  :host-context(.nb-theme-default) .setting-choice-box .title {\n    font-size: 1.25rem;\n    padding-bottom: 1.25rem; }\n  :host-context(.nb-theme-default) .setting-choice-box .option-list {\n    list-style: none;\n    padding: 0; }\n    :host-context(.nb-theme-default) .setting-choice-box .option-list .option {\n      border-bottom: 1px solid #ebeff5;\n      padding-top: 0.75rem;\n      padding-bottom: 0.75rem;\n      margin-bottom: 0.50rem; }\n      :host-context(.nb-theme-default) .setting-choice-box .option-list .option .option-body {\n        font-size: 1.15em; }\n      :host-context(.nb-theme-default) .setting-choice-box .option-list .option .option-summary {\n        font-size: 0.85em; }\n\n:host-context(.nb-theme-default) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0;\n  cursor: pointer; }\n  :host-context(.nb-theme-default) .switch input {\n    display: none; }\n    :host-context(.nb-theme-default) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-default) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #ebeff5; }\n  :host-context(.nb-theme-default) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #4ca6ff;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n  :host-context(.nb-theme-default) .switch .slider-disable::before {\n    background-color: #aaa; }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) .light,\n  :host-context(.nb-theme-default) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    padding: 0; } }\n\n:host-context(.nb-theme-cosmic) .item {\n  background-color: #494299;\n  border-radius: 5px;\n  margin: 2px; }\n\n:host-context(.nb-theme-cosmic) .setting-choice-box {\n  padding: 1.25rem; }\n  :host-context(.nb-theme-cosmic) .setting-choice-box .title {\n    font-size: 1.25rem;\n    padding-bottom: 1.25rem; }\n  :host-context(.nb-theme-cosmic) .setting-choice-box .option-list {\n    list-style: none;\n    padding: 0; }\n    :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option {\n      border-bottom: 1px solid #2f296b;\n      padding-top: 0.75rem;\n      padding-bottom: 0.75rem;\n      margin-bottom: 0.50rem; }\n      :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option .option-body {\n        font-size: 1.15em; }\n      :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option .option-summary {\n        font-size: 0.85em; }\n\n:host-context(.nb-theme-cosmic) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0;\n  cursor: pointer; }\n  :host-context(.nb-theme-cosmic) .switch input {\n    display: none; }\n    :host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-cosmic) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #2f296b; }\n  :host-context(.nb-theme-cosmic) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0088ff;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(161, 161, 229, 0.4);\n    background-image: linear-gradient(to right, #ad59ff, #7659ff); }\n  :host-context(.nb-theme-cosmic) .switch .slider-disable::before {\n    background-color: #aaa; }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) .light,\n  :host-context(.nb-theme-cosmic) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    padding: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/storage-service/storage-service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_storage_service__ = __webpack_require__("../../../../../src/app/services/dashboard/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_util_toast_service__ = __webpack_require__("../../../../../src/app/services/util/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StorageServiceComponent = (function () {
    function StorageServiceComponent(storageService, toastService) {
        this.storageService = storageService;
        this.toastService = toastService;
        this.storageConfiguration = {
            uploadDirectory: 'uploads',
            //maxNumberOfFilesPerRequest: 1,
            allowedMimeTypes: ['image/jpeg'],
            exceptedMimeTypes: ['application/json'],
            maxFileSizeLimit: 1,
            enableUpload: true
        };
    }
    StorageServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storageService.getStorageConfiguration()
            .subscribe(function (res) {
            console.log(res);
            _this.storageConfiguration = res.data;
        });
    };
    StorageServiceComponent.prototype.saveStorageConfig = function () {
        var _this = this;
        console.log(this.storageConfiguration);
        var validateName = new RegExp("^[A-z]+$");
        if (validateName.test(this.storageConfiguration.uploadDirectory)) {
            this.storageService.addStorageConfiguration(this.storageConfiguration)
                .subscribe(function (res) {
                if (res.success) {
                    _this.toastService.showToast(_this.toastService.typeNum.info, "", res.message);
                }
                else {
                    _this.toastService.showToast(_this.toastService.typeNum.error, "", res.message);
                }
            });
        }
        else {
            alert('Upload directory should only contain alphabate and length less than 50');
        }
    };
    StorageServiceComponent.prototype.addAllowedMimeTypeToList = function (e) {
        var isPresent = this.storageConfiguration['allowedMimeTypes'].indexOf(e.value);
        if (isPresent >= 0 || e.value.length === 0)
            alert("Unique values only!!");
        else {
            var patt = new RegExp("^[A-z]{2,50}/[A-z]{2,50}$");
            var res = patt.test(e.value);
            if (res) {
                this.storageConfiguration['allowedMimeTypes'].push(e.value);
            }
            else {
                alert('Invalid MIME type!!');
            }
        }
    };
    StorageServiceComponent.prototype.removeAllowedMimeTypeFromList = function (item) {
        var index = this.storageConfiguration['allowedMimeTypes'].indexOf(item);
        if (index >= 0) {
            this.storageConfiguration['allowedMimeTypes'].splice(index, 1);
        }
    };
    StorageServiceComponent.prototype.addExceptedMimeTypesToList = function (e) {
        var isPresent = this.storageConfiguration['exceptedMimeTypes'].indexOf(e.value);
        if (isPresent >= 0 || e.value.length === 0)
            alert("Unique values only!!");
        else {
            var patt = new RegExp("^[A-z]{2,50}/[A-z]{2,50}$");
            var res = patt.test(e.value);
            if (res) {
                this.storageConfiguration['exceptedMimeTypes'].push(e.value);
            }
            else {
                alert('Invalid MIME type!!');
            }
        }
    };
    StorageServiceComponent.prototype.removeExceptedMimeTypesFromList = function (item) {
        var index = this.storageConfiguration['exceptedMimeTypes'].indexOf(item);
        if (index >= 0) {
            this.storageConfiguration['exceptedMimeTypes'].splice(index, 1);
        }
    };
    return StorageServiceComponent;
}());
StorageServiceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-storage-service',
        template: __webpack_require__("../../../../../src/app/components/dashboard/storage-service/storage-service.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/storage-service/storage-service.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dashboard_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dashboard_storage_service__["a" /* StorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_util_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_util_toast_service__["a" /* ToastService */]) === "function" && _b || Object])
], StorageServiceComponent);

var _a, _b;
//# sourceMappingURL=storage-service.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/table/add-attribute-modal/add-attribute-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{modalTitle}}</h4>\n  <button (click)=\"closeModal()\" type=\"button\" aria-label=\"Close\" class=\"close\">\n    <span aria-hidden=\"true\">×</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form #form=\"ngForm\">\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">\n          <i class=\"nb-tables\"></i>\n        </span>\n        <input name=\"attributeName\" id=\"attributeName\" pattern=\"[A-Za-z]{2,12}\" [(ngModel)]=\"attrName\" placeholder=\"Attribute Name\" class=\"form-control input-lg\"\n          [class.form-control-warning]=\"attributeName.errors && (attributeName.dirty || attributeName.touched) && attributeName.errors.required\"\n          required autofocus #attributeName=\"ngModel\">\n      </div>\n      <small class=\"form-text text-warning\" *ngIf=\"attributeName.errors && (attributeName.dirty || attributeName.touched) && attributeName.errors.required\">Schema Name Required!!</small>\n      <small class=\"form-text text-warning\" *ngIf=\"attributeName.errors && (attributeName.dirty || attributeName.touched) && attributeName.errors.pattern\">Only Alphabates with length between 0-12 allowed!!</small>\n      <br>\n      <div class=\"dropdown\" ngbDropdown>\n        <button class=\"btn btn-outline-success\" type=\"button\" ngbDropdownToggle>\n          {{ attrDataType }}\n        </button>\n        <ul ngbDropdownMenu class=\"dropdown-menu\">\n          <li class=\"dropdown-item\" *ngFor=\"let dataType of dataTypes\" (click)=\"attrDataType = dataType\">\n            {{ dataType }}\n          </li>\n        </ul>\n      </div>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button [disabled]=\"submitted || !form.valid\" (click)=\"addAttribute()\" type=\"button\" class=\"btn btn-round btn-success\">Create</button>\n</div> -->\n\n\n<!-- This is Border to seprate old vs new -->\n<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{modalTitle}}</h4>\n  <button (click)=\"closeModal()\" type=\"button\" aria-label=\"Close\" class=\"close\">\n    <span aria-hidden=\"true\">×</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <form #form=\"ngForm\">\n        <div class=\"container\">\n          <div class=\"setting-choice-box\">\n            <div class=\"title text-hint\">Attribute Properties</div>\n            <ul class=\"option-list\">\n\n              <li class=\"option\">\n                <div class=\"option-body row\">\n                  <div class=\"option-title col-md-8 col-sm-6\">Attribute Name</div>\n                  <div class=\"option-value col-md-4 col-sm-6\">\n                    <input name=\"attributeName\" id=\"attributeName\" pattern=\"[A-Za-z_]{2,100}\" [(ngModel)]=\"attribute.name\" placeholder=\"Attribute Name\"\n                      class=\"form-control form-control-info input-lg\" [class.form-control-warning]=\"attributeName.errors && (attributeName.dirty || attributeName.touched) && attributeName.errors.required\"\n                      required autofocus #attributeName=\"ngModel\">\n                  </div>\n                </div>\n                <div class=\"option-summary text-hint font-w-light\" *ngIf=\"!attributeName.errors || !(attributeName.touched || attributeName.dirty)\">What do you want to call it??</div>\n                <div class=\"option-summary text-danger font-w-light\" *ngIf=\"attributeName.errors && (attributeName.dirty || attributeName.touched) && (attributeName.errors.required || attributeName.errors.pattern)\">Route Name required and only contain alphabates and (-,_)</div>\n              </li>\n\n              <li class=\"option\">\n                <div class=\"option-body row\">\n                  <div class=\"option-title col-md-8 col-sm-6\">Data Type</div>\n                  <div class=\"option-value col-md-4 col-sm-6\">\n                    <select name=\"attributeDataType\" class=\"form-control form-control-info\" [(ngModel)]=\"attribute.type\">\n                      <option value=\"{{item}}\" *ngFor=\"let item of dataTypes\">{{item | uppercase}}</option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"option-summary text-hint font-w-light\">Data Type It will store??</div>\n                <div class=\"col-md-12 p-2 pt-4\" [class.d-none]=\"attribute.type != 'regex-validator' \">\n                  <input name=\"regexValidatorString\" placeholder=\"Regex Pattern\" [(ngModel)]=\"attribute.regexPattern\" type=\"text\" class=\"form-control form-control-info\">\n                </div>\n\n                <div class=\"option-body row\" [class.d-none]=\"attribute.type != 'enum' \">\n                  <div class=\"row option-title col-md-8 col-sm-6\">\n                    <div class=\"p-3 item\" *ngFor=\"let item of attribute.enumValues\">\n                      {{item}}\n                      <button type=\"button\" (click)=\"removeValueFromEnum(item)\" class=\"ml-1 close\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                    </div>\n                  </div>\n                  <div class=\"option-value col-md-3 col-sm-4\">\n                    <input class=\"input-sm form-control form-control-info\" name=\"enumValue\" placeholder=\"Enum Value\" [(ngModel)]=\"enumValue\"\n                      type=\"text\">\n                  </div>\n                  <div class=\"col-md-1 col-sm-4 p-0\">\n                    <button (click)=\"addValueInEnum()\" class=\"btn btn-outline-info\">Add</button>\n                  </div>\n                </div>\n\n              </li>\n\n              <li class=\"option\">\n                <div class=\"option-body row\">\n                  <div class=\"option-title col-md-8 col-sm-6\">Default Value</div>\n                  <div class=\"option-value col-md-4 col-sm-6\">\n                    <input name=\"defaultValue\" id=\"defaultValue\" pattern=\"[A-Za-z]{0,100}\" [(ngModel)]=\"attribute.default\" placeholder=\"Default Value\"\n                      class=\"form-control form-control-info input-lg\" [class.form-control-warning]=\"defaultValue.errors && (defaultValue.dirty || defaultValue.touched)\"\n                      #defaultValue=\"ngModel\">\n                  </div>\n                </div>\n                <div class=\"option-summary text-hint font-w-light\" *ngIf=\"!defaultValue.errors && !(defaultValue.touched || defaultValue.dirty)\">What do you want to call it??</div>\n                <div class=\"option-summary text-danger font-w-light\" *ngIf=\"defaultValue.errors && (defaultValue.dirty || defaultValue.touched)\">Route Name required and only contain alphabates and (-,_)</div>\n              </li>\n\n              <li class=\"option\">\n                <div class=\"option-body row\">\n                  <div class=\"option-title col-md-8 col-sm-6\">Required Attribute</div>\n                  <div class=\"option-value col-md-4 col-sm-6\">\n                    <label class=\"row\">\n                      <div class=\"col-md-4 text-hint\" *ngIf=\"!attribute.isRequired\">Enable</div>\n                      <div class=\"col-md-4 text-hint\" *ngIf=\"attribute.isRequired\">Disable</div>\n                      <div class=\"col-md-4\">\n                        <div class=\"switch\">\n                          <input type=\"checkbox\" name=\"required\" [(ngModel)]=\"attribute.isRequired\" [checked]=\"attribute.isRequired\">\n                          <span class=\"slider\" [class.slider-disable]=\"!attribute.isRequired\"></span>\n                        </div>\n                      </div>\n                    </label>\n                  </div>\n                </div>\n                <div class=\"option-summary text-hint font-w-light\">Does this attribute is required?</div>\n              </li>\n\n              <li class=\"option\">\n                <div class=\"option-body row\">\n                  <div class=\"option-title col-md-8 col-sm-6\">Unique Attribute</div>\n                  <div class=\"option-value col-md-4 col-sm-6\">\n                    <label class=\"row\">\n                      <div class=\"col-md-4 text-hint\" *ngIf=\"!attribute.isUnique\">Enable</div>\n                      <div class=\"col-md-4 text-hint\" *ngIf=\"attribute.isUnique\">Disable</div>\n                      <div class=\"col-md-4\">\n                        <div class=\"switch\">\n                          <input type=\"checkbox\" name=\"unique\" [(ngModel)]=\"attribute.isUnique\" [checked]=\"attribute.isUnique\">\n                          <span class=\"slider\" [class.slider-disable]=\"!attribute.isUnique\"></span>\n                        </div>\n                      </div>\n                    </label>\n                  </div>\n                </div>\n                <div class=\"option-summary text-hint font-w-light\">Does the attribute only contains unique value?</div>\n              </li>\n\n              <li class=\"option\">\n                <div class=\"option-body row\">\n                  <div class=\"option-title col-md-8 col-sm-6\">Hash Data</div>\n                  <div class=\"option-value col-md-4 col-sm-6\">\n                    <label class=\"row\">\n                      <div class=\"col-md-4 text-hint\" *ngIf=\"!attribute.encryptInHash\">Enable</div>\n                      <div class=\"col-md-4 text-hint\" *ngIf=\"attribute.encryptInHash\">Disable</div>\n                      <div class=\"col-md-4\">\n                        <div class=\"switch\">\n                          <input type=\"checkbox\" name=\"encryptInHash\" [(ngModel)]=\"attribute.encryptInHash\" [checked]=\"attribute.encryptInHash\">\n                          <span class=\"slider\" [class.slider-disable]=\"!attribute.encryptInHash\"></span>\n                        </div>\n                      </div>\n                    </label>\n                  </div>\n                </div>\n                <div class=\"option-summary text-hint font-w-light\">Do you want your data to be hashed (String only One Way Encryption)?</div>\n              </li>\n\n\n            </ul>\n          </div>\n        </div>\n      </form>\n      <button [disabled]=\"submitted || !form.valid\" (click)=\"addAttribute()\" class=\"col-md-4 offset-md-8 btn btn-hero-info\" type=\"button\">\n        Create\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/table/add-attribute-modal/add-attribute-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .item {\n  background-color: #e9edf2;\n  border-radius: 5px;\n  margin: 2px; }\n\n:host-context(.nb-theme-default) .setting-choice-box {\n  padding: 1.25rem; }\n  :host-context(.nb-theme-default) .setting-choice-box .title {\n    font-size: 1.25rem;\n    padding-bottom: 1.25rem; }\n  :host-context(.nb-theme-default) .setting-choice-box .option-list {\n    list-style: none;\n    padding: 0; }\n    :host-context(.nb-theme-default) .setting-choice-box .option-list .option {\n      border-bottom: 1px solid #ebeff5;\n      padding-top: 0.75rem;\n      padding-bottom: 0.75rem;\n      margin-bottom: 0.5rem; }\n      :host-context(.nb-theme-default) .setting-choice-box .option-list .option .option-body {\n        font-size: 1.15em; }\n      :host-context(.nb-theme-default) .setting-choice-box .option-list .option .option-summary {\n        font-size: 0.85em; }\n\n:host-context(.nb-theme-default) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0;\n  cursor: pointer; }\n  :host-context(.nb-theme-default) .switch input {\n    display: none; }\n    :host-context(.nb-theme-default) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-default) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #ebeff5; }\n  :host-context(.nb-theme-default) .switch .slider::before {\n    position: absolute;\n    content: \"\";\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #4ca6ff;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n  :host-context(.nb-theme-default) .switch .slider-disable::before {\n    background-color: #aaa; }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) .light,\n  :host-context(.nb-theme-default) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    padding: 0; } }\n\n:host-context(.nb-theme-cosmic) .item {\n  background-color: #494299;\n  border-radius: 5px;\n  margin: 2px; }\n\n:host-context(.nb-theme-cosmic) .setting-choice-box {\n  padding: 1.25rem; }\n  :host-context(.nb-theme-cosmic) .setting-choice-box .title {\n    font-size: 1.25rem;\n    padding-bottom: 1.25rem; }\n  :host-context(.nb-theme-cosmic) .setting-choice-box .option-list {\n    list-style: none;\n    padding: 0; }\n    :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option {\n      border-bottom: 1px solid #2f296b;\n      padding-top: 0.75rem;\n      padding-bottom: 0.75rem;\n      margin-bottom: 0.5rem; }\n      :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option .option-body {\n        font-size: 1.15em; }\n      :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option .option-summary {\n        font-size: 0.85em; }\n\n:host-context(.nb-theme-cosmic) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0;\n  cursor: pointer; }\n  :host-context(.nb-theme-cosmic) .switch input {\n    display: none; }\n    :host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-cosmic) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #2f296b; }\n  :host-context(.nb-theme-cosmic) .switch .slider::before {\n    position: absolute;\n    content: \"\";\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0088ff;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(161, 161, 229, 0.4);\n    background-image: linear-gradient(to right, #ad59ff, #7659ff); }\n  :host-context(.nb-theme-cosmic) .switch .slider-disable::before {\n    background-color: #aaa; }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) .light,\n  :host-context(.nb-theme-cosmic) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    padding: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/table/add-attribute-modal/add-attribute-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAttributeModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap_modal_modal_ref__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/modal/modal-ref.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dashboard_schema_service__ = __webpack_require__("../../../../../src/app/services/dashboard/schema.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_util_toast_service__ = __webpack_require__("../../../../../src/app/services/util/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddAttributeModalComponent = (function () {
    function AddAttributeModalComponent(activeModal, schemaService, toastService) {
        this.activeModal = activeModal;
        this.schemaService = schemaService;
        this.toastService = toastService;
        this.enumValue = '';
        this.attribute = {
            name: '',
            type: 'string',
            isRequired: false,
            isUnique: false,
            default: '',
            encryptInHash: false,
            schema: null,
            regexPattern: '',
            enumValues: []
        };
        this.dataTypes = [
            'string',
            'number',
            'boolean',
            'json',
            'enum',
            'date-iso',
            'timestamp',
            'integer',
            'decimal-only',
            'hexadecimal-number',
            'array',
            'alphanumeric-only',
            'email',
            'url',
            'mobile-phone',
            'regex-validator',
        ];
        this.attrDataType = this.dataTypes[0];
    }
    AddAttributeModalComponent.prototype.ngOnInit = function () {
    };
    AddAttributeModalComponent.prototype.closeModal = function () {
        this.activeModal.close();
    };
    AddAttributeModalComponent.prototype.addAttribute = function () {
        var _this = this;
        // let attribute = {
        //   type: this.attrDataType,
        //   name: this.attrName,
        //   schema: this.tableName
        // }
        this.attribute.schema = this.tableName;
        this.schemaService.addAttribute(this.attribute)
            .subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.toastService.showToast(_this.toastService.typeNum.success, "Hurray!!", res.message);
            }
            else {
                _this.toastService.showToast(_this.toastService.typeNum.error, "Oops!!", res.message);
            }
        });
        this.activeModal.close(this.attribute);
    };
    AddAttributeModalComponent.prototype.addValueInEnum = function () {
        var isPresent = this.attribute.enumValues.indexOf(this.enumValue);
        //console.log(isPresent+'  '+e.value.toString().length+' '+e.value);
        if (isPresent >= 0 || this.enumValue.toString().length === 0)
            alert("Unique values only!!");
        else {
            this.attribute.enumValues.push(this.enumValue);
        }
        this.enumValue = "";
    };
    AddAttributeModalComponent.prototype.removeValueFromEnum = function (e) {
        var index = this.attribute.enumValues.indexOf(e);
        if (index >= 0) {
            this.attribute.enumValues.splice(index, 1);
        }
    };
    return AddAttributeModalComponent;
}());
AddAttributeModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-attribute-modal',
        template: __webpack_require__("../../../../../src/app/components/dashboard/table/add-attribute-modal/add-attribute-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/table/add-attribute-modal/add-attribute-modal.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap_modal_modal_ref__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap_modal_modal_ref__["a" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_dashboard_schema_service__["a" /* SchemaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dashboard_schema_service__["a" /* SchemaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_util_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_util_toast_service__["a" /* ToastService */]) === "function" && _c || Object])
], AddAttributeModalComponent);

var _a, _b, _c;
//# sourceMappingURL=add-attribute-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n    <div class=\"row\">\n      <div class=\"col-md-3 col-xs-4\">\n        <div class=\"dropdown\" ngbDropdown>\n          <button class=\"btn btn-outline-success\" type=\"button\" ngbDropdownToggle>\n            {{ tableTitle }}\n          </button>\n          <ul ngbDropdownMenu class=\"dropdown-menu\">\n            <li class=\"dropdown-item\" *ngFor=\"let item of schemas\" (click)=\"onSelectSchema(item.name)\">\n              {{ item.name }}\n            </li>\n          </ul>\n        </div>\n      </div>\n      <button (click)=\"openAddColumnModal()\" type=\"button\" class=\"mr-2 m-xs-2 col-lg-2 col-md-3 offset-md-4 offset-lg-5 offset-xl-6 btn btn-outline-success btn-sm\">\n        Add Attribute\n      </button>\n      <button (click)=\"ngOnInit()\" type=\"button\" class=\"col-xs-1 btn btn-round btn-sm btn-outline-success\">\n        <i class=\"fa fa-refresh\"></i>\n      </button>\n    </div>\n  </nb-card-header>\n  <nb-card-body>\n    <div class=\"smart-table-container col-lg-12 container\">\n      <ng2-smart-table class='form-control form-control-success' [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\"\n        (editConfirm)=\"onSaveConfirm($event)\" (createConfirm)=\"onCreateConfirm($event)\"></ng2-smart-table>\n    </div>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/table/table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) nb-card {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  max-width: 1450px; }\n\n:host-context(.nb-theme-default) .smart-table-container {\n  overflow-x: scroll; }\n  :host-context(.nb-theme-default) .smart-table-container /deep/ .ng2-smart-action:nth-child(1) {\n    border: 0px; }\n\n:host-context(.nb-theme-cosmic) nb-card {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  max-width: 1450px; }\n\n:host-context(.nb-theme-cosmic) .smart-table-container {\n  overflow-x: scroll; }\n  :host-context(.nb-theme-cosmic) .smart-table-container /deep/ .ng2-smart-action:nth-child(1) {\n    border: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dashboard_schema_service__ = __webpack_require__("../../../../../src/app/services/dashboard/schema.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap_modal_modal__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/modal/modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_attribute_modal_add_attribute_modal_component__ = __webpack_require__("../../../../../src/app/components/dashboard/table/add-attribute-modal/add-attribute-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_util_toast_service__ = __webpack_require__("../../../../../src/app/services/util/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TableComponent = (function () {
    function TableComponent(route, schemaService, modalService, toastService, router) {
        this.route = route;
        this.schemaService = schemaService;
        this.modalService = modalService;
        this.toastService = toastService;
        this.router = router;
        this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */]();
        this.settings = {};
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.paramMap.subscribe(function (params) {
            _this.tableTitle = params.get('schemaName');
            _this.schemaService.getSchemas().subscribe(function (res) {
                _this.schemas = res.schemas;
                if (_this.tableTitle === null)
                    _this.tableTitle = res.schemas[0].name;
                _this.schemaService.getSchemaData(_this.tableTitle).subscribe(function (res) {
                    if (res.data !== null && res.data.structure) {
                        if (res.success)
                            _this.toastService.showToast(_this.toastService.typeNum.info, "", res.message);
                        Object.keys(res.data.structure).forEach(function (i) {
                            res.data.structure[i].title = i;
                            res.data.structure[i].editable = false;
                        });
                        _this.settings = {
                            add: {
                                addButtonContent: '<i class="nb-plus"></i>',
                                createButtonContent: '<i class="nb-checkmark"></i>',
                                cancelButtonContent: '<i class="nb-close"></i>',
                                confirmCreate: true
                            },
                            edit: {
                                editButtonContent: '<i class="nb-edit"></i>',
                                saveButtonContent: '<i class="nb-checkmark"></i>',
                                cancelButtonContent: '<i class="nb-close"></i>',
                                confirmSave: true
                            },
                            delete: {
                                deleteButtonContent: '<i class="nb-trash"></i>',
                                confirmDelete: true,
                            },
                            actions: {
                                edit: false
                            },
                            columns: res.data.structure,
                        };
                        var data = res.data.rows;
                        _this.source.load(data);
                    }
                    else {
                        _this.settings = {
                            add: {
                                addButtonContent: '<i class="nb-plus"></i>',
                                createButtonContent: '<i class="nb-checkmark"></i>',
                                cancelButtonContent: '<i class="nb-close"></i>',
                                confirmCreate: true
                            },
                            edit: {
                                editButtonContent: '<i class="nb-edit"></i>',
                                saveButtonContent: '<i class="nb-checkmark"></i>',
                                cancelButtonContent: '<i class="nb-close"></i>',
                                confirmSave: true
                            },
                            delete: {
                                deleteButtonContent: '<i class="nb-trash"></i>',
                                confirmDelete: true,
                            },
                            actions: {
                                edit: false
                            },
                            columns: {},
                        };
                    }
                });
            });
        });
    };
    TableComponent.prototype.openAddColumnModal = function () {
        var _this = this;
        var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_5__add_attribute_modal_add_attribute_modal_component__["a" /* AddAttributeModalComponent */], {
            size: 'lg',
            container: 'nb-layout',
        });
        activeModal.componentInstance.modalTitle = "Add Attribute";
        activeModal.componentInstance.tableName = this.tableTitle;
        activeModal.result.then(function (result) {
            if (result) {
                _this.settings.columns[result.name] = { type: result.type, title: result.name };
                //this.router.navigate(['dashboard','schema']);
                _this.ngOnInit();
            }
        }, function (reason) { });
    };
    TableComponent.prototype.onSelectSchema = function (schemaName) {
        this.router.navigate(['dashboard', 'table', schemaName]);
    };
    TableComponent.prototype.onCreateConfirm = function (event) {
        var _this = this;
        //console.log("Create confirm");
        var row = {
            schema: this.tableTitle,
            data: event.newData
        };
        this.schemaService.insertData(row).subscribe(function (res) {
            //console.log(event.newData); 
            //event.newData = res.data;      
            if (res.success) {
                //console.log(event.newData);
                event.confirm.resolve();
                _this.toastService.showToast(_this.toastService.typeNum.success, "Hurray!!", res.message);
                _this.ngOnInit();
            }
            else {
                event.confirm.reject();
                _this.toastService.showToast(_this.toastService.typeNum.error, "Oops!!", res.message);
            }
        });
    };
    TableComponent.prototype.onSaveConfirm = function (event) {
        console.log("Save confirm");
    };
    TableComponent.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        if (window.confirm('Are you sure you want to delete?')) {
            var row = {
                schema: this.tableTitle,
                data: event.data
            };
            this.schemaService.deleteData(row).subscribe(function (res) {
                console.log(res);
                if (res.success) {
                    event.confirm.resolve();
                    _this.toastService.showToast(_this.toastService.typeNum.success, "Hurray!!", res.message);
                    //this.ngOnInit();
                }
                else {
                    event.confirm.reject();
                    _this.toastService.showToast(_this.toastService.typeNum.error, "Oops!!", res.message);
                }
            });
        }
        else {
            event.confirm.reject();
        }
    };
    return TableComponent;
}());
TableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table',
        template: __webpack_require__("../../../../../src/app/components/dashboard/table/table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/table/table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_dashboard_schema_service__["a" /* SchemaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dashboard_schema_service__["a" /* SchemaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap_modal_modal__["a" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap_modal_modal__["a" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_util_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_util_toast_service__["a" /* ToastService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], TableComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-10 col-lg-12 col-md-12\">\n    <nb-card>\n      <nb-card-header>\n        <div class=\"user-avatar col-md-12\">\n          <img (click)=\"openAvatarSelectBox(content)\" src=\"/assets/images/avatar/{{user.avatar}}.png\" alt=\"\">\n          <div class=\"title\">{{user.displayName}}</div>\n        </div>\n      </nb-card-header>\n      <nb-card-body>\n        <div class=\"container\">\n          <div class=\"setting-choice-box\">\n            <form #form=\"ngForm\">\n              <ul class=\"option-list\">\n                <li class=\"option\">\n                  <div class=\"option-body row\">\n                    <div class=\"option-title col-md-8 col-sm-6\">Username</div>\n                    <div class=\"option-value col-md-4 col-sm-6\">\n                      {{user.username}}\n                    </div>\n                  </div>\n                  <div class=\"option-summary text-hint font-w-light\">Username of current user.</div>\n                </li>\n\n                <li class=\"option\">\n                    <div class=\"option-body row\">\n                      <div class=\"option-title col-md-8 col-sm-6\">User Type</div>\n                      <div class=\"option-value col-md-4 col-sm-6\">\n                        {{user.type}}\n                      </div>\n                    </div>\n                    <div class=\"option-summary text-hint font-w-light\">Type of user.</div>\n                  </li>\n\n                <li class=\"option\">\n                  <div class=\"option-body row\">\n                    <div class=\"option-title col-md-8 col-sm-6\">Last Signed In</div>\n                    <div class=\"option-value col-md-4 col-sm-6\">\n                      {{user.lastSignedIn}}\n                    </div>\n                  </div>\n                  <div class=\"option-summary text-hint font-w-light\">Your Last signed In time.</div>\n                </li>\n\n                <li class=\"option\">\n                  <div class=\"option-body row\">\n                    <div class=\"option-title col-md-8 col-sm-6\">Display Name</div>\n                    <div class=\"option-value col-md-4 col-sm-6\">\n                      <input [(ngModel)]=\"user.displayName\" class=\"form-control form-control-info\" type=\"text\" name=\"displayName\" />\n                    </div>\n                  </div>\n                  <div class=\"option-summary text-hint font-w-light\">What do you want your display name??</div>\n                </li>\n\n                <li class=\"option\">\n                  <div class=\"option-body row\">\n                    <div class=\"option-title col-md-8 col-sm-6\">Change Password</div>\n                    <div class=\"option-value col-md-4 col-sm-6\">\n                      <button (click)=\"changePasswordToggle = !changePasswordToggle\" class=\"btn btn-secondary btn-block\">Change Password</button>\n                    </div>\n                  </div>\n                  <div class=\"option-summary text-hint font-w-light\">Change your password??</div>\n                  <div class=\"container p-2\" [class.d-md-none]=\"!changePasswordToggle\">\n                    <div class=\"text-info p-2\">Change Password Details</div>\n                    <div class=\"row\">\n                      <div class=\"col-md-4\">\n                        <input name=\"oldPassword\" [(ngModel)]=\"password.oldPassword\" type=\"password\" class=\"form-control form-control-info\" placeholder=\"Old Password\">                        \n                      </div>\n                      <div class=\"col-md-4\">\n                        <input name=\"newPassword\" [(ngModel)]=\"password.newPassword\" type=\"password\" class=\"form-control form-control-info\" placeholder=\"New Password\">\n                        <small class=\"text-danger\" [class.d-none]=\"!error\">Password must be greater than 4</small>\n                      </div>\n                      <div class=\"col-md-4\">\n                          <button (click)=\"changePassword()\" class=\"btn btn-outline-primary\">Change Password</button>\n                        </div>\n                    </div>\n                  </div>\n                </li>\n\n              </ul>\n            </form>\n          </div>\n        </div>\n      </nb-card-body>\n      <nb-card-footer>\n        <button (click)=\"saveProfile()\" [disabled]=\"!form.valid\" class=\"col-md-4 offset-md-8 btn btn-hero-info\" type=\"button\">\n          Save\n        </button>\n      </nb-card-footer>\n    </nb-card>\n\n    <!-- Avatar Select Modal -->\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal title</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"user-avatar-list col-md-2 p-2\" *ngFor=\"let item of numbers\">\n            <img (click)=\"c(item)\" src=\"/assets/images/avatar/{{item}}.png\" alt=\"Profile Avatar\">\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"c('Close click')\">Save</button>\n      </div>\n    </ng-template>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/user-profile/user-profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n.user-avatar-list img {\n  cursor: pointer;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  border: 1px solid gray; }\n\n.user-avatar-list img:hover {\n  border: 2px solid gray; }\n\n:host-context(.nb-theme-default) .item {\n  background-color: #e9edf2;\n  border-radius: 5px;\n  margin: 2px; }\n\n:host-context(.nb-theme-default) /deep/ .user-avatar {\n  padding: 1.5rem;\n  text-align: center;\n  margin: auto; }\n  :host-context(.nb-theme-default) /deep/ .user-avatar .title {\n    font-size: 1.25rem;\n    padding: 1.25rem;\n    padding-bottom: 1.25rem;\n    color: #a4abb3; }\n  :host-context(.nb-theme-default) /deep/ .user-avatar img {\n    cursor: pointer;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    border: 1px solid #a4abb3; }\n  :host-context(.nb-theme-default) /deep/ .user-avatar img:hover {\n    border: 2px solid #a4abb3; }\n\n:host-context(.nb-theme-default) .setting-choice-box {\n  padding: 1.25rem;\n  box-sizing: border-box; }\n  :host-context(.nb-theme-default) .setting-choice-box .option-list {\n    list-style: none;\n    padding: 0; }\n    :host-context(.nb-theme-default) .setting-choice-box .option-list .option {\n      border-bottom: 1px solid #ebeff5;\n      padding-top: 0.75rem;\n      padding-bottom: 0.75rem;\n      margin-bottom: 0.50rem; }\n      :host-context(.nb-theme-default) .setting-choice-box .option-list .option .option-body {\n        font-size: 1.15em; }\n      :host-context(.nb-theme-default) .setting-choice-box .option-list .option .option-summary {\n        font-size: 0.85em; }\n\n:host-context(.nb-theme-default) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0;\n  cursor: pointer; }\n  :host-context(.nb-theme-default) .switch input {\n    display: none; }\n    :host-context(.nb-theme-default) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-default) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #ebeff5; }\n  :host-context(.nb-theme-default) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #4ca6ff;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n  :host-context(.nb-theme-default) .switch .slider-disable::before {\n    background-color: #aaa; }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) .light,\n  :host-context(.nb-theme-default) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    padding: 0; } }\n\n:host-context(.nb-theme-cosmic) .item {\n  background-color: #494299;\n  border-radius: 5px;\n  margin: 2px; }\n\n:host-context(.nb-theme-cosmic) /deep/ .user-avatar {\n  padding: 1.5rem;\n  text-align: center;\n  margin: auto; }\n  :host-context(.nb-theme-cosmic) /deep/ .user-avatar .title {\n    font-size: 1.25rem;\n    padding: 1.25rem;\n    padding-bottom: 1.25rem;\n    color: #a1a1e5;\n    color: #00d977; }\n  :host-context(.nb-theme-cosmic) /deep/ .user-avatar img {\n    cursor: pointer;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    border: 1px solid #a1a1e5;\n    border-color: #00d977; }\n  :host-context(.nb-theme-cosmic) /deep/ .user-avatar img:hover {\n    border: 2px solid #a1a1e5;\n    border-color: #00d977; }\n\n:host-context(.nb-theme-cosmic) .setting-choice-box {\n  padding: 1.25rem;\n  box-sizing: border-box; }\n  :host-context(.nb-theme-cosmic) .setting-choice-box .option-list {\n    list-style: none;\n    padding: 0; }\n    :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option {\n      border-bottom: 1px solid #2f296b;\n      padding-top: 0.75rem;\n      padding-bottom: 0.75rem;\n      margin-bottom: 0.50rem; }\n      :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option .option-body {\n        font-size: 1.15em; }\n      :host-context(.nb-theme-cosmic) .setting-choice-box .option-list .option .option-summary {\n        font-size: 0.85em; }\n\n:host-context(.nb-theme-cosmic) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0;\n  cursor: pointer; }\n  :host-context(.nb-theme-cosmic) .switch input {\n    display: none; }\n    :host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-cosmic) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #2f296b; }\n  :host-context(.nb-theme-cosmic) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0088ff;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(161, 161, 229, 0.4);\n    background-image: linear-gradient(to right, #ad59ff, #7659ff); }\n  :host-context(.nb-theme-cosmic) .switch .slider-disable::before {\n    background-color: #aaa; }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) .light,\n  :host-context(.nb-theme-cosmic) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    padding: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_util_toast_service__ = __webpack_require__("../../../../../src/app/services/util/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dashboard_configuration_service__ = __webpack_require__("../../../../../src/app/services/dashboard/configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserProfileComponent = (function () {
    function UserProfileComponent(toastService, applicationConfigService, authService, modalService) {
        this.toastService = toastService;
        this.applicationConfigService = applicationConfigService;
        this.authService = authService;
        this.modalService = modalService;
        this.password = {
            newPassword: '',
            oldPassword: '',
        };
        this.error = false;
        this.changePasswordToggle = false;
        this.numbers = Array(36).fill(0, 0, 36).map(function (x, i) { return i; }); // Array(36).fill().map((x,i)=>i);
        console.log(this.numbers);
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getUserProfile();
        var lastSignedInDate = new Date(this.user.lastSignedIn);
        this.user.lastSignedIn = lastSignedInDate.toTimeString().toString() + " " + lastSignedInDate.toDateString().toString();
        //console.log(this.user);
    };
    UserProfileComponent.prototype.setAvatar = function (avatar) {
        this.user.avatar = avatar;
    };
    UserProfileComponent.prototype.saveProfile = function () {
        var _this = this;
        var updateQuery = {
            displayName: this.user.displayName,
            avatar: this.user.avatar
        };
        if (updateQuery.displayName.length > 0) {
            this.authService.updateProfile(updateQuery).subscribe(function (res) {
                if (res.success) {
                    _this.toastService.showToast(_this.toastService.typeNum.info, "", res.message);
                }
                else {
                    _this.toastService.showToast(_this.toastService.typeNum.warning, "", res.message);
                }
            });
        }
        else {
            //TODO Add Proper message
            this.toastService.showToast(this.toastService.typeNum.warning, "", "Display name is required");
        }
    };
    UserProfileComponent.prototype.changePassword = function () {
        var _this = this;
        if ((this.password.newPassword.length >= 4 && this.password.newPassword.length <= 16)) {
            this.error = false;
            var updateQuery = {
                id: this.user._id,
                username: this.user.username,
                oldPassword: this.password.oldPassword,
                newPassword: this.password.newPassword,
            };
            this.authService.changePassword(updateQuery).subscribe(function (res) {
                if (res.success) {
                    _this.toastService.showToast(_this.toastService.typeNum.success, "Hurray!!", res.message);
                }
                else {
                    _this.toastService.showToast(_this.toastService.typeNum.error, "Oops!!", res.message);
                }
            });
        }
        else {
            this.error = true;
        }
    };
    UserProfileComponent.prototype.openAvatarSelectBox = function (content) {
        var _this = this;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            _this.user.avatar = parseInt(result) ? result : 0;
        }, function (reason) {
            var closeResult = "Dismissed " + reason;
        });
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__("../../../../../src/app/components/dashboard/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/user-profile/user-profile.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_util_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_util_toast_service__["a" /* ToastService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_dashboard_configuration_service__["a" /* ConfigurationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dashboard_configuration_service__["a" /* ConfigurationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _d || Object])
], UserProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/modulesUtils/routing/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardMainRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_schema_schema_component__ = __webpack_require__("../../../../../src/app/components/dashboard/schema/schema.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dashboard_analytics_analytics_component__ = __webpack_require__("../../../../../src/app/components/dashboard/analytics/analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dashboard_landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/components/dashboard/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dashboard_table_table_component__ = __webpack_require__("../../../../../src/app/components/dashboard/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dashboard_authentication_authentication_component__ = __webpack_require__("../../../../../src/app/components/dashboard/authentication/authentication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_route_handlers_route_handlers_component__ = __webpack_require__("../../../../../src/app/components/dashboard/route-handlers/route-handlers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dashboard_route_handlers_add_route_modal_add_route_modal_component__ = __webpack_require__("../../../../../src/app/components/dashboard/route-handlers/add-route-modal/add-route-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_authentication_users_users_component__ = __webpack_require__("../../../../../src/app/components/dashboard/authentication/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_authentication_auth_routes_auth_routes_component__ = __webpack_require__("../../../../../src/app/components/dashboard/authentication/auth-routes/auth-routes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dashboard_application_logs_application_logs_component__ = __webpack_require__("../../../../../src/app/components/dashboard/application-logs/application-logs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_dashboard_user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/components/dashboard/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dashboard_aas_aas_component__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/aas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_dashboard_aas_build_models_build_model_configure_build_model_configure_component__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/build-models/build-model-configure/build-model-configure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dashboard_aas_build_models_build_model_create_build_model_create_component__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/build-models/build-model-create/build-model-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_dashboard_aas_analyse_model_analysis_tool_configure_analysis_tool_configure_component__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-configure/analysis-tool-configure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_dashboard_aas_analyse_model_analysis_tool_create_analysis_tool_create_component__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analysis-tool-create/analysis-tool-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_dashboard_aas_analyse_model_analyse_model_component__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/analyse-model/analyse-model.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_dashboard_schema_edit_schema_edit_schema_component__ = __webpack_require__("../../../../../src/app/components/dashboard/schema/edit-schema/edit-schema.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_dashboard_storage_service_storage_service_component__ = __webpack_require__("../../../../../src/app/components/dashboard/storage-service/storage-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_dashboard_aas_visualization_visualization_component__ = __webpack_require__("../../../../../src/app/components/dashboard/aas/visualization/visualization.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        children: [{
                path: 'schema',
                component: __WEBPACK_IMPORTED_MODULE_3__components_dashboard_schema_schema_component__["a" /* SchemaComponent */]
            },
            {
                path: 'authentication/settings',
                component: __WEBPACK_IMPORTED_MODULE_7__components_dashboard_authentication_authentication_component__["a" /* AuthenticationComponent */]
            },
            {
                path: 'authentication/users',
                component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_authentication_users_users_component__["a" /* UsersComponent */]
            },
            {
                path: 'authentication/routes',
                component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_authentication_auth_routes_auth_routes_component__["a" /* AuthRoutesComponent */]
            },
            {
                path: 'analytics',
                component: __WEBPACK_IMPORTED_MODULE_4__components_dashboard_analytics_analytics_component__["a" /* AnalyticsComponent */]
            },
            {
                path: 'logs',
                component: __WEBPACK_IMPORTED_MODULE_12__components_dashboard_application_logs_application_logs_component__["a" /* ApplicationLogsComponent */]
            },
            {
                path: 'user-profile',
                component: __WEBPACK_IMPORTED_MODULE_13__components_dashboard_user_profile_user_profile_component__["a" /* UserProfileComponent */]
            },
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_5__components_dashboard_landing_page_landing_page_component__["a" /* LandingPageComponent */]
            },
            {
                path: 'table',
                component: __WEBPACK_IMPORTED_MODULE_6__components_dashboard_table_table_component__["a" /* TableComponent */]
            },
            {
                path: 'table/:schemaName',
                component: __WEBPACK_IMPORTED_MODULE_6__components_dashboard_table_table_component__["a" /* TableComponent */]
            },
            {
                path: 'edit-schema/:schemaName',
                component: __WEBPACK_IMPORTED_MODULE_20__components_dashboard_schema_edit_schema_edit_schema_component__["a" /* EditSchemaComponent */]
            },
            {
                path: 'api-access',
                component: __WEBPACK_IMPORTED_MODULE_8__components_dashboard_route_handlers_route_handlers_component__["a" /* RouteHandlersComponent */]
            },
            {
                path: 'api-access/:schemaName',
                component: __WEBPACK_IMPORTED_MODULE_8__components_dashboard_route_handlers_route_handlers_component__["a" /* RouteHandlersComponent */]
            },
            {
                path: 'api-access/:schemaName/add-route',
                component: __WEBPACK_IMPORTED_MODULE_9__components_dashboard_route_handlers_add_route_modal_add_route_modal_component__["a" /* AddRouteModalComponent */]
            },
            {
                path: 'analytics-tool',
                component: __WEBPACK_IMPORTED_MODULE_19__components_dashboard_aas_analyse_model_analyse_model_component__["a" /* AnalyseModelComponent */]
            },
            {
                path: 'analytics-tool-create',
                component: __WEBPACK_IMPORTED_MODULE_18__components_dashboard_aas_analyse_model_analysis_tool_create_analysis_tool_create_component__["a" /* AnalysisToolCreateComponent */]
            },
            {
                path: 'analytics-tool-configure',
                component: __WEBPACK_IMPORTED_MODULE_17__components_dashboard_aas_analyse_model_analysis_tool_configure_analysis_tool_configure_component__["a" /* AnalysisToolConfigureComponent */]
            },
            {
                path: 'analytics-home',
                component: __WEBPACK_IMPORTED_MODULE_14__components_dashboard_aas_aas_component__["a" /* AasComponent */]
            },
            {
                path: 'analytics-home-create',
                component: __WEBPACK_IMPORTED_MODULE_16__components_dashboard_aas_build_models_build_model_create_build_model_create_component__["a" /* BuildModelCreateComponent */]
            },
            {
                path: 'analytics-home-configure',
                component: __WEBPACK_IMPORTED_MODULE_15__components_dashboard_aas_build_models_build_model_configure_build_model_configure_component__["a" /* BuildModelConfigureComponent */]
            },
            {
                path: 'storage-configuration',
                component: __WEBPACK_IMPORTED_MODULE_21__components_dashboard_storage_service_storage_service_component__["a" /* StorageServiceComponent */]
            },
            {
                path: 'analytics/visualize',
                component: __WEBPACK_IMPORTED_MODULE_22__components_dashboard_aas_visualization_visualization_component__["a" /* VisualizationComponent */]
            }
        ]
    }];
var DashboardMainRouting = (function () {
    function DashboardMainRouting() {
    }
    return DashboardMainRouting;
}());
DashboardMainRouting = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]
        ]
    })
], DashboardMainRouting);

//# sourceMappingURL=dashboard-routing.module.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map