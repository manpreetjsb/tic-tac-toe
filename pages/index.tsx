import React from 'react'
// Modules
import { NextPage } from 'next/types'
import Header from '../components/Header'
import Game from '../components/Game'

const HomePage: NextPage = () => {
  return (
    <>
      <Header />
      <Game />
    </>
  )
}

export default HomePage
