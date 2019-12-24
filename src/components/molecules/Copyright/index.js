import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Paragraph from '@atoms/Paragraph'
import { copyrightTimeMessage } from '@helpers/time'

const Copyright = styled(({ align, year, ...props }) => (
  <Paragraph {...props}>{`Copyright © ${copyrightTimeMessage(year)}`}</Paragraph>
))`
  text-align: ${({ align }) => align};
`

Copyright.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  year: PropTypes.number.isRequired,
}

Copyright.defaultProps = {
  align: 'center',
}

export default Copyright
