import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  Box,
  Stack,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  TextFieldProps,
} from "@mui/material";
import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { T } from "../../../lib/types/common";
import { Messages } from "../../../lib/config";
import { LoginInput, MemberInput } from "../../../lib/types/member";
import MemberService from "../../services/MemberService";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { useGlobals } from "../../hooks/useGlobals";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "16px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    padding: theme.spacing(4),
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "4px",
      background: "linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)",
    },
  },
}));

const ModalImg = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const StyledTextField = styled(TextField)<TextFieldProps>`
  & .MuiOutlinedInput-root {
    border-radius: 12px;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.02);
    }

    &.Mui-focused {
      box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);
    }
  }
`;

const ActionButton = styled.button`
  background: linear-gradient(90deg, #1976d2 0%, #42a5f5 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  margin-top: 24px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

interface AuthenticationModalProps {
  signupOpen: boolean;
  loginOpen: boolean;
  handleSignupClose: () => void;
  handleLoginClose: () => void;
}

export default function AuthenticationModal(props: AuthenticationModalProps) {
  const { signupOpen, loginOpen, handleSignupClose, handleLoginClose } = props;
  const classes = useStyles();
  const [memberNick, setMemberNick] = useState<string>("");
  const [memberPhone, setMemberPhone] = useState<string>("");
  const [memberPassword, setMemberPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const { setAuthMember } = useGlobals();

  /** HANDLERS **/
  const handleUsername = (e: T) => {
    setMemberNick(e.target.value);
  };

  const handlePhone = (e: T) => {
    setMemberPhone(e.target.value);
  };

  const handlePassword = (e: T) => {
    setMemberPassword(e.target.value);
  };

  const handlePasswordKeyDown = (e: T) => {
    if (e.key === "Enter" && signupOpen) {
      handleSignupRequest().then();
    } else if (e.key === "Enter" && loginOpen) {
      handleLoginRequest();
    }
  };

  const handleSignupRequest = async () => {
    try {
      const isFulFill =
        memberNick !== "" && memberPhone !== "" && memberPassword !== "";
      if (!isFulFill) throw new Error(Messages.error3);

      const signupInput: MemberInput = {
        memberNick: memberNick,
        memberPhone: memberPhone,
        memberPassword: memberPassword,
      };

      const member = new MemberService();
      const result = await member.signup(signupInput);

      setAuthMember(result);
      handleSignupClose();
    } catch (err) {
      console.log(err);
      handleSignupClose();
      sweetErrorHandling(err).then();
    }
  };

  const handleLoginRequest = async () => {
    try {
      const isFulFill = memberNick !== "" && memberPassword !== "";
      if (!isFulFill) throw new Error(Messages.error3);

      const loginInput: LoginInput = {
        memberNick: memberNick,
        memberPassword: memberPassword,
      };

      const member = new MemberService();
      const result = await member.login(loginInput);

      setAuthMember(result);
      handleLoginClose();
    } catch (err) {
      console.log(err);
      handleLoginClose();
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={signupOpen}
        onClose={handleSignupClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={signupOpen}>
          <Stack
            className={classes.paper}
            direction={"row"}
            sx={{ width: "800px", gap: 4 }}
          >
            <ModalImg src={"/img/auth.webp"} alt="authentication" />
            <Stack
              sx={{ flex: 1, alignItems: "center", justifyContent: "center" }}
            >
              <Typography
                variant="h4"
                sx={{ mb: 3, fontWeight: 600, color: "#1a237e" }}
              >
                Create Account
              </Typography>
              <StyledTextField
                fullWidth
                label="Username"
                variant="outlined"
                onChange={handleUsername}
                sx={{ mb: 2 }}
              />
              <StyledTextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                onChange={handlePhone}
                sx={{ mb: 2 }}
              />
              <StyledTextField
                fullWidth
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                onChange={handlePassword}
                onKeyDown={handlePasswordKeyDown}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <ActionButton onClick={handleSignupRequest}>
                <LoginIcon />
                Sign Up
              </ActionButton>
            </Stack>
          </Stack>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={loginOpen}
        onClose={handleLoginClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={loginOpen}>
          <Stack
            className={classes.paper}
            direction={"row"}
            sx={{ width: "700px", gap: 4 }}
          >
            <ModalImg src={"/img/auth.webp"} alt="authentication" />
            <Stack
              sx={{ flex: 1, alignItems: "center", justifyContent: "center" }}
            >
              <Typography
                variant="h4"
                sx={{ mb: 3, fontWeight: 600, color: "#1a237e" }}
              >
                Welcome Back
              </Typography>
              <StyledTextField
                fullWidth
                label="Username"
                variant="outlined"
                onChange={handleUsername}
                sx={{ mb: 2 }}
              />
              <StyledTextField
                fullWidth
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                onChange={handlePassword}
                onKeyDown={handlePasswordKeyDown}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <ActionButton onClick={handleLoginRequest}>
                <LoginIcon />
                Sign In
              </ActionButton>
            </Stack>
          </Stack>
        </Fade>
      </Modal>
    </div>
  );
}
