import { Component, Input } from '@angular/core';
export class CategoryTableComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2NhdGVnb3J5LWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jYXRlZ29yeS10YWJsZS9jYXRlZ29yeS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTekQsTUFBTSxPQUFPLHNCQUFzQjtJQU9qQztRQUxPLHFCQUFnQixHQUFhLENBQUMsY0FBYyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRzdELGVBQVUsR0FBZSxFQUFFLENBQUM7SUFFbkIsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLDBtQkFBOEM7O2FBRS9DOzs7O3lCQUtFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvQ2F0ZWdvcnknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY2F0ZWdvcnktdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2F0ZWdvcnktdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXRlZ29yeS10YWJsZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydjYXRlZ29yeU5hbWUnLCAnZGVzY3JpcHRpb24nXTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIl19