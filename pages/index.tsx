import "@fontsource/roboto"
import React from "react"
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
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
