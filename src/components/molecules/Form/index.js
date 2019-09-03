import React from 'react'
import PropTypes from 'prop-types'
import {
  Footer,
  FormContent,
  Header,
  StyledForm,
} from './style'

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
