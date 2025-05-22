import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { CartItem } from "../../../lib/types/search";
import { useGlobals } from "../../hooks/useGlobals";
import { serverApi } from "../../../lib/config";
import { BoltOutlined, Logout, Menu as MenuIcon } from "@mui/icons-material";

interface HomeNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
  setSignupOpen: (isOpen: boolean) => void;
  setLoginOpen: (isOpen: boolean) => void;
  handleLogoutClick: (e: React.MouseEvent<HTMLElement>) => void;
  anchorEl: HTMLElement | null;
  handleCloseLogut: () => void;
  handleLogoutRequest: () => void;
}

export default function HomeNavbar(props: HomeNavbarProps) {
  const {
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll,
    setSignupOpen,
    setLoginOpen,
    handleLogoutClick,
    anchorEl,
    handleCloseLogut,
    handleLogoutRequest,
  } = props;
  const { authMember } = useGlobals();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    ...(authMember ? [{ label: "Orders", path: "/orders" }] : []),
    ...(authMember ? [{ label: "My Page", path: "/member-page" }] : []),
    { label: "Help", path: "/help" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            component={NavLink}
            to={item.path}
            className="hover-line"
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        {!authMember ? (
          <ListItem>
            <Button
              variant="contained"
              className="login-button"
              onClick={() => {
                setLoginOpen(true);
                handleDrawerToggle();
              }}
              fullWidth
            >
              Login
            </Button>
          </ListItem>
        ) : (
          <ListItem>
            <img
              alt="Profile-picture"
              className="user-avatar"
              src={
                authMember?.memberImage
                  ? `${serverApi}/${authMember?.memberImage}`
                  : "/icons/default-user.svg"
              }
              aria-haspopup={"true"}
              onClick={(e) => {
                handleLogoutClick(e);
                handleDrawerToggle();
              }}
            />
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <div className="home-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box>
            <NavLink to="/">
              <img className="brand-logo" alt="Logo" src="/icons/burak.svg" />
            </NavLink>
          </Box>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: "#f8f8ff" }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile
                }}
                sx={{
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: 280,
                    backgroundColor: "#343434",
                    color: "#f8f8ff",
                  },
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Stack className="links">
              {navItems.map((item) => (
                <Box key={item.label} className="hover-line">
                  <NavLink to={item.path} activeClassName="underline">
                    {item.label}
                  </NavLink>
                </Box>
              ))}

              <Basket
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                onDelete={onDelete}
                onDeleteAll={onDeleteAll}
              />

              {!authMember ? (
                <Box>
                  <Button
                    variant="contained"
                    className="login-button"
                    onClick={() => setLoginOpen(true)}
                  >
                    Login
                  </Button>
                </Box>
              ) : (
                <img
                  alt="Profile-picture"
                  className="user-avatar"
                  src={
                    authMember?.memberImage
                      ? `${serverApi}/${authMember?.memberImage}`
                      : "/icons/default-user.svg"
                  }
                  aria-haspopup={"true"}
                  onClick={handleLogoutClick}
                />
              )}

              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={Boolean(anchorEl)}
                onClose={handleCloseLogut}
                onClick={handleCloseLogut}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleLogoutRequest}>
                  <ListItemIcon>
                    <Logout fontSize="small" style={{ color: "blue" }} />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Stack>
          )}
        </Stack>

        <Stack className={"header-frame"}>
          <Stack className={"detail"}>
            <Box className={"head-main-txt"}>
              World's Most Delicious Cousine
            </Box>
            <Box className={"wel-txt"}>The Choice, not just a choice</Box>
            <Box className={"service-txt"}>24 hours service</Box>
          </Stack>
          <Box className={"logo-frame"}>
            <div className={"logo-img"}></div>
          </Box>
          {!authMember ? (
            <Box className={"signup"}>
              <Button
                variant={"contained"}
                className={"signup-button"}
                onClick={() => setSignupOpen(true)}
                sx={{
                  position: "absolute",
                  right: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                SIGN UP
              </Button>
            </Box>
          ) : null}
        </Stack>
      </Container>
    </div>
  );
}
