import React from "react";
import {
  Box,
  Container,
  Stack,
  Tabs,
  useTheme,
  useMediaQuery,
  Fade,
  Zoom,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import DescriptionIcon from "@mui/icons-material/Description";
import "../../../css/help.css";
import { faq } from "../../../lib/data/faq";
import { terms } from "../../../lib/data/terms";

export default function HelpPage() {
  const [value, setValue] = React.useState("1");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  /** HANDLERS **/
  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={"help-page"}>
      <Container className={"help-container"}>
        <TabContext value={value}>
          <Box className={"help-menu"}>
            <Box
              sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="help page tabs"
                className={"table_list"}
                variant={isMobile ? "fullWidth" : "standard"}
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab
                  icon={<DescriptionIcon />}
                  iconPosition="start"
                  label="TERMS"
                  value={"1"}
                  sx={{
                    fontSize: { xs: "0.7rem", sm: "0.875rem", md: "1rem" },
                    minWidth: { xs: "auto", sm: "100px" },
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                />
                <Tab
                  icon={<HelpOutlineIcon />}
                  iconPosition="start"
                  label="FAQ"
                  value={"2"}
                  sx={{
                    fontSize: { xs: "0.7rem", sm: "0.875rem", md: "1rem" },
                    minWidth: { xs: "auto", sm: "100px" },
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                />
                <Tab
                  icon={<ContactMailIcon />}
                  iconPosition="start"
                  label="CONTACT"
                  value={"3"}
                  sx={{
                    fontSize: { xs: "0.7rem", sm: "0.875rem", md: "1rem" },
                    minWidth: { xs: "auto", sm: "100px" },
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                />
              </Tabs>
            </Box>
          </Box>
          <Stack>
            <Stack className={"help-main-content"}>
              <TabPanel value={"1"}>
                <Fade in={value === "1"} timeout={500}>
                  <Stack className={"rules-box"}>
                    <Box className={"rules-frame"}>
                      {terms.map((value, number) => (
                        <Zoom
                          in={true}
                          style={{ transitionDelay: `${number * 50}ms` }}
                          key={number}
                        >
                          <p>{value}</p>
                        </Zoom>
                      ))}
                    </Box>
                  </Stack>
                </Fade>
              </TabPanel>
              <TabPanel value={"2"}>
                <Fade in={value === "2"} timeout={500}>
                  <Stack className={"accordion-menu"}>
                    {faq.map((value, number) => (
                      <Zoom
                        in={true}
                        style={{ transitionDelay: `${number * 50}ms` }}
                        key={number}
                      >
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography
                              sx={{
                                fontSize: { xs: "0.875rem", sm: "1rem" },
                                lineHeight: 1.5,
                                fontWeight: 500,
                              }}
                            >
                              {value.question}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography
                              sx={{
                                fontSize: { xs: "0.875rem", sm: "1rem" },
                                lineHeight: 1.6,
                                color: "text.secondary",
                              }}
                            >
                              {value.answer}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </Zoom>
                    ))}
                  </Stack>
                </Fade>
              </TabPanel>
              <TabPanel value={"3"}>
                <Fade in={value === "3"} timeout={500}>
                  <Stack className={"admin-letter-box"}>
                    <Stack className={"admin-letter-container"}>
                      <Box className={"admin-letter-frame"}>
                        <span>Contact us!</span>
                        <p>Fill out below form to send a message!</p>
                      </Box>
                      <form
                        action={"#"}
                        method={"POST"}
                        className={"admin-letter-frame"}
                      >
                        <div className={"admin-input-box"}>
                          <label>Your name</label>
                          <input
                            type={"text"}
                            name={"memberNick"}
                            placeholder={"Type your name here"}
                            required
                          />
                        </div>
                        <div className={"admin-input-box"}>
                          <label>Your email</label>
                          <input
                            type={"email"}
                            name={"memberEmail"}
                            placeholder={"Type your email here"}
                            required
                          />
                        </div>
                        <div className={"admin-input-box"}>
                          <label>Message</label>
                          <textarea
                            name={"memberMsg"}
                            placeholder={"Your message"}
                            required
                          ></textarea>
                        </div>
                        <Box
                          display={"flex"}
                          justifyContent={"flex-end"}
                          sx={{ mt: { xs: "1rem", sm: "1.5rem", md: "2rem" } }}
                        >
                          <Button
                            type={"submit"}
                            variant="contained"
                            sx={{
                              fontSize: { xs: "0.875rem", sm: "1rem" },
                              padding: {
                                xs: "0.5rem 1.5rem",
                                sm: "0.75rem 2rem",
                              },
                              borderRadius: "12px",
                              textTransform: "none",
                              fontWeight: 500,
                              boxShadow: "0 4px 12px rgba(25, 118, 210, 0.15)",
                              "&:hover": {
                                boxShadow:
                                  "0 6px 16px rgba(25, 118, 210, 0.25)",
                              },
                            }}
                          >
                            Send Message
                          </Button>
                        </Box>
                      </form>
                    </Stack>
                  </Stack>
                </Fade>
              </TabPanel>
            </Stack>
          </Stack>
        </TabContext>
      </Container>
    </div>
  );
}
