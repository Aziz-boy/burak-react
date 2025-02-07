/** REACT APP STATE **/

import { Member } from "./member";
import { Product } from "./product";

export interface AppRouteState {
    homePage: HomePageState;
    // productsPage: ProductsPageState;

}

/** HOMEPAGE **/
export interface HomePageState {
    popularDishes: Product[];
    newDishes: Product[];
    topUsers: Member[];

}


/** PRODUCTS PAGE **/



/** ORDERS PAGE **/