import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";
const selectProductPage = (state: AppRootState) => state.productsPage;
export const retrieveRestaurant = createSelector(
  selectProductPage,
  (ProductsPage) => ProductsPage.restaurant
);
export const retrieveChosenProduct = createSelector(
  selectProductPage,
  (ProductsPage) => ProductsPage.chosenProduct
);
export const retrieveProducts = createSelector(
  selectProductPage,
  (ProductsPage) => ProductsPage.products
);