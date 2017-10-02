﻿import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
@Component({
    selector: "app",
    templateUrl: "app/template.html"
})
export class ProductComponent {
    model: Model = new Model();
    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }
    getProducts(): Product[] {
        return this.model.getProducts();
    }
    newProduct: Product = new Product();
    get jsonProduct() {
        return JSON.stringify(this.newProduct);
    }
    addProduct(p: Product) {
        //console.log("New Product: " + this.jsonProduct);
        this.model.addProduct(this.newProduct);
    }
    deleteProduct(index: number){
        this.model.deleteProduct(index);
    }
    updateProduct(p: Product) {
        //console.log("New Product: " + this.jsonProduct);
        this.model.saveProduct(this.newProduct);
    }
    selectProduct(index: number){
        this.newProduct = this.model.getProduct(index);
    }
}