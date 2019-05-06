import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import {
  cleanAndFormatFields,
  FILE_FIELD,
  ID_FIELD,
  STRING_FIELD,
} from '@helpers/object'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as AlertActions } from '@store/ducks/alert'
import QueryTypes from '@enums/queryTypes'
import {
  Button,
  Block,
  Flex,
  Form,
  Grid,
  Heading,
  ImageInput,
  Text,
} from 'components'

const GasStationForm = ({
  createMultiErrorAlert,
  createSuccessAlert,
  initialValues,
  onSubmit,
  queryType,
}) => {
  const valuesType = {
    title: STRING_FIELD,
    cover: FILE_FIELD,
    user: ID_FIELD,
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        const formatedValues = cleanAndFormatFields(values, valuesType)
        onSubmit(formatedValues)
          .then(() => createSuccessAlert(`Album ${queryType === QueryTypes.Create ? 'criado' : 'atualizado'} com sucesso`))
          .catch(error => createMultiErrorAlert(formatErrorMessage(error)))
          .finally(() => setSubmitting(false))
      }}
      validationSchema={
        Yup.object().shape({
          cover: Yup.object().shape({
            name: Yup.string().typeError('Nome da foto não informada'),
            size: Yup.number().typeError('Não foi possivel calcular o tamanho da foto'),
            mimetype: Yup.string().matches(/image\/.*/, 'Tipo do arquivo não suportado'),
            content: Yup.string().required('Campo da capa é obrigatório'),
          }),
          title: Yup.string()
            .typeError('Título precisa ser um texto')
            .required('Campo do título do album é obrigatório'),
          user: Yup.string()
            .typeError('Identificação do usuário está incorreta')
            .required('Identificação do usuário está incorreta'),
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
                <Heading>
                  {`${queryType === QueryTypes.Create ? 'Criar' : 'Atualizar'} Album`}
                </Heading>
              </Block>
            )}
            footer={(
              <Block
                as="div"
                fontSize="small"
                backgroundColor={{ type: 'primary', position: 0 }}
              >
                <Flex halign="flex-end">
                  {queryType === QueryTypes.Create && (
                    <Button
                      type="reset"
                      fontSize="small"
                      onClick={handleReset}
                      disabled={!dirty || isSubmitting}
                    >
                      Limpar
                    </Button>
                  )}
                  <Button type="submit" fontSize="small" disabled={!dirty || isSubmitting}>
                    {`${queryType === QueryTypes.Create ? 'Criar' : 'Atualizar'}`}
                  </Button>
                </Flex>
              </Block>
            )}
          >
            <Grid valign="flex-start">
              <ImageInput
                accept="image/*"
                height="150px"
                onDropCallback={obj => setFieldValue('cover', obj)}
                image={values.cover}
                error={errors.cover}
              />
              <Text
                id="title"
                name="title"
                labelTitle="Título"
                error={touched.title && errors.title}
                active={touched.title || values.title !== ''}
                value={values.title}
                required
                {...commomEvents}
              />
            </Grid>
          </Form>
        )
      }}
    />
  )
}

GasStationForm.propTypes = {
  createMultiErrorAlert: PropTypes.func.isRequired,
  createSuccessAlert: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    attachment:
      PropTypes.oneOfType([
        PropTypes.shape({
          name: PropTypes.string,
          size: PropTypes.number,
          mimetype: PropTypes.string,
          content: PropTypes.string,
        }),
        PropTypes.string,
      ]),
    content: PropTypes.string,
    user: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  queryType: PropTypes.oneOf(Object.values(QueryTypes)),
}

const mapDispatchToProps = dispatch => bindActionCreators(AlertActions, dispatch)

export default connect(null, mapDispatchToProps)(GasStationForm)
