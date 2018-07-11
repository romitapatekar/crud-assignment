(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-edit-contact/add-edit-contact.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/add-edit-contact/add-edit-contact.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-form {\r\n    padding: 2rem;\r\n    border: 1px solid #ccc;\r\n}"

/***/ }),

/***/ "./src/app/add-edit-contact/add-edit-contact.component.html":
/*!******************************************************************!*\
  !*** ./src/app/add-edit-contact/add-edit-contact.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 *ngIf=\"mode==='add'\">Add Contact</h2>\n    <h2 *ngIf=\"mode==='edit'\">Edit Contact</h2>\n    <hr/>\n    <form class=\"contact-form\" #contactForm=\"ngForm\">\n        <input type=\"hidden\" class=\"form-control\" id=\"id\" [(ngModel)]=\"contactDetails.id\" name=\"id\">\n        <div class=\"form-group\">\n          <label for=\"name\">First Name</label><span class=\"text-danger\"> (Required)</span>\n          <input type=\"text\" class=\"form-control\" id=\"firstName\" [(ngModel)]=\"contactDetails.fname\" name=\"fname\" \n          required pattern=\"^[a-zA-Z]*\" #fname=\"ngModel\">\n            <div *ngIf=\"fname.errors && (fname.dirty || fname.touched)\" class=\"alert alert-danger\">\n                <div [hidden]=\"!fname.errors.required\">\n                    First name is required!\n                </div>   \n                <div [hidden]=\"!fname.errors.pattern\">\n                    Please enter valid First Name!\n                </div>                           \n            </div>\n        </div>\n   \n        <div class=\"form-group\">\n            <label for=\"name\">Last Name</label><span class=\"text-danger\"> (Required)</span>\n            <input type=\"text\" class=\"form-control\" id=\"lName\" [(ngModel)]=\"contactDetails.lName\" name=\"lName\"\n            required pattern=\"^[a-zA-Z]*\"  #lName=\"ngModel\">\n            <div *ngIf=\"lName.errors && (lName.dirty || lName.touched)\" class=\"alert alert-danger\">\n                <div [hidden]=\"!lName.errors.required\">\n                    Last name is required!\n                </div>   \n                <div [hidden]=\"!lName.errors.pattern\">\n                    Please enter valid Last Name!\n                </div>                           \n            </div>            \n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"name\">Email : </label><span class=\"text-danger\"> (Required)</span>\n            <input type=\"text\" class=\"form-control\" id=\"emailAddress\" [(ngModel)]=\"contactDetails.emailAddress\" name=\"emailAddress\"\n            required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"  #emailAddress=\"ngModel\">\n            <div *ngIf=\"emailAddress.errors && (emailAddress.dirty || emailAddress.touched)\" class=\"alert alert-danger\">\n                <div [hidden]=\"!emailAddress.errors.required\">\n                    Email is required!\n                </div>   \n                <div [hidden]=\"!emailAddress.errors.pattern\">\n                    Please enter valid email address!\n                </div>                           \n            </div>            \n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"name\">Phone Number</label><span class=\"text-danger\"> (Required)</span>\n            <input type=\"text\" class=\"form-control\" id=\"phone\" [(ngModel)]=\"contactDetails.phone\" name=\"phone\"\n            required pattern=\"[789][0-9]{9}\" #phone=\"ngModel\">\n            <div *ngIf=\"phone.errors && (phone.dirty || phone.touched)\" class=\"alert alert-danger\">\n                <div [hidden]=\"!phone.errors.required\">\n                     Phone Number is required!\n                </div>   \n                <div [hidden]=\"!phone.errors.pattern\">\n                    Please enter valid Phone Number!\n                </div>                           \n            </div>            \n        </div>\n\n        <div class=\"checkbox\">\n           <label><input type=\"checkbox\" id=\"statusEnabled\" [(ngModel)]=\"contactDetails.statusEnabled\" name=\"statusEnabled\">Status : Active/Inactive</label>\n        </div>        \n        <hr/>\n        <button *ngIf=\"mode==='add'\" type=\"button\" class=\"btn btn-success\" (click)=\"onSave(contactDetails)\" [disabled]=\"!contactForm.form.valid\">Save</button> \n        <button *ngIf=\"mode==='edit'\" type=\"button\" class=\"btn btn-success\" (click)=\"onEdit(contactDetails)\" [disabled]=\"!contactForm.form.valid\">Edit</button>&nbsp;&nbsp;\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"cancelAddEdit()\">Cancel</button>\n    </form>\n</div>    "

/***/ }),

