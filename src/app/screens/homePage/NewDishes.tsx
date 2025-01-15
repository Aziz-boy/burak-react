import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CardOverflow from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Divider from "../../components/divider";
import AspectRatio from "@mui/joy/AspectRatio";

const newDishes = [
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

export default function NewDishes() {
  return (
    <div className="new-products-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">Popular dishes</Box>
          <Stack className="cards-frame">
            <CssVarsProvider >
              {newDishes.length !== 0 ? (
                newDishes.map((ele, index) => {
                  return (
                    <Card key={index} variant="outlined" className="card">
                      <CardOverflow>
                        <div className="product-sale">Normal size</div>
                        <AspectRatio ratio="1">
                          <img src={ele.imagePath} alt="" />
                        </AspectRatio>
                      </CardOverflow>

                      <CardOverflow variant="soft" className="product-detail">
                        <Stack className="info">
                          <Stack flexDirection={"row"}>
                            <Typography className={"title"}>
                              {ele.productName}
                            </Typography>
                            <Divider width="2" height="24" bg="#d9d9d9" />
                            <Typography className={"price"}>$12</Typography>
                          </Stack>
                          <Stack>
                            <Typography className={"views"}>
                              20
                              <VisibilityIcon
                                sx={{ fontSize: 20, marginLeft: "5px" }}
                              />
                            </Typography>
                          </Stack>
                        </Stack>    
                      </CardOverflow>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">New products are not available !</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
