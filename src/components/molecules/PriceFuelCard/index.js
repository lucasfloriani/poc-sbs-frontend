import React from 'react'
import PropTypes from 'prop-types'
import { formatToFuelPrice } from '@helpers/string'
import {
  BadgeIcon,
  Card,
  Flex,
  Grid,
  Heading,
  Link,
  Paragraph,
} from 'components'

const PriceFuelCard = ({
  fuelType, id, paymentType, price,
}) => (
  <Card padding="medium">
    <Grid valign="flex-start" column="1fr auto">
      <Flex flow="column">
        <Heading margin="4px 0 8px">{fuelType.name}</Heading>
        <Paragraph fontSize="small">{paymentType.name}</Paragraph>
        <Paragraph fontSize="small">{formatToFuelPrice(price)}</Paragraph>
      </Flex>
      <Flex>
        <Link to={`/admin/gas-stations/${id}`}><BadgeIcon icon="edit" /></Link>
        <BadgeIcon icon="delete" />
      </Flex>
    </Grid>
  </Card>
)

PriceFuelCard.propTypes = {
  fuelType: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  paymentType: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  price: PropTypes.string.isRequired,
}

export default PriceFuelCard
