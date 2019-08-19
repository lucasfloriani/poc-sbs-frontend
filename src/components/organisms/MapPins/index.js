import React from 'react'
import PropTypes from 'prop-types'
import Map from 'pigeon-maps'
import { usePosition } from 'use-position'
import { CustomMarker } from 'components'

const DivMarker = ({
  left, top, style, children, ...props
}) => (
  <div
    style={{
      position: 'absolute',
      left,
      top,
      width: 210,
      height: 94,
      ...(style || {}),
    }}
    {...props}
  >
    {children}
  </div>
)

const MapPins = ({ pins = [] }) => {
  const { latitude = -26.244383377008926, longitude = -49.384092876981356 } = usePosition()
  const showDirections = (location) => {
    window.open(`http://maps.google.com/?saddr=${latitude},${longitude}&daddr=${location}`)
  }

  return (
    <Map
      center={[latitude, longitude]}
      zoom={15}
      height={400}
      defaultWidth={600}
    >
      {pins.length !== 0 && pins.map((pin, index) => {
        const formatedLocation = pin.location.split(',').map(value => parseFloat(value))
        return (
          <DivMarker
            anchor={formatedLocation}
            offset={[105, 102]}
            key={pin.location}
            payload={index + 1}
          >
            <CustomMarker
              name={pin.name}
              prices={pin.prices}
              onClick={() => showDirections(pin.location)}
            />
          </DivMarker>
        )
      })}
    </Map>
  )
}

MapPins.propTypes = {
  pins: PropTypes.arrayOf(
    PropTypes.shape({
      location: PropTypes.string,
      name: PropTypes.string,
    })
  ),
}

export default MapPins
