import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Paragraph } from 'components'
import { StyledCard } from './style'

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
