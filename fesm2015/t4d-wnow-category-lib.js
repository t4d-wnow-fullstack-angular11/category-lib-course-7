import { Component, Input, NgModule, ɵɵdefineInjectable, ɵɵinject, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { catchError } from 'rxjs/operators';

class CategoryTableComponent {
    constructor() {
        this.displayedColumns = ['categoryName', 'description'];
        this.categories = [];
    }
    ngOnInit() {
    }
}
CategoryTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-category-table',
                template: "<table mat-table [dataSource]=\"categories\">\n\n  <ng-container matColumnDef=\"categoryName\">\n    <th mat-header-cell *matHeaderCellDef>Name</th>\n    <td mat-cell *matCellDef=\"let category\"> {{category.categoryName}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"description\">\n    <th mat-header-cell *matHeaderCellDef>Description</th>\n    <td mat-cell *matCellDef=\"let category\"> {{category.description}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n</table>",
                styles: ["table{width:100%}"]
            },] }
];
CategoryTableComponent.ctorParameters = () => [];
CategoryTableComponent.propDecorators = {
    categories: [{ type: Input }]
};

class CategoryLibModule {
}
CategoryLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CategoryTableComponent],
                imports: [
                    CommonModule,
                    HttpClientModule,
                    MatTableModule,
                ],
                exports: [CategoryTableComponent]
            },] }
];

class CategoriesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    all() {
        return this.httpClient.get('/api/categories').pipe(catchError(() => {
            throw Error('Unable to download categories');
        }));
    }
}
CategoriesService.ɵprov = ɵɵdefineInjectable({ factory: function CategoriesService_Factory() { return new CategoriesService(ɵɵinject(HttpClient)); }, token: CategoriesService, providedIn: "root" });
CategoriesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
CategoriesService.ctorParameters = () => [
    { type: HttpClient }
];

class CategoriesResolverService {
    constructor(categoriesSvc) {
        this.categoriesSvc = categoriesSvc;
    }
    resolve(route, state) {
        return this.categoriesSvc.all();
    }
}
CategoriesResolverService.ɵprov = ɵɵdefineInjectable({ factory: function CategoriesResolverService_Factory() { return new CategoriesResolverService(ɵɵinject(CategoriesService)); }, token: CategoriesResolverService, providedIn: "root" });
CategoriesResolverService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
CategoriesResolverService.ctorParameters = () => [
    { type: CategoriesService }
];

/*
 * Public API Surface of category-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CategoriesResolverService, CategoriesService, CategoryLibModule, CategoryTableComponent };
//# sourceMappingURL=t4d-wnow-category-lib.js.map
