import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Divider from "../../components/divider";
export default function Statistics() {
  return (
    <div className={"static-frame"}>
      <Container>
        <Stack className={"info"}>
          <Stack className={"static-box"}>
            <Box className={"static-num"}>12</Box>
            <Box className={"static-txt"}>Restaurants</Box>
          </Stack>
          <Divider height="64" width="2" bg="#E3C080" />
          <Stack className={"static-box"}>
            <Box className={"static-num"}>8</Box>
            <Box className={"static-txt"}>Experience</Box>
          </Stack>
          <Divider height="64" width="2" bg="#E3C080" />
          <Stack className={"static-box"}>
            <Box className={"static-num"}>50+</Box>
            <Box className={"static-txt"}>Menu</Box>    
          </Stack>
          <Divider height="64" width="2" bg="#E3C080" />
          <Stack className={"static-box"}>
            <Box className={"static-num"}>200+</Box>
            <Box className={"static-txt"}>Clients</Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
