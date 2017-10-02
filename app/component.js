"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var repository_model_1 = require("./repository.model");
var product_model_1 = require("./product.model");
var ProductComponent = (function () {
    function ProductComponent() {
        this.model = new repository_model_1.Model();
        this.newProduct = new product_model_1.Product();
    }
    ProductComponent.prototype.getProduct = function (key) {
        return this.model.getProduct(key);
    };
    ProductComponent.prototype.getProducts = function () {
        return this.model.getProducts();
    };
    Object.defineProperty(ProductComponent.prototype, "jsonProduct", {
        get: function () {
            return JSON.stringify(this.newProduct);
        },
        enumerable: true,
        configurable: true
    });
    ProductComponent.prototype.addProduct = function (p) {
        //console.log("New Product: " + this.jsonProduct);
        this.model.addProduct(this.newProduct);
    };
    ProductComponent.prototype.deleteProduct = function (index) {
        this.model.deleteProduct(index);
    };
    ProductComponent.prototype.updateProduct = function (p) {
        //console.log("New Product: " + this.jsonProduct);
        this.model.saveProduct(this.newProduct);
    };
    ProductComponent.prototype.selectProduct = function (index) {
        this.newProduct = this.model.getProduct(index);
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: "app",
            templateUrl: "app/template.html"
        }), 
        __metadata('design:paramtypes', [])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;