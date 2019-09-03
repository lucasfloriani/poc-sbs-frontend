import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import paymentType from '@enums/paymentType'
import UserType from '@enums/userType'
import {
  Badge,
  BadgeIcon,
  BookmarkBadge,
  Card,
  ComplaintRender,
  Flex,
  Grid,
  HasPermission,
  Heading,
  Icon,
  Link,
  Paragraph,
  RatingRender,
} from 'components'
import { CardWrapper } from './style'

const GasStationCard = ({
  actions,
  address,
  bookmarks,
  cep,
  cityName,
  cnpj,
  complement,
  fantasyName,
  fuelTypeName,
  geoLocation,
  id,
  neighborhood,
  priceFuels,
  ratings,
  stateName,
}) => {
  const initialValue = Object.values(paymentType).reduce((acc, type) => ({ ...acc, [type]: '-----' }), {})
  const onlySelectedFuelType = priceFuels.filter(priceFuel => priceFuel.fuelType.name === fuelTypeName)
  const priceFuelValues = onlySelectedFuelType.reduce((acc, priceFuel) => {
    return Object.values(paymentType).includes(priceFuel.paymentType.name)
      ? { ...acc, [priceFuel.paymentType.name]: priceFuel.price }
      : acc
  }, initialValue)

  return (
    <Card padding="medium">
      <CardWrapper>
        <Flex flow="column">
          <Heading margin="0">{fantasyName}</Heading>
          <Heading margin="0 0 8px">{cnpj}</Heading>
          <Paragraph>{`${address} ${complement} - ${neighborhood}`}</Paragraph>
          <Paragraph>{`${stateName}/${cityName}, CEP ${cep}`}</Paragraph>
        </Flex>
        <Flex>
          {actions.includes('edit') && <Link to={`/admin/gas-stations/${id}`}><BadgeIcon icon="edit" /></Link>}
          <HasPermission logged allowedUserType={[UserType.user]}>
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
              <ComplaintRender gasStationID={`${id}`}>
                {toggleModal => (
                  <Badge>
                    <Icon
                      cursor="pointer"
                      icon="alert"
                      color={{ type: 'primary', position: 0 }}
                      hoverColor={{ type: 'primary', position: 0 }}
                      onClick={toggleModal}
                    />
                  </Badge>
                )}
              </ComplaintRender>
            )}
            {actions.includes('bookmark') && <BookmarkBadge bookmarks={bookmarks} gasStationID={`${id}`} />}
          </HasPermission>
          {actions.includes('navigation') && (
            <BadgeIcon
              icon="navigation"
              onClick={() => {
                navigator.geolocation.getCurrentPosition((position) => {
                  const { latitude, longitude } = position.coords
                  const url = `http://maps.google.com/?saddr=${latitude},${longitude}&daddr=${geoLocation}`
                  window.open(url)
                })
              }}
            />
          )}
        </Flex>
      </CardWrapper>
      {fuelTypeName && (
        <Grid column="1fr 1fr 1fr" gap="10px" style={{ marginTop: '20px' }}>
          <Paragraph fontSize="large" style={{ gridColumn: '1 / -1' }}>{fuelTypeName}</Paragraph>
          {
            Object.entries(priceFuelValues).map(([key, value]) => (
              <Card backgroundColor={{ type: 'grayscale', position: 1 }} key={key} padding="small">
                <Paragraph align="center" color={{ type: 'grayscale', position: 4 }} fontSize="medium">
                  {value !== '-----' ? `R$ ${value.replace('.', ',')}` : value}
                </Paragraph>
                <Paragraph align="center" color={{ type: 'grayscale', position: 4 }}>{key}</Paragraph>
              </Card>
            ))
          }
        </Grid>
      )}
    </Card>
  )
}

GasStationCard.propTypes = {
  actions: PropTypes.array.isRequired,
  address: PropTypes.string.isRequired,
  bookmarks: PropTypes.array.isRequired,
  cep: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  cnpj: PropTypes.string.isRequired,
  complement: PropTypes.string.isRequired,
  fantasyName: PropTypes.string.isRequired,
  fuelTypeName: PropTypes.string.isRequired,
  geoLocation: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  neighborhood: PropTypes.string.isRequired,
  priceFuels: PropTypes.array.isRequired,
  ratings: PropTypes.array.isRequired,
  stateName: PropTypes.string.isRequired,
}

GasStationCard.defaultProps = {
  actions: ['alert', 'bookmark', 'navigation', 'rating'],
}

const mapStateToProps = ({ auth: { fuelTypeName } }) => ({ fuelTypeName })

export default connect(mapStateToProps)(GasStationCard)
