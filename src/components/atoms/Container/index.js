import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ align }) => align && css`align-items: ${align};`}
  box-sizing: border-box;
  ${({ direction }) => direction && css`flex-direction: ${direction};`}
  display: flex;
  margin: auto;
  max-width: 1200px;
  padding: 0 8px;
  width: 100%;
  ${({ wrap }) => wrap && css`flex-wrap: ${wrap};`}
`

Container.propTypes = {
  align: PropTypes.string,
  direction: PropTypes.string,
  wrap: PropTypes.string,
}

export default Container
