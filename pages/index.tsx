import "@fontsource/roboto"

import type { NextPage } from 'next'

import React from "react"
import styles from '../styles/home.module.css'
import ListComponent from "./components/list/list"
import AppBarComponent from "./components/Appbar/AppBarCompoent"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <AppBarComponent/>
      <ListComponent/>
    </div>
  )
}

export default Home
