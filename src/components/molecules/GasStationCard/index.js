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

const GasStationCard = ({
  actions, cnpj, fantasyName, cep, address, complement, neighborhood, cityName, stateName, id,
}) => (
  <Card padding="medium">
    <Grid valign="flex-start" column="1fr auto">
      <Flex flow="column">
        <Heading margin="4px 0 8px">{`${fantasyName} - ${cnpj}`}</Heading>
        <Paragraph>{`${address} ${complement} - ${neighborhood}`}</Paragraph>
        <Paragraph>{`${stateName}/${cityName}, CEP ${cep}`}</Paragraph>
      </Flex>
      <Flex>
        {actions.includes('edit') && <Link to={`/admin/gas-stations/${id}`}><BadgeIcon icon="edit" /></Link>}
        {actions.includes('alert') && <BadgeIcon icon="alert" />}
        {actions.includes('bookmark') && <BadgeIcon icon="bookmark" />}
        {actions.includes('navigation') && <BadgeIcon icon="navigation" />}
      </Flex>
    </Grid>
  </Card>
)

GasStationCard.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  actions: PropTypes.array.isRequired,
  cnpj: PropTypes.string.isRequired,
  fantasyName: PropTypes.string.isRequired,
  cep: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  complement: PropTypes.string.isRequired,
  neighborhood: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  stateName: PropTypes.string.isRequired,
}

GasStationCard.defaultProps = {
  actions: ['alert', 'bookmark', 'navigation'],
}

export default GasStationCard
