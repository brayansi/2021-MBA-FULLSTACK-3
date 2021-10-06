import "@fontsource/roboto"
import React from "react"
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import List from "./list"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <List/>
    </div>
  )
}

export default Home
