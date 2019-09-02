import React from 'react'
import PropTypes from 'prop-types'
import { Header, MainContent, Wrapper } from './style'

const FullPageTemplate = ({
  children, footer, header, mainPadding, ...props
}) => (
  <Wrapper {...props} id="outer-container">
    {header && <Header>{header}</Header>}
    <MainContent mainPadding={mainPadding}>{children}</MainContent>
    {footer && footer}
  </Wrapper>
)

FullPageTemplate.propTypes = {
  children: PropTypes.any,
  footer: PropTypes.node,
  header: PropTypes.node,
  mainPadding: PropTypes.string.isRequired,
}

FullPageTemplate.defaultProps = {
  mainPadding: '15px 0',
}

export default FullPageTemplate
