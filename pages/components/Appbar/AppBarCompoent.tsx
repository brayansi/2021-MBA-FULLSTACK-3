import React from "react";
import {
  AppBar,
  Grid,
  Toolbar,
} from "@mui/material";
import Image from "next/image";

export default function AppBarComponent() {
  return (
    <AppBar position="fixed">
      <Toolbar variant="dense" sx={{ height: "200px" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ padding: "20px" }}
        >
          <Image src={require("./../../../public/logo.png")} alt="Logo" width={300} height={150}  />
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

// export default Home
