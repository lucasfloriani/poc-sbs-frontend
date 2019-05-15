import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import historyType from '@enums/historyType'
import { Card, Grid, Paragraph } from 'components'

const StyledCard = styled(Card)`
  background-color: ${({ type }) => {
    if (type === historyType.create) return palette('primary', 4)
    if (type === historyType.update) return palette('alert', 2)
    return palette('error', 3)
  }};
`

const PriceFuelHistoryCard = ({
  createdAt, fuelTypeName, paymentTypeName, price, type,
}) => (
  <StyledCard padding="small" type={type}>
    <Grid>
      <Grid valign="center" column="1fr auto">
        <Paragraph fontSize="medium">{`${fuelTypeName} - ${paymentTypeName}`}</Paragraph>
        <Paragraph fontSize="extraSmall">{createdAt}</Paragraph>
      </Grid>
      <Paragraph fontSize="small">{`R$ ${price}`}</Paragraph>
    </Grid>
  </StyledCard>
)

PriceFuelHistoryCard.propTypes = {
  createdAt: PropTypes.string.isRequired,
  fuelTypeName: PropTypes.string.isRequired,
  paymentTypeName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default PriceFuelHistoryCard
