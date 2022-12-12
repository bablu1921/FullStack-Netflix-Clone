import React from 'react'
import styled from "styled-components"
import background from "../assets/login.jpg"

function BackgroundImage() {
  return (
    <Container>
      <img src={background} alt="background" />
    </Container>
  )
}


export default BackgroundImage

const Container = styled.div`
  width:100vw;
  height: 100vh;

  img{
    width:100vw;
  height: 100vh;
  }
`;