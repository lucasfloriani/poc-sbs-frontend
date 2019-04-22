import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from 'styled-theme'
import { getShadow } from '@theme'

const StyledForm = styled.form`
  ${({ onlyWrapper }) => !onlyWrapper && css`
    border-radius: 10px;
    box-shadow: ${getShadow()};
  `}
  background-color: ${palette('grayscale', 4)};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${({ header, footer }) => (!!footer || !!header) && css`padding: 10px 12px;`}
  width: 100%;
`
const FormContent = styled.div`
  ${({ header, footer }) => (!footer || !header) && css`padding: 10px 12px;`}
`

const Footer = styled.div`
  margin-top: 8px;
`

const Header = styled.div`
  margin-bottom: 8px;
`

const Form = ({
  children, footer, header, ...props
}) => (
  <StyledForm {...props}>
    {header && <Header>{header}</Header>}
    {<FormContent>{children}</FormContent>}
    {footer && <Footer>{footer}</Footer>}
  </StyledForm>
)

Form.propTypes = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  header: PropTypes.node,
}


export default Form
