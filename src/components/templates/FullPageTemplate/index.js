import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

const Header = styled.header``

const MainContent = styled.main`
  width: 100%;
`

const PageTemplate = ({
  children, footer, header, hero, ...props
}) => {
  return (
    <Wrapper {...props} id="outer-container">
      {header && <Header>{header}</Header>}
      <MainContent>{children}</MainContent>
      {footer && footer}
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  children: PropTypes.any,
  footer: PropTypes.node,
  header: PropTypes.node,
  hero: PropTypes.node,
}

export default PageTemplate
