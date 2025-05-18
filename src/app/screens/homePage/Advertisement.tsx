import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function Advertisement() {
  return (
    <Box
      className="ads-restaurant-frame"
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "400px", sm: "500px", md: "600px" },
        overflow: "hidden",
        background: "#000",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)",
          zIndex: 2,
          pointerEvents: "none",
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          height: "100%",
          position: "relative",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          pt: { xs: 4, md: 6 },
          pb: { xs: 4, md: 6 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
            fontWeight: 700,
            mb: 2,
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            fontFamily: '"Roboto Serif", serif',
          }}
        >
          Experience Culinary Excellence
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
            fontWeight: 400,
            mb: 4,
            maxWidth: "800px",
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          Discover the art of fine dining with our master chefs
        </Typography>
      </Container>

      <Box
        className="ads-video"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          "& video": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "scale(1.1)",
            transition: "transform 0.5s ease",
            filter: "brightness(0.8)",
            "&:hover": {
              transform: "scale(1.15)",
            },
          },
        }}
      >
        <video autoPlay loop muted playsInline data-video-media="">
          <source type="video/mp4" src="video/burak-ads.mp4" />
        </video>
      </Box>

      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
          pointerEvents: "none",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "200px",
            height: "200px",
            background:
              "radial-gradient(circle, rgba(215,182,134,0.1) 0%, transparent 70%)",
            animation: "pulse 4s ease-in-out infinite",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: "200px",
            height: "200px",
            background:
              "radial-gradient(circle, rgba(215,182,134,0.1) 0%, transparent 70%)",
            animation: "pulse 4s ease-in-out infinite 2s",
          },
        }}
      />
    </Box>
  );
}
