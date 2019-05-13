import React from 'react'
import PropTypes from 'prop-types'
import {
  BadgeIcon,
  BookmarkBadge,
  Card,
  Flex,
  Grid,
  Heading,
  Link,
  Paragraph,
} from 'components'

const GasStationCard = ({
  actions,
  address,
  bookmarks,
  cep,
  cityName,
  cnpj,
  complement,
  fantasyName,
  id,
  neighborhood,
  stateName,
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
        {actions.includes('bookmark') && <BookmarkBadge bookmarks={bookmarks} gasStationID={`${id}`} />}
        {actions.includes('navigation') && <BadgeIcon icon="navigation" />}
      </Flex>
    </Grid>
  </Card>
)

GasStationCard.propTypes = {
  actions: PropTypes.array.isRequired,
  address: PropTypes.string.isRequired,
  bookmarks: PropTypes.array.isRequired,
  cep: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  cnpj: PropTypes.string.isRequired,
  complement: PropTypes.string.isRequired,
  fantasyName: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  neighborhood: PropTypes.string.isRequired,
  stateName: PropTypes.string.isRequired,
}

GasStationCard.defaultProps = {
  actions: ['alert', 'bookmark', 'navigation'],
}

export default GasStationCard
