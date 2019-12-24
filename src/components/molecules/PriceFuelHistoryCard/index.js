import React from 'react'
import PropTypes from 'prop-types'
import { StyledCard } from './style'
import { formatToFuelPrice } from '@helpers/string'
import Grid from '@atoms/Grid'
import Paragraph from '@atoms/Paragraph'

const PriceFuelHistoryCard = ({
  createdAt, fuelTypeName, paymentTypeName, price, type,
}) => (
  <StyledCard padding="small" type={type}>
    <Grid>
      <Grid valign="center" column="1fr auto">
        <Paragraph fontSize="medium">{`${fuelTypeName} - ${paymentTypeName}`}</Paragraph>
        <Paragraph fontSize="extraSmall">{createdAt}</Paragraph>
      </Grid>
      <Paragraph fontSize="small">{formatToFuelPrice(price)}</Paragraph>
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
