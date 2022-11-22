import React from "react";
import { Box, Button, Card, Chip, Typography } from "@mui/material";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

function LeftComp() {
  return (
    <>
      <Typography
        sx={{
          fontSize: "1.4rem",
          fontWeight: "700",
          letterSpacing: 0,
          wordSpacing: 0,
        }}
      >
        RETAIL SALES ASSOCIATE SKILLS
      </Typography>
      <Typography
        sx={{
          fontSize: "1.2rem",
          color: "#959595",
          letterSpacing: 0,
          wordSpacing: 0,
        }}
      >
        These are the skills employers want to see on your resume for a Retail
        Sales Associate role.
      </Typography>
      <Card sx={{ mt: 3, py: 2, pl: 3, mr: 3,boxShadow:"0 0 1px 1px #e7e7e7" }}>
        <Box
          sx={{
            mb: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{ fontSize: "1.1rem", fontFamily: "arial", fontWeight: "800" }}
          >
            Soft Skill
          </Typography>
          <Button
            variant="text"
            sx={{
              width: "8rem",
              fontStyle: "italic",
              color: "#686868",
              fontWeight: "700",
              textTransform: "none",
            }}
          >
            2 Skills{" "}
            <KeyboardArrowUpOutlinedIcon
              sx={{ color: "#02296c", pl: "1rem" }}
            />
          </Button>
        </Box>
        <Chip
          label="Attentive"
          size="medium"
          sx={{
            height: "auto",
            fontSize: ".9rem",
            fontWeight: "500",
            borderRadius: "25px",
            px: 1,
            py: 1.5,
            mr: 2,
          }}
        />
        <Chip label="Interpersonal skills" sx={{
            height: "auto",
            fontSize: ".9rem",
            fontWeight: "500",
            borderRadius: "25px",
            px: 1,
            py: 1.5,
            mr: 2,
        }} />
      </Card>
      <Card sx={{ mt: 3, py: 1, pl: 3, mr: 3,boxShadow:"0 0 1px 1px #e7e7e7" }}>
        <Box
          sx={{
            mb: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{ fontSize: "1.1rem", fontFamily: "arial", fontWeight: "800" }}
          >
            Professional Skill
          </Typography>
          <Button
            variant="text"
            sx={{
              width: "8rem",
              fontStyle: "italic",
              color: "#686868",
              fontWeight: "700",
              textTransform: "none",
            }}
          >
            35 Skills
            <KeyboardArrowUpOutlinedIcon
              sx={{ color: "#02296c", pl: "1rem" }}
            />
          </Button>
        </Box>
        <Chip
          label="Business Development"
          size="medium"
          sx={{
            height: "auto",
            fontSize: ".9rem",
            fontWeight: "500",
            borderRadius: "25px",
            px: 1,
            py: 1.5,
            mr: 2,
            mb:2
          }}
        />
        <Chip label="Customer Services" sx={{
            height: "auto",
            fontSize: ".9rem",
            fontWeight: "500",
            borderRadius: "25px",
            px: 1,
            py: 1.5,
            mr: 2,
            mb:2
        }} />
        <Chip label="Stock merchandise" sx={{
            height: "auto",
            fontSize: ".9rem",
            fontWeight: "500",
            borderRadius: "25px",
            px: 1,
            py: 1.5,
            mr: 2,
            mb:2
        }} />
        <Chip label="Operate cash register" sx={{
            height: "auto",
            fontSize: ".9rem",
            fontWeight: "500",
            borderRadius: "25px",
            px: 1,
            py: 1.5,
            mr: 5,
            mb:2
        }} />
        <Chip label="Sales management" sx={{
            height: "auto",
            fontSize: ".9rem",
            fontWeight: "500",
            borderRadius: "25px",
            px: 1,
            py: 1.5,
            mr: 2,
            mb:2
        }} />
        <Chip label="Demos" sx={{
            height: "auto",
            fontSize: ".9rem",
            fontWeight: "500",
            borderRadius: "25px",
            px: 1,
            py: 1.5,
            mr: 2,
            mb:2
        }} />
        <Chip label="Campaigns" sx={{
            height: "auto",
            fontSize: ".9rem",
            fontWeight: "500",
            borderRadius: "25px",
            px: 1,
            py: 1.5,
            mr: 2,
            mb:2
        }} />
        <Chip label="Customer retention" sx={{
            height: "auto",
            fontSize: ".9rem",
            fontWeight: "500",
            borderRadius: "25px",
            px: 1,
            py: 1.5,
            mr: 2,
            mb:2
        }} />
        <Chip label="Cashiering" sx={{
            height: "auto",
            fontSize: ".9rem",
            fontWeight: "500",
            borderRadius: "25px",
            px: 1,
            py: 1.5,
            mr: 2,
            mb:2
        }} />
        <Chip label="Generate Revenue" sx={{
            height: "auto",
            fontSize: ".9rem",
            fontWeight: "500",
            borderRadius: "25px",
            px: 1,
            py: 1.5,
            mr: 2,
            mb:2
        }} />
        <Chip label="25 more" sx={{
            height: "auto",
            fontSize: ".9rem",
            fontWeight: "500",
            borderRadius: "25px",
            px: 1,
            py: 1.5,
            mr: 2,
            mb:1
        }} />
      </Card>
      <Card sx={{ mt: 3, py: 2, pl: 3, mr: 3,boxShadow:"0 0 1px 1px #e7e7e7" }}>
        <Box
          sx={{
            mb: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{ fontSize: "1.1rem", fontFamily: "arial", fontWeight: "800" }}
          >
            IT Skill
          </Typography>
          <Button
            variant="text"
            sx={{
              width: "8rem",
              fontStyle: "italic",
              color: "#686868",
              fontWeight: "700",
              textTransform: "none",
            }}
          >
            1 Skill
            <KeyboardArrowUpOutlinedIcon
              sx={{ color: "#02296c", pl: "1rem" }}
            />
          </Button>
        </Box>
        <Chip label="Use crm software" sx={{
            height: "auto",
            fontSize: ".9rem",
            fontWeight: "500",
            borderRadius: "25px",
            px: 1,
            py: 1.5,
            mr: 2,
        }} />
      </Card>
    </>
  );
}

export default LeftComp;
