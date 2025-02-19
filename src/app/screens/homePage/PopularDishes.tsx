import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import CardOverflow from "@mui/joy/CardOverflow";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";

/** REDUX SLICE & SELECTOR**/
const popularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes })
);

export default function PopularDishes() {
  const { popularDishes } = useSelector(popularDishesRetriever);

  return (
    <div className="popular-dishes-frame">
      <Container>
        <Stack className="popular-section">
          <Box className="category-title">Popular dishes</Box>
          <Stack className="cards-frame">
            {popularDishes.length !== 0 ? (
              popularDishes.map((product: Product) => {
                const imagePath = `${serverApi}/${product.productImages[0]}`;
                return (
                  <CssVarsProvider key={product._id}>
                    <Card
                      className="card"
                      sx={{ width: "300px", height: "400px" }}
                    >
                      {" "}
                      {/* Fixed width and height for the card */}
                      <CardCover
                        sx={{
                          backgroundImage: `url(${imagePath})`, // Set image as background
                          backgroundSize: "cover", // This will ensure the image covers the entire area
                          backgroundPosition: "center", // Center the image in the container
                          backgroundRepeat: "no-repeat", // Prevent repeating the image
                          height: "100%", // Make sure the card cover takes up the full height of the card
                        }}
                      />
                      <CardCover className={"card-cover"} />
                      <CardContent sx={{ justifyContent: "flex-end" }}>
                        <Stack
                          flexDirection={"row"}
                          justifyContent={"space-between"}
                        >
                          <Typography
                            level="h2"
                            fontSize="lg"
                            textColor="#fff"
                            mb={1}
                          >
                            {product.productName}
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "md",
                              color: "neutral.300",
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            {product.productViews}
                            <VisibilityIcon
                              sx={{ fontSize: 25, marginLeft: "5px" }}
                            />
                          </Typography>
                        </Stack>
                      </CardContent>
                      <CardOverflow
                        sx={{
                          display: "flex",
                          gap: 1.5,
                          py: 1.5,
                          px: 1.5,
                          borderTop: "1px solid",
                          height: "80px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "row",
                          }}
                        >
                          {/* Icon */}
                          <DescriptionOutlinedIcon
                            sx={{ marginRight: 1 }}
                          />{" "}
                          {/* Adjusts spacing between the icon and the text */}
                          {/* Text Description */}
                          <Typography
                            textColor={"neutral.300"}
                            sx={{
                              display: "block", // Ensures the Typography behaves as a block element
                              width: "274px", // Fixed width for the text container (where text should wrap)
                              wordWrap: "break-word", // Allows words to break and continue on the next line
                              whiteSpace: "normal", // Allow wrapping at the natural spaces in text
                              overflow: "visible", // Make sure the overflow is visible (no hidden content)
                              textOverflow: "clip", // Disable ellipsis for text that overflows
                            }}
                          >
                            {product.productDesc}
                          </Typography>
                        </Box>
                      </CardOverflow>
                    </Card>
                  </CssVarsProvider>
                );
              })
            ) : (
              <Box className="no-data">Popular products are not available!</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
