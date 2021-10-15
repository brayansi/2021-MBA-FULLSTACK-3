import "@fontsource/roboto";

import type { NextPage } from "next";

import { StyledEngineProvider } from "@mui/material/styles";

import React from "react";
import styles from "../styles/home.module.css";
import ListComponent from "./components/list/list";
import AppBarComponent from "./components/Appbar/AppBarCompoent";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <StyledEngineProvider injectFirst>
        <AppBarComponent />
        <ListComponent />
      </StyledEngineProvider>
      ,
    </div>
  );
};

export default Home;
