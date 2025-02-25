import { useState, SyntheticEvent } from "react";
import { Box, Container, Input, Stack } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPausedOrders, setProcessOrders, setFinishedOrders } from "./slice";
import "../../../css/order.css";
import { Order } from "../../../lib/types/orders";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});

export default function OrdersPage() {
  const { setPausedOrders, setProcessOrders, setFinishedOrders } =
  actionDispatch(useDispatch());
  const [value, setValue] = useState("1");
  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className={"order-page"}>
      <Container className="order-container">
        <Stack className="order-left">
          <TabContext value={value}>
            <Box className="order-nav-frame">
              <Box
                sx={{
                  borderBottom: "2px solid",
                  width: "679px",
                  borderColor: "divider",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className="table-list"
                >
                  <Tab label="PAUSED ORDERS" value={"1"} />
                  <Tab label="PROCESS ORDERS" value={"2"} />
                  <Tab label="FINISHES ORDERS" value={"3"} />
                </Tabs>
              </Box>
            </Box>
            <Stack className="order-main-content">
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>
        <Stack className="order-right">
          <Box className="order-info-box">
            <Box className="member-box">
              <div className="order-user-img">
                <img
                  
                  src="/icons/default-user.svg"
                  className="order-user-avatar"
                />
                {/* <div className="order-user-icon-box">
                  <img
                    src="/icons/user-badge.svg"
                    className="order-user-prof-img"
                  />
                </div> */}
              </div>
              <span className="order-user-name">Martin</span>
              <span className="order-user-prof">Adam</span>
            </Box>
            <Box className="liner">
              <Box className="liner-inside"></Box>
            </Box>
            <Box className="user-location">
              <img
                src="/icons/location.svg"
                className="order-user-location-img"
              />
              <p>South Korea, Incheon</p>
            </Box>
          </Box>
          <Box className="payment-info-box">
            <input
              className="card-number"
              placeholder="Card number : 5243 4090 2002 7495"
            />
            <Box className="card-details">
              <input
                className="card-detail-date"
                maxLength={3}
                style={{ width: "48%" }}
                placeholder="CVV : 010"
              />
              <input
                className="card-detail-cvv"
                style={{ width: "48%" }}
                placeholder="07 / 24"
              />
            </Box>
            <input className="client-name" placeholder="Aminboy Fattoev" />
            <Box className="cards">
              <img src="/icons/visa-card.svg" />
              <img src="/icons/western-card.svg" />
              <img src="/icons/paypal-card.svg" />
              <img src="/icons/master-card.svg" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
