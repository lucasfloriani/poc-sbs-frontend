import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ align }) => align && css`align-items: ${align};`}
  ${({ wrap }) => wrap && css`flex-wrap: ${wrap};`}
  ${({ direction }) => direction && css`flex-direction: ${direction};`}
  ${({ windowHeight }) => windowHeight && css`min-height: 100vh;`}
  box-sizing: border-box;
  display: flex;
  margin: auto;
  max-width: 1200px;
  padding: 0 8px;
  width: 100%;
`

Container.propTypes = {
  align: PropTypes.string,
  direction: PropTypes.string,
  windowHeight: PropTypes.bool,
  wrap: PropTypes.string,
}

export default Container
