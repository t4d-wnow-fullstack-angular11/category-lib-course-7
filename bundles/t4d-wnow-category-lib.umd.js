(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('@angular/material/table'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@t4d-wnow/category-lib', ['exports', '@angular/core', '@angular/common', '@angular/common/http', '@angular/material/table', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['t4d-wnow'] = global['t4d-wnow'] || {}, global['t4d-wnow']['category-lib'] = {}), global.ng.core, global.ng.common, global.ng.common.http, global.ng.material.table, global.rxjs.operators));
}(this, (function (exports, i0, common, i1, table, operators) { 'use strict';

    var CategoryTableComponent = /** @class */ (function () {
        function CategoryTableComponent() {
            this.displayedColumns = ['categoryName', 'description'];
            this.categories = [];
        }
        CategoryTableComponent.prototype.ngOnInit = function () {
        };
        return CategoryTableComponent;
    }());
    CategoryTableComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-category-table',
                    template: "<table mat-table [dataSource]=\"categories\">\n\n  <ng-container matColumnDef=\"categoryName\">\n    <th mat-header-cell *matHeaderCellDef>Name</th>\n    <td mat-cell *matCellDef=\"let category\"> {{category.categoryName}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"description\">\n    <th mat-header-cell *matHeaderCellDef>Description</th>\n    <td mat-cell *matCellDef=\"let category\"> {{category.description}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n</table>",
                    styles: ["table{width:100%}"]
                },] }
    ];
    CategoryTableComponent.ctorParameters = function () { return []; };
    CategoryTableComponent.propDecorators = {
        categories: [{ type: i0.Input }]
    };

    var CategoryLibModule = /** @class */ (function () {
        function CategoryLibModule() {
        }
        return CategoryLibModule;
    }());
    CategoryLibModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [CategoryTableComponent],
                    imports: [
                        common.CommonModule,
                        i1.HttpClientModule,
                        table.MatTableModule,
                    ],
                    exports: [CategoryTableComponent]
                },] }
    ];

    var CategoriesService = /** @class */ (function () {
        function CategoriesService(httpClient) {
            this.httpClient = httpClient;
        }
        CategoriesService.prototype.all = function () {
            return this.httpClient.get('/api/categories').pipe(operators.catchError(function () {
                throw Error('Unable to download categories');
            }));
        };
        return CategoriesService;
    }());
    CategoriesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CategoriesService_Factory() { return new CategoriesService(i0.ɵɵinject(i1.HttpClient)); }, token: CategoriesService, providedIn: "root" });
    CategoriesService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    CategoriesService.ctorParameters = function () { return [
        { type: i1.HttpClient }
    ]; };

    var CategoriesResolverService = /** @class */ (function () {
        function CategoriesResolverService(categoriesSvc) {
            this.categoriesSvc = categoriesSvc;
        }
        CategoriesResolverService.prototype.resolve = function (route, state) {
            return this.categoriesSvc.all();
        };
        return CategoriesResolverService;
    }());
    CategoriesResolverService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CategoriesResolverService_Factory() { return new CategoriesResolverService(i0.ɵɵinject(CategoriesService)); }, token: CategoriesResolverService, providedIn: "root" });
    CategoriesResolverService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    CategoriesResolverService.ctorParameters = function () { return [
        { type: CategoriesService }
    ]; };

    /*
     * Public API Surface of category-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CategoriesResolverService = CategoriesResolverService;
    exports.CategoriesService = CategoriesService;
    exports.CategoryLibModule = CategoryLibModule;
    exports.CategoryTableComponent = CategoryTableComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=t4d-wnow-category-lib.umd.js.map
