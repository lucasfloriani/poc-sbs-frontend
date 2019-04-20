import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { getShadow, getSize } from '@theme'
import { Container, Copyright } from 'components'

const StyledFooter = styled.footer`
  background-color: ${palette('secondary', 0)};
  box-shadow: ${getShadow('small')};
  padding: ${getSize('small')};
`
const Wrapper = styled(Container)`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'contato endereco'
    'linha linha'
    'copyright copyright';
  margin: auto;

  > hr {
    grid-area: linha;
  }

  > p {
    grid-area: copyright;
  }
`

const Footer = ({ ...props }) => {
  return (
    <StyledFooter>
      <Wrapper>
        <Copyright
          color={{ type: 'grayscale', position: 4 }}
          year={2019}
          {...props}
        />
      </Wrapper>
    </StyledFooter>
  )
}

export default Footer
