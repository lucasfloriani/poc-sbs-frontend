import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import { media } from '@theme'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as AuthActions } from '@store/ducks/auth'
import { Creators as GasStationActions } from '@store/ducks/gasStation'
import { Creators as StateActions } from '@store/ducks/state'
import orderType from '@enums/orderType'
import paymentType from '@enums/paymentType'
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
  fuelTypeName,
  isFetchingGasStation,
  isFetchingLocation,
  isFetchingStates,
  onSubmit,
  states,
  statesRequest,
  userLocation,
  userLocationRequest,
}) => {
  const [showFields, setShowFields] = useState(false)
  useEffect(() => {
    statesRequest()
    userLocationRequest()
  }, [])
  if (isFetchingGasStation || isFetchingLocation || isFetchingStates) return <ContentLoader />

  return (
    <Formik
      initialValues={{
        name: '',
        state: userLocation.stateID || '',
        city: userLocation.cityID || '',
        orderType: '',
        paymentType: '',
        minPrice: '',
        maxPrice: '',
        rating: 0,
      }}
      onSubmit={(filterValues) => {
        onSubmit({ ...filterValues, fuelType: fuelTypeName })
      }}
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
                  <Heading color={{ type: 'grayscale', position: 4 }} hoverColor={{ type: 'grayscale', position: 4 }}>
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
                  disabled={isFetchingGasStation || isFetchingLocation || isFetchingStates}
                >
                  Limpar
                </Button>
                <Button
                  type="submit"
                  fontSize="small"
                  disabled={isFetchingGasStation || isFetchingLocation || isFetchingStates}
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
  fuelTypeName: PropTypes.string,
  isFetchingGasStation: PropTypes.bool.isRequired,
  isFetchingLocation: PropTypes.bool.isRequired,
  isFetchingStates: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  states: PropTypes.array.isRequired,
  userLocation: PropTypes.object.isRequired,
}

const mapStateToProps = ({
  auth: { fuelTypeName, userLocation, isFetchingLocation },
  city: { cities },
  gasStation: { isFetching: isFetchingGasStation },
  state: { isFetching: isFetchingStates, states },
}) => ({
  cities,
  fuelTypeName,
  isFetchingGasStation,
  isFetchingLocation,
  isFetchingStates,
  states,
  userLocation,
})
const mapDispatchToProps = dispatch => bindActionCreators({
  ...AuthActions,
  ...GasStationActions,
  ...StateActions,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FilterGasStation)
