import React from "react"
import Header from "../@briodev/gatsby-theme-blog/components/header"
import { Container } from "theme-ui"
import styled from "@emotion/styled"

export default function index() {
  return (
    <div>
      <Header />

      <HeroBox>
        <HeroText>We Design Inspiration</HeroText>
      </HeroBox>

      <Container>
        <h3>We Love To Design On Edge</h3>
      </Container>
    </div>
  )
}

const HeroText = styled.h1`
  color: black;
  text-align: center;
  font-size: 520%;
`

const HeroBox = styled.div`
  background-color: goldenrod;
  padding: 4rem;
  width: 100vw;
`
