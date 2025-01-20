import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Divider from "../../components/divider";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import { CssVarsProvider } from "@mui/joy";

const products = [
  { productName: "Korean Spicy Soup", imagePath: "/img/cutlet.webp" },
  { productName: "Vegetarian Soup", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Salmon Pasta", imagePath: "/img/kebab.webp" },
  { productName: "Kebuli Rice", imagePath: "/img/lavash.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
];

export default function Products() {
  return (
    <div className="products">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className="avatar-big-box">
            <Box className="category-title">Burak Restaurant</Box>
            <Stack className="input-box">
              <Box className="search-input">
                <input
                  className="input-field"
                  placeholder="Type here..."
                  style={{
                    padding: "10px 20px", // Add padding to input
                    fontSize: "16px",
                  }}
                />
              </Box>
              <Box className="search-button">
                <Button variant="contained" className="search-text">
                  SEARCH <SearchIcon className="search-icon" />
                </Button>
              </Box>
            </Stack>
          </Stack>

          <Stack className="dishes-filter-section">
            <Button variant="contained" className="filter-button">
              NEW
            </Button>
            <Button
              variant="contained"
              className="filter-button"
              color="secondary"
            >
              PRICE
            </Button>
            <Button
              variant="contained"
              className="filter-button"
              color="secondary"
            >
              VIEWS
            </Button>
          </Stack>

          <Stack className={"list-category-section"}>
            <Stack className={"product-category"}>
              <Button variant="contained" className="filter-button">
                DISH
              </Button>
              <Button
                variant="contained"
                className="filter-button"
                color="secondary"
              >
                SALAD
              </Button>
              <Button
                variant="contained"
                className="filter-button"
                color="secondary"
              >
                DRINK
              </Button>
              <Button
                variant="contained"
                className="filter-button"
                color="secondary"
              >
                DESERT
              </Button>
              <Button
                variant="contained"
                className="filter-button"
                color="secondary"
              >
                OTHER
              </Button>
            </Stack>

            <Stack className={"product-wrapper"}>
              <CssVarsProvider>
                {products.length !== 0 ? (
                  products.map((ele, index) => {
                    return (
                      <Card key={index} variant="soft" className="card">
                        <CardOverflow>
                          <div className="product-sale">LARGE size</div>
                          <AspectRatio ratio="1">
                            <img src={ele.imagePath} alt="" />
                          </AspectRatio>
                        </CardOverflow>

                        <CardOverflow variant="soft" className="product-detail">
                          <Stack className="info">
                            <Stack flexDirection={"column"}>
                              <Typography className={"title"}>
                                {ele.productName}
                              </Typography>
                              <Typography className={"price"}>
                                <img src="./icons/dollar_sign.svg" alt="" /> 15
                              </Typography>
                              {/* Savatchani hover holida qo'shish kerak  */}
                            </Stack>
                          </Stack>
                        </CardOverflow>
                      </Card>
                    );
                  })
                ) : (
                  <Box className="no-data">
                    New products are not available !
                  </Box>
                )}
              </CssVarsProvider>
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

      <div className="brands-logo">
        <Container>
          <Typography className="brands-title">Our Family Brands</Typography>

          <Stack className="brands-cards">
            <Box className="brands-card">
              <img src="./img/brand-red.svg" alt="" />
            </Box>
            <Box className="brands-card">
              <img src="./img/brand-blue.svg" alt="" />
            </Box>
            <Box className="brands-card">
              <img src="./img/brand-green.svg" alt="" />
            </Box>
            <Box className="brands-card">
              <img src="./img/brand-orange.svg" alt="" />
            </Box>
          </Stack>
        </Container>
      </div>

      <div className="address">
        <Container>
          <Stack className="address-area">
            <Typography className="address-title">Our address</Typography>

            <iframe
              style={{
                marginTop: "60px",
                width: "100%",
                height: "500px",
                border: "none",
              }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127997.171246206!2d62.2855628670045!3d40.037817679791395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d30e40e38ce3%3A0xe50860cafe8775b7!2sRestaurant%20CZN%20BURAK!5e0!3m2!1sen!2s!4v1737267938505!5m2!1sen!2s"
              title="CZN Burak Restaurant Google Map"
              allowFullScreen
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
