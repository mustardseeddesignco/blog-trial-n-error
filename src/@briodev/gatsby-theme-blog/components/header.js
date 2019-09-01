import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      sitePlugin(name: { eq: "@briodev/gatsby-theme-blog" }) {
        pluginOptions {
          basePath
          tagsPath
          homePath
          aboutPath
          contactPath
          projectsPath
        }
      }
    }
  `)

  const basePath = data.sitePlugin.pluginOptions.basePath
  const homePath = data.sitePlugin.pluginOptions.homePath
  const aboutPath = data.sitePlugin.pluginOptions.aboutPath
  const contactPath = data.sitePlugin.pluginOptions.contactPath
  const projectsPath = data.sitePlugin.pluginOptions.projectsPath

  return (
    <SiteHeader>
      <SiteTitle to={homePath}>
        <Heading>Mustard Seed Design Co.</Heading>
      </SiteTitle>
      <Content>
        <ul>
          <NavLink to={projectsPath}>Projects</NavLink>
          <NavLink to={aboutPath}>About</NavLink>
          <NavLink to={basePath}>Blog</NavLink>
          <NavLink to={contactPath}>Contact Us</NavLink>
        </ul>
      </Content>
    </SiteHeader>
  )
}

export default Header

// const Content = styled.div`
//     max-width: 1400px;
//     padding: 1rem 1.0875rem;
//     font-size: 1.2rem;
// `

// const NavLink = styled(Link)`
//     color: black;
//     margin-left: 1em;
//     text-decoration: none;

//     ::after {
//         content: "";
//         position: absolute;
//         width: 100%;
//         transform: scaleX(0);
//         height: 2px;
//         bottom: 0;
//         left: 0;
//         background-color: rgba(0, 0, 0, 0.8);
//         transform-origin: bottom right;
//         transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
//     }

//     :hover::after {
//         transform: scaleX(1);
//         transform-origin: bottom left;
//   }
// `

// const HomeLink = styled(NavLink)`
//   margin-left: 0;

// `

// const SiteHeader = styled.header`
//   width: 100vw;
//   background: transparent;
//   display: flex;
//   align-content: flex-end;
//   justify-content: flex-end;
// `
// const SiteTitle = styled.div`
//   padding: 1rem 1.0875rem;
//   font-size: 1.2rem;
//   background: transparent;

// `

const Content = styled.div`
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding-left: 55rem;
`

const NavLink = styled(Link)`
  color: black;
  margin-left: 1em;
  text-decoration: none;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  // :hover::after {
  //   transform: scaleX(1);
  //   transform-origin: bottom left;
  // }
`
const SiteHeader = styled.header`
  width: 100vw;
  background: transparent;
  display: flex;
`
const SiteTitle = styled(Link)`
  color: black;
  text-decoration: none;
  background: transparent;
  position: fixed;
`
const Heading = styled.h1`
  margin-top: 0.2rem;
  padding-left: 2rem;
`
