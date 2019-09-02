import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop } from 'styled-tools'

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ flow }) => flow};
  ${({ halign }) => css`justify-content: ${halign};`}
  ${({ margin }) => css`margin: ${margin};`}
  ${({ valign }) => css`align-items: ${valign};`}
  width: ${prop('width')};
`

Flex.propTypes = {
  flow: PropTypes.string,
  halign: PropTypes.string,
  margin: PropTypes.string,
  valign: PropTypes.string,
  width: PropTypes.string,
}

Flex.defaultProps = {
  flow: 'row',
  width: '100%',
}

export default Flex
