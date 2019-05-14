import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as GasStationActions } from '@store/ducks/gasStation'
import {
  Block,
  GasStationCard,
  Grid,
  Paragraph,
  ScreenLoader,
} from 'components'

const ListBookmarkedGasStations = ({
  actions, bookmarkedGasStations, bookmarkedGasStationsRequest, isFetching,
}) => {
  useEffect(() => {
    bookmarkedGasStationsRequest()
  }, [])
  if (isFetching) return (<ScreenLoader />)

  return (
    <Grid column={bookmarkedGasStations.length ? '1fr 1fr' : '1fr'}>
      {bookmarkedGasStations && bookmarkedGasStations.map(({
        address,
        bookmarks,
        complaints,
        cep,
        city,
        cnpj,
        complement,
        fantasy_name: fantasyName,
        geo_location: geoLocation,
        id,
        neighborhood,
        ratings,
        state,
      }) => (
        <GasStationCard
          actions={actions}
          address={address}
          bookmarks={bookmarks}
          cep={cep}
          cityName={city.name}
          cnpj={cnpj}
          complaints={complaints}
          complement={complement}
          fantasyName={fantasyName}
          geoLocation={geoLocation}
          key={id}
          id={id}
          neighborhood={neighborhood}
          ratings={ratings}
          stateName={state.name}
        />
      ))}
      {!bookmarkedGasStations.length && (
        <Block>
          <Paragraph color={{ type: 'grayscale', position: 4 }}>Não foi encontrado nenhum posto de gasolina</Paragraph>
        </Block>
      )}
    </Grid>
  )
}

ListBookmarkedGasStations.propTypes = {
  actions: PropTypes.array.isRequired,
  bookmarkedGasStationsRequest: PropTypes.func.isRequired,
  bookmarkedGasStations: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

ListBookmarkedGasStations.defaultProps = {
  actions: ['alert', 'bookmark', 'navigation', 'rating'],
}

const mapStateToProps = ({ gasStation: { bookmarkedGasStations, isFetching } }) => ({ bookmarkedGasStations, isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(GasStationActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListBookmarkedGasStations)
