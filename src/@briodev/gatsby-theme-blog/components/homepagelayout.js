import React from "react"
import Header from "./header"
import styled from "@emotion/styled"

export default function pagelayout({ children }) {
  return (
    <BodyBackground>
      <Header />
      {children}
    </BodyBackground>
  )
}

const BodyBackground = styled.div`
background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
  );
`
