import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { isCPF } from 'brazilian-values'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as AuthActions } from '@store/ducks/auth'
import Block from '@atoms/Block'
import Button from '@atoms/Button'
import Form from '@molecules/Form'
import Grid from '@atoms/Grid'
import Heading from '@atoms/Heading'
import Text from '@atoms/Text'

const UserRegisterForm = ({ isFetching, user, updateUserRequest }) => {
  return (
    <Formik
      initialValues={{
        id: user.id,
        name: user.name,
        cpf: user.cpf,
      }}
      onSubmit={updateUserRequest}
      validationSchema={
        Yup.object().shape({
          name: Yup.string()
            .typeError('Nome precisa ser um texto')
            .required('Campo nome é obrigatório'),
          cpf: Yup.string()
            .typeError('CPF precisa ser um texto')
            .matches(/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}/, 'CPF é inválido')
            .length(14, 'CPF é inválido')
            .test('cpf', 'CPF é inválido', value => value && isCPF(value))
            .required('Campo cpf é obrigatório'),
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
      }) => {
        const commomEvents = { onChange: handleChange, onBlur: handleBlur, onFocus: handleBlur }

        return (
          <Form
            onSubmit={handleSubmit}
            header={(
              <Block backgroundColor={{ type: 'primary', position: 0 }}>
                <Heading color={{ type: 'grayscale', position: 4 }} hoverColor={{ type: 'grayscale', position: 4 }}>
                  Atualizar Usuário
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
            <Grid valign="flex-start">
              <Text
                id="name"
                name="name"
                labelTitle="Nome"
                error={touched.name && errors.name}
                active={touched.name || values.name !== ''}
                value={values.name}
                required
                {...commomEvents}
              />
              <Text
                id="cpf"
                name="cpf"
                labelTitle="CPF"
                maskType="CPF"
                error={touched.cpf && errors.cpf}
                active={touched.cpf || values.cpf !== ''}
                value={values.cpf}
                required
                {...commomEvents}
              />
            </Grid>
          </Form>
        )
      }}
    </Formik>
  )
}

UserRegisterForm.propTypes = {
  updateUserRequest: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
}

const mapStateToProps = ({ auth: { isFetching, user } }) => ({ isFetching, user })
const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserRegisterForm)
