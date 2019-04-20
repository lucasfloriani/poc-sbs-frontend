import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Container, Sidebar } from 'components'
import { media } from '@theme'

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

const Header = styled.header``

const Hero = styled.section``

const MainContent = styled.main`
  width: 100%;

  ${media.lessThan('medium')`
    flex-direction: column;
    ${({ leftColumn }) => leftColumn && css`margin-bottom: 8px;`}
    ${({ rightColumn }) => rightColumn && css`margin-top: 8px;`}
  `}
`

const Content = styled(Container)`
  margin: 2rem auto;
`

const PageTemplate = ({
  children, footer, header, hero, leftColumn, rightColumn, ...props
}) => {
  return (
    <Wrapper {...props} id="outer-container">
      <Header>{header}</Header>
      {hero && <Hero>{hero}</Hero>}
      <Content id="page-wrap">
        { leftColumn && <Sidebar>{leftColumn}</Sidebar>}
        { children && <MainContent leftColumn={!!leftColumn} rightColumn={!!rightColumn}>{children}</MainContent>}
        { rightColumn && <Sidebar>{rightColumn}</Sidebar>}
      </Content>
      {footer}
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  children: PropTypes.any.isRequired,
  footer: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired,
  hero: PropTypes.node,
  leftColumn: PropTypes.node,
  rightColumn: PropTypes.node,
}

export default PageTemplate