/***/ "./src/app/add-edit-contact/add-edit-contact.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/add-edit-contact/add-edit-contact.component.ts ***!
  \****************************************************************/
/*! exports provided: AddEditContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditContactComponent", function() { return AddEditContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contact */ "./src/app/contact.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact.service */ "./src/app/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddEditContactComponent = /** @class */ (function () {
    function AddEditContactComponent(router, activateRoute, contactService) {
        this.router = router;
        this.activateRoute = activateRoute;
        this.contactService = contactService;
        this.contactList = [];
    }
    AddEditContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactList = this.contactService.getContactList();
        this.activateRoute.queryParams.subscribe(function (params) {
            _this.mode = params.mode;
            if (_this.mode === 'edit') {
                _this.contactDetails = new _contact__WEBPACK_IMPORTED_MODULE_1__["Contact"](params.contactId, '', '', '', null, false);
                var details = _this.contactService.getContactDetails(params.contactId);
                _this.contactDetails.fname = details.firstName;
                _this.contactDetails.lName = details.lastName;
                _this.contactDetails.emailAddress = details.email;
                _this.contactDetails.phone = details.phoneNumber;
                _this.contactDetails.statusEnabled = details.status;
            }
            else {
                var id = parseInt(_this.contactList[_this.contactList.length - 1].id) + 1;
                _this.contactDetails = new _contact__WEBPACK_IMPORTED_MODULE_1__["Contact"](id.toString(), '', '', '', null, false);
            }
        });
    };
    AddEditContactComponent.prototype.onSave = function (contactDetails) {
        this.contactService.addContact(contactDetails);
        this.router.navigate([''], { queryParams: { mode: 'add' } });
    };
    AddEditContactComponent.prototype.onEdit = function (contactDetails) {
        this.contactService.editContact(contactDetails);
        this.router.navigate([''], { queryParams: { mode: 'edit' } });
    };
    AddEditContactComponent.prototype.cancelAddEdit = function () {
        this.router.navigate(['']);
    };
    AddEditContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-edit-contact',
            template: __webpack_require__(/*! ./add-edit-contact.component.html */ "./src/app/add-edit-contact/add-edit-contact.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-contact.component.css */ "./src/app/add-edit-contact/add-edit-contact.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]])
    ], AddEditContactComponent);
    return AddEditContactComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>  "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-list/contact-list.component */ "./src/app/contact-list/contact-list.component.ts");
/* harmony import */ var _add_edit_contact_add_edit_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-edit-contact/add-edit-contact.component */ "./src/app/add-edit-contact/add-edit-contact.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact.service */ "./src/app/contact.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: 'contact-list', component: _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_5__["ContactListComponent"] },
    { path: 'addEditContact', component: _add_edit_contact_add_edit_contact_component__WEBPACK_IMPORTED_MODULE_6__["AddEditContactComponent"] },
    { path: '', redirectTo: '/contact-list', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_5__["ContactListComponent"],
                _add_edit_contact_add_edit_contact_component__WEBPACK_IMPORTED_MODULE_6__["AddEditContactComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_contact_service__WEBPACK_IMPORTED_MODULE_8__["ContactService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-list/contact-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/contact-list/contact-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-contact-btn {\r\n    margin-top: 20px;\r\n}\r\n\r\n.contact-list table td {\r\n    vertical-align: middle;\r\n}"

/***/ }),

/***/ "./src/app/contact-list/contact-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-list/contact-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"container contact-list\">\n      <h2 class=\"pull-left\">Contact List</h2>\n      <button type=\"button\" class=\"btn btn-success pull-right add-contact-btn\" (click)=\"addEditContact('add')\">Add Contact</button>     \n      <div class=\"clearfix\"></div>\n      <hr/>\n      <table class=\"table\">\n          <thead>\n            <tr>\n              <th class=\"hidden\">Id</th>\n              <th>First Name</th>\n              <th>Last Name</th>\n              <th>Email</th>\n              <th>Phone Number</th>\n              <th>Status</th>\n              <th colspan=\"2\">Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let contact of contactList\">\n              <td class=\"hidden\">{{contact.id}}</td>\n              <td>{{contact.firstName}}</td>\n              <td>{{contact.lastName}}</td>\n              <td>{{contact.email}}</td>\n              <td>{{contact.phoneNumber}}</td>\n              <td>{{contact.status === true ? \"Active\": \"Inactive\" }}</td>\n              <td><button type=\"button\" class=\"btn btn-default\" (click)=\"addEditContact('edit', contact.id)\">Edit</button></td>\n              <td><button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteContact(contact.id)\">Delete</button></td>\n            </tr>\n          </tbody>\n        </table>      \n  </div>"

