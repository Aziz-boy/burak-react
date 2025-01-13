import { Box, Button, Container, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
export function HomeNavbar() {
    const authMember = null;
    return(
    <div className="home-navbar">
        <Container >
            <Stack className='menu'>
                <Box>
                    <NavLink to="/">
                        <img alt='Logo' className='brand-logo' src="/icons/burak.svg"/>
                    </NavLink>
                </Box>
                <Stack className='links'>
                <Box className={"hover-line"}>
                    <NavLink to="/" activeClassName={"undeline"}>Home</NavLink>
                </Box> 
                <Box className={"hover-line"}>
                    <NavLink to="/product" activeClassName={"undeline"}>Products</NavLink>
                </Box> 
                { authMember ?  (
                <Box className={"hover-line"}>
                    <NavLink to="/orders" activeClassName={"undeline"}>Orders</NavLink>
                </Box> 
                ) : null }
                { authMember ?  (
                <Box className={"hover-line"}>
                    <NavLink to="/member-page" activeClassName={"undeline"}>My Page</NavLink>
                </Box> 
                ) : null }
                <Box className={"hover-line"}>
                    <NavLink to="/help" activeClassName={"undeline"}>Help</NavLink>
                </Box> 
                { /* BASKET */ }
                {!authMember ? (
                    <Box>
                        <Button variant='contained' className='login-button'>Login</Button>
                    </Box>
                ) : (
                    <img 
                    alt='Profile-picture' 
                    className='user-avatar'
                    src="/icons/default-user.svg"  
                    aria-haspopup="true"
                    />
                )}
                </Stack>
            </Stack>
            <Stack>Detail</Stack>
        </Container> 
    </div> 
    );
}