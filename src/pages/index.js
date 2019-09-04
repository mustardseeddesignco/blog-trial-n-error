import React from "react"
import Layout from "../@briodev/gatsby-theme-blog/components/homepagelayout"
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

      <StyledBoxLeft>
        <StyledBoxContent>
          <BoxText>Photography</BoxText>
          <p>
            akjldajfd;aljf jfa; jadfjaidjeqi ;cjdcjaa;jd ajfd;a
            jdcakdjc;dcjadc;dajcdjacio;didajc
          </p>
        </StyledBoxContent>
      </StyledBoxLeft>

      <StyledBoxRight>
        <StyledBoxContent>
          <BoxText>Graphic Design</BoxText>
        </StyledBoxContent>
      </StyledBoxRight>

      {/*<StyledBoxContent>
          <BoxText>Web Development</BoxText>
        </StyledBoxContent> */}
      <br />
      <br />
    </Layout>
  )
}

const HeroText = styled.h1`
  color: black;
  text-align: center;
  font-size: 520%;
`

const HeroBox = styled.div`
  padding: 4rem;
  width: 100vw;
`
const StyledBoxLeft = styled.div`
  width: 50%;
  height: 100%;
  background: #ff5722;
  list-style: none;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;

  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: flex-start;

  -webkit-flex-flow: row wrap;
`
const StyledBoxRight = styled.div`
  padding-top: 50px;
  width: 50%;
  list-style: none;
  background: #ff5722;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;

  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: flex-end;

  -webkit-flex-flow: row wrap;
`

const StyledBoxContent = styled.div`
  padding: 5px;

  height: 100%;
  margin-top: 10px;

  line-height: 150px;
  color: black;
  font-weight: bold;
  text-align: center;
`
const BoxText = styled.h2`
  margin: 1rem;
  justify-content: space-around;
`
