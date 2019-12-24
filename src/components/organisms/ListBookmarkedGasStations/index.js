import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ListWrapper } from './style'
import { Creators as GasStationActions } from '@store/ducks/gasStation'
import Block from '@atoms/Block'
import Paragraph from '@atoms/Paragraph'
import GasStationCard from '@molecules/GasStationCard'
import ScreenLoader from '@molecules/ScreenLoader'

const ListBookmarkedGasStations = ({
  actions, bookmarkedGasStations, bookmarkedGasStationsRequest, isFetching,
}) => {
  useEffect(() => { bookmarkedGasStationsRequest() }, [bookmarkedGasStationsRequest])
  if (isFetching) return <ScreenLoader />

  return (
    <ListWrapper length={bookmarkedGasStations.length}>
      {bookmarkedGasStations && bookmarkedGasStations.map(({
        address,
        bookmarks,
        cep,
        city,
        cnpj,
        complement,
        fantasy_name: fantasyName,
        geo_location: geoLocation,
        id,
        neighborhood,
        priceFuels,
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
          complement={complement}
          fantasyName={fantasyName}
          geoLocation={geoLocation}
          key={id}
          id={id}
          neighborhood={neighborhood}
          priceFuels={priceFuels}
          ratings={ratings}
          stateName={state.name}
        />
      ))}
      {!bookmarkedGasStations.length && (
        <Block>
          <Paragraph color={{ type: 'grayscale', position: 4 }}>Não foi encontrado nenhum posto de gasolina</Paragraph>
        </Block>
      )}
    </ListWrapper>
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

const mapStateToProps = ({ gasStation: { bookmarkedGasStations, isFetching } }) => ({
  bookmarkedGasStations,
  isFetching,
})
const mapDispatchToProps = dispatch => bindActionCreators(GasStationActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListBookmarkedGasStations)
