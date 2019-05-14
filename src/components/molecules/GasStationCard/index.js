import React from 'react'
import PropTypes from 'prop-types'
import {
  Badge,
  BadgeIcon,
  BookmarkBadge,
  Card,
  ComplaintRender,
  Flex,
  Grid,
  Heading,
  Icon,
  Link,
  Paragraph,
  RatingRender,
} from 'components'

const GasStationCard = ({
  actions,
  address,
  bookmarks,
  cep,
  cityName,
  cnpj,
  complaints,
  complement,
  fantasyName,
  id,
  neighborhood,
  ratings,
  stateName,
}) => (
  <Card padding="medium">
    <Grid valign="flex-start" column="1fr auto">
      <Flex flow="column">
        <Heading margin="0">{fantasyName}</Heading>
        <Heading margin="0 0 8px">{cnpj}</Heading>
        <Paragraph>{`${address} ${complement} - ${neighborhood}`}</Paragraph>
        <Paragraph>{`${stateName}/${cityName}, CEP ${cep}`}</Paragraph>
      </Flex>
      <Flex>
        {actions.includes('edit') && <Link to={`/admin/gas-stations/${id}`}><BadgeIcon icon="edit" /></Link>}
        {actions.includes('rating') && (
          <RatingRender ratings={ratings} gasStationID={`${id}`}>
            {(userRating, toggleModal) => (
              <Badge>
                <Icon
                  cursor="pointer"
                  icon="star"
                  color={userRating ? { type: 'alert', position: 0 } : { type: 'primary', position: 0 }}
                  hoverColor={userRating ? { type: 'alert', position: 0 } : { type: 'primary', position: 0 }}
                  onClick={toggleModal}
                />
              </Badge>
            )}
          </RatingRender>
        )}
        {actions.includes('alert') && (
          <ComplaintRender complaints={complaints} gasStationID={`${id}`}>
            {(userComplaint, toggleModal) => (
              <Badge>
                <Icon
                  cursor="pointer"
                  icon="alert"
                  color={userComplaint ? { type: 'primary', position: 4 } : { type: 'primary', position: 0 }}
                  hoverColor={userComplaint ? { type: 'primary', position: 4 } : { type: 'primary', position: 0 }}
                  onClick={toggleModal}
                />
              </Badge>
            )}
          </ComplaintRender>
        )}
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
  complaints: PropTypes.array.isRequired,
  complement: PropTypes.string.isRequired,
  fantasyName: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  neighborhood: PropTypes.string.isRequired,
  ratings: PropTypes.array.isRequired,
  stateName: PropTypes.string.isRequired,
}

GasStationCard.defaultProps = {
  actions: ['alert', 'bookmark', 'navigation', 'rating'],
}

export default GasStationCard
