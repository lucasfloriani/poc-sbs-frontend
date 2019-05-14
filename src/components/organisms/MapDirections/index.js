import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as GasStationActions } from '@store/ducks/gasStation'
import Marker from 'pigeon-marker'
import Map from 'pigeon-maps'
import {
  Block,
  Flex,
  Grid,
  Icon,
  Heading,
} from 'components'

const MapDirections = ({ clearGasStationLocation, gasStationLocation: { location, name } }) => {
  const formatedLocation = location.split(',').map(value => parseFloat(value))
  const [center, setCenter] = useState(formatedLocation)
  const [zoom, setZoom] = useState(15)
  const showDirections = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      const url = `http://maps.google.com/?saddr=${latitude},${longitude}&daddr=${location}`
      window.open(url)
    })
  }

  return (
    <Grid gap="0">
      <Block>
        <Flex halign="space-between" valign="center">
          <Heading
            color={{ type: 'grayscale', position: 4 }}
            hoverColor={{ type: 'grayscale', position: 4 }}
          >
            {name}
          </Heading>
          <Icon
            color={{ type: 'grayscale', position: 4 }}
            hoverColor={{ type: 'grayscale', position: 3 }}
            icon="clear"
            onClick={() => clearGasStationLocation()}
            size="extraLarge"
          />
        </Flex>
      </Block>
      <Map
        center={center}
        zoom={zoom}
        onBoundsChanged={(bounds) => {
          setCenter(bounds.center)
          setZoom(bounds.zoom)
        }}
        defaultWidth={600}
        height={400}
      >
        <Marker
          anchor={formatedLocation}
          payload={1}
          onClick={showDirections}
        />
      </Map>
    </Grid>
  )
}

MapDirections.propTypes = {
  clearGasStationLocation: PropTypes.func.isRequired,
  gasStationLocation: PropTypes.shape({
    location: PropTypes.string,
    name: PropTypes.string,
  }),
}

const mapDispatchToProps = dispatch => bindActionCreators(GasStationActions, dispatch)

export default connect(null, mapDispatchToProps)(MapDirections)
