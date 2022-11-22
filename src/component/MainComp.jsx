import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import LeftComp from "./LeftComp";
import RightComp from "./RightComp";

function MainComp() {
  return (
    <>
      <Grid container spacing={2} py={2} pl={2}>
        <Grid item md={12} py={2} mx={0} sx={{boxShadow:"0px 5px 10px #e0e0e0"}}>
          <TextField
            size="small"
            sx={{
              width: "50.5rem",
              '& .MuiOutlinedInput-root':{borderTopRightRadius:0,borderBottomRightRadius:0,py:.2}
            }}
            defaultValue="Retail Sales Associate in US"
            variant="outlined"
            inputProps={{
              style: { fontSize: "1.2rem", color: "#676767" }}}
            
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#2f4ba0",
              fontSize: "1.1rem",
              fontWeight: "700",
              textTransform: "none",
              px: 6,
              py: 1,
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 0,
              borderTopRightRadius: "6px",
              borderBottomRightRadius: "6px",
            }}
          >
            Search
          </Button>
        </Grid>
        <Grid item md={8}p={1}>
          <LeftComp />
        </Grid>
        <Grid item md={4}>
          <RightComp />
        </Grid>
      </Grid>
    </>
  );
}

export default MainComp;
