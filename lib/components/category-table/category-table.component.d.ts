import { OnInit } from '@angular/core';
import { Category } from '../../models/Category';
export declare class CategoryTableComponent implements OnInit {
    displayedColumns: string[];
    categories: Category[];
    constructor();
    ngOnInit(): void;
}
