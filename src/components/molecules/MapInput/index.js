import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Map from 'pigeon-maps'
import Draggable from 'pigeon-draggable'
import mapPin from '@atoms/Icon/icons/mapPin.svg'
import Grid from '@atoms/Grid'
import Error from '@molecules/Error'

const MapInput = ({
  error, setValue, value, zoomValue,
}) => {
  const [dragAnchor, setDragAnchor] = useState(value)
  const [center, setCenter] = useState(value)
  const [zoom, setZoom] = useState(zoomValue)

  useEffect(() => {
    setDragAnchor(value)
    setCenter(value)
  }, [value])

  return (
    <Grid>
      <Map
        center={center}
        zoom={zoom}
        onBoundsChanged={(bounds) => {
          setCenter(bounds.center)
          setZoom(bounds.zoom)
        }}
        height={400}
      >
        <Draggable
          anchor={dragAnchor}
          offset={[25, 50]}
          onDragEnd={(anchor) => {
            setDragAnchor(anchor)
            setValue(anchor)
          }}
        >
          <img alt="Map pin" src={mapPin} width={50} height={50} />
        </Draggable>
      </Map>
      {error && <Error>{error}</Error>}
    </Grid>
  )
}

MapInput.propTypes = {
  error: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired,
  zoomValue: PropTypes.number.isRequired,
}

MapInput.defaultProps = {
  value: [-26.244383377008926, -49.384092876981356],
  zoomValue: 16,
}

export default MapInput
