import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as PriceFuelActions } from '@store/ducks/priceFuel'
import {
  Button,
  Block,
  FuelTypeSelect,
  Heading,
  Form,
  Grid,
  PaymentTypeSelect,
  Text,
} from 'components'
import { FieldWrapper } from './style'

const CreatePriceFuelForm = ({ createPriceFuelRequest, gasStationID, isFetching }) => (
  <Formik
    initialValues={{
      price: '',
      gas_station_id: gasStationID,
      payment_type_id: '',
      fuel_type_id: '',
    }}
    onSubmit={createPriceFuelRequest}
    validationSchema={
      Yup.object().shape({
        price: Yup.number()
          .typeError('Preço precisa ser um número')
          .positive('Preço precisa ser acima de 0,00')
          .required('Campo preço é obrigatório'),
        gas_station_id: Yup.string()
          .typeError('Identificador do posto não encontrado')
          .required('Identificador do posto não encontrado'),
        payment_type_id: Yup.string()
          .typeError('Tipo de pagamento precisa ser um texto')
          .required('Campo do tipo de pagamento é obrigatório'),
        fuel_type_id: Yup.string()
          .typeError('Tipo de combustível precisa ser um texto')
          .required('Campo do tipo de combustível é obrigatório'),
      })
    }
    render={({
      values,
      dirty,
      touched,
      errors,
      handleBlur,
      handleChange,
      handleReset,
      handleSubmit,
    }) => {
      const commomEvents = { onChange: handleChange, onBlur: handleBlur, onFocus: handleBlur }

      return (
        <Form
          onSubmit={handleSubmit}
          header={(
            <Block backgroundColor={{ type: 'primary', position: 0 }}>
              <Heading color={{ type: 'grayscale', position: 4 }} hoverColor={{ type: 'grayscale', position: 4 }}>
                Criar Produto
              </Heading>
            </Block>
          )}
          footer={(
            <Block as="div" fontSize="small" backgroundColor={{ type: 'primary', position: 0 }}>
              <Grid halign="flex-end" column="auto auto">
                <Button type="reset" fontSize="small" onClick={handleReset} disabled={!dirty || isFetching}>
                  Limpar
                </Button>
                <Button type="submit" fontSize="small" disabled={!dirty || isFetching}>
                  Criar
                </Button>
              </Grid>
            </Block>
          )}
        >
          <FieldWrapper>
            <Text
              type="number"
              id="price"
              name="price"
              labelTitle="Preço"
              error={touched.price && errors.price}
              active={touched.price}
              value={values.price}
              required
              {...commomEvents}
            />
            <PaymentTypeSelect
              id="payment_type_id"
              name="payment_type_id"
              labelTitle="Tipo de Pagamento"
              error={touched.payment_type_id && errors.payment_type_id}
              active={touched.payment_type_id}
              value={values.payment_type_id}
              required
              {...commomEvents}
            />
            <FuelTypeSelect
              id="fuel_type_id"
              name="fuel_type_id"
              labelTitle="Tipo de combustivel"
              error={touched.fuel_type_id && errors.fuel_type_id}
              active={touched.fuel_type_id}
              value={values.fuel_type_id}
              required
              {...commomEvents}
            />
          </FieldWrapper>
        </Form>
      )
    }}
  />
)

CreatePriceFuelForm.propTypes = {
  createPriceFuelRequest: PropTypes.func.isRequired,
  gasStationID: PropTypes.string.isRequired,
}

const mapStateToProps = ({ auth: { user }, priceFuel: { isFetching } }) => ({ gasStationID: `${user.id}`, isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(PriceFuelActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CreatePriceFuelForm)
