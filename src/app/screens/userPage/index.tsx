import {
  Box,
  Container,
  Stack,
  Typography,
  IconButton,
  Fade,
  Zoom,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import { Settings } from "./Settings";
import { useHistory } from "react-router-dom";
import { useGlobals } from "../../hooks/useGlobals";
import "../../../css/userPage.css";
import { serverApi } from "../../../lib/config";
import { MemberType } from "../../../lib/enums/member.enum";
import { styled } from "@mui/material/styles";

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: "#666",
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#1976d2",
    transform: "translateY(-2px)",
  },
}));

const ProfileImage = styled("img")(({ theme }) => ({
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "4px solid white",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const BadgeImage = styled("img")(({ theme }) => ({
  width: "37px",
  height: "37px",
  position: "absolute",
  bottom: "0",
  right: "0",
  padding: "5px",
  background: "rgba(255, 255, 255, 0.9)",
  borderRadius: "50%",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
}));

export default function UserPage() {
  const history = useHistory();
  const { authMember } = useGlobals();

  if (!authMember) history.push("/");

  return (
    <div className="user-page">
      <Container>
        <Stack className="my-page-frame">
          <Stack className="my-page-left">
            <Fade in timeout={500}>
              <Box display="flex" flexDirection="column">
                <Typography
                  variant="h4"
                  className="menu-name"
                  sx={{
                    fontWeight: 600,
                    color: "#1a237e",
                    mb: 3,
                    textAlign: "center",
                  }}
                >
                  Profile Settings
                </Typography>
                <Box className="menu-content">
                  <Settings />
                </Box>
              </Box>
            </Fade>
          </Stack>

          <Stack className="my-page-right">
            <Zoom in timeout={500}>
              <Box className="order-info-box">
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  position="relative"
                >
                  <Box className="order-user-img">
                    <ProfileImage
                      src={
                        authMember?.memberImage
                          ? `${serverApi}/${authMember.memberImage}`
                          : "/icons/default-user.svg"
                      }
                      alt={authMember?.memberNick}
                    />
                    <BadgeImage
                      src={
                        authMember?.memberType === MemberType.RESTAURANT
                          ? "/icons/restaurant.svg"
                          : "/icons/user-badge.svg"
                      }
                      alt={authMember?.memberType}
                    />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      mt: 2,
                      fontWeight: 600,
                      color: "#1a237e",
                    }}
                  >
                    {authMember?.memberNick}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#666",
                      mb: 1,
                    }}
                  >
                    {authMember?.memberType}
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={1}
                    sx={{ color: "#666", mb: 2 }}
                  >
                    <LocationOnIcon fontSize="small" />
                    <Typography variant="body2">
                      {authMember?.memberAddress || "No address provided"}
                    </Typography>
                  </Box>
                </Box>

                <Box className="user-media-box">
                  <SocialIconButton>
                    <FacebookIcon />
                  </SocialIconButton>
                  <SocialIconButton>
                    <InstagramIcon />
                  </SocialIconButton>
                  <SocialIconButton>
                    <TelegramIcon />
                  </SocialIconButton>
                  <SocialIconButton>
                    <YouTubeIcon />
                  </SocialIconButton>
                </Box>

                <Typography
                  variant="body1"
                  className="user-desc"
                  sx={{
                    mt: 3,
                    color: "#666",
                    textAlign: "center",
                    lineHeight: 1.6,
                  }}
                >
                  {authMember?.memberDesc || "No description provided"}
                </Typography>
              </Box>
            </Zoom>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
