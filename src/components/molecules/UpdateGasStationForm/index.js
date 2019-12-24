import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { isCNPJ } from 'brazilian-values'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FieldWrapper } from './style'
import { Creators as GasStationActions } from '@store/ducks/gasStation'
import Button from '@atoms/Button'
import Block from '@atoms/Block'
import Form from '@molecules/Form'
import Heading from '@atoms/Heading'
import Grid from '@atoms/Grid'
import Icon from '@atoms/Icon'
import Select from '@atoms/Select'
import Text from '@atoms/Text'
import CitySelect from '@molecules/CitySelect'
import ContentLoader from '@molecules/ContentLoader'
import MapInput from '@molecules/MapInput'
import StateSelect from '@molecules/StateSelect'

const UpdateGasStationForm = ({
  gasStation, gasStationID, getGasStationRequest, isFetching, updateGasStationRequest,
}) => {
  useEffect(() => { getGasStationRequest(gasStationID) }, [gasStationID, getGasStationRequest])
  if (isFetching) return <ContentLoader />

  const geoLocation = gasStation.geo_location
    ? gasStation.geo_location.split(',').map(value => parseFloat(value))
    : [-26.244383377008926, -49.384092876981356]

  return (
    <Formik
      initialValues={{
        id: gasStationID,
        cnpj: gasStation.cnpj,
        business_name: gasStation.business_name,
        fantasy_name: gasStation.fantasy_name,
        state_registration: gasStation.state_registration,
        anp: gasStation.anp,
        status: gasStation.status,
        cep: gasStation.cep,
        address: gasStation.address,
        complement: gasStation.complement,
        neighborhood: gasStation.neighborhood,
        geo_location: geoLocation,
        city_id: gasStation.city_id,
        state_id: gasStation.state_id,
      }}
      onSubmit={(values) => {
        const filtredValues = { ...values, geo_location: values.geo_location.join(',') }
        updateGasStationRequest(filtredValues)
      }}
      validationSchema={
        Yup.object().shape({
          id: Yup.string()
            .typeError('Identificador precisa ser um texto')
            .required('Identificador do posto é obrigatório'),
          cnpj: Yup.string()
            .typeError('CNPJ precisa ser um texto')
            .matches(/[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}-?[0-9]{2}/, 'CNPJ é inválido')
            .length(18, 'CNPJ é inválido')
            .test('cnpj', 'CNPJ é inválido', value => value && isCNPJ(value))
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
          status: Yup.string()
            .typeError('Status precisa ser um texto')
            .oneOf(['active', 'inactive'], 'Selecione um dos valores da lista')
            .required('Campo status é obrigatório'),
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
    >
      {({
        values,
        dirty,
        touched,
        errors,
        handleBlur,
        handleChange,
        handleReset,
        handleSubmit,
        setFieldValue,
      }) => {
        const commomEvents = { onChange: handleChange, onBlur: handleBlur, onFocus: handleBlur }

        return (
          <Form
            onSubmit={handleSubmit}
            header={(
              <Block backgroundColor={{ type: 'primary', position: 0 }}>
                <Heading color={{ type: 'grayscale', position: 4 }} hoverColor={{ type: 'grayscale', position: 4 }}>
                  Atualizar Posto
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
                    Atualizar
                  </Button>
                </Grid>
              </Block>
            )}
          >
            <FieldWrapper>
              <Text
                maskType="CNPJ"
                id="cnpj"
                name="cnpj"
                labelTitle="CNPJ"
                error={touched.cnpj && errors.cnpj}
                active={touched.cnpj || values.cnpj !== ''}
                value={values.cnpj}
                required
                {...commomEvents}
              />
              <Text
                id="business_name"
                name="business_name"
                labelTitle="Razão Social"
                error={touched.business_name && errors.business_name}
                active={touched.business_name || values.business_name !== ''}
                value={values.business_name}
                required
                {...commomEvents}
              />
              <Text
                id="fantasy_name"
                name="fantasy_name"
                labelTitle="Nome Fantasia"
                error={touched.fantasy_name && errors.fantasy_name}
                active={touched.fantasy_name || values.fantasy_name !== ''}
                value={values.fantasy_name}
                required
                {...commomEvents}
              />
              <Text
                id="state_registration"
                name="state_registration"
                labelTitle="Registro Estadual"
                error={touched.state_registration && errors.state_registration}
                active={touched.state_registration || values.state_registration !== ''}
                value={values.state_registration}
                required
                {...commomEvents}
              />
              <Text
                id="anp"
                name="anp"
                labelTitle="ANP"
                error={touched.anp && errors.anp}
                active={touched.anp || values.anp !== ''}
                value={values.anp}
                required
                {...commomEvents}
              />
              <Select
                options={[['Ativo', 'active'], ['Inativo', 'inactive']]}
                id="status"
                name="status"
                labelTitle="Status"
                error={touched.status && errors.status}
                active={touched.status || values.status !== ''}
                value={values.status}
                required
                {...commomEvents}
              />
              <Text
                maskType="CEP"
                id="cep"
                name="cep"
                labelTitle="CEP"
                error={touched.cep && errors.cep}
                active={touched.cep || values.cep !== ''}
                value={values.cep}
                {...commomEvents}
              />
              <Text
                id="address"
                name="address"
                labelTitle="Endereço"
                error={touched.address && errors.address}
                active={touched.address || values.address !== ''}
                value={values.address}
                required
                {...commomEvents}
              />
              <Text
                id="complement"
                name="complement"
                labelTitle="Complemento"
                error={touched.complement && errors.complement}
                active={touched.complement || values.complement !== ''}
                value={values.complement}
                required
                {...commomEvents}
              />
              <Text
                id="neighborhood"
                name="neighborhood"
                labelTitle="Bairro"
                error={touched.neighborhood && errors.neighborhood}
                active={touched.neighborhood || values.neighborhood !== ''}
                value={values.neighborhood}
                required
                {...commomEvents}
              />
              <StateSelect
                id="state_id"
                name="state_id"
                labelTitle="Estado"
                error={touched.state_id && errors.state_id}
                active={touched.state_id || values.state_id !== ''}
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
                active={touched.city_id || values.city_id !== ''}
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
                  Selecione a localização do posto arrastando o icone
                  <Icon name="MapPin" />
                </Heading>
                <MapInput
                  value={values.geo_location}
                  error={touched.geo_location && errors.geo_location}
                  setValue={value => setFieldValue('geo_location', value)}
                />
              </Grid>
            </FieldWrapper>
          </Form>
        )
      }}
    </Formik>
  )
}

UpdateGasStationForm.propTypes = {
  gasStation: PropTypes.object.isRequired,
  gasStationID: PropTypes.string.isRequired,
  getGasStationRequest: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  updateGasStationRequest: PropTypes.func.isRequired,
}

const mapStateToProps = ({ gasStation: { gasStation, isFetching } }) => ({ gasStation, isFetching })
const mapDispatchToProps = dispatch => bindActionCreators(GasStationActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UpdateGasStationForm)
