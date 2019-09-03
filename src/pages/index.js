import React from "react"
import Layout from "../@briodev/gatsby-theme-blog/components/pagelayout"
import { Container } from "theme-ui"
import styled from "@emotion/styled"

export default function index() {
  return (
    <Layout>
      <HeroBox>
        <HeroText>We Design Inspiration</HeroText>
      </HeroBox>

      <Container>
        <h3>We Love To Design On Edge</h3>
      </Container>
    </Layout>
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
