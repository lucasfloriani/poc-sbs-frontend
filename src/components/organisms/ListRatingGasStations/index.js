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

const ListRatingGasStations = ({
  actions, ratingGasStations, ratingGasStationsRequest, isFetching,
}) => {
  useEffect(() => {
    ratingGasStationsRequest()
  }, [])
  if (isFetching) return (<ScreenLoader />)

  return (
    <Grid column={ratingGasStations.length ? '1fr 1fr' : '1fr'}>
      {ratingGasStations && ratingGasStations.map(({
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
      {!ratingGasStations.length && (
        <Block>
          <Paragraph color={{ type: 'grayscale', position: 4 }}>Não foi encontrado nenhum posto de gasolina</Paragraph>
        </Block>
      )}
    </Grid>
  )
}

ListRatingGasStations.propTypes = {
  actions: PropTypes.array.isRequired,
  ratingGasStationsRequest: PropTypes.func.isRequired,
  ratingGasStations: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

ListRatingGasStations.defaultProps = {
  actions: ['alert', 'bookmark', 'navigation', 'rating'],
}

const mapStateToProps = ({ gasStation: { ratingGasStations, isFetching } }) => ({ ratingGasStations, isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(GasStationActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListRatingGasStations)
