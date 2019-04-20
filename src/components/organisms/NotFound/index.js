import React from 'react'
import styled from 'styled-components'
import {
  Button,
  Heading,
  Paragraph,
} from 'components'

const Wrapper = styled.section`
  align-items: center;
  background-image: linear-gradient(60deg, #4d4d4d 0%, #29323c 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`

const ParagraphWithMargin = styled(Paragraph)`
  margin-bottom: 2em;
`

const BiggerHeading = styled(Heading)`
  font-size: 6em;
`

const NotFound = () => {
  return (
    <Wrapper>
      <BiggerHeading>404 Not Found</BiggerHeading>
      <ParagraphWithMargin fontSize="extraLarge">Página não encontrada</ParagraphWithMargin>
      <Button>Clique aqui para voltar</Button>
    </Wrapper>
  )
}

export default NotFound
