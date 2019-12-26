import React from 'react'
import PropTypes from 'prop-types'
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import CustomMarker from '@molecules/CustomMarker'

const MapPins = ({ pins = [], latitude, longitude }) => {
  const showDirections = (location) => {
    window.open(`http://maps.google.com/?saddr=${latitude},${longitude}&daddr=${location}&dirflg=d&f=d`)
  }

  return (
    <Map center={[latitude, longitude]} zoom={16} height={400} defaultWidth={600}>
      {pins.length !== 0 && pins.map((pin, index) => {
        const formatedLocation = pin.location.split(',').map(value => parseFloat(value))
        return (
          <CustomMarker
            anchor={formatedLocation}
            offset={[105, 102]}
            key={pin.location}
            payload={index + 1}
            name={pin.name}
            prices={pin.prices}
            onClick={() => showDirections(pin.location)}
          />
        )
      })}
      {latitude && longitude && <Marker anchor={[latitude, longitude]} />}
    </Map>
  )
}

MapPins.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  pins: PropTypes.arrayOf(
    PropTypes.shape({
      location: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
}

export default MapPins
