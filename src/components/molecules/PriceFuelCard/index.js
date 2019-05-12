import React from 'react'
import PropTypes from 'prop-types'
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
  fuelType, gasStation, id, paymentType, price,
}) => (
  // fuelType: {id: 1, name: "Gasolina"}
  // gasStation: {id: 3, cnpj: "36.337.499/0001-74", business_name: "Razão Social 2", fantasy_name: "Nome Fantasia 2",…}
  // id: 5
  // paymentType: {id: 1, name: "Dinheiro"}
  // price: "4.050"
  <Card padding="medium">
    <Grid valign="flex-start" column="1fr auto">
      <Flex flow="column">
        <Heading margin="4px 0 8px">{fuelType.name}</Heading>
        <Paragraph fontSize="small">{paymentType.name}</Paragraph>
        <Paragraph fontSize="small">{`R$ ${price}`}</Paragraph>
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
  gasStation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    cnpj: PropTypes.string.isRequired,
    business_name: PropTypes.string.isRequired,
    fantasy_name: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  paymentType: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  price: PropTypes.string.isRequired,
}

export default PriceFuelCard
