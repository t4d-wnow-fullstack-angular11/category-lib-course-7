import { Injectable } from '@angular/core';
import { CategoriesService } from './categories.service';
import * as i0 from "@angular/core";
import * as i1 from "./categories.service";
export class CategoriesResolverService {
    constructor(categoriesSvc) {
        this.categoriesSvc = categoriesSvc;
    }
    resolve(route, state) {
        return this.categoriesSvc.all();
    }
}
CategoriesResolverService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CategoriesResolverService_Factory() { return new CategoriesResolverService(i0.ɵɵinject(i1.CategoriesService)); }, token: CategoriesResolverService, providedIn: "root" });
CategoriesResolverService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
CategoriesResolverService.ctorParameters = () => [
    { type: CategoriesService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy1yZXNvbHZlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2NhdGVnb3J5LWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY2F0ZWdvcmllcy1yZXNvbHZlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUt6RCxNQUFNLE9BQU8seUJBQXlCO0lBRXBDLFlBQW9CLGFBQWdDO1FBQWhDLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtJQUFJLENBQUM7SUFFekQsT0FBTyxDQUNMLEtBQTZCLEVBQzdCLEtBQTBCO1FBRzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O1lBYkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFKUSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSZXNvbHZlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tICcuLi9tb2RlbHMvQ2F0ZWdvcnknO1xuaW1wb3J0IHsgQ2F0ZWdvcmllc1NlcnZpY2UgfSBmcm9tICcuL2NhdGVnb3JpZXMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENhdGVnb3JpZXNSZXNvbHZlclNlcnZpY2UgaW1wbGVtZW50cyBSZXNvbHZlPENhdGVnb3J5W10+IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhdGVnb3JpZXNTdmM6IENhdGVnb3JpZXNTZXJ2aWNlKSB7IH1cblxuICByZXNvbHZlKFxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTpcbiAgICBDYXRlZ29yeVtdIHwgT2JzZXJ2YWJsZTxDYXRlZ29yeVtdPiB8IFByb21pc2U8Q2F0ZWdvcnlbXT4ge1xuXG4gICAgcmV0dXJuIHRoaXMuY2F0ZWdvcmllc1N2Yy5hbGwoKTtcbiAgfVxufVxuIl19