import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as AuthActions } from '@store/ducks/auth'
import logo from '@public/img/logo.png'
import {
  Button,
  Form,
  Image,
  Link,
  Paragraph,
  Text,
} from 'components'

const FieldWrapper = styled.div`
  align-items: flex-start;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  justify-items: stretch;
  width: 400px;
`

const UserRegisterForm = ({ createUserRequest }) => (
  <Formik
    initialValues={{
      name: '',
      cpf: '',
      email: '',
      password: '',
    }}
    onSubmit={(values, { setSubmitting }) => {
      const {
        name, cpf, email, password,
      } = values
      createUserRequest(name, cpf, email, password)
      setSubmitting(false)
    }}
    validationSchema={
      Yup.object().shape({
        name: Yup.string()
          .typeError('Nome precisa ser um texto')
          .required('Campo nome é obrigatório'),
        cpf: Yup.string()
          .typeError('CPF precisa ser um texto')
          .matches(/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}/, 'CPF é inválido')
          .length(14, 'CPF é inválido')
          .required('Campo cpf é obrigatório'),
        email: Yup.string()
          .typeError('E-mail precisa ser um texto')
          .email('E-mail é inválido')
          .required('Campo e-mail é obrigatório'),
        password: Yup.string()
          .typeError('Senha precisa ser um texto')
          .required('Campo senha é obrigatório'),
      })
    }
    render={({
      values,
      dirty,
      touched,
      errors,
      handleBlur,
      handleChange,
      handleSubmit,
      isSubmitting,
    }) => {
      const commomEvents = {
        onChange: handleChange,
        onBlur: handleBlur,
        onFocus: handleBlur,
      }

      return (
        <Form onSubmit={handleSubmit} style={{ margin: 'auto', width: 'auto' }}>
          <FieldWrapper>
            <Image alt="POC SBS" src={logo} style={{ justifySelf: 'center' }} />
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
            <Text
              id="cpf"
              name="cpf"
              labelTitle="CPF"
              maskType="CPF"
              error={touched.cpf && errors.cpf}
              active={touched.cpf}
              value={values.cpf}
              required
              {...commomEvents}
            />
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
            <Link to="/">
              <Paragraph align="center">Voltar</Paragraph>
            </Link>
            <Button
              type="submit"
              fontSize="small"
              disabled={!dirty || isSubmitting}
            >
              Criar conta
            </Button>
          </FieldWrapper>
        </Form>
      )
    }}
  />
)

UserRegisterForm.propTypes = {
  createUserRequest: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch)

export default connect(null, mapDispatchToProps)(UserRegisterForm)
