import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';
import { CategoriesService } from './categories.service';
export declare class CategoriesResolverService implements Resolve<Category[]> {
    private categoriesSvc;
    constructor(categoriesSvc: CategoriesService);
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Category[] | Observable<Category[]> | Promise<Category[]>;
}
