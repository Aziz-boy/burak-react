import React, { useEffect } from "react";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";

/** REDUX SLICE & SELECTOR**/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});
const popularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes })
);
export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriever);
  // Selector: Store => Data

  useEffect(() => {
    /**
    // Backend server data request => Data
    const result = [
      {
        _id: "677af3bc5c09b53d9b454f81",
        productStatus: "PROCESS",
        productCollection: "DISH",
        productName: "Steak",
        productPrice: 12,
        productLeftCount: 50,
        productSize: "LARGE",
        productVolume: 1,
        productDesc: "This is Large Steak ",
        productImages: [
          "uploads/products/4ae512fe-e10d-4623-9df3-19bafb137639.jpg",
        ],
        productViews: 0,
        createdAt: "2025-01-05T21:03:56.865Z",
        updatedAt: "2025-01-08T11:26:59.504Z",
        __v: 0,
      },
      {
        _id: "676ff1cd8e70631c884fb46c",
        productStatus: "PROCESS",
        productCollection: "SALAD",
        productName: "Somsa",
        productPrice: 9,
        productLeftCount: 120,
        productSize: "NORMAL",
        productVolume: 1,
        productDesc: "this is somsa",
        productImages: [
          "uploads/products/9395186a-6c48-4bd0-8d0a-1206e14e4692.png",
          "uploads/products/1c717cdf-441b-4644-871b-daa5a1ddf29c.png",
        ],
        productViews: 0,
        createdAt: "2024-12-28T12:40:45.058Z",
        updatedAt: "2025-01-09T05:38:12.251Z",
        __v: 0,
      },
    ];

    // Slice: Data => Store
    //@ts-ignore
    setPopularDishes(result);
     **/
  }, []);

  // console.log("popularDishes:", popularDishes);

  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
