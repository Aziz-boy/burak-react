import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const products = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
];

export default function Products() {
  return (
    <div className={"products"}>
      <Container sx={{ padding: "0E" }}>
        <Stack
          flexDirection={"column"}
          sx={{ width: "1300px" }}
          alignItems={"center"}
        >
          <Stack className={"avatar-big-box"}>
            <Stack className="top-content">
              <Box className="text">Burak Restaurant</Box>
              <Box className="search-container">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Type here"
                />
                <button className="search-button">
                  SEARCH <SearchIcon />
                </button>
              </Box>
            </Stack>
          </Stack>

          <Stack className={"dishes-filter-section"}>
            <Stack className="dishes-filter-box">
              <Button variant="contained" color="primary" className="order">
                New
              </Button>
              <Button variant="contained" color="secondary" className="order">
                Price
              </Button>
              <Button variant="contained" color="secondary" className="order">
                Views
              </Button>
            </Stack>
          </Stack>

          <Stack className={"list-category-section"}>
            <Stack className="product-category">
              <div className="category-main">
                <Button variant="contained" color="secondary">
                  Other
                </Button>
                <Button variant="contained" color="secondary">
                  Desert
                </Button>
                <Button variant="contained" color="secondary">
                  Drink
                </Button>
                <Button variant="contained" color="secondary">
                  Salad
                </Button>
                <Button variant="contained" color="primary">
                  Dish
                </Button>
              </div>
            </Stack>

            <Stack className="product-wrapper">
              {products.length !== 0 ? (
                products.map((product, index) => {
                  return (
                    <Stack key={index} className="product-card">
                      <Stack
                        className="product-img"
                        sx={{ backgroundImage: `url(${product.imagePath})` }}
                      >
                        <div className="product-sale">Normal size</div>
                        <Button className="shop-btn">
                          <img
                            src="/icons/shopping-cart.svg"
                            style={{ display: "flex" }}
                          />
                        </Button>
                        <Button className="view-btn" sx={{ right: "36px" }}>
                          <Badge badgeContent={20} color="secondary">
                            <RemoveRedEyeIcon
                              sx={{ color: true ? "gray" : "white" }}
                            />
                          </Badge>
                        </Button>
                      </Stack>
                      <Box className="product-desc-box">
                        <span className="product-title">
                          {product.productName}
                        </span>
                        <div className="product-desc">
                          <MonetizationOnIcon />
                          {12}
                        </div>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className="no-data">Products are not available</Box>
              )}
            </Stack>
          </Stack>

          <Stack className={"pagination-section"}>
            <Pagination
              count={3}
              page={1}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color="secondary"
                />
              )}
            />
          </Stack>
        </Stack>
      </Container>

      <div className={"brand-logo"}>
        <Container className="family-brands">
          <Box className="category-title">Our Family Brands</Box>
          <Stack className="brand-list">
            <Box className="review-box">
              <img src="/img/gurme.webp" />
            </Box>
            <Box className="review-box">
              <img src="/img/seafood.webp" />
            </Box>
            <Box className="review-box">
              <img src="/img/sweets.webp" />
            </Box>
            <Box className="review-box">
              <img src="/img/doner.webp" />
            </Box>
          </Stack>
        </Container>
      </div>

      <div className={"address"}>
        <Container>
          <Stack className="address-are" sx={{ width: "1300px" }}>
            <Box className="title">Our address</Box>
            <iframe
              style={{ marginTop: "60px" }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47974.52215811875!2d69.26707855177827!3d41.27823197720393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2skr!4v1737127589590!5m2!1sen!2skr"
              width={"1300"}
              height={"600"}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
