import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Flex = styled.div`
  display: flex;
  ${({ halign }) => css`justify-content: ${halign};`}
  ${({ valign }) => css`align-items: ${valign};`}
  flex-direction: ${({ flow }) => flow};
`

Flex.propTypes = {
  flow: PropTypes.string,
  halign: PropTypes.string,
  valign: PropTypes.string,
}

Flex.defaultProps = {
  flow: 'row',
}

export default Flex
