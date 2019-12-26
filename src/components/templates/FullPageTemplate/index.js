import React from 'react'
import PropTypes from 'prop-types'
import { Header, MainContent, Wrapper } from './style'

const FullPageTemplate = ({
  children, footer, header, ...props
}) => (
  <Wrapper {...props} id="outer-container">
    {header && <Header>{header}</Header>}
    <MainContent>{children}</MainContent>
    {footer && footer}
  </Wrapper>
)

FullPageTemplate.propTypes = {
  children: PropTypes.any,
  footer: PropTypes.node,
  header: PropTypes.node,
}

export default FullPageTemplate
