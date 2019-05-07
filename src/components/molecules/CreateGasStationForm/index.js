import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as GasStationActions } from '@store/ducks/gasStation'
import {
  Button,
  Block,
  CitySelect,
  Heading,
  Form,
  Grid,
  MapInput,
  StateSelect,
  Text,
} from 'components'

const CreateGasStationForm = ({ createGasStationRequest }) => (
  <Formik
    initialValues={{
      email: '',
      password: '',
      cnpj: '',
      business_name: '',
      fantasy_name: '',
      state_registration: '',
      anp: '',
      cep: '',
      address: '',
      complement: '',
      neighborhood: '',
      geo_location: [-26.244383377008926, -49.384092876981356],
      city_id: '',
      state_id: '',
    }}
    onSubmit={(values, { setSubmitting }) => {
      const filtredValues = {
        ...values,
        geo_location: values.geo_location.join(','),
      }
      createGasStationRequest(filtredValues)
      setSubmitting(false)
    }}
    validationSchema={
      Yup.object().shape({
        email: Yup.string()
          .typeError('E-mail precisa ser um texto')
          .email('E-mail é inválido')
          .required('Campo e-mail é obrigatório'),
        password: Yup.string()
          .typeError('Senha precisa ser um texto')
          .required('Campo senha é obrigatório'),
        cnpj: Yup.string()
          .typeError('CNPJ precisa ser um texto')
          .matches(/[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}-?[0-9]{2}/, 'CNPJ é inválido')
          .length(18, 'CNPJ é inválido')
          .required('Campo cnpj é obrigatório'),
        business_name: Yup.string()
          .typeError('Razão social precisa ser um texto')
          .required('Campo razão social é obrigatório'),
        fantasy_name: Yup.string()
          .typeError('Nome fantasia precisa ser um texto')
          .required('Campo nome fantasia é obrigatório'),
        state_registration: Yup.string()
          .typeError('Registro estadual precisa ser um texto')
          .required('Campo registro estadual é obrigatório'),
        anp: Yup.string()
          .typeError('ANP precisa ser um texto')
          .required('Campo anp é obrigatório'),
        cep: Yup.string()
          .typeError('CEP precisa ser um texto')
          .matches(/[0-9]{5}-[0-9]{3}/, 'CEP é inválido')
          .length(9, 'CEP é inválido')
          .required('Campo cep é obrigatório'),
        address: Yup.string()
          .typeError('Endereço precisa ser um texto')
          .required('Campo endereço é obrigatório'),
        complement: Yup.string()
          .typeError('Complemento precisa ser um texto')
          .required('Campo complemento é obrigatório'),
        neighborhood: Yup.string()
          .typeError('Bairro precisa ser um texto')
          .required('Campo bairro é obrigatório'),
        geo_location: Yup.array()
          .of(Yup.number().typeError('Localização informada é inválida'))
          .min(2, 'Localização informada é inválida')
          .max(2, 'Localização informada é inválida')
          .required('Campo localização é obrigatório'),
        city_id: Yup.string()
          .typeError('Cidade precisa ser um texto')
          .required('Campo cidade é obrigatório'),
        state_id: Yup.string()
          .typeError('Estado precisa ser um texto')
          .required('Campo estado é obrigatório'),
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
      isSubmitting,
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
              <Heading
                color={{ type: 'grayscale', position: 4 }}
                hoverColor={{ type: 'grayscale', position: 4 }}
              >
                Criar Posto
              </Heading>
            </Block>
          )}
          footer={(
            <Block
              as="div"
              fontSize="small"
              backgroundColor={{ type: 'primary', position: 0 }}
            >
              <Grid halign="flex-end" column="auto auto">
                <Button
                  type="reset"
                  fontSize="small"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Limpar
                </Button>
                <Button
                  type="submit"
                  fontSize="small"
                  disabled={!dirty || isSubmitting}
                >
                  Criar
                </Button>
              </Grid>
            </Block>
          )}
        >
          <Grid valign="flex-start" column="1fr 1fr 1fr">
            <Text
              type="email"
              id="email"
              name="email"
              labelTitle="E-mail"
              error={touched.email && errors.email}
              active={touched.email}
              value={values.email}
              required
              {...commomEvents}
            />
            <Text
              type="password"
              id="password"
              name="password"
              labelTitle="Senha"
              error={touched.password && errors.password}
              active={touched.password}
              value={values.password}
              required
              {...commomEvents}
            />
            <Text
              maskType="CNPJ"
              id="cnpj"
              name="cnpj"
              labelTitle="CNPJ"
              error={touched.cnpj && errors.cnpj}
              active={touched.cnpj}
              value={values.cnpj}
              {...commomEvents}
            />
            <Text
              id="business_name"
              name="business_name"
              labelTitle="Razão Social"
              error={touched.business_name && errors.business_name}
              active={touched.business_name}
              value={values.business_name}
              required
              {...commomEvents}
            />
            <Text
              id="fantasy_name"
              name="fantasy_name"
              labelTitle="Nome Fantasia"
              error={touched.fantasy_name && errors.fantasy_name}
              active={touched.fantasy_name}
              value={values.fantasy_name}
              required
              {...commomEvents}
            />
            <Text
              id="state_registration"
              name="state_registration"
              labelTitle="Registro Estadual"
              error={touched.state_registration && errors.state_registration}
              active={touched.state_registration}
              value={values.state_registration}
              required
              {...commomEvents}
            />
            <Text
              id="anp"
              name="anp"
              labelTitle="ANP"
              error={touched.anp && errors.anp}
              active={touched.anp}
              value={values.anp}
              required
              {...commomEvents}
            />
            <Text
              maskType="CEP"
              id="cep"
              name="cep"
              labelTitle="CEP"
              error={touched.cep && errors.cep}
              active={touched.cep}
              value={values.cep}
              {...commomEvents}
            />
            <Text
              id="address"
              name="address"
              labelTitle="Endereço"
              error={touched.address && errors.address}
              active={touched.address}
              value={values.address}
              required
              {...commomEvents}
            />
            <Text
              id="complement"
              name="complement"
              labelTitle="Complemento"
              error={touched.complement && errors.complement}
              active={touched.complement}
              value={values.complement}
              required
              {...commomEvents}
            />
            <Text
              id="neighborhood"
              name="neighborhood"
              labelTitle="Bairro"
              error={touched.neighborhood && errors.neighborhood}
              active={touched.neighborhood}
              value={values.neighborhood}
              required
              {...commomEvents}
            />
            <StateSelect
              id="state_id"
              name="state_id"
              labelTitle="Estado"
              error={touched.state_id && errors.state_id}
              active={touched.state_id}
              value={values.state_id}
              required
              {...commomEvents}
            />
            <CitySelect
              id="city_id"
              stateID={values.state_id}
              name="city_id"
              labelTitle="Cidade"
              error={touched.city_id && errors.city_id}
              active={touched.city_id}
              value={values.city_id}
              required
              {...commomEvents}
            />
            <Grid style={{ gridColumn: '1/-1' }}>
              <Heading
                color={{ type: 'grayscale', position: 0 }}
                fontSize="normal"
                hoverColor={{ type: 'grayscale', position: 0 }}
                level={3}
              >
                Selecione a localização do posto
              </Heading>
              <MapInput
                value={values.geo_location}
                error={touched.geo_location && errors.geo_location}
                setValue={value => setFieldValue('geo_location', value)}
              />
            </Grid>
          </Grid>
        </Form>
      )
    }}
  />
)

CreateGasStationForm.propTypes = {
  createGasStationRequest: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => bindActionCreators(GasStationActions, dispatch)

export default connect(null, mapDispatchToProps)(CreateGasStationForm)
