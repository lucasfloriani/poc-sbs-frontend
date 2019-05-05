import React from 'react'
import PropTypes from 'prop-types'
import {
  BadgeIcon,
  Card,
  Flex,
  Grid,
  Heading,
  Paragraph,
} from 'components'

const GasStationCard = ({
  cnpj, fantasyName, cep, address, complement, neighborhood, cityName, stateName,
}) => (
  <Card padding="medium">
    <Grid valign="flex-start" column="1fr auto">
      <Flex flow="column">
        <Heading margin="4px 0 8px">{`${fantasyName} - ${cnpj}`}</Heading>
        <Paragraph>{`${address} ${complement} - ${neighborhood}`}</Paragraph>
        <Paragraph>{`${stateName}/${cityName}, CEP ${cep}`}</Paragraph>
      </Flex>
      <Flex>
        <BadgeIcon icon="alert" />
        <BadgeIcon icon="bookmark" />
        <BadgeIcon icon="navigation" />
      </Flex>
    </Grid>
  </Card>
)

GasStationCard.propTypes = {
  cnpj: PropTypes.string.isRequired,
  fantasyName: PropTypes.string.isRequired,
  cep: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  complement: PropTypes.string.isRequired,
  neighborhood: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  stateName: PropTypes.string.isRequired,
}

export default GasStationCard