/***/ }),

/***/ "./src/app/contact-list/contact-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-list/contact-list.component.ts ***!
  \********************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact.service */ "./src/app/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactListComponent = /** @class */ (function () {
    function ContactListComponent(router, activateRoute, contactService) {
        this.router = router;
        this.activateRoute = activateRoute;
        this.contactService = contactService;
        this.contactList = [];
    }
    ContactListComponent.prototype.ngOnInit = function () {
        this.contactList = this.contactService.getContactList();
    };
    ContactListComponent.prototype.addEditContact = function (mode, contactId) {
        if (contactId) {
            this.router.navigate(['addEditContact'], { queryParams: { mode: mode, contactId: contactId } });
        }
        else {
            this.router.navigate(['addEditContact'], { queryParams: { mode: mode } });
        }
    };
    ContactListComponent.prototype.deleteContact = function (contactId) {
        if (confirm('Are you sure you want to delete this contact?')) {
            var index = this.contactList.findIndex(function (obj) { return obj.id === contactId; });
            this.contactList.splice(index, 1);
        }
        else {
            return false;
        }
    };
    ContactListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-list',
            template: __webpack_require__(/*! ./contact-list.component.html */ "./src/app/contact-list/contact-list.component.html"),
            styles: [__webpack_require__(/*! ./contact-list.component.css */ "./src/app/contact-list/contact-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]])
    ], ContactListComponent);
    return ContactListComponent;
}());



/***/ }),

/***/ "./src/app/contact.service.ts":
/*!************************************!*\
  !*** ./src/app/contact.service.ts ***!
  \************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactService = /** @class */ (function () {
    function ContactService() {
        this.url = 'localapi/mock-contact-list.json';
        this.contactList = [
            { id: '1', firstName: 'john', lastName: 'Doe', email: 'johndoe@gmail.com', phoneNumber: 9623818555, status: true },
            { id: '2', firstName: 'Mary', lastName: 'pas', email: 'marry@gmail.com', phoneNumber: 9623818555, status: true },
            { id: '3', firstName: 'mark', lastName: 'vissley', email: 'markvissley@gmail.com', phoneNumber: 9623818555, status: false },
            { id: '4', firstName: 'jack', lastName: 'dooley', email: 'jack@gmail.com', phoneNumber: 9623818555, status: false }
        ];
    }
    ContactService.prototype.getContactList = function () {
        return this.contactList;
    };
    ContactService.prototype.getContactDetails = function (contactId) {
        return this.contactList.find(function (obj) { return obj.id === contactId; });
    };
    ContactService.prototype.addContact = function (contactDetails) {
        this.contactList.push({ id: contactDetails.id, firstName: contactDetails.fname,
            lastName: contactDetails.lName, email: contactDetails.emailAddress,
            phoneNumber: contactDetails.phone, status: contactDetails.statusEnabled });
    };
    ContactService.prototype.editContact = function (contactDetails) {
        var index = this.contactList.findIndex(function (obj) { return obj.id === contactDetails['id']; });
        this.contactList[index].firstName = contactDetails['fname'];
        this.contactList[index].lastName = contactDetails['lName'];
        this.contactList[index].email = contactDetails['emailAddress'];
        this.contactList[index].phoneNumber = contactDetails['phone'];
        this.contactList[index].status = contactDetails['statusEnabled'];
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/contact.ts":
/*!****************************!*\
  !*** ./src/app/contact.ts ***!
  \****************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
var Contact = /** @class */ (function () {
    function Contact(id, fname, lName, emailAddress, phone, statusEnabled) {
        this.id = id;
        this.fname = fname;
        this.lName = lName;
        this.emailAddress = emailAddress;
        this.phone = phone;
        this.statusEnabled = statusEnabled;
        this.id = id;
        this.fname = fname;
        this.lName = lName;
        this.emailAddress = emailAddress;
        this.phone = phone;
        this.statusEnabled = statusEnabled;
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container contact-list\">\n  <h2>Page Not Found</h2>\n  <hr/>\n  <button type=\"button\" class=\"btn btn-success\" (click)=\"navigateToHomePage('add')\">Navigate to home page</button>         \n</div>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(router) {
        this.router = router;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent.prototype.navigateToHomePage = function () {
        this.router.navigate(['contact-list']);
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\crud-project-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map