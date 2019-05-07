import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as AuthActions } from '@store/ducks/auth'
import {
  Button,
  Block,
  CitySelect,
  ContentLoader,
  Heading,
  Form,
  Grid,
  StateSelect,
  Text,
} from 'components'

const UpdateGasStationForm = ({
  updateGasStationRequest, gasStation, gasStationID, getGasStationRequest, isFetching,
}) => {
  useEffect(() => { getGasStationRequest(gasStationID) }, [])
  if (isFetching) return (<ContentLoader />)
  console.log(gasStation)

  return (
    <Formik
      initialValues={{
        id: '',
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
        geo_location: '',
        city_id: '',
        state_id: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        updateGasStationRequest(values)
        setSubmitting(false)
      }}
      validationSchema={
        Yup.object().shape({
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
          stateRegistration: Yup.string()
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
          geo_location: Yup.string()
            .typeError('Localização precisa ser um texto')
            .matches(/^[-+]?([1-8]?d(.d+)?|90(.0+)?),s*[-+]?(180(.0+)?|((1[0-7]d)|([1-9]?d))(.d+)?)$/, 'Localização é inválida')
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
                  Atualizar Posto
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
                {...commomEvents}
              />
              {/* geo_location */}
            </Grid>
          </Form>
        )
      }}
    />
  )
}

UpdateGasStationForm.propTypes = {
  createUserRequest: PropTypes.func.isRequired,
}

const mapStateToProps = ({ gasStation: { gasStation, isFetching } }) => ({ gasStation, isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UpdateGasStationForm)
