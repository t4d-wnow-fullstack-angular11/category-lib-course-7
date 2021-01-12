import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { CategoryTableComponent } from './components/category-table/category-table.component';
export class CategoryLibModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9jYXRlZ29yeS1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL2NhdGVnb3J5LWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXpELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBYTlGLE1BQU0sT0FBTyxpQkFBaUI7OztZQVQ3QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsY0FBYztpQkFDZjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuXG5pbXBvcnQgeyBDYXRlZ29yeVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhdGVnb3J5LXRhYmxlL2NhdGVnb3J5LXRhYmxlLmNvbXBvbmVudCc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtDYXRlZ29yeVRhYmxlQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbQ2F0ZWdvcnlUYWJsZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlMaWJNb2R1bGUgeyB9XG4iXX0=