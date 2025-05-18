import React from "react";
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import "../../../css/footer.css";

export default function Footer() {
  const authMember = null;

  return (
    <div className="footer">
      <Container className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Box>
              <img className="footer-logo" alt="burak" src={"/icons/burak.svg"} />
            </Box>
            <Box className="foot-desc-txt">
              Focusing on the gourmet Turkish breakfast as well as the youth
              society, CZN Burak Gurme aims to bring Turkish cuisine back. CZN
              Burak Gurme creates an illusion with its cuisine.
            </Box>
            <Box className="sns-context">
              <img alt="facebook-icon" src={"/icons/facebook.svg"} />
              <img alt="twitter-icon" src={"/icons/twitter.svg"} />
              <img alt="instagram-icon" src={"/icons/instagram.svg"} />
              <img alt="youtube-icon" src={"/icons/youtube.svg"} />
            </Box>
          </div>
          <div className="footer-links">
            <div>
              <Box className="foot-category-title">Bo'limlar</Box>
              <Box className="foot-category-link">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                {authMember && <Link to="/orders">Orders</Link>}
                <Link to="/help">Help</Link>
              </Box>
            </div>
            <div>
              <Box className="foot-category-title">Find us</Box>
              <Box className="foot-category-link">
                <Box className="find-us">
                  <span>L.</span>
                  <div>Downtown, Dubai</div>
                </Box>
                <Box className="find-us">
                  <span>P.</span>
                  <div>+971 4 554 7777</div>
                </Box>
                <Box className="find-us">
                  <span>E.</span>
                  <div>devexuz@gmail.com</div>
                </Box>
                <Box className="find-us">
                  <span>H.</span>
                  <div>Visit 24 hours</div>
                </Box>
              </Box>
            </div>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="copyright-txt">
          © Copyright Devex Global, All rights reserved.
        </div>
      </Container>
    </div>
  );
}
