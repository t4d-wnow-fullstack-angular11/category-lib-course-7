import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';
export declare class CategoriesService {
    private httpClient;
    constructor(httpClient: HttpClient);
    all(): Observable<Category[]>;
}
