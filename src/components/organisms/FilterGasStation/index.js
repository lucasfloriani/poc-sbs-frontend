import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { WrapperForm } from './style'
import { Creators as AuthActions } from '@store/ducks/auth'
import { Creators as StateActions } from '@store/ducks/state'
import orderType from '@enums/orderType'
import paymentType from '@enums/paymentType'
import Block from '@atoms/Block'
import Button from '@atoms/Button'
import Flex from '@atoms/Flex'
import Form from '@molecules/Form'
import Heading from '@atoms/Heading'
import Grid from '@atoms/Grid'
import Rating from '@atoms/Rating'
import Select from '@atoms/Select'
import Text from '@atoms/Text'
import ContentLoader from '@molecules/ContentLoader'
import BadgeIcon from '@molecules/BadgeIcon'

const schema = Yup.object().shape({
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

const FilterGasStation = ({ onSubmit }) => {
  const dispatch = useDispatch()
  const [showFields, setShowFields] = useState(false)

  useEffect(() => {
    dispatch(StateActions.statesRequest())
    dispatch(AuthActions.userLocationRequest())
  }, [dispatch])

  const {
    isFetchingGasStation,
    isFetchingLocation,
    isFetchingStates,
    states,
    cities,
    fuelTypeName,
    userLocation,
  } = useSelector(store => ({
    isFetchingGasStation: store.gasStation.isFetching,
    isFetchingLocation: store.auth.isFetchingLocation,
    isFetchingStates: store.state.isFetching,
    userLocation: store.auth.userLocation,
    fuelTypeName: store.auth.fuelTypeName,
    states: store.state.states,
    cities: store.city.cities,
  }))

  const {
    dirty,
    errors,
    handleBlur,
    handleReset,
    handleChange,
    handleSubmit,
    setFieldValue,
    touched,
    values,
  } = useFormik({
    initialValues: {
      name: '',
      state: userLocation.stateID || '',
      city: userLocation.cityID || '',
      orderType: '',
      paymentType: '',
      minPrice: '',
      maxPrice: '',
      rating: 0,
    },
    validationSchema: schema,
    onSubmit: values => onSubmit({ ...values, fuelType: fuelTypeName }),
  })
  const commomEvents = { onChange: handleChange, onBlur: handleBlur, onFocus: handleBlur }

  if (isFetchingGasStation || isFetchingLocation || isFetchingStates) return <ContentLoader />

  return (
    <Form
      onSubmit={handleSubmit}
      header={(
        <Block backgroundColor={{ type: 'primary', position: 0 }}>
          <Flex valign="center" halign="space-between">
            <Heading color={{ type: 'grayscale', position: 4 }} hoverColor={{ type: 'grayscale', position: 4 }}>
              Filtro
            </Heading>
            <BadgeIcon name="DownArrow" onClick={() => setShowFields(!showFields)} />
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
            options={states.map(({ id, name }) => [name, id])}
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
          <Select
            options={cities.map(({ id, name }) => [name, id])}
            id="city"
            name="city"
            labelTitle="Cidade"
            error={touched.city && errors.city}
            active={touched.city || values.city !== ''}
            value={values.city}
            initialStateID={userLocation.stateID}
            {...commomEvents}
          />
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
            disabled={isFetchingGasStation || isFetchingLocation || isFetchingStates || !dirty}
          >
            Limpar
          </Button>
          <Button
            type="submit"
            fontSize="small"
            disabled={isFetchingGasStation || isFetchingLocation || isFetchingStates || !dirty}
          >
            Filtrar
          </Button>
        </Grid>
      </Grid>
    </Form>
  )
}

FilterGasStation.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}


export default FilterGasStation
