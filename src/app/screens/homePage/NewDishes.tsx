import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CardOverflow from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Divider from "../../components/divider";
import AspectRatio from "@mui/joy/AspectRatio";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveNewDishes } from "./selector";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";
import { ProductCollection } from "../../../lib/enums/product.enum";
/** REDUX SLICE & SELECTOR **/
const newDishesRetriever = createSelector(retrieveNewDishes, (newDishes) => ({
  newDishes,
}));

export default function NewDishes() {
  const { newDishes } = useSelector(newDishesRetriever);

  return (
    <div className="new-products-frame">
      <Container maxWidth="xl">
        <Stack className="main" spacing={4}>
          <Box className="category-title">Fresh Menu</Box>
          <Stack className="cards-frame">
            <CssVarsProvider>
              {newDishes.length !== 0 ? (
                newDishes.map((product: Product) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  const sizeVolume =
                    product.productCollection === ProductCollection.DRINK
                      ? product.productVolume + "l"
                      : product.productSize + " size";
                  return (
                    <Card
                      key={product._id}
                      variant="outlined"
                      className="card"
                      sx={{
                        "&:hover": {
                          "& .product-sale": {
                            transform: "translateY(-3px)",
                          },
                          "& .product-image": {
                            transform: "scale(1.1)",
                          },
                          "& .product-title": {
                            color: "#d7b686",
                          },
                          "& .product-price": {
                            color: "#c4a575",
                          },
                          "& .product-views": {
                            color: "#d7b686",
                          },
                        },
                      }}
                    >
                      <CardOverflow>
                        <Box className="product-sale">{sizeVolume}</Box>
                        <AspectRatio ratio="1">
                          <img
                            src={imagePath}
                            alt={product.productName}
                            className="product-image"
                            loading="lazy"
                          />
                        </AspectRatio>
                      </CardOverflow>

                      <CardOverflow variant="soft" className="product-detail">
                        <Stack className="info" spacing={2}>
                          <Stack
                            direction="row"
                            spacing={2}
                            alignItems="center"
                            sx={{ width: "100%" }}
                          >
                            <Typography
                              className="title product-title"
                              level="title-md"
                              sx={{
                                flex: 1,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                minWidth: "60%",
                                maxWidth: "90%",
                                pr: 1,
                              }}
                            >
                              {product.productName}
                            </Typography>
                          </Stack>
                          <Stack
                            direction="row"
                            spacing={2}
                            alignItems="center"
                            justifyContent="flex-end"
                            sx={{
                              mt: 1,
                              width: "100%",
                            }}
                          >
                            <Typography
                              className="price product-price"
                              level="title-lg"
                              sx={{
                                fontWeight: 600,
                                minWidth: "fit-content",
                                flexShrink: 0,
                                whiteSpace: "nowrap",
                              }}
                            >
                              ${product.productPrice}
                            </Typography>
                            <Divider
                              width="2"
                              height="24"
                              bg="rgba(215, 182, 134, 0.2)"
                            />
                            <Typography
                              className="views product-views"
                              level="body-sm"
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 0.5,
                                minWidth: "fit-content",
                                flexShrink: 0,
                                whiteSpace: "nowrap",
                              }}
                            >
                              {product.productViews}
                              <VisibilityIcon sx={{ fontSize: 20 }} />
                            </Typography>
                          </Stack>
                        </Stack>
                      </CardOverflow>
                    </Card>
                  );
                })
              ) : (
                <Box
                  className="no-data"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 300,
                    width: "100%",
                  }}
                >
                  <Typography level="h4" sx={{ color: "#d7b686" }}>
                    New products are not available!
                  </Typography>
                </Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
