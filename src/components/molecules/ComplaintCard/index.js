import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '@theme'
import {
  Button,
  Card,
  Grid,
  Heading,
  Paragraph,
} from 'components'

const HeaderWrapper = styled(({ ...props }) => <Grid column="1fr auto" valign="center" {...props} />)`
  ${media.lessThan('extraSmall')`
    grid-template-columns: 1fr;
  `}
`

const ComplaintCard = ({
  gasStationID,
  gasStationName,
  message,
  createdAt,
}) => (
  <Card padding="medium">
    <Grid gap="25px">
      <HeaderWrapper>
        <Heading margin="0">{gasStationName}</Heading>
        <Paragraph fontSize="small">{createdAt}</Paragraph>
      </HeaderWrapper>
      <Paragraph>{message}</Paragraph>
      <Button to={`/admin/gas-stations/${gasStationID}/price-historic`}>Ver histórico de preço</Button>
    </Grid>
  </Card>
)

ComplaintCard.propTypes = {
  gasStationID: PropTypes.string.isRequired,
  gasStationName: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}

export default ComplaintCard
