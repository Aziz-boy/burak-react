import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";

export default function OtherNavbar() {
    const authMember = null; // Replace with actual authentication logic
    return(
        <div className="other-navbar">
        <Container className='navbar-container'>
            <Stack className='menu'>
                <Box>
                    <NavLink to="/">
                    <img 
                        className='brand-logo'
                        alt='Logo' 
                        src="/icons/burak.svg"
                    />
                    </NavLink>
                </Box>
                <Stack className='links'>
                <Box className={"hover-line"}>
                    <NavLink to="/" >Home</NavLink>
                </Box> 
                <Box className={"hover-line"}>
                    <NavLink to="/product" activeClassName={"underline"}>Products</NavLink>
                </Box> 
                { authMember ?  (
                <Box className={"hover-line"}>
                    <NavLink to="/orders" activeClassName={"underline"}>Orders</NavLink>
                </Box> 
                ) : null }
                { authMember ?  (
                <Box className={"hover-line"}>
                    <NavLink to="/member-page" activeClassName={"underline"}>My Page</NavLink>
                </Box> 
                ) : null }
                <Box className={"hover-line"}>
                    <NavLink to="/help" activeClassName={"underline"}>Help</NavLink>
                </Box> 
                { /* BASKET */ }

                <Basket />
                
                {!authMember ? (
                    <Box>
                        <Button variant='contained' className='login-button' >Login</Button>
                    </Box>
                ) : (
                    <img 
                        alt='user-avatar' 
                        className='user-avatar'
                        src={"/icons/default-user.svg"}
                        aria-haspopup={"true"}
                    />
                )}
                </Stack>
            </Stack>

        </Container> 
    </div> 
    );
}