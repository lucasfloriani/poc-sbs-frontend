import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import { media } from '@theme'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as GasStationActions } from '@store/ducks/gasStation'
import { Creators as AuthActions } from '@store/ducks/auth'
import orderType from '@enums/orderType'
import paymentType from '@enums/paymentType'
import fuelType from '@enums/fuelType'
import {
  Block,
  Button,
  CitySelect,
  ContentLoader,
  Flex,
  Form,
  Heading,
  Grid,
  BadgeIcon,
  Rating,
  Select,
  Text,
} from 'components'

const WrapperForm = styled(({ ...props }) => <Grid column="1fr 1fr 1fr" {...props} />)`
  ${media.lessThan('small')`
    grid-template-columns: 1fr;
  `}
`

const FilterGasStation = ({
  gasStationsRequest,
  gasStationIsFetching,
  locationIsFetching,
  states,
  updateFuelType,
  userLocation,
  userLocationRequest,
}) => {
  const [showFields, setShowFields] = useState(false)
  useEffect(() => { userLocationRequest() }, [])
  if (gasStationIsFetching || locationIsFetching) return <ContentLoader />

  return (
    <Formik
      initialValues={{
        name: '',
        state: userLocation.stateID || '',
        city: userLocation.cityID || '',
        orderType: '',
        paymentType: '',
        fuelType: '',
        minPrice: '',
        maxPrice: '',
        rating: 0,
      }}
      onSubmit={filterValues => gasStationsRequest(filterValues)}
      validationSchema={
        Yup.object().shape({
          name: Yup.string().typeError('Nome precisa ser um texto'),
          state: Yup.string().typeError('Estado precisa ser um texto'),
          city: Yup.string().typeError('Cidade precisa ser um texto'),
          orderType: Yup.string()
            .typeError('Tipo de ordenação precisa ser um texto')
            .oneOf(Object.keys(orderType), 'Selecione um dos tipos de ordenação corretamente'),
          paymentType: Yup.string()
            .typeError('Tipo de pagamento precisa ser um texto')
            .oneOf(Object.values(paymentType), 'Selecione um dos tipos de pagamento corretamente'),
          fuelType: Yup.string()
            .typeError('Tipo de combustível precisa ser um texto')
            .oneOf(Object.values(fuelType), 'Selecione um dos tipos de combustível corretamente'),
          minPrice: Yup.number().typeError('Preço mínimo precisa ser um número'),
          maxPrice: Yup.number().typeError('Preço máximo precisa ser um número'),
          rating: Yup.number()
            .typeError('Avaliação precisa ser um número')
            .integer('Avaliação precisa ser um número inteiro'),
        })
      }
      render={({
        values,
        touched,
        errors,
        handleBlur,
        handleChange,
        handleReset,
        handleSubmit,
        setFieldValue,
      }) => {
        const commomEvents = {
          onChange: handleChange,
          onBlur: handleBlur,
          onFocus: handleBlur,
        }

        return (
          <Form
            onSubmit={handleSubmit}
            header={(
              <Block backgroundColor={{ type: 'primary', position: 0 }}>
                <Flex valign="center" halign="space-between">
                  <Heading
                    color={{ type: 'grayscale', position: 4 }}
                    hoverColor={{ type: 'grayscale', position: 4 }}
                  >
                    Filtro
                  </Heading>
                  <BadgeIcon
                    icon="downArrow"
                    onClick={() => {
                      setShowFields(!showFields)
                      console.log(showFields)
                    }}
                  />
                </Flex>
              </Block>
            )}
            style={{ margin: 'auto' }}
          >
            <Grid style={{ display: showFields ? 'grid' : 'none' }}>
              <WrapperForm>
                <Text
                  id="name"
                  name="name"
                  labelTitle="Nome"
                  error={touched.name && errors.name}
                  active={touched.name}
                  value={values.name}
                  required
                  {...commomEvents}
                />
                <Select
                  options={states}
                  id="state"
                  name="state"
                  labelTitle="Estado"
                  error={touched.state && errors.state}
                  active={touched.state || values.state !== ''}
                  value={values.state}
                  onChange={(e) => {
                    setFieldValue('city', '')
                    handleChange(e)
                  }}
                  onBlur={handleBlur}
                  onFocus={handleBlur}
                />
                {values.state && (
                  <CitySelect
                    id="city"
                    name="city"
                    labelTitle="Cidade"
                    error={touched.city && errors.city}
                    active={touched.name || values.city !== ''}
                    value={values.city}
                    stateID={values.state}
                    initialStateID={userLocation.stateID}
                    {...commomEvents}
                  />
                )}
                <Select
                  options={Object.entries(orderType).map(([value, id]) => [id, value])}
                  id="orderType"
                  name="orderType"
                  labelTitle="Tipo de ordenação"
                  error={touched.orderType && errors.orderType}
                  active={touched.orderType}
                  value={values.orderType}
                  {...commomEvents}
                />
                <Select
                  options={Object.entries(paymentType).map(type => [type[1], type[1]])}
                  id="paymentType"
                  name="paymentType"
                  labelTitle="Tipo de pagamento"
                  error={touched.paymentType && errors.paymentType}
                  active={touched.paymentType}
                  value={values.paymentType}
                  {...commomEvents}
                />
                <Select
                  options={Object.entries(fuelType).map(type => [type[1], type[1]])}
                  id="fuelType"
                  name="fuelType"
                  labelTitle="Tipo de combustível"
                  error={touched.fuelType && errors.fuelType}
                  active={touched.fuelType}
                  value={values.fuelType}
                  {...commomEvents}
                  onChange={(e) => {
                    handleChange(e)
                    updateFuelType(e.currentTarget.value)
                  }}
                />
                <Text
                  type="number"
                  id="minPrice"
                  name="minPrice"
                  labelTitle="Preço mínimo"
                  error={touched.minPrice && errors.minPrice}
                  active={touched.minPrice}
                  value={values.minPrice}
                  required
                  {...commomEvents}
                />
                <Text
                  type="number"
                  id="maxPrice"
                  name="maxPrice"
                  labelTitle="Preço máximo"
                  error={touched.maxPrice && errors.maxPrice}
                  active={touched.maxPrice}
                  value={values.maxPrice}
                  required
                  {...commomEvents}
                />
                <Rating
                  labelTitle="Rating"
                  name="rating"
                  onChange={value => setFieldValue('rating', value)}
                  value={values.rating}
                />
              </WrapperForm>
              <Grid column="1fr 1fr">
                <Button
                  type="reset"
                  fontSize="small"
                  onClick={handleReset}
                  disabled={gasStationIsFetching || locationIsFetching}
                >
                  Limpar
                </Button>
                <Button
                  type="submit"
                  fontSize="small"
                  disabled={gasStationIsFetching || locationIsFetching}
                >
                  Filtrar
                </Button>
              </Grid>
            </Grid>
          </Form>
        )
      }}
    />
  )
}

FilterGasStation.propTypes = {
  cities: PropTypes.array.isRequired,
  gasStationIsFetching: PropTypes.bool.isRequired,
  locationIsFetching: PropTypes.bool.isRequired,
  gasStationsRequest: PropTypes.func.isRequired,
  states: PropTypes.array.isRequired,
  updateFuelType: PropTypes.func.isRequired,
  userLocation: PropTypes.object.isRequired,
}

const mapStateToProps = ({
  auth: { userLocation, isFetching: locationIsFetching },
  city: { cities },
  gasStation: { isFetching: gasStationIsFetching },
  state: { states },
}) => ({
  cities,
  gasStationIsFetching,
  locationIsFetching,
  states,
  userLocation,
})
const mapDispatchToProps = dispatch => bindActionCreators({ ...GasStationActions, ...AuthActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FilterGasStation)
