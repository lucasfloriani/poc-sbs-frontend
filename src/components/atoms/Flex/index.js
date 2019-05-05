import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { prop } from 'styled-tools'

const Flex = styled.div`
  display: flex;
  ${({ margin }) => css`margin: ${margin};`}
  ${({ halign }) => css`justify-content: ${halign};`}
  ${({ valign }) => css`align-items: ${valign};`}
  flex-direction: ${({ flow }) => flow};
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
