import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CategoriesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    all() {
        return this.httpClient.get('/api/categories').pipe(catchError(() => {
            throw Error('Unable to download categories');
        }));
    }
}
CategoriesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CategoriesService_Factory() { return new CategoriesService(i0.ɵɵinject(i1.HttpClient)); }, token: CategoriesService, providedIn: "root" });
CategoriesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
CategoriesService.ctorParameters = () => [
    { type: HttpClient }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2NhdGVnb3J5LWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY2F0ZWdvcmllcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBTzVDLE1BQU0sT0FBTyxpQkFBaUI7SUFFNUIsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFJLENBQUM7SUFFL0MsR0FBRztRQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQWEsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQzVELFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxNQUFNLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O1lBYkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFSUSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSAnLi4vbW9kZWxzL0NhdGVnb3J5JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcmllc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkgeyB9XG5cbiAgYWxsKCk6IE9ic2VydmFibGU8Q2F0ZWdvcnlbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PENhdGVnb3J5W10+KCcvYXBpL2NhdGVnb3JpZXMnKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoKSA9PiB7XG4gICAgICAgIHRocm93IEVycm9yKCdVbmFibGUgdG8gZG93bmxvYWQgY2F0ZWdvcmllcycpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=