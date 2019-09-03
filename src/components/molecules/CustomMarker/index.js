import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import paymentType from '@enums/paymentType'
import { Grid, Paragraph } from 'components'
import { Marker, FuelCardInfo, Title } from './styled'

const CustomMarker = ({
  fuelTypeName, left, name, prices, style, top, ...props
}) => {
  const initialValue = Object.values(paymentType).reduce((acc, type) => ({ ...acc, [type]: '-----' }), {})
  const onlySelectedFuelType = prices.filter(priceFuel => priceFuel.fuelType.name === fuelTypeName)
  const priceFuelValues = onlySelectedFuelType.reduce((acc, priceFuel) => {
    return Object.values(paymentType).includes(priceFuel.paymentType.name)
      ? { ...acc, [priceFuel.paymentType.name]: priceFuel.price }
      : acc
  }, initialValue)

  return (
    <div
      style={{
        height: 94,
        left,
        position: 'absolute',
        top,
        width: 210,
        ...(style || {}),
      }}
    >
      <Marker padding="extraSmall" {...props}>
        <Grid gap="4px">
          <Title level={4} fontSize="small">{name}</Title>
          <Paragraph>{fuelTypeName}</Paragraph>
          <Grid gap="3px" column="1fr 1fr 1fr">
            {Object.entries(priceFuelValues).map(([key, value]) => (
              <FuelCardInfo backgroundColor={{ type: 'grayscale', position: 1 }} padding="small" key={key}>
                <Paragraph align="center" color={{ type: 'grayscale', position: 4 }}>{key}</Paragraph>
                <Paragraph align="center" color={{ type: 'grayscale', position: 4 }}>
                  {value !== '-----' ? `R$ ${value.replace('.', ',')}` : value}
                </Paragraph>
              </FuelCardInfo>
            ))}
          </Grid>
        </Grid>
      </Marker>
    </div>
  )
}

CustomMarker.propTypes = {
  left: PropTypes.any,
  name: PropTypes.string.isRequired,
  prices: PropTypes.array.isRequired,
  style: PropTypes.any,
  top: PropTypes.any,
}

const mapStateToProps = ({ auth: { fuelTypeName } }) => ({ fuelTypeName })

export default connect(mapStateToProps)(CustomMarker)
