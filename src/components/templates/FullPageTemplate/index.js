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
  box-sizing: border-box;
  padding: ${({ mainPadding }) => mainPadding};
  width: 100%;
`

const FullPageTemplate = ({
  children, footer, header, hero, mainPadding, ...props
}) => {
  return (
    <Wrapper {...props} id="outer-container">
      {header && <Header>{header}</Header>}
      <MainContent mainPadding={mainPadding}>{children}</MainContent>
      {footer && footer}
    </Wrapper>
  )
}

FullPageTemplate.propTypes = {
  children: PropTypes.any,
  footer: PropTypes.node,
  header: PropTypes.node,
  hero: PropTypes.node,
  mainPadding: PropTypes.string.isRequired,
}

FullPageTemplate.defaultProps = {
  mainPadding: '15px 0',
}

export default FullPageTemplate
