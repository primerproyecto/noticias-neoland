import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from '../footer/Footer';
import Header from '../header/Header';
import styled from 'styled-components'

const Main = () => {
  return (
    <>
    <Header />
    <MainTag>
      <Outlet />
    </MainTag>
    <Footer />
    </>
  )
}

const MainTag = styled.main`
  flex-grow:1;
  overflow-y:auto;
`


export default Main
